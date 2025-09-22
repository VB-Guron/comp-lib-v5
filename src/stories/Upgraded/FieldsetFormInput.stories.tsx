import type { Meta, StoryObj } from "@storybook/react";
import { UpgradedFieldsetFormInput } from "../../components/upgraded/fieldset-form-input";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { useForm } from "react-hook-form";

const meta: Meta<typeof UpgradedFieldsetFormInput> = {
  title: "Upgraded/FieldsetFormInput",
  component: UpgradedFieldsetFormInput,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
      description: "The name of the form field",
    },
    legend: {
      control: "text",
      description: "Legend text for the fieldset",
    },
    placeholder: {
      control: "text",
      description: "Placeholder text for the input",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "The type of input",
    },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"],
      description: "Color variant for the fieldset",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
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
type Story = StoryObj<typeof meta>;

const FormWrapper = ({ children, onSubmit }: { children: React.ReactNode; onSubmit?: (data: any) => void }) => {
  const form = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
      phone: "",
    },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit || (() => {}))} className="w-full max-w-md space-y-4">
        {children}
        <Button type="submit" className="w-full">Submit</Button>
      </form>
    </Form>
  );
};

export const Default: Story = {
  render: () => (
    <FormWrapper>
      <UpgradedFieldsetFormInput
        name="email"
        legend="Email"
        placeholder="Enter your email"
        type="email"
      />
    </FormWrapper>
  ),
};

export const AllColorVariants: Story = {
  render: () => (
    <FormWrapper>
      <div className="space-y-4">
        <UpgradedFieldsetFormInput
          name="default"
          legend="Default"
          placeholder="Default variant"
          fieldsetColorVariant="default"
        />
        <UpgradedFieldsetFormInput
          name="primary"
          legend="Primary"
          placeholder="Primary variant"
          fieldsetColorVariant="primary"
        />
        <UpgradedFieldsetFormInput
          name="secondary"
          legend="Secondary"
          placeholder="Secondary variant"
          fieldsetColorVariant="secondary"
        />
        <UpgradedFieldsetFormInput
          name="success"
          legend="Success"
          placeholder="Success variant"
          fieldsetColorVariant="success"
        />
        <UpgradedFieldsetFormInput
          name="danger"
          legend="Danger"
          placeholder="Danger variant"
          fieldsetColorVariant="danger"
        />
      </div>
    </FormWrapper>
  ),
};

export const DifferentInputTypes: Story = {
  render: () => (
    <FormWrapper>
      <div className="space-y-4">
        <UpgradedFieldsetFormInput
          name="username"
          legend="Username"
          placeholder="Enter username"
          type="text"
        />
        <UpgradedFieldsetFormInput
          name="email"
          legend="Email"
          placeholder="Enter email"
          type="email"
        />
        <UpgradedFieldsetFormInput
          name="password"
          legend="Password"
          placeholder="Enter password"
          type="password"
        />
        <UpgradedFieldsetFormInput
          name="phone"
          legend="Phone"
          placeholder="Enter phone number"
          type="tel"
        />
      </div>
    </FormWrapper>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        email: "",
        username: "",
      },
      mode: "onBlur",
    });

    return (
      <Form {...form}>
        <form className="w-full max-w-md space-y-4">
          <UpgradedFieldsetFormInput
            name="username"
            legend="Username"
            placeholder="Enter username (required)"
            {...form.register("username", { required: "Username is required" })}
          />
          <UpgradedFieldsetFormInput
            name="email"
            legend="Email"
            placeholder="Enter email"
            type="email"
            {...form.register("email", {
              required: "Email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Email is invalid"
              }
            })}
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <FormWrapper>
      <UpgradedFieldsetFormInput
        name="disabled"
        legend="Disabled Input"
        placeholder="This input is disabled"
        disabled={true}
      />
    </FormWrapper>
  ),
};