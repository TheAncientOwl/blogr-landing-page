import styled from 'styled-components';
import Colors from '../../../../../Colors';

export const Container = styled.div`
  padding: 0 1em;
  text-transform: capitalize;
  cursor: pointer;
  position: relative;

  text-decoration: ${({ open }) => (open ? 'underline' : 'none')};

  :hover {
    text-decoration: underline;
  }
`;

export const Accordion = styled.div``;

export const ArrowContainer = styled.img`
  display: inline-block;
  margin-left: 0.3em;
`;

export const LinksMenu = styled.div`
  display: ${({ open }) => (open ? 'block' : 'none')};

  position: absolute;
  top: 2em;
  left: 50%;
  transform: translateX(-50%);

  min-width: 6em;
  padding: 1em 0.8em;
  border-radius: 0.25em;

  background: ${Colors.white};
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: ${Colors.veryDarkBlackBlue};
  font-size: 0.9em;
  margin-bottom: 0.45em;

  transition: 80ms ease-out;

  :hover {
    font-weight: bold;
    font-size: 0.88em;
  }
`;
