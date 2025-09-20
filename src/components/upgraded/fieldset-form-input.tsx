"use client";
import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormItem, FormControl, FormMessage } from "../ui/form";
import { Input, InputProps } from "../ui/input";

export interface UpgradedFieldsetFormInputProps
  extends Omit<InputProps, "name" | "variant"> {
  name: string;
  legend?: string;
  placeholder?: string;
  type?: string;
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
}

export function UpgradedFieldsetFormInput({
  name,
  legend,
  placeholder,
  type,
  fieldsetColorVariant = "default",
  ...props
}: UpgradedFieldsetFormInputProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Input
              {...field}
              variant="fieldset"
              legend={legend}
              placeholder={placeholder}
              type={type}
              fieldsetColorVariant={fieldsetColorVariant}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
