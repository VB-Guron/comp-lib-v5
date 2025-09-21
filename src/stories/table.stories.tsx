import React from "react";
import { Table } from "../components/ui/table";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";
import Modal from "../components/common/Modal/modal";

// Mock Next.js hooks for demo purposes
const useSearchParams = () => {
  const [searchParams, setSearchParams] = React.useState(
    new URLSearchParams(window.location.search)
  );
  return {
    get: (key: string) => searchParams.get(key),
    toString: () => searchParams.toString(),
  };
};

const useRouter = () => ({
  push: (url: string) => {
    window.history.pushState({}, "", url);
    window.dispatchEvent(new PopStateEvent("popstate"));
  },
});

const usePathname = () => window.location.pathname;

// Hook for Next.js applications
function useTablePagination() {
  const url = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const currentPage = React.useMemo(() => {
    const num = parseInt(url.get("page") || "1");
    return isNaN(num) || num <= 0 ? 1 : num;
  }, [url]);

  const searchQuery = React.useMemo(() => {
    return url.get("search") || "";
  }, [url]);

  const handlePageChange = React.useCallback(
    (page: number, search: string) => {
      router.push(`${pathname}?page=${page}&search=${search}`);
    },
    [router, pathname]
  );

  return { currentPage, searchQuery, handlePageChange };
}

// Example usage component
function TableDemo() {
  const [loading, setLoading] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState<any>(null);
  const [showModal, setShowModal] = React.useState(false);

  // Use the pagination hook for Next.js
  const {
    currentPage,
    searchQuery,
    handlePageChange: navigateToPage,
  } = useTablePagination();

  // Sample data
  const sampleData = [
    {
      id: "1",
      name: "John Doe",
      email: "john@example.com",
      role: "Admin",
      status: "Active",
    },
    {
      id: "2",
      name: "Jane Smith",
      email: "jane@example.com",
      role: "User",
      status: "Inactive",
    },
    {
      id: "3",
      name: "Bob Johnson",
      email: "bob@example.com",
      role: "Editor",
      status: "Active",
    },
    {
      id: "4",
      name: "Alice Williams",
      email: "alice@example.com",
      role: "User",
      status: "Active",
    },
    {
      id: "5",
      name: "Charlie Brown",
      email: "charlie@example.com",
      role: "Admin",
      status: "Inactive",
    },
  ];

  const headers = ["ID", "Name", "Email", "Role", "Status", "Actions"];

  // Custom bindings for formatting
  type Row = {
    id: string;
    name: string;
    email: string;
    role: string;
    status: string;
  };
  const bindings: (keyof Row | ((item: Row) => React.ReactNode))[] = [
    "id",
    "name",
    "email",
    "role",
    (item: Row) => (
      <span
        className="rounded-full px-2 py-1 text-xs font-medium"
        style={{
          background:
            item.status === "Active"
              ? "var(--green, #30ba7b)"
              : "var(--destructive, #ef4444)",
          color:
            item.status === "Active"
              ? "var(--foreground, #052a38)"
              : "var(--destructive-foreground, #fff)",
        }}
      >
        {item.status}
      </span>
    ),
    (item: Row) => (
      <div className="flex justify-center gap-2">
        <button
          className="rounded px-3 py-1 text-xs transition-colors"
          style={{
            background: "var(--primary, #052a38)",
            color: "var(--primary-foreground, #fff)",
            border: "none",
          }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Edit clicked for:", item.id);
          }}
        >
          Edit
        </button>
        <button
          className="rounded px-3 py-1 text-xs transition-colors"
          style={{
            background: "var(--destructive, #ef4444)",
            color: "var(--destructive-foreground, #fff)",
            border: "none",
          }}
          onClick={(e) => {
            e.stopPropagation();
            console.log("Delete clicked for:", item.id);
          }}
        >
          Delete
        </button>
      </div>
    ),
  ];

  const handlePageChange = (page: number, search: string) => {
    setLoading(true);
    // Navigate to new URL
    navigateToPage(page, search);
    // Simulate API call with page and search params
    setTimeout(() => {
      setLoading(false);
      console.log(`Loading page ${page} with search: "${search}"`);
    }, 500);
  };

  const handleRowClick = (item: any) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div
        className="min-h-screen space-y-6 p-6"
        style={{ background: "var(--background)", color: "var(--foreground)" }}
      >
        <div className="flex items-center justify-between">
          <h1
            className="text-2xl font-bold"
            style={{ color: "var(--foreground)" }}
          >
            Table Component Demo
          </h1>
          <ModeToggle />
        </div>
        {/* Table with all features */}
        <div className="space-y-4">
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--muted-foreground)" }}
          >
            Full Featured Table
          </h2>
          <Table
            headers={headers}
            data={sampleData}
            bindings={bindings}
            totalItems={25} // Simulate more items than displayed
            itemsPerPage={5}
            currentPage={currentPage}
            searchQuery={searchQuery}
            onPageChange={handlePageChange}
            onRowClick={handleRowClick}
            loading={loading}
          />
        </div>

        {/* Simple table without actions or pagination */}
        <div className="space-y-4">
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--muted-foreground)" }}
          >
            Simple Table
          </h2>
          <Table
            headers={["Name", "Email", "Role"]}
            data={sampleData.slice(0, 3)}
            bindings={["name", "email", "role"]}
          />
        </div>

        {/* Empty table */}
        <div className="space-y-4">
          <h2
            className="text-lg font-semibold"
            style={{ color: "var(--muted-foreground)" }}
          >
            Empty Table
          </h2>
          <Table
            headers={["Name", "Email", "Status"]}
            data={[]}
            emptyMessage="No users found"
          />
        </div>

        {/* Modal for row details */}
        <Modal
          show={showModal && !!selectedItem}
          header="User Details"
          size="medium"
          onClick={() => setShowModal(false)}
        >
          {selectedItem && (
            <div className="p-6">
              <div className="space-y-2 text-sm">
                <div>
                  <strong style={{ color: "var(--muted-foreground)" }}>
                    ID:
                  </strong>{" "}
                  {selectedItem.id}
                </div>
                <div>
                  <strong style={{ color: "var(--muted-foreground)" }}>
                    Name:
                  </strong>{" "}
                  {selectedItem.name}
                </div>
                <div>
                  <strong style={{ color: "var(--muted-foreground)" }}>
                    Email:
                  </strong>{" "}
                  {selectedItem.email}
                </div>
                <div>
                  <strong style={{ color: "var(--muted-foreground)" }}>
                    Role:
                  </strong>{" "}
                  {selectedItem.role}
                </div>
                <div>
                  <strong style={{ color: "var(--muted-foreground)" }}>
                    Status:
                  </strong>{" "}
                  {selectedItem.status}
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 w-full rounded px-4 py-2 transition-colors"
                style={{
                  background: "var(--primary, #052a38)",
                  color: "var(--primary-foreground, #fff)",
                }}
              >
                Close
              </button>
            </div>
          )}
        </Modal>
      </div>
    </ThemeProvider>
  );
}

export default {
  title: "Components/Table",
  component: Table,
};

export const Demo = () => <TableDemo />;
