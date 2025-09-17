import React from "react";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormField,
  FormMessage,
} from "../components/ui/form";
import { Label } from "../components/ui/label";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

const FormExample = () => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { name: "" },
  });

  function onSubmit(values: { name: string }) {
    // For Storybook, just log to the actions panel
    // eslint-disable-next-line no-console
    console.log("Form values:", values);
  }

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "2rem auto",
        padding: 16,
        border: "1px solid #eee",
        borderRadius: 8,
      }}
    >
      <h3 style={{ fontWeight: 600, marginBottom: 16 }}>Form Example</h3>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <input
                    {...field}
                    placeholder="Enter your name"
                    style={{
                      width: "100%",
                      padding: 8,
                      borderRadius: 4,
                      border: "1px solid #ccc",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <button
            type="submit"
            style={{
              marginTop: 16,
              padding: "8px 16px",
              borderRadius: 4,
              background: "#222",
              color: "#fff",
            }}
          >
            Submit
          </button>
        </form>
      </Form>
      <div style={{ marginTop: 24 }}>
        <Label>Standalone Label Example</Label>
        <input
          placeholder="Just a label"
          style={{
            width: "100%",
            padding: 8,
            borderRadius: 4,
            border: "1px solid #ccc",
            marginTop: 4,
          }}
        />
      </div>
    </div>
  );
};

export default {
  title: "UI/Form",
  component: FormExample,
  tags: ["autodocs"],
};

export const Demo = {
  render: () => <FormExample />,
};
