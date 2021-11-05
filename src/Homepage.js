import './App.css';

import { Container, Row, Col, Button } from 'reactstrap';
import section1animation from './Images/section1img.png';
import section2animation from './Images/section2img.png';
import cardimage1 from './Images/rocket.png';
import cardimage2 from './Images/puzzle.png';
import cardimage3 from './Images/laptop.png';
function Home() {
    return (
        <div>
            <div className="glow1">

            </div>
            <Container fluid className="Home-container">
                <Row className="Home-Section-1 align-items-center justify-content-center">
                    <Col xxl="5" xl="5" lg="5" sm="10" xs="10" className="section1-column1">
                        <div className="headings-and-text">
                            <div className="section1-heading1">
                                WELCOME TO THE <br />FUTURE OF TRADING
                            </div>
                            <div className="section1-para">
                                We inspire future traders by providing
                                them with a learning platform.
                            </div>
                            <div className="section1-buttons-div d-flex">
                                <div className="Login-Button-div">
                                    <Button className="Login-button">
                                        Login
                                    </Button>
                                </div>

                                <div>
                                    <Button className="Signup-button">
                                        Signup
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col xxl="6" xl="5" lg="5" sm="10" xs="10" className="section1-column2">
                        <div>
                            <img className="image-section-1" src={section1animation} alt="Section-1-image" />
                        </div>
                    </Col>


                </Row>



                <Row className="Home-Section-2 align-items-center justify-content-center">

                    <Col xxl="5" xl="5" lg="5" sm="10" xs="10" className="section2-column2">
                        <div>
                            <img className="image-section-2" src={section2animation} alt="Section-2-image" />
                        </div>
                    </Col>
                    <Col xxl="5" xl="5" lg="5" sm="10" xs="10" className="section2-column1">
                        <div className="headings-and-text-section2">
                            <div className="section1-heading1">
                                WHAT IS BREVITY FOREX?
                            </div>
                            <div className="section1-para">
                                Brevity forex is a forex trading and learning platform
                                where traders can earn profits through tips and
                                tricks from our experts. Through their guidance, you
                                can also be the best in forex trading.
                            </div>

                        </div>
                    </Col>

                </Row>


                <Row className="Home-Section-3 justify-content-center text-center">
                    <Col xl="4" lg="4" sm="3" xs="8" className="card-div">
                        <div>
                            <img className="card-images" src={cardimage1} />
                        </div>
                        <div className="card-heading1">WE ARE GREAT
                            AT WHAT WE DO
                        </div>
                        <div className="card-para">Our experts are well
                            versed and experienced in
                            forex trading.
                        </div>
                    </Col>
                    <Col xl="4" lg="4" sm="3" xs="8" className="card-div card-middle-div">
                        <div>
                            <img className="card-images"  src={cardimage2} />
                        </div>
                        <div className="card-heading1">WE UNDERSTAND
                            BUSINESS
                        </div>
                        <div className="card-para">Having Owned leading companies
                            across many sectors, we
                            understand commerce and the
                            challenges associated with it.
                        </div>
                    </Col>
                    <Col xl="4" lg="4" sm="3" xs="8" className="card-div">
                        <div>
                            <img className="card-images" src={cardimage3} />
                        </div>
                        <div className="card-heading1">WE CARE ABOUT
                            WHAT WE DO
                        </div>
                        <div className="card-para">We always want to do well
                            by our clients. We care
                            about their investment as
                            much as we do about ours.
                        </div>
                    </Col>


                </Row>

            </Container>



        </div>
    );
}

export default Home;
