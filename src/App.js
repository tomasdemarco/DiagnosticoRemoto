import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import InfoList from './components/infoList/InfoList';
import ErrorServer from './components/errorServer/ErrorServer';
import useFetch from './hooks/useFetch';
import { Row, Jumbotron, Spinner } from 'reactstrap';


function App() {
  const [url, setUrl] = useState('');
  const { loading, data: info, error } = useFetch(url);
  const [id, setId] = useState('');

  return (
    <div className="App">
      <Jumbotron fluid>
        <Header fetchPersonas={setUrl} info={info} setId={setId} id={id}/>
        {loading?
      <div className="loading"><Spinner type="grow" color="primary" children="" style={{ width: '3rem', height: '3rem' }}/></div>
        : null }
        {info?.resultArray.message? <ErrorServer/> : id !== ''? <InfoList info={info} id={id} /> 
        : loading? null : <div className="message"><Row>Visualice la informacion de su terminal.</Row></div>}
      </Jumbotron>
    </div>
  );
}
export default App;
