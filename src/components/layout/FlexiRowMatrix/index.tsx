/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "./index.scss";

const FlexiRowMatrix = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { title, children, ...rest } = props;

  return (
    <>
      <div style={{}}>
        <div className="layout-flexi-matrix-title">{title}</div>
        <div className="layout-flexi-row-matrix" {...rest}>
          {children}
        </div>
      </div>
    </>
  );
};

export default FlexiRowMatrix;
