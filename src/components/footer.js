import * as React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="piano-keys-pattern"></div>
    <div className="container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>White Keys Music</h3>
          <p>Piano instruction studio in Modesto, California.</p>
          <p>Over 30 years of experience with Cindy White, using the Piano Marvel teaching method.</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/lessons">Lessons</Link></li>
            <li><Link to="/method">Piano Marvel Method</Link></li>
            <li><Link to="/testimonials">Testimonials</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Contact Information</h4>
          <address>
            <p>123 Music Lane<br />Modesto, CA 95350</p>
            <p>Phone: (209) 555-1234</p>
            <p>Email: <a href="mailto:info@whitekeys-music.com">info@whitekeys-music.com</a></p>
          </address>
        </div>
        
        <div className="footer-section">
          <h4>Hours</h4>
          <p>Monday - Friday: 9am - 7pm</p>
          <p>Saturday: 10am - 2pm</p>
          <p>Sunday: Closed</p>
          <div className="social-links">
            <a href="https://facebook.com" aria-label="Facebook">Facebook</a>
            <a href="https://instagram.com" aria-label="Instagram">Instagram</a>
            <a href="https://youtube.com" aria-label="YouTube">YouTube</a>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} White Keys Music. All rights reserved.</p>
      </div>
    </div>
  </footer>
)

export default Footer
