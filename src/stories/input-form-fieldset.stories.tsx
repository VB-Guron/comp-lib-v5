import moment from "moment";
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "../components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";

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
  title: "UI/Input/FormFieldsetDemo",
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj;

export const FieldsetFormDemo: Story = {
  render: () => {
    const form = useForm<FormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        word: "",
        number: "",
        date: moment().toISOString(),
        time: "",
      },
    });
    return (
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="bg-background text-foreground flex max-w-md min-w-[320px] flex-col items-center gap-6 rounded-xl p-8 shadow-lg">
          <ModeToggle />
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit((data) => {
                // Convert number string to number or undefined
                const processed = {
                  ...data,
                  number:
                    data.number && data.number !== ""
                      ? Number(data.number)
                      : undefined,
                };
                alert(JSON.stringify(processed, null, 2));
                form.reset();
              })}
              className="flex w-full flex-col gap-6"
            >
              <h2 className="mb-2 text-xl font-bold">
                Fieldset Input Form Demo
              </h2>
              <FormField
                control={form.control}
                name="word"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        variant="fieldset"
                        legend="Word"
                        placeholder="Enter a word"
                        fieldsetColorVariant="default"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        variant="fieldset"
                        legend="Number"
                        placeholder="Enter a number"
                        type="number"
                        fieldsetColorVariant="default"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        variant="fieldset"
                        legend="Date"
                        placeholder="Select a date"
                        type="date"
                        fieldsetColorVariant="default"
                        value={
                          field.value
                            ? moment(
                                field.value,
                                moment.ISO_8601,
                                true
                              ).isValid()
                              ? moment(field.value).format("YYYY-MM-DD")
                              : ""
                            : ""
                        }
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        {...field}
                        variant="fieldset"
                        legend="Time"
                        placeholder="Select a time"
                        type="time"
                        fieldsetColorVariant="default"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </ThemeProvider>
    );
  },
};
