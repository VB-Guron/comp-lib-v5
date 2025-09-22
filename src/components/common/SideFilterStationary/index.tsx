import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

import "./index.scss";

export const SideFilterStationary = (props: any) => {
  const {
    header = "Filter Option",
    isOpen = true,
    toggleSideNav = () => {},
    children,
    ...rest
  } = props;

  return (
    <div
      className={`${
        isOpen ? "side-filter-stationary" : "side-filter-stationary-hidden"
      } dark:bg-primary`}
    >
      <div className="side-filter-hide-button" onClick={toggleSideNav}>
        <div className="dark:text-white">{header}</div>
        <hr className="side-filter-line" />
        {isOpen ? (
          <FaChevronCircleUp size="1.3rem" className="hiddenOnBigScreen" />
        ) : (
          <FaChevronCircleDown size="1.3rem" className="hiddenOnBigScreen" />
        )}
      </div>

      <div
        className={
          isOpen ? "side-filter-field-container" : "side-filter-field-container-hidden"
        }
      >
        {children}
      </div>
    </div>
  );
};
