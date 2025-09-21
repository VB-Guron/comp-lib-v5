/* eslint-disable @next/next/no-img-element */
"use client";

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useRef,
  useContext,
} from "react";
import "./index.scss";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { cn } from "../../../lib/utils";


export interface TableProps<T> {
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
}

export function Table<T>(props: TableProps<T>) {
  const pageRef = useRef(1);

  const prevButtonRef = useRef<HTMLButtonElement>(null);
  const nextButtonRef = useRef<HTMLButtonElement>(null);

  const {
    headers,
    data,
    bindings,
    onNext = () => {
      return;
    },
    onPrev = () => {
      return;
    },
    pageSize = 10,
    total = 0,
    resetPage = false,
    onClick = () => {
      return;
    },
    children,
    HandlePageReset = () => {
      return;
    },
    showButtons = true,
    emptyMsg,
    errorIndices,
  } = props;


  // Local state to mimic Next.js search params
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  // For demo: filter data by search
  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter(row =>
      Object.values(row as Record<string, any>).some(val =>
        typeof val === "string" && val.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);


  const maxPage: number = useMemo(() => {
    return Math.ceil((total || filteredData.length) / pageSize);
  }, [pageSize, total, filteredData.length]);


  const togglePrevPageButton = useCallback(() => {
    if (prevButtonRef.current)
      prevButtonRef.current.style.display = page === 1 ? "none" : "block";
  }, [page]);

  const toggleNextPageButton = useCallback(() => {
    if (nextButtonRef.current)
      nextButtonRef.current.style.display =
        page === maxPage || maxPage === 0 ? "none" : "block";
  }, [maxPage, page]);



  useEffect(() => {
    if (page > maxPage && maxPage > 0) {
      onPrev(pageRef.current - 1);
      pageRef.current = maxPage;
      setPage(maxPage);
      toggleNextPageButton();
      togglePrevPageButton();
    }
  }, [
    maxPage,
    onPrev,
    toggleNextPageButton,
    togglePrevPageButton,
    total,
    pageRef,
    data,
    page,
  ]);

  useEffect(() => {
    togglePrevPageButton();
  }, [togglePrevPageButton]);

  useEffect(() => {
    toggleNextPageButton();
  }, [toggleNextPageButton]);


  const prevPage = useCallback(() => {
    if (page === 1) return;
    setPage(page - 1);
    pageRef.current = pageRef.current - 1;
    togglePrevPageButton();
    toggleNextPageButton();
  }, [page, togglePrevPageButton, toggleNextPageButton]);

  const nextPage = useCallback(() => {
    if (page === maxPage) return;
    setPage(page + 1);
    pageRef.current = pageRef.current + 1;
    togglePrevPageButton();
    toggleNextPageButton();
  }, [page, maxPage, togglePrevPageButton, toggleNextPageButton]);

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


  // Pagination: slice filteredData for current page
  const pagedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  return (
    <div
      className={cn(
        showButtons
          ? "tableContainer"
          : "tableContainerHiddenButtons",
        "border border-border-light dark:border-[1.1px] dark:border-primary"
      )}
    >
      {/* Search input */}
      <div className="w-full mb-2">
        <input
          className="border rounded px-2 py-1 w-full"
          placeholder="Search..."
          value={search}
          onChange={e => {
            setSearch(e.target.value);
            setPage(1);
          }}
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
                  className="border-b-[1.5px] border-primary bg-background text-primary dark:border-secondary dark:text-white"
                  key={i}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pagedData.map((d, i) => {
              return (
                <tr
                  key={i}
                  className={`text-primary odd:bg-background even:bg-accent 
                  dark:text-primary-foreground`}
                  style={
                    errorIndices?.includes(i + 1)
                      ? { backgroundColor: "#f4cccc", color: "red" }
                      : {}
                  }
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
                      <td key={j}>{typeof b === "function" ? b(d) : val}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {showButtons && (
        <div className="buttonContainer">
          <button
            className="button"
            onClick={prevPage}
            ref={prevButtonRef}
          >
            <FaAngleLeft size="0.75rem" className="w-full" />
          </button>
          <button
            className="button"
            onClick={nextPage}
            ref={nextButtonRef}
          >
            <FaAngleRight size="0.75rem" className="w-full" />
          </button>
        </div>
      )}
      <div className="loading">{children}</div>
    </div>
  );
}


