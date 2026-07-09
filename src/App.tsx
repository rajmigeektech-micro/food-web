import { CollectionCard } from './components/CollectionCard'
import { FeaturedRecipeCard } from './components/FeaturedRecipeCard'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { LatestRecipeCard } from './components/LatestRecipeCard'
import { Newsletter } from './components/Newsletter'
import { categories, collections, featuredRecipes, latestRecipes } from './data'

function App() {
  return (
    <div className="site-shell">
      <Header />
      <main>
        <Hero />

        <div className="container">
          <section className="page-section categories" aria-labelledby="categories-title">
            <h2 className="section-title" id="categories-title">Popular Categories</h2>
            <div className="category-grid">
              {categories.map((category) => (
                <a className="category" href="#recipes" key={category.name}>
                  <span><img src={category.image} alt="" /></span>
                  {category.name}
                </a>
              ))}
            </div>
          </section>

          <section className="page-section" id="recipes" aria-labelledby="featured-title">
            <h2 className="section-title" id="featured-title">Super Delicious</h2>
            <div className="featured-grid">
              {featuredRecipes.map((recipe) => <FeaturedRecipeCard key={recipe.title} recipe={recipe} />)}
            </div>
          </section>

          <section className="page-section collections" id="collections" aria-labelledby="collections-title">
            <h2 className="section-title section-title--large" id="collections-title">Curated Collections</h2>
            <div className="collection-grid">
              {collections.map((collection) => <CollectionCard key={collection.title} collection={collection} />)}
            </div>
          </section>

          <section className="page-section latest" aria-labelledby="latest-title">
            <h2 className="section-title" id="latest-title">Latest Recipes</h2>
            <div className="latest-grid">
              {latestRecipes.map((recipe) => <LatestRecipeCard key={`${recipe.title}-${recipe.image}`} recipe={recipe} />)}
            </div>
            <div className="load-more-wrap">
              <button className="button button--outline button--wide" type="button" aria-label="All recipes are currently shown">
                Load More
              </button>
            </div>
          </section>
        </div>

        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

export default App
