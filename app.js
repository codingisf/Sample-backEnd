const Express=require('express');

const app = Express();
const port = 6969;


app.get('/',(req,res) => {
    res.json({ msg:'Hellow World'})
})

app.listen(port,()=>{
    console.log(`Server is Running @ http://localhost:${port}`);
})