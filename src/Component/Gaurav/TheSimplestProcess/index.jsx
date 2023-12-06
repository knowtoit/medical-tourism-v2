// ** React Imports
import { Link } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";
import Avatar from "@components/avatar";
import {
  TrendingUp,
  User,
  Box,
  DollarSign,
  Activity,
  ArrowRight
} from "react-feather";
import "./style.css";
// ** Reactstrap Imports
import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardHeader,
  Button
} from "reactstrap";

// ** Styles
import "@styles/base/pages/page-knowledge-base.scss";

const KnowledgeBase = () => {
  const Content = ({ item }) => (
    <>
      <Card style={{ background: "none", boxShadow: "none" }}>
        <CardHeader className="d-flex justify-content-center">
          <div
            className="d-flex justify-content-center"
            style={{ fontWeight: "100", fontSize: "17px" }}
          >
            FOR PATIENTS
          </div>
          <br />
        </CardHeader>
        <CardHeader className="d-flex justify-content-center">
          <b
            style={{
              fontWeight: "bold",
              fontSize: "27px",
              alignItems: "center",
              color: "#8797C1",
              marginTop: "-18px",
              marginLeft: "30px"
            }}
          >
            The Simplest Process in Finding Healthcare Abroad
          </b>
        </CardHeader>
        <CardBody
          style={{
            fontSize: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          We'll Help You Map Out Your Medical Tourism Journey
        </CardBody>
      </Card>
      <Row className="marginLeftSide">
        <Col className="kb-search-content ml-2" md="2" sm="12">
          <Card style={{ background: "none", boxShadow: "none" }}>
            <div
              className="d-flex justify-content-center mt-2 ml-2"
              style={{ marginLeft: "25px" }}
            >
              <Avatar
                style={{ padding: "41px", backgroundColor: "#BE959F" }}
                className="me-2"
                icon={<TrendingUp size={100} />}
              />
            </div>

            <CardBody className="text-center">
              <h4>Explore</h4>
              <p className="text-body mt-1 mb-0">
                Find and research top hospitals & destinations
              </p>
            </CardBody>
          </Card>
        </Col>

        <Col className="kb-search-content" md="2" sm="12">
          <Card style={{ background: "none", boxShadow: "none" }}>
            <div
              className="d-flex justify-content-center mt-2 ml-2"
              style={{ marginLeft: "25px" }}
            >
              <Avatar
                style={{ padding: "41px", backgroundColor: "#BE959F" }}
                className="me-2"
                icon={<User size={84} />}
              />
            </div>

            <CardBody className="text-center">
              <h4>Quote</h4>
              <p className="text-body mt-1 mb-0">
                Request a quote directly through our website
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col className="kb-search-content" md="2" sm="12">
          <Card style={{ background: "none", boxShadow: "none" }}>
            <div
              className="d-flex justify-content-center mt-2 ml-2"
              style={{ marginLeft: "25px" }}
            >
              <Avatar
                style={{ padding: "41px", backgroundColor: "#BE959F" }}
                className="me-2"
                icon={<Box size={84} />}
              />
            </div>

            <CardBody className="text-center">
              <h4>Match</h4>
              <p className="text-body mt-1 mb-0">
                Based on your criteria, we recommend the best hospitals or
                providers
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col className="kb-search-content" md="2" sm="12">
          <Card style={{ background: "none", boxShadow: "none" }}>
            <div
              className="d-flex justify-content-center mt-2 ml-2"
              style={{ marginLeft: "25px" }}
            >
              <Avatar
                style={{ padding: "41px", backgroundColor: "#BE959F" }}
                className="me-2"
                icon={<DollarSign size={84} />}
              />
            </div>

            <CardBody className="text-center">
              <h4>Arrange</h4>
              <p className="text-body mt-1 mb-0">
                The hospital/provider will contact you directly to coordinate
                your treatment
              </p>
            </CardBody>
          </Card>
        </Col>
        <Col className="kb-search-content" md="2" sm="12">
          <Card style={{ background: "none", boxShadow: "none" }}>
            <div
              className="d-flex justify-content-center mt-2 ml-2"
              style={{ marginLeft: "25px" }}
            >
              <Avatar
                style={{ padding: "41px", backgroundColor: "#BE959F" }}
                className="me-2"
                icon={<Activity size={84} />}
              />
            </div>

            <CardBody className="text-center">
              <h4>Treat</h4>
              <p className="text-body mt-1 mb-0">
                Finalize your treatment with the hospital/provider of your
                choice
              </p>
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex justify-content-center" sm="12">
          <Card style={{ background: "none", boxShadow: "none" }}>
            <Button
              color="none"
              style={{
                backgroundColor: "#8797C1",
                color: "white",
                borderRadius: "20px",
                boxShadow: "2px 2px 2px #808FB7"
              }}
            >
              Request a Quote for Healthcare Now{" "}
              <ArrowRight style={{ maxWidth: "18px" }} />
            </Button>
          </Card>
        </Col>
      </Row>
    </>
  );

  const renderContent = () => {
    return <Content />;
  };

  return (
    <Fragment>
      <div id="knowledge-base-content">
        <Row className="kb-search-content-info match-height">
          {renderContent()}
        </Row>
      </div>
    </Fragment>
  );
};

export default KnowledgeBase;
