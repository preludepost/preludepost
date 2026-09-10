import Image from "next/image";
import { WEDDING } from "@/lib/constants";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Wedding hero">
      {/* Single breathtaking full-bleed image */}
      <div className={styles.imageWrapper}>
        <Image
          src="/images/hero.png"
          alt={`${WEDDING.couple.displayName}'s wedding celebration venue — an elegant floral aisle with draped fabric`}
          fill
          priority
          quality={90}
          className={styles.heroImage}
          sizes="100vw"
        />
        {/* Overlay gradient for text legibility */}
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      {/* Hero text content */}
      <div className={styles.content}>
        <p className={styles.preTitle}>You Are Cordially Invited</p>

        <h1 className={styles.title}>{WEDDING.couple.displayName}</h1>

        <div className={styles.divider} aria-hidden="true">
          <span className={styles.dividerLine} />
          <span className={styles.dividerSymbol}>◆</span>
          <span className={styles.dividerLine} />
        </div>

        <p className={styles.date}>{WEDDING.ceremony.displayDate}</p>
        <p className={styles.venue}>{WEDDING.venue.name}</p>
        <p className={styles.location}>{WEDDING.venue.city}</p>
      </div>
    </section>
  );
}
