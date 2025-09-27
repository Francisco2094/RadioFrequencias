import { Hero } from "@/components/hero"
import { FeaturesGrid } from "@/components/features-grid"
import { TechnicalOverview } from "@/components/technical-overview"
import { QuickTools } from "@/components/quick-tools"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturesGrid />
      <TechnicalOverview />
      <QuickTools />
    </div>
  )
}
