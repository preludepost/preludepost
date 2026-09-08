"use client";

import { useState, useEffect } from "react";
import TopAppBar from "@/components/common/TopAppBar";
import BottomNavBar from "@/components/common/BottomNavBar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/home/HeroSection";
import WelcomeSection from "@/components/home/WelcomeSection";
import CountdownTimer from "@/components/home/CountdownTimer";
import ProgramTimeline from "@/components/home/ProgramTimeline";
import EnvelopeAnimation from "@/components/envelope/EnvelopeAnimation";

export default function HomePage() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const opened = sessionStorage.getItem("prelude_envelope_opened") === "true";
    if (opened) {
      setEnvelopeOpened(true);
    }
  }, []);

  const handleEnvelopeComplete = () => {
    setEnvelopeOpened(true);
    try {
      sessionStorage.setItem("prelude_envelope_opened", "true");
    } catch {
      // Ignore storage errors
    }
  };

  return (
    <>
      {mounted && !envelopeOpened && (
        <EnvelopeAnimation onComplete={handleEnvelopeComplete} />
      )}
      <div
        style={{
          opacity: envelopeOpened || !mounted ? 1 : 0,
          transition: "opacity 0.8s ease-in-out",
        }}
      >
        <TopAppBar />
        <main id="main-content">
          <HeroSection />
          <WelcomeSection />
          <CountdownTimer />
          <ProgramTimeline />
        </main>
        <Footer />
        <BottomNavBar />
      </div>
    </>
  );
}
