// ** Third Party Components
import classnames from "classnames";
import { TrendingUp, User, Box, DollarSign } from "react-feather";
import "./style.css";
// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardText,
  Row,
  Col
} from "reactstrap";

const StatsCard = ({ cols }) => {
  const data = [
    {
      title: "Clinical Excellence",
      subtitle:
        "We strive to convert distant medical possibilities to current procedures, aiding our patients We are committed to fulfilling health aspirations of citizens across the globe.",
      color: "light-primary",
      icon: <TrendingUp size={34} />
    },
    {
      title: "Personalized Care",
      subtitle:
        "We provide best-in-the-class healthcare experience with our high-precision technologies, and try to suggest non-invasive treatments to keep our patient’s minds at ease.",
      color: "light-info",
      icon: <User size={34} />
    },
    {
      title: "Quality Standards",
      subtitle:
        "We provide global access to advanced healthcare with simple and streamlined process.",
      color: "light-danger",
      icon: <Box size={34} />
    },
    {
      title: "Unparalleled Patient Experience",
      subtitle:
        "Our International Patient Care Program offers extraordinary services for international patients and their families. We aim to meet the needs and requirements of you and your family.",
      color: "light-success",
      icon: <TrendingUp size={34} />
    }
  ];

  const renderData = () => {
    return data.map((item, index) => {
      const colMargin = Object.keys(cols);
      const margin = index === 2 ? "sm" : colMargin[0];
      return (
        <Col
          key={index}
          {...cols}
          className={classnames({
            [`mb-2 mb-${margin}-0`]: index !== data.length - 1
          })}
        >
          <div
            className="d-flex align-items-center"
            style={{ margin: "20px 20px 20px 20px" }}
          >
            <Avatar
              style={{ padding: "17px", background: "#22C55E" }}
              icon={item.icon}
              className="me-2"
            />
            <div className="my-auto">
              <h4 className="fw-bolder mb-0">{item.title}</h4>
              <CardText className="font-small-3 mb-0">
                <div style={{ fontSize: "15px" }}>{item.subtitle}</div>
              </CardText>
            </div>
          </div>
        </Col>
      );
    });
  };

  return (
    <Card
      className="card-statistics"
      style={{ background: "none", boxShadow: "none" }}
    >
      <CardHeader className="d-flex justify-content-center">
        <CardTitle>
          <div
            className="CardTitle12"
            style={{
              color: "#164e63",
              fontWeight: "bolder",
              fontSize: "40px",
              marginLeft: "15%",
              marginRight: "15%"
            }}
          >
            We push the limits of what's possible for our patients
          </div>
        </CardTitle>
      </CardHeader>
      <CardBody className="statistics-body">
        <Row>{renderData()}</Row>
      </CardBody>
    </Card>
  );
};

export default StatsCard;
