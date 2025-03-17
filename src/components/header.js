import * as React from "react"
import { Link } from "gatsby"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="site-header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <span className="logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="30" height="30">
                <path d="M0 107.7v296.7c0 7.1 5.8 12.9 12.9 12.9h486.2c7.1 0 12.9-5.8 12.9-12.9V107.7c0-7.1-5.8-12.9-12.9-12.9H12.9C5.8 94.8 0 100.6 0 107.7zm144 268.3H48v-48h96v48zm0-96H48v-48h96v48zm0-96H48v-48h96v48zm96 192h-80v-48h80v48zm0-96h-80v-48h80v48zm0-96h-80v-48h80v48zm96 192h-80v-48h80v48zm0-96h-80v-48h80v48zm0-96h-80v-48h80v48zm80 192h-64v-48h64v48zm0-96h-64v-48h64v48zm0-96h-64v-48h64v48z" fill="currentColor"/>
              </svg>
            </span>
            <span className="logo-text">{siteTitle}</span>
          </Link>
          
          <button className={`mobile-menu-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          
          <nav className={`main-nav ${menuOpen ? 'active' : ''}`}>
            <ul>
              <li><Link to="/" activeClassName="active">Home</Link></li>
              <li><Link to="/about" activeClassName="active">About</Link></li>
              <li><Link to="/lessons" activeClassName="active">Lessons</Link></li>
              <li><Link to="/testimonials" activeClassName="active">Testimonials</Link></li>
              <li><Link to="/contact" activeClassName="active">Contact</Link></li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="piano-keys-pattern"></div>
    </header>
  )
}

export default Header
