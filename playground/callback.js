

// const geocode =(address,callback)=>{
    
//     setTimeout(()=>{
//         const data= {
//             latitude: 0,
//             longitude : 0
//         }
//     callback(data)
//     },3000)
    

// }

// let data= geocode('US', (datas)=>{
//     console.log("DATA",datas);
// })

//-----------------------------------------------------------------------
//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

// const add = (a,b,callback) => {
//     setTimeout(()=>{
//         const sum = a+b;
//         callback(sum)

//     },2000)
    

// }
// add(1, 4, (sum) => {
//     console.log(sum) // Should print: 5
// })

//------------------------------------------

// const geocode =(address,callback)=>{
// setTimeout(() => {
//     const data = {
//         latitude : 0,
//         longitude : 0
//      }
//      callback( data )
//     }, 3000);
// }

// geocode('Philadelphia', (hoi)=>{
//     console.log("DATAcb",hoi);
// });
//-------------------------------------------------


const add = (a,b, callback) =>{
    setTimeout(() => {
        callback(a+b)
    }, 2000);

}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})