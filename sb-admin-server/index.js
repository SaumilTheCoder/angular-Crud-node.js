const express = require('express');
const bodyparser = require('body-parser');
const cors =require('cors');

const mysql = require('mysql2');
const res = require('express/lib/response');

const app =express();

app.use(cors());
app.use(bodyparser.json());

// database connection..

const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'angular'
});


// get all data

app.get('/user',(req,res)=>{

    // console.log('get users'); for checking

    let qr =`select * from  user`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all user data',
                data:result
            });
        }
    });

});

// country

app.get('/country',(req,res)=>{

    let qr = `select * from country`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all country data..',
                data:result
            });
        }
    }); 

})

// state

app.post('/state',(req,res)=>{

    let qr = `select * from state`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all state data..',
                data:result
            });
        }
    }); 

})

app.post('/state/:id',(req,res)=>{

   let gId = req.params.id;

    let qr =`select * from  state where country_id = ${gId}`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all state data..',
                data:result
            });
        }
    }); 

})

// city

app.post('/city',(req,res)=>{

    let qr = `select * from city`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err,'errs');
        }

        if(result.length>0)
        {
            res.send({
                message:'all city data..',
                data:result
            });
        }
    }); 

})

app.post('/city/:id',(req,res)=>{
    
    // console.log('get single data');

    let gId = req.params.id;

    let qr =`select * from  city where state_id = ${gId}`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err);
        }

        if(result.length>0)
        {
            res.send({
                message:'get single data..',
                data:result
            });
        }
        else{
            res.send({
                message:'data not found'
            });
        }
    });

})

// get single data..

app.get('/user/:id',(req,res)=>{
    
    // console.log('get single data');

    let gId = req.params.id;

    let qr =`select * from  user where id = ${gId}`;

    db.query(qr,(err,result)=>{

        if(err)
        {
            console.log(err);
        }

        if(result.length>0)
        {
            res.send({
                message:'get single data..',
                data:result
            });
        }
        else{
            res.send({
                message:'data not found'
            });
        }
    });

})

// check database Connection..

db.connect(err=>{
    if(err){console.log(err,'db');}
    console.log('database connected..');
});

// create the data

app.post('/user',(req,res)=>{
    // console.log(req.body,'create data');

    let firstname = req.body.firstname;
    let lastname = req.body.lastname;
    let country = req.body.country;
    let state = req.body.state;
    let city = req.body.city;
    let gender = req.body.gender;
    let age = req.body.age;
    let email = req.body.email;
    let mobile = req.body.mobile;


    let qr = `insert into user(firstname,lastname,country,state,city,gender,age,email,mobile)
                values('${firstname}','${lastname}','${country}','${state}','${city}','${gender}','${age}','${email}','${mobile}')`;

        db.query(qr,(err,result)=>{
            if(err){console.log(err);}
            console.log(result,'result');

            res.send({
                message:'data inserted..',
            });

            // if(result.length>0){
            //     res.send({
            //         message:'data inserted'
            //     });
            // }else{
            //     res.send({
            //         message:'wrong..'
            //     })
            // }
        });

});

// update data

app.put('/user/:id',(req,res)=>{

      console.log(req.body,'update data');

        let gID = req.params.id;

        let firstname = req.body.firstname;
        let lastname = req.body.lastname;
        let country = req.body.country;
        let state = req.body.state;
        let city = req.body.city;
        let gender = req.body.gender;
        let age = req.body.age;
        let email = req.body.email;
        let mobile = req.body.mobile;

      
      let qr = `update user set firstname = '${firstname}', lastname = '${lastname}',country = '${country}',state = '${state}',city = '${city}',gender
       = '${gender}', age = '${age}', email = '${email}',mobile = '${mobile}' where id = ${gID}`;

       db.query(qr,(err,result)=>{
            
        if(err){console.log(err);}

        res.send({
            message:'data updated..'
        });

       });

});

// delete data

app.delete('/user/:id',(req,res)=>{
    
    let qId = req.params.id;

    let qr = `delete from user where id = '${qId}'`;

    db.query(qr,(err,result)=>{

        if(err) {console.log(err);}

        res.send({
            message:'data deleted.. '
        });
    });

})




app.listen(3000,()=>{
    console.log("server is running");
})