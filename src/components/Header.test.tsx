import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import Header from './Header';

describe('Header', () => {
  it('renders links', () => {
    render((
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    ));

    screen.getByRole('link', { name: /Home/ });
  });
});
