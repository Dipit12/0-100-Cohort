function getData(dataID, getNextData){
    setTimeout(()=>{
        console.log("data",dataID);
        if(getNextData){
            getNextData();
        }
    },2000);
}
// lets say we want to call 3 functions which are executed after 2 seconds of their previous function cal

getData(1, ()=>{
    getData(2, ()=>{
        getData(3);
    });
})
