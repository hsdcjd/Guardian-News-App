import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: { response: { results: [] } } }))
}));

test('renders App without crashing', async () => {
  const axios = require('axios');
  axios.get.mockResolvedValue({ data: { response: { results: [] } } });

  render(<App />);

});