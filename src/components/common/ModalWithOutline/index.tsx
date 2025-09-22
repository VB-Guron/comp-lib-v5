"use client";
import { HTMLAttributes } from "react";
import "./index.scss";
import { cn } from "../../../lib/utils";

export type ModalSize = "small" | "medium" | "medium2" | "large" | "xlarge";

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  header?: string;
  show?: boolean;
  children?: React.ReactNode;
  size?: ModalSize;
}

const ModalWithOutline = ({
  header = "Header",
  children,
  show = false,
  size = "medium",
  ...rest
}: ModalProps) => {
  const modalSize: any = { "modal-size": size };
  return (
    <>
      {show ? (
        <div className={cn("modal-outline-background", "h-full")} role="modal-bg">
          <div
            className={cn("modal-outline-container", "bg-background")}
            {...rest}
            //open={show}
            {...modalSize}
          >
            {/* Header Container */}
            <div className="modal-outline-header-container">
              <span className={cn("modal-outline-header", "text-foreground")}>
                {header}
              </span>
            </div>
            {/* Content */}
            <div className={"modal-outline-content-container"}>{children}</div>
            {/* Footer Cntainer */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ModalWithOutline;
