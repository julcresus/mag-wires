import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsQrCodeScan } from "react-icons/bs";


function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cheshire Oaks</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Stores</Nav.Link>
            <Nav.Link href="#whatson">What's on</Nav.Link>
            <Nav.Link href="#plan">Plan your visit</Nav.Link>
            <Nav.Link href="#restaurants">Restaurants</Nav.Link>
            <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      <header className="App-header">
        <p>
         Open. Closes in <b>3 hours</b>.
        </p>
      </header>
      <div class='block'>
        <h5>Welcome back</h5>
        <h3>Matilda</h3>
          <div class='offers-block'>
            You have<br></br><b>offers</b>
          </div>
      </div>
      <br></br>
      <div class='block'>
        <p>Scan the QR code at any till to view available offers at that store</p>
        <input
        id="cameraFileInput"
        type="file"
        accept="image/*"
        capture="environment"
        value=''
        style={{display:'none'}}
      />
      <label for="cameraFileInput">
        <Button size="lg">
          <BsQrCodeScan></BsQrCodeScan>  Scan this QR code
        </Button>
        </label>
      </div>
    </div>
  );
}

export default App;
