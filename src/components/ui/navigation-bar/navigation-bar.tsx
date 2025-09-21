import React, { useEffect, useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { useOutsideComponentClicker } from "./hooks";
import { NavigationBarProps } from "./types";
import { NavAreaUpdated } from "./nav-area-updated";
import { SideNav } from "./side-nav";
import { SubAcc } from "./sub-acc";
import { payplusAssets } from "../../../config/images";
import "./navigation-bar.scss";

export const NavigationBar = (props: NavigationBarProps) => {
  const defaultLogo = payplusAssets.logo;

  const {
    routes,
    permissions = [],
    isAdmin = false,
    logo = defaultLogo,
    user,
    className,
  } = props;
  const [selectedHamburger, setSelectedHamburger] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Safe window check for Storybook and other environments
    if (typeof window === "undefined") return;

    const listener = () => {
      if (window.innerWidth < 1024) {
        setSelectedHamburger(false);
      }
    };

    window.addEventListener("resize", listener);

    return () => {
      window.removeEventListener("resize", listener);
    };
  }, []);

  useEffect(() => {
    // Safe document check for Storybook and other environments
    if (typeof document === "undefined") return;

    const bodyClassListener = () => {
      setDarkMode(document.body.classList.contains("dark"));
    };

    document.body.addEventListener("transitionend", bodyClassListener);

    return () => {
      document.body.removeEventListener("transitionend", bodyClassListener);
    };
  }, []);

  return (
    <nav
      className={`${className || ""}`}
      style={{
        zIndex: 50,
        width: "100vw",
        backgroundColor: "var(--background, #ffffff)",
      }}
    >
      <div className="nav-bar">
        <div className="logo-container">
          {darkMode ? (
            <>
              <img
                className="image-on-nav"
                style={{ display: "none" }}
                src={logo.darkMode}
                alt={logo.alt}
                loading="eager"
              />
            </>
          ) : (
            <img
              className="image-on-nav"
              src={logo.src}
              alt={logo.alt}
              loading="eager"
            />
          )}
        </div>

        {/* Desktop Navigation */}
        <NavAreaUpdated routes={routes} permissions={permissions} />

        {/* Mobile Hamburger */}
        <div className="hamburger-container">
          <div
            className={selectedHamburger ? "hamburger-selected" : "hamburger"}
            onClick={() =>
              setSelectedHamburger((prev) => {
                return !prev;
              })
            }
          >
            <FaBars />
          </div>
        </div>

        {/* Calendar Logo - Only for non-admin users */}
        {!user?.data.isAdmin && (
          <div
            style={{
              width: "2rem",
              height: "2rem",
              borderRadius: "4px",
              backgroundColor: "rgba(0, 102, 204, 0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            📅
          </div>
        )}

        {/* Account Area */}
        <div className="account-wrapper">
          <div className="account-area">
            <div className="account-dp-container">
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {user?.data.name?.charAt(0) || "U"}
              </div>
            </div>
            <FaChevronDown size="0.75rem" />
          </div>
          <SubAcc isAdmin={isAdmin} />
        </div>

        {/* Dark Mode Toggle */}
        <div
          style={{
            width: "2rem",
            height: "2rem",
            borderRadius: "4px",
            backgroundColor: "rgba(0, 102, 204, 0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
        >
          🌙
        </div>
      </div>

      {/* Mobile Side Navigation */}
      {selectedHamburger && (
        <SideNav routes={routes} permissions={permissions} />
      )}
    </nav>
  );
};
