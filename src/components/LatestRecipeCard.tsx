import type { Recipe } from '../data'

export function LatestRecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <article className="latest-card">
      <a className="image-link" href="#recipes" aria-label={recipe.title}>
        <img src={recipe.image} alt={recipe.title} decoding="async" />
      </a>
      <h3><a href="#recipes">{recipe.title}</a></h3>
    </article>
  )
}
