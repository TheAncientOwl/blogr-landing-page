import styled from 'styled-components';
import LoginButton from './LoginButton';
import SignUpButton from './SignUpButton';

const Container = styled.div``;

export default function Register() {
  return (
    <Container>
      <LoginButton />
      <SignUpButton />
    </Container>
  );
}
