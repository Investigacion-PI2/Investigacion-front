import axios from 'axios';

const URL = 'https://domain/research/api/auth';

const login = (username: string, password: string) => {
    return axios
        .post(
            `${URL}/research/api/auth/authenticate`, 
            {username, password}
        )
        .then(response => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
}

const logout = () => {
    localStorage.removeItem("user");
}

const AuthService = {
    login, logout
}

export default AuthService;