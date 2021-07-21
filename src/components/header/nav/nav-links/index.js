import styled from 'styled-components';
import NavMenu from './link';
import Colors from '../../../../Colors';
import NavLinksConfig from './NavLinksConfig';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  align-items: center;
  color: ${Colors.white};
`;

const InvalidMenuIndex = -1;

export default function NavLinks() {
  const [openIndex, setOpenIndex] = useState(InvalidMenuIndex);
  openIndex, setOpenIndex;

  return (
    <Container>
      {NavLinksConfig.map((item, index) => (
        <NavMenu
          key={index}
          onClick={() => {
            setOpenIndex(index === openIndex ? InvalidMenuIndex : index);
          }}
          open={openIndex === index}
          title={item.title}
          links={item.links}
        />
      ))}
    </Container>
  );
}
