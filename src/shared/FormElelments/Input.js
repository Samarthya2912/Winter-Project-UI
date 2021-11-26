import React, { useReducer } from 'react'
import './Input.css'
import { validate } from '../Utils/Validators'

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators)
            }
        case 'TOUCH':
            return {
                ...state,
                isTouched: true
            }
        default:
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: false, isTouched: false })

    const changeHandler = e => {
        dispatch({
            val: e.target.value,
            validators: props.validators,
            type: 'CHANGE'
        });
    }

    const touchHandler = e => {
        dispatch({
            type: 'TOUCH'
        })
    }

    const element = props.element === 'input' ? (
        <input type={props.type} id={props.id} placeholder={props.placeholder} value={inputState.value} onChange={changeHandler} onBlur={touchHandler} />
    ) : (
        <textarea id={props.id} rows={props.rows || 3} placeholder={props.placeholder} value={inputState.value} onChange={changeHandler} onBlur={touchHandler} />
    )

    return (
        <div className={`form-control ${!inputState.isValid && inputState.isTouched ? 'form-control__invalid-input' : ''}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched && <p>{props.errorMessage}</p>}
        </div>
    )
}

export default Input
