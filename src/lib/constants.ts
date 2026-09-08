/**
 * Wedding constants — all wedding-specific data lives here.
 * Update this file to change any wedding details across the entire site.
 */

export const WEDDING = {
  couple: {
    bride: "Zara",
    groom: "Veer",
    displayName: "Veer & Zara",
    tagline: "Two Souls, One Journey",
  },

  ceremony: {
    date: new Date("2027-06-30T10:00:00+05:30"),
    displayDate: "June 30, 2027",
    displayTime: "10:00 AM",
  },

  preweddingEvents: [
    {
      id: "mehndi",
      name: "Mahendi",
      date: "Jun 27",
      time: "9:30 PM",
      description:
        "An evening of intricate henna art, music, and mingling to kick off the celebrations.",
      image: "/images/mehndi.png",
      imageAlt: "Mehndi ceremony with intricate henna art",
    },
    {
      id: "haldi",
      name: "Haldi",
      date: "Jun 28",
      time: "8:30 PM",
      description:
        "A joyous morning ritual filled with color, laughter, and blessings.",
      image: "/images/haldi.png",
      imageAlt: "Haldi ceremony with turmeric and flowers",
    },
    {
      id: "sangeet",
      name: "Sangeet",
      date: "Jun 29",
      time: "9:00 PM",
      description:
        "A night of dazzling performances, music, and dancing under the stars.",
      image: "/images/sangeet.png",
      imageAlt: "Sangeet night with dance performances",
    },
  ],

  venue: {
    name: "The Taj Mahal Palace",
    subtitle: "The Main Event",
    address: "Apollo Bunder, Colaba, Mumbai, Maharashtra 400001, India",
    image: "/images/venue.png",
    imageAlt: "The Taj Mahal Palace, Mumbai at night",
    googleMapsUrl:
      "https://maps.google.com/?q=Taj+Mahal+Palace+Hotel+Mumbai",
  },

  accommodation: {
    hotelName: "Taj Mahal Palace",
    promoCode: "WEDDING2026",
    description:
      "We have arranged a block of rooms at the Taj Mahal Palace for our guests' convenience.",
  },

  transportation: {
    description:
      "Complimentary shuttle service will be provided between partner hotels and the venue throughout the weekend.",
    scheduleNote: "Shuttles depart every 30 minutes from 8:00 PM onwards.",
  },

  timeline: [
    {
      id: "arrival",
      event: "Guest Arrival",
      description: "Welcome drinks and seating.",
      startTime: "JUN 30 · 10:00 AM",
    },
    {
      id: "ceremony",
      event: "Wedding Ceremony",
      description: "The exchange of vows.",
      startTime: "JUN 30 · 11:30 AM",
    },
    {
      id: "reception",
      event: "Reception",
      description: "Dinner, drinks, and dancing.",
      startTime: "JUL 1 · 7:30 PM",
    },
  ],

  rsvp: {
    deadline: "June 1, 2027",
    email: "veerandzara2027@gmail.com",
  },

  dressCode: {
    women:
      "Elegant formal attire in pastel or jewel tones. Sarees, lehengas, and gowns are all welcome.",
    men: "Suit or traditional formal wear — sherwanis, bandhgalas, and blazers encouraged.",
    note: "We kindly request guests to avoid white and black.",
  },
};

export const SITE = {
  name: "Veer & Zara",
  url: "https://preludepost.com",
  description:
    "You are cordially invited to celebrate the wedding of Veer and Zara on June 30, 2027 at The Taj Mahal Palace, Mumbai.",
};
