/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "./index.scss";

const FieldFlexRow = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className="layout-flex-field-row" {...rest}>
      {children}
    </div>
  );
};

export default FieldFlexRow;
