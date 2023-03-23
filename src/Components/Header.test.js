import { render, screen } from '@testing-library/react';
import Header from './Header';

test('subheading renders correctly', () => {
  render(<Header />);
  expect(screen.getByText(/Your Daily Guardian News Summary:/i)).toBeInTheDocument();
});

