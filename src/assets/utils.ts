import { messagePreviewMaxLength } from './constants';

const emailAddressPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

/**
 * Truncates a message to a maximum length, and
 * changes newline characters into pipe symbols.
 * @param message The message to be abbreviated.
 * @returns The abbreviated message.
 */
function messageSummary(message: string) {
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
function sanitizeInput(input: string, removeNewlines?: boolean) {
  const processedInput = removeNewlines ? input.replace(/[\n\r]/g, '') : input;
  return processedInput.replace(/<\/?/g, '').replace(/[<>]/g, '');
}

export { emailAddressPattern, messageSummary, sanitizeInput };
