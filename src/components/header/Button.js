import styled, { css } from 'styled-components';
import Colors from '../../Colors';

const Button = styled.div(
  ({ inverted }) => css`
    cursor: pointer;
    display: inline-block;

    border: 0.2em solid ${Colors.white};
    border-radius: 1.25em;
    padding: 0.5em 1.25em;
    font-weight: bold;

    background: ${inverted ? Colors.lightRed : Colors.white};
    color: ${inverted ? Colors.white : Colors.lightRed};
  `
);

export default Button;
