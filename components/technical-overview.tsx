import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const technicalSpecs = [
  {
    category: "Bandas HF",
    frequency: "3-30 MHz",
    applications: ["Comunicação de longa distância", "Radioamador", "Radiodifusão"],
    propagation: "Ionosférica",
  },
  {
    category: "Bandas VHF",
    frequency: "30-300 MHz",
    applications: ["TV", "FM", "Comunicação móvel", "Aviação"],
    propagation: "Linha de visada",
  },
  {
    category: "Bandas UHF",
    frequency: "300-3000 MHz",
    applications: ["Celular", "WiFi", "Bluetooth", "GPS"],
    propagation: "Linha de visada",
  },
  {
    category: "Microondas",
    frequency: "3-30 GHz",
    applications: ["Radar", "Satélite", "5G", "Radioastronomia"],
    propagation: "Atmosférica",
  },
]

export function TechnicalOverview() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Visão Técnica das Frequências
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Compreenda as características e aplicações das diferentes faixas do espectro eletromagnético.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {technicalSpecs.map((spec, index) => (
            <Card key={index} className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-xl text-foreground">{spec.category}</CardTitle>
                  <Badge variant="secondary" className="text-sm font-mono">
                    {spec.frequency}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground">Propagação: {spec.propagation}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Principais Aplicações:</h4>
                  <div className="flex flex-wrap gap-2">
                    {spec.applications.map((app, appIndex) => (
                      <Badge key={appIndex} variant="outline" className="text-xs">
                        {app}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Technical Note */}
        <div className="mt-16 p-6 bg-muted/50 rounded-lg border border-border/50">
          <h3 className="text-lg font-semibold text-foreground mb-3">Nota Técnica</h3>
          <p className="text-muted-foreground leading-relaxed">
            Este portal fornece informações baseadas nos padrões internacionais da ITU (International Telecommunication
            Union) e regulamentações nacionais. As frequências e suas aplicações podem variar entre países e regiões.
            Sempre consulte as autoridades reguladoras locais para informações específicas da sua região.
          </p>
        </div>
      </div>
    </section>
  )
}
