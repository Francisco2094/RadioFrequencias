"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Radio, Zap, Satellite, Ruler, Settings } from "lucide-react"

const categories = [
  { id: "all", label: "Todas", icon: Calculator, count: 15 },
  { id: "frequency", label: "Frequência", icon: Radio, count: 5 },
  { id: "power", label: "Potência", icon: Zap, count: 4 },
  { id: "antenna", label: "Antenas", icon: Satellite, count: 3 },
  { id: "propagation", label: "Propagação", icon: Ruler, count: 2 },
  { id: "conversion", label: "Conversões", icon: Settings, count: 1 },
]

export function CalculatorCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-foreground mb-4">Categorias</h2>
      <div className="flex flex-wrap gap-3">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? "default" : "outline"}
            onClick={() => setActiveCategory(category.id)}
            className="flex items-center gap-2"
          >
            <category.icon className="w-4 h-4" />
            {category.label}
            <Badge variant="secondary" className="ml-1 text-xs">
              {category.count}
            </Badge>
          </Button>
        ))}
      </div>
    </div>
  )
}
