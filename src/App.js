import styled from 'styled-components';
import Header from './components/header';
import Content from './components/content';
import Footer from './components/footer';

const Container = styled.div``;

export default function App() {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
}
