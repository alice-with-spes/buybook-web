import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from '../routes';

describe('Page - /about', () => {
  it('renders title', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/about'],
    });

    render(<RouterProvider router={router} />);

    screen.getByText(/About BuyBook/);
  });
});
