import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';
import App from '../App';

describe('Basic UI Tests', () => {
  // Check that the home page has an H1 containing "Frontend Developer"
  it('should display an H1 tag containing "Frontend Developer" on the home page', () => {
    render(
      // Simulate visiting home page
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Frontend Developer/i);
  });

  // Check that the Contact page has an H1 containing "Contact me"
  it('should display an H1 tag containing "Contact me" on the contact page', () => {
    render(
      // Simulate visiting /contact
      <MemoryRouter initialEntries={['/contact']}>
        <App />
      </MemoryRouter>
    );

    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Contact me/i);
  });
});
