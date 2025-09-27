"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronDown, ChevronRight, BookOpen, Calculator, Radio, Zap, Settings, FileText } from "lucide-react"

const navigationSections = [
  {
    id: "getting-started",
    title: "Primeiros Passos",
    icon: BookOpen,
    items: [
      { id: "intro", title: "Introdução ao RF", level: "Básico" },
      { id: "spectrum", title: "Espectro Eletromagnético", level: "Básico" },
      { id: "units", title: "Unidades e Medidas", level: "Básico" },
      { id: "safety", title: "Segurança em RF", level: "Básico" },
    ],
  },
  {
    id: "theory",
    title: "Teoria Fundamental",
    icon: Radio,
    items: [
      { id: "propagation", title: "Propagação de Ondas", level: "Intermediário" },
      { id: "transmission-lines", title: "Linhas de Transmissão", level: "Intermediário" },
      { id: "impedance", title: "Impedância e Casamento", level: "Intermediário" },
      { id: "smith-chart", title: "Carta de Smith", level: "Avançado" },
    ],
  },
  {
    id: "antennas",
    title: "Antenas",
    icon: Zap,
    items: [
      { id: "antenna-basics", title: "Fundamentos de Antenas", level: "Básico" },
      { id: "dipole", title: "Antenas Dipolo", level: "Intermediário" },
      { id: "yagi", title: "Antenas Yagi", level: "Avançado" },
      { id: "parabolic", title: "Antenas Parabólicas", level: "Avançado" },
    ],
  },
  {
    id: "calculations",
    title: "Cálculos e Ferramentas",
    icon: Calculator,
    items: [
      { id: "wavelength", title: "Comprimento de Onda", level: "Básico" },
      { id: "power-calculations", title: "Cálculos de Potência", level: "Intermediário" },
      { id: "link-budget", title: "Orçamento de Enlace", level: "Avançado" },
      { id: "noise-figure", title: "Figura de Ruído", level: "Avançado" },
    ],
  },
  {
    id: "customization",
    title: "Customização",
    icon: Settings,
    items: [
      { id: "installation", title: "Instalação", level: "Básico" },
      { id: "configuration", title: "Configuração", level: "Intermediário" },
      { id: "themes", title: "Temas e Estilos", level: "Intermediário" },
      { id: "api", title: "API Reference", level: "Avançado" },
    ],
  },
]

const levelColors = {
  Básico: "bg-green-100 text-green-800",
  Intermediário: "bg-amber-100 text-amber-800",
  Avançado: "bg-red-100 text-red-800",
}

export function DocumentationNav() {
  const [expandedSections, setExpandedSections] = useState<string[]>(["getting-started"])

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  return (
    <Card className="border-border/50 sticky top-24">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <FileText className="w-5 h-5" />
          Navegação
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        {navigationSections.map((section) => (
          <div key={section.id} className="space-y-1">
            <Button
              variant="ghost"
              onClick={() => toggleSection(section.id)}
              className="w-full justify-start p-2 h-auto"
            >
              {expandedSections.includes(section.id) ? (
                <ChevronDown className="w-4 h-4 mr-2" />
              ) : (
                <ChevronRight className="w-4 h-4 mr-2" />
              )}
              <section.icon className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">{section.title}</span>
            </Button>

            {expandedSections.includes(section.id) && (
              <div className="ml-6 space-y-1">
                {section.items.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-1">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="justify-start p-1 h-auto text-xs text-muted-foreground hover:text-foreground"
                    >
                      {item.title}
                    </Button>
                    <Badge
                      variant="outline"
                      className={`text-xs ${levelColors[item.level as keyof typeof levelColors]}`}
                    >
                      {item.level}
                    </Badge>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
