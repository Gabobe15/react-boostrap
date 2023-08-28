import { Navbar, Container } from "react-bootstrap";


const NavBar = () => {
  return(
      <Navbar expand="sm" variant="dark" bg="dark"  >
        <Container>
         <Navbar.Brand href="/"> React Bootstrap</Navbar.Brand>
        </Container>
      </Navbar>
  ) 
};

export default NavBar;
