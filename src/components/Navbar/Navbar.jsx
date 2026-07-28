import './Navbar.css'

function Navbar({ currentPath, onNavigate }) {
  const links = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="navbar">
      {links.map((link) => (
        <a
          key={link.path}
          href={link.path}
          className={currentPath === link.path ? 'nav-link active' : 'nav-link'}
          onClick={(event) => onNavigate(event, link.path)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default Navbar
