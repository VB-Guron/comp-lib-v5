"use strict";
"use client";
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
  Combobox: () => Combobox,
  Command: () => Command,
  CommandGroup: () => CommandGroup,
  CommandItem: () => CommandItem,
  CommandList: () => CommandList,
  Dialog: () => Dialog,
  DialogContent: () => DialogContent,
  DialogTrigger: () => DialogTrigger,
  DropdownForm: () => DropdownForm,
  Form: () => Form,
  FormControl: () => FormControl,
  FormField: () => FormField,
  FormItem: () => FormItem,
  FormMessage: () => FormMessage,
  GenericCheckboxGroup: () => GenericCheckboxGroup,
  Input: () => Input,
  Label: () => Label,
  Modal: () => modal_default,
  ModeToggle: () => ModeToggle,
  Popover: () => Popover,
  PopoverContent: () => PopoverContent,
  PopoverTrigger: () => PopoverTrigger,
  Textarea: () => Textarea,
  ThemeProvider: () => ThemeProvider,
  Toggle: () => Toggle,
  ToggleForm: () => ToggleForm,
  UpgradedFieldsetFormInput: () => UpgradedFieldsetFormInput,
  UpgradedFieldsetFormTextarea: () => UpgradedFieldsetFormTextarea,
  buttonVariants: () => buttonVariants,
  cn: () => cn,
  comboboxColorVariants: () => comboboxColorVariants,
  toggleColorVariants: () => toggleColorVariants
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

// src/components/ui/combobox.tsx
var React2 = __toESM(require("react"));
var import_lucide_react3 = require("lucide-react");

// src/components/ui/command.tsx
var import_cmdk = require("cmdk");
var import_lucide_react2 = require("lucide-react");

// src/components/ui/dialog.tsx
var DialogPrimitive = __toESM(require("@radix-ui/react-dialog"));
var import_lucide_react = require("lucide-react");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(DialogOverlay, {}),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_lucide_react.XIcon, {}),
                /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/components/ui/command.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_cmdk.Command,
    {
      "data-slot": "command",
      className: cn(
        "bg-popover text-popover-foreground flex h-full w-full flex-col overflow-hidden rounded-md",
        className
      ),
      ...props
    }
  );
}
function CommandInput({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_lucide_react2.SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
          import_cmdk.Command.Input,
          {
            "data-slot": "command-input",
            className: cn(
              "placeholder:text-muted-foreground flex h-10 w-full rounded-md bg-transparent py-3 text-sm outline-hidden disabled:cursor-not-allowed disabled:opacity-50",
              className
            ),
            ...props
          }
        )
      ]
    }
  );
}
function CommandList({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_cmdk.Command.List,
    {
      "data-slot": "command-list",
      className: cn(
        "max-h-[200px] scroll-py-1 overflow-x-hidden overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function CommandEmpty({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_cmdk.Command.Empty,
    {
      "data-slot": "command-empty",
      className: "py-6 text-center text-sm",
      ...props
    }
  );
}
function CommandGroup({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_cmdk.Command.Group,
    {
      "data-slot": "command-group",
      className: cn(
        "text-foreground [&_[cmdk-group-heading]]:text-muted-foreground overflow-hidden p-1 [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium",
        className
      ),
      ...props
    }
  );
}
function CommandItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_cmdk.Command.Item,
    {
      "data-slot": "command-item",
      className: cn(
        "data-[selected=true]:bg-accent data-[selected=true]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}

// src/components/ui/popover.tsx
var PopoverPrimitive = __toESM(require("@radix-ui/react-popover"));
var import_jsx_runtime4 = require("react/jsx-runtime");
function Popover({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PopoverPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden",
        className
      ),
      ...props
    }
  ) });
}

