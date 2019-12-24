import React, { Component } from "react";
// import WrappedNormalLoginForm from "./components/form/Form";
import Form from "@bit/dolimovkhumoyun.form_test.form";

const data = [
  {
    name: "username",
    type: "input",
    placeholder: "Username",
    message: "Please input your username!",
    initialValue: "admin"
  },
  {
    name: "password",
    type: "input",
    placeholder: "Password",
    message: "Please input your password!",
    initialValue: "admin"
  },
  {
    name: "button",
    type: "button",
    placeholder: "Submit"
  }
];

class App extends Component {
  state = {};

  handleSubmit = (e, form) => {
    e.preventDefault();
    console.log(form.getFieldsValue());
  };

  render() {
    return (
      <div className="App">
        <Form data={data} handleSubmit={this.handleSubmit} />
        {/* <WrappedNormalLoginForm data={data} handleSubmit={this.handleSubmit} /> */}
      </div>
    );
  }
}

export default App;
