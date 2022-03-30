import { render, screen } from '@testing-library/react';
import Inicio from './components/Inicio/Inicio';

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

  render(<Inicio />);
  const titleElem = screen.getByText(/Bienvenidos a Burger House/i);
  expect(titleElem).toBeInTheDocument();
});