// src/components/ui/combobox.tsx
var import_jsx_runtime5 = require("react/jsx-runtime");
var comboboxColorVariants = {
  default: {
    fieldset: "border-input bg-transparent",
    legend: "text-input"
  },
  primary: {
    fieldset: "border-primary bg-primary/10 dark:border-yello-700",
    legend: "text-primary"
  },
  secondary: {
    fieldset: "border-secondary bg-secondary/10",
    legend: "text-secondary"
  },
  success: {
    fieldset: "border-green-500 bg-green-50",
    legend: "text-green-700"
  },
  danger: {
    fieldset: "border-destructive bg-destructive/10",
    legend: "text-destructive"
  }
};
var Combobox = ({
  options: optionsProp = [],
  value,
  onChange,
  searchUrl,
  placeholder = "Select...",
  label,
  variant = "fieldset",
  fieldsetColorVariant = "default",
  dropdownProps,
  inputProps
}) => {
  const { value: _ignoreValue, ...safeInputProps } = inputProps || {};
  const [open, setOpen] = React2.useState(false);
  const [search, setSearch] = React2.useState("");
  const [options, setOptions] = React2.useState(optionsProp);
  const [loading, setLoading] = React2.useState(false);
  const colorSet = comboboxColorVariants[fieldsetColorVariant] || comboboxColorVariants.default;
  const fieldsetRef = React2.useRef(null);
  const [dropdownWidth, setDropdownWidth] = React2.useState(
    void 0
  );
  React2.useEffect(() => {
    if (!searchUrl) return;
    if (!search) {
      setOptions([]);
      return;
    }
    setLoading(true);
    let timeout;
    if (searchUrl === "https://api.example.com/search") {
      const allOptions = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" }
      ];
      timeout = setTimeout(() => {
        setOptions(
          allOptions.filter(
            (o) => o.label.toLowerCase().includes(search.toLowerCase())
          )
        );
        setLoading(false);
      }, 700);
    } else {
      fetch(`${searchUrl}?q=${encodeURIComponent(search)}`).then((res) => res.json()).then((data) => {
        setOptions(data.items || []);
        setLoading(false);
      }).catch(() => setLoading(false));
    }
    return () => {
      setLoading(false);
      if (timeout) clearTimeout(timeout);
    };
  }, [search, searchUrl]);
  React2.useEffect(() => {
    if (searchUrl) return;
    if (!search) {
      setOptions(optionsProp);
      return;
    }
    setOptions(
      optionsProp.filter(
        (o) => o.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, optionsProp, searchUrl]);
  React2.useLayoutEffect(() => {
    if (fieldsetRef.current) {
      setDropdownWidth(`${fieldsetRef.current.offsetWidth}px`);
    }
  }, [open]);
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
      "fieldset",
      {
        ref: fieldsetRef,
        className: cn(
          "cursor-pointer rounded-sm p-0 px-2 pb-1",
          "border",
          colorSet.fieldset
        ),
        children: [
          label && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            "legend",
            {
              className: cn(
                "my-0 bg-transparent p-0 text-xs leading-none font-medium",
                colorSet.legend
              ),
              children: label
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "flex w-full items-center justify-between bg-transparent px-2 py-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("span", { children: value ? optionsProp.find((o) => o.value === value)?.label || value : placeholder }),
            /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react3.ChevronsUpDown, { className: "opacity-50", size: 15 })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
      PopoverContent,
      {
        align: "start",
        sideOffset: 0,
        className: "border-input min-w-0 rounded-b-md border p-0 shadow",
        style: {
          minWidth: 0,
          width: dropdownWidth,
          left: 0,
          right: "auto",
          position: "absolute",
          zIndex: 50
        },
        ...dropdownProps,
        children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(Command, { className: "bg-background m-0 w-full border-0 p-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
            CommandInput,
            {
              placeholder,
              className: "h-9 border-transparent bg-transparent",
              value: search,
              onValueChange: setSearch,
              ...safeInputProps
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CommandList, { children: loading ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "py-6 text-center text-sm", children: "Loading..." }) : options.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CommandEmpty, { children: "No results found." }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(CommandGroup, { children: options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(
            CommandItem,
            {
              value: option.value,
              onSelect: () => {
                onChange(option.value);
                setOpen(false);
              },
              className: cn(
                value === option.value && "bg-primary/10 text-primary"
              ),
              children: [
                option.label,
                value === option.value && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_lucide_react3.Check, { className: "ml-auto opacity-100" })
              ]
            },
            option.value
          )) }) })
        ] })
      }
    )
  ] });
};

