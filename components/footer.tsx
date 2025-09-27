import Link from "next/link"
import { Radio, Github, Mail, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Radio className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">RF Portal</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Portal completo sobre radiofrequências com recursos técnicos, calculadoras e documentação para
              profissionais e entusiastas.
            </p>
            <div className="flex space-x-4">
              <Link href="https://github.com" className="text-muted-foreground hover:text-foreground">
                <Github className="w-5 h-5" />
              </Link>
              <Link href="mailto:contato@rfportal.com" className="text-muted-foreground hover:text-foreground">
                <Mail className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Recursos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/bandas" className="text-muted-foreground hover:text-foreground">
                  Bandas de Frequência
                </Link>
              </li>
              <li>
                <Link href="/calculadoras" className="text-muted-foreground hover:text-foreground">
                  Calculadoras RF
                </Link>
              </li>
              <li>
                <Link href="/documentacao" className="text-muted-foreground hover:text-foreground">
                  Documentação
                </Link>
              </li>
              <li>
                <Link href="/exemplos" className="text-muted-foreground hover:text-foreground">
                  Exemplos Práticos
                </Link>
              </li>
            </ul>
          </div>

          {/* Technical */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Técnico</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/api" className="text-muted-foreground hover:text-foreground">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/customizacao" className="text-muted-foreground hover:text-foreground">
                  Customização
                </Link>
              </li>
              <li>
                <Link href="/contribuir" className="text-muted-foreground hover:text-foreground">
                  Contribuir
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-muted-foreground hover:text-foreground flex items-center">
                  Changelog <ExternalLink className="w-3 h-3 ml-1" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2025 RF Portal. Todos os direitos reservados. Site customizável e open-source.</p>
        </div>
      </div>
    </footer>
  )
}
