const transitionDuration: number = 0.25;
const messagePreviewMaxLength: number = 33;

// Shared CSS classes
const hyperlinkClasses = 'text-green-600 hover:underline';
const errorMessageClasses = 'text-red-500 text-sm';

const REACT_QUERY_STALE_TIME = 60000 * 10; // 10 minutes

export {
  transitionDuration,
  messagePreviewMaxLength,
  hyperlinkClasses,
  errorMessageClasses,
  REACT_QUERY_STALE_TIME,
};
