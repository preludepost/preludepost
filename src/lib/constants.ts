/**
 * Wedding constants — single source of truth.
 * Update this file to change any wedding details (names, venue, dates, events, descriptions, etc.)
 * across the entire site instantly.
 */

export const WEDDING = {
  couple: {
    bride: "Zumar",
    groom: "Faris",
    displayName: "Zumar & Faris",
    monogram: "Z & F",
    tagline: "Two Souls, One Journey",
  },

  ceremony: {
    name: "Nikkah Ceremony",
    date: new Date("2027-06-30T10:00:00+05:00"),
    displayDate: "June 30, 2027",
    displayTime: "10:00 AM",
  },

  welcome: {
    heading: "Welcome Message",
    quote:
      "We are honored to welcome you to the wedding ceremony of Zumar & Faris. Join us as we celebrate a lifetime of love, joy, and shared dreams. Your presence will make our special day truly unforgettable.",
  },

  preweddingEvents: [
    {
      id: "mehndi",
      name: "Mehndi",
      date: "Jun 27",
      time: "9:30 PM",
      description:
        "An evening of vibrant henna, dhol beats, and joyful dancing to kick off the celebrations.",
      image: "/images/mehndi.png",
      imageAlt: "Mehndi ceremony with intricate henna art",
    },
    {
      id: "mayoun",
      name: "Mayoun",
      date: "Jun 28",
      time: "8:30 PM",
      description:
        "A traditional oil ceremony blessing the bride and groom ahead of their big day.",
      image: "/images/haldi.png",
      imageAlt: "Mayoun traditional oil ceremony and blessings",
    },
    {
      id: "dholki",
      name: "Dholki",
      date: "Jun 29",
      time: "9:00 PM",
      description:
        "An evening of dhol, singing, and old wedding songs among close family and friends.",
      image: "/images/sangeet.png",
      imageAlt: "Dholki night with traditional singing and dhol beats",
    },
  ],

  venue: {
    name: "Grand Empire Marquee",
    city: "Lahore, Pakistan",
    subtitle: "The Main Event",
    address:
      "H92J+87Q, Saddar Gol Chakar, Karachi Mohalla Old Officers Colony, Lahore, Pakistan",
    image: "/images/venue.png",
    imageAlt: "Grand Empire Marquee, Lahore",
    googleMapsUrl:
      "https://www.google.com/maps?vet=10CAAQoqAOahcKEwjwy8WhmuGWAxUAAAAAHQAAAAAQBQ..i&pvq=Cg0vZy8xMXF2Y3I1M3BxIhUKD3dlZGRpbmcgbWFycXVlZRACGAM&lqi=CiJ3ZWRkaW5nIG1hcnF1ZWUgaW4gcGFraXN0YW4gbGFob3JlSLadyrvptoCACFosEAAQARgBGAQiIndlZGRpbmcgbWFycXVlZSBpbiBwYWtpc3RhbiBsYWhvcmWSAQtldmVudF92ZW51ZZoBI0NoWkRTVWhOTUc5blMwVkpRMEZuU1VSNE9UZEhkbGhSRUFF-gEECAAQQQ&fvr=1&cs=1&um=1&ie=UTF-8&fb=1&gl=pk&sa=X&geocode=KW3q7KgZBRk5McQWdcszkh-e&daddr=H92J%2B87Q,+Saddar+Gol+Chakar,+Karachi+Mohalla+Old+Officers+Colony,+Lahore",
  },

  accommodation: {
    hotelName: "Preferred Partner Hotels",
    promoCode: "ZUMARFARIS27",
    description:
      "We have arranged preferred partner room bookings in Lahore for our travelling guests' convenience.",
  },

  transportation: {
    description:
      "Complimentary shuttle service will be provided between partner hotels and Grand Empire Marquee throughout the celebrations.",
    scheduleNote: "Shuttles depart every 30 minutes from 8:00 PM onwards.",
    routeText: "Partner Hotels (Cantt / Gulberg, Lahore) ⟷ Grand Empire Marquee",
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
      event: "Nikkah Ceremony",
      description: "Islamic marriage contract and exchange of vows.",
      startTime: "JUN 30 · 11:30 AM",
    },
    {
      id: "reception",
      event: "Reception",
      description: "Dinner, drinks, and celebrating together.",
      startTime: "JUL 1 · 7:30 PM",
    },
  ],

  rsvp: {
    deadline: "June 1, 2027",
    email: "zumarandfaris2027@gmail.com",
    placeholderName: "e.g. Hamza Malik",
    placeholderEmail: "hello@example.com",
  },

  dressCode: {
    women:
      "Elegant formal attire in delicate pastel shades or rich jewel tones. Traditional formals, lehengas, and sarees are all welcome.",
    men: "Classic suit or traditional formal wear — sherwanis, prince coats, and bandhgalas encouraged.",
    note: "We kindly request guests to avoid white and black.",
  },
};

export const SITE = {
  name: WEDDING.couple.displayName,
  url: "https://preludepost.com",
  description: `You are cordially invited to celebrate the wedding of ${WEDDING.couple.displayName} on ${WEDDING.ceremony.displayDate} at ${WEDDING.venue.name}, ${WEDDING.venue.city}.`,
};

