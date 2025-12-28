import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { HashRouter, MemoryRouter } from 'react-router-dom';
import App from '../App';
import { ThemeProvider } from '../theme/ThemeContext';

describe('Basic UI Tests', () => {
  // Check that the home page has an H1 containing "Frontend Developer"
  it('should display an H1 tag containing "Frontend Developer" on the home page', () => {
    render(
      // Simulate visiting home page
      <ThemeProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ThemeProvider>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Frontend Developer/i);
  });

  // Check that the Contact page has an H1 containing "Contact me"
  it('should display an H1 tag containing "Contact me" on the contact page', async () => {
    render(
      // Simulate visiting /contact
      <ThemeProvider>
        <MemoryRouter initialEntries={['/contact']}>
          <App />
        </MemoryRouter>
      </ThemeProvider>
    );

    // SplitText is lazy-loaded, so wait for the heading to appear
    const heading = await screen.findByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Contact me/i);
  });
});
