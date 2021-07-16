import styled from 'styled-components';
import Nav from './nav';
import Content from './content';

import BackgroundSrc from '../../images/bg-pattern-intro.svg';
import Colors from '../../Colors';

const Container = styled.div`
  background-image: url(${BackgroundSrc}), linear-gradient(to right, hsl(13, 100%, 72%), hsl(353, 100%, 62%));
  background-size: cover;
  background-position: center;
  border: 1px solid ${Colors.backgroundGradient.intro.lightRed};
  border-bottom-left-radius: 4em;
  overflow: hidden;
  padding: 2em 0 8em 0;
`;

export default function Header() {
  return (
    <Container>
      <Nav />
      <Content />
    </Container>
  );
}
