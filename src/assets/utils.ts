import { messagePreviewMaxLength } from './constants';

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

export { messageSummary };
