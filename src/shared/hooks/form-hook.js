import { useReducer } from 'react'

const formReducer = (state, action) => {
    let formIsValid = true;

    switch(action.type) {
        case 'INPUT_CHANGE':
            for(const inputId in state.inputs) {
                if(inputId === action.inputId) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputId].isValid;
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

const useForm = (initialState) => {
    return useReducer(formReducer, initialState)
}

export default useForm;