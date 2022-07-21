const express = require("express");
const bodyParser = require("body-parser");
const weather = require("openweather-apis");

const app = express();
const port = process.env.PORT || 3000;
app.listen(port);

app.set("view engine","ejs");

app.get('/',(req,res)=>{
    res.render("index",{data:null});
});

app.use(bodyParser.urlencoded({extended:false}))

app.post('/',(req,res)=>{
    weather.setCity(req.body.city);
    weather.setAPPID("YOUR-API-KEY");
    weather.getAllWeather((err,data)=>{
        console.log(err);
        res.render("index",{data:data});
    });
});

app.use(express.static("public"));
