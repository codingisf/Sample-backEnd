import  express  from "express";

const route = express.Router();

route.get('/movies',(req,res) =>{
    res.send("from get method")
});
route.post('/movies',(req,res) =>{
    res.send("from post method")
});
route.put('/movies/:id',(req,res) =>{
    res.send("from put method")
});
route.delete('/movies/:id',(req,res) =>{
    res.send("from delete method")
});


export default route;
