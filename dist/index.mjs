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
import * as React3 from "react";
import { cva as cva2 } from "class-variance-authority";
import moment from "moment";
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs(
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
        /* @__PURE__ */ jsx4(
          "legend",
          {
            className: cn(
              "my-0 bg-transparent p-0 text-xs leading-none font-medium",
              colorSet.legend
            ),
            children: legend || placeholder
          }
        ),
        /* @__PURE__ */ jsx4(
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
    return /* @__PURE__ */ jsx4(
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
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { jsx as jsx5 } from "react/jsx-runtime";
function ThemeProvider({
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx5(NextThemesProvider, { ...props, children });
}

// src/components/ui/mode-toggle.tsx
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

// src/components/ui/dropdown-menu.tsx
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronRightIcon, CircleIcon } from "lucide-react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function DropdownMenu({
  ...props
}) {
  return /* @__PURE__ */ jsx6(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx6(
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
  return /* @__PURE__ */ jsx6(
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
import { jsx as jsx7, jsxs as jsxs3 } from "react/jsx-runtime";
function ModeToggle() {
  const { setTheme } = useTheme();
  return /* @__PURE__ */ jsxs3(DropdownMenu, { children: [
    /* @__PURE__ */ jsx7(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs3(Button, { variant: "outline", size: "icon", children: [
      /* @__PURE__ */ jsx7(Sun, { className: "h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" }),
      /* @__PURE__ */ jsx7(Moon, { className: "absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" }),
      /* @__PURE__ */ jsx7("span", { className: "sr-only", children: "Toggle theme" })
    ] }) }),
    /* @__PURE__ */ jsxs3(DropdownMenuContent, { align: "end", children: [
      /* @__PURE__ */ jsx7(DropdownMenuItem, { onClick: () => setTheme("light"), children: "Light" }),
      /* @__PURE__ */ jsx7(DropdownMenuItem, { onClick: () => setTheme("dark"), children: "Dark" }),
      /* @__PURE__ */ jsx7(DropdownMenuItem, { onClick: () => setTheme("system"), children: "System" })
    ] })
  ] });
}

// src/components/common/Modal/modal.tsx
import { Fragment, jsx as jsx8, jsxs as jsxs4 } from "react/jsx-runtime";
var Modal = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}) => {
  const modalSize = { "modal-size": size };
  return /* @__PURE__ */ jsx8(Fragment, { children: show ? /* @__PURE__ */ jsx8("div", { className: cn("modal-background", "h-full"), role: "modal-bg", children: /* @__PURE__ */ jsxs4(
    "div",
    {
      className: cn("modal-container", "bg-background"),
      ...rest,
      ...modalSize,
      children: [
        /* @__PURE__ */ jsx8(
          "div",
          {
            className: cn("modal-header-container", "border border-blue-800"),
            children: /* @__PURE__ */ jsx8(
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
        /* @__PURE__ */ jsx8("div", { className: cn("content-container"), children })
      ]
    }
  ) }) : null });
};
var modal_default = Modal;

// src/components/upgraded/dropdown-form.tsx
import { Controller as Controller2, useFormContext as useFormContext2 } from "react-hook-form";

// src/components/ui/combobox.tsx
import * as React4 from "react";
import { Check, ChevronsUpDown } from "lucide-react";

// src/components/ui/command.tsx
import { Command as CommandPrimitive } from "cmdk";
import { SearchIcon } from "lucide-react";

// src/components/ui/dialog.tsx
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { XIcon } from "lucide-react";
import { jsx as jsx9, jsxs as jsxs5 } from "react/jsx-runtime";

// src/components/ui/command.tsx
import { jsx as jsx10, jsxs as jsxs6 } from "react/jsx-runtime";
function Command({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx10(
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
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      "data-slot": "command-input-wrapper",
      className: "flex h-9 items-center gap-2 border-b px-3",
      children: [
        /* @__PURE__ */ jsx10(SearchIcon, { className: "size-4 shrink-0 opacity-50" }),
        /* @__PURE__ */ jsx10(
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
  return /* @__PURE__ */ jsx10(
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
  return /* @__PURE__ */ jsx10(
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
  return /* @__PURE__ */ jsx10(
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
  return /* @__PURE__ */ jsx10(
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
import { jsx as jsx11 } from "react/jsx-runtime";
function Popover({
  ...props
}) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx11(
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
import { jsx as jsx12, jsxs as jsxs7 } from "react/jsx-runtime";
var fieldsetColorVariants2 = {
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
  const [open, setOpen] = React4.useState(false);
  const [search, setSearch] = React4.useState("");
  const [options, setOptions] = React4.useState(optionsProp);
  const [loading, setLoading] = React4.useState(false);
  const colorSet = fieldsetColorVariants2[fieldsetColorVariant] || fieldsetColorVariants2.default;
  const fieldsetRef = React4.useRef(null);
  const [dropdownWidth, setDropdownWidth] = React4.useState(
    void 0
  );
  React4.useEffect(() => {
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
  React4.useEffect(() => {
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
  React4.useLayoutEffect(() => {
    if (fieldsetRef.current) {
      setDropdownWidth(`${fieldsetRef.current.offsetWidth}px`);
    }
  }, [open]);
  return /* @__PURE__ */ jsxs7(Popover, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx12(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs7(
      "fieldset",
      {
        ref: fieldsetRef,
        className: cn(
          "cursor-pointer rounded-sm p-0 px-2 pb-1",
          "border",
          colorSet.fieldset
        ),
        children: [
          label && /* @__PURE__ */ jsx12(
            "legend",
            {
              className: cn(
                "my-0 bg-transparent p-0 text-xs leading-none font-medium",
                colorSet.legend
              ),
              children: label
            }
          ),
          /* @__PURE__ */ jsxs7("div", { className: "flex w-full items-center justify-between bg-transparent px-2 py-1", children: [
            /* @__PURE__ */ jsx12("span", { children: value ? optionsProp.find((o) => o.value === value)?.label || value : placeholder }),
            /* @__PURE__ */ jsx12(ChevronsUpDown, { className: "opacity-50", size: 15 })
          ] })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx12(
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
        children: /* @__PURE__ */ jsxs7(Command, { className: "bg-background m-0 w-full border-0 p-0", children: [
          /* @__PURE__ */ jsx12(
            CommandInput,
            {
              placeholder,
              className: "h-9 border-transparent bg-transparent",
              value: search,
              onValueChange: setSearch,
              ...safeInputProps
            }
          ),
          /* @__PURE__ */ jsx12(CommandList, { children: loading ? /* @__PURE__ */ jsx12("div", { className: "py-6 text-center text-sm", children: "Loading..." }) : options.length === 0 ? /* @__PURE__ */ jsx12(CommandEmpty, { children: "No results found." }) : /* @__PURE__ */ jsx12(CommandGroup, { children: options.map((option) => /* @__PURE__ */ jsxs7(
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
                value === option.value && /* @__PURE__ */ jsx12(Check, { className: "ml-auto opacity-100" })
              ]
            },
            option.value
          )) }) })
        ] })
      }
    )
  ] });
};

// src/components/upgraded/dropdown-form.tsx
import { jsx as jsx13, jsxs as jsxs8 } from "react/jsx-runtime";
var DropdownForm = ({
  name,
  label,
  description,
  ...comboboxProps
}) => {
  const { control } = useFormContext2();
  return /* @__PURE__ */ jsx13(
    Controller2,
    {
      name,
      control,
      render: ({ field, fieldState }) => /* @__PURE__ */ jsxs8(FormItem, { children: [
        label && /* @__PURE__ */ jsx13(FormLabel, { children: label }),
        /* @__PURE__ */ jsx13(FormControl, { children: /* @__PURE__ */ jsx13(
          Combobox,
          {
            ...comboboxProps,
            value: field.value,
            onChange: field.onChange
          }
        ) }),
        description && /* @__PURE__ */ jsx13(FormDescription, { children: description }),
        /* @__PURE__ */ jsx13(FormMessage, { children: fieldState.error?.message })
      ] })
    }
  );
};

// src/components/upgraded/fieldset-form-input.tsx
import { useFormContext as useFormContext3, Controller as Controller3 } from "react-hook-form";
import { jsx as jsx14, jsxs as jsxs9 } from "react/jsx-runtime";
function UpgradedFieldsetFormInput({
  name,
  legend,
  placeholder,
  type,
  fieldsetColorVariant = "default",
  ...props
}) {
  const { control } = useFormContext3();
  return /* @__PURE__ */ jsx14(
    Controller3,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ jsxs9(FormItem, { children: [
        /* @__PURE__ */ jsx14(FormControl, { children: /* @__PURE__ */ jsx14(
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
        /* @__PURE__ */ jsx14(FormMessage, {})
      ] })
    }
  );
}

// src/components/upgraded/fieldset-form-textarea.tsx
import { useFormContext as useFormContext4, Controller as Controller4 } from "react-hook-form";

// src/components/ui/textarea.tsx
import * as React5 from "react";
import { cva as cva3 } from "class-variance-authority";
import { jsx as jsx15, jsxs as jsxs10 } from "react/jsx-runtime";
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
var fieldsetColorVariants3 = {
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
  const colorSet = fieldsetColorVariants3[fieldsetColorVariant] || fieldsetColorVariants3.default;
  return /* @__PURE__ */ jsxs10(
    "fieldset",
    {
      className: cn(
        "rounded-sm p-0 px-2 pb-1",
        disabled ? "border-none" : "border",
        !disabled && colorSet.fieldset,
        className
      ),
      children: [
        /* @__PURE__ */ jsx15(
          "legend",
          {
            className: cn(
              "text-input my-0 bg-transparent p-0 text-xs leading-none font-medium",
              colorSet.legend
            ),
            children: legend || placeholder
          }
        ),
        /* @__PURE__ */ jsx15(
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
var Textarea = React5.forwardRef(
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
    return /* @__PURE__ */ jsx15(
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

// src/components/upgraded/fieldset-form-textarea.tsx
import { jsx as jsx16, jsxs as jsxs11 } from "react/jsx-runtime";
function UpgradedFieldsetFormTextarea({
  name,
  legend,
  placeholder,
  fieldsetColorVariant = "default",
  ...props
}) {
  const { control } = useFormContext4();
  return /* @__PURE__ */ jsx16(
    Controller4,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ jsxs11(FormItem, { children: [
        /* @__PURE__ */ jsx16(FormControl, { children: /* @__PURE__ */ jsx16(
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
        /* @__PURE__ */ jsx16(FormMessage, {})
      ] })
    }
  );
}

// src/components/upgraded/toggle-form.tsx
import { useFormContext as useFormContext5, Controller as Controller5 } from "react-hook-form";

// src/components/ui/toggle.tsx
import { useCallback, useEffect as useEffect2, useRef as useRef2, useState as useState2 } from "react";
import { jsx as jsx17, jsxs as jsxs12 } from "react/jsx-runtime";
var fieldsetColorVariants4 = {
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
  const [isChecked, setIsChecked] = useState2(checked);
  useEffect2(() => {
    toggleRef.current = checked;
    setIsChecked(checked);
  }, [checked]);
  const toggleYes = useCallback(() => {
    if (disabled) return;
    toggleRef.current = true;
    setIsChecked(true);
    onChange({ target: { name, value: true } });
  }, [onChange, name, disabled]);
  const toggleNo = useCallback(() => {
    if (disabled) return;
    toggleRef.current = false;
    setIsChecked(false);
    onChange({ target: { name, value: false } });
  }, [onChange, name, disabled]);
  const colorSet = fieldsetColorVariants4[fieldsetColorVariant] || fieldsetColorVariants4.default;
  if (disabled) {
    return /* @__PURE__ */ jsxs12("div", { className: "flex flex-col gap-1", children: [
      legend && /* @__PURE__ */ jsx17(
        "span",
        {
          className: `mb-1 block text-xs leading-none font-medium ${colorSet.legend}`,
          children: legend
        }
      ),
      /* @__PURE__ */ jsx17("span", { className: "text-foreground block text-xs font-semibold", children: isChecked ? checkedValue : notCheckedValue })
    ] });
  }
  return /* @__PURE__ */ jsxs12("div", { className: "flex flex-col gap-1", children: [
    legend && /* @__PURE__ */ jsx17(
      "span",
      {
        className: `mb-1 block text-xs leading-none font-medium ${colorSet.legend}`,
        children: legend
      }
    ),
    /* @__PURE__ */ jsxs12("div", { className: "relative flex w-40 overflow-hidden rounded-sm", children: [
      /* @__PURE__ */ jsx17(
        "span",
        {
          onClick: toggleYes,
          className: `border-input relative z-10 min-w-20 cursor-pointer rounded-l-sm border py-1 text-center text-xs font-semibold`,
          children: /* @__PURE__ */ jsx17(
            "span",
            {
              className: `relative z-10 ${isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`,
              children: checkedValue
            }
          )
        }
      ),
      /* @__PURE__ */ jsx17(
        "span",
        {
          onClick: toggleNo,
          className: `border-input relative z-10 min-w-20 cursor-pointer rounded-r-sm border border-l-0 py-1 text-center text-xs font-semibold`,
          children: /* @__PURE__ */ jsx17(
            "span",
            {
              className: `relative z-10 ${!isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`,
              children: notCheckedValue
            }
          )
        }
      ),
      /* @__PURE__ */ jsx17(
        "div",
        {
          className: `bg-primary absolute top-0 z-30 h-full min-w-20 transition-all duration-500 ease-out ${isChecked ? "left-0 rounded-l-sm" : "left-20 rounded-r-sm"} `,
          children: /* @__PURE__ */ jsx17("span", { className: "absolute z-40 flex h-full w-full items-center justify-center text-xs font-semibold text-white", children: isChecked ? checkedValue : notCheckedValue })
        }
      )
    ] })
  ] });
};

// src/components/upgraded/toggle-form.tsx
import { jsx as jsx18, jsxs as jsxs13 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsx18(
    Controller5,
    {
      name,
      control,
      render: ({ field }) => /* @__PURE__ */ jsxs13(FormItem, { children: [
        /* @__PURE__ */ jsx18(FormControl, { children: /* @__PURE__ */ jsx18(
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
        /* @__PURE__ */ jsx18(FormMessage, {})
      ] })
    }
  );
}
export {
  Button,
  DropdownForm,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
  Input,
  modal_default as Modal,
  ModeToggle,
  ThemeProvider,
  ToggleForm,
  UpgradedFieldsetFormInput,
  UpgradedFieldsetFormTextarea,
  buttonVariants,
  cn
};
//# sourceMappingURL=index.mjs.map