import React, { useRef, useState } from "react";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { useOutsideComponentClicker } from "./hooks";
import { NavAreaProps, NavRoute } from "./types";

export const NavAreaUpdated = (props: NavAreaProps) => {
  const { routes, permissions } = props;
  const [selected, setSelected] = useState(-1);

  const ref = useRef(null);
  useOutsideComponentClicker({
    ref,
    onClickedOutside: () => {
      setSelected(() => -1);
    },
  });

  const showSubRoute = (routes: NavRoute[]): boolean => {
    return true;
    // Simplified for component library - in real implementation you'd check permissions
  };

  return (
    <div ref={ref} className="nav-area" id="navArea">
      {routes.map(({ label, image, to, permissionId, subnav }, i) => {
        if (true) { // Simplified permission check
          if (subnav) {
            if (!showSubRoute(subnav)) return null;
          }
          return (
            <div key={i}>
              <NavLink
                key={i}
                selected={selected === i}
                to={to}
                image={image || ""}
                label={label}
                onSelect={() => setSelected((prev) => (prev === i ? -1 : i))}
                unselect={() => setSelected(() => -1)}
              />
              {i === selected ? (
                <SubNav
                  routes={routes[selected]?.subnav}
                  permissions={permissions}
                />
              ) : null}
            </div>
          );
        }
      })}
    </div>
  );
};

const NavLink = ({
  selected,
  to,
  image,
  label,
  onSelect,
  unselect,
}: {
  selected: boolean;
  to?: string;
  image: string;
  label: string;
  onSelect: () => void;
  unselect: () => void;
}) => {
  return (
    <a
      className={selected ? "nav-item-container-active" : "nav-item-container"}
      href={to}
      onClick={(e) => {
        if (to) {
          // Allow normal navigation to the URL
          return;
        }
        e.preventDefault();
        onSelect();
      }}
    >
      {image && (
        <img
          src={image}
          alt="navIcon"
        />
      )}
      <span>{label}</span>
    </a>
  );
};

const SubNav = ({
  routes,
  permissions = [],
}: {
  routes?: NavRoute[];
  permissions: number[];
}) => {
  const [selected, setSelected] = useState(-1);

  const onSelect = (i: number) => {
    setSelected((prev) => (prev === i ? -1 : i));
  };

  if (!routes || routes.length === 0) return null;

  const showSubRoute = (routes: NavRoute[]): boolean => {
    return true;
  };

  return (
    <div className="subnav">
      {routes?.map(({ label, to, subnav, permissionId }, i) => {
        if (subnav) {
          if (true) { // Simplified permission check
            return (
              <div key={i} className="level1-sub-nav">
                <div className="level1-header">
                  <span>{label}</span>
                </div>
                <div className="level2-sub-nav">
                  <div className="level2-header">
                    {subnav.map(({ label, to, subnav, permissionId }, y) => {
                      if (!subnav) {
                        if (true) {
                          return (
                            <a
                              href={to}
                              key={y}
                            >
                              <span>{label}</span>
                            </a>
                          );
                        }
                      } else if (subnav) {
                        if (!showSubRoute(subnav)) return null;
                        return (
                          <div
                            key={y}
                            onClick={() => onSelect(y)}
                            className="level3-container"
                          >
                            <div
                              className={
                                selected === y
                                  ? "level3-header-shown"
                                  : "level3-header"
                              }
                            >
                              <span>{label}</span>
                              {selected === y ? (
                                <FaAngleDown />
                              ) : (
                                <FaAngleLeft />
                              )}
                            </div>
                            <div
                              className={
                                selected === y
                                  ? "level3-content-shown"
                                  : "level3-content"
                              }
                            >
                              <div>
                                {subnav.map(
                                  ({ label, to, permissionId }, z) => {
                                    if (true) {
                                      return (
                                        <a
                                          href={to}
                                          key={z}
                                        >
                                          <span>{label} </span>
                                        </a>
                                      );
                                    }
                                  }
                                )}
                              </div>
                            </div>
                          </div>
                        );
                      }
                    })}

                    <div className="arrow-container">
                      <div className="arrow-right"></div>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        } else {
          return (
            <a href={to} key={i} className="level1-sub-nav">
              <span>{label}</span>
            </a>
          );
        }
      })}
    </div>
  );
};