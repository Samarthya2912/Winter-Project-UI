import { useCallback, useReducer } from 'react';

const callStateReducer = (state, action) => {
    switch(action.type) {
        case "CALL_INITIATE":
            return {
                ...state,
                isLoading: true,
            }
        case "RESPONSE_RECEIVED":
            return {
                ...state,
                isLoading: false,
                data: action.data
            }
        case "ERROR":
            return {
                ...state,
                isLoading: false,
                errorMessage: action.error.message
            }
        case "CLEAR_ERROR":
            return {
                ...state,
                errorMessage: null
            }
        default:
            return state;
    }
}

export default function useApiCall(initialLoading) {
    const [callState, dispatch] = useReducer(callStateReducer, {
        isLoading: initialLoading,
        errorMessage: null,
        data: null
    })

    const sendRequest = useCallback(async (url, method = "GET", body = null, headers = {}) => {
        dispatch({ type: "CALL_INITIATE" });
        try {
            const response = await fetch(url, {
                method, 
                headers,
                body: body && JSON.stringify(body)
            })
    
            const resData = await response.json(); 
            if(!response.ok) {
                throw new Error(resData.message);
            } else {
                dispatch({ type: "RESPONSE_RECEIVED", data: resData });
            }
        } catch(err) {
            dispatch({ type: "ERROR", error: err });
            throw err;
        }
    }, [])

    function clearError() {
        dispatch({ type: "CLEAR_ERROR" });
    }

    return [callState, sendRequest, clearError];
}