
import http from 'http'

const url = 'http://api.weatherstack.com//current?access_key=d1d1f95873471cb4033f361754bfe242&query=40,-75&units=m';
let data =''
const request = http.request(url, (response)=>{
    response.on('data', (chunk) =>{
    data = data + chunk.toString(); 
  
 })

    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log("BodY",body);
    })

})

request.on('error',(error)=>{
    console.log("An error", error);
})

request.end()
