const fs = require('fs')

function inputData() {
    fs.readFile('theme.txt', 'utf-8', (err, data) => {
        if (err) console.error(err)
        else changeData(data)
    })
}

inputData()

function changeData(data) {
    const reg = /%primary%/gi
    data = data.replace(reg, data)
    console.log(data)
}