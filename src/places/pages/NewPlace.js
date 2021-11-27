import React, { useCallback, useReducer } from "react";
import Input from "../../shared/FormElelments/Input";
import "./NewPlace.css";
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from "../../shared/Utils/Validators";
import Button from "../../shared/FormElelments/Button";

const formReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            let formIsValid = true;
            for(const inputId in state.inputs) {
                if(inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: {
                        value: action.value,
                        isValid: action.isValid
                    }
                },
                isValid: formIsValid
            }
        default:
            return state;
    }
}

const NewPlace = (props) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            title: {
                value: '',
                isValid: false
            },
            description: {
                value: '',
                isValid: false
            }
        },
        isValid: false
    })

    const InputHandler = useCallback((id, value, isValid) => { 
        dispatch({
            type: 'INPUT_CHANGE',
            inputId: id,
            value,
            isValid
        })
    }, []);

    return (
        <form className="new-place-form">
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
            <Button type="submit" disabled={!formState.isValid}>ADD PLACE</Button>
        </form>
    );
};

export default NewPlace;
