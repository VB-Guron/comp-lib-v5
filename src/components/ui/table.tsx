import React, {
  useState,
  useMemo,
  useRef,
  useEffect,
  useCallback,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";

export interface TableProps<T> {
  headers: string[];
  data: T[];
  bindings?: (keyof T | ((item: T) => React.ReactNode))[];
  totalItems?: number;
  itemsPerPage?: number;
  currentPage?: number;
  searchQuery?: string;
  onPageChange?: (page: number, search: string) => void;
  onRowClick?: (item: T) => void;
  actionComponents?: (item: T) => React.ReactNode;
  emptyMessage?: string;
  loading?: boolean;
  resetToFirstPage?: boolean;
  onResetComplete?: () => void;
}

export function Table<T extends Record<string, any>>({
  headers,
  data,
  bindings,
  totalItems = data.length,
  itemsPerPage = 10,
  currentPage = 1,
  searchQuery = "",
  onPageChange,
  onRowClick,
  actionComponents,
  emptyMessage = "No data to display",
  loading = false,
  resetToFirstPage = false,
  onResetComplete,
}: TableProps<T>) {
  const pageRef = useRef(currentPage);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  // Update pageRef when currentPage changes
  useEffect(() => {
    pageRef.current = currentPage;
  }, [currentPage]);

  // Calculate max pages
  const maxPage: number = useMemo(() => {
    return Math.ceil(totalItems / itemsPerPage);
  }, [itemsPerPage, totalItems]);

  // Calculate pagination values
  const canGoPrev = currentPage > 1;
  const canGoNext = currentPage < maxPage && maxPage > 0;

  // Handle reset to first page
  useEffect(() => {
    if (resetToFirstPage && currentPage !== 1) {
      onPageChange?.(1, searchQuery);
      onResetComplete?.();
    }
  }, [
    resetToFirstPage,
    currentPage,
    searchQuery,
    onPageChange,
    onResetComplete,
  ]);

  // Handle page changes that exceed maxPage
  useEffect(() => {
    if (currentPage > maxPage && maxPage > 0) {
      const newPage = maxPage;
      onPageChange?.(newPage, searchQuery);
    }
  }, [maxPage, currentPage, searchQuery, onPageChange]);

  const handlePrevPage = () => {
    if (canGoPrev) {
      const newPage = currentPage - 1;
      onPageChange?.(newPage, searchQuery);
    }
  };

  const handleNextPage = () => {
    if (canGoNext) {
      const newPage = currentPage + 1;
      onPageChange?.(newPage, searchQuery);
    }
  };

  // Create column bindings based on headers
  const columnBindings = useMemo(() => {
    if (bindings && bindings.length === headers.length) {
      return bindings;
    }

    return headers.map((header) => {
      if (
        header.toLowerCase() === "action" ||
        header.toLowerCase() === "actions"
      ) {
        return (item: T) => actionComponents?.(item) || null;
      }
      // Convert header to a potential object key (lowercase, replace spaces with underscores)
      const key = header.toLowerCase().replace(/\s+/g, "_");
      return key as keyof T;
    });
  }, [headers, bindings, actionComponents]);

  const renderCellContent = (
    item: T,
    binding: keyof T | ((item: T) => React.ReactNode)
  ) => {
    if (typeof binding === "function") {
      return binding(item);
    }
    return String(item[binding] ?? "");
  };

  const hasClickableRows = Boolean(onRowClick);

  return (
    <div
      className="flex w-full flex-col overflow-hidden rounded-sm border"
      style={{
        background: "var(--background)",
        color: "var(--foreground)",
        borderColor: "var(--border)",
      }}
    >
      {/* Table Container with Horizontal Scroll */}
      <div className="w-full overflow-x-auto">
        <table
          className="w-full border-collapse text-center"
          style={{
            background: "var(--background)",
            color: "var(--foreground)",
          }}
        >
          {/* Table Header */}
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="text-foreground border-primary min-w-[120px] border-b-3 px-4 py-3 text-sm font-semibold"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {data.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length}
                  className="px-4 py-8 text-center text-lg font-medium"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {emptyMessage}
                </td>
              </tr>
            ) : (
              data.map((item, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={cn(
                    `odd:bg-background text-foreground even:bg-accent text-sm`,
                    {
                      "cursor-pointer transition-colors duration-150 hover:bg-gray-200":
                        hasClickableRows,
                    }
                  )}
                  onClick={() => hasClickableRows && onRowClick?.(item)}
                >
                  {columnBindings.map((binding, colIndex) => (
                    <td
                      key={colIndex}
                      className="max-w-[200px] min-w-[120px] px-4 py-3"
                      style={{ color: "var(--foreground)" }}
                      onClick={(e) => {
                        // Stop propagation for action columns to prevent row click
                        const isActionColumn =
                          headers[colIndex]?.toLowerCase() === "action" ||
                          headers[colIndex]?.toLowerCase() === "actions";
                        if (isActionColumn) {
                          e.stopPropagation();
                        }
                      }}
                    >
                      <div
                        className="overflow-hidden text-ellipsis"
                        style={{
                          display: "-webkit-box",
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: "vertical",
                          minHeight: "rem",
                          maxHeight: "3rem",
                          lineHeight: "1.5rem",
                          color: "inherit",
                        }}
                      >
                        {renderCellContent(item, binding)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {maxPage > 1 && (
        <div
          className="flex items-center justify-end gap-4 p-2"
          style={{
            background: "var(--muted)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="text-sm" style={{ color: "var(--muted-foreground)" }}>
            Page {currentPage} of {maxPage} ({totalItems} items)
          </div>
          <div className="flex gap-2">
            <button
              ref={prevButtonRef}
              onClick={handlePrevPage}
              disabled={!canGoPrev || loading}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-150"
              style={{
                color:
                  canGoPrev && !loading
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                background:
                  canGoPrev && !loading ? "var(--background)" : "var(--muted)",
                cursor: !canGoPrev || loading ? "not-allowed" : "pointer",
              }}
              onMouseOver={(e) => {
                if (canGoPrev && !loading) {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary-foreground)";
                }
              }}
              onMouseOut={(e) => {
                if (canGoPrev && !loading) {
                  e.currentTarget.style.background = "var(--background)";
                  e.currentTarget.style.color = "var(--foreground)";
                }
              }}
            >
              <ChevronLeft size={14} />
            </button>
            <button
              ref={nextButtonRef}
              onClick={handleNextPage}
              disabled={!canGoNext || loading}
              className="flex h-10 w-10 items-center justify-center rounded-lg transition-all duration-150"
              style={{
                color:
                  canGoNext && !loading
                    ? "var(--foreground)"
                    : "var(--muted-foreground)",
                background:
                  canGoNext && !loading ? "var(--background)" : "var(--muted)",
                cursor: !canGoNext || loading ? "not-allowed" : "pointer",
              }}
              onMouseOver={(e) => {
                if (canGoNext && !loading) {
                  e.currentTarget.style.background = "var(--primary)";
                  e.currentTarget.style.color = "var(--primary-foreground)";
                }
              }}
              onMouseOut={(e) => {
                if (canGoNext && !loading) {
                  e.currentTarget.style.background = "var(--background)";
                  e.currentTarget.style.color = "var(--foreground)";
                }
              }}
            >
              <ChevronRight size={14} />
            </button>
          </div>
        </div>
      )}

      {/* Loading Overlay */}
      {loading && (
        <div
          className="absolute inset-0 flex items-center justify-center backdrop-blur-sm"
          style={{ background: "var(--background)", opacity: 0.5 }}
        >
          <div
            className="flex items-center gap-2 rounded-lg border px-4 py-2 shadow-lg"
            style={{ background: "var(--card)", borderColor: "var(--border)" }}
          >
            <div
              className="h-4 w-4 animate-spin rounded-full border-2"
              style={{
                borderColor: "var(--primary)",
                borderTopColor: "transparent",
              }}
            ></div>
            <span
              className="text-sm"
              style={{ color: "var(--muted-foreground)" }}
            >
              Loading...
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
