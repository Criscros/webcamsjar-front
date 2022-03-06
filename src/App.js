import logo from './logo.svg';
import mfc from './myfreecams.png';
import camsoda from './camsoda.jpeg';
import cb from './chaturbate.png';



import './App.css';
import { Card, Button, Row, Col, Container , link } from 'react-bootstrap';

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
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <code>WEBCAMSJAR </code>
        <p>
          Records your favorite live adult webcam broadcasts. <br></br>
          making by your lovely performers from FREE AUDULT WEBCAMS to watch it later. <br></br>
          Availability ONLY United States and Canada 
        </p>
        {/* <a
          className="App-link"
          href="http://ec2-3-90-83-22.compute-1.amazonaws.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          VISITAR
        </a> */}

        <Container>
          <Row>
            <Col>

              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={camsoda} />
                <Card.Body>
                  <Card.Title>CAMSODA</Card.Title>
                  {/* <Card.Text>
Some quick example text to build on the card title and make up the bulk of
the card's content.
</Card.Text> */}  
                  <a href='https://www.camsoda.com/'>
                    <Button variant="primary">CAMSODA</Button>
                  </a>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={cb} />
                <Card.Body>
                  <Card.Title>CHATURBATE</Card.Title>
                  {/* <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text> */}
                <a  href="https://chaturbate.com/">
                  <Button variant="primary">CHATURBATE</Button>
                </a>
                </Card.Body>
              </Card>

            </Col>

            <Col>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={mfc} />
                <Card.Body>
                  <Card.Title>MYFREECAMS</Card.Title>
                  {/* <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text> */}
                    <a  href="http://ec2-18-182-14-78.ap-northeast-1.compute.amazonaws.com/">
                    <Button variant="primary">MYFREECAMS</Button>
                    </a>
                </Card.Body>
              </Card>
            </Col>


          </Row>

        </Container>

      </header>


    </div>
  );
}

export default App;
