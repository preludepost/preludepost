import type { Metadata } from "next";
import Link from "next/link";
import TopAppBar from "@/components/common/TopAppBar";
import BottomNavBar from "@/components/common/BottomNavBar";
import Footer from "@/components/common/Footer";
import { WEDDING } from "@/lib/constants";
import { EnvelopeConfirmedIcon, HotelIcon, ConciergeKeyIcon } from "@/components/common/ThemeIcons";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with the wedding team or concierge for ${WEDDING.couple.displayName}'s wedding celebrations.`,
};

export default function ContactPage() {
  return (
    <>
      <TopAppBar />
      <main id="main-content" style={{ paddingBlock: "var(--space-12)", minHeight: "75vh" }}>
        <div className="container-narrow">
          <header style={{ textAlign: "center", marginBottom: "var(--space-8)" }}>
            <span style={{ color: "var(--color-gold)", fontSize: "var(--text-xs)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 600 }}>
              Assistance &amp; Inquiries
            </span>
            <h1 className="section-title" style={{ marginTop: "var(--space-2)" }}>
              Contact Concierge
            </h1>
            <p className="section-subtitle">
              Have questions about travel, accommodation, or your RSVP? We are here to assist.
            </p>
          </header>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--space-6)",
            }}
          >
            {/* Direct Email Card */}
            <div
              className="card"
              style={{
                padding: "clamp(1.5rem, 4vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              <div style={{ color: "var(--color-gold)", display: "flex", alignItems: "center" }} aria-hidden="true">
                <EnvelopeConfirmedIcon size={32} color="var(--color-gold)" />
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", color: "var(--color-primary)" }}>
                RSVP &amp; General Queries
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                For questions regarding your attendance, guest registrations, or celebratory wishes, write to us directly:
              </p>
              <a
                href={`mailto:${WEDDING.rsvp.email}`}
                id="contact-email-link"
                style={{
                  color: "var(--color-gold)",
                  fontWeight: 600,
                  fontSize: "var(--text-base)",
                  textDecoration: "none",
                }}
              >
                {WEDDING.rsvp.email}
              </a>
            </div>

            {/* Venue Card */}
            <div
              className="card"
              style={{
                padding: "clamp(1.5rem, 4vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              <div style={{ color: "var(--color-gold)", display: "flex", alignItems: "center" }} aria-hidden="true">
                <HotelIcon size={32} color="var(--color-gold)" />
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", color: "var(--color-primary)" }}>
                Venue &amp; Front Desk
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                <strong>{WEDDING.venue.name}</strong>
              </p>
              <p style={{ color: "var(--color-text-muted)", fontSize: "var(--text-sm)" }}>
                {WEDDING.venue.address}
              </p>
              <div style={{ marginTop: "var(--space-2)" }}>
                <a
                  href={WEDDING.venue.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outlined"
                  id="contact-venue-map-link"
                  style={{ fontSize: "var(--text-xs)", padding: "var(--space-2) var(--space-4)" }}
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>

            {/* Accommodation Support */}
            <div
              className="card"
              style={{
                padding: "clamp(1.5rem, 4vw, 2rem)",
                display: "flex",
                flexDirection: "column",
                gap: "var(--space-3)",
              }}
            >
              <div style={{ color: "var(--color-gold)", display: "flex", alignItems: "center" }} aria-hidden="true">
                <ConciergeKeyIcon size={32} color="var(--color-gold)" />
              </div>
              <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "var(--text-xl)", color: "var(--color-primary)" }}>
                Hotel &amp; Room Block Concierge
              </h2>
              <p style={{ color: "var(--color-text-muted)" }}>
                When booking your stay at {WEDDING.accommodation.hotelName}, quote our preferred guest promo code:
              </p>
              <div
                style={{
                  display: "inline-block",
                  padding: "var(--space-2) var(--space-4)",
                  backgroundColor: "var(--color-neutral)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "var(--radius-md)",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  color: "var(--color-primary)",
                  width: "fit-content",
                }}
              >
                Code: {WEDDING.accommodation.promoCode}
              </div>
            </div>

            {/* Navigation back */}
            <div style={{ textAlign: "center", marginTop: "var(--space-4)" }}>
              <Link href="/" className="btn btn-primary" id="contact-home-button">
                Return to Invitation
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <BottomNavBar />
    </>
  );
}
