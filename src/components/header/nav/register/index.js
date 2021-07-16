import styled from 'styled-components';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';
import Colors from '../../../../Colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: ${Colors.white};
`;

export default function Register() {
  return (
    <Container>
      <LoginButton />
      <SignUpButton />
    </Container>
  );
}
