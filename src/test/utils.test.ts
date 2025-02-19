import { describe, it, expect } from 'vitest';
import { messageSummary, sanitizeInput, extractFileNameFromUrl } from '../assets/utils';
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

  describe('sanitizeInput', () => {
    it('should remove HTML tags from the input', () => {
      const input = '<div>Hello</div>';
      const expected = 'divHellodiv';
      expect(sanitizeInput(input)).toBe(expected);
    });

    it('should return the input unchanged if there are no HTML tags', () => {
      const input = 'No HTML tags';
      expect(sanitizeInput(input)).toBe(input);
    });

    it('should handle empty input', () => {
      const input = '';
      expect(sanitizeInput(input)).toBe(input);
    });

    it('should remove multiple HTML tags from the input', () => {
      const input = '<p>Paragraph</p><a>Link</a>';
      const expected = 'pParagraphpaLinka';
      expect(sanitizeInput(input)).toBe(expected);
    });

    it('should handle input with only HTML tags', () => {
      const input = '<>';
      const expected = '';
      expect(sanitizeInput(input)).toBe(expected);
    });
  });
});

describe('extractFileNameFromUrl', () => {
  it('should extract the file name from a URL', () => {
    const url = 'https://example.com/images/screenshot.png';
    const expected = 'screenshot.png';
    expect(extractFileNameFromUrl(url)).toBe(expected);
  });

  it('should return the last part of the URL if it has no slashes', () => {
    const url = 'https://example.com';
    const expected = 'example.com';
    expect(extractFileNameFromUrl(url)).toBe(expected);
  });

  it('should return an empty string for an empty URL', () => {
    const url = '';
    const expected = '';
    expect(extractFileNameFromUrl(url)).toBe(expected);
  });

  it('should return an empty string for a URL with only slashes', () => {
    const url = '////';
    const expected = '';
    expect(extractFileNameFromUrl(url)).toBe(expected);
  });

  it('should return the last part of the URL if it has no slashes', () => {
    const url = 'https://example.com/images/';
    const expected = '';
    expect(extractFileNameFromUrl(url)).toBe(expected);
  });
});
