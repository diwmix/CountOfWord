const fs = require('fs')

const path1 = 'text.txt'

function readStream(path){  // Функція, яка читає текстовий файл
    const reader = fs.createReadStream(path)
    reader.on('data',function (chunk){
        console.log(chunk.toString())
    })
}

function countwordsStream(path){  // Функція, яка рахує кількість слів в файлі
    const reader = fs.createReadStream(path)
    reader.on('data', function (chunk){
        console.log(chunk.toString().split(" ").length)
    })
}

readStream(path1)
countwordsStream(path1)