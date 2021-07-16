import { ArrowContainer, Container } from './LinkElements';
import PropTypes from 'prop-types';
import ArrowSrc from '../../../../../images/icon-arrow-light.svg';

/**
 *
 * @param {title} accordion display title
 * @param {links} array of {title: string, link: string}
 */
export default function Link({ title, links }) {
  links;
  return (
    <Container>
      {title} <ArrowContainer src={ArrowSrc} alt='arrow' />
    </Container>
  );
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
