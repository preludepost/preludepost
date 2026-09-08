/**
 * Shared TypeScript interfaces for the wedding invitation app.
 */

/** Data shape for the RSVP form */
export interface RSVPFormData {
  fullName: string;
  email: string;
  attendance: "yes" | "no" | "";
  wishes: string;
}

/** Submission state for the RSVP form */
export type SubmitStatus = "idle" | "submitting" | "success" | "error";

/** A single item in the program timeline */
export interface TimelineItem {
  id: string;
  event: string;
  description: string;
  startTime: string;
}

/** A pre-wedding event card */
export interface PreWeddingEvent {
  id: string;
  name: string;
  date: string;
  time: string;
  description: string;
  image: string;
  imageAlt: string;
}
