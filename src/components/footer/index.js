import { Container, SectionsContainer, SectionTitle, Section, Link, LogoContainer } from './FooterElements';
import Logo from '../Logo';
import FooterConfig from './FooterConfig';

export default function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <SectionsContainer>
        {FooterConfig.map((item, index) => {
          const links = (
            <>
              {item.links.map((item, index) => (
                <Link key={index} href={item.href}>
                  {item.title}
                </Link>
              ))}
            </>
          );

          return (
            <Section key={index}>
              <SectionTitle>{item.title}</SectionTitle>
              {links}
            </Section>
          );
        })}
      </SectionsContainer>
    </Container>
  );
}
