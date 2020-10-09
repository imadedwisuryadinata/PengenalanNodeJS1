const fs = require('fs')

fs.appendFile('myfile.txt', 'hello world', function(){
    console.log('Berhasil menulis file')
})