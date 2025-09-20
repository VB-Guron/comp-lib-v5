import * as React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Combobox, ComboboxProps } from "../ui/combobox";
import {
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "../ui/form";

export interface DropdownFormProps
  extends Omit<ComboboxProps, "value" | "onChange"> {
  name: string;
  label?: string;
  description?: React.ReactNode;
}

/**
 * DropdownForm: Combobox integrated with react-hook-form and form fieldset components.
 * Handles value and onChange via react-hook-form Controller.
 */
export const DropdownForm: React.FC<DropdownFormProps> = ({
  name,
  label,
  description,
  ...comboboxProps
}) => {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>
            <Combobox
              {...comboboxProps}
              value={field.value}
              onChange={field.onChange}
            />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage>{fieldState.error?.message}</FormMessage>
        </FormItem>
      )}
    />
  );
};
