import type { Metadata } from "next";
import UseCasePageTemplate from "@/components/UseCasePageTemplate";

export const metadata: Metadata = {
  title: "Reactivate Dead Leads | Kota",
  description:
    "You already paid for these leads. Kota identifies your highest-probability reactivation candidates and runs automated multi-channel sequences to bring them back into your pipeline.",
};

export default function Page() {
  return <UseCasePageTemplate slug="reactivate-dead-leads" />;
}
