# fs-form

> Ant Design Form generator

[![NPM](https://img.shields.io/npm/v/fs-form.svg)](https://www.npmjs.com/package/fs-form) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm i @bit/dolimovkhumoyun.form_test.form
```

## Usage

```jsx
import React from "react";
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

function handleSubmit(e, form) {
  e.preventDefault();
  console.log(form.getFieldsValue());
}

export default <Form data={data} handleSubmit={handleSubmit} />;
```

## License

MIT © [Khumoyunmirzo Dolimov](https://github.com/Khumoyunmirzo Dolimov)
