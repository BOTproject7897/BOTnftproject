import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Disconnect from './Disconnect';

const TxtTitle = 'Fantom TestNet'

function Navigation() {
  return (
    <Container>
      <Navbar expand="lg" variant="light" bg="white" sticky="top">
        <Container>
          <Navbar.Brand href="#">{TxtTitle}</Navbar.Brand>
          <Disconnect/>
        </Container>
      </Navbar>
    </Container>
  );
}

export default Navigation;
