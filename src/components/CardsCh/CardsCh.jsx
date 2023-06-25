import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./CardsCh.css"
import whatsapp from "../../assets/whatsapp-icon.png"
import palet from "../../assets/palet-icon.png"
import delivery from "../../assets/delivery-icon.png"
import years from "../../assets/32-icon.png"
import  chmedia from "../../assets/chmedia.png"

function CardsCh() {
  return (
   <div className='cards-wrapper'>
   <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={chmedia} className='card-icons'/>
      <Card.Body>
        <Card.Title>Churrasqueira Média</Card.Title>
        <Card.Text>
          Altura:<br/>
          Largura:<br/>
          Fundo:<br/>
        </Card.Text>
        {/*<Button variant="primary">Go somewhere</Button>*/}
      </Card.Body>
    </Card>
    
    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top"  src={delivery} className='card-icons'/>
      <Card.Body>
        <Card.Title>Churrasqueira Grande</Card.Title>
        <Card.Text>
          Altura:<br/>
          Largura:<br/>
          Fundo:<br/>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={whatsapp} className='card-icons'/>
      <Card.Body>
        <Card.Title>Churrasqueira Extra Grande</Card.Title>
        <Card.Text>
          Altura:<br/>
          Largura:<br/>
          Fundo:<br/>
        </Card.Text>
      </Card.Body>
    </Card>

    <Card style={{ width: '14rem' }} className='card-style'>
      <Card.Img variant="top" src={palet} className='card-icons' />
      <Card.Body>
        <Card.Title>Churrasqueira Alto Relevo</Card.Title>
        <Card.Text>
          Altura:<br/>
          Largura:<br/>
          Fundo:<br/>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}

export default CardsCh;