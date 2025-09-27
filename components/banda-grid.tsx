import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Info } from "lucide-react"

const bandasData = [
  {
    name: "Banda de 2 metros",
    frequency: "144-148 MHz",
    category: "VHF",
    applications: ["Radioamador", "Emergência", "Repetidoras"],
    regulation: "ITU Região 2",
    power: "Até 1500W",
    propagation: "Linha de visada",
    description: "Uma das bandas mais populares para radioamadores, ideal para comunicação local e regional.",
  },
  {
    name: "Banda de 70 cm",
    frequency: "420-450 MHz",
    category: "UHF",
    applications: ["Radioamador", "PMR", "Trunking"],
    regulation: "ITU Região 2",
    power: "Até 1500W",
    propagation: "Linha de visada",
    description: "Banda UHF versátil com excelente penetração em ambientes urbanos.",
  },
  {
    name: "WiFi 2.4 GHz",
    frequency: "2400-2485 MHz",
    category: "UHF",
    applications: ["WiFi", "Bluetooth", "ISM"],
    regulation: "Banda ISM",
    power: "Até 100mW EIRP",
    propagation: "Linha de visada",
    description: "Banda ISM amplamente utilizada para comunicações sem fio de curta distância.",
  },
  {
    name: "Banda de 20 metros",
    frequency: "14.000-14.350 MHz",
    category: "HF",
    applications: ["Radioamador", "DX", "Contestos"],
    regulation: "ITU Global",
    power: "Até 1500W",
    propagation: "Ionosférica",
    description: "Excelente para comunicações de longa distância durante o dia.",
  },
  {
    name: "Banda de 40 metros",
    frequency: "7.000-7.300 MHz",
    category: "HF",
    applications: ["Radioamador", "Regional", "NVIS"],
    regulation: "ITU Região 2",
    power: "Até 1500W",
    propagation: "Ionosférica",
    description: "Ideal para comunicações regionais e continentais, especialmente à noite.",
  },
  {
    name: "GPS L1",
    frequency: "1575.42 MHz",
    category: "UHF",
    applications: ["GPS", "GNSS", "Navegação"],
    regulation: "ITU Global",
    power: "Sinal fraco",
    propagation: "Satélite",
    description: "Frequência principal do sistema GPS para navegação civil.",
  },
]

export function BandaGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Bandas Detalhadas</h2>
        <Badge variant="secondary" className="text-sm">
          {bandasData.length} bandas encontradas
        </Badge>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {bandasData.map((banda, index) => (
          <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg text-foreground">{banda.name}</CardTitle>
                  <CardDescription className="text-base font-mono text-muted-foreground">
                    {banda.frequency}
                  </CardDescription>
                </div>
                <Badge variant="outline" className="text-xs">
                  {banda.category}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{banda.description}</p>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="font-medium text-foreground">Regulamentação:</span>
                  <p className="text-muted-foreground">{banda.regulation}</p>
                </div>
                <div>
                  <span className="font-medium text-foreground">Potência:</span>
                  <p className="text-muted-foreground">{banda.power}</p>
                </div>
                <div className="col-span-2">
                  <span className="font-medium text-foreground">Propagação:</span>
                  <p className="text-muted-foreground">{banda.propagation}</p>
                </div>
              </div>

              <div>
                <span className="font-medium text-foreground text-sm">Aplicações:</span>
                <div className="flex flex-wrap gap-2 mt-2">
                  {banda.applications.map((app, appIndex) => (
                    <Badge key={appIndex} variant="secondary" className="text-xs">
                      {app}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <Info className="w-4 h-4 mr-2" />
                  Detalhes
                </Button>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Regulamentação
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Load More */}
      <div className="text-center pt-8">
        <Button variant="outline" size="lg">
          Carregar Mais Bandas
        </Button>
      </div>
    </div>
  )
}
