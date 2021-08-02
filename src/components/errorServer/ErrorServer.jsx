import React from 'react';
import './errorServer.css';
import error from '../../img/error-500.png';
const ErrorServer = () => {
    return (
    <>
        <div className="div"><img className="error"  src={error} alt=""></img></div>
    </>
  );
};
export default ErrorServer;
