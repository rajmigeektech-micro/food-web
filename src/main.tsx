import { FormEvent, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.scss'

const asset = (name: string) => `/assets/${name}`

const categories = [
  ['menu8.png', 'Pasta'], ['menu9.png', 'Pizza'], ['menu10.png', 'Vegan'],
  ['menu11.png', 'Desserts'], ['menu12.png', 'Smoothies'], ['menu13.png', 'Breakfast'],
]

const featured = [
  ['menu84.jpg', 'Delicious Fancy Glazed Blueberry Donuts'],
  ['menu85.jpg', 'Pan Fried Cod in Creamy Kale Sauce'],
  ['menu86.jpg', 'Berry Maddness Biscuts'],
  ['menu87.jpg', 'Four Ingredient Oatmeal Pancakes'],
  ['menu88.jpg', 'Pumpkin Marshmallow Pie and Nuts'],
  ['menu89.jpg', 'Mighty Cheesy Breakfast Burger'],
]

const collections = [
  ['menu14.jpg', 'Sushi Combos for your Next Party'],
  ['menu15.jpg', 'Everything Bagel'],
  ['menu16.jpg', 'Cook Like a Chef'],
  ['menu17.jpg', 'Exquisite Dinner Recipe Ideas'],
  ['menu18.jpg', 'The Ultimate Cookie Frenzy'],
  ['menu19.jpg', 'For the Love of Donuts'],
]

const recipes = [
  ['menu20.jpg', 'Caramel Strawberry Milkshake'],
  ['menu21.jpg', 'Cashew Vegan Rice'],
  ['menu22.jpg', 'Smoked Salmon Salad Sandwich'],
  ['menu23.jpg', 'Salmon in Creamy Sun Dried Tomato Sauce'],
  ['menu24.jpg', 'Healthy Jam Waffle Breakfast'],
  ['menu25.jpg', 'Chocolate and Banana Jar Cake'],
  ['menu26.jpg', 'Caramel Blueberry Scones'],
  ['menu27.jpg', 'Blueberry Carrot Cake'],
  ['menu28.jpg', 'Vegan Cauliflower Salad'],
  ['menu29.jpg', 'Roasted Red Pepper Soup'],
  ['menu30.jpg', 'Eggs and Avocado Toast'],
  ['menu31.jpg', 'Pork Shoulder Cashew Noodles'],
  ['menu32.jpg', 'Toasted Farfalle In Pesto Sauce'],
  ['menu33.jpg', 'Cheesy Bacon Burger Sliders'],
  ['menu34.jpg', 'Fig and Raisins Oatmeal'],
  ['menu35.jpg', 'Silky Smooth Panacotta'],
  ['menu36.jpg', 'Triple Decker Cranberry Cake'],
  ['menu37.jpg', 'Very Berry Healthy Summer Smoothie'],
  ['menu38.jpg', 'Crispy Orange Chips'],
  ['menu39.jpg', 'Tumeric Lavendar Tea'],
  ['menu40.jpg', 'Blue Velvet Brownies'],
  ['menu41.jpg', 'Birthday Cupcakes'],
  ['menu42.jpg', 'Gourmet Fillet in Roasted Almond Sauce'],
  ['menu43.jpg', 'Four Ingredient Oatmeal Pancakes'],
]

function SearchIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/></svg>
}

function MenuIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
}

