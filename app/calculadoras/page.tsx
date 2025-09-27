import { CalculatorGrid } from "@/components/calculator-grid"
import { CalculatorCategories } from "@/components/calculator-categories"

export default function CalculadorasPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Calculadoras RF</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Ferramentas avançadas para cálculos de radiofrequência, antenas, propagação e muito mais. Todas as
            calculadoras são responsivas e funcionam offline.
          </p>
        </div>

        {/* Categories */}
        <CalculatorCategories />

        {/* Calculator Grid */}
        <CalculatorGrid />
      </div>
    </div>
  )
}
