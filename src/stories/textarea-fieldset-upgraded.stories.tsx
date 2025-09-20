import moment from "moment";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";
import { UpgradedFieldsetFormTextarea } from "../components/upgraded/fieldset-form-textarea";

const schema = z.object({
  description: z.string().min(1, "Required"),
});

type FormData = z.output<typeof schema>;

const meta: Meta = {
  title: "UI/Textarea/UpgradedFieldsetFormTextareaDemo",
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj;

export const UpgradedFieldsetFormTextareaDemo: Story = {
  render: () => {
    const methods = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        description: "",
      },
    });
    const [disabled, setDisabled] = React.useState(false);
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
            {disabled ? "Enable Field" : "Disable Field"}
          </button>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) => {
                alert(JSON.stringify(data, null, 2));
                methods.reset();
              })}
              className="flex w-full flex-col gap-6"
            >
              <h2 className="mb-2 text-xl font-bold">
                Upgraded Fieldset Textarea Form Demo
              </h2>
              <UpgradedFieldsetFormTextarea
                name="description"
                legend="Description"
                placeholder="Enter a description"
                disabled={disabled}
              />
              <Button type="submit" disabled={disabled}>
                Submit
              </Button>
            </form>
          </FormProvider>
        </div>
      </ThemeProvider>
    );
  },
};
