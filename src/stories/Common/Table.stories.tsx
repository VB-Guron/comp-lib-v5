import React, { useState } from "react";
import { Table } from "../../components/ui/table";
import { ThemeProvider } from "../../components/theme-provider";
import { ModeToggle } from "../../components/ui/mode-toggle";
import type { Meta, StoryObj } from "@storybook/react";
import "../../styles/globals.css";

// Sample data for demonstrations
const sampleData = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active", createdAt: "2024-01-15" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active", createdAt: "2024-01-16" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User", status: "Inactive", createdAt: "2024-01-17" },
  { id: 4, name: "Alice Brown", email: "alice@example.com", role: "Moderator", status: "Active", createdAt: "2024-01-18" },
  { id: 5, name: "Charlie Davis", email: "charlie@example.com", role: "User", status: "Pending", createdAt: "2024-01-19" },
  { id: 6, name: "Eva Wilson", email: "eva@example.com", role: "Admin", status: "Active", createdAt: "2024-01-20" },
  { id: 7, name: "Frank Miller", email: "frank@example.com", role: "User", status: "Inactive", createdAt: "2024-01-21" },
  { id: 8, name: "Grace Taylor", email: "grace@example.com", role: "User", status: "Active", createdAt: "2024-01-22" },
];

const meta: Meta<typeof Table> = {
  title: "Common/Table",
  component: Table,
  tags: ["autodocs"],
  argTypes: {
    headers: { control: "object" },
    data: { control: "object" },
    totalItems: { control: "number" },
    itemsPerPage: { control: "number" },
    currentPage: { control: "number" },
    searchQuery: { control: "text" },
    emptyMessage: { control: "text" },
    loading: { control: "boolean" },
  },
  parameters: {
    docs: {
      description: {
        component: "A modern, responsive table component with advanced pagination, search, loading states, and action column support.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Table Default</h3>
          <Table {...args} />
        </div>
      </div>
    </ThemeProvider>
  ),
  args: {
    headers: ["Name", "Email", "Role", "Status"],
    data: sampleData.slice(0, 5),
    bindings: ["name", "email", "role", "status"],
  },
};

export const WithPagination: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 3;

    const handlePageChange = (page: number, search: string) => {
      setCurrentPage(page);
      setSearchQuery(search);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Table with Pagination</h3>
            <Table
              headers={["Name", "Email", "Role", "Status", "Created"]}
              data={sampleData}
              bindings={["name", "email", "role", "status", "createdAt"]}
              totalItems={sampleData.length}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              searchQuery={searchQuery}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const WithSearch: Story = {
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    const handlePageChange = (page: number, search: string) => {
      setCurrentPage(page);
      setSearchQuery(search);
    };

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Table with Search</h3>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground">
                Try searching for names, emails, or roles to see the search functionality in action.
              </p>
            </div>
            <Table
              headers={["Name", "Email", "Role", "Status"]}
              data={sampleData}
              bindings={["name", "email", "role", "status"]}
              totalItems={sampleData.length}
              itemsPerPage={5}
              currentPage={currentPage}
              searchQuery={searchQuery}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const handleRowClick = (item: any) => {
      alert(`Clicked on row: ${item.name}`);
    };

    const renderActions = (item: any) => (
      <div className="flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert(`Edit ${item.name}`);
          }}
          className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Edit
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            alert(`Delete ${item.name}`);
          }}
          className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    );

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Table with Actions</h3>
            <Table
              headers={["Name", "Email", "Role", "Status", "Actions"]}
              data={sampleData.slice(0, 5)}
              bindings={["name", "email", "role", "status"]}
              onRowClick={handleRowClick}
              actionComponents={renderActions}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const WithCustomRendering: Story = {
  render: () => {
    type SampleDataType = typeof sampleData[0];

    const customBindings: (keyof SampleDataType | ((item: SampleDataType) => React.ReactNode))[] = [
      "name",
      "email",
      (item: SampleDataType) => (
        <span className={`px-2 py-1 rounded text-xs ${
          item.role === 'Admin' ? 'bg-purple-100 text-purple-800' :
          item.role === 'Moderator' ? 'bg-blue-100 text-blue-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {item.role}
        </span>
      ),
      (item: SampleDataType) => (
        <span className={`px-2 py-1 rounded text-xs ${
          item.status === 'Active' ? 'bg-green-100 text-green-800' :
          item.status === 'Inactive' ? 'bg-red-100 text-red-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {item.status}
        </span>
      ),
    ];

    return (
      <ThemeProvider defaultTheme="light">
        <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
          <ModeToggle />
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Table with Custom Rendering</h3>
            <Table
              headers={["Name", "Email", "Role", "Status"]}
              data={sampleData.slice(0, 6)}
              bindings={customBindings}
            />
          </div>
        </div>
      </ThemeProvider>
    );
  },
};

export const LoadingState: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Table Loading State</h3>
          <Table
            headers={["Name", "Email", "Role", "Status"]}
            data={[]}
            bindings={["name", "email", "role", "status"]}
            loading={true}
          />
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const EmptyState: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Table Empty State</h3>
          <Table
            headers={["Name", "Email", "Role", "Status"]}
            data={[]}
            bindings={["name", "email", "role", "status"]}
            emptyMessage="No users found. Add some users to get started."
            loading={false}
          />
        </div>
      </div>
    </ThemeProvider>
  ),
};

export const ResponsiveDemo: Story = {
  render: () => (
    <ThemeProvider defaultTheme="light">
      <div className="w-screen h-screen bg-background p-6 flex flex-col gap-4">
        <ModeToggle />
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">Responsive Table</h3>
          <div className="mb-4 p-4 bg-muted rounded">
            <p className="text-sm">
              This table is responsive and will show horizontal scrolling on smaller screens.
              Try resizing your browser window to see the responsive behavior.
            </p>
          </div>
          <Table
            headers={["ID", "Full Name", "Email Address", "Role", "Account Status", "Created Date", "Last Login", "Department"]}
            data={[
              { id: 1, name: "John Doe", email: "john.doe@company.com", role: "Senior Administrator", status: "Active", createdAt: "2024-01-15", lastLogin: "2024-01-22", department: "Information Technology" },
              { id: 2, name: "Jane Smith", email: "jane.smith@company.com", role: "Project Manager", status: "Active", createdAt: "2024-01-16", lastLogin: "2024-01-21", department: "Product Development" },
              { id: 3, name: "Bob Johnson", email: "bob.johnson@company.com", role: "Software Engineer", status: "Inactive", createdAt: "2024-01-17", lastLogin: "2024-01-20", department: "Engineering" },
            ]}
            bindings={["id", "name", "email", "role", "status", "createdAt", "lastLogin", "department"]}
          />
        </div>
      </div>
    </ThemeProvider>
  ),
};