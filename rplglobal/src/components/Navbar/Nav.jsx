import Nav from 'react-bootstrap/Nav';
import brend from '../../assets/brend.jpeg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Navbar.css'

function Navbar() {
    return (
        <Container>
            <Row>
                <Col>
                    <Nav defaultActiveKey="#" className="flex-column">
                        <Nav.Link href="/home">
                            <img className='brendimg' style={{display:'flex' , margin:'auto' , width:'313px',height:'107px',}} src={brend} alt="" />
                        </Nav.Link>
                    </Nav>
                </Col>
            </Row>
        </Container>
    )
}

export default Navbar