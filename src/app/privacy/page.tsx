import type { Metadata } from "next";
import Link from "next/link";
import TopAppBar from "@/components/common/TopAppBar";
import BottomNavBar from "@/components/common/BottomNavBar";
import Footer from "@/components/common/Footer";
import { WEDDING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy and data protection principles for ${WEDDING.couple.displayName}'s wedding celebration.`,
};

export default function PrivacyPage() {
  return (
    <>
      <TopAppBar />
      <main id="main-content" style={{ paddingBlock: "var(--space-12)", minHeight: "75vh" }}>
        <article className="container-narrow">
          <header style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
            <span style={{ color: "var(--color-gold)", fontSize: "var(--text-xs)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>
              Guest Privacy
            </span>
            <h1 className="section-title" style={{ marginTop: "var(--space-2)" }}>
              Privacy Notice
            </h1>
            <p className="section-subtitle">
              How we care for and protect your information for {WEDDING.couple.displayName}&apos;s wedding
            </p>
          </header>

          <div
            className="card"
            style={{
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
              lineHeight: 1.8,
              fontSize: "var(--text-base)",
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
            }}
          >
            <section>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", marginBottom: "var(--space-2)", color: "var(--color-primary)" }}>
                1. Private Celebration
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                This website is a private digital invitation for invited family and friends celebrating the union of {WEDDING.couple.displayName}. We do not track visitors for commercial purposes, serve third-party advertisements, or sell your data.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", marginBottom: "var(--space-2)", color: "var(--color-primary)" }}>
                2. Information Collected
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                When you submit an RSVP on this website, we collect your <strong>Full Name</strong>, <strong>Email Address</strong>, <strong>Attendance Status</strong>, and any optional <strong>Wishes or Dietary Notes</strong>.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", marginBottom: "var(--space-2)", color: "var(--color-primary)" }}>
                3. Purpose of Processing
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                Your details are exclusively used for:
              </p>
              <ul style={{ listStyleType: "disc", paddingLeft: "1.5rem", marginTop: "var(--space-2)", color: "var(--color-text-muted)" }}>
                <li>Confirming the guest count with our venue ({WEDDING.venue.name}) and caterers.</li>
                <li>Arranging hotel room blocks and complimentary shuttle logistics.</li>
                <li>Sending vital schedule updates or itinerary notices directly to your email.</li>
              </ul>
            </section>

            <section>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", marginBottom: "var(--space-2)", color: "var(--color-primary)" }}>
                4. Data Storage &amp; Third-Party Services
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                RSVP submissions are securely processed through encrypted SSL connection using Web3Forms and delivered directly to the wedding couple&apos;s private mailbox. We do not store submissions in publicly accessible databases.
              </p>
            </section>

            <section>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", marginBottom: "var(--space-2)", color: "var(--color-primary)" }}>
                5. Questions &amp; Corrections
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                If you have questions about your RSVP submission or wish to update your details, please reach out to us directly at{" "}
                <a
                  href={`mailto:${WEDDING.rsvp.email}`}
                  style={{ color: "var(--color-gold)", textDecoration: "underline", fontWeight: 500 }}
                >
                  {WEDDING.rsvp.email}
                </a>
                .
              </p>
            </section>

            <div style={{ textAlign: "center", marginTop: "var(--space-4)", paddingTop: "var(--space-4)", borderTop: "1px solid var(--color-border)" }}>
              <Link href="/" className="btn btn-primary" id="privacy-back-button">
                Return to Invitation
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer />
      <BottomNavBar />
    </>
  );
}
