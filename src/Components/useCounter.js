import {useReducer } from "react";

export const useCounter = (reducer,stateValue)=>{
    const [state, setValue] = useReducer(reducer, stateValue);

    function increment() {
      setValue({ type: "increment" });
    }
    function decrement() {

      setValue({ type: "decrement" });
    }
    function reset() {
      setValue({ type: "reset" });
    }

    return [increment,decrement,reset,state]
}
