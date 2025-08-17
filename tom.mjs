import { error } from "console";
import { access } from "fs";
import fs from "fs/promises";
import { escape } from "querystring";
import { start } from "repl";

// await fs.writeFile('file.txt',"Buy milk",err=>{
// if(err){
//     console.log(err)
// }else{
//     console.log('file write comple',data)
// }
// })

// async function lFN_peacock(){
//     let color = setTimeout(()=>{
// console.log('it works')
//     },1000)

//    // return color
// }

// await lFN_peacock();
// console.log('but not before me')

// function lFN_WakeUp(callback){
//     console.warn('Wake up ...ankit')
//     setTimeout(()=>{
//         callback(lFN_Sleep);
//     },2000);
// }

// function lFN_Study(callback){
// console.warn('Studying...')
//  setTimeout(()=>{
//   callback(new Error('failed'))
//  },3000)
// }

// function lFN_Sleep(){
//  setTimeout(()=>{
//     console.warn('Sleep now...')
//  },5000)
// }

// lFN_WakeUp(lFN_Study)


// function name(){
// let x = 9;
// function y(){
//     console.log(x)
// } return y
// }

// let h = name();
// console.log(h)
// h();
/*
let l_arry = [1, 2, 4, 8, 9];
l_arry.map((l_row) => { 
  if(l_row >8){ console.log(l_row*2)}
  return l_row
});


global.g_name = 'Ram'

lFN_Normal(); // can be used before initialisation

function lFN_Normal(){
  console.log(`this is normal`,g_name)
}

lFN_Normal(); // can be used before initialisation


//vedic();     //ReferenceError: Cannot access 'vedic' before initialization
const vedic  = () =>{
  console.log(`An Arrow function`,g_name); //TypeError: Cannot read properties of undefined (reading 'g_name')
}

vedic();
*/



//What is the difference between function declaration and arrow functions?
/*
global.x = 10;

lFN_FunctionDeclaration();  // we can access it before initialisation
function lFN_FunctionDeclaration(){
  console.log('this is lFN_FunctionDeclaration',x);
 // console.warn(`${{this.x}}`); // we can access value of it
}

lFN_FunctionDeclaration();   


let l_arrow = () =>{
  let x = 70
    console.log('this is l_arrow_function');
    console.log(x);  //
}

l_arrow();*/

let l_arr = [4,6,12,4,5,63,2]
let l_arr2 = ['4','6','12',"4",'5','63',"2"]

l_arr2 = l_arr2.map((l_row,index,value)=>{return l_row + 2 + '  ' + index + '  ' + value});
//console.warn(l_arr2)


let l_rr = l_arr.filter((l_row,index,value)=>{
    console.log(`Checking: ${l_row}, index: ${index}, full array: ${value}`);

  return l_row < 12})
console.warn(l_rr)


l_arr2.reduce((l_x)=>{return l_x + })