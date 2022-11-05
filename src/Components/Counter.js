import React, { useReducer, useState } from "react";
import { Link, Outlet } from "react-router-dom";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: 0 };
  
    default:
      return;
  }
}


function Counter() {

    const [state, dispatch] = useReducer(reducer, { count: 0 });

    function increment() {
      dispatch({ type: "increment" });
    }
    function decrement() {

      dispatch({ type: "decrement" });
    }
    function reset() {
      dispatch({ type: "reset" });
    }

    return (
      <div>
        <div className="header">
          <p className="logo-element"> Counter </p>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/"> Home</Link>
              </li>
              <li>
                <Link to="*"> Count History</Link>
              </li>
              <li>
                <Link to="#"> error</Link>
              </li>
            </ul>
          </nav>

          <Outlet />
        </div>

        <h1 className="ouput"> Count: {state.count} </h1>
        <div className="btns">
          <button className="increment-btn" onClick={increment}>
            INCREMENT
          </button>
          <button className="decrement-btn" onClick={decrement}>
            DECREMENT
          </button>
          <button className="reset-btn" onClick={reset}>
            RESET
          </button>
        </div>
      </div>
    );
    
}



export default Counter;
