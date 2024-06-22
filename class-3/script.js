const express = require('express');
const app = express();

app.get('/', (req, res)=> {
  res.send('Hello ! Is the server working')
});
app.get("/service", (req, res) =>{
    res.send("Service: This is the service section");
});

app.listen(8000, () => console.log("Server is connected in port: 8000"));
