import { useReducer } from "react";
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            return state;
    }
}
function Counter() {
    const [state, dispatch] = useReducer(reducer, { count: 0 });
    return (
        <div>
            <h1 className="p-2">Count: {state.count}</h1>
            <button className="m-2" onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button className="m-2" onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
    );
}

export default Counter;