// src/components/ui/checkboxgroup.tsx
var import_react = require("react");
var import_jsx_runtime6 = (
  // Main container - responsive layout: column on mobile, row on xl screens
  require("react/jsx-runtime")
);
var DEFAULT_ITEMS = [
  { id: 1, code: "ITEM1", name: "First Item", permissionGroupId: "group-a" },
  { id: 2, code: "ITEM2", name: "Second Item", permissionGroupId: "group-a" },
  { id: 3, code: "ITEM3", name: "Third Item", permissionGroupId: "group-b" },
  { id: 4, code: "ITEM4", name: "Fourth Item", permissionGroupId: "group-b" },
  { id: 5, code: "ITEM5", name: "Fifth Item", permissionGroupId: "group-c" },
  { id: 6, code: "ITEM6", name: "Sixth Item", permissionGroupId: "group-c" },
  { id: 7, code: "ITEM7", name: "Seventh Item", permissionGroupId: "group-d" },
  { id: 8, code: "ITEM8", name: "Eighth Item", permissionGroupId: "group-d" }
];
var GenericCheckboxGroup = ({
  data = DEFAULT_ITEMS,
  name = "items",
  value = [],
  valueName = "itemId",
  title = "Select All",
  OnFormChange = (e) => console.log("Form change:", e)
}) => {
  const [selectedItems, setSelectedItems] = (0, import_react.useState)(
    new Set(value.map((item) => item[valueName]?.toString()))
  );
  const isAllSelected = selectedItems.size === data.length && data.length > 0;
  const isIndeterminate = selectedItems.size > 0 && selectedItems.size < data.length;
  const handleSelectAll = (0, import_react.useCallback)(() => {
    if (isAllSelected) {
      setSelectedItems(/* @__PURE__ */ new Set());
      OnFormChange({ target: { name, value: data, action: "removeAll" } });
    } else {
      const allIds = new Set(data.map((item) => item.id.toString()));
      setSelectedItems(allIds);
      OnFormChange({ target: { name, value: data, action: "addAll" } });
    }
  }, [isAllSelected, data, name, OnFormChange]);
  const handleItemToggle = (0, import_react.useCallback)(
    (item, isSelected) => {
      const itemId = item.id.toString();
      const newSelectedItems = new Set(selectedItems);
      if (isSelected) {
        newSelectedItems.delete(itemId);
        OnFormChange({
          target: {
            name,
            value: {
              [valueName]: item.id,
              permissionGroupId: item.permissionGroupId
            },
            action: "sub"
          }
        });
      } else {
        newSelectedItems.add(itemId);
        OnFormChange({
          target: {
            name,
            value: {
              [valueName]: item.id,
              permissionGroupId: item.permissionGroupId
            },
            action: "add"
          }
        });
      }
      setSelectedItems(newSelectedItems);
    },
    [selectedItems, name, valueName, OnFormChange]
  );
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col gap-4 xl:flex-row", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      SelectAllCheckbox,
      {
        isChecked: isAllSelected,
        isIndeterminate,
        onToggle: handleSelectAll,
        label: title
      }
    ) }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "xl:border-l-3 border-t-3 border-primary pt-5 xl:border-t-0 xl:border-primary xl:pl-5 xl:pt-0", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "flex max-h-[270px] max-w-[560px] flex-wrap gap-2 overflow-y-auto p-2", children: data.map((item) => /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      CheckboxItem,
      {
        item,
        isSelected: selectedItems.has(item.id.toString()),
        onToggle: handleItemToggle
      },
      item.id
    )) }) })
  ] });
};
var SelectAllCheckbox = ({
  isChecked,
  isIndeterminate,
  onToggle,
  label
}) => {
  return (
    // Select All button - 128px x 80px with top margin
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        onClick: onToggle,
        className: cn(
          "mt-2 flex h-20 w-32 cursor-pointer flex-col items-center justify-center rounded border transition-colors",
          // Background and text colors based on selection state
          isChecked || isIndeterminate ? "border-primary bg-primary text-primary-foreground" : "hover:bg-primary/5 border-primary bg-background text-primary"
          // Unselected: light background with hover
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "px-2 text-center", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-sm font-medium", children: label }) }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                type: "checkbox",
                checked: isChecked,
                ref: (el) => {
                  if (el) el.indeterminate = isIndeterminate;
                },
                onChange: () => {
                },
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
              "div",
              {
                className: cn(
                  "flex h-3 w-3 items-center justify-center rounded border-2",
                  isChecked || isIndeterminate ? "border-primary-foreground bg-primary" : "border-primary"
                  // Unselected: primary border only
                ),
                children: [
                  isChecked && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                    "svg",
                    {
                      className: "h-2 w-2 text-primary-foreground",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  isIndeterminate && !isChecked && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "h-0.5 w-1.5 rounded bg-primary-foreground" })
                ]
              }
            )
          ] })
        ]
      }
    )
  );
};
var CheckboxItem = ({
  item,
  isSelected,
  onToggle
}) => {
  return (
    // Individual item box - 128px x 80px
    /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(
      "div",
      {
        onClick: () => onToggle(item, isSelected),
        className: cn(
          "flex h-20 w-32 cursor-pointer flex-col items-center justify-center rounded border transition-colors",
          // Background and text colors based on selection
          isSelected ? "border-primary bg-primary text-primary-foreground" : "hover:bg-primary/5 border-primary bg-background text-primary"
          // Unselected: light background with hover
        ),
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-1 flex-col justify-center px-2 text-center", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "mb-1 text-sm font-medium leading-tight", children: item.code }),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("span", { className: "text-xs leading-tight", children: item.name })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "relative mb-1", children: [
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "input",
              {
                type: "checkbox",
                checked: isSelected,
                onChange: () => {
                },
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
              "div",
              {
                className: cn(
                  "flex h-3 w-3 items-center justify-center rounded border-2",
                  isSelected ? "border-primary-foreground bg-primary" : "border-primary"
                  // Unselected: primary border only
                ),
                children: isSelected && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                  "svg",
                  {
                    className: "h-2 w-2 text-primary-foreground",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
                      "path",
                      {
                        fillRule: "evenodd",
                        d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                        clipRule: "evenodd"
                      }
                    )
                  }
                )
              }
            )
          ] })
        ]
      }
    )
  );
};

