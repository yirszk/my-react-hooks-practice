import { useReducer } from 'react';
import Events from './Events.js';
import EventForm from './EventForm.js';
import OperationLogs from './OperationLogs.js';
import AppContext from '../contexts/AppContext.js';
import reducer from '../reducers';

const App = () => {
  const initialState = { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <EventForm />
      <Events />
      <OperationLogs />
    </AppContext.Provider>
  );
};

export default App;
