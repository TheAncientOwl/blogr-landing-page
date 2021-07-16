import styled from 'styled-components';
import Logo from './Logo';
import NavLinks from './nav-links';
import Register from './register';

const Container = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 5em;
`;

export default function Nav() {
  return (
    <Container>
      <Logo />
      <NavLinks />
      <Register />
    </Container>
  );
}
