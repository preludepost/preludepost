import Link from "next/link";
import { SITE } from "@/lib/constants";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.inner}>
        {/* Decorative divider */}
        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerHeart} aria-hidden="true">♡</span>
          <span className={styles.dividerLine} />
        </div>

        <p className={styles.tagline}>
          We can&apos;t wait to celebrate with you!
        </p>


        {/* Footer links */}
        <nav className={styles.links} aria-label="Footer navigation">
          <Link href="/privacy" className={styles.link} id="footer-privacy-link">
            Privacy
          </Link>
          <span className={styles.dot} aria-hidden="true">·</span>
          <Link href="/contact" className={styles.link} id="footer-contact-link">
            Contact Us
          </Link>
        </nav>

        {/* Brand attribution */}
        <p className={styles.brand}>
          Crafted with love by{" "}
          <a
            href={SITE.url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.brandLink}
            id="footer-brand-link"
          >
            PreludePost
          </a>
        </p>
      </div>
    </footer>
  );
}
