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
  Form: () => Form,
  FormControl: () => FormControl,
  FormField: () => FormField,
  FormItem: () => FormItem,
  FormMessage: () => FormMessage,
  Input: () => Input,
  Modal: () => Modal,
  ModeToggle: () => ModeToggle,
  Navbar: () => Navbar,
  NavbarAvatar: () => NavbarAvatar,
  ThemeProvider: () => ThemeProvider,
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
  "cursor-pointer inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: `bg-primary text-primary-foreground hover:bg-primary/90`,
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground ",
        link: "text-background-foreground underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
        noPadding: "h-10"
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

// src/components/ui/form.tsx
var React2 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_react_hook_form = require("react-hook-form");

// src/components/ui/label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime2 = require("react/jsx-runtime");

// src/components/ui/form.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Form = import_react_hook_form.FormProvider;
var FormFieldContext = React2.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_hook_form.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React2.useContext(FormFieldContext);
  const itemContext = React2.useContext(FormItemContext);
  const { getFieldState } = (0, import_react_hook_form.useFormContext)();
  const formState = (0, import_react_hook_form.useFormState)({ name: fieldContext.name });
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    "div",
    {
      "data-slot": "form-item",
      className: cn("grid gap-2", className),
      ...props
    }
  ) });
}
function FormControl({ ...props }) {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_react_slot.Slot,
    {
      "data-slot": "form-control",
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
var React3 = __toESM(require("react"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_moment = __toESM(require("moment"));
var import_jsx_runtime4 = require("react/jsx-runtime");
var inputVariants = (0, import_class_variance_authority2.cva)(
  // Default variant matches the original input style
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "",
        // original style
        filled: "bg-muted border-0 shadow-inner focus-visible:ring-2 focus-visible:ring-ring/40",
        // new filled style
        underline: "border-0 border-b-2 rounded-none focus-visible:border-ring",
        ghost: "border-0 bg-transparent shadow-none",
        fieldset: ""
        // fieldset handled in render, not class
      },
      inputSize: {
        default: "h-9 px-3 py-1 text-base md:text-sm",
        sm: "h-8 px-2 text-sm",
        lg: "h-11 px-4 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default"
    }
  }
);
function formatFieldsetValue({
  type,
  value,
  formatNumber
}) {
  if (type?.toLowerCase() === "month" && value != void 0) {
    return `${value.toString().substring(0, 4)}-${value.toString().substring(4)}`;
  }
  if (type?.toLowerCase() === "date") {
    if (value === "" || value === null || value === void 0) return "";
    if (typeof value === "string") {
      return (0, import_moment.default)(value.includes("T") ? value.split("T")[0] : value).format(
        "YYYY-MM-DD"
      );
    }
    return value;
  }
  if (formatNumber && value != null && !isNaN(Number(value))) {
    return Number(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  }
  return value;
}
var fieldsetColorVariants = {
  default: {
    fieldset: "border-red-800 bg-background dark:border-[#568293]",
    legend: "text-[#cccccc] dark:text-[#568293]",
    input: "text-foreground"
  },
  primary: {
    fieldset: "border-primary bg-primary/10",
    legend: "text-primary",
    input: "text-primary"
  },
  secondary: {
    fieldset: "border-secondary bg-secondary/10",
    legend: "text-secondary",
    input: "text-secondary"
  },
  success: {
    fieldset: "border-green-500 bg-green-50",
    legend: "text-green-700",
    input: "text-green-700"
  },
  danger: {
    fieldset: "border-destructive bg-destructive/10",
    legend: "text-destructive",
    input: "text-destructive"
  }
};
function renderFieldsetInput({
  className,
  type,
  legend,
  placeholder,
  value,
  inputRef,
  fieldsetColorVariant = "default",
  ...props
}) {
  const colorSet = fieldsetColorVariants[fieldsetColorVariant] || fieldsetColorVariants.default;
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
    "fieldset",
    {
      className: cn(
        "rounded-sm border p-0 px-2 pb-1",
        colorSet.fieldset,
        className
      ),
      "input-type": type || "text",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "legend",
          {
            className: cn(
              "my-0 bg-transparent p-0 text-xs leading-none font-medium",
              colorSet.legend
            ),
            children: legend || placeholder
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "input",
          {
            type: type || "text",
            className: cn(
              "w-full rounded-none text-base placeholder-transparent outline-none disabled:bg-transparent",
              colorSet.input
            ),
            style: {
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
              borderTopLeftRadius: 0,
              borderTopRightRadius: 0
            },
            ref: inputRef,
            value,
            ...props
          }
        )
      ]
    }
  );
}
var Input = React3.forwardRef(
  ({
    className,
    type,
    variant,
    inputSize,
    formatNumber,
    legend,
    placeholder,
    value,
    ...props
  }, ref) => {
    if (variant === "fieldset") {
      const displayValue = formatFieldsetValue({ type, value, formatNumber });
      return renderFieldsetInput({
        className,
        type,
        legend,
        placeholder,
        value: displayValue,
        inputRef: ref,
        fieldsetColorVariant: props.fieldsetColorVariant,
        ...props
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
      "input",
      {
        type,
        "data-slot": "input",
        className: cn(inputVariants({ variant, inputSize }), className),
        ref,
        value,
        ...props
      }
    );
  }
);
Input.displayName = "Input";

// src/components/theme-provider.tsx
var import_next_themes = require("next-themes");
var import_jsx_runtime5 = require("react/jsx-runtime");
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_next_themes.ThemeProvider, { ...props, children });
}

// src/components/ui/mode-toggle.tsx
var import_lucide_react2 = require("lucide-react");
var import_next_themes2 = require("next-themes");

// src/components/ui/dropdown-menu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime6 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    DropdownMenuPrimitive.Trigger,
    {
      "data-slot": "dropdown-menu-trigger",
      ...props
    }
  );
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/mode-toggle.tsx
var import_jsx_runtime7 = require("react/jsx-runtime");
function ModeToggle() {
  const { setTheme } = (0, import_next_themes2.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_lucide_react2.Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}

// src/components/ui/modal.tsx
var React4 = __toESM(require("react"));
var import_react_dom = require("react-dom");
var import_jsx_runtime8 = require("react/jsx-runtime");
var Modal = React4.forwardRef(
  ({ isOpen, onClose, title, children, footer }, ref) => {
    React4.useEffect(() => {
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
    const modal = /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
      "div",
      {
        className: cn("modal-backdrop", isOpen && "modal-backdrop--open"),
        onClick: handleBackdropClick,
        children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "modal-content", ref, children: [
          title && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "modal-header", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { children: title }) }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "modal-body", children }),
          footer && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "modal-footer", children: footer })
        ] })
      }
    );
    return (0, import_react_dom.createPortal)(modal, document.body);
  }
);
Modal.displayName = "Modal";