function Header() {
  const [open, setOpen] = useState(false)
  const [searching, setSearching] = useState(false)
  return <header className="site-header">
    <div className="utility">
      <div className="container utility__inner">
        <div className="socials" aria-label="Social media">
          <a href="#footer" aria-label="Facebook">f</a><a href="#footer" aria-label="Twitter">𝕏</a><a href="#footer" aria-label="Instagram">◎</a>
        </div>
        <div className="utility__actions">
          <button className="icon-button" aria-label="Search" onClick={() => setSearching(v => !v)}><SearchIcon /></button>
          <button className="login">Login</button>
        </div>
      </div>
    </div>
    <div className="container brand-row">
      <button className="mobile-search icon-button" aria-label="Search" onClick={() => setSearching(v => !v)}><SearchIcon /></button>
      <a href="#top" aria-label="Tastebite home"><img src={asset('brand2.svg')} alt="Tastebite" /></a>
      <button className="menu-button icon-button" aria-expanded={open} aria-label="Toggle menu" onClick={() => setOpen(v => !v)}><MenuIcon /></button>
    </div>
    {searching && <div className="search-panel"><label htmlFor="site-search">Search recipes</label><input autoFocus id="site-search" placeholder="What are you craving?" /><button onClick={() => setSearching(false)}>Close</button></div>}
    <nav className={open ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
      <a href="#top">Homepage <span>⌄</span></a><a href="#recipes">Recipe Pages <span>⌄</span></a><a href="#collections">Pages <span>⌄</span></a><a href="#footer">Buy</a>
    </nav>
  </header>
}

function Hero() {
  return <section className="hero" aria-labelledby="hero-title">
    <img src={asset('menu90.jpg')} alt="Cinnamon apple tart arranged in a rose pattern" />
    <div className="hero__scrim" />
    <div className="hero__copy"><p>85% would make this again</p><h1 id="hero-title">Cinnamon Apple<br />Loaded Tart</h1></div>
    <button className="hero__arrow hero__arrow--left" aria-label="Previous recipe">‹</button>
    <button className="hero__arrow hero__arrow--right" aria-label="Next recipe">›</button>
  </section>
}

function SectionTitle({ children, id }: { children: string; id?: string }) {
  return <h2 className="section-title" id={id}>{children}</h2>
}

function Categories() {
  return <section className="section container"><SectionTitle>Popular Categories</SectionTitle>
    <div className="categories">{categories.map(([image, title]) => <a className="category" href="#recipes" key={title}><img src={asset(image)} alt="" /><span>{title}</span></a>)}</div>
  </section>
}

function RecipeCard({ image, title }: { image: string; title: string }) {
  return <article className="recipe-card"><img className="recipe-card__image" src={asset(image)} alt={title} loading="lazy" />
    <div className="recipe-card__body"><div className="stars" aria-label="Five stars">★★★★★</div><h3>{title}</h3>
      <div className="meta"><span><img src={asset('avatar1.png')} alt="" />Tricia Albert</span><span className="meta__right">▢ Yesterday &nbsp; ♡ 456</span></div>
    </div>
  </article>
}

function FeaturedRecipes() {
  return <section className="section container" id="recipes"><SectionTitle>Super Delicious</SectionTitle>
    <div className="featured-grid">{featured.map(([image, title]) => <RecipeCard key={title} image={image} title={title} />)}</div>
  </section>
}

function Collections() {
  return <section className="section container" id="collections"><SectionTitle>Curated Collections</SectionTitle>
    <div className="collection-grid">{collections.map(([image, title]) => <article className="collection-card" key={title}>
      <img src={asset(image)} alt={title} loading="lazy" /><div><h3>{title}</h3><span>156 Recipes</span></div>
    </article>)}</div>
  </section>
}

function LatestRecipes() {
  const [visible, setVisible] = useState(20)
  return <section className="section container latest"><SectionTitle>Latest Recipes</SectionTitle>
    <div className="latest-grid">{recipes.slice(0, visible).map(([image, title]) => <article key={`${image}-${title}`} className="latest-card">
      <img src={asset(image)} alt={title} loading="lazy" /><h3>{title}</h3>
    </article>)}</div>
    {visible < recipes.length && <button className="load-more" onClick={() => setVisible(recipes.length)}>Load More</button>}
  </section>
}

function Newsletter() {
  const [joined, setJoined] = useState(false)
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setJoined(true) }
  return <section className="newsletter" aria-labelledby="newsletter-title"><div className="newsletter__inner">
    <h2 id="newsletter-title">Deliciousness<br />to your inbox</h2>
    <p>Enjoy weekly hand picked recipes and<br />recommendations</p>
    {joined ? <p className="newsletter__success" role="status">You’re on the list — welcome to Tastebite!</p> : <form onSubmit={submit}><input required type="email" aria-label="Email address" placeholder="Email Address" /><button type="submit">JOIN</button></form>}
    <small>By joining our newsletter you agree to our Terms and Conditions.</small>
  </div></section>
}

function Footer() {
  return <footer className="footer" id="footer"><div className="container footer__main">
    <div className="footer__about"><img src={asset('brand4.svg')} alt="Tastebite" /><p>“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.”</p></div>
    <div className="footer__links"><div><h3>Tastebite</h3><a href="#top">About us</a><a href="#top">Careers</a><a href="#top">Contact us</a><a href="#top">Feedback</a></div>
      <div><h3>Legal</h3><a href="#top">Terms</a><a href="#top">Conditions</a><a href="#top">Cookies</a><a href="#top">Copyright</a></div>
      <div><h3>Follow</h3><a href="#top">Facebook</a><a href="#top">Twitter</a><a href="#top">Instagram</a><a href="#top">Youtube</a></div></div>
  </div><div className="container footer__bottom"><span>© 2020 Tastebite - All rights reserved</span><div><span>f</span><span>𝕏</span><span>◎</span><span>▶</span></div></div></footer>
}

function App() {
  return <><div id="top" /><Header /><main><Hero /><Categories /><FeaturedRecipes /><Collections /><LatestRecipes /><Newsletter /></main><Footer /></>
}

createRoot(document.getElementById('root')!).render(<App />)
