import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './store/orders';

function App() {
  const count = useSelector((state) => state.order.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="text-blue-600 text-center text-7xl">Count is {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}

export default App;
