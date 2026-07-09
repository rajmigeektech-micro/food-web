import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

const footerGroups = [
  { title: 'Tastebite', links: ['About us', 'Careers', 'Contact us', 'Feedback'] },
  { title: 'Legal', links: ['Terms', 'Conditions', 'Cookies', 'Copyright'] },
  { title: 'Follow', links: ['Facebook', 'Twitter', 'Instagram', 'Youtube'] },
]

export function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__about">
            <a href="#top" aria-label="Tastebite home"><img src="/images/brands/tastebite.svg" alt="Tastebite" /></a>
            <p>“On the other hand, we denounce with righteous indignation and dislike men who are so beguiled by the charms of pleasure.”</p>
          </div>
          {footerGroups.map((group) => (
            <div className="footer__group" key={group.title}>
              <h2>{group.title}</h2>
              <ul>{group.links.map((link) => <li key={link}><a href="#top">{link}</a></li>)}</ul>
            </div>
          ))}
          <div className="footer__mobile-groups">
            {footerGroups.map((group) => (
              <details key={group.title}>
                <summary>{group.title}</summary>
                <ul>{group.links.map((link) => <li key={link}><a href="#top">{link}</a></li>)}</ul>
              </details>
            ))}
          </div>
        </div>
        <div className="footer__bottom">
          <small>© 2026 Tastebite — All rights reserved</small>
          <div className="social-links" aria-label="Footer social media">
            <a href="#footer" aria-label="Facebook"><FaFacebookF size={17} /></a>
            <a href="#footer" aria-label="Instagram"><FaInstagram size={18} /></a>
            <a href="#footer" aria-label="Twitter"><FaTwitter size={18} /></a>
            <a href="#footer" aria-label="YouTube"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}
