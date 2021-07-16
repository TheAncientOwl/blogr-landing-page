import styled from 'styled-components';
import Logo from './Logo';
import NavLinks from './nav-links';
import Register from './register';

const Container = styled.nav``;

export default function Nav() {
  return (
    <Container>
      <Logo />
      <NavLinks />
      <Register />
    </Container>
  );
}
