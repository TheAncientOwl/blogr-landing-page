import { ArrowContainer, Container, LinksMenu } from './LinkElements';
import PropTypes from 'prop-types';
import ArrowSrc from '../../../../../images/icon-arrow-light.svg';
import { Link as MenuLink } from './LinkElements';

/**
 *
 * @param {title} accordion display title
 * @param {links} array of {title: string, link: string}
 */
export default function NavMenu({ onClick, open, title, links }) {
  const menu = (
    <LinksMenu open={open}>
      {links.map((item, index) => (
        <MenuLink key={index} href={item.href}>
          {item.title}
        </MenuLink>
      ))}
    </LinksMenu>
  );

  return (
    <Container onClick={onClick} open={open}>
      {title}
      <ArrowContainer src={ArrowSrc} alt='arrow' />
      {menu}
    </Container>
  );
}

NavMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  links: PropTypes.array.isRequired,
};
