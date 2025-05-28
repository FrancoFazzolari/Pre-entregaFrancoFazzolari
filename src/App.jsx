import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import ComponenteHeaderTest from './components/ComponenteHeaderTest'
import './App.css'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion';

function App() {
  const listaDigimonLarga = "https://digimon-api.vercel.app/api/digimon/";
  const listaDigimonCorta = "https://digimon-api.vercel.app/api/digimon/level/in%20training";
  const [count, setCount] = useState(0);
  const [digimones, setDigimones] = useState([]);
  const [cargandoDatos, setCargandoDatos] = useState(true);

  useEffect(
    ()=>{
      fetch(listaDigimonCorta)
      .then(res=> res.json())
      .then(data =>{
          setDigimones(data.items);
          setCargandoDatos(false);
          console.log("constante setDigimones");
          console.log(setDigimones);
          console.log("objeto data");
          console.log(data);
        }
      )
      .catch(err=>{
          console.console.error("no se encontró la lista de digimones", err);
          setCargandoDatos(false);
        }
      );
    }
  );

  //mapeo la data y mando por consola para validar
  //fetch(listaDigimonLarga)
  //.then(response => response.json())
  //.then(data => {
  //  mappedData = data.map(item => {
  //      // obtengo datos
  //      nombreDigimon : item.name
  //      src : item.image
  //      // ...intento obtener imagen
  //  }
  //);
  //  // muestro por consola a ver si el fetch anduvo
  //  console.log(mappedData);
  //})
  //.catch(error => {
  //  console.error('muestro el error:', error);
  //});

  
  return (
    <div>
      <header>
        <ComponenteHeaderTest/>
      </header>
        <Container className = 'mt-4'>
          <h5>lista de digimones corta</h5>
          <Row>
            {digimones.map(char=>(
              <Col key={char.name} md= {4}>
                <Card className='m-2'>
                  
                  <Card.Img src={char.img}/>
                  <Card.Body>
                    <Card.Title> {char.name} </Card.Title>
                    <Card.Text> producto </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
    </div>

  );
} export default App;
