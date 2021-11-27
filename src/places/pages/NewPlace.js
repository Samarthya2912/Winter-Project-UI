import React, { useCallback, useReducer } from "react";
import Input from "../../shared/FormElelments/Input";
import "./NewPlace.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/Utils/Validators";
import Button from "../../shared/FormElelments/Button";
import useForm from "../../shared/hooks/form-hook";

const NewPlace = (props) => {
  const [formState, dispatch] = useForm({
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

  const InputHandler = useCallback((id, value, isValid) => {
    dispatch({
      type: "INPUT_CHANGE",
      inputId: id,
      value,
      isValid,
    });
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };

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
    </div>
  );
};

export default NewPlace;
