"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./command";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";

// Option type
export type ComboboxOption = { value: string; label: string };

// Fieldset color variants (reuse from input/textarea)
export const comboboxColorVariants = {
  default: {
    fieldset: "border-input bg-transparent",
    legend: "text-input",
  },
  primary: {
    fieldset: "border-primary bg-primary/10 dark:border-yello-700",
    legend: "text-primary",
  },
  secondary: {
    fieldset: "border-secondary bg-secondary/10",
    legend: "text-secondary",
  },
  success: {
    fieldset: "border-green-500 bg-green-50",
    legend: "text-green-700",
  },
  danger: {
    fieldset: "border-destructive bg-destructive/10",
    legend: "text-destructive",
  },
};

export interface ComboboxProps {
  options?: ComboboxOption[];
  value: string;
  onChange: (value: string) => void;
  searchUrl?: string;
  placeholder?: string;
  label?: string;
  variant?: "fieldset";
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
  dropdownProps?: React.HTMLAttributes<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Combobox: React.FC<ComboboxProps> = ({
  options: optionsProp = [],
  value,
  onChange,
  searchUrl,
  placeholder = "Select...",
  label,
  variant = "fieldset",
  fieldsetColorVariant = "default",
  dropdownProps,
  inputProps,
}) => {
  // Defensive: never allow inputProps.value to override our internal search state
  const { value: _ignoreValue, ...safeInputProps } = inputProps || {};
  const [open, setOpen] = React.useState(false);
  const [search, setSearch] = React.useState<string>("");
  const [options, setOptions] = React.useState<ComboboxOption[]>(optionsProp);
  const [loading, setLoading] = React.useState(false);
  const colorSet =
    comboboxColorVariants[fieldsetColorVariant] ||
    comboboxColorVariants.default;
  const fieldsetRef = React.useRef<HTMLFieldSetElement>(null);
  const [dropdownWidth, setDropdownWidth] = React.useState<string | undefined>(
    undefined
  );

  // Async search effect
  React.useEffect(() => {
    if (!searchUrl) return;
    if (!search) {
      setOptions([]);
      return;
    }
    setLoading(true);
    let timeout: ReturnType<typeof setTimeout> | undefined;
    if (searchUrl === "https://api.example.com/search") {
      // Simulate async API with static data and network delay, returning { items: Option[] }
      const allOptions = [
        { value: "apple", label: "Apple" },
        { value: "banana", label: "Banana" },
        { value: "orange", label: "Orange" },
      ];
      timeout = setTimeout(() => {
        setOptions(
          allOptions.filter((o) =>
            o.label.toLowerCase().includes(search.toLowerCase())
          )
        );
        setLoading(false);
      }, 700);
    } else {
      // Real API fetch
      fetch(`${searchUrl}?q=${encodeURIComponent(search)}`)
        .then((res) => res.json())
        .then((data) => {
          setOptions(data.items || []);
          setLoading(false);
        })
        .catch(() => setLoading(false));
    }
    return () => {
      setLoading(false);
      if (timeout) clearTimeout(timeout);
    };
  }, [search, searchUrl]);

  // Local search effect (if no searchUrl)
  React.useEffect(() => {
    if (searchUrl) return;
    if (!search) {
      setOptions(optionsProp);
      return;
    }
    setOptions(
      optionsProp.filter((o) =>
        o.label.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, optionsProp, searchUrl]);

  // Set dropdown width to match fieldset
  React.useLayoutEffect(() => {
    if (fieldsetRef.current) {
      setDropdownWidth(`${fieldsetRef.current.offsetWidth}px`);
    }
  }, [open]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <fieldset
          ref={fieldsetRef}
          className={cn(
            "cursor-pointer rounded-sm p-0 px-2 pb-1",
            "border",
            colorSet.fieldset
          )}
        >
          {label && (
            <legend
              className={cn(
                "my-0 bg-transparent p-0 text-xs leading-none font-medium",
                colorSet.legend
              )}
            >
              {label}
            </legend>
          )}
          <div className="flex w-full items-center justify-between bg-transparent px-2 py-1">
            <span>
              {value
                ? optionsProp.find((o) => o.value === value)?.label || value
                : placeholder}
            </span>
            <ChevronsUpDown className="opacity-50" size={15} />
          </div>
        </fieldset>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        sideOffset={0}
        className="border-input min-w-0 rounded-b-md border p-0 shadow"
        style={{
          minWidth: 0,
          width: dropdownWidth,
          left: 0,
          right: "auto",
          position: "absolute",
          zIndex: 50,
        }}
        {...dropdownProps}
      >
        <Command className="bg-background m-0 w-full border-0 p-0">
          <CommandInput
            placeholder={placeholder}
            className="h-9 border-transparent bg-transparent"
            value={search}
            onValueChange={setSearch}
            {...safeInputProps}
          />
          <CommandList>
            {loading ? (
              <div className="py-6 text-center text-sm">Loading...</div>
            ) : options.length === 0 ? (
              <CommandEmpty>No results found.</CommandEmpty>
            ) : (
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.value}
                    onSelect={() => {
                      onChange(option.value);
                      setOpen(false);
                    }}
                    className={cn(
                      value === option.value && "bg-primary/10 text-primary"
                    )}
                  >
                    {option.label}
                    {value === option.value && (
                      <Check className="ml-auto opacity-100" />
                    )}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
