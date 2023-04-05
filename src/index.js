import nx from '@jswork/next';
//@thanks to: https://github.com/gr0uch/promise-compose/blob/master/index.js
//@thanks to: https://itnext.io/roll-your-own-async-compose-pipe-functions-658cafe4c46f

nx.promiseCompose = function (...fns) {
  return function (value) {
    var initial = Promise.resolve(value);
    try {
      return fns.reduce(function (chain, fn) {
        return chain.then(fn);
      }, initial);
    } catch (err) {
      return Promise.reject(err);
    }
  };
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = nx.promiseCompose;
}

export default nx.promiseCompose;
