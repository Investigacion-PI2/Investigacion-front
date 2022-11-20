import axios from 'axios';
import authHeader from './auth-header';

const URL = 'https://domain/research/api/auth';

const getUserData = () => {
    return axios
        .get(
            `${URL}/research/api/auth/authenticate`, 
            {headers: authHeader()}
        )
        .catch(error => {
            console.log(error)
        });
}
