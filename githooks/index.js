const sh = require('shelljs');

sh.exec(`sed -i.bak -e "1s/^/[afff] /" $1`, {silent: true});
