import { CalendarDays, MessageCircle } from 'lucide-react'
import type { Recipe } from '../data'

export function FeaturedRecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="featured-card">
      <a className="image-link" href="#recipes" aria-label={recipe.title}>
        <img src={recipe.image} alt={recipe.title} decoding="async" />
      </a>
      <div className="featured-card__body">
        <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
        <h3><a href="#recipes">{recipe.title}</a></h3>
        <div className="author">
          <img src="/images/avatars/tricia.png" alt="Tricia Albert" />
          <span>Tricia Albert</span>
        </div>
        <div className="featured-card__meta">
          <span><CalendarDays size={14} /> Yesterday</span>
          <span><MessageCircle size={14} /> 456</span>
        </div>
      </div>
    </article>
  )
}
