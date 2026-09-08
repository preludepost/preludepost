import { WEDDING } from "@/lib/constants";
import styles from "./ProgramTimeline.module.css";

export default function ProgramTimeline() {
  return (
    <section className={styles.section} aria-labelledby="timeline-heading">
      <div className={styles.container}>
        <h2 className={styles.heading} id="timeline-heading">
          Program Timeline
        </h2>

        <div className={styles.timeline} role="list">
          {WEDDING.timeline.map((item, index) => (
            <div
              key={item.id}
              className={styles.timelineItem}
              role="listitem"
              id={`timeline-item-${item.id}`}
            >
              {/* Left side: event name + description (odd) or time (even) */}
              <div className={`${styles.side} ${styles.sideLeft}`}>
                {index % 2 === 0 ? (
                  <>
                    <h3 className={styles.eventName}>{item.event}</h3>
                    <p className={styles.eventDesc}>{item.description}</p>
                  </>
                ) : (
                  <p className={styles.eventTime}>{item.startTime}</p>
                )}
              </div>

              {/* Center dot and line */}
              <div className={styles.center} aria-hidden="true">
                <div className={styles.dot} />
                {index < WEDDING.timeline.length - 1 && (
                  <div className={styles.line} />
                )}
              </div>

              {/* Right side: time (odd) or event name (even) */}
              <div className={`${styles.side} ${styles.sideRight}`}>
                {index % 2 === 0 ? (
                  <p className={styles.eventTime}>{item.startTime}</p>
                ) : (
                  <>
                    <h3 className={styles.eventName}>{item.event}</h3>
                    <p className={styles.eventDesc}>{item.description}</p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
