import React, { useReducer } from 'react'
import Input from '../../shared/FormElelments/Input'
import './NewPlace.css'
import { VALIDATOR_REQUIRE } from '../../shared/Utils/Validators'

const NewPlace = props => {


    return (
        <form className="new-place-form">
            <Input element="input" label="Title" id="title" errorMessage="Enter correct title" validators={[VALIDATOR_REQUIRE()]} />
        </form>
    )
}

export default NewPlace
