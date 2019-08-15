const fs = require('fs')
const chalk = require('chalk')
const writeFile = require('write')





module.exports = async () => {
    await writeFile('theme.css', data)
    console.log(chalk.green('Done!'))
}