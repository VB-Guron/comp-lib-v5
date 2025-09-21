import * as React from "react";
import { cn } from "../../lib/utils";
import { Search as SearchIcon, X } from "lucide-react";

export interface SearchOption {
  value: string;
  label: string;
}

export interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  className?: string;
  options?: SearchOption[];
  searchUrl?: string;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  placeholder = "Search...",
  label,
  inputProps,
  className = "",
  options,
  searchUrl,
}) => {
  return (
    <div className={cn("relative", className)}>
      {label && (
        <label className="mb-1 block text-xs font-medium">{label}</label>
      )}
      <div className="dark:bg-background flex w-full items-center rounded border bg-white px-2 py-1">
        <SearchIcon className="mr-2 text-gray-400" size={16} />
        <input
          className="flex-1 bg-transparent text-sm outline-none"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          {...inputProps}
        />
        {value && (
          <button
            type="button"
            className="ml-2 text-gray-400 hover:text-gray-600"
            onClick={(e) => {
              e.stopPropagation();
              onChange("");
            }}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
};
