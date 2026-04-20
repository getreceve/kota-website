import type { Metadata } from "next";
import UseCasePageTemplate from "@/components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Reduce Rep Ramp Time | Kota",
  description:
    "New reps performing in weeks, not months. Kota compresses ramp time by giving new hires access to your call library, objection playbook, and pre-call intelligence from day one.",
};

export default function Page() {
  return <UseCasePageTemplate slug="reduce-ramp-time" />;
}
