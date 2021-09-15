import React, { Component } from "react";
import { Button, Message, Form } from "semantic-ui-react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Login.scss";

class Login extends Component {
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
      .post("http://localhost:5000/login", this.state.formData)
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
          <Message>Log-in to your account</Message>
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
          <Button color="teal" fluid size="large" className="form__btn">
            Login
          </Button>
          <Message>
            Don't Have An Account? <Link to="/register">Sign Up</Link>
          </Message>
        </Form>
      </section>
    );
  }
}

export default Login;
