import styled from 'styled-components';

const Container = styled.div`
  margin-right: 1em;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

export default function LoginButton() {
  return <Container>Login</Container>;
}
