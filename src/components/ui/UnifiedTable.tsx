import React, {
  useRef,
  useCallback,
  useMemo,
  useEffect,
  ReactNode,
  useState,
} from "react";
import { Search } from "./search";
import { cn } from "../../lib/utils";

export interface UnifiedTableProps<T> {
  headers: string[];
  data: T[];
  bindings: (keyof T | ((props: T) => React.ReactNode))[];
  onNext?: (nextPage: number) => void;
  onPrev?: (prevPage: number) => void;
  total?: number;
  pageSize?: number;
  resetPage?: boolean;
  children?: React.ReactNode;
  onClick?: (id: string) => void;
  HandlePageReset?: (reset: boolean) => void;
  showButtons?: boolean;
  emptyMsg?: string;
  errorIndices?: number[];
  rowStyleBinding?: (item: T) => React.CSSProperties;
  cellStyleBinding?: (header: string, value: any) => React.CSSProperties;
  usePagination?: boolean;
  clickable?: boolean;
  colored?: boolean;
  fitSize?: boolean;
  searchUrl?: string;
  searchableFields?: (keyof T)[];
  searchPlaceholder?: string;
}

export function UnifiedTable<T>({
  headers,
  data,
  bindings,
  onNext = () => {},
  onPrev = () => {},
  total = 0,
  pageSize = 10,
  resetPage = false,
  children,
  onClick = () => {},
  HandlePageReset = () => {},
  showButtons = true,
  emptyMsg = "No data to display",
  errorIndices = [],
  rowStyleBinding = () => ({}),
  cellStyleBinding = () => ({}),
  usePagination = true,
  clickable = true,
  colored = false,
  fitSize = false,
  searchUrl,
  searchableFields,
  searchPlaceholder = "Search...",
}: UnifiedTableProps<T>) {
  const pageRef = useRef(1);
  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  // Search state
  const [searchValue, setSearchValue] = useState("");
  // No dropdown options needed for legacy look
  const [filteredData, setFilteredData] = useState<T[]>(data);

  // Debounce search value for local and server search
  const [debouncedSearch, setDebouncedSearch] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedSearch(searchValue), 300);
    return () => clearTimeout(handler);
  }, [searchValue]);

  // Update filteredData when debouncedSearch or data changes (local search)
  useEffect(() => {
    if (!debouncedSearch) {
      setFilteredData(data);
      return;
    }
    if (searchUrl) {
      // If using server search, expect parent to update data prop
      setFilteredData(data);
    } else {
      // Local search
      const fields = searchableFields || (headers as (keyof T)[]);
      setFilteredData(
        data.filter((row) =>
          fields.some((field) => {
            const val = row[field];
            return (
              typeof val === "string" &&
              val.toLowerCase().includes(debouncedSearch.toLowerCase())
            );
          })
        )
      );
    }
  }, [debouncedSearch, data, searchUrl, searchableFields, headers]);

  // No dropdown options needed for legacy look

  const maxPage = useMemo(
    () => Math.ceil((filteredData.length || total) / pageSize),
    [filteredData.length, total, pageSize]
  );

  const togglePrevPageButton = useCallback(() => {
    if (prevButtonRef.current)
      prevButtonRef.current.style.display =
        pageRef.current === 1 ? "none" : "block";
  }, []);

  const toggleNextPageButton = useCallback(() => {
    if (nextButtonRef.current)
      nextButtonRef.current.style.display =
        pageRef.current === maxPage || maxPage === 0 ? "none" : "block";
  }, [maxPage]);

  useEffect(() => {
    if (pageRef.current > maxPage && maxPage > 0) {
      onPrev(pageRef.current - 1);
      pageRef.current = maxPage;
      toggleNextPageButton();
      togglePrevPageButton();
    }
  }, [
    maxPage,
    onPrev,
    toggleNextPageButton,
    togglePrevPageButton,
    total,
    data,
  ]);

  useEffect(() => {
    togglePrevPageButton();
  }, [togglePrevPageButton]);

  useEffect(() => {
    toggleNextPageButton();
  }, [toggleNextPageButton]);

  useEffect(() => {
    if (resetPage) {
      pageRef.current = 1;
      toggleNextPageButton();
      togglePrevPageButton();
      HandlePageReset(false);
    }
  }, [
    HandlePageReset,
    onPrev,
    resetPage,
    toggleNextPageButton,
    togglePrevPageButton,
  ]);

  const prevPage = useCallback(() => {
    if (pageRef.current === 1) return;
    onPrev(pageRef.current - 1);
    pageRef.current = pageRef.current - 1;
    togglePrevPageButton();
    toggleNextPageButton();
  }, [onPrev, togglePrevPageButton, toggleNextPageButton]);

  const nextPage = useCallback(() => {
    if (pageRef.current === maxPage) return;
    onNext(pageRef.current + 1);
    pageRef.current = pageRef.current + 1;
    togglePrevPageButton();
    toggleNextPageButton();
  }, [onNext, maxPage, togglePrevPageButton, toggleNextPageButton]);

  return (
    <div
      className={[
        showButtons ? "tableContainer" : "tableContainerHiddenButtons",
        "border-border-light dark:border-primary border dark:border-[1.1px]",
      ].join(" ")}
      style={{ minHeight: fitSize ? undefined : "6.5rem" }}
    >
      {/* Search input */}
      <div className="mb-2 w-full">
        <Search
          value={searchValue}
          onChange={setSearchValue}
          placeholder={searchPlaceholder}
        />
      </div>
      <div className="tableScroller">
        <table
          className={cn("table", "bg-secondary")}
          data-empty-msg={emptyMsg ? emptyMsg : "No data to display"}
        >
          <thead>
            <tr className="">
              {headers.map((h, i) => (
                <th
                  className="border-primary bg-background text-primary dark:border-secondary border-b-[1.5px] dark:text-white"
                  key={i}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <tr>
                <td
                  colSpan={headers.length}
                  className="py-6 text-center font-semibold text-gray-400"
                >
                  {emptyMsg}
                </td>
              </tr>
            ) : (
              filteredData.map((d, i) => (
                <tr
                  key={i}
                  onClick={() => clickable && onClick(i.toString())}
                  className={`text-primary odd:bg-background even:bg-accent dark:text-primary-foreground ${clickable ? "cursor-pointer" : ""}`}
                  style={{
                    ...(errorIndices.includes(i + 1)
                      ? { backgroundColor: "#f4cccc", color: "red" }
                      : {}),
                    ...rowStyleBinding(d),
                  }}
                >
                  {bindings.map((b, j) => {
                    let val = "";
                    let id = "";
                    if (typeof b !== "function") {
                      val = d[b] + "";
                      if (b === "id") id = d[b] as string;
                    }
                    return id !== "" ? (
                      <td key={j} onClick={() => onClick(id)}>
                        {typeof b === "function" ? b(d) : val}
                      </td>
                    ) : (
                      <td
                        key={j}
                        style={cellStyleBinding(
                          headers[j],
                          typeof b === "function" ? b(d) : val
                        )}
                      >
                        {typeof b === "function" ? b(d) : val}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      {showButtons && usePagination && (
        <div className="buttonContainer">
          <button className="button" onClick={prevPage} ref={prevButtonRef}>
            &lt;
          </button>
          <button className="button" onClick={nextPage} ref={nextButtonRef}>
            &gt;
          </button>
        </div>
      )}
      <div className="loading">{children}</div>
    </div>
  );
}
