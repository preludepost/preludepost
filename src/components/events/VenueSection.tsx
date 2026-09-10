import Image from "next/image";
import { WEDDING } from "@/lib/constants";
import { MapPinIcon } from "@/components/common/ThemeIcons";
import styles from "./VenueSection.module.css";

export default function VenueSection() {
  return (
    <section className={styles.section} aria-labelledby="venue-heading" id="venue">
      <div className={styles.container}>
        {/* Image side */}
        <div className={styles.imageWrapper}>
          <Image
            src={WEDDING.venue.image}
            alt={WEDDING.venue.imageAlt}
            fill
            className={styles.venueImage}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Details side */}
        <div className={styles.details}>
          <p className={styles.subtitle}>{WEDDING.venue.subtitle}</p>

          <h2 className={styles.venueName} id="venue-heading">
            {WEDDING.venue.name}
          </h2>

          <address className={styles.address} aria-label="Venue address">
            {WEDDING.venue.address}
          </address>

          <a
            href={WEDDING.venue.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapsBtn}
            id="venue-maps-button"
            aria-label={`View ${WEDDING.venue.name} on Google Maps`}
          >
            <span className={styles.mapIcon} aria-hidden="true">
              <MapPinIcon size={16} color="currentColor" />
            </span>
            View on Google Maps
          </a>
        </div>
      </div>
    </section>
  );
}
