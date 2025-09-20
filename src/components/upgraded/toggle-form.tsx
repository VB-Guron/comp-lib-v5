"use client";
import * as React from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FormItem, FormControl, FormMessage } from "../ui/form";
import { Toggle, ToggleProps } from "../ui/toggle";

export interface ToggleFormProps
  extends Omit<ToggleProps, "name" | "checked" | "onChange"> {
  name: string;
  legend?: string;
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
}

export function ToggleForm({
  name,
  legend,
  fieldsetColorVariant = "default",
  checkedValue,
  notCheckedValue,
  ...props
}: ToggleFormProps) {
  const { control } = useFormContext();
  const finalCheckedValue = checkedValue ?? "YES";
  const finalNotCheckedValue = notCheckedValue ?? "NO";
  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormItem>
          <FormControl>
            <Toggle
              {...props}
              name={name}
              checked={!!field.value}
              onChange={(e) => field.onChange(e.target.value)}
              legend={legend}
              fieldsetColorVariant={fieldsetColorVariant}
              checkedValue={finalCheckedValue}
              notCheckedValue={finalNotCheckedValue}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
