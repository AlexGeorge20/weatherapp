import request from 'postman-request'

export const forecast = (lat,long,callback)  =>{
    const url = 'http://api.weatherstack.com//current?access_key=d1d1f95873471cb4033f361754bfe242&query='+(lat) +','+(long) +'&units=m';
    // console.log("FORECAST Url",url);
    request({url : url, json : true},(error ,response)=>{
        if(error){
            callback('Unable to connect!!!')
        }else if (response.body.error){
            callback('UNABLE to find location!!',undefined)
        }else{
            callback(undefined,"WEATher description--"+ response.body.current.weather_descriptions[0]+ " TEmperature is "+ response.body.current.temperature + "deg celsius feels like "+ response.body.current.feelslike+ "deg celsius at "+response.body.location.name + "Humidity is--" + response.body.current.humidity)
        }

    })
}