import { BgDemo } from "../components/ui/bg-demo";
export const FieldsetAllVariants: Story = {
  render: (args, { globals }) => {
    // Use Storybook's global theme if available, fallback to light
    const theme = globals?.theme === "dark" ? "dark" : "light";
    return (
      <BgDemo theme={theme}>
        <div className="bg-background flex w-full max-w-md flex-col gap-4">
          <Input
            {...args}
            variant="fieldset"
            legend="Default Fieldset"
            placeholder="Default Fieldset"
            id="fieldset-default"
            fieldsetColorVariant="default"
          />
          <Input
            {...args}
            variant="fieldset"
            legend="Primary Fieldset"
            placeholder="Primary Fieldset"
            id="fieldset-primary"
            fieldsetColorVariant="primary"
          />
          <Input
            {...args}
            variant="fieldset"
            legend="Secondary Fieldset"
            placeholder="Secondary Fieldset"
            id="fieldset-secondary"
            fieldsetColorVariant="secondary"
          />
          <Input
            {...args}
            variant="fieldset"
            legend="Success Fieldset"
            placeholder="Success Fieldset"
            id="fieldset-success"
            fieldsetColorVariant="success"
          />
          <Input
            {...args}
            variant="fieldset"
            legend="Danger Fieldset"
            placeholder="Danger Fieldset"
            id="fieldset-danger"
            fieldsetColorVariant="danger"
          />
        </div>
      </BgDemo>
    );
  },
  args: {
    value: "",
  },
};
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "../components/ui/input";

const meta: Meta<typeof Input> = {
  title: "UI/Input",
  component: Input,
  args: {
    placeholder: "Enter text...",
    id: "input-id",
    type: "text",
  },
  argTypes: {
    placeholder: { control: "text" },
    id: { control: "text" },
    type: { control: "text" },
    value: { control: "text" },
    onChange: { action: "changed" },
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
    id: "input-id",
    type: "text",
  },
};

export const Fieldset: Story = {
  args: {
    variant: "fieldset",
    legend: "Fieldset Label",
    placeholder: "Fieldset Label",
    id: "fieldset-input",
    type: "text",
    value: "",
    fieldsetColorVariant: "default",
  },
  argTypes: {
    legend: { control: "text" },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"],
    },
    formatNumber: { control: "boolean" },
  },
};

export const FieldsetNumber: Story = {
  args: {
    variant: "fieldset",
    legend: "Amount",
    placeholder: "Amount",
    id: "fieldset-number",
    type: "number",
    value: 12345.678,
    formatNumber: true,
    fieldsetColorVariant: "primary",
  },
};

export const FieldsetDate: Story = {
  args: {
    variant: "fieldset",
    legend: "Date",
    placeholder: "Date",
    id: "fieldset-date",
    type: "date",
    value: "2025-09-18T00:00:00Z",
    fieldsetColorVariant: "secondary",
  },
};

export const FieldsetMonth: Story = {
  args: {
    variant: "fieldset",
    legend: "Month",
    placeholder: "Month",
    id: "fieldset-month",
    type: "month",
    value: "202509",
    fieldsetColorVariant: "success",
  },
};

export const FieldsetDisabled: Story = {
  args: {
    variant: "fieldset",
    legend: "Disabled Field",
    placeholder: "Disabled Field",
    id: "fieldset-disabled",
    type: "text",
    value: "Can't edit this",
    disabled: true,
    fieldsetColorVariant: "danger",
  },
};
// Additional stories for each color variant
export const FieldsetPrimary: Story = {
  args: {
    variant: "fieldset",
    legend: "Primary Fieldset",
    placeholder: "Primary Fieldset",
    id: "fieldset-primary",
    type: "text",
    value: "",
    fieldsetColorVariant: "primary",
  },
};

export const FieldsetSecondary: Story = {
  args: {
    variant: "fieldset",
    legend: "Secondary Fieldset",
    placeholder: "Secondary Fieldset",
    id: "fieldset-secondary",
    type: "text",
    value: "",
    fieldsetColorVariant: "secondary",
  },
};

export const FieldsetSuccess: Story = {
  args: {
    variant: "fieldset",
    legend: "Success Fieldset",
    placeholder: "Success Fieldset",
    id: "fieldset-success",
    type: "text",
    value: "",
    fieldsetColorVariant: "success",
  },
};

export const FieldsetDanger: Story = {
  args: {
    variant: "fieldset",
    legend: "Danger Fieldset",
    placeholder: "Danger Fieldset",
    id: "fieldset-danger",
    type: "text",
    value: "",
    fieldsetColorVariant: "danger",
  },
};
