"use client";

import { useState } from "react";
import { WEDDING } from "@/lib/constants";
import { sanitizeInput, isValidEmail } from "@/lib/utils";
import { EnvelopeConfirmedIcon } from "@/components/common/ThemeIcons";
import type { RSVPFormData, SubmitStatus } from "@/types";
import styles from "./RSVPForm.module.css";

/** Field-level validation errors */
interface FormErrors {
  fullName?: string;
  email?: string;
  attendance?: string;
}

function validate(data: RSVPFormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  } else if (data.fullName.trim().length < 2) {
    errors.fullName = "Name must be at least 2 characters.";
  }

  if (!data.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!isValidEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.attendance) {
    errors.attendance = "Please let us know if you can attend.";
  }

  return errors;
}

export default function RSVPForm() {
  const [formData, setFormData] = useState<RSVPFormData>({
    fullName: "",
    email: "",
    attendance: "",
    wishes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  // Track attendance at submission time so the success message is correct
  // even after form data resets
  const [submittedAttendance, setSubmittedAttendance] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear field error on edit
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    // Clear submission error when user edits the form
    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleAttendance = (value: "yes" | "no") => {
    setFormData((prev) => ({ ...prev, attendance: value }));
    if (errors.attendance) {
      setErrors((prev) => ({ ...prev, attendance: undefined }));
    }
    // Clear submission error when user changes attendance
    if (status === "error") {
      setStatus("idle");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate
    const validationErrors = validate(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("submitting");

    try {
      const sanitizedName = sanitizeInput(formData.fullName, 100);
      const sanitizedEmail = sanitizeInput(formData.email, 100);
      const sanitizedWishes = sanitizeInput(formData.wishes, 500);

      // Sanitize inputs before sending to Web3Forms
      const payload = {
        access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
        subject: `RSVP — ${WEDDING.couple.displayName} Wedding`,
        // `name` appears in the Web3Forms submission list / email body
        name: sanitizedName,
        from_name: sanitizedName,
        email: sanitizedEmail,
        attendance: formData.attendance === "yes" ? "Yes, attending" : "No, cannot attend",
        wishes: sanitizedWishes,
        botcheck: "", // honeypot field
      };

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json() as { success: boolean };

      if (result.success) {
        // Save attendance before resetting form data
        setSubmittedAttendance(formData.attendance);
        setStatus("success");
        // Reset form
        setFormData({ fullName: "", email: "", attendance: "", wishes: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className={styles.successMessage} role="alert" aria-live="polite">
        <div className={styles.successIcon} aria-hidden="true">
          <EnvelopeConfirmedIcon size={52} color="var(--color-gold)" />
        </div>
        <h3 className={styles.successTitle}>Thank you!</h3>
        <p className={styles.successText}>
          {submittedAttendance === "yes"
            ? "We're so excited to celebrate with you! We'll be in touch with more details."
            : "We'll miss you, but thank you for letting us know. Wishing you all the love!"}
        </p>
        <button
          className={styles.resetBtn}
          onClick={() => setStatus("idle")}
          type="button"
          id="rsvp-reset-button"
        >
          Submit another response
        </button>
      </div>
    );
  }

  return (
    <section className={styles.section} aria-labelledby="rsvp-heading" id="rsvp">
      <div className={styles.card}>
        {/* Header */}
        <div className={styles.cardHeader}>
          <div className={styles.headerIcon} aria-hidden="true">✦</div>
          <h2 className={styles.heading} id="rsvp-heading">
            RSVP
          </h2>
          <p className={styles.deadline}>
            Kindly respond by {WEDDING.rsvp.deadline}.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className={styles.form}
          noValidate
          aria-label="RSVP form"
          id="rsvp-form"
        >
          {/* Honeypot (spam protection — hidden from users) */}
          <input
            type="checkbox"
            name="botcheck"
            style={{ display: "none" }}
            tabIndex={-1}
            aria-hidden="true"
            readOnly
          />

          {/* Name + Email row */}
          <div className={styles.row}>
            <div className="form-group">
              <label htmlFor="rsvp-fullName" className="form-label">
                Full Name
              </label>
              <input
                id="rsvp-fullName"
                name="fullName"
                type="text"
                className={`form-input ${errors.fullName ? "error" : ""}`}
                placeholder="e.g. Priya Singh"
                value={formData.fullName}
                onChange={handleChange}
                maxLength={100}
                autoComplete="name"
                aria-describedby={errors.fullName ? "rsvp-fullName-error" : undefined}
                aria-invalid={!!errors.fullName}
              />
              {errors.fullName && (
                <span id="rsvp-fullName-error" className="form-error" role="alert">
                  {errors.fullName}
                </span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="rsvp-email" className="form-label">
                Email Address
              </label>
              <input
                id="rsvp-email"
                name="email"
                type="email"
                className={`form-input ${errors.email ? "error" : ""}`}
                placeholder="hello@example.com"
                value={formData.email}
                onChange={handleChange}
                maxLength={100}
                autoComplete="email"
                aria-describedby={errors.email ? "rsvp-email-error" : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <span id="rsvp-email-error" className="form-error" role="alert">
                  {errors.email}
                </span>
              )}
            </div>
          </div>

          {/* Attendance toggle */}
          <div className="form-group">
            <p className="form-label" id="attendance-label">
              Will You Be Attending?
            </p>
            <div
              className={styles.attendanceGroup}
              role="group"
              aria-labelledby="attendance-label"
            >
              <button
                type="button"
                id="rsvp-attendance-yes"
                className={`${styles.attendanceBtn} ${
                  formData.attendance === "yes" ? styles.attendanceBtnActive : ""
                }`}
                onClick={() => handleAttendance("yes")}
                aria-pressed={formData.attendance === "yes"}
              >
                Yes, I&apos;ll be there!
              </button>
              <button
                type="button"
                id="rsvp-attendance-no"
                className={`${styles.attendanceBtn} ${
                  formData.attendance === "no" ? styles.attendanceBtnDecline : ""
                }`}
                onClick={() => handleAttendance("no")}
                aria-pressed={formData.attendance === "no"}
              >
                Sorry, I can&apos;t make it
              </button>
            </div>
            {errors.attendance && (
              <span className="form-error" role="alert">
                {errors.attendance}
              </span>
            )}
          </div>

          {/* Wishes textarea */}
          <div className="form-group">
            <label htmlFor="rsvp-wishes" className="form-label">
              Write Your Wishes
            </label>
            <textarea
              id="rsvp-wishes"
              name="wishes"
              className="form-textarea"
              placeholder="A note, song request, or dietary requirements..."
              value={formData.wishes}
              onChange={handleChange}
              maxLength={500}
              rows={4}
            />
          </div>

          {/* Error state */}
          {status === "error" && (
            <p className={styles.submitError} role="alert">
              Something went wrong. Please try again or email us directly at{" "}
              <a href={`mailto:${WEDDING.rsvp.email}`} className={styles.emailLink}>
                {WEDDING.rsvp.email}
              </a>
              .
            </p>
          )}

          {/* Submit button */}
          <button
            type="submit"
            id="rsvp-submit-button"
            className={styles.submitBtn}
            disabled={status === "submitting"}
            aria-disabled={status === "submitting"}
          >
            {status === "submitting" ? (
              <>
                <span className={styles.spinner} aria-hidden="true" />
                Sending...
              </>
            ) : (
              "Send RSVP"
            )}
          </button>
        </form>
      </div>
    </section>
  );
}
