import { WEDDING } from "@/lib/constants";
import { DressIcon, TuxedoIcon } from "@/components/common/ThemeIcons";
import styles from "./DressCodeSection.module.css";

export default function DressCodeSection() {
  return (
    <section className={styles.section} aria-labelledby="dresscode-heading" id="dress-code">
      <div className={styles.container}>
        <h2 className={styles.heading} id="dresscode-heading">
          Dress Code
        </h2>
        <p className={styles.subtitle}>
          We invite you to dress in elegant formal attire to celebrate our
          special day in style.
        </p>

        <div className={styles.grid}>
          {/* For Women */}
          <div className={styles.card} id="dresscode-women">
            <div className={styles.icon} aria-hidden="true">
              <DressIcon size={34} color="var(--color-gold)" />
            </div>
            <p className={styles.role}>For Women</p>
            <p className={styles.desc}>{WEDDING.dressCode.women}</p>
          </div>

          {/* For Men */}
          <div className={styles.card} id="dresscode-men">
            <div className={styles.icon} aria-hidden="true">
              <TuxedoIcon size={34} color="var(--color-gold)" />
            </div>
            <p className={styles.role}>For Men</p>
            <p className={styles.desc}>{WEDDING.dressCode.men}</p>
          </div>
        </div>

        {/* Note */}
        <p className={styles.note} role="note">
          <em>{WEDDING.dressCode.note}</em>
        </p>
      </div>
    </section>
  );
}
