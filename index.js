const fs = require('fs')
const chalk = require('chalk')

module.exports = () => {
    let data = '/*Hey There */'
    fs.writeFileSync('theme.css', data)
    console.log(chalk.green('Done!'))
}