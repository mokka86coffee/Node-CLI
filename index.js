#!/usr/bin/env node
"use strict";
const fs = require('fs');
const _ = require('lodash');
const util = require('util');
const path = require('path');
const getStdIn = require('get-stdin');
const Transform = require('stream').Transform;
process.stdout.write(process.argv + '\n');
process.stderr.write('error\n');
const { file, in: _in } = require('minimist')(process.argv.slice(2), {
    string: ['file'],
    boolean: ['in']
});
if (file) {
    const stream = fs.createReadStream(path.resolve(file));
    // process.stdout.write(stream.toString());
    // console.log(stream);
    workWithStream(stream);
} else if (_in) {
    workWithStream(process.stdin);
}

function workWithStream(inStream) {
    const outStream = inStream;
    outStream.pipe(process.stdout);

}


// console.log(process.env)