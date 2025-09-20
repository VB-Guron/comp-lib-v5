import React from "react";
import { Combobox } from "../components/ui/combobox";
import { ThemeProvider } from "../components/theme-provider";
import { ModeToggle } from "../components/ui/mode-toggle";

export default {
  title: "Components/Combobox/FieldsetVariant",
  component: Combobox,
};

export const FieldsetCombobox = () => {
  const options = [
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "svelte", label: "Svelte" },
    { value: "angular", label: "Angular" },
  ];
  const [value, setValue] = React.useState("");
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="bg-background mx-auto mt-10 max-w-xs border p-6 transition-colors">
        <div className="mb-4 flex justify-end">
          <ModeToggle />
        </div>
        <Combobox
          label="Framework"
          fieldsetColorVariant="default"
          options={options}
          value={value}
          onChange={setValue}
          placeholder="Select a framework..."
        />
      </div>
    </ThemeProvider>
  );
};
