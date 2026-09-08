import styles from "./GiftsSection.module.css";

export default function GiftsSection() {
  return (
    <section className={styles.section} aria-labelledby="gifts-heading" id="gifts">
      <div className={styles.container}>
        <div className={styles.ornament} aria-hidden="true">
          ✦
        </div>
        <h2 id="gifts-heading" className={styles.heading}>
          Warm Wishes &amp; Gifts
        </h2>
        <div className={styles.divider} aria-hidden="true" />
        <p className={styles.description}>
          Your presence and prayers as we begin our new journey together is the
          greatest gift we could ever receive. Please bring only your love,
          laughter, and blessings.
        </p>
        <p className={styles.subtext}>
          No boxed gifts, please. Warm blessings and smiles are all we ask.
        </p>
      </div>
    </section>
  );
}
