// function getData(dataID, getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("data",dataID);
//             if(getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
    
// }

// simpler code
const getPromise = ()=>{
    return new Promise((resolve,reject)=>{
        console.log("i am a promise");
        resolve("success");
    })
}

let promise = getPromise();
promise.then(()=>{
    console.log("promise resolved")
})
promise.catch(()=>{
    console.log("promise rejected")
})