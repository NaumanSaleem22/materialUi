import './App.css';
import { Container, Row, Col, Button } from 'reactstrap';
import EmailIcon from '@mui/icons-material/Email';
import Logo from './Images/Logo.png';
function Footer() {
    return (
        <div>
            
            <Container>
                <Row>

                    <div className="footer-div d-flex align-items-center justify-content-between">
                        <div>
                            <img className="logo-img" src={Logo} />
                        </div>
                        <div className="footer-email">
                            <EmailIcon style={{ color: "#2c9785" }} /> contact@brevityforex.com
                        </div>
                    </div>
                </Row>
            </Container>
        </div>
    );
}

export default Footer;
