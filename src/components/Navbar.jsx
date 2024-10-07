import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="bg-white shadow-lg" style={{ padding: '5px 16px', maxWidth: '1224px', margin: '0 auto', boxSizing: 'border-box', zIndex: 18 }}>
    <div className="flex justify-between items-center" style={{ height: '96px' }}>
      <Link to="/" className="flex items-center">
        <img 
          className="h-16" 
          src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=608,fit=crop,q=95/Aq20eV79zLfpXV6b/logo-png-mnl7npnlXjHPl9KV.png" 
          alt="CodSoft logo" 
          style={{ width: '304px' }} 
        />
      </Link>
      <nav>
        <ul className="flex space-x-6" style={{ padding: '6px 8px' }}>
          {['Home', 'Services', 'Verification', 'Products', 'Internships', 'Jobs', 'About Us', 'Contact Us'].map((item) => (
            <li key={item}>
              <Link
                to={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[rgb(27,116,150)] hover:text-[rgb(125,86,86)] text-lg"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400 }}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </div>



  )
}

export default Navbar
