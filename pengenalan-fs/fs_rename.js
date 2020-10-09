const fs = require('fs')

fs.rename('myfile.txt','file1', function(err){
if(err){
    return console.error(err)
}
console.log('success')
})