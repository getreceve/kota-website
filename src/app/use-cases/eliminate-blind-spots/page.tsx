import type { Metadata } from "next";
import UseCasePageTemplate from "@/components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Eliminate Call Blind Spots | Kota",
  description:
    "Full visibility into every call without listening to a single recording. Kota automatically scores every call, surfaces objection patterns, and gives managers a live view of team performance.",
};

export default function Page() {
  return <UseCasePageTemplate slug="eliminate-blind-spots" />;
}
