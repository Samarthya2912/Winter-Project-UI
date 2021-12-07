import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import "./UpdatePlace.css";
import Button from "../../shared/FormElelments/Button";
import Input from "../../shared/FormElelments/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Utils/Validators";
import useForm from "../../shared/hooks/form-hook";
import useApiCall from "../../shared/hooks/api-call-hook";

const UpdatePlace = (props) => {
  const { placeId } = useParams();
  const [place, setPlace] = useState(null);
  const [fetching, setFetching] = useState(true);
  const [callState, sendRequest, clearError] = useApiCall(false);

  const [formState, InputHandler, setFormData] = useForm({
    inputs: {
      title: { value: "", isValid: false },
      address: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    isValid: false,
  });

  async function submitHandler() {
    try {
      await sendRequest(`http://localhost:5000/api/places/${placeId}`, "PATCH", {
        title: formState.inputs.title.value,
        address: formState.inputs.address.value,
        description: formState.inputs.description.value,
      }, {"Content-Type": "application/json" })
    } catch(err) {}
  }

  if(callState.isLoading) {
    return <div className="center column">
      <h1>Loading...</h1>
    </div>
  }

  if(callState.errorMessage) {
    return <div className="center column">
      <h1>Error: {callState.errorMessage}</h1>
    </div>
  }

  return (
    <div className="update-place-wrapper center column">
      <h2>Update Place</h2>
      <form onSubmit={submitHandler}>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          onInput={InputHandler}
          validators={[VALIDATOR_REQUIRE()]}
          errorMessage="Enter valid title"
          initialValue="sam"
          initialValidity={true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          onInput={InputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Enter valid description."
          initialValue="description"
          initialValidity={true}
        />
        <Input
          id="address"
          element="textarea"
          label="Address"
          onInput={InputHandler}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Enter valid address."
          initialValue="address"
          initialValidity={true}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
      {callState.data && "UPDATED"}
    </div>
  );
};

export default UpdatePlace;
