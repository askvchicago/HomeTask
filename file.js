const fse = require('fs-extra');

fse.ensureDirSync("hometask4/first");
fse.ensureFileSync('hometask4/first/file.txt');
fse.ensureDirSync("hometask4/second");
fse.moveSync('hometask4/first/file.txt','hometask4/second/file.txt');
fse.ensureDirSync("hometask4/third");
fse.copySync('hometask4/second/file.txt','hometask4/third/file.txt');
fse.removeSync('hometask4/second/file.txt');
fse.removeSync('hometask4/third/file.txt');
fse.removeSync('hometask4/first');
fse.removeSync('hometask4/second');
fse.removeSync('hometask4/third');