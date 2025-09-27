import { BandaSpectrum } from "@/components/banda-spectrum"
import { BandaGrid } from "@/components/banda-grid"
import { BandaFilters } from "@/components/banda-filters"
import { BandaSearch } from "@/components/banda-search"

export default function BandasPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Bandas de Radiofrequência
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Explore o espectro eletromagnético com informações detalhadas sobre alocação, regulamentações e aplicações
            de cada banda de frequência.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <BandaSearch />
          <BandaFilters />
        </div>

        {/* Spectrum Visualization */}
        <div className="mb-12">
          <BandaSpectrum />
        </div>

        {/* Bands Grid */}
        <BandaGrid />
      </div>
    </div>
  )
}
