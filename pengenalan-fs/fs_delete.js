const fs = require('fs')

//cek file
fs.stat('file1', function(err, stats){
    if(err){
        return console.error(err)
    }
    console.log(stats)
})

//delete file
// fs.unlink('file1', function(err){
//     if(err){
//         return console.error(err)
//     }
//     console.log('berhasil hapus')
// })