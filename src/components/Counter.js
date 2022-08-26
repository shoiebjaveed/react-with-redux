import { useSelector, useDispatch } from 'react-redux';
import classes from './Counter.module.css';
import { counterActions } from '../store';
const Counter = () => {
  const dispatch  = useDispatch();
  const counter = useSelector(state => state.counter.counter);
  const show = useSelector(state => state.counter.showCounter);

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement(20))
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incrementHandler}>INCREMENT</button>
        <button onClick={decrementHandler}>DECREMENT</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
