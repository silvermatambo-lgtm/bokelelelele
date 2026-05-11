import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/boleke/logo.png";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About us" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact us" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-page flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img src={logo} alt="Boleke Enterprise (PTY) LTD logo" className="h-12 md:h-14 w-auto" />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `text-sm font-semibold uppercase tracking-wide transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
            <a href="tel:+27662617731"><Phone className="w-4 h-4 mr-2" />+27 66 261 7731</a>
          </Button>
        </div>

        <button className="lg:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-page py-4 flex flex-col gap-3">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-2 text-sm font-semibold uppercase ${isActive ? "text-primary" : "text-foreground"}`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a href="tel:+27662617731" className="mt-2 inline-flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-semibold">
              <Phone className="w-4 h-4" /> +27 66 261 7731
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
