export const images = {
  // PayPlus logos
  logo: `/images/logo.png`,
  logoDarkMode: `/images/logo_darkmode.png`,

  // Background images
  loginBackground: `/images/loginBackground.png`,
  notFoundBackground: `/images/notFoundBackground.png`,
  unauthorizedBackground: `/images/unauthorizedBackground.png`,

  // Notification icons
  notif_default: "/images/notif_default.svg",
  notif_error: "/images/notif_error.svg",
  notif_success: "/images/notif_success.svg",

  // Navigation icons
  home: "/icons/home.svg",
  file: "/icons/file.svg",
  payroll: "/icons/payroll.svg",
  timekeeping: "/icons/timekeeping.svg",
  assets: "/icons/assets.svg",
  system: "/icons/system.svg",
  birthday: "/icons/cupcake.svg",
};

// PayPlus specific asset configuration for NavigationBar
export const payplusAssets = {
  logo: {
    src: images.logo,
    darkMode: images.logoDarkMode,
    alt: "PayPlus Logo"
  }
};

// Navigation icons collection for easy access
export const navigationIcons = {
  home: images.home,
  file: images.file,
  payroll: images.payroll,
  timekeeping: images.timekeeping,
  assets: images.assets,
  system: images.system,
  birthday: images.birthday,
};