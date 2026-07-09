import { ChevronLeft, ChevronRight, TrendingUp } from 'lucide-react'

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <img src="/images/menus/menu90.jpg" alt="Cinnamon apple tart served on a berry-colored napkin" fetchPriority="high" />
      <div className="hero__shade" />
      <button className="hero__arrow hero__arrow--left" type="button" aria-label="Previous featured recipe" disabled>
        <ChevronLeft size={22} />
      </button>
      <div className="container hero__content">
        <p><TrendingUp size={20} /> 85% would make this again</p>
        <h1 id="hero-title">Cinnamon Apple<br />Loaded Tart</h1>
      </div>
      <button className="hero__arrow hero__arrow--right" type="button" aria-label="Next featured recipe" disabled>
        <ChevronRight size={22} />
      </button>
    </section>
  )
}
