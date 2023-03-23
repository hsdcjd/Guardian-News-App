import { render, screen } from '@testing-library/react';
import FormattedDate from './FormattedDate';

test('renders todays actual date correctly', () => {
  render(<FormattedDate />);
  const expectedDateString = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  const actualDateString = screen.getByText(expectedDateString);

  expect(actualDateString).toBeInTheDocument();
});