// src/components/ui/input.tsx
var React3 = __toESM(require("react"));
var import_class_variance_authority2 = require("class-variance-authority");
var import_moment = __toESM(require("moment"));
var import_jsx_runtime7 = require("react/jsx-runtime");
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
    fieldset: "border-input",
    legend: "text-input",
    input: "text-foreground"
  },
  primary: {
    fieldset: "border-primary bg-primary/10 dark:border-yello-700",
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
  disabled,
  ...props
}) {
  const colorSet = fieldsetColorVariants[fieldsetColorVariant] || fieldsetColorVariants.default;
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    "fieldset",
    {
      className: cn(
        "rounded-sm p-0 px-2 pb-1",
        disabled ? "border-none" : "border",
        !disabled && colorSet.fieldset,
        className
      ),
      "input-type": type || "text",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          "legend",
          {
            className: cn(
              "my-0 bg-transparent p-0 text-xs leading-none font-medium",
              colorSet.legend
            ),
            children: legend || placeholder
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
            disabled,
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
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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

// src/components/ui/label.tsx
var LabelPrimitive = __toESM(require("@radix-ui/react-label"));
var import_jsx_runtime8 = require("react/jsx-runtime");
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
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

// src/components/ui/textarea.tsx
var React4 = __toESM(require("react"));
var import_class_variance_authority3 = require("class-variance-authority");
var import_jsx_runtime9 = require("react/jsx-runtime");
var textareaVariants = (0, import_class_variance_authority3.cva)(
  "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
  {
    variants: {
      variant: {
        default: "",
        filled: "bg-muted border-0 shadow-inner focus-visible:ring-2 focus-visible:ring-ring/40",
        underline: "border-0 border-b-2 rounded-none focus-visible:border-ring",
        ghost: "border-0 bg-transparent shadow-none",
        fieldset: ""
        // handled in render
      },
      textareaSize: {
        default: "min-h-16 px-3 py-2 text-base md:text-sm",
        sm: "min-h-12 px-2 text-sm",
        lg: "min-h-24 px-4 text-lg"
      }
    },
    defaultVariants: {
      variant: "default",
      textareaSize: "default"
    }
  }
);
var fieldsetColorVariants2 = {
  default: {
    fieldset: "border-input",
    legend: "text-input",
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
function renderFieldsetTextarea({
  className,
  legend,
  placeholder,
  value,
  inputRef,
  fieldsetColorVariant = "default",
  disabled,
  ...props
}) {
  const colorSet = fieldsetColorVariants2[fieldsetColorVariant] || fieldsetColorVariants2.default;
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)(
    "fieldset",
    {
      className: cn(
        "rounded-sm p-0 px-2 pb-1",
        disabled ? "border-none" : "border",
        !disabled && colorSet.fieldset,
        className
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "legend",
          {
            className: cn(
              "text-input my-0 bg-transparent p-0 text-xs leading-none font-medium",
              colorSet.legend
            ),
            children: legend || placeholder
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          "textarea",
          {
            className: cn(
              "w-full rounded-none text-base placeholder-transparent outline-none disabled:bg-transparent",
              colorSet.input,
              disabled && "resize-none"
            ),
            style: { resize: "none", ...props.style || {} },
            ref: inputRef,
            value,
            disabled,
            ...props
          }
        )
      ]
    }
  );
}
var Textarea = React4.forwardRef(
  ({
    className,
    variant,
    textareaSize,
    legend,
    fieldsetColorVariant,
    disabled,
    ...props
  }, ref) => {
    if (variant === "fieldset") {
      return renderFieldsetTextarea({
        className,
        legend,
        placeholder: props.placeholder,
        value: props.value,
        inputRef: ref,
        fieldsetColorVariant,
        disabled,
        ...props
      });
    }
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
      "textarea",
      {
        "data-slot": "textarea",
        className: cn(textareaVariants({ variant, textareaSize }), className),
        style: { resize: "none", ...props.style || {} },
        ref,
        disabled,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";

// src/components/ui/toggle.tsx
var import_react2 = require("react");
var import_jsx_runtime10 = require("react/jsx-runtime");
var toggleColorVariants = {
  default: {
    fieldset: "border-input",
    legend: "text-input"
  },
  primary: {
    fieldset: "border-primary bg-primary/10",
    legend: "text-primary"
  },
  secondary: {
    fieldset: "border-secondary bg-secondary/10",
    legend: "text-secondary"
  },
  success: {
    fieldset: "border-green-500 bg-green-50",
    legend: "text-green-700"
  },
  danger: {
    fieldset: "border-destructive bg-destructive/10",
    legend: "text-destructive"
  }
};
var Toggle = (props) => {
  const {
    checked = false,
    onChange = () => {
    },
    disabled = false,
    name = "",
    checkedValue = "YES",
    notCheckedValue = "NO",
    legend,
    fieldsetColorVariant = "default"
  } = props;
  const toggleRef = (0, import_react2.useRef)(false);
  const [isChecked, setIsChecked] = (0, import_react2.useState)(checked);
  (0, import_react2.useEffect)(() => {
    toggleRef.current = checked;
    setIsChecked(checked);
  }, [checked]);
  const toggleYes = (0, import_react2.useCallback)(() => {
    if (disabled) return;
    toggleRef.current = true;
    setIsChecked(true);
    onChange({ target: { name, value: true } });
  }, [onChange, name, disabled]);
  const toggleNo = (0, import_react2.useCallback)(() => {
    if (disabled) return;
    toggleRef.current = false;
    setIsChecked(false);
    onChange({ target: { name, value: false } });
  }, [onChange, name, disabled]);
  const colorSet = toggleColorVariants[fieldsetColorVariant] || toggleColorVariants.default;
  if (disabled) {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col gap-1", children: [
      legend && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "span",
        {
          className: `mb-1 block text-xs leading-none font-medium ${colorSet.legend}`,
          children: legend
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "text-foreground block text-xs font-semibold", children: isChecked ? checkedValue : notCheckedValue })
    ] });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex flex-col gap-1", children: [
    legend && /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      "span",
      {
        className: `mb-1 block text-xs leading-none font-medium ${colorSet.legend}`,
        children: legend
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "relative flex w-40 overflow-hidden rounded-sm", children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "span",
        {
          onClick: toggleYes,
          className: `border-input relative z-10 min-w-20 cursor-pointer rounded-l-sm border py-1 text-center text-xs font-semibold`,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "span",
            {
              className: `relative z-10 ${isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`,
              children: checkedValue
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "span",
        {
          onClick: toggleNo,
          className: `border-input relative z-10 min-w-20 cursor-pointer rounded-r-sm border border-l-0 py-1 text-center text-xs font-semibold`,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
            "span",
            {
              className: `relative z-10 ${!isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`,
              children: notCheckedValue
            }
          )
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        "div",
        {
          className: `bg-primary absolute top-0 z-30 h-full min-w-20 transition-all duration-500 ease-out ${isChecked ? "left-0 rounded-l-sm" : "left-20 rounded-r-sm"} `,
          children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("span", { className: "absolute z-40 flex h-full w-full items-center justify-center text-xs font-semibold text-white", children: isChecked ? checkedValue : notCheckedValue })
        }
      )
    ] })
  ] });
};

