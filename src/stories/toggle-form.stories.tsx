import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { ToggleForm } from "../components/upgraded/toggle-form";
import { Button } from "../components/ui/button";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";

const schema = z.object({
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "You must accept the terms",
  }),
  enableFeature: z.boolean(),
});

type FormValues = z.infer<typeof schema>;

export default {
  title: "Components/ToggleForm",
  component: ToggleForm,
};

export const ToggleFormDemo = () => {
  const methods = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      acceptTerms: false,
      enableFeature: true,
    },
  });
  const [disabled, setDisabled] = React.useState(false);

  const onSubmit = (data: FormValues) => {
    alert(JSON.stringify(data, null, 2));
  };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="bg-background text-foreground flex max-w-md min-w-[320px] flex-col items-center gap-6 rounded-xl p-8 shadow-lg">
        <ModeToggle />
        <button
          type="button"
          className="bg-muted text-foreground border-border hover:bg-accent mb-2 rounded border px-3 py-1 transition"
          onClick={() => setDisabled((d) => !d)}
        >
          {disabled ? "Enable Fields" : "Disable Fields"}
        </button>
        <FormProvider {...methods}>
          <form
            onSubmit={methods.handleSubmit(onSubmit)}
            className="flex w-full flex-col gap-6"
          >
            <h2 className="mb-2 text-xl font-bold">Toggle Form Demo</h2>
            <ToggleForm
              name="acceptTerms"
              legend="Accept Terms and Conditions"
              checkedValue="Accepted"
              notCheckedValue="Not Accepted"
              disabled={disabled}
            />
            <ToggleForm
              name="enableFeature"
              legend="Enable Feature"
              checkedValue="Enabled"
              notCheckedValue="Disabled"
              fieldsetColorVariant="primary"
              disabled={disabled}
            />
            <Button type="submit" className="mt-4 w-full" disabled={disabled}>
              Submit
            </Button>
          </form>
        </FormProvider>
      </div>
    </ThemeProvider>
  );
};
