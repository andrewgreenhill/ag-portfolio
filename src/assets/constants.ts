const transitionDuration: number = 0.25;
const messagePreviewMaxLength: number = 33;
const REACT_QUERY_STALE_TIME = 1000 * 60 * 5; // 5 minutes

// Shared CSS classes, for light/dark mode theming

// Base reusable color classes
const baseTextColourClasses = 'text-black dark:text-white';
const baseBackgroundColourClasses = 'bg-white dark:bg-gray-800';
const primaryGreenColourClasses = 'text-green-600 dark:text-green-400';
const hoverGreenColourClasses = 'hover:text-green-500 dark:hover:text-green-300';

// Navigation and links
const hyperlinkClasses =
  'text-green-600 hover:underline dark:text-green-400 dark:hover:text-green-300';
const navBarColourClasses = 'bg-white text-black dark:text-white dark:bg-gray-900';
const linkActiveColourClasses = primaryGreenColourClasses;
const brandColourClasses = primaryGreenColourClasses;
const linkHoverColourClasses = hoverGreenColourClasses;

// UI components
const dropdownColourClasses =
  'text-black bg-white border-gray-300 dark:text-white dark:bg-gray-800 dark:border-gray-600';
// const buttonColourClasses = 'bg-white border-black dark:bg-gray-800 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white hover:border-black dark:hover:border-white';
const buttonColourClasses = 'bg-white dark:bg-gray-800';
const hamburgerButtonColourClasses = 'focus:outline-none focus:ring-0';
const tooltipColourClasses = 'text-white bg-gray-800 dark:text-black dark:bg-gray-200';
const homeButtonColourClasses =
  'text-black hover:text-green-600 dark:text-white dark:hover:text-green-400';

// Layout and structure
const iconColourClasses = baseTextColourClasses;
const bodyTextColourClasses = baseTextColourClasses;
const footerColourClasses = 'text-black bg-white dark:text-white dark:bg-gray-900';
const cardColourClasses = `${baseTextColourClasses} ${baseBackgroundColourClasses}`;
const mainBackgroundColourClasses =
  'text-gray-900 dark:text-gray-100 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800';

// Content and text
const socialIconColourClasses = hoverGreenColourClasses;
const aboutSectionColourClasses = 'text-gray-700 dark:text-gray-300';
const headingColourClasses = 'text-gray-800 dark:text-gray-200';
const helpTextColourClasses = 'text-gray-500 dark:text-gray-400';
const mutedTextColourClasses = 'text-gray-600 dark:text-gray-400';

// Forms and messages
const formFieldColourClasses = 'text-black bg-white dark:text-white dark:bg-gray-800';
const formContainerColourClasses = baseBackgroundColourClasses;
const successMessageColourClasses = primaryGreenColourClasses;
const errorMessageClasses = 'text-red-500 dark:text-red-400 text-sm';
const submitButtonColourClasses = 'bg-transparent border';
const submitButtonHoverColourClasses = 'text-green-500 dark:text-green-400';
const submitButtonErrorColourClasses = 'text-gray-800 dark:text-gray-300';
const formErrorColourClasses = 'text-red-500 dark:text-red-400';

// Color values for Framer Motion (these need to be actual color values, not CSS classes)
const submitButtonHoverColourValue = '#10b981'; // green-500
const submitButtonErrorColourValue = '#1f2937'; // gray-800
const submitButtonHoverColourValueDark = '#34d399'; // green-400
const submitButtonErrorColourValueDark = '#d1d5db'; // gray-300

// Project display
const projectImageClasses = 'border-2 border-gray-300 dark:border-gray-600 p-1 w-full';
const projectImageDarkStyleColourClasses = '#444';
const projectImageLightBackgroundColourClasses = '#f7fafc';

export {
  transitionDuration,
  messagePreviewMaxLength,
  REACT_QUERY_STALE_TIME,
  // Navigation and links
  hyperlinkClasses,
  navBarColourClasses,
  linkActiveColourClasses,
  linkHoverColourClasses,
  brandColourClasses,
  // UI components
  dropdownColourClasses,
  buttonColourClasses,
  hamburgerButtonColourClasses,
  tooltipColourClasses,
  homeButtonColourClasses,
  // Layout and structure
  iconColourClasses,
  bodyTextColourClasses,
  footerColourClasses,
  cardColourClasses,
  mainBackgroundColourClasses,
  // Content and text
  socialIconColourClasses,
  aboutSectionColourClasses,
  headingColourClasses,
  helpTextColourClasses,
  mutedTextColourClasses,
  // Forms and messages
  formFieldColourClasses,
  formContainerColourClasses,
  successMessageColourClasses,
  errorMessageClasses,
  submitButtonColourClasses,
  submitButtonHoverColourClasses,
  submitButtonErrorColourClasses,
  submitButtonHoverColourValue,
  submitButtonErrorColourValue,
  submitButtonHoverColourValueDark,
  submitButtonErrorColourValueDark,
  formErrorColourClasses,
  // Project display
  projectImageClasses,
  projectImageDarkStyleColourClasses,
  projectImageLightBackgroundColourClasses,
};
