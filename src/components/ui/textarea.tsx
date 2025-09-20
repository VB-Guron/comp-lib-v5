import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";
import moment from "moment";

const textareaVariants = cva(
  "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-20 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-none",
  {
    variants: {
      variant: {
        default: "",
        filled:
          "bg-muted border-0 shadow-inner focus-visible:ring-2 focus-visible:ring-ring/40",
        underline: "border-0 border-b-2 rounded-none focus-visible:border-ring",
        ghost: "border-0 bg-transparent shadow-none",
        fieldset: "", // handled in render
      },
      textareaSize: {
        default: "min-h-16 px-3 py-2 text-base md:text-sm",
        sm: "min-h-12 px-2 text-sm",
        lg: "min-h-24 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      textareaSize: "default",
    },
  }
);

// Fieldset color variants using Tailwind color classes (copied from input)
const fieldsetColorVariants = {
  default: {
    fieldset: "border-input",
    legend: "text-input",
    input: "text-foreground",
  },
  primary: {
    fieldset: "border-primary bg-primary/10",
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

function renderFieldsetTextarea({
  className,
  legend,
  placeholder,
  value,
  inputRef,
  fieldsetColorVariant = "default",
  disabled,
  ...props
}: {
  className?: string;
  legend?: string;
  placeholder?: string;
  value?: any;
  inputRef?: React.Ref<HTMLTextAreaElement>;
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
    >
      <legend
        className={cn(
          "text-input my-0 bg-transparent p-0 text-xs leading-none font-medium",
          colorSet.legend
        )}
      >
        {legend || placeholder}
      </legend>
      <textarea
        className={cn(
          "w-full rounded-none text-base placeholder-transparent outline-none disabled:bg-transparent",
          colorSet.input,
          disabled && "resize-none"
        )}
        style={{ resize: "none", ...(props.style || {}) }}
        ref={inputRef}
        value={value}
        disabled={disabled}
        {...props}
      />
    </fieldset>
  );
}

export interface TextareaProps
  extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">,
    VariantProps<typeof textareaVariants> {
  legend?: string;
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      variant,
      textareaSize,
      legend,
      fieldsetColorVariant,
      disabled,
      ...props
    },
    ref
  ) => {
    if (variant === "fieldset") {
      return renderFieldsetTextarea({
        className,
        legend,
        placeholder: props.placeholder,
        value: props.value,
        inputRef: ref,
        fieldsetColorVariant,
        disabled,
        ...props,
      });
    }
    return (
      <textarea
        data-slot="textarea"
        className={cn(textareaVariants({ variant, textareaSize }), className)}
        style={{ resize: "none", ...(props.style || {}) }}
        ref={ref}
        disabled={disabled}
        {...props}
      />
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
