import styled from 'styled-components';
import LogoSrc from '../images/logo.svg';

const Image = styled.img`
  margin-right: 2em;
`;

export default function Logo() {
  return <Image src={LogoSrc} alt='blogr logo' />;
}
