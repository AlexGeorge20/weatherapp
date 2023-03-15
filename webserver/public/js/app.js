
console.log("Client side JS loaded ");

//==========================================
// const fetchfn =async () =>{

//     let response  = await fetch('https://puzzle.mead.io/puzzle');
//     let data =  await response.json();
//     console.log("DATa:-",await data);
// }

// fetchfn();
//-----------------------------------------------

// fetch('https://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then(data =>{
//         console.log("DATA",data.puzzle);
//     })
// })
//===========================================================
let loc='';
const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const msg1 = document.querySelector('#msg1')
const msg2 = document.querySelector('#msg2')

weatherForm.addEventListener('submit',(e)=> {
    e.preventDefault();
    loc = search.value
    console.log(loc);
    msg1.textContent = "Loading..."
    msg2.textContent = ""

    fetchweather(loc)

})

const fetchweather =async (place='trivandrum') =>{
    console.log("IN fetchwthr",place);
    let response  =await fetch(`/weather?address=${place}`)
    let data = await response.json();
    console.log("DAtaAA",data);

    if(data.error){
        msg1.textContent = data.error
        console.log(data.error);
    }else{
        msg1.textContent = data.location
        msg2.textContent = data.forecast

        console.log("LOC--", data.location);
        console.log("Forecast--", data.forecast);

    }
}


