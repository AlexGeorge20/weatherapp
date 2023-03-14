import request from 'postman-request'
import {geocode} from './utils/geocode.js'
import {forecast} from './utils/forecast.js'
// const url = 'http://api.weatherstack.com//current?access_key=d1d1f95873471cb4033f361754bfe242&query=8.5241,76.9366&units=m';

// request({url : url, json : true}, (err,response,body)=>{
//     // let data = JSON.parse(response.body)
//     // console.log("RESPonse",response.body.current);
//     if(err){
//         console.log("UNABLE to connect",err);
//     }else if(response.body.error){
//         console.log("UNABLE TO find location");
//     }else{
//     console.log(response.body.current.weather_descriptions[0],"  TEmperature is "+ response.body.current.temperature + "deg celsius feels like "+ response.body.current.feelslike+ "deg celsius");
// }
// })
//----------------------------------------------------
if(!process.argv[2]){
    console.log("Please provide location");
}else{

    geocode(process.argv[2], (error,{latitude,longitude,location})=>{
        if(error){
            return console.log(error);
        }
            console.log("ERROR", error);
            console.log("DAta", latitude,longitude,location);
            forecast(latitude,longitude, (error, forecastData) => {
                if(error){
                    return console.log(error);
                }
                console.log("LOcation", location)
                console.log('FORECASTData', forecastData)
            })
            console.log("PROCESS",process.argv[2]);

    })
}
//-----------------------------------------------------



