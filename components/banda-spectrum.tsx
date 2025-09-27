"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const spectrumBands = [
  { name: "VLF", range: "3-30 kHz", color: "bg-red-500", width: "5%" },
  { name: "LF", range: "30-300 kHz", color: "bg-orange-500", width: "8%" },
  { name: "MF", range: "300-3000 kHz", color: "bg-amber-500", width: "12%" },
  { name: "HF", range: "3-30 MHz", color: "bg-yellow-500", width: "15%" },
  { name: "VHF", range: "30-300 MHz", color: "bg-green-500", width: "20%" },
  { name: "UHF", range: "300-3000 MHz", color: "bg-blue-500", width: "25%" },
  { name: "SHF", range: "3-30 GHz", color: "bg-indigo-500", width: "15%" },
]

export function BandaSpectrum() {
  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="text-xl text-foreground">Visualização do Espectro</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Spectrum Bar */}
          <div className="relative h-16 bg-muted rounded-lg overflow-hidden">
            <div className="flex h-full">
              {spectrumBands.map((band, index) => (
                <div
                  key={index}
                  className={`${band.color} flex items-center justify-center text-white text-xs font-medium transition-all duration-300 hover:opacity-80 cursor-pointer`}
                  style={{ width: band.width }}
                  title={`${band.name}: ${band.range}`}
                >
                  {band.name}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {spectrumBands.map((band, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className={`w-4 h-4 ${band.color} rounded`} />
                <div className="text-sm">
                  <div className="font-medium text-foreground">{band.name}</div>
                  <div className="text-muted-foreground text-xs">{band.range}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Note */}
          <div className="text-sm text-muted-foreground text-center mt-4">
            Clique em uma banda para ver detalhes específicos e aplicações
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
