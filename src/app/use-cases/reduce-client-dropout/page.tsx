import type { Metadata } from "next";
import UseCasePageTemplate from "@/components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Reduce Client Dropout | Kota",
  description:
    "Enrolled clients who drop out cost you every fee on unsettled accounts. Kota automates every client touchpoint from enrollment to program completion to keep clients engaged and on track.",
};

export default function Page() {
  return <UseCasePageTemplate slug="reduce-client-dropout" />;
}
