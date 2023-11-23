import { Local } from "@/components/Local";
import { Hero } from "@/components/Hero";
import { Pricing } from "@/components/Pricing";
import { Subscribe } from "@/components/Subscribe";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen px-5 py-20 md:p-20 flex flex-col items-center">
      <Hero/>
      <Local/>
      <Pricing/>
      <Subscribe/>
      <Footer/>
    </main>
  )
}
