/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "./index.scss";

const FlexRow = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children, ...rest } = props;

  return (
    <div className="layout-flex-row" {...rest}>
      {children}
    </div>
  );
};

export default FlexRow;
