import React, { useState } from "react";
import GenericCheckboxGroup, { GenericCheckboxDemo } from "../components/ui/checkboxgroup";
import {
  GenericCheckboxFormField,
  SampleCheckboxForm,
} from "../components/upgraded/checkboxgroup-form";
import { ThemeProvider } from "../components/theme-provider";
import { Button } from "../components/ui/button";

export default {
  title: "Components/CheckboxGroup",
  component: GenericCheckboxGroup,
  parameters: {
    layout: "centered",
  },
};

export const FreeUse = () => (
  <StoryThemeWrapper>
    <GenericCheckboxDemo />
  </StoryThemeWrapper>
);

export const WithForm = () => (
  <StoryThemeWrapper>
    <SampleCheckboxForm />
  </StoryThemeWrapper>
);

function StoryThemeWrapper({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<string>("light");
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem={false}
      themes={["light", "dark"]}
      forcedTheme={theme}
    >
      <div className="bg-background flex min-h-screen w-full flex-col items-center justify-start py-8 transition-colors dark:bg-[#18181b]">
        <div className="mb-4 flex gap-2">
          <Button
            variant={theme === "light" ? "default" : "outline"}
            onClick={() => setTheme("light")}
          >
            Light
          </Button>
          <Button
            variant={theme === "dark" ? "default" : "outline"}
            onClick={() => setTheme("dark")}
          >
            Dark
          </Button>
        </div>
        <div className="flex w-full justify-center">{children}</div>
      </div>
    </ThemeProvider>
  );
}
