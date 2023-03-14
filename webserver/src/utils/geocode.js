
import request from 'postman-request'

export const geocode =(address,callback)=>{
    const geocodeurl='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiYWxleGdlb3JnZTIwIiwiYSI6ImNsZTJvZnBxMjAwa3Izb3M0Y3dsNGllMWUifQ.M5B8mfqZRCLjeMbTUu1o8g&limit=1';
    request({url : geocodeurl, json : true},(error,response)=> {
    
        if(error){
            callback("Unable to connect to location services",undefined)
        }else if(response.body.features.length === 0){
            callback({
                error:'UNABLE to find location!!,Try another search'}
                ,undefined)
        }else{
            callback(undefined, {
                latitude : response.body.features[0].center[1],
                longitude : response.body.features[0].center[0],
                location : response.body.features[0].place_name,
            })  }
    })}