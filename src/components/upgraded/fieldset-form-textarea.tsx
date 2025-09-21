"use client";
import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormItem, FormControl, FormMessage } from "../ui/form";
import { Textarea, TextareaProps } from "../ui/textarea";

export interface UpgradedFieldsetFormTextareaProps
  extends Omit<TextareaProps, "name" | "variant"> {
  name: string;
  legend?: string;
  placeholder?: string;
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
}

export function UpgradedFieldsetFormTextarea({
  name,
  legend,
  placeholder,
  fieldsetColorVariant = "default",
  ...props
}: UpgradedFieldsetFormTextareaProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Textarea
              {...field}
              variant="fieldset"
              legend={legend}
              placeholder={placeholder}
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
