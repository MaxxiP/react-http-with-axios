import axios from 'axios';

// creating an axios instance for configuration
const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

instance.defaults.headers.common['Authorization'] = 'AUTH_TOKEN_FROM_INSTANCE';

// Not necessary since application/json is standart
//instance.defaults.headers.post['Content-Type'] = 'application/json';

instance.interceptors.request.use(request => {
    //console.log(request);
    // Has to be returned, otherwise no request config will be received back
    // add authorization header in here !!!!!!!!!!!!!!!!
    return request;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

instance.interceptors.response.use(response => {
    //console.log(response);
    // Has to be returned, otherwise no response config will be received back
    return response;
}, error => {
    console.log(error);
    return Promise.reject(error);
});

export default instance;