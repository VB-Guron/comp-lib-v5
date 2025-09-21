import React from "react";
import { Search, SearchOption } from "../components/ui/search";

export default {
  title: "Components/Search",
  component: Search,
};

const options: SearchOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "orange", label: "Orange" },
  { value: "grape", label: "Grape" },
  { value: "mango", label: "Mango" },
];

export const Basic = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="mx-auto mt-10 max-w-xs">
      <Search
        value={value}
        onChange={setValue}
        options={options}
        placeholder="Search fruits..."
        label="Fruit"
      />
      <div className="mt-4 text-sm">Selected: {value}</div>
    </div>
  );
};

export const ServerSearch = () => {
  const [value, setValue] = React.useState("");
  return (
    <div className="mx-auto mt-10 max-w-xs">
      <Search
        value={value}
        onChange={setValue}
        searchUrl="https://api.example.com/search"
        placeholder="Search server fruits..."
        label="Fruit (Server)"
      />
      <div className="mt-4 text-sm">Selected: {value}</div>
    </div>
  );
};
