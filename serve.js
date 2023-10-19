const express = require("express");
const bcript = require("bcryptjs");
const app = express();
app.use(express.json());


app.listen(4321, ()=> {console.log("funciona")});

app.post("/cript",  async function cript(req, res){
  const {password} = req.body;
  const newPassword = await bcript.hash(password, 11)

  return res.send(password)
})