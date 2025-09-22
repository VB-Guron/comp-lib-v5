/* eslint-disable @next/next/no-img-element */
import React, { Suspense } from "react";
import "./footer.scss";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import { FooterProps } from "./types";

// Default values matching PayPlus footer
const defaultFooterProps: Required<FooterProps> = {
  company: {
    name: "LUCID IT SOLUTIONS",
    description:
      "LUCID IT SOLUTIONS is an IT Business Consulting Firm with a goal of providing the right end-to-end business solution to our clients.",
    learnMoreUrl: "https://luciditsolutions.com/",
    learnMoreText: "Learn more...",
  },
  links: [
    { label: "Terms of Services", url: "#" },
    { label: "Privacy Policy", url: "#" },
    { label: "BIR WIthholding Tax", url: "#" },
    { label: "Social Security System", url: "#" },
    { label: "Phil Health", url: "#" },
  ],
  contact: {
    email: "info@luciditsolution.com",
    phone: "+632 8571 2262",
  },
  socialMedia: [
    { platform: "facebook", url: "#", icon: <FaFacebookF fill="white" /> },
    { platform: "twitter", url: "#", icon: <FaTwitter fill="white" /> },
    { platform: "linkedin", url: "#", icon: <FaLinkedinIn fill="white" /> },
  ],
  copyright: {
    year: 2017,
    productName: "PAYplusESS",
    version: "7.2.086",
    designedBy: "LUCID I.T. SOLUTIONS",
    designedByUrl: "https://luciditsolutions.com/",
  },
  className: "",
};

const Footer = (props: FooterProps = {}) => {
  const {
    company = defaultFooterProps.company,
    links = defaultFooterProps.links,
    contact = defaultFooterProps.contact,
    socialMedia = defaultFooterProps.socialMedia,
    copyright = defaultFooterProps.copyright,
    className = "",
  } = props;

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case "facebook":
        return <FaFacebookF fill="white" />;
      case "twitter":
        return <FaTwitter fill="white" />;
      case "linkedin":
        return <FaLinkedinIn fill="white" />;
      default:
        return null;
    }
  };

  return (
    <Suspense fallback={<></>}>
      <footer className={`bg-[#EEEEEE50] dark:bg-[#031922] ${className}`}>
        {/* About the Provider Section */}
        <div className="container" style={{ flex: "2" }}>
          <span className="dark:text-foreground">ABOUT THE PROVIDER</span>
          <span className={`about-text dark:text-accent-foreground`}>
            {company.description}
          </span>
          {company.learnMoreUrl && (
            <a
              href={company.learnMoreUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {company.learnMoreText || "Learn more..."}
            </a>
          )}
        </div>

        {/* Links Section */}
        <div className="container">
          <span className="dark:text-foreground">LINKS</span>
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target={link.target || "_self"}
              rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Contact Section */}
        <div className="container" style={{ flex: "1.2" }}>
          <span className="dark:text-foreground">GET IN TOUCH</span>
          <span className={`dark:text-accent-foreground`}>
            For concerns or issues, contact us at
          </span>
          <div className="icon-then-text">
            <FaEnvelope />
            <span className="dark:text-foreground">{contact.email}</span>
          </div>
          <div className="icon-then-text">
            <FaPhoneAlt />
            <span className="dark:text-foreground">{contact.phone}</span>
          </div>
          <div
            className="button-container"
            style={{ justifyContent: "flex-start" }}
          >
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="icon-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit our ${social.platform} page`}
              >
                {social.icon || getSocialIcon(social.platform)}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright Section */}
        <div className="address" style={{ flex: "1.3" }}>
          <span className={`dark:text-accent-foreground`}>
            © {copyright.year} {copyright.productName}. All Rights Reserved.
          </span>
          <span className={`dark:text-accent-foreground`}>
            Version {copyright.version}
          </span>
          <span className={`dark:text-accent-foreground`}>
            Designed by{" "}
            {copyright.designedByUrl ? (
              <a
                href={copyright.designedByUrl}
                className="text-secondary dark:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "inline", fontWeight: "bold" }}
              >
                {copyright.designedBy}
              </a>
            ) : (
              <span
                className="text-secondary dark:text-foreground"
                style={{ display: "inline", fontWeight: "bold" }}
              >
                {copyright.designedBy}
              </span>
            )}
          </span>
        </div>
      </footer>
    </Suspense>
  );
};

export default Footer;
