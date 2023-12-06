// ** React Imports
import { Fragment } from "react";

// ** Reactstrap Imports
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col,
  Button,
} from "reactstrap";

const Section2Mt = () => {
  return (
    <Fragment>
      {/* <h5 className='mt-3 mb-2'>Text alignment</h5> */}
      <Row
        style={
          {
            marginLeft:"10%",
            marginRight:"10%"
          }
        }
      >
        <Col md="6" lg="6">
          <Card
            className="text-center mb-3"
            style={{
              height:"300px"
            }}
          >
            <CardBody
            style={{
                justifyContent:"center",
                textAlign:"center",
                marginTop:"10%"
            }}>
              <CardTitle tag="h4">title img</CardTitle>
              <CardText
              style={{
                fontSize: "30px",
                color: "#164E63",
                lineHeight:"30px",
                fontWeight: "bold",
              }}>
              Get personalized answers to your medical questions
              </CardText>
              <Button color="primary" outline>
                Ask Question
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col md="6" lg="6">
          <Card className="text-center mb-3"
          style={{
            height:"300px"
          }}>
            <CardBody
            style={{
                justifyContent:"center",
                textAlign:"center",
                marginTop:"10%"
            }}>
              <CardTitle tag="h4"> title img</CardTitle>
              <CardText
              style={{
                fontSize: "30px",
                color: "#164E63",
                lineHeight:"30px",
                fontWeight: "bold",
              }}>
              Find world class treatments at affordable prices
              </CardText>
              <Button color="primary" outline>
                Get Estimate
              </Button>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row
      style={{
        height:"400px",
        marginLeft:"8%",
        marginRight:"8%"
      }}>
        <Col xl="12" md="12" >
          <Card className="border-0"
          style={{
            height:"300px"
          }}>
            <CardTitle
              className="text-center"
              tag="h4"
              style={{
                // fontFamily: "cursive",
                fontSize: "40px",
                color: "#164E63",
                marginTop:"2%",
                fontWeight: "bold",
                border:"none",
              }}
            >
              We make your treatment effortless <br/>by providing cost estimate
            </CardTitle>
            <CardText
              className="text-center"
              style={{
                // fontWeight: "bold",
                fontSize: "18px",
                color: "black",
                paddingLeft:"10px",
                paddingRight:"10px"
                // marginLeft:"5%",
                // marginRight:"5%"
              }}
            >
              It can be difficult to find the right care for you and your loved ones. Our goal is to take the pain out of your battle with medical problems. We want to ensure that we provide you with the best advice possible, so you don't have to deal with a confusing healthcare system.
              <br />
            </CardText>
          </Card>
        </Col>
      </Row>
    </Fragment>
  );
};

export default Section2Mt;
