/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "./index.scss";

const FlexiRowMatrixLeftAlign = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { title, children, ...rest } = props;

  return (
    <>
      <div style={{}}>
        <div className="layout-flexi-matrix-left-title">{title}</div>
        <div className="layout-flexi-row-matrix-left-align" {...rest}>
          {children}
        </div>
      </div>
    </>
  );
};

export default FlexiRowMatrixLeftAlign;
