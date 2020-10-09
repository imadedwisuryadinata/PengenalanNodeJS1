const fs = require('fs')

fs.open('myfile.txt', 'w', (err,file)=>{
    if(err){
        return console.error(err)
    }
    console.log('Saved!')
})