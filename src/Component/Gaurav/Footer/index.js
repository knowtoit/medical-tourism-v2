// ** React Imports
import { Fragment } from "react";

// ** Third Party Components
import * as yup from "yup";
import toast from "react-hot-toast";
import { Check } from "react-feather";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Reactstrap Imports
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Button,
  Form,
  Label,
  Input,
  FormFeedback,
  Row,
  Col
} from "reactstrap";

const ValidationOnChange = () => {
  const SignupSchema = yup.object().shape({
    email: yup.string().email().required(),
    lastName: yup.string().min(3).required(),
    firstName: yup.string().min(3).required(),
    description: yup.string().min(6).required()
  });

  // ** Hooks
  const {
    reset,
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onChange", resolver: yupResolver(SignupSchema) });

  const onSubmit = (data) => {
    if (Object.values(data).every((field) => field.length > 0)) {
      toast(
        <div className="d-flex">
          <div className="me-1">
            <Avatar size="sm" color="success" icon={<Check size={12} />} />
          </div>
          <div className="d-flex flex-column">
            <h6>Form Submitted!</h6>
            <ul className="list-unstyled mb-0">
              <li>
                <strong>firstName</strong>: {data.firstName}
              </li>
              <li>
                <strong>lastName</strong>: {data.lastName}
              </li>
              <li>
                <strong>email</strong>: {data.email}
              </li>
              <li>
                <strong>description</strong>: {data.description}
              </li>
            </ul>
          </div>
        </div>
      );
    }
  };

  const handleReset = () => {
    reset({
      email: "",
      description: "",
      firstName: "",
      lastName: ""
    });
  };

  return (
    <Card style={{ background: "black" }}>
      <CardBody>
        <Row>
          <Col md="6" sm="12">
            <CardHeader tag="h3" style={{ color: "#00D0EA" }}>
              Medical Treatments
            </CardHeader>
            <CardBody style={{ color: "white", fontSize: "15px" }}>
              HealthOpinion is a health assistance organisation that answers all
              the questions that a patient and his family may harbour and aids
              in providing affordable, safe and quality Medical Treatments in
              India at all the major cities. HealthOpinion is one of the
              preferred institutions that..
            </CardBody>
            <CardHeader tag="h3" style={{ color: "#00D0EA" }}>
              Contact Us
            </CardHeader>

            <CardBody style={{ color: "white", fontSize: "15px" }}>
              <Col>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>{" "}
                No 5, 54th Lane, 11th Avenue, Ashok Nagar, Chennai – 600 083.
              </Col>
              <Col className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-phone"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
                </svg>{" "}
                +91 9884634500
              </Col>
              <Col className="mt-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-telephone"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>{" "}
                +91 (44) 4004 1600
              </Col>
              <Col className="mt-1">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-envelope"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z" />
                </svg>
                info@healthopinion.net
              </Col>
            </CardBody>
          </Col>
          <Col md="6" sm="12" className="mt-2 mb-2">
            <Form onSubmit={handleSubmit(onSubmit)}>
              <CardTitle tag="h4" style={{ color: "white" }}>
                Contact us for any information
              </CardTitle>
              <div className="mb-1">
                <Label
                  style={{ color: "white" }}
                  className="form-label"
                  for="firstName"
                >
                  First Name
                </Label>
                <Controller
                  id="firstName"
                  name="firstName"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Bruce"
                      invalid={errors.firstName && true}
                    />
                  )}
                />
                {errors.firstName && (
                  <FormFeedback>{errors.firstName.message}</FormFeedback>
                )}
              </div>
              <div className="mb-1">
                <Label
                  className="form-label"
                  for="lastName"
                  style={{ color: "white" }}
                >
                  Last Name
                </Label>
                <Controller
                  id="lastName"
                  name="lastName"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      placeholder="Wayne"
                      invalid={errors.lastName && true}
                    />
                  )}
                />
                {errors.lastName && (
                  <FormFeedback>{errors.lastName.message}</FormFeedback>
                )}
              </div>
              <div className="mb-1">
                <Label
                  className="form-label"
                  for="email"
                  style={{ color: "white" }}
                >
                  Email
                </Label>
                <Controller
                  id="email"
                  name="email"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="email"
                      placeholder="bruce.wayne@email.com"
                      invalid={errors.email && true}
                    />
                  )}
                />
                {errors.email && (
                  <FormFeedback>{errors.email.message}</FormFeedback>
                )}
              </div>
              <div className="mb-1">
                <Label
                  className="form-label"
                  for="description"
                  style={{ color: "white" }}
                >
                  description
                </Label>
                <Controller
                  id="description"
                  name="description"
                  defaultValue=""
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      type="textarea"
                      placeholder="description"
                      invalid={errors.description && true}
                    />
                  )}
                />
                {errors.description && (
                  <FormFeedback>{errors.description.message}</FormFeedback>
                )}
              </div>
              <div className="d-flex">
                <Button className="me-1" color="primary" type="submit">
                  Submit
                </Button>
                <Button
                  outline
                  color="secondary"
                  type="reset"
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default ValidationOnChange;
