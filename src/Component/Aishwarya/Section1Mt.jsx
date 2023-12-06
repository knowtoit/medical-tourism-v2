// ** React Imports
import { Fragment } from "react";
import imageMedical from '../../assets/images/medical/national-cancer-institute-NFvdKIhxYlU-unsplash.jpg'

// ** Reactstrap Imports
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
  CardText,
  CardImgOverlay,
  Row,
  Col,
  Button,
} from "reactstrap";


const Card7 = () => {
  return (
    <Fragment>
      <Row>
                    <Col xl="12" md="12">
                      <Card className="border-0">
                        <CardImg
                          top
                          src={imageMedical}
                          alt="card-overlay"
                          style={{ height: "600px" }}
                        />
                        <CardImgOverlay className="bg-overlay d-flex flex-column justify-content-center">
                          <CardTitle
                            // className="text-center"
                            tag="h4"
                            style={{
                              // fontFamily: "cursive",
                              fontSize: "50px",
                              color: "white",
                              marginLeft:"15%",
                              fontWeight:"bold"
                            }}
                          >
                            Healthcare <br/> for Everyone,<br/> Everywhere
                          </CardTitle>
                          <CardText
                            // className="text-center"
                            style={{
                              // fontWeight: "bold",
                              fontSize: "20px",
                              color: "white",
                              marginLeft:"15%"
                            }}
                          >
                            ✓ Healthcare for every budget <br/>
                            ✓ Completely free consultations <br/>
                            ✓ No commitment required <br/><br/>
                            <Button color="primary" 
                            style={{
                              backgroundColor:"#B89653",
                            }}>
                              Get a Free Quote 
                            </Button>
                          </CardText>

                          
                        </CardImgOverlay>
                      </Card>
                    </Col>
      </Row>
    </Fragment>
  );
};

export default Card7;





















// const CardTextAlignment = () => {
//   return (
//     <Fragment>
//       {/* <h5 className='mt-3 mb-2'>Text alignment</h5> */}
//       <Row>
//       <CardImg
//               top
//               src={imageMedical}
//               alt="card-overlay"
//               style={{ height: "400px" }}
//             />            
//             <CardImgOverlay className="bg-overlay d-flex flex-column justify-content-center"></CardImgOverlay>
//         <Col md="6" lg="4">
        
            
//           <Card className="mb-3">
//             <CardBody>
//               <CardTitle tag="h4">
//                 Healthcare for Everyone, Everywhere
//               </CardTitle>
//               <CardText>
//                 ✓ Healthcare for every budget <br/>
//                 ✓ Completely free consultations <br/>
//                 ✓ No commitment required
//               </CardText>
//               <Button color="primary" outline>
//                 Get a Free Quote 
//               </Button>
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//     </Fragment>
//   );
// };

// export default CardTextAlignment;
