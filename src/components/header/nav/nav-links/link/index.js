import { Container } from './LinkElements';
import PropTypes from 'prop-types';

/**
 *
 * @param {title} accordion display title
 * @param {links} array of {title: string, link: string}
 */
export default function Link({ title, links }) {
  links;
  return <Container>{title}</Container>;
}

Link.propTypes = {
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
