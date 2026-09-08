"use client";

import { useState, useEffect } from "react";
import { WEDDING } from "@/lib/constants";
import { getTimeRemaining, padZero } from "@/lib/utils";
import styles from "./CountdownTimer.module.css";

const TIME_UNITS = [
  { key: "days" as const, label: "Days" },
  { key: "hours" as const, label: "Hours" },
  { key: "minutes" as const, label: "Minutes" },
  { key: "seconds" as const, label: "Seconds" },
];

export default function CountdownTimer() {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    setMounted(true);
    setTimeLeft(getTimeRemaining(WEDDING.ceremony.date));

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(getTimeRemaining(WEDDING.ceremony.date));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.section} aria-labelledby="countdown-heading" id="countdown">
      <div className={styles.inner}>
        <p className={styles.label} id="countdown-heading">
          Counting Down Forever
        </p>

        {mounted && timeLeft.isExpired ? (
          <p className={styles.expired}>
            Today is the day! 🎉
          </p>
        ) : (
          <div className={styles.timerGrid} role="timer" aria-live="polite" aria-atomic="true">
            {TIME_UNITS.map(({ key, label }) => (
              <div key={key} className={styles.timerUnit} id={`countdown-${key}`}>
                <span className={styles.timerValue}>
                  {mounted ? padZero(timeLeft[key]) : "00"}
                </span>
                <span className={styles.timerLabel}>{label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
