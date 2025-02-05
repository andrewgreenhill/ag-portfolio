import { describe, it, expect } from 'vitest';
import { messageSummary } from '../assets/utils';
import { messagePreviewMaxLength } from '../assets/constants';

describe('messageSummary', () => {
  it('should return the message unchanged if it is within the max length', () => {
    const message = 'Short message';
    expect(messageSummary(message)).toBe(message);
  });

  it('should truncate the message and add ellipsis if it exceeds the max length', () => {
    const message =
      'This is a very long message that exceeds the maximum length allowed for preview';
    const expected = message.substring(0, messagePreviewMaxLength - 3) + '...';
    expect(messageSummary(message)).toBe(expected);
  });

  it('should replace newline characters with pipe symbols', () => {
    const message = 'Line 1\nLine 2\nLine 3';
    const expected = 'Line 1 | Line 2 | Line 3';
    expect(messageSummary(message)).toBe(expected);
  });

  it('should trim leading and trailing whitespace', () => {
    const message = '   Trimmed message   ';
    const expected = 'Trimmed message';
    expect(messageSummary(message)).toBe(expected);
  });

  it('should handle messages with both newline characters and excessive length', () => {
    const message =
      'This is a very long message\nwith multiple lines\nthat exceeds the maximum length allowed for preview';
    const expected = 'This is a very long message | ...';
    expect(messageSummary(message)).toBe(expected);
  });
});
