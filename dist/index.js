"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Button: () => Button,
  Dropdown: () => Dropdown,
  DropdownItem: () => DropdownItem,
  Modal: () => Modal,
  Navbar: () => Navbar,
  NavbarAvatar: () => NavbarAvatar,
  buttonVariants: () => buttonVariants,
  cn: () => cn
});
module.exports = __toCommonJS(index_exports);

// src/components/ui/button.tsx
var React = __toESM(require("react"));
var import_class_variance_authority = require("class-variance-authority");

// src/lib/utils.ts
var import_clsx = require("clsx");
var import_tailwind_merge = require("tailwind-merge");
function cn(...inputs) {
  return (0, import_tailwind_merge.twMerge)((0, import_clsx.clsx)(inputs));
}

// src/components/ui/button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var buttonVariants = (0, import_class_variance_authority.cva)(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 dark",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground dark:hover-bg-red-800",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
      "button",
      {
        className: cn(buttonVariants({ variant, size, className })),
        ref,
        ...props
      }
    );
  }
);
Button.displayName = "Button";

// src/components/ui/modal.tsx
var React2 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_jsx_runtime2 = require("react/jsx-runtime");
var Modal = React2.forwardRef(
  ({ isOpen, onClose, title, children, footer }, ref) => {
    React2.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }
      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);
    if (!isOpen) return null;
    const handleBackdropClick = (e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };
    const modal = /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "div",
      {
        className: cn("modal-backdrop", isOpen && "modal-backdrop--open"),
        onClick: handleBackdropClick,
        children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "modal-content", ref, children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal-header", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h2", { children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal-body", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("div", { className: "modal-footer", children: footer })
        ] })
      }
    );
    return (0, import_react_dom.createPortal)(modal, document.body);
  }
);
Modal.displayName = "Modal";

// src/components/ui/dropdown.tsx
var React3 = __toESM(require("react"));
var import_jsx_runtime3 = require("react/jsx-runtime");
var Dropdown = React3.forwardRef(
  ({ trigger, children, className }, ref) => {
    const [isOpen, setIsOpen] = React3.useState(false);
    const dropdownRef = React3.useRef(null);
    React3.useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: cn("dropdown", className), ref: dropdownRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "dropdown__trigger", onClick: () => setIsOpen(!isOpen), children: trigger }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: cn("dropdown__menu", isOpen && "dropdown__menu--open"), children })
    ] });
  }
);
Dropdown.displayName = "Dropdown";
var DropdownItem = React3.forwardRef(({ children, onClick }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("div", { className: "dropdown__item", onClick, ref, children });
});
DropdownItem.displayName = "DropdownItem";

// src/components/common/navbar.tsx
var React4 = __toESM(require("react"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime4 = require("react/jsx-runtime");
var Navbar = React4.forwardRef(
  ({ brand, links = [], actions, transparent = false, className, onLinkClick }, ref) => {
    const [isScrolled, setIsScrolled] = React4.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React4.useState(false);
    React4.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 10);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const handleLinkClick = (href) => {
      setIsMobileOpen(false);
      onLinkClick?.(href);
    };
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
      "nav",
      {
        className: cn(
          "navbar",
          transparent && "navbar--transparent",
          isScrolled && transparent && "navbar--scrolled",
          className
        ),
        ref,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "navbar__container", children: [
            brand && /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("a", { href: brand.href || "/", className: "navbar__brand", children: [
              brand.logo && /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: brand.logo, alt: brand.name }),
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: brand.name })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "navbar__nav", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
              "a",
              {
                href: link.href,
                className: cn(
                  "navbar__link",
                  link.active && "navbar__link--active"
                ),
                onClick: (e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                },
                children: link.label
              },
              link.href
            )) }),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "navbar__actions", children: [
              actions,
              /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "button",
                {
                  className: "navbar__mobile-toggle",
                  onClick: () => setIsMobileOpen(!isMobileOpen),
                  "aria-label": "Toggle mobile menu",
                  children: isMobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.X, {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.Menu, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "div",
            {
              className: cn(
                "navbar__mobile-menu",
                isMobileOpen && "navbar__mobile-menu--open"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "navbar__mobile-nav", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
                "a",
                {
                  href: link.href,
                  className: cn(
                    "navbar__mobile-link",
                    link.active && "navbar__mobile-link--active"
                  ),
                  onClick: (e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  },
                  children: link.label
                },
                link.href
              )) })
            }
          )
        ]
      }
    );
  }
);
Navbar.displayName = "Navbar";
var NavbarAvatar = React4.forwardRef(
  ({ src, alt, fallback, onClick, className }, ref) => {
    const [imageError, setImageError] = React4.useState(false);
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "div",
      {
        className: cn("navbar-avatar", className),
        onClick,
        ref,
        children: src && !imageError ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src,
            alt: alt || "Avatar",
            onError: () => setImageError(true)
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "navbar-avatar__fallback", children: fallback || /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react.User, { size: 16 }) })
      }
    );
  }
);
NavbarAvatar.displayName = "NavbarAvatar";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Dropdown,
  DropdownItem,
  Modal,
  Navbar,
  NavbarAvatar,
  buttonVariants,
  cn
});
//# sourceMappingURL=index.js.map