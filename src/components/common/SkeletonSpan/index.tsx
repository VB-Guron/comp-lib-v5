/* eslint-disable @next/next/no-img-element */

import React from "react";
import "./index.scss";

import { skeletonSizes } from "../../../values";

export interface SkeletonSpanProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > {
  size?: typeof skeletonSizes.small | typeof skeletonSizes.medium | typeof skeletonSizes.wide;
}

const SkeletonSpan = (props: SkeletonSpanProps) => {
  const { size = skeletonSizes.wide, ...rest } = props;

  return (
    <h1 className="skeleton-span" {...rest} style={{ width: `${size}` }}>
      {""}
    </h1>
  );
};

export default SkeletonSpan;
