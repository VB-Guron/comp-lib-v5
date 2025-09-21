// PayPlus logo assets for component library
import payplusLogo from './images/payplus-logo.png';
import payplusLogoDark from './images/payplus-logo-dark.png';

// Navigation icons
import homeIcon from './icons/home.svg';
import fileIcon from './icons/file.svg';
import payrollIcon from './icons/payroll.svg';
import timekeepingIcon from './icons/timekeeping.svg';
import assetsIcon from './icons/assets.svg';
import systemIcon from './icons/system.svg';
import birthdayIcon from './icons/cupcake.svg';

export const payplusAssets = {
  logo: {
    src: payplusLogo,
    darkMode: payplusLogoDark,
    alt: "PayPlus Logo"
  }
};

// Navigation icons collection
export const navigationIcons = {
  home: homeIcon,
  file: fileIcon,
  payroll: payrollIcon,
  timekeeping: timekeepingIcon,
  assets: assetsIcon,
  system: systemIcon,
  birthday: birthdayIcon,
};

// Export individual images if needed
export { default as payplusLogo } from './images/payplus-logo.png';
export { default as payplusLogoDark } from './images/payplus-logo-dark.png';

// Export individual icons
export { default as homeIcon } from './icons/home.svg';
export { default as fileIcon } from './icons/file.svg';
export { default as payrollIcon } from './icons/payroll.svg';
export { default as timekeepingIcon } from './icons/timekeeping.svg';
export { default as assetsIcon } from './icons/assets.svg';
export { default as systemIcon } from './icons/system.svg';
export { default as birthdayIcon } from './icons/cupcake.svg';