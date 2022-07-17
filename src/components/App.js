import { useReducer } from 'react';
import Events from './Events.js';
import EventForm from './EventForm.js';
import AppContext from '../contexts/AppContext.js';
import reducer from '../reducers';

console.log({ AppContext });

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);

  return (
    <AppContext.Provider value={'test'}>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
    </AppContext.Provider>
  );
};

export default App;
