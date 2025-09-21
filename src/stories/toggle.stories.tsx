import React, { useState } from "react";
import { Toggle } from "../components/ui/toggle";

export default {
  title: "Components/Toggle",
  component: Toggle,
};

export const ToggleDemo = () => {
  const [toggle1, setToggle1] = useState(false);
  const [toggle2, setToggle2] = useState(true);
  const [toggle3, setToggle3] = useState(false);

  return (
    <div className="min-h-screen space-y-6 bg-gray-50 p-8">
      <h1 className="text-2xl font-bold text-gray-800">
        Toggle Component Demo
      </h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Toggle
            checked={toggle1}
            onChange={(e) => setToggle1(e.target.value)}
            name="toggle1"
            legend="Normal Toggle"
          />
          <span className="mt-2 block text-sm text-gray-600">
            Value: {toggle1.toString()}
          </span>
        </div>
        <div>
          <Toggle
            checked={toggle2}
            onChange={(e) => setToggle2(e.target.value)}
            name="toggle2"
            checkedValue="ON"
            notCheckedValue="OFF"
            legend="Custom Labels"
          />
          <span className="mt-2 block text-sm text-gray-600">
            Value: {toggle2.toString()}
          </span>
        </div>
        <div>
          <Toggle
            checked={toggle3}
            disabled={true}
            name="toggle3"
            legend="Disabled"
          />
          <span className="mt-2 block text-sm text-gray-600">
            Value: {toggle3.toString()}
          </span>
        </div>
        <div>
          <Toggle
            checked={true}
            disabled={true}
            name="toggle4"
            checkedValue="ACTIVE"
            notCheckedValue="INACTIVE"
            legend="Custom + Disabled"
          />
        </div>
        <div>
          <Toggle
            checked={toggle1}
            onChange={(e) => setToggle1(e.target.value)}
            name="toggle5"
            legend="Primary Color"
            fieldsetColorVariant="primary"
          />
        </div>
      </div>
      <div className="mt-8 rounded-lg bg-white p-4 shadow">
        <h2 className="mb-2 text-lg font-semibold">Features:</h2>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>• Smooth 500ms transition animation</li>
          <li>• Customizable labels for checked/unchecked states</li>
          <li>• Disabled state support</li>
          <li>• Click handlers for both sides</li>
          <li>• Controlled component pattern</li>
          <li>• Fully responsive design</li>
        </ul>
      </div>
    </div>
  );
};
