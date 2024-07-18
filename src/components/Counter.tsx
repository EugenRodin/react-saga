import { decrementAsync, incrementAsync } from "../redux/counterSlice.ts"
import { RootState } from "../redux/store.ts"
import { useDispatch, useSelector } from "react-redux"


const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (
    <div className="counter">
      <h1 className="count">Counter: {count}</h1>
      <button className="increment" onClick={() => dispatch(incrementAsync())}>Increment in 1sec</button>
      <button className="decrement" onClick={() => dispatch(decrementAsync())}>Decrement in 1sec</button>
    </div>)
}

export default Counter