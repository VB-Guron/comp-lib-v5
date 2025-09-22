import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { UpgradedFieldsetFormInput } from "../../components/upgraded/fieldset-form-input";
import { UpgradedFieldsetFormTextarea } from "../../components/upgraded/fieldset-form-textarea";
import { ToggleForm } from "../../components/upgraded/toggle-form";
import { GenericCheckboxFormField } from "../../components/upgraded/checkboxgroup-form";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Forms/ComprehensiveForms",
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "Comprehensive form examples showing 4 different approaches: Normal forms with/without Zod validation, and Upgraded forms with/without Zod validation.",
      },
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div className="bg-background w-screen h-screen p-8">
          <div className="flex justify-end mb-4">
            <ModeToggle />
          </div>
          <div className="flex items-center justify-center h-full">
            <Story />
          </div>
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj;

// 1. Normal Form WITHOUT Zod (Basic HTML5 validation)
export const NormalFormWithoutZod: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        name: "",
        email: "",
        message: "",
        subscribe: false,
      },
    });

    const onSubmit = (data: any) => {
      alert(`Normal Form (No Zod) submitted!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <div className="w-full max-w-md space-y-6">
        <h3 className="text-xl font-semibold">Normal Form - No Zod Validation</h3>
        <p className="text-sm text-muted-foreground">Basic form using React Hook Form with HTML5 validation only</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter your full name"
                      required
                      minLength={2}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      required
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Enter your message"
                      required
                      minLength={10}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subscribe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="rounded"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Subscribe to newsletter
                  </FormLabel>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit (No Zod)
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

// 2. Normal Form WITH Zod validation
export const NormalFormWithZod: Story = {
  render: () => {
    const formSchema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Please enter a valid email address"),
      message: z.string().min(10, "Message must be at least 10 characters"),
      subscribe: z.boolean(),
      age: z.number().min(18, "Must be at least 18 years old").max(120, "Invalid age"),
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
        subscribe: false,
        age: 18,
      },
    });

    const onSubmit = (data: FormData) => {
      alert(`Normal Form (With Zod) submitted!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <div className="w-full max-w-md space-y-6">
        <h3 className="text-xl font-semibold">Normal Form - With Zod Validation</h3>
        <p className="text-sm text-muted-foreground">Enhanced form using React Hook Form with Zod schema validation</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your full name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="age"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Age</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Enter your age"
                      {...field}
                      onChange={(e) => field.onChange(Number(e.target.value))}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Enter your message" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subscribe"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center space-x-3 space-y-0">
                  <FormControl>
                    <input
                      type="checkbox"
                      checked={field.value}
                      onChange={field.onChange}
                      className="rounded"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal">
                    Subscribe to newsletter
                  </FormLabel>
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full">
              Submit (With Zod)
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

// 3. Upgraded Form WITHOUT Zod (Fieldset style components)
export const UpgradedFormWithoutZod: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        name: "",
        email: "",
        message: "",
        notifications: false,
        preferences: [],
      },
    });

    const onSubmit = (data: any) => {
      alert(`Upgraded Form (No Zod) submitted!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <div className="w-full max-w-md space-y-6">
        <h3 className="text-xl font-semibold">Upgraded Form - No Zod Validation</h3>
        <p className="text-sm text-muted-foreground">Upgraded fieldset-style components with HTML5 validation</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <UpgradedFieldsetFormInput
              name="name"
              legend="Full Name"
              placeholder="Enter your full name"
              fieldsetColorVariant="primary"
            />

            <UpgradedFieldsetFormInput
              name="email"
              legend="Email Address"
              placeholder="Enter your email"
              type="email"
              fieldsetColorVariant="secondary"
            />

            <UpgradedFieldsetFormTextarea
              name="message"
              legend="Message"
              placeholder="Enter your message"
              fieldsetColorVariant="default"
            />

            <ToggleForm
              name="notifications"
              legend="Enable Notifications"
              colorVariant="success"
            />

            <GenericCheckboxFormField
              name="preferences"
              legend="Preferences"
              options={[
                { label: "Email Updates", value: "email" },
                { label: "SMS Notifications", value: "sms" },
                { label: "Push Notifications", value: "push" },
              ]}
              fieldsetColorVariant="default"
            />

            <Button type="submit" className="w-full">
              Submit Upgraded (No Zod)
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};

// 4. Upgraded Form WITH Zod validation
export const UpgradedFormWithZod: Story = {
  render: () => {
    const formSchema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Please enter a valid email address"),
      message: z.string().min(10, "Message must be at least 10 characters"),
      notifications: z.boolean(),
      preferences: z.array(z.string()).min(1, "Please select at least one preference"),
      phone: z.string().min(10, "Phone number must be at least 10 digits"),
    });

    type FormData = z.infer<typeof formSchema>;

    const form = useForm<FormData>({
      resolver: zodResolver(formSchema),
      defaultValues: {
        name: "",
        email: "",
        message: "",
        notifications: false,
        preferences: [],
        phone: "",
      },
    });

    const onSubmit = (data: FormData) => {
      alert(`Upgraded Form (With Zod) submitted!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <div className="w-full max-w-md space-y-6">
        <h3 className="text-xl font-semibold">Upgraded Form - With Zod Validation</h3>
        <p className="text-sm text-muted-foreground">Advanced fieldset-style components with comprehensive Zod validation</p>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <UpgradedFieldsetFormInput
              name="name"
              legend="Full Name"
              placeholder="Enter your full name"
              fieldsetColorVariant="primary"
            />

            <UpgradedFieldsetFormInput
              name="email"
              legend="Email Address"
              placeholder="Enter your email"
              type="email"
              fieldsetColorVariant="secondary"
            />

            <UpgradedFieldsetFormInput
              name="phone"
              legend="Phone Number"
              placeholder="Enter your phone number"
              type="tel"
              fieldsetColorVariant="success"
            />

            <UpgradedFieldsetFormTextarea
              name="message"
              legend="Message"
              placeholder="Enter your message"
              fieldsetColorVariant="default"
            />

            <ToggleForm
              name="notifications"
              legend="Enable Notifications"
              colorVariant="success"
            />

            <GenericCheckboxFormField
              name="preferences"
              legend="Communication Preferences"
              options={[
                { label: "Email Updates", value: "email" },
                { label: "SMS Notifications", value: "sms" },
                { label: "Push Notifications", value: "push" },
                { label: "Weekly Newsletter", value: "newsletter" },
              ]}
              fieldsetColorVariant="primary"
            />

            <Button type="submit" className="w-full">
              Submit Upgraded (With Zod)
            </Button>
          </form>
        </Form>
      </div>
    );
  },
};