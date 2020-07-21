import {Dispatch} from "redux";
import {counterApi} from "../api/counterApi";
import {AppStateType, InferActionTypes} from "./store";

const initialState = {
    value: 0
}

/*type InitialStateType = {
    value: number
}*/

type InitialStateType = typeof initialState;

export const counterReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case 'COUNTER_COUNTER_REDUCER/GET_COUNTER_SUCCESS': {
            debugger
            return {
                ...state, value: action.counterValue
            }
        }
        case 'COUNTER_COUNTER_REDUCER/POST_COUNTER_SUCCESS': {
            debugger
            return {
                ...state, value: action.value
            }
        }
        default:
            return state
    }
}

    // Action

type ActionType = InferActionTypes<typeof actions>

const actions = {
    getCounterSuccess: (counterValue: number) => ({

        type: 'COUNTER_COUNTER_REDUCER/GET_COUNTER_SUCCESS',
        counterValue
    } as const),
incCounterSuccess: (value: number) => ({
        type: 'COUNTER_COUNTER_REDUCER/POST_COUNTER_SUCCESS',
        value
    } as const)
}

/*export const getCounterSuccess = (counterValue: number) => {
    return {
        type: 'COUNTER_COUNTER_REDUCER/GET_COUNTER_SUCCESS',
        counterValue
    }
}
export const incCounterSuccess = (value: number) => {
    return {
        type: 'COUNTER_COUNTER_REDUCER/POST_COUNTER_SUCCESS',
        value
    }
}*/

// Thunk

export const getCounter = () => async (dispatch: Dispatch<ActionType>) => {
    try {
        const value = await counterApi.getCounterValue()
        dispatch(actions.getCounterSuccess(value))
    } catch (e) {
        console.log(e)
    }
}
export const incCounter = () => async (dispatch: Dispatch<ActionType>, getState: () => AppStateType) => {
    let currentValue = getState().counter.value;
    let newValue = currentValue + 1;
    try {
        const value = await counterApi.incCounterValue(newValue)
            dispatch(actions.incCounterSuccess(value))
    } catch (e) {
        console.log(e)
    }
}