// src/components/ui/form.tsx
var React6 = __toESM(require("react"));
var import_react_slot = require("@radix-ui/react-slot");
var import_react_hook_form = require("react-hook-form");
var import_jsx_runtime11 = require("react/jsx-runtime");
var Form = import_react_hook_form.FormProvider;
var FormFieldContext = React6.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react_hook_form.Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React6.useContext(FormFieldContext);
  const itemContext = React6.useContext(FormItemContext);
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
var FormItemContext = React6.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React6.useId();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
function FormDescription({ className, ...props }) {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
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

// src/components/upgraded/dropdown-form.tsx
var import_react_hook_form2 = require("react-hook-form");
var import_jsx_runtime12 = require("react/jsx-runtime");
var DropdownForm = ({
  name,
  label,
  description,
  ...comboboxProps
}) => {
  const { control } = (0, import_react_hook_form2.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
    import_react_hook_form2.Controller,
    {
      name,
      control,
      render: ({ field, fieldState }) => /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(FormItem, { children: [
        label && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FormLabel, { children: label }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          Combobox,
          {
            ...comboboxProps,
            value: field.value,
            onChange: field.onChange
          }
        ) }),
        description && /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FormDescription, { children: description }),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(FormMessage, { children: fieldState.error?.message })
      ] })
    }
  );
};

