import React, { useEffect, useState } from "react";
import { FaChevronDown, FaBars } from "react-icons/fa";
import { useOutsideComponentClicker } from "./hooks";
import { NavigationBarProps } from "./types";
import { NavAreaUpdated } from "./nav-area-updated";
import { SideNav } from "./side-nav";
import { SubAcc } from "./sub-acc";
import { payplusAssets } from "../../../config/images";
import "./navigation-bar.scss";
import { ModeToggle } from "../mode-toggle";
import { ContentMargin } from "../../layout/ContentMargin/content-margin";
import { Avatar, AvatarFallback, AvatarImage } from "../avatar";

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

    // Check initial dark mode state
    const checkDarkMode = () => {
      // First check if theme is explicitly set via classes (highest priority)
      const hasLightClass =
        document.documentElement.classList.contains("light") ||
        document.body.classList.contains("light");
      const hasDarkClass =
        document.documentElement.classList.contains("dark") ||
        document.body.classList.contains("dark");

      // If explicit theme is set, use that
      if (hasLightClass) {
        setDarkMode(false);
        return;
      }
      if (hasDarkClass) {
        setDarkMode(true);
        return;
      }

      // Only fallback to system preference if no explicit theme is set
      const systemPrefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(systemPrefersDark);
    };

    // Check initial state
    checkDarkMode();

    // Create observer for class changes
    const observer = new MutationObserver(() => {
      checkDarkMode();
    });

    // Observe changes to html and body class attributes
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ["class"],
    });

    // Listen for theme changes via media query
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const mediaListener = () => checkDarkMode();
    mediaQuery.addEventListener("change", mediaListener);

    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener("change", mediaListener);
    };
  }, []);

  return (
    <ContentMargin>
      <nav className={"!z-50 flex w-full justify-center " + (className || "")}>
        <div className="flex min-h-16 w-screen items-center justify-between">
          <div className="logo-container">
            <img
              className="image-on-nav"
              src={darkMode && logo.darkMode ? logo.darkMode : logo.src}
              alt={logo.alt}
              loading="eager"
            />
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
          {/* {!user?.data.isAdmin && (
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
          )} */}

          {/* Account Area */}
          <div className="account-wrapper !z-40">
            <div className="account-area">
              <div className="account-dp-container">
                <Avatar>
                  <AvatarImage src={""} />
                  <AvatarFallback>
                    {user?.data.name?.charAt(0) || "U"}
                  </AvatarFallback>
                </Avatar>
              </div>
              <FaChevronDown size="0.75rem" />
            </div>
            <SubAcc isAdmin={isAdmin} />
          </div>

          {/* Dark Mode Toggle */}
          <ModeToggle />
        </div>

        {/* Mobile Side Navigation */}
        {selectedHamburger && (
          <SideNav routes={routes} permissions={permissions} />
        )}
      </nav>
    </ContentMargin>
  );
};
