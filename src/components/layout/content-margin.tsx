import React from "react";
import "./content-margin.scss";

export interface ContentMarginProps
  extends React.HTMLAttributes<HTMLDivElement> {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
}

/**
 * ContentMargin provides horizontal margins and max-width using the .content-margin SCSS class.
 * It adapts responsively based on your SCSS/media queries.
 *
 * Usage:
 * <ContentMargin><YourContent /></ContentMargin>
 */
export function ContentMargin({
  children,
  as = "div",
  className = "",
  ...props
}: ContentMarginProps) {
  const Component = as as any;
  return (
    <Component
      className={`content-margin bg-background ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
