import {  useNavigate } from "react-router-dom";

export default function authHeader() {
    const user = localStorage.getItem("user");
    let token = null;
    if(user)
        token = JSON.parse(user).token;

    if (token) {
        return { Authorization: 'Bearer ' + token, 'Content-Type': 'application/json' };
    } else {
        return {};
    }
}