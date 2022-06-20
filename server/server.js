//importing the environment variable 
require('dotenv').config();
//importing express
const express = require("express");
//import db from db folder

//import cors
const cors = require("cors");
const db = require("./db");
//importing morgan 
const morgan = require("morgan");

const app = express() // app is the variable of the instance express

//allows diff domains from either the server
app.use(cors());
/**using morgan middel express function */
app.use(express.json());






//Get all Restuarants
app.get("/app/v1/restaurants", async (req, res)=>{
    try {
         //running a query to fetch 
    const results = await db.query("select * from restaurants");
    res.status(200).json({
        status: "success",
         results: results.rows.length,
        data: {
            //returns all rows in the restaurants in json
            restaurants: results.rows,
        },
    });
    } catch (err) {
        console.log(err);
    }
   
});

// Get single Restaurant
app.get("/app/v1/restaurants/:id", async (req, res)=>{
    console.log(req.params.id);
    try {
        const results = await db.query("select * from restaurants where id = $1",[req.params.id]);
         //select * from restaurants where id = req.params.id
          // $1 takes in the first params and you could specify columes using
           // select $2 from restaurants where id = $1, [req,params, name]
        console.log(results.rows[0]);
        res.status(200).json({
            status: "success",
            data: {
                //returns all rows in the restaurants in json
                restaurants: results.rows[0],
            },
        });
    } catch (error) {
        console.log(error);
    }


 
  
});
//creating using insert ** 
//Create a Restaurant
app.post("/app/v1/restaurants", async(req, res)=>{
    console.log(req.body);
    try {
        const results = await db.query ("INSERT INTO restaurants (name, location, price_range) values ($1,$2,$3) returning *", 
        [req.body.name, req.body.location, req.body.price_range]);
        console.log(results);
       
        res.status(201).json({
            status: "success",
            data: {
                restaurants: results.rows[0]
            }
        })
        
    } catch (error) {
        res.status(400).json('Something broke!');
    }
   
}    
);
//Updating Restaurant
app.put("/app/v1/restaurants/:id", async(req, res)=>{
    
    try {
        const results = await db.query ("UPDATE restaurants SET name=$1, location=$2, price_range=$3 where id=$4 returning *", 
        [req.body.name, req.body.location, req.body.price_range, req.params.id]);
           console.log(results);
           console.log(req.params.id);
      res.status(200).json({
        status: "success",
        data: {
            restaurant: results.rows[0]
        }
    })
    } catch (error) {
       
        res.status(400).json('Something broke!');
    }
});

//Deleting Restaurant
app.delete("/app/v1/restaurants/:id", async(req, res)=>{
    try {
        const results = await db.query ("DELETE from restaurants where id=$1", [req.params.id])
        res.status(204).json({
            status: "Deleled successfully"
        });
    } catch (error) {
       
        res.status(400).json('Something broke!');
        
    }
  
});




//Discount endpoints

//express listening to a specific port
//declaring the port 
// || 3001 is port used incase the main port is not working
 const port = process.env.PORT || 3001
app.listen(port,() => {
   console.log(`server is up and listening on port ${port}`);

});//3000 is the port and the callback function is in the brace