"use strict";

function atob(str) {
  return decodeURIComponent(escape(Buffer.from(str, 'base64').toString('utf-8')));
}

module.exports = atob.atob = atob;
