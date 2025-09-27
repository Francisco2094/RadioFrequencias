import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, Zap, Radio, ArrowRight } from "lucide-react"
import Link from "next/link"

const quickTools = [
  {
    icon: Calculator,
    title: "Calculadora de Comprimento de Onda",
    description: "Calcule rapidamente o comprimento de onda para qualquer frequência",
    href: "/calculadoras/comprimento-onda",
    color: "border-blue-500/20 hover:border-blue-500/40",
  },
  {
    icon: Zap,
    title: "Conversor de Potência",
    description: "Converta entre dBm, Watts e outras unidades de potência",
    href: "/calculadoras/potencia",
    color: "border-green-500/20 hover:border-green-500/40",
  },
  {
    icon: Radio,
    title: "Calculadora de Antena",
    description: "Dimensione antenas dipolo, yagi e outras configurações",
    href: "/calculadoras/antena",
    color: "border-amber-500/20 hover:border-amber-500/40",
  },
]

export function QuickTools() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Ferramentas Rápidas</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Acesse rapidamente as calculadoras mais utilizadas para seus projetos de RF.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {quickTools.map((tool, index) => (
            <Card key={index} className={`transition-all duration-300 hover:shadow-lg ${tool.color}`}>
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <tool.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-lg text-foreground">{tool.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  {tool.description}
                </CardDescription>
                <Button asChild variant="outline" size="sm" className="w-full bg-transparent">
                  <Link href={tool.href} className="flex items-center justify-center">
                    Usar Ferramenta
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/calculadoras" className="flex items-center">
              Ver Todas as Calculadoras
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
