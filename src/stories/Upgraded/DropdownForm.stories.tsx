import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DropdownForm } from "../../components/upgraded/dropdown-form";
import { ComboboxOption } from "../../components/ui/combobox";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "../../components/ui/form";
import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

const meta: Meta<typeof DropdownForm> = {
  title: "Upgraded/Dropdown Form",
  component: DropdownForm,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "React Hook Form integrated dropdown/combobox component with validation support, async search capabilities, and form state management.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DropdownForm>;

// Sample data
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

const departments: ComboboxOption[] = [
  { value: "it", label: "Information Technology" },
  { value: "hr", label: "Human Resources" },
  { value: "finance", label: "Finance & Accounting" },
  { value: "marketing", label: "Marketing & Sales" },
  { value: "operations", label: "Operations" },
  { value: "support", label: "Customer Support" },
];

const employees: ComboboxOption[] = [
  { value: "emp001", label: "John Doe - Software Engineer" },
  { value: "emp002", label: "Jane Smith - Project Manager" },
  { value: "emp003", label: "Bob Johnson - QA Tester" },
  { value: "emp004", label: "Alice Brown - UI/UX Designer" },
  { value: "emp005", label: "Charlie Davis - DevOps Engineer" },
  { value: "emp006", label: "Eva Wilson - Product Owner" },
];

// Form schemas
const userFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  country: z.string().min(1, "Please select a country"),
  department: z.string().min(1, "Please select a department"),
});

const assignmentFormSchema = z.object({
  projectName: z.string().min(1, "Project name is required"),
  assignedTo: z.string().min(1, "Please assign to an employee"),
  department: z.string().min(1, "Please select a department"),
  priority: z.string().min(1, "Please select priority"),
});

const priorities: ComboboxOption[] = [
  { value: "low", label: "Low Priority" },
  { value: "medium", label: "Medium Priority" },
  { value: "high", label: "High Priority" },
  { value: "urgent", label: "Urgent" },
];

