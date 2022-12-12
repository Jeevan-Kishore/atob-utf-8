#!/usr/bin/env node
'use strict';

const atob = require('../node-atob');
const str = process.argv[2];
console.log(atob(str));
