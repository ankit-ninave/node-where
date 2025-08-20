let fs = require('fs');


// const l_as_asyc = fs.readFileSync('./file.txt');
// //const l_as_asyc = fs.readFileSync('./file.txt');
// console.warn('l_as_asyc',l_as_asyc.toString())
// console.warn('File Syc successfully')


// l_fs.readFile('././java_the_world/readmi.txt','utf8',(error,respose)=>{
//     if(error){
//         console.warn('error',error)
//     }else if(respose){
//     console.warn('respose',respose)
//     }
// });

// l_fs.appendFile('././java_the_world/readmi.txt','hey sinamika',(error)=>{
//         if(error){
//         console.warn('error',error)
//     }else{
//     console.warn('respose')
//     }
// })

// l_fs.writeFile("././java_the_world/readmi.txt", "Hello ankit it works", (error) => {
//   if (error) {
//     console.warn("error", error);
//   } else {
//     console.warn("File write sucessful");
//   }
// });


/** Task - 3** */
//Create a file named task.txt, write "Hello Ankit!" into it, then read it back and print the content.
fs.writeFile('./task.txt',"Hey Node Js...",(err)=>{
    if(err){
        console.warn('Erro while creating writeing a file');
    }else{
        console.warn('file write successfully');
        fs.readFile('./task.txt','utf8',(err,respose)=>{
            if(err){
                console.warn('Erro while reading a file');
            }else{
                console.warn('file Read successfully',respose);
            }
        })
    }
})