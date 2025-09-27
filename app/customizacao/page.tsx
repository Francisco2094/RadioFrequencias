import { CustomizationGuide } from "@/components/customization-guide"
import { ThemeCustomizer } from "@/components/theme-customizer"
import { CodeExamples } from "@/components/code-examples"

export default function CustomizacaoPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Customização do RF Portal
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Personalize completamente o RF Portal para suas necessidades. Código aberto, documentado e fácil de
            modificar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <CustomizationGuide />
            <CodeExamples />
          </div>

          {/* Theme Customizer Sidebar */}
          <div className="lg:col-span-1">
            <ThemeCustomizer />
          </div>
        </div>
      </div>
    </div>
  )
}
