import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Polyfill window.matchMedia for gsap/ScrollTrigger in the jsdom test environment
if (typeof window !== 'undefined' && !window.matchMedia) {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: (query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated but used by some libraries
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }),
  });
}
