import  Express  from "express";
import route from "./Routes/movies.route.js";

const app = Express();
const port = 6969;


app.get('/',(req,res) => {
    res.json({ msg:'Hellow World'})
})

app.use('/movies',route);


app.listen(port,()=>{
    console.log(`Server is Running @ http://localhost:${port}`);
})