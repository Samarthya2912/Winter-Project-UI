import React, { useCallback, useContext, useReducer } from "react";
import Input from "../../shared/FormElelments/Input";
import "./NewPlace.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/Utils/Validators";
import Button from "../../shared/FormElelments/Button";
import useForm from "../../shared/hooks/form-hook";
import useApiCall from "../../shared/hooks/api-call-hook";
import { AuthContext } from "../../shared/contexts/auth-context";

const NewPlace = (props) => {
  const [callState, sendRequest, clearError] = useApiCall(false);
  const { isLoading, errorMessage, data } = callState;
  const auth = useContext(AuthContext);
  const { userId, token } = auth;

  const [formState, InputHandler] = useForm({
    inputs: {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
      address: {
        value: "",
        isValid: false
      }
    },
    isValid: false,
  });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await sendRequest("http://localhost:5000/api/places", 
      "POST", 
      {
        title: formState.inputs.title.value,
        description: formState.inputs.description.value,
        address: formState.inputs.address.value,
        creator: userId,
      },
      {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      })
    } catch(err) {}
  };

  if(callState.isLoading) {
    return <h1 className="center column">Loading...</h1>
  }

  if(callState.errorMessage) {
    return <div className="center column">
      <h1>Error: {errorMessage}</h1>
      <Button onClick={clearError}>Go back!</Button>
    </div>
  }

  return (
    <div className="add-place-wrapper center column">
      <h2>New Place Form</h2>
      <form className="new-place-form" onSubmit={submitHandler}>
        <Input
          element="input"
          type="text"
          label="Title"
          id="title"
          errorMessage="Enter valid title."
          validators={[VALIDATOR_REQUIRE()]}
          onInput={InputHandler}
        />
        <Input
          element="textarea"
          label="Description"
          id="description"
          errorMessage="Enter atleast 5 characters."
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={InputHandler}
        />
        <Input
          element="textarea"
          id="address"
          label="Address"
          errorMessage="Please enter a valid address"
          validators={[VALIDATOR_MINLENGTH(5)]}
          onInput={InputHandler}
        ></Input>
        <Button type="submit" disabled={!formState.isValid}>
          ADD PLACE
        </Button>
      </form>
      {data && <h1>ADDED!</h1>}
    </div>
  );
};

export default NewPlace;
