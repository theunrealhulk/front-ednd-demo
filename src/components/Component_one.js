import Header from './Header';
import Footer from './Footer';
import { Container,Row,Col } from 'react-bootstrap';
import Item from './Item'

function Component_one() {
  return (
    <div className="App">
      <Container>
        <Header       
        headding="L'UNIVERS CLEANZY" 
        subheadding="Rejoignez-nous sur les reseaux sociaux!"/>
          <div className='grid'>
            <Row >
                <Col lg><Item label='' background='https://picsum.photos/200'/></Col>
                <Col lg><Item label='SANTE'/></Col>
                <Col lg><Item label='' background='https://picsum.photos/200'/></Col>
            </Row>
            <Row >
                <Col lg><Item label='CONFORT'/></Col>
                <Col lg><Item label='' background='https://picsum.photos/200'/></Col>
                <Col lg><Item label='FRAICHEUR'/></Col>
            </Row>
            <Row >
                <Col lg><Item label='' background='https://picsum.photos/200'/></Col>
                <Col lg><Item label='BIEN-ETRE'/></Col>
                <Col lg><Item label='' background='https://picsum.photos/200'/></Col>
            </Row>
            <Row >
                <Col lg><Item label='ECOLOGIE'/></Col>
                <Col lg><Item label='' background='https://picsum.photos/200'/></Col>
                <Col lg><Item label='TECHNOLOGIE'/></Col>
            </Row>
            <Row>
              <Footer text='@CleanzyPressing'/>
            </Row>
        </div>
        </Container>
    </div>
    );
}

export default Component_one;
