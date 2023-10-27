import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';

import './App.scss';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Form from './Components/Form';
import Results from './Components/Results';
import History from './Components/History';

export const initialState = {
  data: null,
  loading: false,
  history: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD DATA':
      return {
        ...state,
        data: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'HISTORY':
      return {
        ...state,
        history: [...state.history, action.payload],
      };
    default:
      return state;
  };
}

function App() {
  const [requestParams, setRequestParams] = useState({
    method: '',
    url: '',
    json: '',
  });
  const [state, dispatch] = useReducer(dataReducer, initialState);

  const getData = async () => {
    try {
      if (requestParams.method === 'GET' && requestParams.url) {
        let response = await axios.get(requestParams.url);
        dispatch({ type: 'ADD DATA', payload: response.data });
        let historyData = [requestParams, response.data];
        dispatch({ type: 'HISTORY', payload: historyData });
      }
    } catch (error) {
      dispatch({ type: 'ADD DATA', payload: 'no data available' });
    } finally {
      dispatch({ type: 'LOADING', payload: false });
    }
  };

  const callApi = (requestParams) => {
    setRequestParams(requestParams);
  };

  const historyClickHandler = (results) => {
    dispatch({ type: 'ADD DATA', payload: results });
  };

  useEffect(() => {
    dispatch({ type: 'LOADING', payload: true });
    if (requestParams.method && requestParams.url) {
      getData();
    }
  }, [requestParams]);

  return (
    <>
      <Header />
      <div data-testid="app-method" className="divvy">
        Request Method: {requestParams.method}
      </div>
      <div data-testid="app-url" className="divvy">
        URL: {requestParams.url}
      </div>
      <div className="divvy">Sent JSON: {requestParams.json}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} loading={state.loading} />
      <History history={state.history} historyClickHandler={historyClickHandler} />
      <Footer />
    </>
  );
}

export default App;
