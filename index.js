#!/usr/bin/env node
"use strict";
const fs = require('fs');
const _ = require('lodash');
process.stdout.write(process.argv + '\n');
process.stderr.write('error\n');
const { file } = require('minimist')(process.argv.slice(2), {
    string: ['file']
});
if (file) {
    fs.readFile(file, (err, data) => {
        process.stdout.write(data.toString())
    })
}