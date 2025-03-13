import { messagePreviewMaxLength } from './constants';

// Regular expression pattern to validate email addresses
const emailAddressPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Truncates a message to a maximum length, and
 * changes newline characters into pipe symbols.
 * @param message The message to be abbreviated.
 * @returns The abbreviated message.
 */
function messageSummary(message: string): string {
  message = message.trim().replace(/\n/g, ' | ');
  if (message.length <= messagePreviewMaxLength) return message;
  return message.substring(0, messagePreviewMaxLength - 3) + '...';
}

/**
 * Sanitizes input data by removing HTML tags,
 * first the 2-character pair "</" and then "<" and ">" characters.
 * @param input The input data to be sanitized.
 * @param removeNewlines Optional. If true then also remove new line chars \n and \r.
 * @returns The sanitized data.
 */
function sanitizeInput(input: string, removeNewlines?: boolean): string {
  if (input == null) return '';
  const processedInput = removeNewlines ? input.replace(/[\n\r]/g, '') : input;
  return processedInput.replace(/<\/?/g, '').replace(/[<>]/g, '');
}

/**
 * Extracts the file name from the end of a URL to an image.
 * @param url The URL string from which to extract the file name.
 * @returns The extracted file name.
 */
function extractFileNameFromUrl(url: string): string {
  const urlParts = url.split('/');
  return urlParts[urlParts.length - 1];
}

function scrollToTop(): void {
  window.scrollTo({ top: 0, behavior: 'auto' });
}

export { emailAddressPattern, messageSummary, sanitizeInput, extractFileNameFromUrl, scrollToTop };
