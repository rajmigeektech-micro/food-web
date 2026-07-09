import { useEffect, useState } from 'react'
import {
  ChevronDown,
  Menu,
  Search,
  X,
} from 'lucide-react'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import { categories, featuredRecipes, latestRecipes } from '../data'

const navItems = [
  { label: 'Home Page', href: '#top', dropdown: true },
  { label: 'Recipe Page', href: '#recipes', dropdown: true },
  { label: 'Pages', href: '#collections', dropdown: true },
  { label: 'Elements', href: '#newsletter' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const [loginOpen, setLoginOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [loginMessage, setLoginMessage] = useState('')

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        setSearchOpen(false)
        setLoginOpen(false)
      }
    }

    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  const term = query.trim().toLowerCase()
  const searchResults = term
    ? [...featuredRecipes, ...latestRecipes]
        .filter((recipe) => recipe.title.toLowerCase().includes(term))
        .slice(0, 5)
    : featuredRecipes.slice(0, 4)

  return (
    <header className="site-header" id="top">
      <div className="topbar">
        <div className="container topbar__inner">
          <div className="social-links" aria-label="Social media">
            <a href="#footer" aria-label="Facebook"><FaFacebookF size={17} /></a>
            <a href="#footer" aria-label="Twitter"><FaTwitter size={18} /></a>
            <a href="#footer" aria-label="Instagram"><FaInstagram size={18} /></a>
          </div>
          <div className="topbar__actions">
            <button className="icon-button" type="button" aria-label="Search" onClick={() => setSearchOpen(true)}>
              <Search size={22} />
            </button>
            <button className="button button--small button--outline" type="button" onClick={() => setLoginOpen(true)}>
              Login
            </button>
          </div>
        </div>
      </div>

      <div className="container brand-row">
        <button className="icon-button brand-row__mobile-action" type="button" aria-label="Search" onClick={() => setSearchOpen(true)}>
          <Search size={22} />
        </button>
        <a className="brand" href="#top" aria-label="Tastebite home">
          <img src="/images/brands/tastebite.svg" alt="Tastebite" />
        </a>
        <button
          className="icon-button brand-row__mobile-action"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Primary navigation">
        <div className="container">
          <ul>
            {navItems.map((item) => (
              <li key={item.label}>
                <a href={item.href} onClick={() => setMenuOpen(false)}>
                  {item.label}
                  {item.dropdown && <ChevronDown size={12} strokeWidth={2.2} />}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {searchOpen && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={() => setSearchOpen(false)}>
          <section className="search-dialog" role="dialog" aria-modal="true" aria-label="Search recipes" onMouseDown={(event) => event.stopPropagation()}>
            <div className="search-dialog__bar">
              <Search size={22} />
              <input
                autoFocus
                type="search"
                value={query}
                placeholder="Search recipes"
                aria-label="Search recipes"
                onChange={(event) => setQuery(event.target.value)}
              />
              <button className="icon-button" type="button" aria-label="Close search" onClick={() => setSearchOpen(false)}>
                <X size={22} />
              </button>
            </div>
            <div className="search-dialog__results">
              {searchResults.length > 0 ? searchResults.map((recipe) => (
                <a key={`${recipe.image}-${recipe.title}`} href="#recipes" onClick={() => setSearchOpen(false)}>
                  <img src={recipe.image} alt="" />
                  <span>{recipe.title}</span>
                </a>
              )) : <p>No recipes found. Try another ingredient.</p>}
              {!query && (
                <div className="search-dialog__categories">
                  {categories.map((category) => <span key={category.name}>{category.name}</span>)}
                </div>
              )}
            </div>
          </section>
        </div>
      )}

      {loginOpen && (
        <div className="dialog-backdrop" role="presentation" onMouseDown={() => setLoginOpen(false)}>
          <section className="login-dialog" role="dialog" aria-modal="true" aria-labelledby="login-title" onMouseDown={(event) => event.stopPropagation()}>
            <button className="icon-button login-dialog__close" type="button" aria-label="Close login" onClick={() => setLoginOpen(false)}>
              <X size={22} />
            </button>
            <h2 id="login-title">Login</h2>
            <p>Save your favorite recipes and create collections.</p>
            <form onSubmit={(event) => {
              event.preventDefault()
              setLoginMessage('Thanks — the demo form is ready for your authentication service.')
            }}>
              <label>Email<input type="email" name="email" autoComplete="email" required placeholder="you@example.com" /></label>
              <label>Password<input type="password" name="password" autoComplete="current-password" minLength={6} required placeholder="••••••••" /></label>
              <button className="button button--primary" type="submit">Login</button>
              {loginMessage && <p className="form-message" role="status">{loginMessage}</p>}
            </form>
          </section>
        </div>
      )}
    </header>
  )
}
