import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import './navbar.css';
import { FormattedMessage } from 'react-intl';


function NavBar() {
 return (
   <>
     <Navbar className = "navbar-custom">
       <Container>
         <Navbar.Brand ><FormattedMessage id="NavBar" /></Navbar.Brand>
       </Container>
     </Navbar>
   </>
 );
}

export default NavBar;