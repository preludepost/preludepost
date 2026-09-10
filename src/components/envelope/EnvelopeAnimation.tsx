"use client";

import { useState, useEffect, useCallback } from "react";
import { WEDDING } from "@/lib/constants";
import styles from "./EnvelopeAnimation.module.css";

interface EnvelopeAnimationProps {
  /** Called when the envelope animation completes and content should show */
  onComplete: () => void;
}

/**
 * EnvelopeAnimation
 *
 * Renders a full-screen premium envelope with a wax seal.
 * Sequence on click/tap:
 *  1. Wax seal fades and flap opens (rotateX 3D flip)
 *  2. Card slides up from the envelope interior
 *  3. Envelope slides down and fades out
 *  4. onComplete() is called → parent shows main content
 */
export default function EnvelopeAnimation({ onComplete }: EnvelopeAnimationProps) {
  const [phase, setPhase] = useState<"idle" | "opening" | "sliding" | "done">("idle");
  const [hasInteracted, setHasInteracted] = useState(false);

  // Add/remove body class to suppress body padding while envelope shows
  useEffect(() => {
    document.body.classList.add("envelope-mode");
    return () => {
      document.body.classList.remove("envelope-mode");
    };
  }, []);

  const handleOpen = useCallback(() => {
    if (hasInteracted) return;
    setHasInteracted(true);
    setPhase("opening");

    // After flap opens → slide card up
    setTimeout(() => setPhase("sliding"), 900);

    // After card slides up → notify parent
    setTimeout(() => {
      setPhase("done");
      onComplete();
    }, 1900);
  }, [hasInteracted, onComplete]);

  const handleSkip = useCallback(() => {
    setPhase("done");
    onComplete();
  }, [onComplete]);

  if (phase === "done") return null;

  return (
    <div
      className={`${styles.overlay} ${phase === "sliding" ? styles.overlayFadeOut : ""}`}
      role="main"
      aria-label="Wedding invitation envelope"
    >
      {/* Skip button for accessibility & return guests */}
      <button
        type="button"
        onClick={handleSkip}
        id="skip-envelope-button"
        style={{
          position: "fixed",
          top: "var(--space-4)",
          right: "var(--space-4)",
          zIndex: 50,
          background: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(8px)",
          border: "1px solid var(--color-border)",
          borderRadius: "var(--radius-full)",
          padding: "var(--space-2) var(--space-4)",
          fontSize: "var(--text-xs)",
          color: "var(--color-primary)",
          fontWeight: 500,
          letterSpacing: "0.05em",
          cursor: "pointer",
        }}
        aria-label="Skip animation to view invitation"
      >
        Skip to Invitation ↗
      </button>

      {/* Background texture */}
      <div className={styles.background} aria-hidden="true" />

      {/* Floating particles */}
      <div className={styles.particles} aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className={styles.particle} style={{ "--i": i } as React.CSSProperties} />
        ))}
      </div>

      {/* Envelope wrapper */}
      <div className={styles.envelopeWrapper}>
        {/* Rising card (visible after opening) */}
        <div
          className={`${styles.invitationCard} ${
            phase === "sliding" ? styles.invitationCardVisible : ""
          }`}
          aria-hidden="true"
        >
          <p className={styles.cardPreText}>You are cordially invited to</p>
          <h1 className={styles.cardTitle}>{WEDDING.couple.displayName}</h1>
          <div className={styles.cardDivider}>
            <span className={styles.cardDividerLine} />
            <span className={styles.cardDiamondIcon}>◆</span>
            <span className={styles.cardDividerLine} />
          </div>
          <p className={styles.cardDate}>{WEDDING.ceremony.displayDate}</p>
          <p className={styles.cardVenue}>{WEDDING.venue.name}, {WEDDING.venue.city}</p>
        </div>

        {/* The envelope */}
        <div
          className={`${styles.envelope} ${phase !== "idle" ? styles.envelopeOpening : ""}`}
          onClick={handleOpen}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleOpen();
            }
          }}
          role="button"
          tabIndex={0}
          aria-label="Tap to open your invitation"
        >
          {/* Back panel */}
          <div className={styles.envelopeBack} aria-hidden="true" />

          {/* Left flap */}
          <div className={styles.flapLeft} aria-hidden="true" />

          {/* Right flap */}
          <div className={styles.flapRight} aria-hidden="true" />

          {/* Bottom flap */}
          <div className={styles.flapBottom} aria-hidden="true" />

          {/* Top flap (animated) */}
          <div
            className={`${styles.flapTop} ${phase !== "idle" ? styles.flapTopOpen : ""}`}
            aria-hidden="true"
          />

          {/* Wax seal */}
          <div
            className={`${styles.seal} ${phase !== "idle" ? styles.sealFade : ""}`}
            aria-hidden="true"
          >
            <span className={styles.sealInitials}>{WEDDING.couple.monogram}</span>
          </div>

          {/* Tap hint */}
          {phase === "idle" && (
            <p className={styles.tapHint} aria-live="polite">
              Tap to open
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
