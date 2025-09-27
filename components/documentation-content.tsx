import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Clock, User, ArrowRight, ExternalLink } from "lucide-react"

const documentationArticles = [
  {
    id: "intro-rf",
    title: "Introdução às Radiofrequências",
    description: "Conceitos fundamentais sobre radiofrequências, espectro eletromagnético e aplicações básicas.",
    category: "Primeiros Passos",
    level: "Básico",
    readTime: "10 min",
    author: "RF Portal Team",
    lastUpdated: "2025-01-15",
    tags: ["Fundamentos", "Teoria", "Iniciante"],
  },
  {
    id: "spectrum-overview",
    title: "Visão Geral do Espectro Eletromagnético",
    description: "Compreenda as diferentes faixas do espectro, suas características e aplicações práticas.",
    category: "Primeiros Passos",
    level: "Básico",
    readTime: "15 min",
    author: "RF Portal Team",
    lastUpdated: "2025-01-14",
    tags: ["Espectro", "Bandas", "Aplicações"],
  },
  {
    id: "propagation-models",
    title: "Modelos de Propagação",
    description: "Análise detalhada dos diferentes modelos de propagação de ondas eletromagnéticas.",
    category: "Teoria Fundamental",
    level: "Avançado",
    readTime: "25 min",
    author: "Dr. João Silva",
    lastUpdated: "2025-01-13",
    tags: ["Propagação", "Modelos", "Simulação"],
  },
  {
    id: "antenna-design",
    title: "Projeto de Antenas Dipolo",
    description: "Guia completo para projeto e construção de antenas dipolo para diferentes frequências.",
    category: "Antenas",
    level: "Intermediário",
    readTime: "20 min",
    author: "Eng. Maria Santos",
    lastUpdated: "2025-01-12",
    tags: ["Antenas", "Dipolo", "Projeto"],
  },
  {
    id: "customization-guide",
    title: "Guia de Customização",
    description: "Como personalizar e estender as funcionalidades do RF Portal para suas necessidades.",
    category: "Customização",
    level: "Intermediário",
    readTime: "30 min",
    author: "Dev Team",
    lastUpdated: "2025-01-11",
    tags: ["Customização", "API", "Desenvolvimento"],
  },
  {
    id: "smith-chart-tutorial",
    title: "Tutorial da Carta de Smith",
    description: "Aprenda a usar a Carta de Smith para análise de impedância e casamento de antenas.",
    category: "Teoria Fundamental",
    level: "Avançado",
    readTime: "35 min",
    author: "Prof. Carlos Lima",
    lastUpdated: "2025-01-10",
    tags: ["Smith Chart", "Impedância", "Análise"],
  },
]

const levelColors = {
  Básico: "bg-green-100 text-green-800 border-green-200",
  Intermediário: "bg-amber-100 text-amber-800 border-amber-200",
  Avançado: "bg-red-100 text-red-800 border-red-200",
}

export function DocumentationContent() {
  return (
    <div className="space-y-6">
      {/* Featured Article */}
      <Card className="border-border/50 bg-gradient-to-r from-primary/5 to-primary/10">
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">Em Destaque</Badge>
            <Badge className={levelColors["Básico"]}>Básico</Badge>
          </div>
          <CardTitle className="text-2xl text-foreground">Introdução às Radiofrequências</CardTitle>
          <CardDescription className="text-base">
            Comece sua jornada no mundo das radiofrequências com este guia abrangente que cobre todos os conceitos
            fundamentais.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              10 min de leitura
            </div>
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              RF Portal Team
            </div>
          </div>
          <Button className="w-full sm:w-auto">
            <BookOpen className="w-4 h-4 mr-2" />
            Começar Leitura
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </CardContent>
      </Card>

      {/* Articles Grid */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Todos os Artigos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {documentationArticles.map((article) => (
            <Card key={article.id} className="border-border/50 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="outline" className="text-xs">
                    {article.category}
                  </Badge>
                  <Badge className={`text-xs ${levelColors[article.level as keyof typeof levelColors]}`}>
                    {article.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg text-foreground hover:text-primary transition-colors">
                  {article.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{article.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {article.readTime}
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="w-3 h-3" />
                    {article.author}
                  </div>
                </div>

                <div className="flex flex-wrap gap-1">
                  {article.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  Ler Artigo
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Quick Links */}
      <Card className="border-border/50">
        <CardHeader>
          <CardTitle>Links Rápidos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
              <div className="text-left">
                <div className="font-medium">API Reference</div>
                <div className="text-xs text-muted-foreground">Documentação completa da API</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
              <div className="text-left">
                <div className="font-medium">Exemplos de Código</div>
                <div className="text-xs text-muted-foreground">Implementações práticas</div>
              </div>
            </Button>
            <Button variant="outline" className="justify-start h-auto p-4 bg-transparent">
              <div className="text-left">
                <div className="font-medium">FAQ</div>
                <div className="text-xs text-muted-foreground">Perguntas frequentes</div>
              </div>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
