import React, { useState, useContext } from "react";
import "./Auth.css";
import Button from "../../shared/FormElelments/Button";
import Input from "../../shared/FormElelments/Input";
import useApiCall from "../../shared/hooks/api-call-hook";
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
} from "../../shared/Utils/Validators";
import useForm from "../../shared/hooks/form-hook";
import { AuthContext } from "../../shared/contexts/auth-context";

const Auth = (props) => {
  const [loginState, setLoginState] = useState(true);
  const [callState, sendRequest, clearError] = useApiCall(false);
  const { isLoading, errorMessage, data } = callState;

  const auth = useContext(AuthContext);

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

  async function submitHandler(e) {
    if(!loginState) {
      try {
        await sendRequest(
          "http://localhost:5000/api/users/signup",
          "POST",
          {
            name: formState.inputs.name.value,
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          },
          { "Content-Type": "application/json" },
        );
        auth.login(data.user.id);
      } catch (err) {}
    } else {
      try {
        await sendRequest(
          "http://localhost:5000/api/users/login",
          "POST",
          {
            email: formState.inputs.email.value,
            password: formState.inputs.password.value,
          },
          { "Content-Type": "application/json" },
        );
        auth.login(data.user.id);
      } catch (err) {}
    }
  }

  function changeLoginStateHandler() {
    if (!loginState) {
      setFormData(
        {
          ...formState.inputs,
          name: {
            value: "",
            isValid: true,
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

  if (isLoading) {
    return (
      <div className="center column">
        <h1>Loading...</h1>;
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="center column">
        <h1>Error: {errorMessage}</h1>
        <Button
          onClick={() => {
            clearError();
          }}
        >
          Go back!
        </Button>
      </div>
    );
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
        <br />
        <Button type="button" onClick={changeLoginStateHandler} inverse>
          SWITCH TO {loginState ? "SIGNUP" : "LOGIN"}
        </Button>
      </form>
    </div>
  );
};

export default Auth;
