"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Copy, RotateCcw } from "lucide-react"

const frequencyUnits = [
  { value: "hz", label: "Hz", multiplier: 1 },
  { value: "khz", label: "kHz", multiplier: 1000 },
  { value: "mhz", label: "MHz", multiplier: 1000000 },
  { value: "ghz", label: "GHz", multiplier: 1000000000 },
]

const wavelengthUnits = [
  { value: "m", label: "metros", multiplier: 1 },
  { value: "cm", label: "centímetros", multiplier: 100 },
  { value: "mm", label: "milímetros", multiplier: 1000 },
]

const speedOfLight = 299792458 // m/s

export function WavelengthCalculator() {
  const [frequency, setFrequency] = useState("")
  const [frequencyUnit, setFrequencyUnit] = useState("mhz")
  const [wavelength, setWavelength] = useState("")
  const [wavelengthUnit, setWavelengthUnit] = useState("m")
  const [calculationMode, setCalculationMode] = useState<"freq-to-wave" | "wave-to-freq">("freq-to-wave")

  const calculateWavelength = () => {
    if (!frequency) return

    const freqUnit = frequencyUnits.find((u) => u.value === frequencyUnit)
    const waveUnit = wavelengthUnits.find((u) => u.value === wavelengthUnit)

    if (!freqUnit || !waveUnit) return

    const frequencyInHz = Number.parseFloat(frequency) * freqUnit.multiplier
    const wavelengthInMeters = speedOfLight / frequencyInHz
    const result = wavelengthInMeters * waveUnit.multiplier

    setWavelength(result.toFixed(6))
  }

  const calculateFrequency = () => {
    if (!wavelength) return

    const waveUnit = wavelengthUnits.find((u) => u.value === wavelengthUnit)
    const freqUnit = frequencyUnits.find((u) => u.value === frequencyUnit)

    if (!freqUnit || !waveUnit) return

    const wavelengthInMeters = Number.parseFloat(wavelength) / waveUnit.multiplier
    const frequencyInHz = speedOfLight / wavelengthInMeters
    const result = frequencyInHz / freqUnit.multiplier

    setFrequency(result.toFixed(6))
  }

  const handleCalculate = () => {
    if (calculationMode === "freq-to-wave") {
      calculateWavelength()
    } else {
      calculateFrequency()
    }
  }

  const handleReset = () => {
    setFrequency("")
    setWavelength("")
  }

  const copyResult = () => {
    const result = calculationMode === "freq-to-wave" ? wavelength : frequency
    navigator.clipboard.writeText(result)
  }

  return (
    <div className="space-y-6">
      {/* Mode Selection */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            Modo de Cálculo
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Button
              variant={calculationMode === "freq-to-wave" ? "default" : "outline"}
              onClick={() => setCalculationMode("freq-to-wave")}
              className="flex-1"
            >
              Frequência → Comprimento de Onda
            </Button>
            <Button
              variant={calculationMode === "wave-to-freq" ? "default" : "outline"}
              onClick={() => setCalculationMode("wave-to-freq")}
              className="flex-1"
            >
              Comprimento de Onda → Frequência
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Calculator */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Input */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>{calculationMode === "freq-to-wave" ? "Frequência" : "Comprimento de Onda"}</CardTitle>
            <CardDescription>
              {calculationMode === "freq-to-wave"
                ? "Digite a frequência para calcular o comprimento de onda"
                : "Digite o comprimento de onda para calcular a frequência"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>{calculationMode === "freq-to-wave" ? "Frequência" : "Comprimento de Onda"}</Label>
              <Input
                type="number"
                value={calculationMode === "freq-to-wave" ? frequency : wavelength}
                onChange={(e) =>
                  calculationMode === "freq-to-wave" ? setFrequency(e.target.value) : setWavelength(e.target.value)
                }
                placeholder="Digite o valor"
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label>Unidade</Label>
              <Select
                value={calculationMode === "freq-to-wave" ? frequencyUnit : wavelengthUnit}
                onValueChange={calculationMode === "freq-to-wave" ? setFrequencyUnit : setWavelengthUnit}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(calculationMode === "freq-to-wave" ? frequencyUnits : wavelengthUnits).map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex gap-2">
              <Button onClick={handleCalculate} className="flex-1">
                <Calculator className="w-4 h-4 mr-2" />
                Calcular
              </Button>
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Result */}
        <Card className="border-border/50">
          <CardHeader>
            <CardTitle>{calculationMode === "freq-to-wave" ? "Comprimento de Onda" : "Frequência"}</CardTitle>
            <CardDescription>Resultado do cálculo</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>{calculationMode === "freq-to-wave" ? "Comprimento de Onda" : "Frequência"}</Label>
              <div className="flex gap-2">
                <Input
                  type="text"
                  value={calculationMode === "freq-to-wave" ? wavelength : frequency}
                  readOnly
                  className="text-lg font-mono"
                  placeholder="Resultado aparecerá aqui"
                />
                <Button variant="outline" size="icon" onClick={copyResult}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Unidade</Label>
              <Select
                value={calculationMode === "freq-to-wave" ? wavelengthUnit : frequencyUnit}
                onValueChange={calculationMode === "freq-to-wave" ? setWavelengthUnit : setFrequencyUnit}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {(calculationMode === "freq-to-wave" ? wavelengthUnits : frequencyUnits).map((unit) => (
                    <SelectItem key={unit.value} value={unit.value}>
                      {unit.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quick Reference */}
            <div className="pt-4 border-t border-border">
              <h4 className="text-sm font-medium text-foreground mb-2">Referência Rápida</h4>
              <div className="space-y-1 text-xs text-muted-foreground">
                <div className="flex justify-between">
                  <span>Velocidade da luz:</span>
                  <span className="font-mono">299.792.458 m/s</span>
                </div>
                <div className="flex justify-between">
                  <span>Fórmula:</span>
                  <span className="font-mono">λ = c / f</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Formula Explanation */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Como Funciona</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Fórmula Básica</h4>
              <div className="bg-muted p-4 rounded-lg font-mono text-center text-lg">λ = c / f</div>
              <div className="mt-2 text-sm text-muted-foreground space-y-1">
                <div>
                  <strong>λ</strong> = Comprimento de onda (metros)
                </div>
                <div>
                  <strong>c</strong> = Velocidade da luz (299.792.458 m/s)
                </div>
                <div>
                  <strong>f</strong> = Frequência (Hz)
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Aplicações Práticas</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 text-xs">
                    Antenas
                  </Badge>
                  Dimensionamento de elementos radiantes
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 text-xs">
                    Linhas
                  </Badge>
                  Cálculo de linhas de transmissão
                </li>
                <li className="flex items-start">
                  <Badge variant="outline" className="mr-2 text-xs">
                    Filtros
                  </Badge>
                  Projeto de filtros e ressonadores
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
