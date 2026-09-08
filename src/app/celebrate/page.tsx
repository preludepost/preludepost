import type { Metadata } from "next";
import TopAppBar from "@/components/common/TopAppBar";
import BottomNavBar from "@/components/common/BottomNavBar";
import Footer from "@/components/common/Footer";
import DressCodeSection from "@/components/rsvp/DressCodeSection";
import RSVPForm from "@/components/rsvp/RSVPForm";
import GiftsSection from "@/components/rsvp/GiftsSection";

export const metadata: Metadata = {
  title: "RSVP & Dress Code",
  description:
    "Kindly RSVP for Veer & Zara's wedding celebration and discover the dress code guidelines.",
};

export default function CelebratePage() {
  return (
    <>
      <TopAppBar />
      <main id="main-content">
        <DressCodeSection />
        <RSVPForm />
        <GiftsSection />
      </main>
      <Footer />
      <BottomNavBar />
    </>
  );
}
