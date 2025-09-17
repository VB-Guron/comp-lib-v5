// src/components/ui/button.tsx
import * as React from "react";
import { cva } from "class-variance-authority";

// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/components/ui/button.tsx
import { jsx } from "react/jsx-runtime";
var buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
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
    return /* @__PURE__ */ jsx(
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

// src/components/ui/form.tsx
import * as React2 from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState
} from "react-hook-form";

// src/components/ui/label.tsx
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx2 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/form.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React2.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx3(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx3(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React2.useContext(FormFieldContext);
  const itemContext = React2.useContext(FormItemContext);
  const { getFieldState } = useFormContext();
  const formState = useFormState({ name: fieldContext.name });
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React2.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React2.useId();
  return /* @__PURE__ */ jsx3(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx3(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormLabel({
  className,
  ...props
}) {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx3(
    Label,
    {
      "data-slot": "form-label",
      "data-error": !!error,
      className: cn("data-[error=true]:text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx3(
    Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
}
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx3(
    "p",
    {
      "data-slot": "form-description",
      id: formDescriptionId,
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}
function FormMessage({ className, ...props }) {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message ?? "") : props.children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx3(
    "p",
    {
      "data-slot": "form-message",
      id: formMessageId,
      className: cn("text-destructive text-sm", className),
      ...props,
      children: body
    }
  );
}

// src/components/ui/input.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx4(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/modal.tsx
import * as React3 from "react";
import { createPortal } from "react-dom";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var Modal = React3.forwardRef(
  ({ isOpen, onClose, title, children, footer }, ref) => {
    React3.useEffect(() => {
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
    const modal = /* @__PURE__ */ jsx5(
      "div",
      {
        className: cn("modal-backdrop", isOpen && "modal-backdrop--open"),
        onClick: handleBackdropClick,
        children: /* @__PURE__ */ jsxs("div", { className: "modal-content", ref, children: [
          title && /* @__PURE__ */ jsx5("div", { className: "modal-header", children: /* @__PURE__ */ jsx5("h2", { children: title }) }),
          /* @__PURE__ */ jsx5("div", { className: "modal-body", children }),
          footer && /* @__PURE__ */ jsx5("div", { className: "modal-footer", children: footer })
        ] })
      }
    );
    return createPortal(modal, document.body);
  }
);
Modal.displayName = "Modal";

// src/components/ui/dropdown.tsx
import * as React4 from "react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
var Dropdown = React4.forwardRef(
  ({ trigger, children, className }, ref) => {
    const [isOpen, setIsOpen] = React4.useState(false);
    const dropdownRef = React4.useRef(null);
    React4.useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /* @__PURE__ */ jsxs2("div", { className: cn("dropdown", className), ref: dropdownRef, children: [
      /* @__PURE__ */ jsx6("div", { className: "dropdown__trigger", onClick: () => setIsOpen(!isOpen), children: trigger }),
      /* @__PURE__ */ jsx6("div", { className: cn("dropdown__menu", isOpen && "dropdown__menu--open"), children })
    ] });
  }
);
Dropdown.displayName = "Dropdown";
var DropdownItem = React4.forwardRef(({ children, onClick }, ref) => {
  return /* @__PURE__ */ jsx6("div", { className: "dropdown__item", onClick, ref, children });
});
DropdownItem.displayName = "DropdownItem";

// src/components/common/navbar.tsx
import * as React5 from "react";
import { Menu, X, User } from "lucide-react";
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
var Navbar = React5.forwardRef(
  ({ brand, links = [], actions, transparent = false, className, onLinkClick }, ref) => {
    const [isScrolled, setIsScrolled] = React5.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React5.useState(false);
    React5.useEffect(() => {
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
    return /* @__PURE__ */ jsxs3(
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
          /* @__PURE__ */ jsxs3("div", { className: "navbar__container", children: [
            brand && /* @__PURE__ */ jsxs3("a", { href: brand.href || "/", className: "navbar__brand", children: [
              brand.logo && /* @__PURE__ */ jsx7("img", { src: brand.logo, alt: brand.name }),
              /* @__PURE__ */ jsx7("span", { children: brand.name })
            ] }),
            /* @__PURE__ */ jsx7("div", { className: "navbar__nav", children: links.map((link) => /* @__PURE__ */ jsx7(
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
            /* @__PURE__ */ jsxs3("div", { className: "navbar__actions", children: [
              actions,
              /* @__PURE__ */ jsx7(
                "button",
                {
                  className: "navbar__mobile-toggle",
                  onClick: () => setIsMobileOpen(!isMobileOpen),
                  "aria-label": "Toggle mobile menu",
                  children: isMobileOpen ? /* @__PURE__ */ jsx7(X, {}) : /* @__PURE__ */ jsx7(Menu, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx7(
            "div",
            {
              className: cn(
                "navbar__mobile-menu",
                isMobileOpen && "navbar__mobile-menu--open"
              ),
              children: /* @__PURE__ */ jsx7("div", { className: "navbar__mobile-nav", children: links.map((link) => /* @__PURE__ */ jsx7(
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
var NavbarAvatar = React5.forwardRef(
  ({ src, alt, fallback, onClick, className }, ref) => {
    const [imageError, setImageError] = React5.useState(false);
    return /* @__PURE__ */ jsx7(
      "div",
      {
        className: cn("navbar-avatar", className),
        onClick,
        ref,
        children: src && !imageError ? /* @__PURE__ */ jsx7(
          "img",
          {
            src,
            alt: alt || "Avatar",
            onError: () => setImageError(true)
          }
        ) : /* @__PURE__ */ jsx7("div", { className: "navbar-avatar__fallback", children: fallback || /* @__PURE__ */ jsx7(User, { size: 16 }) })
      }
    );
  }
);
NavbarAvatar.displayName = "NavbarAvatar";
export {
  Button,
  Dropdown,
  DropdownItem,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  Label,
  Modal,
  Navbar,
  NavbarAvatar,
  buttonVariants,
  cn,
  useFormField
};
//# sourceMappingURL=index.mjs.map