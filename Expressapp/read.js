const fs=require("fs")
const path=require("path")
function readData(){
    const filepath =path.join(__dirname,"Data.txt");
    const data=fs.readFileSync(filepath,"utf-8")
    return data;
}
module.exports=readData;
