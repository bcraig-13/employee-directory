import { render, screen } from '@testing-library/react';
import Employee from './Employee';

test('renders learn react link', () => {
  render(<Employee />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
