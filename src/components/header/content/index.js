import { Title, Subtitle, Buttons } from './ContentElements';
import Button from '../Button';

export default function Content() {
  return (
    <>
      <Title>A modern publishing platform</Title>

      <Subtitle>Grow your audience and build your online brand</Subtitle>

      <Buttons>
        <Button>Start for Free</Button>
        <Button inverted>Learn More</Button>
      </Buttons>
    </>
  );
}
