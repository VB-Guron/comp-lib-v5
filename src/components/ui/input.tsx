"use client";
import * as React from "react";
import type { CSSProperties } from "react";
import { cva } from "class-variance-authority";
import type { VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import moment from "moment";
import { EyeIcon, EyeOffIcon } from "lucide-react";

const inputVariants = cva(
  // Default variant matches the original input style
  "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "", // original style
        filled:
          "bg-muted border-0 shadow-inner focus-visible:ring-2 focus-visible:ring-ring/40", // new filled style
        underline: "border-0 border-b-2 rounded-none focus-visible:border-ring",
        ghost: "border-0 bg-transparent shadow-none",
        fieldset: "", // fieldset handled in render, not class
        password: "pr-10", // password handled in render, extra padding for eye icon
      },
      inputSize: {
        default: "h-9 px-3 py-1 text-base md:text-sm",
        sm: "h-8 px-2 text-sm",
        lg: "h-11 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  }
);

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  /** For fieldset variant: format value as number with 2 decimals */
  formatNumber?: boolean;
  /** For fieldset variant: legend/label text */
  legend?: string;
  /** Fieldset color variant: default, primary, secondary, success, danger */
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
}

function formatFieldsetValue({
  type,
  value,
  formatNumber,
}: {
  type?: string;
  value: any;
  formatNumber?: boolean;
}) {
  if (type?.toLowerCase() === "month" && value != undefined) {
    return `${value.toString().substring(0, 4)}-${value.toString().substring(4)}`;
  }
  if (type?.toLowerCase() === "date") {
    if (value === "" || value === null || value === undefined) return "";
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
      maximumFractionDigits: 2,
    });
  }
  return value;
}

// Fieldset color variants using Tailwind color classes
const fieldsetColorVariants = {
  default: {
    fieldset: "border-input",
    legend: "text-input",
    input: "text-foreground",
  },
  primary: {
    fieldset: "border-primary bg-primary/10 dark:border-yello-700",
    legend: "text-primary",
    input: "text-primary",
  },
  secondary: {
    fieldset: "border-secondary bg-secondary/10",
    legend: "text-secondary",
    input: "text-secondary",
  },
  success: {
    fieldset: "border-green-500 bg-green-50",
    legend: "text-green-700",
    input: "text-green-700",
  },
  danger: {
    fieldset: "border-destructive bg-destructive/10",
    legend: "text-destructive",
    input: "text-destructive",
  },
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
}: {
  className?: string;
  type?: string;
  legend?: string;
  placeholder?: string;
  value?: any;
  inputRef?: React.Ref<HTMLInputElement>;
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
  disabled?: boolean;
  [key: string]: any;
}) {
  const colorSet =
    fieldsetColorVariants[fieldsetColorVariant] ||
    fieldsetColorVariants.default;
  return (
    <fieldset
      className={cn(
        "rounded-sm p-0 px-2 pb-1",
        disabled ? "border-none" : "border",
        !disabled && colorSet.fieldset,
        className
      )}
      input-type={type || "text"}
    >
      <legend
        className={cn(
          "my-0 bg-transparent p-0 text-xs leading-none font-medium",
          colorSet.legend
        )}
      >
        {legend || placeholder}
      </legend>
      <input
        type={type || "text"}
        className={cn(
          "w-full rounded-none text-base placeholder-transparent outline-none disabled:bg-transparent",
          colorSet.input
        )}
        style={{
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          borderTopLeftRadius: 0,
          borderTopRightRadius: 0,
        }}
        ref={inputRef}
        value={value}
        disabled={disabled}
        {...props}
      />
    </fieldset>
  );
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      type,
      variant,
      inputSize,
      formatNumber,
      legend,
      placeholder,
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = React.useState(false);

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
        ...props,
      });
    }

    if (variant === "password") {
      return (
        <div className="relative flex w-full items-center">
          <input
            type={showPassword ? "text" : "password"}
            data-slot="input"
            className={cn(inputVariants({ variant, inputSize }), className)}
            ref={ref}
            value={value}
            {...props}
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOffIcon size={16} />
            ) : (
              <EyeIcon size={16} />
            )}
          </button>
        </div>
      );
    }

    // Default rendering for other variants
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(inputVariants({ variant, inputSize }), className)}
        ref={ref}
        value={value}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
