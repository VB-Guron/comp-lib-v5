import * as React from "react";
import { createPortal } from "react-dom";
import { cn } from "../../lib/utils";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  ({ isOpen, onClose, title, children, footer }, ref) => {
    React.useEffect(() => {
      if (isOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "unset";
      }

      return () => {
        document.body.style.overflow = "unset";
      };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    };

    const modal = (
      <div
        className={cn("modal-backdrop", isOpen && "modal-backdrop--open")}
        onClick={handleBackdropClick}
      >
        <div className="modal-content" ref={ref}>
          {title && (
            <div className="modal-header">
              <h2>{title}</h2>
            </div>
          )}
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    );

    return createPortal(modal, document.body);
  }
);
Modal.displayName = "Modal";

export { Modal };
