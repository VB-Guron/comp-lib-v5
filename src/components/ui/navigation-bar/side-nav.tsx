import React, { useRef, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useOutsideComponentClicker } from "./hooks";
import { SideNavProps, NavRoute } from "./types";

export const SideNav = (props: SideNavProps) => {
  const { routes, permissions = [] } = props;
  const [selected, setSelected] = useState(-1);
  const ref = useRef(null);

  useOutsideComponentClicker({
    ref,
    onClickedOutside: () => {
      setSelected(() => -1);
    },
  });

  const showSubRoute = (routes: NavRoute[]): boolean => {
    return true; // Simplified for component library
  };

  return (
    <div className="side-nav-filter" id="SideNavFilter">
      <div ref={ref} className="side-nav" id="SideArea">
        {routes.map(({ label, image, to, permissionId, subnav }, i) => {
          if (true) { // Simplified permission check
            if (subnav && !showSubRoute(subnav)) return null;

            return (
              <div key={i} style={{ display: "flex", flexDirection: "column" }}>
                <SideNavLink
                  key={i}
                  selected={selected === i}
                  to={to}
                  image={image || ""}
                  label={label}
                  onSelect={() => setSelected((prev) => (prev === i ? -1 : i))}
                  unselect={() => setSelected(() => -1)}
                />
                {selected === i && subnav && (
                  <SideSubNav routes={subnav} permissions={permissions} />
                )}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

const SideNavLink = ({
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
      className={selected ? "side-nav-item-container-active" : "side-nav-item-container"}
      href={to}
      onClick={(e) => {
        if (to) {
          e.preventDefault();
          alert(`Navigating to: ${to}`);
          return;
        }
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

const SideSubNav = ({
  routes,
  permissions = [],
}: {
  routes?: NavRoute[];
  permissions: number[];
}) => {
  const [selected, setSelected] = useState(-1);

  if (!routes || routes.length === 0) return null;

  return (
    <div className="side-sub-nav">
      {routes.map(({ label, to, subnav, permissionId }, i) => {
        if (subnav) {
          return (
            <div key={i} className={selected === i ? "side-sub-sub-container-selected" : "side-sub-sub-container"}>
              <div
                className="side-sub-sub-nav-heading-link"
                onClick={() => setSelected(prev => prev === i ? -1 : i)}
              >
                <span className="side-sub-nav-heading">{label}</span>
                <FaAngleRight />
              </div>
              {selected === i && (
                <div className="side-sub-sub-links-container">
                  {subnav.map(({ label, to, permissionId }, y) => {
                    if (true) { // Simplified permission check
                      return (
                        <a
                          href={to}
                          key={y}
                          onClick={(e) => {
                            e.preventDefault();
                            alert(`Navigating to: ${to}`);
                          }}
                        >
                          {label}
                        </a>
                      );
                    }
                  })}
                </div>
              )}
            </div>
          );
        } else {
          return (
            <a
              href={to}
              key={i}
              className="side-sub-nav-heading-link"
            >
              <span className="side-sub-nav-heading">{label}</span>
            </a>
          );
        }
      })}
    </div>
  );
};