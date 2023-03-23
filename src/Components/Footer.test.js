import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('simple footer text renders correctly', () => {
  render(<Footer />);
  expect(screen.getByText(/This platform is brought to you by CJ Duckett ©/i)).toBeInTheDocument();
});