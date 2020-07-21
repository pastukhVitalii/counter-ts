import React, {useEffect} from "react";
import {getCounter, incCounter} from "../../redux/counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";

const Counter = () => {

    const dispatch = useDispatch()
    const value = useSelector((state: AppStateType) => state.counter.value)

    useEffect(() => {
        dispatch(getCounter())
    }, [])

    const increment = () => {
        dispatch(incCounter())
    }
    return (
        <div>
            <h1>Counter</h1>
            <p>value: <strong>{value}</strong></p>
            <button onClick={increment}>Add</button>
        </div>
    )
}

export default Counter;

/*
type MapStatePropsType = {
    value: number
}

type MapDispatchPropsType = {
    getCounter: () => void
    incCounter: () => void
}

type PropsType = MapStatePropsType & MapDispatchPropsType

const Counter: React.FC<PropsType> = (props) => {
debugger
    useEffect(() => {
        props.getCounter()
    }, [])
    return (
        <div>
            <h1>Counter</h1>
            <p>value: <strong>{props.value}</strong></p>
            <button onClick={props.incCounter}>Add</button>
            {/!*<button onClick={() => props.incCounter(props.value)}>Add</button> передаєм значення лічильника в thunk і там його збільшуємо на одиницю *!/}
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        value: state.counter.value
    }
}

export default connect(mapStateToProps, {getCounter, incCounter})(Counter);*/
