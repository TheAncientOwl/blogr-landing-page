import styled from 'styled-components';
import Colors from '../../Colors';

export const Container = styled.div`
  background: ${Colors.veryDarkBlackBlue};
  margin-top: 2em;
  border-top-right-radius: 4em;
  display: flex;
  justify-content: center;
  padding: 4em 5em;
`;

export const LogoContainer = styled.div`
  width: 10%;
`;

export const SectionsContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
`;

export const Section = styled.div`
  color: ${Colors.grayshBlue};
  text-transform: capitalize;
`;

export const SectionTitle = styled.div`
  color: ${Colors.grayshBlue};
  font-weight: bold;
  font-size: 1.025em;
  margin-bottom: 1.6em;
`;

export const Link = styled.a`
  display: block;
  text-decoration: none;
  color: inherit;
  margin-bottom: 0.8em;

  :hover {
    text-decoration: underline;
  }
`;