// src/components/upgraded/fieldset-form-input.tsx
var import_react_hook_form3 = require("react-hook-form");
var import_jsx_runtime13 = require("react/jsx-runtime");
function UpgradedFieldsetFormInput({
  name,
  legend,
  placeholder,
  type,
  fieldsetColorVariant = "default",
  ...props
}) {
  const { control } = (0, import_react_hook_form3.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_react_hook_form3.Controller,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(FormItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
          Input,
          {
            ...field,
            variant: "fieldset",
            legend,
            placeholder,
            type,
            fieldsetColorVariant,
            ...props
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(FormMessage, {})
      ] })
    }
  );
}

// src/components/upgraded/fieldset-form-textarea.tsx
var import_react_hook_form4 = require("react-hook-form");
var import_jsx_runtime14 = require("react/jsx-runtime");
function UpgradedFieldsetFormTextarea({
  name,
  legend,
  placeholder,
  fieldsetColorVariant = "default",
  ...props
}) {
  const { control } = (0, import_react_hook_form4.useFormContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
    import_react_hook_form4.Controller,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(FormItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(
          Textarea,
          {
            ...field,
            variant: "fieldset",
            legend,
            placeholder,
            fieldsetColorVariant,
            ...props
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(FormMessage, {})
      ] })
    }
  );
}

