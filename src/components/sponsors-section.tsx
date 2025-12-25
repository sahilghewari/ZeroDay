import Image, { StaticImageData } from "next/image"

import presentedByLogo from "@/assests/nexaworks logo.jpg"
import coSponsoredLogo from "@/assests/cybx logo.jpg"
import foodPartnerOne from "@/assests/madras talkies.png"
import foodPartnerTwo from "@/assests/malyandi idliwala.jpg"
import foodPartnerThree from "@/assests/balaji wafers.png"
import travelPartnerLogo from "@/assests/bullet raja.png"
import entertainmentPartnerLogo from "@/assests/wetnjoy.png"
import stallPartnerOne from "@/assests/Wilfil logo.png"
import stallPartnerTwo from "@/assests/bakehouse botanica.png"
import stallPartnerThree from "@/assests/pizza hut.png"
import stallPartnerFour from "@/assests/rainbow waffle.png"
import stallPartnerFive from "@/assests/luna.png"

interface SponsorLogo {
  name: string
  image: StaticImageData
}

const presentedBy: SponsorLogo[] = [
  { name: "NexaWorks", image: presentedByLogo }
]

const coSponsored: SponsorLogo[] = [
  { name: "CYBX", image: coSponsoredLogo }
]

const foodPartners: SponsorLogo[] = [
  { name: "Madras Talkies", image: foodPartnerOne },
  { name: "Malyandi Idliwala", image: foodPartnerTwo },
  { name: "Balaji Wafers", image: foodPartnerThree }
]

const travelPartners: SponsorLogo[] = [
  { name: "Bullet Raja", image: travelPartnerLogo }
]

const entertainmentPartners: SponsorLogo[] = [
  { name: "WetnJoy", image: entertainmentPartnerLogo }
]

const stallPartners: SponsorLogo[] = [
  { name: "Wilfil", image: stallPartnerOne },
  { name: "Bakehouse Botanica", image: stallPartnerTwo },
  { name: "Pizza Hub", image: stallPartnerThree },
  { name: "Rainbow Waffle", image: stallPartnerFour },
  { name: "Luna", image: stallPartnerFive }
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="bg-gradient-to-b from-black via-slate-950 to-black border-t border-white/5">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-12">
        <div className="text-center space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.4em] text-slate-500">Partners</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Thanks To Our Sponsors</h2>
        </div>

        <div className="space-y-10">
          <div className="grid gap-6 md:grid-cols-2">
            <SponsorTier title="Presented by" logos={presentedBy} gridClassName="grid-cols-1" />
            <SponsorTier title="Co-sponsored" logos={coSponsored} gridClassName="grid-cols-1" />
          </div>

          <SponsorTier
            title="Food Partner"
            tagline="Fueling every build"
            logos={foodPartners}
            gridClassName="grid-cols-2 sm:grid-cols-3"
          />

          <div className="grid gap-6 md:grid-cols-2">
            <SponsorTier title="Travelling Partner" logos={travelPartners} gridClassName="grid-cols-1" />
            <SponsorTier title="Entertainment Partner" logos={entertainmentPartners} gridClassName="grid-cols-1" />
          </div>

          <SponsorTier
            title="Stall Partners"
            tagline="Experience zones on-site"
            logos={stallPartners}
            gridClassName="grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
          />
        </div>
      </div>
    </section>
  )
}

interface SponsorTierProps {
  title: string
  logos: SponsorLogo[]
  tagline?: string
  gridClassName?: string
}

function SponsorTier({ title, logos, tagline, gridClassName = "grid-cols-2" }: SponsorTierProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 shadow-[0_0_60px_rgba(45,212,191,0.08)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10" />
      <div className="relative">
        <p className="text-xs uppercase tracking-[0.35em] text-slate-400">{title}</p>
        {tagline && <p className="mt-2 text-base font-semibold text-white">{tagline}</p>}
        <div className={`mt-6 grid ${gridClassName} gap-5 sm:gap-8 place-items-center`}>
          {logos.map((logo) => (
            <div key={logo.name} className="w-full max-w-[260px] flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-6">
              <Image
                src={logo.image}
                alt={`${logo.name} logo placeholder`}
                className="h-20 w-auto object-contain"
                sizes="(max-width: 640px) 200px, 260px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
