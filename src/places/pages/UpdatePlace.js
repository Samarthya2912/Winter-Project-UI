import React, { useCallback, useEffect } from "react";
import { useParams } from "react-router";
import "./UpdatePlace.css";
import Button from "../../shared/FormElelments/Button";
import Input from "../../shared/FormElelments/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/Utils/Validators";
import useForm from "../../shared/hooks/form-hook";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world!",
    imageUrl:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous skyscrapers in the world!",
    imageUrl:
      "https://bsmedia.business-standard.com/_media/bs/img/article/2021-09/20/full/1632080404-7898.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: {
      lat: 40.7484405,
      lng: -73.9878531,
    },
    creator: "u1",
  },
];

const UpdatePlace = (props) => {
  const { placeId } = useParams();

  const [formState, InputHandler, setFormData] = useForm({
    inputs: {
      title: { value: "", isValid: false },
      address: { value: "", isValid: false },
      description: { value: "", isValid: false },
    },
    isValid: false,
  });

  const requiredPlace = DUMMY_PLACES.filter((place) => place.id === placeId);

  useEffect(() => {
    setFormData({
      title: {
        value: requiredPlace.title,
        isValid: true,
      },
      description: {
        value: requiredPlace.description,
        isValid: true,
      },
      address: {
        value: requiredPlace.address,
        isValid: true,
      },
    }, true);
  }, []);

  if (!requiredPlace) {
    return (
      <div className="center column">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="update-place-wrapper center column">
      <h2>Update Place</h2>
      <form>
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
    </div>
  );
};

export default UpdatePlace;
