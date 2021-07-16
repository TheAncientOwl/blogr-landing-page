import styled from 'styled-components';
import Link from './link';
import Colors from '../../../../Colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.white};
`;

export default function NavLinks() {
  return (
    <Container>
      <Link title='product' links={[]} />
      <Link title='company' links={[]} />
      <Link title='connect' links={[]} />
    </Container>
  );
}
