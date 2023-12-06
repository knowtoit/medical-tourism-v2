// ** React Imports
import { Fragment } from "react";
import { Linkedin, Facebook, Twitter, Instagram } from "react-feather";
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardImg,
  CardLink,
  CardBody,
  CardText,
  CardTitle,
  ListGroup,
  CardSubtitle,
  ListGroupItem,
  Button
} from "reactstrap";

// ** Images
// import img1 from "@src/assets/images/slider/01.jpg";
// import img2 from "@src/assets/images/slider/02.jpg";

const CardContentTypes = () => {
  return (
    <Fragment>
      <Row>
        <Col md="6" lg="6">
          <Card>
            <img
              className="img-fluid"
              src="../../../../src/assets/images/girl image.avif"
              alt="Card cap"
            />
          </Card>
        </Col>
        {/* <Col md="6" lg="6"> */}
        <Col>
          <Card>
            <CardBody>
              <CardTitle tag="h4" style={{ fontSize: "50px",fontFamily:"sans-serif" }}>
                Keynote Speaker
              </CardTitle>
              <CardText style={{ fontSize: "20px",fontFamily:"cursive",color:"orangered" }}>
                Finding the personal and professional improvement programs to
                fit your needs.
              </CardText>
            </CardBody>
            <ListGroup flush>
              <ListGroupItem>
                We want to share that passion with our customers who come far
                and wide to enjoy the food we have spent sleepless nights
                thinking up, testing and producing.
              </ListGroupItem>
            </ListGroup>
            <CardBody>
              <style jsx>{`
                .iconClass {
                  transition: transform 0.3s ease, z-index 0.3s ease;
                }

                .iconClass:hover {
                  transform: translateY(-10px);
                  z-index: 10;
                  color:blue;
                }
              `}</style>
              <Facebook className="iconClass"></Facebook>
              <Instagram
                className="iconClass"
                style={{ marginLeft: "12px" }}
              ></Instagram>
              <Twitter
                className="iconClass"
                style={{ marginLeft: "12px" }}
              ></Twitter>
              <Linkedin
                className="iconClass"
                style={{ marginLeft: "12px" }}
              ></Linkedin>
            </CardBody>
            <CardBody>
              <Button color="primary">view Details</Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default CardContentTypes;
