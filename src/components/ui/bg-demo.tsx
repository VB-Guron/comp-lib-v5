import React from "react";

export interface BgDemoProps {
  theme?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}

/**
 * BgDemo is a simple div that fills its parent and uses Tailwind background and text classes.
 * It applies the `dark` class if theme is set to "dark".
 */
export const BgDemo: React.FC<BgDemoProps> = ({
  theme = "light",
  className = "",
  children,
}) => {
  return (
    <div
      className={[
        "bg-background text-foreground flex min-h-screen w-full items-center justify-center",
        className,
      ].join(" ")}
    >
      {children || "Background Demo"}
    </div>
  );
};
