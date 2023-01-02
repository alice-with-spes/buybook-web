import { Link } from 'react-router-dom';

import styled from 'styled-components';

const Container = styled.header`
  padding: 1rem;
  background: #EEE;
`;

export default function Header() {
  return (
    <Container>
      <nav>
        <Link to="/">
          Home
        </Link>
        {' '}
        |
        {' '}
        <Link to="/about">
          About
        </Link>
      </nav>
    </Container>
  );
}
