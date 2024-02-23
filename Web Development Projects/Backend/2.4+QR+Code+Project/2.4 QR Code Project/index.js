/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/
import inquirer from 'inquirer';
import { writeFile } from 'fs';
// var fs = require('fs')

import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const qr = require('qr-image');


const questions = [
    {
        type: 'input',
        name: 'given-name',
        message: 'Enter the website you want to generate QR: '
    },
]

inquirer.prompt(questions)
    .then(answers => {
        const website = answers['given-name'];

        var qr_svg = qr.image(answers['given-name'], { type: 'svg' });
        qr_svg.pipe(require('fs').createWriteStream('web_qr.svg'));

        writeFile('message.txt', website, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        }); 
        console.log(answers);
    })
