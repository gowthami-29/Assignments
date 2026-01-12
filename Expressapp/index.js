const express =require("express");
const os=require("os");
const dns=require("dns")
const readData = require('./read.js')
const app=express()
const port=3000
app.listen(port,(req,res)=>{
    console.log("server running..")
})
app.get('/readfile',(req,res)=>{
    const data=readData();
    res.send(data)
})
app.get('/systemdetails',(req,res)=>{
    res.json({
            systemPlatform:os.platform(),
            totalMemory:(os.totalmem()/(1024**3)).toFixed(2)+"GB",
            freeMemory:(os.freemem()/(1024**3)).toFixed(2)+"GB",
            cpuModel:os.cpus()[0].model
    })
})
app.get('/test',(req,res)=>{
    res.send("Test route is working!")
})
app.get('/getip',(req,res)=>{
    dns.lookup("masaischool.com",(err,address)=>{
        if(err){
            res.send("error fetching ip")
        }
        else{
            res.send(address);
        }
    })
})