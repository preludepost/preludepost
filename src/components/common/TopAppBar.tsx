"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { WEDDING } from "@/lib/constants";
import styles from "./TopAppBar.module.css";

const MENU_LINKS = [
  { href: "/", label: "Home & Welcome" },
  { href: "/events", label: "Pre-Wedding Events" },
  { href: "/events#venue", label: "Venue & Directions" },
  { href: "/events#logistics", label: "Accommodation & Shuttles" },
  { href: "/celebrate#dress-code", label: "Dress Code" },
  { href: "/celebrate", label: "RSVP Form" },
  { href: "/celebrate#gifts", label: "Gifts & Blessings" },
  { href: "/contact", label: "Contact Concierge" },
  { href: "/privacy", label: "Privacy Notice" },
];

export default function TopAppBar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on pathname change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <header className={styles.topBar} role="banner">
        {/* Hamburger menu button */}
        <button
          className={`${styles.menuBtn} ${isOpen ? styles.menuBtnActive : ""}`}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="navigation-drawer"
          id="menu-button"
          type="button"
          onClick={toggleMenu}
        >
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
          <span className={styles.menuLine} />
        </button>

        {/* Couple name (center) */}
        <Link href="/" className={styles.brandName} aria-label="Home" onClick={closeMenu}>
          {WEDDING.couple.displayName}
        </Link>

        {/* RSVP button (right) */}
        <Link
          href="/celebrate"
          className={styles.rsvpBtn}
          aria-label="RSVP for the wedding"
          id="topbar-rsvp-button"
          aria-current={pathname === "/celebrate" ? "page" : undefined}
          onClick={closeMenu}
        >
          RSVP
        </Link>
      </header>

      {/* Drawer backdrop */}
      <div
        className={`${styles.backdrop} ${isOpen ? styles.backdropVisible : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      />

      {/* Navigation Drawer */}
      <aside
        id="navigation-drawer"
        className={`${styles.drawer} ${isOpen ? styles.drawerOpen : ""}`}
        aria-label="Site menu"
        aria-hidden={!isOpen}
      >
        <div className={styles.drawerHeader}>
          <div className={styles.drawerMonogram}>V &amp; Z</div>
          <button
            type="button"
            className={styles.closeBtn}
            onClick={closeMenu}
            aria-label="Close menu"
            id="close-menu-button"
          >
            ✕
          </button>
        </div>

        <nav className={styles.drawerNav} aria-label="Expanded site navigation">
          <ul className={styles.drawerList}>
            {MENU_LINKS.map((link) => (
              <li key={link.href} className={styles.drawerItem}>
                <Link
                  href={link.href}
                  className={`${styles.drawerLink} ${pathname === link.href ? styles.drawerLinkActive : ""}`}
                  onClick={closeMenu}
                >
                  <span className={styles.linkDiamond}>◆</span>
                  <span>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.drawerFooter}>
          <p className={styles.drawerDate}>{WEDDING.ceremony.displayDate}</p>
          <p className={styles.drawerVenue}>{WEDDING.venue.name}</p>
        </div>
      </aside>
    </>
  );
}
