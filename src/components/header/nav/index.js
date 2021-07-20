import styled from 'styled-components';
import NavLinks from './nav-links';
import Register from './register';
import Logo from '../../Logo';

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
