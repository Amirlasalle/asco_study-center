import { useState } from 'react';
import "../App.css"
import ascotimelineData from "./ascotimeline.json"
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';



const AboutAsco = () => {
  const [ascotimeline] = useState(ascotimelineData)
  console.log(ascotimeline)
  return (<>

    <Container id="aboutasco" className=' mt-4 mb-auto' >
      <h2 className="text-center section-title">
        About ASCO
        <span className="smaller" style={{ display: 'inline-block', verticalAlign: 'top' }}>
          Power<br /> technologies
        </span>
      </h2>

      <Row>

        <Col >
          <Carousel slide={false}><Carousel.Item>
            <Image src={process.env.PUBLIC_URL + "/assets/nasa.jpg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image" />
            <Carousel.Caption className='position-relativeslide-title about-outlined-text'>
              <h5 className='position-relativeslide-title about-outlined-text'>
                At ASCO Power Technologies, we have a long history of innovation. We are on a constant drive to bring new technologies and new products to our customers to help them become more productive.</h5><br></br>
            </Carousel.Caption>
          </Carousel.Item>
            <Carousel.Item>
              <Image src={process.env.PUBLIC_URL + "/assets/nyc.jpeg"} className="img-fluid d-flex flex-wrap justify-content-around about-slide-image" />
              <Carousel.Caption className='position-relativeslide-title about-outlined-cap'>
                <h5 className='position-relativeslide-title about-outlined-text'>
                  At ASCO, we have a long history of innovation. In fact, it's part of our DNA. Since 1888, ASCO has prided itself on providing cutting edge technology and never compromising on quality.</h5><br></br>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>



        </Col>


      </Row>

      <Row className='mt-3 custom-color1'>

        <Col >
          <Carousel slide={false}>   <Carousel.Item>
            <div className="video-container">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/RqFZ7Xeumuo?si=L9utuwueByryT-0T" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Carousel.Item>
            <Carousel.Item>
              <div className="video-container">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/0LAsZU44VXc?si=VI9_w0WcUjV9ebsL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </div>
            </Carousel.Item>
          </Carousel>



        </Col>


      </Row>

      <Row className='mt-4 custom-color'>
        <h3 className="mt-3 text-left timeline-title">Discover ASCO's Timeline</h3>
        <div id="ascotimeline" className="d-flex flex-wrap justify-content-around ">
          {ascotimeline.map((project, key) =>

            <Card key={key} className="m-2 p-2 shadow-lg" style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>{project.year}</Card.Title>
                <Card.Text>{project.brief}
                </Card.Text>
                <Card.Text>{project.brief2}
                </Card.Text>
                <Card.Text>{project.brief3}
                </Card.Text>

                {/* <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link> */}
              </Card.Body>
            </Card>

          )}
        </div>
      </Row>
    </Container>



  </>)

}
export default AboutAsco;