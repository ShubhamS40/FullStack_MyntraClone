const express = require('express');
const path=require("path")
const fs=require("fs")
const cors=require("cors")
// const bodyParser = require('body-parser');

// const { getStoredItems, storeItems } = require('./data/items');

const app = express();
app.use(cors())

const pat=path.join(__dirname,"item.json")
// const f=fs.readFileSync(pat,'utf-8')
// JSON.stringify(f)


// app.use(bodyParser.json());

app.use("/item",(req,res)=>{
  res.sendFile(pat)
})

app.listen(3000,()=>{
  console.log("port is listening on 3000");
});