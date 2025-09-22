/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";
import "./index.scss";

export interface StepsMakerProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  data?: string[];
  handleStepChange?: () => void;
  stepValue?: number;
}

const StepsMaker = (props: StepsMakerProps) => {
  const { data = [], stepValue = 0 } = props;

  return (
    <div className="steps-maker-row">
      <hr
        style={data.length > 6 ? { width: "90%" } : { width: "80%" }}
        className="steps-maker-line"
      />

      <hr
        className="steps-maker-loadline"
        style={{ width: `${((stepValue + 1) / data.length) * 100}%` }}
      />
      {data.map((x, i) => {
        return (
          <div
            key={i}
            style={{
              width: "200px",
              justifyContent: "start",
            }}
            className={stepValue == i ? "steps-maker-column-active" : "steps-maker-column"}
          >
            <div
              className={`${
                stepValue == i
                  ? "steps-maker-outer-circle-active" + ` dark:border-white`
                  : "steps-maker-outer-circle" + " dark:border-primary"
              } dark:bg-primary`}
            >
              <div
                className={`${
                  stepValue == i ? "steps-maker-inner-circle-active" : "steps-maker-inner-circle"
                } dark:border-black`}
              >
                <h1
                  className={`${
                    stepValue == i
                      ? "steps-maker-number-active" + " dark:text-white"
                      : "steps-maker-number"
                  } `}
                >
                  {i + 1}
                </h1>
              </div>
            </div>
            <div className="steps-maker-column-div">
              <p className="steps-maker-small-text">
                Step {i + 1} of {data.length}
              </p>
              <p
                style={{ textAlign: "center" }}
                className={
                  stepValue == i ? "steps-maker-label-active" + " dark:text-white" : "steps-maker-label"
                }
              >
                {data[i]}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default StepsMaker;
