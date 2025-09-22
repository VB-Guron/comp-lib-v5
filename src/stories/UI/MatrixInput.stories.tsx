import React, { useState } from "react";
import MatrixInput from "../../components/common/MatrixInput";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof MatrixInput> = {
  title: "UI/MatrixInput",
  component: MatrixInput,
  tags: ["autodocs"],
  argTypes: {
    title: { control: "text" },
    type: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "A specialized input component with a label header, designed for matrix-style forms and data entry with consistent styling.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MatrixInput>;

export const Default: Story = {
  render: (args: any) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">MatrixInput Default</h3>
          <div className="max-w-md">
            <MatrixInput {...args} />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    title: "Amount",
    type: "number",
    placeholder: "0.00",
  },
};

export const NumberInputs: Story = {
  render: () => {
    const [values, setValues] = useState({
      salary: "",
      bonus: "",
      deduction: "",
      total: "",
    });

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues(prev => ({
        ...prev,
        [field]: e.target.value
      }));
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Payroll Matrix</h3>
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              <MatrixInput
                title="Basic Salary"
                type="number"
                placeholder="0.00"
                value={values.salary}
                onChange={handleChange("salary")}
              />
              <MatrixInput
                title="Bonus"
                type="number"
                placeholder="0.00"
                value={values.bonus}
                onChange={handleChange("bonus")}
              />
              <MatrixInput
                title="Deductions"
                type="number"
                placeholder="0.00"
                value={values.deduction}
                onChange={handleChange("deduction")}
              />
              <MatrixInput
                title="Net Total"
                type="number"
                placeholder="0.00"
                value={values.total}
                onChange={handleChange("total")}
                disabled
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Matrix input layout commonly used in payroll and financial forms.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const TextInputs: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Employee Details Matrix</h3>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            <MatrixInput
              title="Employee ID"
              type="text"
              placeholder="EMP001"
            />
            <MatrixInput
              title="Department"
              type="text"
              placeholder="IT"
            />
            <MatrixInput
              title="Position"
              type="text"
              placeholder="Developer"
            />
            <MatrixInput
              title="Hire Date"
              type="date"
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const DisabledState: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Disabled States</h3>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            <MatrixInput
              title="Editable Field"
              type="text"
              placeholder="You can edit this"
            />
            <MatrixInput
              title="Read Only"
              type="text"
              value="Cannot edit this"
              disabled
            />
            <MatrixInput
              title="Calculated Value"
              type="number"
              value="1250.00"
              disabled
            />
            <MatrixInput
              title="System Generated"
              type="text"
              value="AUTO-GEN-001"
              disabled
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const FinancialForm: Story = {
  render: () => {
    const [financial, setFinancial] = useState({
      revenue: "50000.00",
      expenses: "30000.00",
      taxes: "5000.00",
      profit: "15000.00",
    });

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Financial Statement</h3>
            <div className="grid grid-cols-1 gap-4 max-w-sm">
              <MatrixInput
                title="Total Revenue"
                type="number"
                value={financial.revenue}
                onChange={(e) => setFinancial(prev => ({...prev, revenue: e.target.value}))}
              />
              <MatrixInput
                title="Operating Expenses"
                type="number"
                value={financial.expenses}
                onChange={(e) => setFinancial(prev => ({...prev, expenses: e.target.value}))}
              />
              <MatrixInput
                title="Tax Liability"
                type="number"
                value={financial.taxes}
                onChange={(e) => setFinancial(prev => ({...prev, taxes: e.target.value}))}
              />
              <MatrixInput
                title="Net Profit"
                type="number"
                value={financial.profit}
                disabled
              />
            </div>
            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Vertical layout suitable for financial statements and reports.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMode: Story = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Dark Mode MatrixInput</h3>
          <div className="grid grid-cols-2 gap-4 max-w-lg">
            <MatrixInput
              title="Dark Theme"
              type="text"
              placeholder="Enter value"
            />
            <MatrixInput
              title="Amount"
              type="number"
              placeholder="0.00"
            />
            <MatrixInput
              title="Disabled"
              type="text"
              value="Read only value"
              disabled
            />
            <MatrixInput
              title="Date Field"
              type="date"
            />
          </div>
          <div className="mt-4 p-3 bg-muted rounded">
            <p className="text-sm">
              MatrixInput component with dark mode theme support.
            </p>
          </div>
        </div>
      </div>
    </ThemeProvider>
  ),
};