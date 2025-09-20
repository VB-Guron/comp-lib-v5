"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

export type ToggleChangedProps = {
  target: { value: boolean; name: string };
};

export type ToggleProps = {
  onChange?: (checked: ToggleChangedProps) => void;
  checked?: boolean;
  disabled?: boolean;
  name?: string;
  checkedValue?: string;
  notCheckedValue?: string;
  legend?: string; // label above the toggle, like fieldset
  fieldsetColorVariant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "danger";
};

export const toggleColorVariants = {
  default: {
    fieldset: "border-input",
    legend: "text-input",
  },
  primary: {
    fieldset: "border-primary bg-primary/10",
    legend: "text-primary",
  },
  secondary: {
    fieldset: "border-secondary bg-secondary/10",
    legend: "text-secondary",
  },
  success: {
    fieldset: "border-green-500 bg-green-50",
    legend: "text-green-700",
  },
  danger: {
    fieldset: "border-destructive bg-destructive/10",
    legend: "text-destructive",
  },
};

export const Toggle = (props: ToggleProps) => {
  const {
    checked = false,
    onChange = () => {},
    disabled = false,
    name = "",
    checkedValue = "YES",
    notCheckedValue = "NO",
    legend,
    fieldsetColorVariant = "default",
  } = props;

  const toggleRef = useRef(false);
  const [isChecked, setIsChecked] = useState(checked);

  useEffect(() => {
    toggleRef.current = checked;
    setIsChecked(checked);
  }, [checked]);

  const toggleYes = useCallback(() => {
    if (disabled) return;
    toggleRef.current = true;
    setIsChecked(true);
    onChange({ target: { name, value: true } });
  }, [onChange, name, disabled]);

  const toggleNo = useCallback(() => {
    if (disabled) return;
    toggleRef.current = false;
    setIsChecked(false);
    onChange({ target: { name, value: false } });
  }, [onChange, name, disabled]);

  const colorSet =
    toggleColorVariants[fieldsetColorVariant] ||
    toggleColorVariants.default;
  if (disabled) {
    return (
      <div className="flex flex-col gap-1">
        {legend && (
          <span
            className={`mb-1 block text-xs leading-none font-medium ${colorSet.legend}`}
          >
            {legend}
          </span>
        )}
        <span className="text-foreground block text-xs font-semibold">
          {isChecked ? checkedValue : notCheckedValue}
        </span>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-1">
      {legend && (
        <span
          className={`mb-1 block text-xs leading-none font-medium ${colorSet.legend}`}
        >
          {legend}
        </span>
      )}
      <div className="relative flex w-40 overflow-hidden rounded-sm">
        {/* Option spans - these are the clickable areas */}
        <span
          onClick={toggleYes}
          className={`border-input relative z-10 min-w-20 cursor-pointer rounded-l-sm border py-1 text-center text-xs font-semibold`}
        >
          <span
            className={`relative z-10 ${isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`}
          >
            {checkedValue}
          </span>
        </span>

        <span
          onClick={toggleNo}
          className={`border-input relative z-10 min-w-20 cursor-pointer rounded-r-sm border border-l-0 py-1 text-center text-xs font-semibold`}
        >
          <span
            className={`relative z-10 ${!isChecked ? "opacity-0" : "text-gray-300"} transition-opacity duration-300`}
          >
            {notCheckedValue}
          </span>
        </span>

        {/* Animated marker - this slides and shows the active text */}
        <div
          className={`bg-primary absolute top-0 z-30 h-full min-w-20 transition-all duration-500 ease-out ${isChecked ? "left-0 rounded-l-sm" : "left-20 rounded-r-sm"} `}
        >
          <span className="absolute z-40 flex h-full w-full items-center justify-center text-xs font-semibold text-white">
            {isChecked ? checkedValue : notCheckedValue}
          </span>
        </div>
      </div>
    </div>
  );
};
