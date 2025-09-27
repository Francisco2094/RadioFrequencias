# RF Portal - Portal Completo de Radiofrequências

Um site completo e customizável sobre radiofrequências, desenvolvido com Next.js, React e Tailwind CSS.

## 🚀 Características

- **Totalmente Responsivo**: Funciona perfeitamente em desktop, tablet e mobile
- **Super Customizável**: Código aberto com documentação completa
- **Calculadoras RF**: Ferramentas avançadas para cálculos de radiofrequência
- **Bandas Detalhadas**: Catálogo completo de bandas de frequência
- **Documentação Técnica**: Guias e tutoriais para todos os níveis
- **Tema Personalizável**: Sistema completo de design tokens

## 📋 Funcionalidades

### 🏠 Página Inicial
- Hero section com animações
- Grid de recursos principais
- Visão técnica das frequências
- Ferramentas rápidas

### 📡 Bandas de Frequência
- Visualização do espectro
- Filtros por categoria e aplicação
- Detalhes técnicos de cada banda
- Informações regulamentares

### 🧮 Calculadoras RF
- Calculadora de comprimento de onda
- Conversor de potência
- Calculadoras de antenas
- Análise de propagação

### 📚 Documentação
- Guias para iniciantes
- Teoria fundamental
- Tutoriais avançados
- API reference

### 🎨 Customização
- Sistema de temas
- Cores personalizáveis
- Componentes modulares
- Exemplos de código

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **React 18** - Biblioteca de interface
- **Tailwind CSS v4** - Estilização
- **TypeScript** - Tipagem estática
- **Lucide React** - Ícones
- **Shadcn/ui** - Componentes

## 🚀 Instalação

1. **Clone o repositório**
   \`\`\`bash
   git clone https://github.com/rf-portal/rf-portal.git
   cd rf-portal
   \`\`\`

2. **Instale as dependências**
   \`\`\`bash
   npm install
   \`\`\`

3. **Execute o projeto**
   \`\`\`bash
   npm run dev
   \`\`\`

4. **Acesse no navegador**
   \`\`\`
   http://localhost:3000
   \`\`\`

## 📁 Estrutura do Projeto

\`\`\`
rf-portal/
├── app/                    # Páginas Next.js
│   ├── page.tsx           # Página inicial
│   ├── bandas/            # Seção de bandas
│   ├── calculadoras/      # Calculadoras RF
│   ├── documentacao/      # Documentação
│   └── customizacao/      # Guia de customização
├── components/            # Componentes React
│   ├── ui/               # Componentes base
│   ├── navigation.tsx    # Navegação principal
│   ├── hero.tsx          # Seção hero
│   └── ...               # Outros componentes
├── lib/                  # Utilitários
├── public/               # Assets estáticos
└── README.md            # Este arquivo
\`\`\`

## 🎨 Customização

### Cores e Temas

Edite o arquivo `app/globals.css` para personalizar as cores:

\`\`\`css
:root {
  --primary: oklch(0.4 0.2 240);
  --secondary: oklch(0.95 0.02 240);
  /* Adicione suas cores personalizadas */
}
\`\`\`

### Componentes

Todos os componentes estão na pasta `components/` e podem ser modificados:

\`\`\`tsx
// Exemplo: components/my-calculator.tsx
export function MyCalculator() {
  // Sua calculadora personalizada
}
\`\`\`

### Novas Páginas

Adicione novas páginas na pasta `app/`:

\`\`\`tsx
// app/minha-pagina/page.tsx
export default function MinhaPagina() {
  return <div>Minha página personalizada</div>
}
\`\`\`

## 📖 Documentação

- **Guia de Instalação**: Como configurar o projeto
- **API Reference**: Documentação completa da API
- **Exemplos de Código**: Implementações práticas
- **Customização**: Como personalizar o site

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🆘 Suporte

- **Documentação**: [/documentacao](./documentacao)
- **Issues**: [GitHub Issues](https://github.com/rf-portal/rf-portal/issues)
- **Discussões**: [GitHub Discussions](https://github.com/rf-portal/rf-portal/discussions)

## 🌟 Recursos Destacados

- ✅ Totalmente responsivo (mobile-first)
- ✅ Acessibilidade (WCAG 2.1)
- ✅ Performance otimizada
- ✅ SEO friendly
- ✅ Código limpo e documentado
- ✅ Testes automatizados
- ✅ Deploy fácil (Vercel, Netlify)

---

Desenvolvido com ❤️ para a comunidade de radiofrequências
