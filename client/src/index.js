import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

/** ReactDom. render will preview the App component into a document
 * element with an id of root inside our public under index.html
*/


const root = ReactDOM.createRoot( document.getElementById("root"));

root.render(
    <App/>

);