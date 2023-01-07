import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


function Layout(props){
return(

        <>
            <Navbar bg="primary" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand>Biblioteca</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                
            </Container>
            </Navbar>
            <Container>{props.children}</Container>
        </>
    );
}

export default Layout;