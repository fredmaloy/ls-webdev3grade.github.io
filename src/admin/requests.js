import axios from 'axios';
import { thisExpression } from 'babel-types';

const token = localStorage.getItem("token");

axios.defaults.baseURL = 'https://webdev-api.loftschool.com';
axios.defaults.headers["Authorization"] = `Bearer ${token}`;

axios.interceptors.response.use(
    function(response) {
        return response;
    },
    error => {

        const originalReguest = error.config;

        if(error.response.status === 401) {
            return axios.post('/refreshToken').then(response => {
                const token = response.data.token;
                localStorage.setItem('token', token);
                axios.defaults.headers['Authorization'] = `bearer ${token}`;
                originalReguest.headers['Authorization'] = `bearer ${token}`;
                return axios(originalReguest);
            }); 
        }

        return Promise.reject(error);
    }
  ) 

export default axios;