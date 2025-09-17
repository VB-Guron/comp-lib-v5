import * as React from "react";
import { cn } from "../../lib/utils";
import { Menu, X, User } from "lucide-react";

export interface NavbarLink {
  href: string;
  label: string;
  active?: boolean;
}

export interface NavbarProps {
  brand?: {
    name: string;
    href?: string;
    logo?: string;
  };
  links?: NavbarLink[];
  actions?: React.ReactNode;
  transparent?: boolean;
  className?: string;
  onLinkClick?: (href: string) => void;
}

const Navbar = React.forwardRef<HTMLElement, NavbarProps>(
  (
    { brand, links = [], actions, transparent = false, className, onLinkClick },
    ref
  ) => {
    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleLinkClick = (href: string) => {
      setIsMobileOpen(false);
      onLinkClick?.(href);
    };

    return (
      <nav
        className={cn(
          "navbar",
          transparent && "navbar--transparent",
          isScrolled && transparent && "navbar--scrolled",
          className
        )}
        ref={ref}
      >
        <div className="navbar__container">
          {/* Brand */}
          {brand && (
            <a href={brand.href || "/"} className="navbar__brand">
              {brand.logo && <img src={brand.logo} alt={brand.name} />}
              <span>{brand.name}</span>
            </a>
          )}

          {/* Desktop Navigation */}
          <div className="navbar__nav">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "navbar__link",
                  link.active && "navbar__link--active"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Actions & Mobile Toggle */}
          <div className="navbar__actions">
            {actions}
            <button
              className="navbar__mobile-toggle"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "navbar__mobile-menu",
            isMobileOpen && "navbar__mobile-menu--open"
          )}
        >
          <div className="navbar__mobile-nav">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "navbar__mobile-link",
                  link.active && "navbar__mobile-link--active"
                )}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    );
  }
);
Navbar.displayName = "Navbar";

// Avatar component for navbar
export interface NavbarAvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  onClick?: () => void;
  className?: string;
}

const NavbarAvatar = React.forwardRef<HTMLDivElement, NavbarAvatarProps>(
  ({ src, alt, fallback, onClick, className }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    return (
      <div
        className={cn("navbar-avatar", className)}
        onClick={onClick}
        ref={ref}
      >
        {src && !imageError ? (
          <img
            src={src}
            alt={alt || "Avatar"}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="navbar-avatar__fallback">
            {fallback || <User size={16} />}
          </div>
        )}
      </div>
    );
  }
);
NavbarAvatar.displayName = "NavbarAvatar";

export { Navbar, NavbarAvatar };
