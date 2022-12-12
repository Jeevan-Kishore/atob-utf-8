"use strict";

function atob(str) {
  return Buffer.from(str, 'base64').toString('utf-8');
}

module.exports = atob.atob = atob;
