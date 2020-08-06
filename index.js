require('dotenv').config();

const express = require("express");
const axios = require("axios");
const app = express();

let API_KEY = process.env.API_KEY
//using .env to hide our api key

app.set('view engine', 'ejs')
//use ejs as the view engine
app.use(express.static('static'))
//express using static to access css
app.get("/", (req, res)=>{
    let qs = {
        params: {
            s: 'star wars',
            apikey: API_KEY


        }
    };
    axios.get('http://www.omdbapi.com', qs)
    .then((response)=>{
        console.log(response.data)
        let episodes = response.data.Search
        //setting a variable to our data
        res.render('home', {episodes})
        //render home with the data
    })
    .catch(err =>{
        console.log(err)
    })
})

app.listen(3000)