import { ReactNode } from 'react';

import styled from 'styled-components';

import Header from './Header';

const Main = styled.main`
  padding: 1rem;
`;

export default function Layout({ children }: {
  children: ReactNode;
}) {
  return (
    <div>
      <Header />
      <Main>
        {children}
      </Main>
    </div>
  );
}
