import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutImg from '../../assets/Aboutimg.jpeg'
function AboutSection() {
  return (
    <section className='AboutClas'>
      <Container>
        <Row>
          <Col>
            <img style={{ width: '401', height: '349px' }} src={AboutImg} alt="" />
          </Col>
          <Col className='textinfoAbout'>
            <h2>Rhydburg@Узбекистан</h2>
            <p>
              Компания  Rhydburg начала свою деятельность в Узбекистане в 2012 году через местных
              дистрибьюторов с эксклюзивными контрактами. Позднее, в 2019 году, компания Rhydburg
              открыла свое представительство в Ташкенте и имеет прямой доступ к рынку.
              <br />
              <br />
              Наш портфель богат более чем 40 зарегистрированными продуктами и более 25
              при регистрации, компания Rhydburg продолжает концентрироваться на продуктах для
              гастроэнтерологии и оздоровления кишечника, питания, аллергии и кожи, боли, простуды и
              кашля с сочетанием рецептурных и безрецептурных продуктов.
            </p>
          </Col>
        </Row>
      </Container>

    </section>
  )
}

export default AboutSection