"use client";

import "./index.scss";

export const ModalDivider = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children } = props;
  return <div className="modal-divider-container">{children}</div>;
};

export const LeftSideUpPart = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children } = props;
  return <div className="modal-divider-left-side">{children}</div>;
};

export interface RightSideDownPartProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  header: string;
}

export const RightSideDownPart = (props: RightSideDownPartProps) => {
  const { children, header } = props;
  return (
    <>
      <div>
        <label style={{ fontWeight: "bold" }}>{header}</label>
        <div className="modal-divider-right">{children}</div>
      </div>
    </>
  );
};

export const Divider = (
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >
) => {
  const { children } = props;
  return <div className="modal-divider-line"></div>;
};

export default ModalDivider;
