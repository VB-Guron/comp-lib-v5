import * as React from "react";
import { cn } from "../../lib/utils";

export interface DropdownProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const Dropdown = React.forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, children, className }, ref) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
      <div className={cn("dropdown", className)} ref={dropdownRef}>
        <div className="dropdown__trigger" onClick={() => setIsOpen(!isOpen)}>
          {trigger}
        </div>
        <div className={cn("dropdown__menu", isOpen && "dropdown__menu--open")}>
          {children}
        </div>
      </div>
    );
  }
);
Dropdown.displayName = "Dropdown";

const DropdownItem = React.forwardRef<
  HTMLDivElement,
  { children: React.ReactNode; onClick?: () => void }
>(({ children, onClick }, ref) => {
  return (
    <div className="dropdown__item" onClick={onClick} ref={ref}>
      {children}
    </div>
  );
});
DropdownItem.displayName = "DropdownItem";

export { Dropdown, DropdownItem };
