import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Radio, Zap, Satellite, Ruler, ArrowRight } from "lucide-react"
import Link from "next/link"

const calculators = [
  {
    id: "comprimento-onda",
    title: "Comprimento de Onda",
    description: "Calcule o comprimento de onda para qualquer frequência no espectro eletromagnético.",
    category: "Frequência",
    icon: Radio,
    difficulty: "Básico",
    features: ["Conversão bidirecional", "Múltiplas unidades", "Gráfico visual"],
    href: "/calculadoras/comprimento-onda",
  },
  {
    id: "potencia",
    title: "Conversor de Potência",
    description: "Converta entre dBm, dBW, Watts e outras unidades de potência RF.",
    category: "Potência",
    icon: Zap,
    difficulty: "Básico",
    features: ["Múltiplas unidades", "Histórico de cálculos", "Exportar resultados"],
    href: "/calculadoras/potencia",
  },
  {
    id: "dipolo",
    title: "Antena Dipolo",
    description: "Dimensione antenas dipolo de meia onda para qualquer frequência.",
    category: "Antenas",
    icon: Satellite,
    difficulty: "Intermediário",
    features: ["Cálculo automático", "Diagrama de radiação", "Materiais sugeridos"],
    href: "/calculadoras/dipolo",
  },
  {
    id: "yagi",
    title: "Antena Yagi",
    description: "Projete antenas Yagi com múltiplos elementos e otimização de ganho.",
    category: "Antenas",
    icon: Satellite,
    difficulty: "Avançado",
    features: ["Otimização automática", "Simulação 3D", "Análise de SWR"],
    href: "/calculadoras/yagi",
  },
  {
    id: "propagacao",
    title: "Propagação HF",
    description: "Predição de propagação ionosférica para comunicações HF.",
    category: "Propagação",
    icon: Ruler,
    difficulty: "Avançado",
    features: ["Dados em tempo real", "Mapas de propagação", "Previsão 24h"],
    href: "/calculadoras/propagacao",
  },
  {
    id: "vswr",
    title: "Calculadora VSWR",
    description: "Calcule VSWR, coeficiente de reflexão e perda de retorno.",
    category: "Potência",
    icon: Zap,
    difficulty: "Intermediário",
    features: ["Gráfico Smith Chart", "Análise de impedância", "Sugestões de ajuste"],
    href: "/calculadoras/vswr",
  },
  {
    id: "linha-transmissao",
    title: "Linha de Transmissão",
    description: "Calcule impedância, atenuação e características de linhas de transmissão.",
    category: "Propagação",
    icon: Ruler,
    difficulty: "Avançado",
    features: ["Múltiplos tipos de cabo", "Gráfico de impedância", "Cálculo de perdas"],
    href: "/calculadoras/linha-transmissao",
  },
  {
    id: "filtros",
    title: "Projeto de Filtros",
    description: "Projete filtros passa-baixa, passa-alta e passa-banda.",
    category: "Frequência",
    icon: Radio,
    difficulty: "Avançado",
    features: ["Múltiplas topologias", "Resposta em frequência", "Lista de componentes"],
    href: "/calculadoras/filtros",
  },
  {
    id: "attenuator",
    title: "Atenuador Pi/T",
    description: "Calcule valores de resistores para atenuadores Pi e T.",
    category: "Potência",
    icon: Zap,
    difficulty: "Intermediário",
    features: ["Topologias Pi e T", "Múltiplas impedâncias", "Tolerância de componentes"],
    href: "/calculadoras/attenuator",
  },
]

const difficultyColors = {
  Básico: "bg-green-100 text-green-800 border-green-200",
  Intermediário: "bg-amber-100 text-amber-800 border-amber-200",
  Avançado: "bg-red-100 text-red-800 border-red-200",
}

export function CalculatorGrid() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-foreground">Todas as Calculadoras</h2>
        <Badge variant="secondary" className="text-sm">
          {calculators.length} ferramentas disponíveis
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {calculators.map((calc) => (
          <Card key={calc.id} className="border-border/50 hover:shadow-lg transition-all duration-300 group">
            <CardHeader>
              <div className="flex items-start justify-between mb-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <calc.icon className="w-6 h-6 text-primary" />
                </div>
                <Badge
                  variant="outline"
                  className={`text-xs ${difficultyColors[calc.difficulty as keyof typeof difficultyColors]}`}
                >
                  {calc.difficulty}
                </Badge>
              </div>
              <CardTitle className="text-lg text-foreground group-hover:text-primary transition-colors">
                {calc.title}
              </CardTitle>
              <CardDescription className="text-sm text-muted-foreground">{calc.category}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground leading-relaxed">{calc.description}</p>

              <div>
                <h4 className="text-sm font-medium text-foreground mb-2">Recursos:</h4>
                <ul className="space-y-1">
                  {calc.features.map((feature, index) => (
                    <li key={index} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Button asChild className="w-full group-hover:bg-primary/90 transition-colors">
                <Link href={calc.href} className="flex items-center justify-center">
                  Usar Calculadora
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
