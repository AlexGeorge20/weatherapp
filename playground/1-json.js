import fs from 'fs'
// const book = {
//     title : "Ego is the enemy",
//     author : 'Ryan Holiday'
// }

// const bookJson= JSON.stringify(book)
// console.log("BOOKJSON",bookJson);

// fs.writeFileSync('1-json.json',bookJson)
//----------------------------------------------
const dataBuffer= fs.readFileSync('1-json.json')
const dataJSON=dataBuffer.toString();
const data = JSON.parse(dataJSON)

data.name = "Alex"
data.country = "India"
fs.writeFileSync('1-json.json',JSON.stringify(data))

console.log(data);