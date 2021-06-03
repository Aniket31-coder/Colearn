import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'
import video from '../assets/video.PNG'
import icon from '../assets/Icon.png'
import icona from '../assets/Icon-1.png'
import mainchart from '../assets/main-screen.png'
import chart from '../assets/chart-3.png'

function Content() {
    return (
        <Container>

      <Row>
        <Col xs={12} md={7} className="monitor">
          <h1>Efficient learning, <br /> made simpler.</h1>
          <p className="mt-4">Our cloud-based project management tool will enable you to attain optimum performance through precise tracking and effective networking
          </p>
          <div className="mt-5">
          <Button type="button" className="btn btn-1">Get Started</Button>
          <Button type="button" className="btn video"><img src={video} width="30px" alt="video" height="30px" /><span className="video-text">See how it works</span></Button>
          </div>

          <div className="card-group" style={{marginTop: "50px"}}>
            <div className="card mr-1">
              <img className="card-img-top" src={icon} height="30" alt="Learning Tracker" />
              <div className="card-body">
                <h5 className="card-title">Learning Tracker</h5>
                <p className="card-text">Accurate tracking to identify your strengths and weaknesses</p>
              </div>
            </div>

            <div className="card card-1">
              <img className="card-img-top" src={icona} height="30" alt="Community Focus" />
              <div className="card-body">
                <h5 className="card-title">Community Focus</h5>
                <p className="card-text">Community focus boosts your presence in professional network.</p>
              </div>
            </div>
            </div>
          </Col>
        

        <Col xs={12} md={5}>
          <img src={mainchart} className="mt-5 mainchart" alt="main-screen" />
          <img src={chart} alt="chart" className="chart" />
        </Col>
      </Row> 
        </Container>
    )
}

export default Content;