import React from "react";
import { useParams } from "react-router";
import "./UpdatePlace.css";
import Button from "../../shared/FormElelments/Button";
import Input from "../../shared/FormElelments/Input";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/Utils/Validators";

const UpdatePlace = (props) => {
  const { placeId } = useParams();

  return (
    <div className="update-place-wrapper center column">
      <h2>Update Place</h2>
      <form>
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          onInput={() => {}}
          validators={[VALIDATOR_REQUIRE()]}
          errorMessage="Enter valid title"
          initialValue="sam"
          initialValidity={true}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          onInput={() => {}}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Enter valid description."
          initialValue="description"
          initialValidity={true}
        />
        <Input
          id="address"
          element="textarea"
          label="Address"
          onInput={() => {}}
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorMessage="Enter valid address."
          initialValue="address"
          initialValidity={true}
        />
        <Button type="submit">UPDATE PLACE</Button>
      </form>
    </div>
  );
};

export default UpdatePlace;
