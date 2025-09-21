import React from "react";
import { UnifiedTable } from "../components/ui/UnifiedTable";
import { Table as LegacyTable } from "../components/common/Table/index";

export default {
  title: "Components/UnifiedTable",
  component: UnifiedTable,
};

const sampleData = [
  { id: "1", name: "Alice", age: 25, status: "Active" },
  { id: "2", name: "Bob", age: 30, status: "Inactive" },
  { id: "3", name: "Charlie", age: 28, status: "Active" },
  { id: "4", name: "David", age: 22, status: "Active" },
  { id: "5", name: "Eve", age: 27, status: "Inactive" },
  { id: "6", name: "Frank", age: 31, status: "Active" },
  { id: "7", name: "Grace", age: 29, status: "Inactive" },
  { id: "8", name: "Hannah", age: 24, status: "Active" },
  { id: "9", name: "Ian", age: 26, status: "Inactive" },
  { id: "10", name: "Jack", age: 32, status: "Active" },
  { id: "11", name: "Karen", age: 23, status: "Inactive" },
  { id: "12", name: "Leo", age: 27, status: "Active" },
  { id: "13", name: "Mona", age: 28, status: "Inactive" },
  { id: "14", name: "Nina", age: 25, status: "Active" },
  { id: "15", name: "Oscar", age: 30, status: "Inactive" },
];

const headers = ["ID", "Name", "Age", "Status"];
const bindings: (keyof (typeof sampleData)[0])[] = [
  "id",
  "name",
  "age",
  "status",
];

export const Default = () => (
  <UnifiedTable
    headers={headers}
    data={sampleData}
    bindings={bindings}
    total={3}
    pageSize={2}
    showButtons={true}
    usePagination={true}
    clickable={true}
    colored={false}
    fitSize={false}
  />
);

export const Colored = () => (
  <UnifiedTable
    headers={headers}
    data={sampleData}
    bindings={bindings}
    total={3}
    pageSize={2}
    showButtons={true}
    usePagination={true}
    clickable={true}
    colored={true}
    fitSize={false}
  />
);

export const FitSize = () => (
  <UnifiedTable
    headers={headers}
    data={sampleData}
    bindings={bindings}
    total={3}
    pageSize={2}
    showButtons={true}
    usePagination={true}
    clickable={true}
    colored={false}
    fitSize={true}
  />
);

export const NoPagination = () => (
  <UnifiedTable
    headers={headers}
    data={sampleData}
    bindings={bindings}
    total={3}
    pageSize={3}
    showButtons={false}
    usePagination={false}
    clickable={true}
    colored={false}
    fitSize={false}
  />
);

export const WithSearch = () => {
  const [data, setData] = React.useState(sampleData);
  return (
    <UnifiedTable
      headers={headers}
      data={data}
      bindings={bindings}
      total={data.length}
      pageSize={2}
      showButtons={true}
      usePagination={true}
      clickable={true}
      colored={false}
      fitSize={false}
      searchPlaceholder="Search by name or status..."
      searchableFields={["name", "status"]}
    />
  );
};

export const ErrorRows = () => (
  <UnifiedTable
    headers={headers}
    data={sampleData}
    bindings={bindings}
    total={3}
    pageSize={2}
    showButtons={true}
    usePagination={true}
    clickable={true}
    colored={false}
    fitSize={false}
    errorIndices={[2]}
  />
);

// Demo for rowStyleBinding and cellStyleBinding
export const CustomStyles = () => (
  <UnifiedTable
    headers={headers}
    data={sampleData}
    bindings={bindings}
    total={3}
    pageSize={2}
    showButtons={true}
    usePagination={true}
    clickable={true}
    colored={false}
    fitSize={false}
    rowStyleBinding={(row) =>
      row.status === "Inactive" ? { backgroundColor: "#ffe0e0" } : {}
    }
    cellStyleBinding={(header, value) =>
      header === "Age" && Number(value) > 27 ? { color: "blue" } : {}
    }
  />
);

export const LegacyTableDemo = () => (
  <LegacyTable
    headers={headers}
    data={sampleData}
    bindings={bindings}
    total={sampleData.length}
    pageSize={2}
    showButtons={true}
  />
);

// Demonstrate that the original tables still work (import and render them)

// The following imports may need to be adjusted based on your monorepo/tsconfig paths setup.
// If you have path aliases, use them. Otherwise, require.resolve or dynamic import may be needed for Storybook.
// For now, use relative imports for demonstration, but you may need to adjust for your build system.
