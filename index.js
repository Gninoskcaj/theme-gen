// Consts
const fs = require('fs')
const chalk = require('chalk')
const writeFile = require('write')
const getData = require('./getData')
const prompts = require('prompts');
const questions = [
    {
        type: 'text',
        name: 'background',
        message: 'Background Color:',
    },
    {
        type: 'text',
        name: 'foreground',
        message: 'Foreground Color:',
    },
    {
        type: 'text',
        name: 'primary',
        message: 'Primary Color:',
    }
]
// Vars
let background = '';
let foreground = '';
let primary = '';

function inputData() {
    fs.readFile('theme.txt', (err, data) => {
        if (err) console.error(err)
        else console.log(data)
    })
}



// Write Files
(async () => {
    const data = await prompts(questions)
    // await writeFile('theme.txt', JSON.stringify(data.primary))
})();