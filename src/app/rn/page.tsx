import { FooterRN } from "@/components/FooterRN";
import { Hero } from "@/components/Hero";
import { Local } from "@/components/Local";
import { PricingRN } from "@/components/PricingRN";

export default () => {
  return(
    <main className="w-full min-h-screen px-5 py-20 md:p-20 flex flex-col items-center bg-[url(/bg.png)]">
      <Hero/>
      <Local/>
      <PricingRN/>
      <FooterRN/>
    </main>
  );
}