const sh   = require('shelljs');
const fs   = require('fs');
const util = require('util');

const branchName      = sh.exec(`git branch | grep '^\*' | cut -b3-`, {silent: true}).stdout.replace('\n', '');
const messageFilePath = process.env.PWD + '/.git/COMMIT_EDITMSG';
const contents        = fs.readFileSync(messageFilePath);
const message         = util.format('%s: %s', branchName, contents);

fs.writeFileSync(messageFilePath, message);
// teste