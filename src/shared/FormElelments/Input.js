import React, { useReducer } from 'react'
import './Input.css'

const inputReducer = (state, action) => {
    switch(action.type) {
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: true
            }
        default: 
            return state;
    }
}

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, { value: '', isValid: true })

    const changeHandler = e => {
        dispatch({
            val: e.target.value,
            type: 'CHANGE'
        });
    }


    const element = props.element === 'input' ? (
        <input type={props.type} id={props.id} placeholder={props.placeholder} value={inputState.value} onChange={changeHandler} />
    ) : (
        <textarea id={props.id} rows={props.rows || 3} placeholder={props.placeholder} value={inputState.value} onChange={changeHandler} />
    )

    return (
        <div className={`form-control ${inputState.isValid? '':'form-control__invalid-input'}`}>
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {inputState.isValid || <p>Invalid input</p>}
        </div>
    )
}

export default Input
