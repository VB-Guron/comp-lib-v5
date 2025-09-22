import React, { useState } from "react";
import { Combobox, ComboboxOption } from "../../components/ui/combobox";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof Combobox> = {
  title: "UI/ComboBox",
  component: Combobox,
  tags: ["autodocs"],
  argTypes: {
    placeholder: { control: "text" },
    label: { control: "text" },
    variant: {
      control: { type: "select" },
      options: ["fieldset"]
    },
    fieldsetColorVariant: {
      control: { type: "select" },
      options: ["default", "primary", "secondary", "success", "danger"]
    },
  },
  parameters: {
    docs: {
      description: {
        component: "A searchable combobox component with async search support, fieldset styling, and color variants for enhanced form integration.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Combobox>;

// Sample data sets
const countries: ComboboxOption[] = [
  { value: "us", label: "United States" },
  { value: "ca", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "au", label: "Australia" },
  { value: "ph", label: "Philippines" },
  { value: "jp", label: "Japan" },
  { value: "kr", label: "South Korea" },
  { value: "sg", label: "Singapore" },
];

const employees: ComboboxOption[] = [
  { value: "emp001", label: "John Doe - Software Engineer" },
  { value: "emp002", label: "Jane Smith - Project Manager" },
  { value: "emp003", label: "Bob Johnson - QA Tester" },
  { value: "emp004", label: "Alice Brown - UI/UX Designer" },
  { value: "emp005", label: "Charlie Davis - DevOps Engineer" },
  { value: "emp006", label: "Eva Wilson - Product Owner" },
];

const departments: ComboboxOption[] = [
  { value: "it", label: "Information Technology" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance & Accounting" },
  { value: "marketing", label: "Marketing & Sales" },
  { value: "operations", label: "Operations" },
  { value: "support", label: "Customer Support" },
];

export const Default: Story = {
  render: (args: any) => {
    const [value, setValue] = useState("");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">ComboBox Default</h3>
            <div className="max-w-md">
              <Combobox
                {...args}
                value={value}
                onChange={setValue}
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Selected:</strong> {value || "None"}
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
  args: {
    options: countries,
    placeholder: "Select a country...",
    label: "Country",
  },
};

export const EmployeeSelector: Story = {
  render: () => {
    const [selectedEmployee, setSelectedEmployee] = useState("");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Employee Selector</h3>
            <div className="max-w-md">
              <Combobox
                options={employees}
                value={selectedEmployee}
                onChange={setSelectedEmployee}
                placeholder="Search employees..."
                label="Assign to Employee"
                fieldsetColorVariant="primary"
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Assigned to:</strong> {
                  selectedEmployee
                    ? employees.find(emp => emp.value === selectedEmployee)?.label
                    : "No one selected"
                }
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DepartmentSelection: Story = {
  render: () => {
    const [selectedDept, setSelectedDept] = useState("");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Department Selection</h3>
            <div className="max-w-md">
              <Combobox
                options={departments}
                value={selectedDept}
                onChange={setSelectedDept}
                placeholder="Choose department..."
                label="Department"
                fieldsetColorVariant="secondary"
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const AsyncSearch: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Async Search (Simulated)</h3>
            <div className="max-w-md">
              <Combobox
                value={value}
                onChange={setValue}
                searchUrl="https://api.example.com/search"
                placeholder="Type to search fruits..."
                label="Fruit Search"
                fieldsetColorVariant="success"
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                <strong>Note:</strong> This simulates async search with fruits (apple, banana, orange).<br/>
                <strong>Selected:</strong> {value || "None"}
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ColorVariants: Story = {
  render: () => {
    const [values, setValues] = useState({
      default: "",
      primary: "",
      secondary: "",
      success: "",
      danger: "",
    });

    const updateValue = (variant: string) => (newValue: string) => {
      setValues(prev => ({ ...prev, [variant]: newValue }));
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Color Variants</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Combobox
                options={countries}
                value={values.default}
                onChange={updateValue("default")}
                placeholder="Default variant"
                label="Default"
                fieldsetColorVariant="default"
              />

              <Combobox
                options={countries}
                value={values.primary}
                onChange={updateValue("primary")}
                placeholder="Primary variant"
                label="Primary"
                fieldsetColorVariant="primary"
              />

              <Combobox
                options={countries}
                value={values.secondary}
                onChange={updateValue("secondary")}
                placeholder="Secondary variant"
                label="Secondary"
                fieldsetColorVariant="secondary"
              />

              <Combobox
                options={countries}
                value={values.success}
                onChange={updateValue("success")}
                placeholder="Success variant"
                label="Success"
                fieldsetColorVariant="success"
              />

              <Combobox
                options={countries}
                value={values.danger}
                onChange={updateValue("danger")}
                placeholder="Danger variant"
                label="Danger"
                fieldsetColorVariant="danger"
              />
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const FormIntegration: Story = {
  render: () => {
    const [formData, setFormData] = useState({
      country: "",
      employee: "",
      department: "",
    });

    const updateField = (field: string) => (value: string) => {
      setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Form Data:\n${JSON.stringify(formData, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Form Integration</h3>

            <form onSubmit={handleSubmit} className="max-w-md space-y-4">
              <Combobox
                options={countries}
                value={formData.country}
                onChange={updateField("country")}
                placeholder="Select country..."
                label="Country"
                fieldsetColorVariant="default"
              />

              <Combobox
                options={employees}
                value={formData.employee}
                onChange={updateField("employee")}
                placeholder="Select employee..."
                label="Employee"
                fieldsetColorVariant="primary"
              />

              <Combobox
                options={departments}
                value={formData.department}
                onChange={updateField("department")}
                placeholder="Select department..."
                label="Department"
                fieldsetColorVariant="secondary"
              />

              <button
                type="submit"
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
              >
                Submit Form
              </button>
            </form>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMode: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <ThemeProvider defaultTheme="dark">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dark Mode ComboBox</h3>
            <div className="max-w-md space-y-4">
              <Combobox
                options={employees}
                value={value}
                onChange={setValue}
                placeholder="Search employees in dark mode..."
                label="Employee Assignment"
                fieldsetColorVariant="primary"
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                ComboBox component with dark mode theme support and enhanced visibility.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};