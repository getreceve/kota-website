import type { Metadata } from "next";
import UseCasePageTemplate from "@/components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Increase Enrollment Rate | Kota",
  description:
    "Stop leaving enrollable accounts on the table. Kota gives every rep pre-call intelligence, a playbook built from your own winning calls, and scoring against your own script standards.",
};

export default function Page() {
  return <UseCasePageTemplate slug="increase-enrollment-rate" />;
}
