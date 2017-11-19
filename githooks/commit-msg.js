#!/bin/sh

const sh = require('shelljs');

sh.echo(`gui': '$(cat "$1") > "$1"`);
