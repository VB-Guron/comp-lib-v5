import moment from "moment";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../components/ui/button";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";
import { UpgradedFieldsetFormInput } from "../components/upgraded/fieldset-form-input";

const schema = z.object({
  word: z.string().min(1, "Required"),
  number: z
    .string()
    .min(1, { message: "Required" })
    .refine((val) => !isNaN(Number(val)), { message: "Must be a number" }),
  date: z
    .string()
    .refine((val) => moment(val, moment.ISO_8601, true).isValid(), {
      message: "Invalid date format",
    }),
  time: z.string().min(1, "Required"),
});

type FormData = z.output<typeof schema>;

const meta: Meta = {
  title: "UI/Input/FieldsetFormInputDemo",
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj;

export const UpgradedFieldsetFormDemo: Story = {
  render: () => {
    const methods = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        word: "",
        number: "",
        date: moment().toISOString(),
        time: "",
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
            {disabled ? "Enable All Fields" : "Disable All Fields"}
          </button>
          <FormProvider {...methods}>
            <form
              onSubmit={methods.handleSubmit((data) => {
                const processed = {
                  ...data,
                  number:
                    data.number && data.number !== ""
                      ? Number(data.number)
                      : undefined,
                };
                alert(JSON.stringify(processed, null, 2));
                methods.reset();
              })}
              className="flex w-full flex-col gap-6"
            >
              <h2 className="mb-2 text-xl font-bold">
                Upgraded Fieldset Input Form Demo
              </h2>
              <UpgradedFieldsetFormInput
                name="word"
                legend="Word"
                placeholder="Enter a word"
                disabled={disabled}
              />
              <UpgradedFieldsetFormInput
                name="number"
                legend="Number"
                placeholder="Enter a number"
                type="number"
                disabled={disabled}
              />
              <UpgradedFieldsetFormInput
                name="date"
                legend="Date"
                placeholder="Select a date"
                type="date"
                disabled={disabled}
              />
              <UpgradedFieldsetFormInput
                name="time"
                legend="Time"
                placeholder="Select a time"
                type="time"
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
