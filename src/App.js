import { useEffect, useState } from 'react';
import '.././App.css';

const App = (props) => {
  const [state, setState] = useState(props);
  const { name, price } = state;

  // renderごとに実行
  useEffect(() => {
    console.log('This is like componentDidMount or componentDidUpdate');
  });

  // マウント・アンマウント時に実行
  useEffect(() => {
    console.log('This is like componentDidMount');
  }, []);

  // 第2引数が更新されたら実行
  useEffect(() => {
    console.log('This callback is for name only.');
  }, [name]);

  const reset = () => setState(props);

  return (
    <>
      <p>
        現在の{name}は{price}円です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button className="m-2" onClick={reset}>Reset</button>
      <input
        value={state.name}
        onChange={(e) => setState({ ...state, name: e.target.value })}
      />
    </>
  );
};

App.defaultProps = {
  name: 'sample',
  price: 1000,
};

export default App;
