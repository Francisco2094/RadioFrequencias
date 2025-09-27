import { Button } from "@/components/ui/button"
import { ArrowRight, Radio, Calculator } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 grid-pattern opacity-30" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-500 rounded-full wave-animation opacity-60"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-green-500 rounded-full wave-animation opacity-40"
          style={{ animationDelay: "0.5s" }}
        />
        <div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-amber-500 rounded-full wave-animation opacity-50"
          style={{ animationDelay: "1s" }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-1 h-1 bg-purple-500 rounded-full wave-animation opacity-30"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-2xl mb-6 glow-blue">
            <Radio className="w-8 h-8 text-primary-foreground" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
            Portal de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Radiofrequências
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
            Recursos completos, calculadoras avançadas e documentação técnica para profissionais e entusiastas de RF.
            Totalmente customizável e responsivo.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/bandas" className="flex items-center">
              Explorar Bandas RF
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
            <Link href="/calculadoras" className="flex items-center">
              <Calculator className="mr-2 w-5 h-5" />
              Calculadoras
            </Link>
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">50+</div>
            <div className="text-muted-foreground">Bandas de Frequência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">15+</div>
            <div className="text-muted-foreground">Calculadoras RF</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-2">100%</div>
            <div className="text-muted-foreground">Customizável</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
