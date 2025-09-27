"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const filterCategories = [
  { id: "all", label: "Todas", count: 50 },
  { id: "hf", label: "HF (3-30 MHz)", count: 12 },
  { id: "vhf", label: "VHF (30-300 MHz)", count: 15 },
  { id: "uhf", label: "UHF (300-3000 MHz)", count: 18 },
  { id: "microwave", label: "Microondas (>3 GHz)", count: 5 },
]

const applicationFilters = [
  "Radioamador",
  "Radiodifusão",
  "Celular",
  "WiFi",
  "Bluetooth",
  "GPS",
  "Radar",
  "Satélite",
  "Aviação",
  "Marítimo",
]

export function BandaFilters() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeApplications, setActiveApplications] = useState<string[]>([])

  const toggleApplication = (app: string) => {
    setActiveApplications((prev) => (prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]))
  }

  return (
    <div className="space-y-6">
      {/* Category Filters */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-3">Faixas de Frequência</h3>
        <div className="flex flex-wrap gap-2">
          {filterCategories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="text-sm"
            >
              {category.label}
              <Badge variant="secondary" className="ml-2 text-xs">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>
      </div>

      {/* Application Filters */}
      <div>
        <h3 className="text-sm font-medium text-foreground mb-3">Aplicações</h3>
        <div className="flex flex-wrap gap-2">
          {applicationFilters.map((app) => (
            <Button
              key={app}
              variant={activeApplications.includes(app) ? "default" : "outline"}
              size="sm"
              onClick={() => toggleApplication(app)}
              className="text-sm"
            >
              {app}
            </Button>
          ))}
        </div>
      </div>

      {/* Active Filters Summary */}
      {activeApplications.length > 0 && (
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Filtros ativos:</span>
          {activeApplications.map((app) => (
            <Badge key={app} variant="secondary" className="text-xs">
              {app}
              <Button
                variant="ghost"
                size="sm"
                onClick={() => toggleApplication(app)}
                className="ml-1 h-auto p-0 text-xs hover:bg-transparent"
              >
                ×
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  )
}