// src/components/upgraded/toggle-form.tsx
var import_react_hook_form5 = require("react-hook-form");
var import_jsx_runtime15 = require("react/jsx-runtime");
function ToggleForm({
  name,
  legend,
  fieldsetColorVariant = "default",
  checkedValue,
  notCheckedValue,
  ...props
}) {
  const { control } = (0, import_react_hook_form5.useFormContext)();
  const finalCheckedValue = checkedValue ?? "YES";
  const finalNotCheckedValue = notCheckedValue ?? "NO";
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
    import_react_hook_form5.Controller,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ (0, import_jsx_runtime15.jsxs)(FormItem, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FormControl, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
          Toggle,
          {
            ...props,
            name,
            checked: !!field.value,
            onChange: (e) => field.onChange(e.target.value),
            legend,
            fieldsetColorVariant,
            checkedValue: finalCheckedValue,
            notCheckedValue: finalNotCheckedValue
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(FormMessage, {})
      ] })
    }
  );
}

// src/components/theme-provider.tsx
var import_next_themes = require("next-themes");
var import_jsx_runtime16 = require("react/jsx-runtime");
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(import_next_themes.ThemeProvider, { ...props, children });
}

// src/components/ui/mode-toggle.tsx
var import_lucide_react5 = require("lucide-react");
var import_next_themes2 = require("next-themes");

// src/components/ui/dropdown-menu.tsx
var DropdownMenuPrimitive = __toESM(require("@radix-ui/react-dropdown-menu"));
var import_lucide_react4 = require("lucide-react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(
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
var import_jsx_runtime18 = require("react/jsx-runtime");
function ModeToggle() {
  const { setTheme } = (0, import_next_themes2.useTheme)();
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(DropdownMenu, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_lucide_react5.Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}

// src/components/common/Modal/modal.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
var Modal = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(import_jsx_runtime19.Fragment, { children: show ? /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: cn("modal-background", "h-full"), role: "modal-bg", children: /* @__PURE__ */ (0, import_jsx_runtime19.jsxs)(
    "div",
    {
      className: cn("modal-container", "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
          "div",
          {
            className: cn("modal-header-container", "border border-blue-800"),
            children: /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(
              "span",
              {
                className: cn(
                  "modal-header",
                  "text-foreground border border-red-700 underline underline-offset-8"
                ),
                children: header
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime19.jsx)("div", { className: cn("content-container"), children })
      ]
    }
  ) }) : null });
};
var modal_default = Modal;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  Combobox,
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  Dialog,
  DialogContent,
  DialogTrigger,
  DropdownForm,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  GenericCheckboxGroup,
  Input,
  Label,
  Modal,
  ModeToggle,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
  ThemeProvider,
  Toggle,
  ToggleForm,
  UpgradedFieldsetFormInput,
  UpgradedFieldsetFormTextarea,
  buttonVariants,
  cn,
  comboboxColorVariants,
  toggleColorVariants
});
//# sourceMappingURL=index.js.map