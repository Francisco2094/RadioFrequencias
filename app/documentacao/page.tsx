import { DocumentationNav } from "@/components/documentation-nav"
import { DocumentationContent } from "@/components/documentation-content"
import { DocumentationSearch } from "@/components/documentation-search"

export default function DocumentacaoPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Documentação Técnica</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Guias completos, tutoriais e referências técnicas para radiofrequências. Documentação estruturada para todos
            os níveis de conhecimento.
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <DocumentationSearch />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <DocumentationNav />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <DocumentationContent />
          </div>
        </div>
      </div>
    </div>
  )
}
