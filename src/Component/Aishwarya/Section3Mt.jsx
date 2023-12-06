// ** Reactstrap Imports
import {
    Button,
    Card,
    CardTitle,
    CardBody,
    CardText,
    CardSubtitle,
    CardLink,
    CardImg,
    Row,
    Col,
  } from "reactstrap";
  import { Linkedin, Facebook, Twitter, Instagram } from "react-feather";
  import { Link } from "react-router-dom";
  // ** Images
  import img1 from "../../../src/assets/images/slider/01.jpg";
  import img2 from "../../../src/assets/images/slider/02.jpg";
  import img3 from "../../../src/assets/images/slider/03.jpg";
  
  const Section3Mt = (cols) => {
    const colsProps = cols ? cols : { md: 4, xs: 12 };
    return (
      <Row className="match-height" style={{ justifyContent: "center" }}>
        <Col lg="3" md="6">
          <Card>
            <CardImg top src={img1} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4" >
                Heart Transplant <br />
                
              </CardTitle>
              <CardText>
                Lorem ipsum dolor sit amet, dolores albucius ponderum no his, eu
                duo prima placerat. Ex paulo vidisse.
              </CardText>
              <Button color="primary" outline>
                Read More
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <CardImg top src={img2} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">
                Heart Transplant <br />
                
              </CardTitle>
              <CardText>
                As a global, growing company, we’re able to offer rewarding
                careers that let you make a positive impact.
              </CardText>
              <Button color="primary" outline>
                Read More
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col lg="3" md="6">
          <Card>
            <CardImg top src={img3} alt="Card cap" />
            <CardBody>
              <CardTitle tag="h4">
                Heart Transplant <br />
                
              </CardTitle>
              <CardText>
                Quae cum magnifice primo dici viderentur, considerata minus
                probabantur. Traditur, inquit, ab Epicuro ratio.
              </CardText>
              <Button color="primary" outline>
                Read More
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    );
  };

  export default Section3Mt;
  