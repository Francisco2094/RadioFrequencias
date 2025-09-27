"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Palette, Download, RotateCcw } from "lucide-react"

const colorPresets = [
  { name: "Padrão", primary: "#1f2937", secondary: "#f3f4f6" },
  { name: "Azul", primary: "#2563eb", secondary: "#dbeafe" },
  { name: "Verde", primary: "#059669", secondary: "#d1fae5" },
  { name: "Roxo", primary: "#7c3aed", secondary: "#ede9fe" },
  { name: "Laranja", primary: "#ea580c", secondary: "#fed7aa" },
]

export function ThemeCustomizer() {
  const [primaryColor, setPrimaryColor] = useState("#1f2937")
  const [secondaryColor, setSecondaryColor] = useState("#f3f4f6")
  const [selectedPreset, setSelectedPreset] = useState("Padrão")

  const applyPreset = (preset: (typeof colorPresets)[0]) => {
    setPrimaryColor(preset.primary)
    setSecondaryColor(preset.secondary)
    setSelectedPreset(preset.name)
  }

  const resetColors = () => {
    setPrimaryColor("#1f2937")
    setSecondaryColor("#f3f4f6")
    setSelectedPreset("Padrão")
  }

  const exportTheme = () => {
    const theme = {
      primary: primaryColor,
      secondary: secondaryColor,
      preset: selectedPreset,
    }

    const dataStr = JSON.stringify(theme, null, 2)
    const dataUri = "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)

    const exportFileDefaultName = "rf-portal-theme.json"

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  return (
    <div className="space-y-6 sticky top-24">
      {/* Theme Customizer */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Palette className="w-5 h-5" />
            Customizador de Tema
          </CardTitle>
          <CardDescription>Personalize as cores do RF Portal em tempo real</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Color Presets */}
          <div>
            <Label className="text-sm font-medium mb-3 block">Presets de Cores</Label>
            <div className="grid grid-cols-2 gap-2">
              {colorPresets.map((preset) => (
                <Button
                  key={preset.name}
                  variant={selectedPreset === preset.name ? "default" : "outline"}
                  size="sm"
                  onClick={() => applyPreset(preset)}
                  className="text-xs"
                >
                  {preset.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Custom Colors */}
          <div className="space-y-4">
            <div>
              <Label htmlFor="primary-color" className="text-sm font-medium">
                Cor Primária
              </Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="primary-color"
                  type="color"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="w-12 h-10 p-1 border-border"
                />
                <Input
                  type="text"
                  value={primaryColor}
                  onChange={(e) => setPrimaryColor(e.target.value)}
                  className="flex-1 font-mono text-sm"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="secondary-color" className="text-sm font-medium">
                Cor Secundária
              </Label>
              <div className="flex gap-2 mt-1">
                <Input
                  id="secondary-color"
                  type="color"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="w-12 h-10 p-1 border-border"
                />
                <Input
                  type="text"
                  value={secondaryColor}
                  onChange={(e) => setSecondaryColor(e.target.value)}
                  className="flex-1 font-mono text-sm"
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <Button onClick={exportTheme} size="sm" className="flex-1">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button onClick={resetColors} variant="outline" size="sm">
              <RotateCcw className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Preview */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Preview</CardTitle>
          <CardDescription>Visualize as mudanças em tempo real</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div
              className="h-12 rounded-lg flex items-center justify-center text-white font-medium"
              style={{ backgroundColor: primaryColor }}
            >
              Cor Primária
            </div>
            <div
              className="h-12 rounded-lg flex items-center justify-center text-gray-800 font-medium"
              style={{ backgroundColor: secondaryColor }}
            >
              Cor Secundária
            </div>
            <div className="text-xs text-muted-foreground text-center">
              As cores serão aplicadas aos botões, links e elementos de destaque
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Documentation Link */}
      <Card className="border-border/50">
        <CardContent className="pt-6">
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-foreground">Precisa de Ajuda?</h3>
            <p className="text-sm text-muted-foreground">Consulte nossa documentação completa sobre customização</p>
            <Button variant="outline" size="sm" className="w-full bg-transparent">
              Ver Documentação
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
