const fs = require('fs-extra');
fs.mkdirp('NewFolder')
fs.createFile('./NewFolder/NewFile.txt')
fs.mkdirp('NewFolder2')
fs.move('./NewFolder/NewFile.txt', './NewFolder2/NewFile.txt')