import { render, screen } from '@testing-library/react';

import { createMemoryRouter, RouterProvider } from 'react-router-dom';

import routes from '../routes';

describe('Page - /', () => {
  it('renders greeting', () => {
    const router = createMemoryRouter(routes, {
      initialEntries: ['/'],
    });

    render(<RouterProvider router={router} />);

    screen.getByText(/Hello/);
  });
});
