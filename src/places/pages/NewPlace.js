import React, { useReducer } from 'react'
import Input from '../../shared/FormElelments/Input'
import './NewPlace.css'

const NewPlace = props => {


    return (
        <form className="new-place-form">
            <Input element="input" label="Name" id="name" />
        </form>
    )
}

export default NewPlace
