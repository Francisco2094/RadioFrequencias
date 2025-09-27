import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Settings, Palette, Code, Download, Github, FileText } from "lucide-react"

const customizationFeatures = [
  {
    icon: Palette,
    title: "Temas e Cores",
    description: "Sistema completo de design tokens para personalização visual",
    features: ["Cores customizáveis", "Modo escuro/claro", "Gradientes", "Tipografia"],
    difficulty: "Básico",
  },
  {
    icon: Settings,
    title: "Componentes",
    description: "Biblioteca de componentes modulares e reutilizáveis",
    features: ["Componentes React", "Props customizáveis", "Variantes", "Composição"],
    difficulty: "Intermediário",
  },
  {
    icon: Code,
    title: "Funcionalidades",
    description: "Adicione novas calculadoras e ferramentas RF",
    features: ["API extensível", "Plugins", "Hooks customizados", "Validações"],
    difficulty: "Avançado",
  },
]

const installationSteps = [
  {
    step: 1,
    title: "Clone o Repositório",
    description: "Faça o download do código fonte",
    code: "git clone https://github.com/rf-portal/rf-portal.git",
  },
  {
    step: 2,
    title: "Instale Dependências",
    description: "Configure o ambiente de desenvolvimento",
    code: "npm install && npm run dev",
  },
  {
    step: 3,
    title: "Customize",
    description: "Modifique cores, componentes e funcionalidades",
    code: "Edite globals.css e components/",
  },
]

export function CustomizationGuide() {
  return (
    <div className="space-y-8">
      {/* Overview */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="w-5 h-5" />
            Visão Geral da Customização
          </CardTitle>
          <CardDescription>
            O RF Portal foi projetado para ser completamente customizável. Todos os componentes, estilos e
            funcionalidades podem ser modificados.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {customizationFeatures.map((feature, index) => (
              <div key={index} className="p-4 border border-border rounded-lg">
                <div className="flex items-center gap-2 mb-3">
                  <feature.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <Badge variant="outline" className="text-xs">
                    {feature.difficulty}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-3">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.features.map((feat, featIndex) => (
                    <li key={featIndex} className="text-xs text-muted-foreground flex items-center">
                      <div className="w-1 h-1 bg-primary rounded-full mr-2" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Installation Guide */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Guia de Instalação
          </CardTitle>
          <CardDescription>Siga estes passos para configurar o RF Portal em seu ambiente local</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {installationSteps.map((step) => (
              <div key={step.step} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{step.description}</p>
                  <div className="bg-muted p-3 rounded-lg font-mono text-sm">{step.code}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-4 mt-6">
            <Button className="flex-1">
              <Github className="w-4 h-4 mr-2" />
              Ver no GitHub
            </Button>
            <Button variant="outline" className="flex-1 bg-transparent">
              <FileText className="w-4 h-4 mr-2" />
              Documentação Completa
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Architecture */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Arquitetura do Projeto</CardTitle>
          <CardDescription>Estrutura de pastas e organização do código</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
            <div>rf-portal/</div>
            <div className="ml-2">
              ├── app/ <span className="text-muted-foreground"># Páginas Next.js</span>
            </div>
            <div className="ml-2">
              ├── components/ <span className="text-muted-foreground"># Componentes React</span>
            </div>
            <div className="ml-2">
              ├── lib/ <span className="text-muted-foreground"># Utilitários e helpers</span>
            </div>
            <div className="ml-2">
              ├── public/ <span className="text-muted-foreground"># Assets estáticos</span>
            </div>
            <div className="ml-2">
              ├── styles/ <span className="text-muted-foreground"># Estilos globais</span>
            </div>
            <div className="ml-2">
              └── docs/ <span className="text-muted-foreground"># Documentação</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
