"use client";
import { HTMLAttributes } from "react";
import "./modal.scss";
import { cn } from "../../../lib/utils";

export type ModalSize = "small" | "medium" | "medium2" | "large" | "xlarge";

export interface ModalProps extends HTMLAttributes<HTMLDialogElement> {
  header?: string;
  show?: boolean;
  children?: React.ReactNode;
  size?: ModalSize;
}

const Modal = ({
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
        <div className={cn("modal-background", "h-full")} role="modal-bg">
          <div
            className={cn("modal-container", "bg-background")}
            {...rest}
            //open={show}
            {...modalSize}
          >
            {/* Header Container */}
            <div
              className={cn("modal-header-container", "border border-blue-800")}
            >
              <span
                className={cn(
                  "modal-header",
                  "text-foreground border border-red-700 underline underline-offset-8"
                )}
              >
                {header}
              </span>
            </div>
            {/* Content */}
            <div className={cn("content-container")}>{children}</div>
            {/* Footer Container */}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
