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
    return (
      routes.filter((p) => {
        if (p.subnav) return showSubRoute(p.subnav);

        if (p.permissionId) return permissions.includes(p.permissionId);
        else return true;
      })[0] !== undefined
    );
  };

  return (
    <div className="side-nav-filter" id="SideNavFilter">
      <div ref={ref} className="side-nav" id="SideArea">
        {routes.map(({ label, image, to, permissionId, subnav }, i) => {
          if (!permissionId || permissions.find((p) => p === permissionId)) {
            // Simplified permission check
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
      className={
        selected ? "side-nav-item-container-active" : "side-nav-item-container"
      }
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
      {image && <img src={image} alt="navIcon" />}
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
  const [selectedSubSideNav, setSelectedSubSideNav] = useState(-1);

  const ref = useRef(null);
  useOutsideComponentClicker({
    ref,
    onClickedOutside: () => {
      setSelectedSubSideNav(() => -1);
    },
  });

  if (!routes?.length) return null;

  const showSubRoute = (routes: NavRoute[]): boolean => {
    return (
      routes.filter((p) => {
        if (p.subnav) return showSubRoute(p.subnav);

        if (p.permissionId) return permissions.includes(p.permissionId);
        else return true;
      })[0] !== undefined
    );
  };

  return (
    <div className="side-sub-nav">
      {routes.map(({ label, to, subnav, permissionId }, i) => {
        if (subnav) {
          if (!showSubRoute(subnav)) return null;

          if (!permissionId || permissions.find((p) => p === permissionId))
            return (
              <div key={i}>
                <div className="side-sub-sub-nav-container">
                  <div className="side-sub-nav-heading">{label}</div>
                  <div className="side-sub-navs">
                    {subnav.map(({ label, to, subnav, permissionId }, y) => {
                      if (!subnav) {
                        if (
                          !permissionId ||
                          permissions.find((p) => p === permissionId)
                        )
                          return (
                            <a
                              href={to}
                              key={y}
                        >
                              {label}
                            </a>
                          );
                      } else {
                        if (!showSubRoute(subnav)) return null;

                        if (
                          !permissionId ||
                          permissions.find((p) => p === permissionId) ||
                          subnav.filter((p) => {
                            if (p.permissionId) {
                              if (permissions.includes(p.permissionId))
                                return p.permissionId;
                              else {
                                return true;
                              }
                            }
                          }).length !== 0
                        )
                          return (
                            <div
                              key={y}
                              ref={ref}
                              className={
                                y === selectedSubSideNav
                                  ? "side-sub-sub-container-selected"
                                  : "side-sub-sub-container"
                              }
                              onClick={() =>
                                setSelectedSubSideNav((prev) => {
                                  return y === prev ? -1 : y;
                                })
                              }
                            >
                              <a
                                href={to}
                                className="side-sub-sub-nav-heading-link"
                                onClick={(e) => {
                                  if (!to) {
                                    e.preventDefault();
                                  }
                                }}
                              >
                                <span>{label}</span>
                                <FaAngleRight />
                              </a>
                              <div className="side-sub-sub-links-container">
                                {subnav.map(
                                  ({ label, to, permissionId }, z) => {
                                    if (
                                      !permissionId ||
                                      permissions.find(
                                        (p) => p === permissionId
                                      )
                                    )
                                      return (
                                        <a
                                          href={to}
                                          key={z}
                                        >
                                          {label}
                                        </a>
                                      );
                                  }
                                )}
                              </div>
                            </div>
                          );
                      }
                    })}
                  </div>
                </div>
              </div>
            );
        }
        return (
          <a
            key={i}
            className="side-sub-nav-heading-link"
            href={to}
          >
            <span>{label}</span>
          </a>
        );
      })}
    </div>
  );
};
