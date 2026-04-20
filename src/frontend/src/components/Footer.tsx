import { SiInstagram, SiTiktok } from "react-icons/si";

const NAV_LINKS = [
  { label: "Our Flavors", href: "#flavors" },
  { label: "Our Story", href: "#story" },
  { label: "Find Us", href: "#find-us" },
  { label: "Shop", href: "https://sweetyicecream.com/shop" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer className="sweety-footer" id="find-us" data-ocid="footer.section">
      <div className="container">
        {/* Brand */}
        <div className="text-center mb-4">
          <span className="footer-brand">Sweety</span>
        </div>

        {/* Nav links */}
        <div className="text-center mb-3" data-ocid="footer.nav">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="footer-nav-link"
              data-ocid="footer.link"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Social */}
        <div className="text-center mb-4" data-ocid="footer.social">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="Instagram"
            data-ocid="footer.instagram_link"
          >
            <SiInstagram />
          </a>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social"
            aria-label="TikTok"
            data-ocid="footer.tiktok_link"
          >
            <SiTiktok />
          </a>
        </div>

        <hr className="footer-divider" />

        {/* Copyright */}
        <div className="text-center">
          <p className="footer-copyright mb-1">© {year} Sweety Ice Cream</p>
          <p className="footer-copyright mb-0">
            Built with love using{" "}
            <a
              href={caffeineUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: "rgba(255,248,240,0.5)",
                textDecoration: "underline",
              }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
