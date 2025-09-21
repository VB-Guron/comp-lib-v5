import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { DropdownForm } from "../../components/upgraded/dropdown-form";

const schema = z.object({
  fruit: z.string().min(1, "Please select a fruit"),
});

type FormValues = z.infer<typeof schema>;

export default {
  title: "Components/Upgraded/DropdownForm",
};

export const DropdownFormStory = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { fruit: "" },
  });
  const [result, setResult] = React.useState<FormValues | null>(null);
  const options = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
  ];
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-background mx-auto mt-10 max-w-xs border p-6 transition-colors">
        <div className="mb-4 flex justify-end">
          <ModeToggle />
        </div>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit((data) => setResult(data))}
            className="space-y-4"
          >
            <DropdownForm
              name="fruit"
              label="Favorite Fruit"
              options={options}
              placeholder="Select a fruit..."
              description="Choose your favorite fruit."
            />
            <button
              type="submit"
              className="bg-primary hover:bg-primary/80 w-full rounded px-4 py-2 font-semibold text-white"
            >
              Submit
            </button>
          </form>
        </FormProvider>
        {result && (
          <div className="bg-muted mt-4 rounded p-2 text-sm">
            <strong>Submitted:</strong> {JSON.stringify(result)}
          </div>
        )}
      </div>
    </ThemeProvider>
  );
};
