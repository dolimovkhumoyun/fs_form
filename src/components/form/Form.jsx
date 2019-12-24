import React, { Component } from "react";

import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";

class CustomForm extends Component {
  renderForm(input) {
    const { getFieldDecorator } = this.props.form;

    switch (input.type) {
      case "input": {
        return (
          <Form.Item key={input.name}>
            {getFieldDecorator(input.name, {
              rules: [
                { required: true, message: "Please input your username!" }
              ],
              initialValue: input.initialValue || ""
            })(
              <Input
                prefix={
                  <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                }
                placeholder={input.placeholder}
              />
            )}
          </Form.Item>
        );
      }
      case "button": {
        return (
          <Form.Item key={input.name}>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              {input.placeholder}
            </Button>
          </Form.Item>
        );
      }
      default: {
        console.error("Invalid input type");
        break;
      }
    }
  }

  render() {
    const { data } = this.props;
    return (
      <Form
        onSubmit={e => this.props.handleSubmit(e, this.props.form)}
        className="login-form"
      >
        {data.map(d => this.renderForm(d))}
      </Form>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: "normal_login" })(
  CustomForm
);

export default WrappedNormalLoginForm;