// src/components/ui/dropdown.tsx
var React5 = __toESM(require("react"));
var import_jsx_runtime9 = require("react/jsx-runtime");
var Dropdown = React5.forwardRef(
  ({ trigger, children, className }, ref) => {
    const [isOpen, setIsOpen] = React5.useState(false);
    const dropdownRef = React5.useRef(null);
    React5.useEffect(() => {
      const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
          setIsOpen(false);
        }
      };
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: cn("dropdown", className), ref: dropdownRef, children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "dropdown__trigger", onClick: () => setIsOpen(!isOpen), children: trigger }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: cn("dropdown__menu", isOpen && "dropdown__menu--open"), children })
    ] });
  }
);
Dropdown.displayName = "Dropdown";
var DropdownItem = React5.forwardRef(({ children, onClick }, ref) => {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("div", { className: "dropdown__item", onClick, ref, children });
});
DropdownItem.displayName = "DropdownItem";

// src/components/common/navbar.tsx
var React6 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var Navbar = React6.forwardRef(
  ({ brand, links = [], actions, transparent = false, className, onLinkClick }, ref) => {
    const [isScrolled, setIsScrolled] = React6.useState(false);
    const [isMobileOpen, setIsMobileOpen] = React6.useState(false);
    React6.useEffect(() => {
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
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(
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
          /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "navbar__container", children: [
            brand && /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("a", { href: brand.href || "/", className: "navbar__brand", children: [
              brand.logo && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("img", { src: brand.logo, alt: brand.name }),
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { children: brand.name })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "navbar__nav", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
            /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "navbar__actions", children: [
              actions,
              /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
                "button",
                {
                  className: "navbar__mobile-toggle",
                  onClick: () => setIsMobileOpen(!isMobileOpen),
                  "aria-label": "Toggle mobile menu",
                  children: isMobileOpen ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.X, {}) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.Menu, {})
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "div",
            {
              className: cn(
                "navbar__mobile-menu",
                isMobileOpen && "navbar__mobile-menu--open"
              ),
              children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "navbar__mobile-nav", children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
var NavbarAvatar = React6.forwardRef(
  ({ src, alt, fallback, onClick, className }, ref) => {
    const [imageError, setImageError] = React6.useState(false);
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "div",
      {
        className: cn("navbar-avatar", className),
        onClick,
        ref,
        children: src && !imageError ? /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
          "img",
          {
            src,
            alt: alt || "Avatar",
            onError: () => setImageError(true)
          }
        ) : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("div", { className: "navbar-avatar__fallback", children: fallback || /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_lucide_react3.User, { size: 16 }) })
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
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  Modal,
  ModeToggle,
  Navbar,
  NavbarAvatar,
  ThemeProvider,
  buttonVariants,
  cn
});
//# sourceMappingURL=index.js.map