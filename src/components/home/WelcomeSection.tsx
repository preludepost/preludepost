import styles from "./WelcomeSection.module.css";

export default function WelcomeSection() {
  return (
    <section className={styles.welcome} aria-labelledby="welcome-heading">
      {/* Decorative heart icon */}
      <div className={styles.heartIcon} aria-hidden="true">♥</div>

      <h2 id="welcome-heading" className={styles.visuallyHidden}>
        Welcome Message
      </h2>

      <blockquote className={styles.quote}>
        <p>
          &ldquo;We are honored to welcome you to the wedding ceremony of{" "}
          <em>Veer &amp; Zara</em>. Join us as we celebrate a lifetime of love,
          joy, and shared dreams. Your presence will make our special day truly{" "}
          <em>unforgettable</em>.&rdquo;
        </p>
      </blockquote>

      {/* Ornamental divider */}
      <div className={styles.divider} aria-hidden="true">
        <span className={styles.line} />
        <span className={styles.ornament}>✦</span>
        <span className={styles.line} />
      </div>
    </section>
  );
}
