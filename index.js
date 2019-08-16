const fs = require('fs')
const chalk = require('chalk')
const writeFile = require('write')
const prompts = require('prompts');
const questions = [
    {
        type: 'number',
        name: 'backgroundRed',
        message: 'Background Red:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'backgroundBlue',
        message: 'Background Blue:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'backgroundGreen',
        message: 'Background Green:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'foregroundRed',
        message: 'Foreground Red:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'foregroundBlue',
        message: 'Foreground Blue:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'foregroundGreen',
        message: 'Foreground Green:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'primaryRed',
        message: 'Primary Red:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'primaryBlue',
        message: 'Primary Blue:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'primaryGreen',
        message: 'Primary Green:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'secondaryRed',
        message: 'Secondary Red:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'secondaryGreen',
        message: 'Secondary Green:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'secondaryBlue',
        message: 'Secondary Blue:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'flashRed',
        message: 'Flash Red:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'flashGreen',
        message: 'Flash Green:',
        initial: '0'
    },
    {
        type: 'number',
        name: 'flashBlue',
        message: 'Flash Blue:',
        initial: '0'
    }
]

const numbers = [1, 2, 3, 4, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100]
// Vars
let background = '';
let foreground = '';
let primary = '';
let secondary = '';
let flash = '';


// Loop through colors



// Write Files
(async () => {
    const results = await prompts(questions)
    var string = '';

    for (let x in numbers) {
        string += `/* This var is --background ${numbers[x]}% transparent. :)*/\n--background-${numbers[x]}: ${results.background};\n\n`
        string += `/* This var is --foreground ${numbers[x]}% transparent. :)*/\n--foreground-${numbers[x]}: ${results.foreground};\n\n`
        string += `/* This var is --primary ${numbers[x]}% transparent. :)*/\n--primary-${numbers[x]}: ${results.primary};\n\n`
        string += `/* This var is --secondary ${numbers[x]}% transparent. :)*/\n--secondary-${numbers[x]}: ${results.secondary};\n\n`
        string += `/* This var is --flash ${numbers[x]}% transparent. :)*/\n--flash-${numbers[x]}: ${results.flash};\n\n`

    }

    const data =
        `/*CSS Generated by theme-gen (https://github.com/Gninoskcaj/theme-gen)*/

            :root {

                ${string}
            }
        `
        
    await writeFile('theme.css', data)
})();