import React, { useState } from "react";
import "./Auth.css";
import Button from "../../shared/FormElelments/Button";
import Input from "../../shared/FormElelments/Input";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/Utils/Validators";
import useForm from "../../shared/hooks/form-hook";

const Auth = (props) => {
  const [loginState, setLoginState] = useState(true);

  const [formState, InputHandler, setFormData] = useForm({
    inputs: {
      email: {
        value: "",
        isValid: false,
      },
      password: {
        value: "",
        isValid: false,
      },
    },
    isValid: false,
  });

  function submitHandler(e) {
    e.preventDefault();
    console.log(formState);
  }

  function changeLoginStateHandler() {
    if (!loginState) {
      setFormData(
        {
          ...formState.inputs,
          name: {
              value: "",
              isValid: true
          },
        },
        formState.inputs.email.isValid && formState.inputs.password.isValid
      );
    } else {
      setFormData(
        {
          name: {
            value: "",
            isValid: false,
          },
          ...formState.inputs,
        },
        false
      );
    }
    setLoginState(!loginState);
  }

  return (
    <div className="auth-page center column full-width">
      <h2>Authenticate</h2>
      <form className="auth-page__form center column" onSubmit={submitHandler}>
        {loginState || (
          <Input
            element="input"
            type="text"
            id="name"
            label="Name"
            onInput={InputHandler}
            errorMessage="Enter name."
            validators={[VALIDATOR_REQUIRE()]}
          />
        )}
        <Input
          element="input"
          type="email"
          id="email"
          label="Email"
          validators={[VALIDATOR_EMAIL()]}
          onInput={InputHandler}
          errorMessage="Enter valid email address."
        />
        <Input
          element="input"
          type="password"
          id="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={InputHandler}
          errorMessage="Password must be atleast 5 characters long."
        />
        <Button type="submit" disabled={!formState.isValid}>
          {!loginState ? "SIGNUP" : "LOGIN"}
        </Button>
        <Button type="button" onClick={changeLoginStateHandler} inverse>
          {loginState ? "SIGNUP" : "LOGIN"}
        </Button>
      </form>
    </div>
  );
};

export default Auth;
