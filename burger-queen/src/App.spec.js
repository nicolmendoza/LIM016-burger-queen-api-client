import { render, screen } from '@testing-library/react';
import App from './App';

beforeEach(() => {
  window.localStorage = {
    get: (key) => {
      if (key === 'token') {
        return 'asdefasfasfafaf...'
      }
    }
  }
});

test('renders title', () => {

  render(<App />);
  const titleElem = screen.getByText(/burger queen/i);
  expect(titleElem).toBeInTheDocument();
});
