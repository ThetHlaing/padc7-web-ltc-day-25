const express = require('express');

const app = express();

const sql = require('./utilities/mysql');

const fruitsRoute = require('./routes/fruits');

const bodyParser  = require('body-parser');

app.use(bodyParser.urlencoded({extended : false}));
app.set('view engine','ejs');
app.use('/fruits',fruitsRoute);



app.get("/",(req,res)=>{

    sql.query("Select * from animal",(err,data)=>{
        if(err){
            console.log(err);
            res.send("Error");
        }
        else{
            console.log(data);
            res.send("Success");
        }
        

    })

    
})

app.listen(3000);