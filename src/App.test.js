import { render, screen } from '@testing-library/react';

test('renders learn react link', () => {
  // Component goes here
  render(< />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
