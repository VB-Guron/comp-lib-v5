import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

export interface ButtonContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonContainerVariants> {
  children: React.ReactNode;
}

const buttonContainerVariants = cva("w-full box-border flex gap-2 ", {
  variants: {
    location: {
      "flex-start": "justify-start",
      center: "justify-center",
      "flex-end": "justify-end",
      "space-between": "justify-between",
    },
    wrap: {
      wrap: "flex-col-reverse sm:flex-row ",
      "no-wrap": "flex-row flex-nowrap",
    },
  },
  defaultVariants: {
    location: "flex-start",
    wrap: "wrap",
  },
});

/**
 * ButtonContainer - A flex container for grouping buttons, with location and wrap props.
 * Always w-full. On wrap, stacks vertically on small screens and wraps on large. On no-wrap, always a single row.
 */
export const ButtonContainer: React.FC<ButtonContainerProps> = ({
  children,
  className,
  location,
  wrap,
  ...props
}) => {
  // Children: w-full on small screens if wrap, else auto
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const childClass = (child.props as any).className || "";
      if (wrap === "wrap" || wrap === undefined) {
        return React.cloneElement(child, {
          className: cn("w-full sm:w-auto", childClass),
        });
      } else {
        return React.cloneElement(child, {
          className: cn(childClass),
        });
      }
    }
    return child;
  });

  return (
    <div
      className={cn(buttonContainerVariants({ location, wrap }), className)}
      {...props}
    >
      {enhancedChildren}
    </div>
  );
};

export { buttonContainerVariants };
