export default function Navbar() {
  const links = [
    { label: "Our Flavors", href: "#flavors" },
    { label: "Our Story", href: "#story" },
    { label: "Find Us", href: "#find-us" },
    { label: "Shop", href: "https://sweetyicecream.com/shop" },
  ];

  return (
    <nav
      className="navbar navbar-expand-lg sweety-navbar sticky-top"
      data-ocid="navbar"
    >
      <div className="container">
        <a className="navbar-brand" href="/" data-ocid="navbar.brand_link">
          Sweety
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#sweetyNav"
          aria-controls="sweetyNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          data-ocid="navbar.toggle"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="sweetyNav"
        >
          <ul className="navbar-nav" data-ocid="navbar.links">
            {links.map((link) => (
              <li className="nav-item" key={link.label}>
                <a
                  className="nav-link"
                  href={link.href}
                  data-ocid="navbar.link"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