export const UserRegistrationForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(userFormSchema),
      defaultValues: {
        name: "",
        email: "",
        country: "",
        department: "",
      },
    });

    const onSubmit = (data: any) => {
      alert(`User Registered!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">User Registration Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
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
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DropdownForm
                    name="country"
                    label="Country"
                    options={countries}
                    placeholder="Select your country..."
                    fieldsetColorVariant="primary"
                    description="Choose your country of residence"
                  />

                  <DropdownForm
                    name="department"
                    label="Department"
                    options={departments}
                    placeholder="Select department..."
                    fieldsetColorVariant="secondary"
                    description="Choose your department"
                  />

                  <Button type="submit" className="w-full">
                    Register User
                  </Button>
                </form>
              </Form>
            </FormProvider>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ProjectAssignmentForm: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(assignmentFormSchema),
      defaultValues: {
        projectName: "",
        assignedTo: "",
        department: "",
        priority: "",
      },
    });

    const onSubmit = (data: any) => {
      alert(`Project Assigned!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Project Assignment Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="projectName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Project Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter project name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DropdownForm
                    name="assignedTo"
                    label="Assign To"
                    options={employees}
                    placeholder="Search and select employee..."
                    fieldsetColorVariant="primary"
                    description="Choose the employee responsible for this project"
                  />

                  <DropdownForm
                    name="department"
                    label="Department"
                    options={departments}
                    placeholder="Select department..."
                    fieldsetColorVariant="default"
                    description="Project department"
                  />

                  <DropdownForm
                    name="priority"
                    label="Priority Level"
                    options={priorities}
                    placeholder="Select priority..."
                    fieldsetColorVariant="danger"
                    description="Set the project priority level"
                  />

                  <Button type="submit" className="w-full">
                    Assign Project
                  </Button>
                </form>
              </Form>
            </FormProvider>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const AsyncSearchForm: Story = {
  render: () => {
    const searchFormSchema = z.object({
      searchType: z.string().min(1, "Please select search type"),
      asyncResult: z.string().min(1, "Please select a search result"),
    });

    const searchTypes: ComboboxOption[] = [
      { value: "fruits", label: "Search Fruits" },
      { value: "vegetables", label: "Search Vegetables" },
      { value: "grains", label: "Search Grains" },
    ];

    const form = useForm({
      resolver: zodResolver(searchFormSchema),
      defaultValues: {
        searchType: "",
        asyncResult: "",
      },
    });

    const onSubmit = (data: any) => {
      alert(`Search Results!\n${JSON.stringify(data, null, 2)}`);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Async Search Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <DropdownForm
                    name="searchType"
                    label="Search Category"
                    options={searchTypes}
                    placeholder="Select search type..."
                    fieldsetColorVariant="default"
                    description="Choose what type of items to search for"
                  />

                  <DropdownForm
                    name="asyncResult"
                    label="Search Results"
                    searchUrl="https://api.example.com/search"
                    placeholder="Type to search..."
                    fieldsetColorVariant="success"
                    description="Simulated async search (try typing 'apple', 'banana', or 'orange')"
                  />

                  <Button type="submit" className="w-full">
                    Submit Search
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                The second dropdown simulates async search with a 700ms delay. Try typing fruit names to see results.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const ColorVariantsForm: Story = {
  render: () => {
    const variantFormSchema = z.object({
      default: z.string(),
      primary: z.string(),
      secondary: z.string(),
      success: z.string(),
      danger: z.string(),
    });

    const form = useForm({
      resolver: zodResolver(variantFormSchema),
      defaultValues: {
        default: "",
        primary: "",
        secondary: "",
        success: "",
        danger: "",
      },
    });

    const onSubmit = (data: any) => {
      console.log("Form data:", data);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Color Variants</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <DropdownForm
                    name="default"
                    label="Default Variant"
                    options={countries}
                    placeholder="Default styling..."
                    fieldsetColorVariant="default"
                  />

                  <DropdownForm
                    name="primary"
                    label="Primary Variant"
                    options={countries}
                    placeholder="Primary styling..."
                    fieldsetColorVariant="primary"
                  />

                  <DropdownForm
                    name="secondary"
                    label="Secondary Variant"
                    options={countries}
                    placeholder="Secondary styling..."
                    fieldsetColorVariant="secondary"
                  />

                  <DropdownForm
                    name="success"
                    label="Success Variant"
                    options={countries}
                    placeholder="Success styling..."
                    fieldsetColorVariant="success"
                  />

                  <DropdownForm
                    name="danger"
                    label="Danger Variant"
                    options={countries}
                    placeholder="Danger styling..."
                    fieldsetColorVariant="danger"
                  />

                  <Button type="submit" className="w-full">
                    Test Variants
                  </Button>
                </form>
              </Form>
            </FormProvider>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const PreselectedValues: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(userFormSchema),
      defaultValues: {
        name: "John Doe",
        email: "john.doe@company.com",
        country: "us", // Preselected United States
        department: "it", // Preselected IT
      },
    });

    const onSubmit = (data: any) => {
      console.log("Updated data:", data);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Form with Preselected Values</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
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
                          <Input type="email" placeholder="Enter email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DropdownForm
                    name="country"
                    label="Country"
                    options={countries}
                    placeholder="Select your country..."
                    fieldsetColorVariant="primary"
                  />

                  <DropdownForm
                    name="department"
                    label="Department"
                    options={departments}
                    placeholder="Select department..."
                    fieldsetColorVariant="secondary"
                  />

                  <Button type="submit" className="w-full">
                    Update Information
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                This form starts with preselected values: United States and IT Department.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const DarkMode: Story = {
  render: () => {
    const form = useForm({
      resolver: zodResolver(userFormSchema),
      defaultValues: {
        name: "",
        email: "",
        country: "",
        department: "",
      },
    });

    const onSubmit = (data: any) => {
      console.log("Dark mode form:", data);
    };

    return (
      <ThemeProvider defaultTheme="dark">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Dark Mode Dropdown Form</h3>

            <FormProvider {...form}>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter full name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <DropdownForm
                    name="country"
                    label="Country"
                    options={countries}
                    placeholder="Select your country..."
                    fieldsetColorVariant="primary"
                    description="Choose your country in dark mode"
                  />

                  <DropdownForm
                    name="department"
                    label="Department"
                    options={departments}
                    placeholder="Select department..."
                    fieldsetColorVariant="secondary"
                    description="Choose your department"
                  />

                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </FormProvider>

            <div className="mt-4 p-3 bg-muted rounded">
              <p className="text-sm">
                Dropdown form component with dark mode theme support and enhanced contrast.
              </p>
            </div>
          </div>
        </div>
      </ThemeProvider>
    );
  },
};