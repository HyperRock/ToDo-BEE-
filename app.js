const express=require('express');
const mongoose=require('mongoose');
const app=express();
const dbconnect=require('./connect/connect');
const data=require('./Routers/routes');
const port=4000;
dbconnect("mongodb+srv://Arsh:1234@cluster0.dii0g3x.mongodb.net/?retryWrites=true&w=majority");
const database=mongoose.connection;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/todo',data);
app.get('/',(req,res)=>{
    res.send("hi there");
})



database.on("error", (error) => {
  console.log(error);
});
database.once("connected", () => {
  console.log("Datbase is connected");
});
app.listen(port,(error)=>{
    try {
        console.log(`Server started on port no.${port}`);
    } catch (error) {
        console.log(error);
    }
})