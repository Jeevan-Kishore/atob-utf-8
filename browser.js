(function (w) {
  "use strict";

  function findBest(atobNative) {
    if ('function' === typeof atobNative) { return atobNative; }

    if ('function' === typeof Buffer) {
      return function atobBrowserify(a) {
        return new Buffer(a, 'base64').toString('binary');
      };
    }

    if ('object' === typeof w.base64js) {
      return function atobWebWorker_iOS(a) {
        var buf = w.base64js.b64ToByteArray(a);
        return Array.prototype.map.call(buf, function (ch) {
          return String.fromCharCode(ch);
        }).join('');
      };
    }
		return function () {
			throw new Error("You're probably in an old browser or an iOS webworker." +
				" It might help to include beatgammit's base64-js.");
    };
  }

  const atobBest = findBest(w.atob);
  w.atob = atobBest;

  if ((typeof module === 'object') && module && module.exports) {
    module.exports = atobBest;
  }
}(window));
