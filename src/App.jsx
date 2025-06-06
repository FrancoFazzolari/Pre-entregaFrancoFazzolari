import { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Card, Row, Col } from 'react-bootstrap';
import ComponenteHeaderTest from './components/ComponenteHeaderTest'
import './App.css'
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion';
import js from '@eslint/js';

function App() {
  const listaDigimonLarga = "https://digimon-api.vercel.app/api/digimon/";
  const listaDigimonCorta = "https://digimon-api.vercel.app/api/digimon/level/in%20training";
  const listaDragonBallZ = "https://dragonball-api.com/api/characters?limit=14";
  const [digimones, setDigimones] = useState([]);
  const [cargandoDatos, setCargandoDatos] = useState(true);

  useEffect(
    ()=> {
      const obtenerDatosApiListaLarga = async()=> {
        const resultadoApiFetch = await fetch(listaDigimonLarga);
        console.log("probando obtencion datos" + resultadoApiFetch.json()
        .then(json=>{
          console.log("probando luego de convertir a Json"+json);
        })
      );
      }
      obtenerDatosApiListaLarga();
    }
  , []);
  useEffect(
    ()=>{
      fetch(listaDigimonCorta) //ojo con la url
      .then(res=> res.json())
      .then(data =>{
          setDigimones(data);//aca es data.items para dragon ball Z
          setCargandoDatos(false);
          console.log("constante setDigimones");
          console.log(setDigimones);
          console.log("objeto data");
          console.log(data);
        }
      )
      .catch(err=>{
          console.error("no se encontró la lista de digimones", err);
          setCargandoDatos(false);
        }
      );
    }, []);
    console.log("constante digimones");
    console.log(digimones);

  
  return (
    <div>
      <header>
        <ComponenteHeaderTest>Lista de productos Digimones principiante</ComponenteHeaderTest>
      </header>
      <Container className = 'mt-4'>
       <h5>lista de digimones corta</h5>
       <Row>
         {digimones.map(char=>(
           <Col key={char.name} md= {4}> {/* revisar el unique key para los digimon o DBZ */}
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
