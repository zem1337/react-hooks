import { Container, Nav, Navbar } from "react-bootstrap"

const NavMovie=()=>{
    return(
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ZEMFlix</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Movies</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default NavMovie;