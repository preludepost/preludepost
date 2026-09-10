import type { Metadata } from "next";
import TopAppBar from "@/components/common/TopAppBar";
import BottomNavBar from "@/components/common/BottomNavBar";
import Footer from "@/components/common/Footer";
import PreWeddingEvents from "@/components/events/PreWeddingEvents";
import VenueSection from "@/components/events/VenueSection";
import AccommodationTransportation from "@/components/events/AccommodationTransportation";
import { WEDDING } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Events & Venue",
  description: `Explore the itinerary and venue details for ${WEDDING.couple.displayName}'s wedding celebration at ${WEDDING.venue.name}, ${WEDDING.venue.city}.`,
};

export default function EventsPage() {
  return (
    <>
      <TopAppBar />
      <main id="main-content">
        <PreWeddingEvents />
        <VenueSection />
        <AccommodationTransportation />
      </main>
      <Footer />
      <BottomNavBar />
    </>
  );
}
