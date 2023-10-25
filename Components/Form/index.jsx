import { useState } from 'react';

import './Form.scss';

const Form = (props) => {
  const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [method, setMethod] = useState('GET');
  const [json, setJson] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      method: method,
      url: url,
      json: json,
    };
    props.handleApiCall(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit} >
        <label>
          <span data-testid="form-span" >URL: </span>
          <input data-testid="form-input" name='url' type='text' onChange={(e) => setUrl(e.target.value)}/>
          <button data-testid="form-button" type="submit">GO!</button>
        </label>
        <label className="methods">
          <span data-testid="form-get" id="get" onClick={() => setMethod('GET')} style={{ backgroundColor: method === 'GET' ? 'green' : 'grey'}}>GET</span>
          <span data-testid="form-post" id="post" onClick={() => setMethod('POST')} style={{ backgroundColor: method === 'POST' ? 'green' : 'grey'}}>POST </span>
          <span data-testid="form-put" id="put" onClick={() => setMethod('PUT')} style={{ backgroundColor: method === 'PUT' ? 'green' : 'grey'}}>PUT</span>
          <span data-testid="form-delete" id="delete" onClick={() => setMethod('DELETE')} style={{ backgroundColor: method === 'DELETE' ? 'red' : 'grey'}}>DELETE</span>
        </label>
        {method === 'POST' && <textarea rows="4" cols="35" onChange={(e) => setJson(e.target.value)}/>}
        {method === 'PUT' && <textarea rows="4" cols="35" onChange={(e) => setJson(e.target.value)}/>}
      </form>
    </>
  );
}


export default Form;





