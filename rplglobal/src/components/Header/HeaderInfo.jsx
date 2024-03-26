import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../../App.css'

function HeaderInfo() {
    return (
        <header className='Headerbg'>
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Забота о жизни</h1>
                            <p>Преданные люди, которые работают и заботятся о людях вокруг нас с <br /> обширным ассортиментом продукции</p>
                            <button>Портфель продукции</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </header>
    )
}

export default HeaderInfo