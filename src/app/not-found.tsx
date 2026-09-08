import Link from "next/link";
import TopAppBar from "@/components/common/TopAppBar";
import BottomNavBar from "@/components/common/BottomNavBar";
import Footer from "@/components/common/Footer";
import { WEDDING } from "@/lib/constants";

export default function NotFound() {
  return (
    <>
      <TopAppBar />
      <main
        id="main-content"
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "var(--space-8)",
        }}
      >
        <div className="container-narrow">
          <div style={{ color: "var(--color-gold)", fontSize: "var(--text-3xl)", marginBottom: "var(--space-4)" }} aria-hidden="true">
            ✦
          </div>
          <h1
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "var(--text-5xl)",
              fontWeight: 400,
              color: "var(--color-primary)",
              marginBottom: "var(--space-2)",
            }}
          >
            Page Not Found
          </h1>
          <p
            style={{
              color: "var(--color-text-muted)",
              fontSize: "var(--text-lg)",
              maxWidth: "480px",
              marginInline: "auto",
              marginBottom: "var(--space-8)",
            }}
          >
            The page you are looking for may have been moved or does not exist. Please return to {WEDDING.couple.displayName}&apos;s wedding invitation.
          </p>
          <Link href="/" className="btn btn-primary" id="notfound-home-button">
            Return to Invitation
          </Link>
        </div>
      </main>
      <Footer />
      <BottomNavBar />
    </>
  );
}
