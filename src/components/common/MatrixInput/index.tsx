import React, { InputHTMLAttributes } from "react";
import "./index.scss";
import { cn } from "../../../lib/utils";

export interface MatrixInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  title: string;
}

const MatrixInput = (props: MatrixInputProps) => {
  return (
    <div className="matrix-form-group rounded-md">
      <span className="border-secondary bg-secondary text-background dark:text-foreground border">
        {props.title}
      </span>
      <input
        className={cn(
          "matrix-form-field",
          "border-secondary text-primary dark:text-foreground border bg-transparent"
        )}
        type={props.type || "text"}
        placeholder="0.00"
        {...props}
      ></input>
    </div>
  );
};
export default MatrixInput;
