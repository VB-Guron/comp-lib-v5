import type { Meta, StoryObj } from "@storybook/react";
import { UpgradedFieldsetFormTextarea } from "../../components/upgraded/fieldset-form-textarea";
import { Form } from "../../components/ui/form";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import { useForm } from "react-hook-form";

const meta: Meta<typeof UpgradedFieldsetFormTextarea> = {
  title: "Upgraded/FieldsetFormTextarea",
  component: UpgradedFieldsetFormTextarea,
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
      description: "Placeholder text for the textarea",
    },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"],
      description: "Color variant for the fieldset",
    },
    textareaSize: {
      control: { type: "select" },
      options: ["default", "sm", "lg"],
      description: "The size of the textarea",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
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
      message: "",
      description: "",
      feedback: "",
      notes: "",
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
      <UpgradedFieldsetFormTextarea
        name="message"
        legend="Message"
        placeholder="Enter your message"
      />
    </FormWrapper>
  ),
};

export const AllColorVariants: Story = {
  render: () => (
    <FormWrapper>
      <div className="space-y-4">
        <UpgradedFieldsetFormTextarea
          name="default"
          legend="Default"
          placeholder="Default variant"
          fieldsetColorVariant="default"
        />
        <UpgradedFieldsetFormTextarea
          name="primary"
          legend="Primary"
          placeholder="Primary variant"
          fieldsetColorVariant="primary"
        />
        <UpgradedFieldsetFormTextarea
          name="secondary"
          legend="Secondary"
          placeholder="Secondary variant"
          fieldsetColorVariant="secondary"
        />
        <UpgradedFieldsetFormTextarea
          name="success"
          legend="Success"
          placeholder="Success variant"
          fieldsetColorVariant="success"
        />
        <UpgradedFieldsetFormTextarea
          name="danger"
          legend="Danger"
          placeholder="Danger variant"
          fieldsetColorVariant="danger"
        />
      </div>
    </FormWrapper>
  ),
};

export const DifferentSizes: Story = {
  render: () => (
    <FormWrapper>
      <div className="space-y-4">
        <UpgradedFieldsetFormTextarea
          name="small"
          legend="Small"
          placeholder="Small textarea"
          textareaSize="sm"
        />
        <UpgradedFieldsetFormTextarea
          name="default"
          legend="Default"
          placeholder="Default textarea"
          textareaSize="default"
        />
        <UpgradedFieldsetFormTextarea
          name="large"
          legend="Large"
          placeholder="Large textarea"
          textareaSize="lg"
        />
      </div>
    </FormWrapper>
  ),
};

export const WithValidation: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        description: "",
        feedback: "",
      },
      mode: "onBlur",
    });

    return (
      <Form {...form}>
        <form className="w-full max-w-md space-y-4">
          <UpgradedFieldsetFormTextarea
            name="description"
            legend="Description"
            placeholder="Enter description (required)"
            {...form.register("description", {
              required: "Description is required",
              minLength: {
                value: 10,
                message: "Description must be at least 10 characters"
              }
            })}
          />
          <UpgradedFieldsetFormTextarea
            name="feedback"
            legend="Feedback"
            placeholder="Enter your feedback"
            {...form.register("feedback", {
              maxLength: {
                value: 500,
                message: "Feedback cannot exceed 500 characters"
              }
            })}
          />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </Form>
    );
  },
};

export const WithContent: Story = {
  render: () => {
    const form = useForm({
      defaultValues: {
        notes: "This is some pre-filled content that demonstrates how the textarea looks with existing text."
      },
    });

    return (
      <Form {...form}>
        <form className="w-full max-w-md space-y-4">
          <UpgradedFieldsetFormTextarea
            name="notes"
            legend="Notes"
            placeholder="Enter your notes"
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
      <UpgradedFieldsetFormTextarea
        name="disabled"
        legend="Disabled Textarea"
        placeholder="This textarea is disabled"
        disabled={true}
      />
    </FormWrapper>
  ),
};