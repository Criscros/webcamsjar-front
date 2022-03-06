
import mfc from './myfreecams.png';
import camsoda from './camsoda.jpeg';
import cb from './chaturbate.png';

import './App.css';
import { Card, Button, Row, Col, Container, Navbar } from 'react-bootstrap';

// function App() {
//   return (
//     <Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src={mfc} />
//       <Card.Body>
//         <Card.Title>Card Title</Card.Title>
//         <Card.Text>
//           Some quick example text to build on the card title and make up the bulk of
//           the card's content.
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card>
//   );
// }


function App() {
  return (
    <div className="App">
      <Navbar >
        <Container>
          <Navbar.Brand href="#home">WEBCAMSJAR</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Login: <a href="#login">Obito</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Row xs={1} md={3} lg={3}>
          <Col>
            <Card>
              <Card.Img variant="top" src={camsoda} />
              <Card.Body>

                <a href='https://www.camsoda.com/'>
                  <Button variant="primary">CAMSODA</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src={cb} />
              <Card.Body>

                <a href="https://chaturbate.com/">
                  <Button variant="primary">CHATURBATE</Button>
                </a>
              </Card.Body>
            </Card>

          </Col>

          <Col>
            <Card>
              <Card.Img variant="top" src={mfc} />
              <Card.Body>

                <a href="http://ec2-18-182-14-78.ap-northeast-1.compute.amazonaws.com/">
                  <Button variant="primary">MYFREECAMS</Button>
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
}

export default App;
