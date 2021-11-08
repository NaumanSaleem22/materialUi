import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import Logo from './Images/Logo.png';
function Headernav() {
    return (
        <div>
            <Container>
                <Row>
                    <div className="header-nav d-flex align-items-center justify-content-between">
                        <div>
                             <img className="logo-img" src={Logo} />
                        </div>
                        <div className="login-signup-button-nav">
                            <div className="d-flex">
                            <div className="Login-Button-div">
                                <Button className="header-Login-button">
                                    LOGIN
                                </Button>
                            </div>

                            <div>
                                <Button className="header-Signup-button">
                                    SIGNUP
                                </Button>
                            </div>
                        </div>
                        </div>
                    </div>

                    
                </Row>
            </Container>
           <div class="hr-line">

           </div>
        </div>
    );
}

export default Headernav;
