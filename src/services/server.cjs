const express = require('express')
const { json } = require('express')
const cors = require('cors')
const axios = require('axios');
require('dotenv').config();

const app = express();
app.use(json());
app.use(cors({
    origin:"*",
    methods:['GET','POST']
}));

app.listen(8181, () => console.log('API is running on http://localhost:8181.'));

const URL = 'http://localhost:8080/research/api';

app.post('/auth', async(req, res) => {
    const token = await axios
        .post(
            `${URL}/auth/authenticate`, 
            req.body
        )
        .then(response => {
            if (response.data.token) {
                //localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        })
        .catch((e) => console.log(e))
    
    res.json(token)
})

app.get('/success', async(req,  res) => {
    const success = await axios
        .get(`${URL}/auth/success`, {headers:{Authorization:req.headers.authorization}})
        .catch((e) => console.log(e))
    res.json(success.data)
})