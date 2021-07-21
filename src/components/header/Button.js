import styled, { css } from 'styled-components';
import Colors from '../../Colors';

const Button = styled.div(
  ({ inverted }) => css`
    cursor: pointer;
    display: inline-block;

    border: 0.15em solid ${Colors.white};
    border-radius: 1.25em;
    padding: 0.6em 1.25em;
    font-weight: bold;

    background: ${inverted ? Colors.lightRed : Colors.white};
    color: ${inverted ? Colors.white : Colors.lightRed};

    transition: 250ms ease;

    :hover {
      background: ${inverted ? Colors.white : Colors.lightRed};
      color: ${inverted ? Colors.lightRed : Colors.white};
      border: 0.15em solid ${inverted ? Colors.white : Colors.lightRed};
    }
  `
);

export default Button;
