import { Button, Container, Pages } from './styles';

export default function Header(): JSX.Element {
  return (
    <Container>
            <Pages to="/">
            <div className="logo">PATRICK CRUZ.</div>
            </Pages>
            <Pages to="/about">
              about
            </Pages>
            <Pages to="/resume">
              resume
            </Pages>
            <Pages to="/portfolio">
              porftolio
            </Pages>
            <Button to='/contact'>
              contact
            </Button>
    </Container>
  );
}
