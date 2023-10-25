import { useState } from 'react'

import './App.css'
import Header from '../Components/Header/index.jsx';
import Footer from '../Components/Footer/index.jsx';
import Form from '../Components/Form/index.jsx';
import Results from '../Components/Results/index.jsx';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);

  const apiCall = async (requestParams) => {
    setLoading(true);
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],

    };
    setData(data);
    setLoading(false);
    setRequestParams(requestParams);
  }
  return (
    <>
         <Header />
      <div data-testid="app-method" className="divvy">Request Method: {requestParams.method}</div>
      <div data-testid="app-url" className="divvy">URL: {requestParams.url}</div>
      { 
        requestParams.json
        ? <div className="divvy">Sent JSON: {requestParams.json}</div>
        : <div></div>
      }
      <Form handleApiCall={apiCall} />
      <Results data={data} loading={loading} />
      <Footer />
 
    </>
  );
}

export default App
