import styled from 'styled-components';
import Link from './link';

const Container = styled.div``;

export default function NavLinks() {
  return (
    <Container>
      <Link title='product' links={[]} />
      <Link title='company' links={[]} />
      <Link title='connect' links={[]} />
    </Container>
  );
}
