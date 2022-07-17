import { useReducer } from 'react';
import Events from './Events.js';
import EventForm from './EventForm.js';
import reducer from '../reducers/index.js';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <>
      <EventForm state={state} dispatch={dispatch}/>
      <Events state={state} dispatch={dispatch}/>
    </>
  );
};

export default App;
