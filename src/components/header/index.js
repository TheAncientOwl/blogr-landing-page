import styled from 'styled-components';
import Nav from './nav';
import Content from './content';

const Container = styled.div``;

export default function Header() {
  return (
    <Container>
      <Nav />
      <Content />
    </Container>
  );
}
