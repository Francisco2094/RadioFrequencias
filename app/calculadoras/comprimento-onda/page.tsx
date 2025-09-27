import { WavelengthCalculator } from "@/components/wavelength-calculator"

export default function ComprimentoOndaPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Calculadora de Comprimento de Onda</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calcule o comprimento de onda para qualquer frequência no espectro eletromagnético.
          </p>
        </div>

        <WavelengthCalculator />
      </div>
    </div>
  )
}
