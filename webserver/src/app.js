import express from 'express'
import path from 'path';
import { fileURLToPath } from 'url';
import hbs from 'hbs'
const __filename = fileURLToPath(import.meta.url);
import {geocode} from './utils/geocode.js'
import {forecast} from './utils/forecast.js'
const __dirname = path.dirname(__filename);
// console.log("DIRNAMEE",__dirname)
// console.log("FILENAMEE",__filename);
console.log("JOined path    ",path.join(__dirname,'../public'));

const dirPath  = path.join(__dirname,'../public');
const app= express()
const port = process.env.PORT || 3000;
const viewspath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


app.set('views', viewspath);
app.set('view engine', 'hbs');
hbs.registerPartials(partialsPath)

app.use(express.static(dirPath))

app.get('', (req,res)=>{
    res.render('index',{
        title :'Weather app',
        name : 'Alex'
    })
})

app.get('/help',(req,res)=>{
    // res.send('<h3>help added</h3>')
    res.render('help',{
        title:'Help',
        name : "Helper page"
    })
})
app.get('/about',(req,res)=>{
    // res.send('<h2>About Page</h2>')
    res.render('about',{
        title : 'About me',
        name : 'Alexxx'
    })
})
app.get('/title',(req,res)=>{
    res.send({
        forecast: 'Cloudy day',
        place : "Trivandrum"
    })
})

app.get('/products',(req,res)=>{
    if(!req.query.search){
    return res.send({
    error: 'You must provide a search term'
    })}

    console.log("REQ",req.query);
   res.send({
        products: [req.query.search]  

   })
})

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error : 'You must provide an address to search'
        })
    }else{
        geocode(req.query.address, (error,{latitude,longitude,location}={} )=>{
            if(error){
                res.send(error)
                return console.log(error);
            }
                console.log("ERROR", error);
                console.log("DAta", latitude,longitude,location);
                forecast(latitude,longitude, (error, forecastData) => {
                    if(error){
                        return console.log(error);
                    }
                    res.send({
                        location : location,
                        forecast : forecastData
                    })
                    console.log("LOcation", location)
                    console.log('FORECASTData', forecastData)
                })
                console.log("PROCESS",req.query.address);
    
        })
    }
    // console.log("REQ",req.query);
    // res.send({
    //     forecast: 'Sunny day',
    //     place : "Trivandrum",
    //     address: req.query.address
    // })

})

app.use('/middleware',  (req, res, next)=> {
    // Do nothing if the request isn't a 'GET' request
    if (req.method !== 'GET') {
      return next();
    }
    res.send('Hello, MIDDLEWARE');
  });

  app.get('/help/*',(req,res)=>{
    // res.send('MY 404 page')
    res.render('404',{
        title : '404 Error Page',
        name: 'Error page',
        errMsg : 'Page not found'
    })
})

app.get('*',(req,res)=>{
    // res.send('MY 404 page')
    res.render('404',{
        title : '404 Error Page',
        name: 'Error page',
        errMsg : 'PAGE Not Found'
    })
})

app.listen(port, ()=>{
    console.log(`Server is up on port ${port}`);
})

