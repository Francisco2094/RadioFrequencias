import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Radio, Calculator, BookOpen, Zap, Settings, Globe } from "lucide-react"

const features = [
  {
    icon: Radio,
    title: "Bandas de Frequência",
    description: "Catálogo completo de bandas RF com informações detalhadas sobre alocação, uso e regulamentações.",
    color: "glow-blue",
  },
  {
    icon: Calculator,
    title: "Calculadoras RF",
    description: "Ferramentas avançadas para cálculos de propagação, antenas, potência e muito mais.",
    color: "glow-green",
  },
  {
    icon: BookOpen,
    title: "Documentação Técnica",
    description: "Guias detalhados, tutoriais e referências técnicas para todos os níveis de conhecimento.",
    color: "glow-amber",
  },
  {
    icon: Zap,
    title: "Análise de Propagação",
    description: "Modelos de propagação, análise de cobertura e ferramentas de predição de sinal.",
    color: "glow-blue",
  },
  {
    icon: Settings,
    title: "Totalmente Customizável",
    description: "Código aberto e documentado para fácil personalização e extensão das funcionalidades.",
    color: "glow-green",
  },
  {
    icon: Globe,
    title: "Padrões Internacionais",
    description: "Conformidade com ITU, FCC, ANATEL e outros órgãos reguladores internacionais.",
    color: "glow-amber",
  },
]

export function FeaturesGrid() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Recursos Completos para RF
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Tudo que você precisa para trabalhar com radiofrequências em uma plataforma integrada e responsiva.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`hover:shadow-lg transition-all duration-300 ${feature.color} border-border/50`}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
