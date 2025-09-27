import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Code, FileText } from "lucide-react"

const codeExamples = [
  {
    title: "Adicionando Nova Calculadora",
    description: "Como criar uma nova calculadora RF personalizada",
    language: "tsx",
    code: `// components/my-calculator.tsx
'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export function MyCalculator() {
  const [frequency, setFrequency] = useState('')
  const [result, setResult] = useState('')

  const calculate = () => {
    // Sua lógica de cálculo aqui
    const wavelength = 299792458 / (parseFloat(frequency) * 1000000)
    setResult(wavelength.toFixed(6))
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Minha Calculadora</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          type="number"
          placeholder="Frequência (MHz)"
          value={frequency}
          onChange={(e) => setFrequency(e.target.value)}
        />
        <Button onClick={calculate}>Calcular</Button>
        {result && <div>Resultado: {result} metros</div>}
      </CardContent>
    </Card>
  )
}`,
  },
  {
    title: "Customizando Cores do Tema",
    description: "Modificar o sistema de cores no globals.css",
    language: "css",
    code: `/* app/globals.css */
:root {
  /* Suas cores personalizadas */
  --primary: oklch(0.4 0.2 240); /* Azul personalizado */
  --secondary: oklch(0.95 0.02 240); /* Azul claro */
  --accent: oklch(0.6 0.25 120); /* Verde accent */
  
  /* Cores de status */
  --success: oklch(0.6 0.2 120);
  --warning: oklch(0.8 0.2 60);
  --error: oklch(0.6 0.25 20);
}

/* Modo escuro */
.dark {
  --primary: oklch(0.6 0.2 240);
  --secondary: oklch(0.1 0.02 240);
  --background: oklch(0.05 0 0);
  --foreground: oklch(0.95 0 0);
}`,
  },
  {
    title: "Adicionando Nova Página",
    description: "Estrutura para criar uma nova seção no site",
    language: "tsx",
    code: `// app/minha-secao/page.tsx
import { MyComponent } from '@/components/my-component'

export default function MinhaSecaoPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Minha Seção
          </h1>
          <p className="text-xl text-muted-foreground">
            Descrição da nova seção
          </p>
        </div>
        
        <MyComponent />
      </div>
    </div>
  )
}

// Não esqueça de adicionar no navigation.tsx:
// { name: 'Minha Seção', href: '/minha-secao', icon: MyIcon }`,
  },
]

export function CodeExamples() {
  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
  }

  return (
    <Card className="border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Code className="w-5 h-5" />
          Exemplos de Código
        </CardTitle>
        <CardDescription>Exemplos práticos para customizar e estender o RF Portal</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {codeExamples.map((example, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-foreground">{example.title}</h3>
                <p className="text-sm text-muted-foreground">{example.description}</p>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  {example.language}
                </Badge>
                <Button variant="outline" size="sm" onClick={() => copyCode(example.code)}>
                  <Copy className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm font-mono whitespace-pre-wrap">
                <code>{example.code}</code>
              </pre>
            </div>
          </div>
        ))}

        <div className="pt-6 border-t border-border">
          <div className="text-center space-y-3">
            <h3 className="font-semibold text-foreground">Mais Exemplos</h3>
            <p className="text-sm text-muted-foreground">Encontre mais exemplos e tutoriais na documentação completa</p>
            <Button variant="outline">
              <FileText className="w-4 h-4 mr-2" />
              Ver Todos os Exemplos
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
