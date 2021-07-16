import styled from 'styled-components';
import Colors from '../../Colors';

const Button = styled.div`
  cursor: pointer;
  display: inline-block;

  border: 0.2em solid ${Colors.white};
  border-radius: 1.25em;
  padding: 0.5em 1.25em;
  font-weight: bold;

  background: ${Colors.white};
  color: ${Colors.lightRed};
`;

export default Button;
