import React from "react";
import { Combobox } from "../components/ui/combobox";

export default {
  title: "Components/Combobox/AsyncFieldsetVariant",
};

type Option = { value: string; label: string };

// Default: local search (static options)
export const FieldsetComboboxLocal = () => {
  const options: Option[] = [
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "orange", label: "Orange" },
    { value: "grape", label: "Grape" },
    { value: "mango", label: "Mango" },
  ];
  const [value, setValue] = React.useState("");
  return (
    <Combobox
      variant="fieldset"
      label="Local Search"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Type to search..."
    />
  );
};

// Variant: async search (URL) using Combobox
export const FieldsetComboboxAsync = () => {
  const [value, setValue] = React.useState("");
  return (
    <Combobox
      variant="fieldset"
      label="Async Search"
      value={value}
      onChange={setValue}
      placeholder="Type to search..."
      searchUrl="https://api.example.com/search"
    />
  );
};

// Story: Many options (simulate a large result set)
export const ManyOptionsFieldsetCombobox = () => {
  const options: Option[] = Array.from({ length: 120 }, (_, i) => ({
    value: `option-${i + 1}`,
    label: `Option ${i + 1}`,
  }));
  const [value, setValue] = React.useState("");
  return (
    <Combobox
      variant="fieldset"
      label="Many Options"
      options={options}
      value={value}
      onChange={setValue}
      placeholder="Type to search..."
     
      // ...no need for dropdownProps or inputProps, now handled by default...
    />
  );
};

ManyOptionsFieldsetCombobox.storyName = "Many Options Fieldset Combobox";
