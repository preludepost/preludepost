import React from "react";

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

/** Elegant wedding gown / evening dress icon */
export function DressIcon({ className, size = 36, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Neckline / Straps */}
      <path d="M9 3l1.5 4h3L15 3" />
      {/* Bodice */}
      <path d="M9 3c-1 2-1 4 .5 7h5c1.5-3 1.5-5 .5-7" />
      {/* Waistband */}
      <path d="M8.5 10c1.5.5 5.5.5 7 0" />
      {/* Flowing skirt */}
      <path d="M8.5 10.5L5 21c4.5 1 9.5 1 14 0l-3.5-10.5" />
      {/* Pleat drape lines */}
      <path d="M12 11v9.8" strokeDasharray="1 2" />
      <path d="M9.8 12.5L8.5 20.5" strokeOpacity="0.6" />
      <path d="M14.2 12.5L15.5 20.5" strokeOpacity="0.6" />
    </svg>
  );
}

/** Tailored tuxedo / suit with bowtie icon */
export function TuxedoIcon({ className, size = 36, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Shoulders & Lapel outline */}
      <path d="M4 21V9l4-6h8l4 6v12" />
      {/* V-neck collar */}
      <path d="M8 3l4 8 4-8" />
      {/* Bowtie */}
      <path d="M10 6.5l4 1.5M14 6.5l-4 1.5" strokeWidth="1.6" />
      <circle cx="12" cy="7.25" r="1" fill={color} />
      {/* Jacket inner fold & buttons */}
      <path d="M12 12v9" />
      <circle cx="12" cy="15" r="0.75" fill={color} />
      <circle cx="12" cy="18" r="0.75" fill={color} />
      {/* Pocket square */}
      <path d="M6 13h2.5" strokeWidth="1.2" />
    </svg>
  );
}

/** Luxury hotel / royal palace accommodation icon */
export function HotelIcon({ className, size = 36, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Dome / Arch apex */}
      <path d="M12 2l1.5 2.5h-3L12 2z" fill={color} />
      <path d="M12 4.5c-4 0-6 2.5-6 5.5v11h12V10c0-3-2-5.5-6-5.5z" />
      {/* Stately columns */}
      <path d="M9 13v8M15 13v8" />
      {/* Grand Arch doorway */}
      <path d="M10 21v-3.5a2 2 0 014 0V21" />
      {/* Balcony / cornice divider */}
      <path d="M4 10h16M3 21h18" />
      {/* Window accents */}
      <circle cx="12" cy="9" r="1" fill={color} />
      <circle cx="8" cy="8" r="0.75" fill={color} />
      <circle cx="16" cy="8" r="0.75" fill={color} />
    </svg>
  );
}

/** Luxury shuttle / transport coach icon */
export function ShuttleIcon({ className, size = 36, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Aerodynamic vehicle body */}
      <path d="M3 15V9a3 3 0 013-3h11a4 4 0 014 4v5a2 2 0 01-2 2h-1" />
      <path d="M3 15h1" />
      {/* Front windshield */}
      <path d="M15 6l4 4" />
      {/* Windows */}
      <rect x="6" y="8" width="4" height="4" rx="0.8" />
      <rect x="12" y="8" width="4" height="4" rx="0.8" />
      {/* Base line */}
      <path d="M8 17h8" />
      {/* Wheels */}
      <circle cx="6" cy="17" r="2" />
      <circle cx="6" cy="17" r="0.7" fill={color} />
      <circle cx="18" cy="17" r="2" />
      <circle cx="18" cy="17" r="0.7" fill={color} />
      {/* Headlight & luxury accent */}
      <path d="M21 13h-1" strokeWidth="2" />
      <path d="M3 12h1" />
    </svg>
  );
}

/** Luxury wax-sealed envelope / RSVP confirmation icon */
export function EnvelopeConfirmedIcon({ className, size = 44, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* Outer envelope */}
      <rect x="2" y="4" width="20" height="15" rx="2" />
      {/* Top open fold */}
      <path d="M2 5l10 7 10-7" />
      {/* Lower fold lines */}
      <path d="M2 19l6.5-5.5M22 19l-6.5-5.5" strokeOpacity="0.5" />
      {/* Gold wax seal stamp */}
      <circle cx="12" cy="12" r="3" fill="var(--color-gold, #b8975a)" stroke="var(--color-white, #fff)" strokeWidth="1" />
      {/* Sparkles / starburst */}
      <path d="M12 11v2M11 12h2" stroke="var(--color-white, #fff)" strokeWidth="1" />
    </svg>
  );
}

/** Luxury map pin icon */
export function MapPinIcon({ className, size = 18, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s-7-5.5-7-11a7 7 0 1114 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" fill={color} />
    </svg>
  );
}

/** Concierge antique key icon */
export function ConciergeKeyIcon({ className, size = 30, color = "currentColor" }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="7.5" cy="15.5" r="4.5" />
      <circle cx="7.5" cy="15.5" r="1.5" fill={color} />
      <path d="M10.7 12.3L20 3" />
      <path d="M16 3l4 4" />
      <path d="M14 7l2 2" />
    </svg>
  );
}

