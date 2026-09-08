import Image from "next/image";
import { WEDDING } from "@/lib/constants";
import styles from "./PreWeddingEvents.module.css";

export default function PreWeddingEvents() {
  return (
    <section className={styles.section} aria-labelledby="prewedding-heading">
      <div className={styles.container}>
        <h2 className={styles.heading} id="prewedding-heading">
          Pre-Wedding Events
        </h2>

        <div className={styles.grid} role="list">
          {WEDDING.preweddingEvents.map((event) => (
            <article
              key={event.id}
              className={styles.card}
              role="listitem"
              id={`event-card-${event.id}`}
              aria-label={`${event.name} — ${event.date} at ${event.time}`}
            >
              {/* Event image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={event.image}
                  alt={event.imageAlt}
                  fill
                  className={styles.cardImage}
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient overlay */}
                <div className={styles.cardOverlay} aria-hidden="true" />

                {/* Date/time badge */}
                <div className={styles.badge} aria-hidden="true">
                  <span className={styles.badgeDate}>{event.date}</span>
                  <span className={styles.badgeDot}>·</span>
                  <span className={styles.badgeTime}>{event.time}</span>
                </div>
              </div>

              {/* Card body */}
              <div className={styles.cardBody}>
                <h3 className={styles.eventName}>{event.name}</h3>
                <p className={styles.eventDesc}>{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
