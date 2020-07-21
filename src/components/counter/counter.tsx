import React, {useEffect} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getCounter, incCounter} from "../../redux/counterReducer";

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
            {/*<button onClick={() => props.incCounter(props.value)}>Add</button> передаєм значення лічильника в thunk і там його збільшуємо на одиницю */}
        </div>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        value: state.counter.value
    }
}

export default connect(mapStateToProps, {getCounter, incCounter})(Counter);