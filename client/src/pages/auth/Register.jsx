import React, { useState } from "react";
import { FloatingLabel, Form } from "react-bootstrap";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="layout-container py-3 min-vh-100 d-flex justify-content-center align-items-center">
      <Form className="form shadow">
        <FloatingLabel
          controlId="formUsername"
          label="Username"
          className="mb-4"
        >
          <Form.Control
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>

        <FloatingLabel controlId="formEmail" label="Email" className="mb-4">
          <Form.Control
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingLabel>
      </Form>
    </div>
  );
};
export default Register;
