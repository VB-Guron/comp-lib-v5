"use client";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import { cn } from "../../lib/utils";
import GenericCheckboxGroup, { SelectableItem } from "../ui/checkboxgroup";
import { useState } from "react";
import { Button } from "../ui/button";

// Props for the form wrapper
interface GenericCheckboxFormFieldProps<T extends SelectableItem> {
  data?: T[];
  name: string; // Form field name
  valueName?: string; // Property name for ID in form values
  title?: string; // Select All button text
  className?: string; // Additional CSS classes
}

// React Hook Form wrapper for GenericCheckboxGroup
export const GenericCheckboxFormField = <T extends SelectableItem>({
  data,
  name,
  valueName = "itemId",
  title = "Select All",
  className = "",
}: GenericCheckboxFormFieldProps<T>) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        // Handle form changes - automatically manages form state
        const handleFormChange = (e: any) => {
          const { action, value } = e.target;
          const currentValue = field.value || [];

          switch (action) {
            case "addAll":
              // Add all items that aren't already selected
              const allItems = value.map((item: T) => ({
                [valueName]: item.id,
              }));
              field.onChange(allItems);
              break;

            case "removeAll":
              // Clear all selections
              field.onChange([]);
              break;

            case "add":
              // Add single item if not already present
              const existingIndex = currentValue.findIndex(
                (existing: any) =>
                  existing[valueName]?.toString() ===
                  value[valueName]?.toString()
              );
              if (existingIndex === -1) {
                field.onChange([...currentValue, value]);
              }
              break;

            case "sub":
              // Remove single item
              const updatedValue = currentValue.filter(
                (existing: any) =>
                  existing[valueName]?.toString() !==
                  value[valueName]?.toString()
              );
              field.onChange(updatedValue);
              break;

            default:
              console.warn("Unknown action:", action);
          }
        };

        return (
          <FormItem
            className={cn(
              "ml-4 flex h-auto w-auto flex-wrap content-center gap-3 overflow-y-auto xl:h-auto xl:w-[100%] xl:content-start",
              className
            )}
          >
            <FormControl>
              <GenericCheckboxGroup
                data={data}
                value={field.value || []}
                OnFormChange={handleFormChange}
                name={name}
                valueName={valueName}
                title={title}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
};

// Sample selectable items
const sampleItems = [
  { id: 1, code: "A", name: "Alpha" },
  { id: 2, code: "B", name: "Beta" },
  { id: 3, code: "C", name: "Gamma" },
];

export function SampleCheckboxForm() {
  const methods = useForm({
    defaultValues: { checkboxes: [] },
  });
  const [submitted, setSubmitted] = useState<any>(null);

  return (
    <div className="mb-8 rounded border p-4">
      <h3 className="mb-2 font-bold">React Hook Form Checkbox Group Demo</h3>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit((data) => setSubmitted(data))}
          className="space-y-4"
        >
          <GenericCheckboxFormField
            data={sampleItems}
            name="checkboxes"
            valueName="id"
            title="Select All"
          />
          <Button type="submit">Submit</Button>
        </form>
      </FormProvider>
      {submitted && (
        <div className="mt-4 rounded bg-gray-100 p-2">
          <div className="font-semibold">Submitted Data:</div>
          <pre className="text-xs whitespace-pre-wrap">
            {JSON.stringify(submitted, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
