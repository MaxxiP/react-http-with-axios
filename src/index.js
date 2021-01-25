import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import axios from 'axios';

// Setting a base URL for using a globally URL
//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// with this, a authorization header can be added to each request
//axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';
// header types for post request can be set for example aswell as get etc
//axios.defaults.headers.post['Content-Type'] = 'application/json';
/*
axios.interceptors.request.use(request => {
    console.log(request);
    // Has to be returned, otherwise no request config will be received back
    // add authorization header in here !!!!!!!!!!!!!!!!
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

axios.interceptors.response.use(response => {
    //console.log(response);
    // Has to be returned, otherwise no response config will be received back
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});
*/
ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
