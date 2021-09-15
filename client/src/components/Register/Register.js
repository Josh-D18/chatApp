import React, { Component } from "react";
import { Button, Message, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Register.scss";
// import { Formik } from "formik";

class Register extends Component {
  state = {
    formData: null,
  };

  handleChange = (e) => {
    this.setState({
      formData: { ...this.state.formData, [e.target.name]: e.target.value },
    });
  };

  handleSubmit = () => {
    axios
      .post("http://localhost:5000/register", this.state.formData)
      .then((res) => {
        console.log(res);
        sessionStorage.setItem("token", res.data.token);
        this.props.history.push({ pathname: "/" });
      })
      .catch((err) => console.error("Error", err));
  };

  render() {
    return (
      <section className="form">
        <Form className="form__container" onSubmit={this.handleSubmit}>
          <Message>Create your account</Message>
          <Form.Input
            className="form__username"
            placeholder="Username"
            onChange={this.handleChange}
            name="username"
          />
          <Form.Input
            className="form__password"
            placeholder="Password"
            type="password"
            onChange={this.handleChange}
            name="password"
          />
          <Form.Input
            className="form__description"
            placeholder="descritpion"
            type="text"
            onChange={this.handleChange}
            name="description"
          />
          <Button color="teal" fluid size="large" className="form__btn">
            Submit
          </Button>
          <Message>
            Have An Account? <Link to="/login">Sign In</Link>
          </Message>
        </Form>
      </section>
    );
  }
}

export default Register;
