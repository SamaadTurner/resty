import { useState, useEffect} from 'react'
import axios from 'axios';
import './App.css'
import Header from '../Components/Header/index.jsx';
import Footer from '../Components/Footer/index.jsx';
import Form from '../Components/Form/index.jsx';
import Results from '../Components/Results/index.jsx';

function App() {
  const [data, setData] = useState(null);
  const [requestParams, setRequestParams] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    console.log('An Event Occured');
  });

  useEffect(() => {
    console.log('An Event Occured');
  });

  useEffect(() => {
    async function getData(){
      if(requestParams.method === 'GET'){
        let response = await axios.get(requestParams.url)
        setData(response.data.results)
      }
      if(requestParams.method === 'POST'){
        let response = await axios.post(requestParams.url, requestParams.json)
        setData(response.data.results)
      }
      if(requestParams.method === 'PUT'){
        let response = await axios.put(requestParams.url, requestParams.json)
        setData(response.data.results)
      }
      if(requestParams.method === 'DELETE'){
        let response = await axios.delete(requestParams.url)
        setData(response.data.results)
      }
    }
    if(requestParams.method && requestParams.url){
      getData();
    }
  }, [requestParams])


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
