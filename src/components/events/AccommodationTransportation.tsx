"use client";

import { useState, useEffect, useCallback } from "react";
import { WEDDING } from "@/lib/constants";
import { HotelIcon, ShuttleIcon } from "@/components/common/ThemeIcons";
import styles from "./AccommodationTransportation.module.css";

export default function AccommodationTransportation() {
  const [showSchedule, setShowSchedule] = useState(false);

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showSchedule) {
        setShowSchedule(false);
      }
    };

    if (showSchedule) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showSchedule]);

  const openSchedule = useCallback(() => setShowSchedule(true), []);
  const closeSchedule = useCallback(() => setShowSchedule(false), []);

  return (
    <section className={styles.section} aria-labelledby="logistics-heading" id="logistics">
      <div className={styles.container}>
        <h2 className={styles.visuallyHidden} id="logistics-heading">
          Accommodation &amp; Transportation
        </h2>

        <div className={styles.grid}>
          {/* Accommodation card */}
          <div className={styles.card} id="accommodation-card">
            <div className={styles.cardIcon} aria-hidden="true">
              <HotelIcon size={34} color="var(--color-gold)" />
            </div>
            <h3 className={styles.cardTitle}>Accommodation</h3>
            <p className={styles.cardDesc}>{WEDDING.accommodation.description}</p>
            <div className={styles.codeWrapper} aria-label={`Promo code: ${WEDDING.accommodation.promoCode}`}>
              <span className={styles.codeLabel}>Code</span>
              <span className={styles.code}>{WEDDING.accommodation.promoCode}</span>
            </div>
          </div>

          {/* Transportation card */}
          <div className={styles.card} id="transportation-card">
            <div className={styles.cardIcon} aria-hidden="true">
              <ShuttleIcon size={34} color="var(--color-gold)" />
            </div>
            <h3 className={styles.cardTitle}>Transportation</h3>
            <p className={styles.cardDesc}>{WEDDING.transportation.description}</p>
            <button
              className={styles.scheduleBtn}
              id="transportation-schedule-button"
              type="button"
              aria-label="View shuttle schedule details"
              aria-haspopup="dialog"
              onClick={openSchedule}
            >
              View Schedule
            </button>
          </div>
        </div>
      </div>

      {/* Schedule Modal */}
      {showSchedule && (
        <div
          className={styles.modalBackdrop}
          onClick={closeSchedule}
          role="presentation"
        >
          <div
            className={styles.modalCard}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-schedule-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalIcon} aria-hidden="true">
                <ShuttleIcon size={26} color="var(--color-gold)" />
              </div>
              <h3 id="modal-schedule-title" className={styles.modalTitle}>
                Complimentary Shuttle Schedule
              </h3>
              <button
                type="button"
                className={styles.modalCloseBtn}
                onClick={closeSchedule}
                aria-label="Close schedule modal"
                id="close-schedule-modal-button"
              >
                ✕
              </button>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.scheduleItem}>
                <span className={styles.scheduleBadge}>Route</span>
                <p className={styles.scheduleText}>
                  Partner Hotels (Colaba / Nariman Point) ⟷ {WEDDING.venue.name}
                </p>
              </div>

              <div className={styles.scheduleItem}>
                <span className={styles.scheduleBadge}>Frequency</span>
                <p className={styles.scheduleText}>{WEDDING.transportation.scheduleNote}</p>
              </div>

              <div className={styles.scheduleItem}>
                <span className={styles.scheduleBadge}>Airport Pickups</span>
                <p className={styles.scheduleText}>
                  Private transfers for out-of-town guests arriving at Mumbai Chhatrapati Shivaji Maharaj International Airport (BOM) can be coordinated with our concierge.
                </p>
              </div>

              <p className={styles.scheduleNote}>
                Need immediate ride coordination? Contact our wedding concierge at{" "}
                <a href={`mailto:${WEDDING.rsvp.email}`} className={styles.modalEmailLink}>
                  {WEDDING.rsvp.email}
                </a>
                .
              </p>
            </div>

            <div className={styles.modalFooter}>
              <button
                type="button"
                className="btn btn-primary"
                onClick={closeSchedule}
                id="modal-got-it-button"
                style={{ width: "100%" }}
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
