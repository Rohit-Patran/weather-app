const express = require("express");
const bodyParser = require("body-parser");
const weather = require("openweather-apis");

const app = express();

app.listen(3000);

app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render("index",{temp:null});
});

app.use(bodyParser.urlencoded({extended:false}))

app.post('/',(req,res)=>{
    weather.setCity(req.body.city);
    weather.setAPPID("178d9c889fd7afcbe3f4bc3cca993289");
    weather.getAllWeather((err,data)=>{
        console.log(err);
        res.render("index",{data:data});
    });
});

app.use(express.static("static"));