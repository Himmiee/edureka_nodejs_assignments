const fs = require('fs');
const readline = require('readline');

let fileNames = [];

const line = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function writeToFile() {
    line.question("Enter the file name: ", function(fileName) {
        const filePath = `./${fileName}.txt`;
        fs.access(filePath, fs.constants.F_OK, (err) => {
            if (!err) {
                console.log(`The file ${fileName}.txt already exists. Please enter a new file name.`);
                writeToFile();
            } else {
                fileNames.push(fileName);
                fs.writeFile(filePath, "You are awesome", (err) => {
                    if (err) throw err;
                    console.log(`The file ${fileName}.txt has been saved!`);
                    fs.writeFile('./file-names.txt', fileNames.join('\n'), (err) => {
                        if (err) throw err;
                        console.log("File names have been saved!");
                    });
                });
            }
        });
    });
}


writeToFile()
writeToFile()

