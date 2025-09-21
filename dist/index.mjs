"use client";

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

// src/components/ui/combobox.tsx
import * as React2 from "react";
import { Check, ChevronsUpDown } from "lucide-react";

// src/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

// src/components/ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
function Dialog({
  ...props
}) {
  return /* @__PURE__ */ jsx2(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx2(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({
  ...props
}) {
  return /* @__PURE__ */ jsx2(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
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
  return /* @__PURE__ */ jsxs(DialogPortal, { "data-slot": "dialog-portal", children: [
    /* @__PURE__ */ jsx2(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
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
          showCloseButton && /* @__PURE__ */ jsxs(
            DialogPrimitive.Close,
            {
              "data-slot": "dialog-close",
              className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
              children: [
                /* @__PURE__ */ jsx2(XIcon, {}),
                /* @__PURE__ */ jsx2("span", { className: "sr-only", children: "Close" })
              ]
            }
          )
        ]
      }
    )
  ] });
}

// src/components/ui/command.tsx
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx3(
    CommandPrimitive,
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
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx3(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx3(
          CommandPrimitive.Input,
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
  return /* @__PURE__ */ jsx3(
    CommandPrimitive.List,
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
  return /* @__PURE__ */ jsx3(
    CommandPrimitive.Empty,
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
  return /* @__PURE__ */ jsx3(
    CommandPrimitive.Group,
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
  return /* @__PURE__ */ jsx3(
    CommandPrimitive.Item,
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
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { jsx as jsx4 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx4(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx4(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx4(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx4(
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
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs3(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx5(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs3(
      "fieldset",
      {
        ref: fieldsetRef,
        className: cn(
          "cursor-pointer rounded-sm p-0 px-2 pb-1",
          "border",
          colorSet.fieldset
        ),
        children: [
          label && /* @__PURE__ */ jsx5(
            "legend",
            {
              className: cn(
                "my-0 bg-transparent p-0 text-xs leading-none font-medium",
                colorSet.legend
              ),
              children: label
            }
          ),
          /* @__PURE__ */ jsxs3("div", { className: "flex w-full items-center justify-between bg-transparent px-2 py-1", children: [
            /* @__PURE__ */ jsx5("span", { children: value ? optionsProp.find((o) => o.value === value)?.label || value : placeholder }),
            /* @__PURE__ */ jsx5(ChevronsUpDown, { className: "opacity-50", size: 15 })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx5(
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
        children: /* @__PURE__ */ jsxs3(Command, { className: "bg-background m-0 w-full border-0 p-0", children: [
          /* @__PURE__ */ jsx5(
            CommandInput,
            {
              placeholder,
              className: "h-9 border-transparent bg-transparent",
              value: search,
              onValueChange: setSearch,
              ...safeInputProps
            }
          ),
          /* @__PURE__ */ jsx5(CommandList, { children: loading ? /* @__PURE__ */ jsx5("div", { className: "py-6 text-center text-sm", children: "Loading..." }) : options.length === 0 ? /* @__PURE__ */ jsx5(CommandEmpty, { children: "No results found." }) : /* @__PURE__ */ jsx5(CommandGroup, { children: options.map((option) => /* @__PURE__ */ jsxs3(
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
                value === option.value && /* @__PURE__ */ jsx5(Check, { className: "ml-auto opacity-100" })
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
import { useCallback, useState as useState2 } from "react";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
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
  const [selectedItems, setSelectedItems] = useState2(
    new Set(value.map((item) => item[valueName]?.toString()))
  );
  const isAllSelected = selectedItems.size === data.length && data.length > 0;
  const isIndeterminate = selectedItems.size > 0 && selectedItems.size < data.length;
  const handleSelectAll = useCallback(() => {
    if (isAllSelected) {
      setSelectedItems(/* @__PURE__ */ new Set());
      OnFormChange({ target: { name, value: data, action: "removeAll" } });
    } else {
      const allIds = new Set(data.map((item) => item.id.toString()));
      setSelectedItems(allIds);
      OnFormChange({ target: { name, value: data, action: "addAll" } });
    }
  }, [isAllSelected, data, name, OnFormChange]);
  const handleItemToggle = useCallback(
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
  return (
    // Main container - responsive layout: column on mobile, row on xl screens
    /* @__PURE__ */ jsxs4("div", { className: "flex flex-col gap-4 xl:flex-row", children: [
      /* @__PURE__ */ jsx6("div", { className: "flex flex-col gap-2", children: /* @__PURE__ */ jsx6(
        SelectAllCheckbox,
        {
          isChecked: isAllSelected,
          isIndeterminate,
          onToggle: handleSelectAll,
          label: title
        }
      ) }),
      /* @__PURE__ */ jsx6("div", { className: "xl:border-l-3 border-t-3 border-primary pt-5 xl:border-t-0 xl:border-primary xl:pl-5 xl:pt-0", children: /* @__PURE__ */ jsx6("div", { className: "flex max-h-[270px] max-w-[560px] flex-wrap gap-2 overflow-y-auto p-2", children: data.map((item) => /* @__PURE__ */ jsx6(
        CheckboxItem,
        {
          item,
          isSelected: selectedItems.has(item.id.toString()),
          onToggle: handleItemToggle
        },
        item.id
      )) }) })
    ] })
  );
};
var SelectAllCheckbox = ({
  isChecked,
  isIndeterminate,
  onToggle,
  label
}) => {
  return (
    // Select All button - 128px x 80px with top margin
    /* @__PURE__ */ jsxs4(
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
          /* @__PURE__ */ jsx6("div", { className: "px-2 text-center", children: /* @__PURE__ */ jsx6("span", { className: "text-sm font-medium", children: label }) }),
          /* @__PURE__ */ jsxs4("div", { className: "relative mt-1", children: [
            /* @__PURE__ */ jsx6(
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
            /* @__PURE__ */ jsxs4(
              "div",
              {
                className: cn(
                  "flex h-3 w-3 items-center justify-center rounded border-2",
                  isChecked || isIndeterminate ? "border-primary-foreground bg-primary" : "border-primary"
                  // Unselected: primary border only
                ),
                children: [
                  isChecked && /* @__PURE__ */ jsx6(
                    "svg",
                    {
                      className: "h-2 w-2 text-primary-foreground",
                      fill: "currentColor",
                      viewBox: "0 0 20 20",
                      children: /* @__PURE__ */ jsx6(
                        "path",
                        {
                          fillRule: "evenodd",
                          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
                          clipRule: "evenodd"
                        }
                      )
                    }
                  ),
                  isIndeterminate && !isChecked && /* @__PURE__ */ jsx6("div", { className: "h-0.5 w-1.5 rounded bg-primary-foreground" })
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
    /* @__PURE__ */ jsxs4(
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
          /* @__PURE__ */ jsxs4("div", { className: "flex flex-1 flex-col justify-center px-2 text-center", children: [
            /* @__PURE__ */ jsx6("span", { className: "mb-1 text-sm font-medium leading-tight", children: item.code }),
            /* @__PURE__ */ jsx6("span", { className: "text-xs leading-tight", children: item.name })
          ] }),
          /* @__PURE__ */ jsxs4("div", { className: "relative mb-1", children: [
            /* @__PURE__ */ jsx6(
              "input",
              {
                type: "checkbox",
                checked: isSelected,
                onChange: () => {
                },
                className: "sr-only"
              }
            ),
            /* @__PURE__ */ jsx6(
              "div",
              {
                className: cn(
                  "flex h-3 w-3 items-center justify-center rounded border-2",
                  isSelected ? "border-primary-foreground bg-primary" : "border-primary"
                  // Unselected: primary border only
                ),
                children: isSelected && /* @__PURE__ */ jsx6(
                  "svg",
                  {
                    className: "h-2 w-2 text-primary-foreground",
                    fill: "currentColor",
                    viewBox: "0 0 20 20",
                    children: /* @__PURE__ */ jsx6(
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
var checkboxgroup_default = GenericCheckboxGroup;

// src/components/ui/input.tsx
import * as React3 from "react";
import { cva as cva2 } from "class-variance-authority";
import moment from "moment";
import { jsx as jsx7, jsxs as jsxs5 } from "react/jsx-runtime";
var inputVariants = cva2(
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
      return moment(value.includes("T") ? value.split("T")[0] : value).format(
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
  return /* @__PURE__ */ jsxs5(
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
        /* @__PURE__ */ jsx7(
          "legend",
          {
            className: cn(
              "my-0 bg-transparent p-0 text-xs leading-none font-medium",
              colorSet.legend
            ),
            children: legend || placeholder
          }
        ),
        /* @__PURE__ */ jsx7(
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
    return /* @__PURE__ */ jsx7(
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
import * as LabelPrimitive from "@radix-ui/react-label";
import { jsx as jsx8 } from "react/jsx-runtime";
function Label({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx8(
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
import * as React4 from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx9, jsxs as jsxs6 } from "react/jsx-runtime";
var textareaVariants = cva3(
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
  return /* @__PURE__ */ jsxs6(
    "fieldset",
    {
      className: cn(
        "rounded-sm p-0 px-2 pb-1",
        disabled ? "border-none" : "border",
        !disabled && colorSet.fieldset,
        className
      ),
      children: [
        /* @__PURE__ */ jsx9(
          "legend",
          {
            className: cn(
              "text-input my-0 bg-transparent p-0 text-xs leading-none font-medium",
              colorSet.legend
            ),
            children: legend || placeholder
          }
        ),
        /* @__PURE__ */ jsx9(
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
    return /* @__PURE__ */ jsx9(
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
import { useCallback as useCallback2, useEffect as useEffect2, useRef as useRef2, useState as useState3 } from "react";
import { jsx as jsx10, jsxs as jsxs7 } from "react/jsx-runtime";
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
  const toggleRef = useRef2(false);
  const [isChecked, setIsChecked] = useState3(checked);
  useEffect2(() => {
    toggleRef.current = checked;
    setIsChecked(checked);
  }, [checked]);
  const toggleYes = useCallback2(() => {
    if (disabled) return;
    toggleRef.current = true;
    setIsChecked(true);
    onChange({ target: { name, value: true } });
  }, [onChange, name, disabled]);
  const toggleNo = useCallback2(() => {
    if (disabled) return;
    toggleRef.current = false;
    setIsChecked(false);
    onChange({ target: { name, value: false } });
  }, [onChange, name, disabled]);
  const colorSet = toggleColorVariants[fieldsetColorVariant] || toggleColorVariants.default;
  if (disabled) {
    return /* @__PURE__ */ jsxs7("div", { className: "flex flex-col gap-1", children: [
      legend && /* @__PURE__ */ jsx10(
        "span",
        {
          className: `mb-1 block text-xs leading-none font-medium ${colorSet.legend}`,
          children: legend
        }
      ),
      /* @__PURE__ */ jsx10("span", { className: "text-foreground block text-xs font-semibold", children: isChecked ? checkedValue : notCheckedValue })
    ] });
  }
  return /* @__PURE__ */ jsxs7("div", { className: "flex flex-col gap-1", children: [
    legend && /* @__PURE__ */ jsx10(
      "span",
      {
        className: `mb-1 block text-xs leading-none font-medium ${colorSet.legend}`,
        children: legend
      }
    ),
    /* @__PURE__ */ jsxs7("div", { className: "relative flex w-40 overflow-hidden rounded-sm", children: [
      /* @__PURE__ */ jsx10(
        "span",
        {
          onClick: toggleYes,
          className: `border-input relative z-10 min-w-20 cursor-pointer rounded-l-sm border py-1 text-center text-xs font-semibold`,
          children: /* @__PURE__ */ jsx10(
            "span",
            {
              className: `relative z-10 ${isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`,
              children: checkedValue
            }
          )
        }
      ),
      /* @__PURE__ */ jsx10(
        "span",
        {
          onClick: toggleNo,
          className: `border-input relative z-10 min-w-20 cursor-pointer rounded-r-sm border border-l-0 py-1 text-center text-xs font-semibold`,
          children: /* @__PURE__ */ jsx10(
            "span",
            {
              className: `relative z-10 ${!isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`,
              children: notCheckedValue
            }
          )
        }
      ),
      /* @__PURE__ */ jsx10(
        "div",
        {
          className: `bg-primary absolute top-0 z-30 h-full min-w-20 transition-all duration-500 ease-out ${isChecked ? "left-0 rounded-l-sm" : "left-20 rounded-r-sm"} `,
          children: /* @__PURE__ */ jsx10("span", { className: "absolute z-40 flex h-full w-full items-center justify-center text-xs font-semibold text-white", children: isChecked ? checkedValue : notCheckedValue })
        }
      )
    ] })
  ] });
};

// src/components/ui/form.tsx
import * as React6 from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  Controller,
  FormProvider,
  useFormContext,
  useFormState
} from "react-hook-form";
import { jsx as jsx11 } from "react/jsx-runtime";
var Form = FormProvider;
var FormFieldContext = React6.createContext(
  {}
);
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx11(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx11(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React6.useContext(FormFieldContext);
  const itemContext = React6.useContext(FormItemContext);
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
var FormItemContext = React6.createContext(
  {}
);
function FormItem({ className, ...props }) {
  const id = React6.useId();
  return /* @__PURE__ */ jsx11(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
  return /* @__PURE__ */ jsx11(
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
import { Controller as Controller2, useFormContext as useFormContext2 } from "react-hook-form";
import { jsx as jsx12, jsxs as jsxs8 } from "react/jsx-runtime";
var DropdownForm = ({
  name,
  label,
  description,
  ...comboboxProps
}) => {
  const { control } = useFormContext2();
  return /* @__PURE__ */ jsx12(
    Controller2,
    {
      name,
      control,
      render: ({ field, fieldState }) => /* @__PURE__ */ jsxs8(FormItem, { children: [
        label && /* @__PURE__ */ jsx12(FormLabel, { children: label }),
        /* @__PURE__ */ jsx12(FormControl, { children: /* @__PURE__ */ jsx12(
          Combobox,
          {
            ...comboboxProps,
            value: field.value,
            onChange: field.onChange
          }
        ) }),
        description && /* @__PURE__ */ jsx12(FormDescription, { children: description }),
        /* @__PURE__ */ jsx12(FormMessage, { children: fieldState.error?.message })
      ] })
    }
  );
};

// src/components/upgraded/fieldset-form-input.tsx
import { useFormContext as useFormContext3, Controller as Controller3 } from "react-hook-form";
import { jsx as jsx13, jsxs as jsxs9 } from "react/jsx-runtime";
function UpgradedFieldsetFormInput({
  name,
  legend,
  placeholder,
  type,
  fieldsetColorVariant = "default",
  ...props
}) {
  const { control } = useFormContext3();
  return /* @__PURE__ */ jsx13(
    Controller3,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ jsxs9(FormItem, { children: [
        /* @__PURE__ */ jsx13(FormControl, { children: /* @__PURE__ */ jsx13(
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
        /* @__PURE__ */ jsx13(FormMessage, {})
      ] })
    }
  );
}

// src/components/upgraded/fieldset-form-textarea.tsx
import { useFormContext as useFormContext4, Controller as Controller4 } from "react-hook-form";
import { jsx as jsx14, jsxs as jsxs10 } from "react/jsx-runtime";
function UpgradedFieldsetFormTextarea({
  name,
  legend,
  placeholder,
  fieldsetColorVariant = "default",
  ...props
}) {
  const { control } = useFormContext4();
  return /* @__PURE__ */ jsx14(
    Controller4,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ jsxs10(FormItem, { children: [
        /* @__PURE__ */ jsx14(FormControl, { children: /* @__PURE__ */ jsx14(
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
        /* @__PURE__ */ jsx14(FormMessage, {})
      ] })
    }
  );
}

// src/components/upgraded/toggle-form.tsx
import { useFormContext as useFormContext5, Controller as Controller5 } from "react-hook-form";
import { jsx as jsx15, jsxs as jsxs11 } from "react/jsx-runtime";
function ToggleForm({
  name,
  legend,
  fieldsetColorVariant = "default",
  checkedValue,
  notCheckedValue,
  ...props
}) {
  const { control } = useFormContext5();
  const finalCheckedValue = checkedValue ?? "YES";
  const finalNotCheckedValue = notCheckedValue ?? "NO";
  return /* @__PURE__ */ jsx15(
    Controller5,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ jsxs11(FormItem, { children: [
        /* @__PURE__ */ jsx15(FormControl, { children: /* @__PURE__ */ jsx15(
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
        /* @__PURE__ */ jsx15(FormMessage, {})
      ] })
    }
  );
}

// src/components/upgraded/checkboxgroup-form.tsx
import { FormProvider as FormProvider2, useForm, useFormContext as useFormContext6 } from "react-hook-form";
import { useState as useState4 } from "react";
import { jsx as jsx16, jsxs as jsxs12 } from "react/jsx-runtime";
var GenericCheckboxFormField = ({
  data,
  name,
  valueName = "itemId",
  title = "Select All",
  className = ""
}) => {
  const { control } = useFormContext6();
  return /* @__PURE__ */ jsx16(
    FormField,
    {
      control,
      name,
      render: ({ field }) => {
        const handleFormChange = (e) => {
          const { action, value } = e.target;
          const currentValue = field.value || [];
          switch (action) {
            case "addAll":
              const allItems = value.map((item) => ({
                [valueName]: item.id
              }));
              field.onChange(allItems);
              break;
            case "removeAll":
              field.onChange([]);
              break;
            case "add":
              const existingIndex = currentValue.findIndex(
                (existing) => existing[valueName]?.toString() === value[valueName]?.toString()
              );
              if (existingIndex === -1) {
                field.onChange([...currentValue, value]);
              }
              break;
            case "sub":
              const updatedValue = currentValue.filter(
                (existing) => existing[valueName]?.toString() !== value[valueName]?.toString()
              );
              field.onChange(updatedValue);
              break;
            default:
              console.warn("Unknown action:", action);
          }
        };
        return /* @__PURE__ */ jsxs12(
          FormItem,
          {
            className: cn(
              "ml-4 flex h-auto w-auto flex-wrap content-center gap-3 overflow-y-auto xl:h-auto xl:w-[100%] xl:content-start",
              className
            ),
            children: [
              /* @__PURE__ */ jsx16(FormControl, { children: /* @__PURE__ */ jsx16(
                checkboxgroup_default,
                {
                  data,
                  value: field.value || [],
                  OnFormChange: handleFormChange,
                  name,
                  valueName,
                  title
                }
              ) }),
              /* @__PURE__ */ jsx16(FormMessage, {})
            ]
          }
        );
      }
    }
  );
};

// src/components/ui/navigation-bar/navigation-bar.tsx
import { useEffect as useEffect4, useState as useState7 } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";

// src/components/ui/navigation-bar/nav-area-updated.tsx
import { useRef as useRef3, useState as useState5 } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";

// src/components/ui/navigation-bar/hooks.ts
import { useEffect as useEffect3 } from "react";
var useOutsideComponentClicker = ({ ref, onClickedOutside }) => {
  useEffect3(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickedOutside();
      }
    };
    const timeoutId = setTimeout(() => {
      document.addEventListener("mousedown", handleClickOutside);
    }, 100);
    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickedOutside]);
};

// src/components/ui/navigation-bar/nav-area-updated.tsx
import { jsx as jsx17, jsxs as jsxs13 } from "react/jsx-runtime";
var NavAreaUpdated = (props) => {
  const { routes, permissions } = props;
  const [selected, setSelected] = useState5(-1);
  const ref = useRef3(null);
  useOutsideComponentClicker({
    ref,
    onClickedOutside: () => {
      setSelected(() => -1);
    }
  });
  const showSubRoute = (routes2) => {
    return true;
  };
  return /* @__PURE__ */ jsx17("div", { ref, className: "nav-area", id: "navArea", children: routes.map(({ label, image, to, permissionId, subnav }, i) => {
    if (true) {
      if (subnav) {
        if (!showSubRoute(subnav)) return null;
      }
      return /* @__PURE__ */ jsxs13("div", { children: [
        /* @__PURE__ */ jsx17(
          NavLink,
          {
            selected: selected === i,
            to,
            image: image || "",
            label,
            onSelect: () => setSelected((prev) => prev === i ? -1 : i),
            unselect: () => setSelected(() => -1)
          },
          i
        ),
        i === selected ? /* @__PURE__ */ jsx17(
          SubNav,
          {
            routes: routes[selected]?.subnav,
            permissions
          }
        ) : null
      ] }, i);
    }
  }) });
};
var NavLink = ({
  selected,
  to,
  image,
  label,
  onSelect,
  unselect
}) => {
  return /* @__PURE__ */ jsxs13(
    "a",
    {
      className: selected ? "nav-item-container-active" : "nav-item-container",
      href: to,
      onClick: (e) => {
        if (to) {
          e.preventDefault();
          alert(`Navigating to: ${to}`);
          return;
        }
        onSelect();
      },
      children: [
        image && /* @__PURE__ */ jsx17(
          "img",
          {
            src: image,
            alt: "navIcon"
          }
        ),
        /* @__PURE__ */ jsx17("span", { children: label })
      ]
    }
  );
};
var SubNav = ({
  routes,
  permissions = []
}) => {
  const [selected, setSelected] = useState5(-1);
  const onSelect = (i) => {
    setSelected((prev) => prev === i ? -1 : i);
  };
  if (!routes || routes.length === 0) return null;
  const showSubRoute = (routes2) => {
    return true;
  };
  return /* @__PURE__ */ jsx17("div", { className: "subnav", children: routes?.map(({ label, to, subnav, permissionId }, i) => {
    if (subnav) {
      if (true) {
        return /* @__PURE__ */ jsxs13("div", { className: "level1-sub-nav", children: [
          /* @__PURE__ */ jsx17("div", { className: "level1-header", children: /* @__PURE__ */ jsx17("span", { children: label }) }),
          /* @__PURE__ */ jsx17("div", { className: "level2-sub-nav", children: /* @__PURE__ */ jsxs13("div", { className: "level2-header", children: [
            subnav.map(({ label: label2, to: to2, subnav: subnav2, permissionId: permissionId2 }, y) => {
              if (!subnav2) {
                if (true) {
                  return /* @__PURE__ */ jsx17(
                    "a",
                    {
                      href: to2,
                      onClick: (e) => {
                        e.preventDefault();
                        alert(`Navigating to: ${to2}`);
                      },
                      children: /* @__PURE__ */ jsx17("span", { children: label2 })
                    },
                    y
                  );
                }
              } else if (subnav2) {
                if (!showSubRoute(subnav2)) return null;
                return /* @__PURE__ */ jsxs13(
                  "div",
                  {
                    onClick: () => onSelect(y),
                    className: "level3-container",
                    children: [
                      /* @__PURE__ */ jsxs13(
                        "div",
                        {
                          className: selected === y ? "level3-header-shown" : "level3-header",
                          children: [
                            /* @__PURE__ */ jsx17("span", { children: label2 }),
                            selected === y ? /* @__PURE__ */ jsx17(FaAngleDown, {}) : /* @__PURE__ */ jsx17(FaAngleLeft, {})
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsx17(
                        "div",
                        {
                          className: selected === y ? "level3-content-shown" : "level3-content",
                          children: /* @__PURE__ */ jsx17("div", { children: subnav2.map(
                            ({ label: label3, to: to3, permissionId: permissionId3 }, z) => {
                              if (true) {
                                return /* @__PURE__ */ jsx17(
                                  "a",
                                  {
                                    href: to3,
                                    onClick: (e) => {
                                      e.preventDefault();
                                      alert(`Navigating to: ${to3}`);
                                    },
                                    children: /* @__PURE__ */ jsxs13("span", { children: [
                                      label3,
                                      " "
                                    ] })
                                  },
                                  z
                                );
                              }
                            }
                          ) })
                        }
                      )
                    ]
                  },
                  y
                );
              }
            }),
            /* @__PURE__ */ jsx17("div", { className: "arrow-container", children: /* @__PURE__ */ jsx17("div", { className: "arrow-right" }) })
          ] }) })
        ] }, i);
      }
    } else {
      return /* @__PURE__ */ jsx17("a", { href: to, className: "level1-sub-nav", children: /* @__PURE__ */ jsx17("span", { children: label }) }, i);
    }
  }) });
};

// src/components/ui/navigation-bar/side-nav.tsx
import { useRef as useRef4, useState as useState6 } from "react";
import { FaAngleRight } from "react-icons/fa";
import { jsx as jsx18, jsxs as jsxs14 } from "react/jsx-runtime";
var SideNav = (props) => {
  const { routes, permissions = [] } = props;
  const [selected, setSelected] = useState6(-1);
  const ref = useRef4(null);
  useOutsideComponentClicker({
    ref,
    onClickedOutside: () => {
      setSelected(() => -1);
    }
  });
  const showSubRoute = (routes2) => {
    return true;
  };
  return /* @__PURE__ */ jsx18("div", { className: "side-nav-filter", id: "SideNavFilter", children: /* @__PURE__ */ jsx18("div", { ref, className: "side-nav", id: "SideArea", children: routes.map(({ label, image, to, permissionId, subnav }, i) => {
    if (true) {
      if (subnav && !showSubRoute(subnav)) return null;
      return /* @__PURE__ */ jsxs14("div", { style: { display: "flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsx18(
          SideNavLink,
          {
            selected: selected === i,
            to,
            image: image || "",
            label,
            onSelect: () => setSelected((prev) => prev === i ? -1 : i),
            unselect: () => setSelected(() => -1)
          },
          i
        ),
        selected === i && subnav && /* @__PURE__ */ jsx18(SideSubNav, { routes: subnav, permissions })
      ] }, i);
    }
  }) }) });
};
var SideNavLink = ({
  selected,
  to,
  image,
  label,
  onSelect,
  unselect
}) => {
  return /* @__PURE__ */ jsxs14(
    "a",
    {
      className: selected ? "side-nav-item-container-active" : "side-nav-item-container",
      href: to,
      onClick: (e) => {
        if (to) {
          e.preventDefault();
          alert(`Navigating to: ${to}`);
          return;
        }
        onSelect();
      },
      children: [
        image && /* @__PURE__ */ jsx18(
          "img",
          {
            src: image,
            alt: "navIcon"
          }
        ),
        /* @__PURE__ */ jsx18("span", { children: label })
      ]
    }
  );
};
var SideSubNav = ({
  routes,
  permissions = []
}) => {
  const [selected, setSelected] = useState6(-1);
  if (!routes || routes.length === 0) return null;
  return /* @__PURE__ */ jsx18("div", { className: "side-sub-nav", children: routes.map(({ label, to, subnav, permissionId }, i) => {
    if (subnav) {
      return /* @__PURE__ */ jsxs14("div", { className: selected === i ? "side-sub-sub-container-selected" : "side-sub-sub-container", children: [
        /* @__PURE__ */ jsxs14(
          "div",
          {
            className: "side-sub-sub-nav-heading-link",
            onClick: () => setSelected((prev) => prev === i ? -1 : i),
            children: [
              /* @__PURE__ */ jsx18("span", { className: "side-sub-nav-heading", children: label }),
              /* @__PURE__ */ jsx18(FaAngleRight, {})
            ]
          }
        ),
        selected === i && /* @__PURE__ */ jsx18("div", { className: "side-sub-sub-links-container", children: subnav.map(({ label: label2, to: to2, permissionId: permissionId2 }, y) => {
          if (true) {
            return /* @__PURE__ */ jsx18(
              "a",
              {
                href: to2,
                onClick: (e) => {
                  e.preventDefault();
                  alert(`Navigating to: ${to2}`);
                },
                children: label2
              },
              y
            );
          }
        }) })
      ] }, i);
    } else {
      return /* @__PURE__ */ jsx18(
        "a",
        {
          href: to,
          className: "side-sub-nav-heading-link",
          children: /* @__PURE__ */ jsx18("span", { className: "side-sub-nav-heading", children: label })
        },
        i
      );
    }
  }) });
};

// src/components/ui/navigation-bar/sub-acc.tsx
import { jsx as jsx19, jsxs as jsxs15 } from "react/jsx-runtime";
var SubAcc = (props) => {
  const {
    isAdmin = false,
    onSignOut = () => alert("Sign out clicked - replace with your auth logout function"),
    onChangePassword = () => alert("Change password clicked - replace with your change password function"),
    onResetPassword = () => alert("Reset password clicked - replace with your reset password function")
  } = props;
  return /* @__PURE__ */ jsxs15("ul", { className: "sub-acc", children: [
    /* @__PURE__ */ jsx19("li", { className: "account-label", children: /* @__PURE__ */ jsx19("button", { onClick: onChangePassword, children: "Change Password" }) }),
    isAdmin && /* @__PURE__ */ jsx19("li", { className: "account-label", children: /* @__PURE__ */ jsx19("button", { onClick: onResetPassword, children: "Reset Password" }) }),
    /* @__PURE__ */ jsx19("li", { className: "account-label", children: /* @__PURE__ */ jsx19("button", { onClick: onSignOut, children: "Sign Out" }) })
  ] });
};

// src/assets/images/payplus-logo.png
var payplus_logo_default = "./payplus-logo-A2YWB25I.png";

// src/assets/images/payplus-logo-dark.png
var payplus_logo_dark_default = "./payplus-logo-dark-Y2VX3M5R.png";

// src/assets/icons/home.svg
var home_default = "./home-GYF2OX5G.svg";

// src/assets/icons/file.svg
var file_default = "./file-C65X33IB.svg";

// src/assets/icons/payroll.svg
var payroll_default = "./payroll-MASCE2FG.svg";

// src/assets/icons/timekeeping.svg
var timekeeping_default = "./timekeeping-TV4FSF7P.svg";

// src/assets/icons/assets.svg
var assets_default = "./assets-5WG32LML.svg";

// src/assets/icons/system.svg
var system_default = "./system-FSEJPXN6.svg";

// src/assets/icons/cupcake.svg
var cupcake_default = "./cupcake-VD7Z4YOW.svg";

// src/assets/index.ts
var payplusAssets = {
  logo: {
    src: payplus_logo_default,
    darkMode: payplus_logo_dark_default,
    alt: "PayPlus Logo"
  }
};
var navigationIcons = {
  home: home_default,
  file: file_default,
  payroll: payroll_default,
  timekeeping: timekeeping_default,
  assets: assets_default,
  system: system_default,
  birthday: cupcake_default
};

// src/components/ui/navigation-bar/navigation-bar.tsx
import { Fragment, jsx as jsx20, jsxs as jsxs16 } from "react/jsx-runtime";
var NavigationBar = (props) => {
  const defaultLogo = payplusAssets.logo;
  const {
    routes,
    permissions = [],
    isAdmin = false,
    logo = defaultLogo,
    user,
    className
  } = props;
  const [selectedHamburger, setSelectedHamburger] = useState7(false);
  const [, setDarkMode] = useState7(false);
  useEffect4(() => {
    if (typeof window === "undefined") return;
    const listener = () => {
      if (window.innerWidth < 1024) {
        setSelectedHamburger(false);
      }
    };
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);
  useEffect4(() => {
    if (typeof document === "undefined") return;
    const bodyClassListener = () => {
      setDarkMode(document.body.classList.contains("dark"));
    };
    document.body.addEventListener("transitionend", bodyClassListener);
    return () => {
      document.body.removeEventListener("transitionend", bodyClassListener);
    };
  }, []);
  return /* @__PURE__ */ jsxs16("nav", { className: `${className || ""}`, style: { zIndex: 50, width: "100vw", backgroundColor: "var(--background, #ffffff)" }, children: [
    /* @__PURE__ */ jsxs16("div", { className: "nav-bar", children: [
      /* @__PURE__ */ jsx20("div", { className: "logo-container", children: logo.darkMode ? /* @__PURE__ */ jsxs16(Fragment, { children: [
        /* @__PURE__ */ jsx20(
          "img",
          {
            className: "image-on-nav",
            style: { display: "none" },
            src: logo.darkMode,
            alt: logo.alt,
            loading: "eager"
          }
        ),
        /* @__PURE__ */ jsx20(
          "img",
          {
            className: "image-on-nav",
            src: logo.src,
            alt: logo.alt,
            loading: "eager"
          }
        )
      ] }) : /* @__PURE__ */ jsx20(
        "img",
        {
          className: "image-on-nav",
          src: logo.src,
          alt: logo.alt,
          loading: "eager"
        }
      ) }),
      /* @__PURE__ */ jsx20(NavAreaUpdated, { routes, permissions }),
      /* @__PURE__ */ jsx20("div", { className: "hamburger-container", children: /* @__PURE__ */ jsx20(
        "div",
        {
          className: selectedHamburger ? "hamburger-selected" : "hamburger",
          onClick: () => setSelectedHamburger((prev) => {
            return !prev;
          }),
          children: /* @__PURE__ */ jsx20(FaBars, {})
        }
      ) }),
      !user?.data.isAdmin && /* @__PURE__ */ jsx20("div", { style: {
        width: "2rem",
        height: "2rem",
        borderRadius: "4px",
        backgroundColor: "rgba(0, 102, 204, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }, children: "\u{1F4C5}" }),
      /* @__PURE__ */ jsxs16("div", { className: "account-wrapper", children: [
        /* @__PURE__ */ jsxs16("div", { className: "account-area", children: [
          /* @__PURE__ */ jsx20("div", { className: "account-dp-container", children: /* @__PURE__ */ jsx20("div", { style: {
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold"
          }, children: user?.data.name?.charAt(0) || "U" }) }),
          /* @__PURE__ */ jsx20(FaChevronDown, { size: "0.75rem" })
        ] }),
        /* @__PURE__ */ jsx20(SubAcc, { isAdmin })
      ] }),
      /* @__PURE__ */ jsx20("div", { style: {
        width: "2rem",
        height: "2rem",
        borderRadius: "4px",
        backgroundColor: "rgba(0, 102, 204, 0.1)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer"
      }, children: "\u{1F319}" })
    ] }),
    selectedHamburger && /* @__PURE__ */ jsx20(SideNav, { routes, permissions })
  ] });
};

// src/components/theme-provider.tsx
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jsx as jsx21 } from "react/jsx-runtime";
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx21(NextThemesProvider, { ...props, children });
}

// src/components/ui/mode-toggle.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// src/components/ui/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx22, jsxs as jsxs17 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx22(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx22(
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
  return /* @__PURE__ */ jsx22(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx22(
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
  return /* @__PURE__ */ jsx22(
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
import { jsx as jsx23, jsxs as jsxs18 } from "react/jsx-runtime";
function ModeToggle() {
  const { setTheme } = useTheme();
  return /* @__PURE__ */ jsxs18(DropdownMenu, { children: [
    /* @__PURE__ */ jsx23(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs18(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsx23(Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
      /* @__PURE__ */ jsx23(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
      /* @__PURE__ */ jsx23("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs18(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx23(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ jsx23(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx23(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}

// src/components/common/Modal/modal.tsx
import { Fragment as Fragment2, jsx as jsx24, jsxs as jsxs19 } from "react/jsx-runtime";
var Modal = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ jsx24(Fragment2, { children: show ? /* @__PURE__ */ jsx24("div", { className: cn("modal-background", "h-full"), role: "modal-bg", children: /* @__PURE__ */ jsxs19(
    "div",
    {
      className: cn("modal-container", "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ jsx24(
          "div",
          {
            className: cn("modal-header-container", "border border-blue-800"),
            children: /* @__PURE__ */ jsx24(
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
        /* @__PURE__ */ jsx24("div", { className: cn("content-container"), children })
      ]
    }
  ) }) : null });
};
var modal_default = Modal;

// src/components/ui/navigation-bar/sample-data.ts
var sampleLogo = {
  src: "https://via.placeholder.com/160x60/0066cc/ffffff?text=COMPANY",
  darkMode: "https://via.placeholder.com/160x60/ffffff/000000?text=COMPANY",
  alt: "Company Logo"
};
var sampleAdminUser = {
  data: {
    isAdmin: true,
    name: "John Admin",
    email: "john.admin@company.com"
  }
};
var sampleEmployeeUser = {
  data: {
    isAdmin: false,
    name: "Jane Employee",
    email: "jane.employee@company.com"
  }
};
var sampleUser = sampleAdminUser;
var sampleAdminRoutes = [
  {
    label: "Home",
    image: navigationIcons.home,
    to: "/admin/home"
  },
  {
    label: "File Maintenance",
    image: navigationIcons.file,
    subnav: [
      {
        label: "Human Resource",
        subnav: [
          {
            label: "Company",
            to: "/admin/maintenance/hr/companies",
            permissionId: 100
          },
          {
            label: "Branch",
            to: "/admin/maintenance/hr/branches",
            permissionId: 200
          },
          {
            label: "Department",
            to: "/admin/maintenance/hr/departments",
            permissionId: 300
          },
          {
            label: "Employee",
            to: "/admin/maintenance/hr/employees",
            permissionId: 1200
          }
        ]
      },
      {
        label: "Payroll",
        subnav: [
          {
            label: "Government",
            subnav: [
              {
                label: "Annual Tax Table",
                to: "/admin/maintenance/payroll/government/annualtaxes",
                permissionId: 1300
              },
              {
                label: "SSS Table",
                permissionId: 1500,
                to: "/admin/maintenance/payroll/government/sss"
              },
              {
                label: "Philhealth Table",
                permissionId: 1600,
                to: "/admin/maintenance/payroll/government/philhealth"
              }
            ]
          },
          {
            label: "Bank",
            to: "/admin/maintenance/payroll/banks",
            permissionId: 2e3
          },
          {
            label: "Deduction",
            to: "/admin/maintenance/payroll/deductions",
            permissionId: 2100
          }
        ]
      }
    ]
  },
  {
    label: "Timekeeping",
    image: navigationIcons.timekeeping,
    subnav: [
      {
        label: "Time Entry",
        subnav: [
          {
            label: "Log Override",
            to: "/admin/timekeeping/applications/logoverride",
            permissionId: 4200
          },
          {
            label: "Overtime",
            to: "/admin/timekeeping/applications/overtime",
            permissionId: 4300
          },
          {
            label: "Leave",
            to: "/admin/timekeeping/applications/leave",
            permissionId: 4400
          }
        ]
      },
      {
        label: "Processing",
        subnav: [
          {
            label: "Cut-Off Consolidation",
            to: "/admin/timekeeping/processing/consolidation",
            permissionId: 5100
          }
        ]
      }
    ]
  },
  {
    label: "System",
    image: navigationIcons.system,
    subnav: [
      {
        label: "User",
        subnav: [
          {
            label: "Maintenance",
            to: "/admin/system/usermaintenance",
            permissionId: 7100
          },
          {
            label: "Levels",
            to: "/admin/system/userlevels",
            permissionId: 7200
          }
        ]
      },
      {
        label: "Reports",
        subnav: [
          {
            label: "Generate Reports",
            to: "/admin/system/reports",
            permissionId: 7300
          }
        ]
      }
    ]
  }
];
var sampleEmployeeRoutes = [
  {
    label: "Home",
    image: navigationIcons.home,
    to: "/employee/home"
  },
  {
    label: "Records & Profiles",
    image: navigationIcons.file,
    subnav: [
      {
        label: "Personal Time Records",
        to: "/employee/reports/personaltimerecords"
      },
      {
        label: "Employee Time Records",
        to: "/employee/reports/employeetimerecords"
      },
      {
        label: "Payslip",
        to: "/employee/reports/payslip"
      },
      {
        label: "Personal Profile",
        to: "/employee/profile"
      }
    ]
  },
  {
    label: "Applications",
    image: navigationIcons.timekeeping,
    subnav: [
      {
        label: "Personal",
        subnav: [
          {
            label: "Log Override",
            to: "/employee/timekeeping/applications/logoverride"
          },
          {
            label: "Overtime",
            to: "/employee/timekeeping/applications/overtime"
          },
          {
            label: "Leave",
            to: "/employee/timekeeping/applications/leave"
          }
        ]
      },
      {
        label: "Approver",
        subnav: [
          {
            label: "Log Override",
            to: "/employee/approver/timekeeping/applications/logoverride"
          },
          {
            label: "Overtime",
            to: "/employee/approver/timekeeping/applications/overtime"
          },
          {
            label: "Leave",
            to: "/employee/approver/timekeeping/applications/leave"
          }
        ]
      }
    ]
  }
];
var sampleAdminPermissions = [
  100,
  200,
  300,
  1200,
  1300,
  1500,
  1600,
  2e3,
  2100,
  4200,
  4300,
  4400,
  5100,
  7100,
  7200,
  7300
];
var sampleEmployeePermissions = [
  4200,
  4300,
  4400
  // Only basic time entry permissions
];
export {
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
  GenericCheckboxFormField,
  GenericCheckboxGroup,
  Input,
  Label,
  modal_default as Modal,
  ModeToggle,
  NavAreaUpdated,
  NavigationBar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  SideNav,
  SubAcc,
  Textarea,
  ThemeProvider,
  Toggle,
  ToggleForm,
  UpgradedFieldsetFormInput,
  UpgradedFieldsetFormTextarea,
  assets_default as assetsIcon,
  cupcake_default as birthdayIcon,
  buttonVariants,
  cn,
  comboboxColorVariants,
  file_default as fileIcon,
  home_default as homeIcon,
  navigationIcons,
  payplusAssets,
  payplus_logo_default as payplusLogo,
  payplus_logo_dark_default as payplusLogoDark,
  payroll_default as payrollIcon,
  sampleAdminPermissions,
  sampleAdminRoutes,
  sampleAdminUser,
  sampleEmployeePermissions,
  sampleEmployeeRoutes,
  sampleEmployeeUser,
  sampleLogo,
  sampleUser,
  system_default as systemIcon,
  timekeeping_default as timekeepingIcon,
  toggleColorVariants
};
//# sourceMappingURL=index.mjs.map