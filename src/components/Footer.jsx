import React from 'react'
import { footerLinks } from '../constants'

const Footer = () => {
  return (
   <footer>
    <div className="info">
      <p>
        More ways to shop: Find an Apple Store or other licensed 
        retailers near you. Or you can call 1-800-MY-APPLE (1-800-692-7753)
      </p>
      <img src="/logo.svg" alt="Apple Logo" />
    </div>
    <hr />
    <div className="links">
      <p>Copyright &copy; Apple Inc. All rights reserved.</p>      <ul>
        {footerLinks.map(({label, link}) => (
          <li key={label}>
            <a href={link}>{label}</a>
          </li>
        ))}
      </ul>
    </div>
   </footer>
  )
}

export default Footer
