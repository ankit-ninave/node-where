// oky okuy u mean functions are call each other in neseted way that repeates it self and it is more complecated to handle i.e we call it call back hell?


// What is Callback Hell?
// Callback Hell is a situation in JavaScript where too many functions are nested inside each other because each one is waiting for the previous task to finish.
// This usually happens when you're handling multiple asynchronous tasks using callbacks.

// 🔥 Why it's called "Hell"?
// Because the code becomes:
// 😵 Confusing to read
// 🧩 Hard to manage
// ❌ Difficult to debug
// 📛 Looks like a pyramid or staircase



function lFN_WakeUp(callback){
    console.warn('Wake up ...ankit')
    setTimeout(()=>{
        callback(lFN_Sleep);
    },2000);
}

function lFN_Study(callback){
console.warn('Studying...')
 setTimeout(()=>{
  callback()
 },3000)
}

function lFN_Sleep(){
 setTimeout(()=>{
    console.warn('Sleep now...')
 },5000)
}


lFN_WakeUp(lFN_Study)