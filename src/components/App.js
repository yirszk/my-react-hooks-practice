import { useEffect, useReducer } from 'react';
import Events from './Events.js';
import EventForm from './EventForm.js';
import OperationLogs from './OperationLogs.js';
import AppContext from '../contexts/AppContext.js';
import reducer from '../reducers';

const APP_KEY = 'appWithRedux'

const App = () => {
  const appState = localStorage.getItem(APP_KEY);
  const initialState = appState
    ? JSON.parse(appState)
    : { events: [], operationLogs: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem(APP_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <EventForm />
      <Events />
      <OperationLogs />
    </AppContext.Provider>
  );
};

export default App;
