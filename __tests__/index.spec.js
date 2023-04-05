require('../src');

// jest.setTimeout(60 * 10000);

const fetch = require('node-fetch');

describe('api.basic test', () => {
  test('pure sync functions', (done) => {
    const double = (x) => x * 2;
    const square = (x) => x * x;
    const add = (x) => x + 100;
    const fn = nx.promiseCompose(double, square, add);
    fn(10).then((res) => {
      expect(res).toBe(500);
      done();
    });
  });

  test('pure async functions', (done) => {
    const fn1 = (data) => {
      return Promise.resolve(data + 1);
    };

    const fn2 = (data) => {
      return Promise.resolve(data + 'true');
    };

    const fn3 = (data) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(data + ' ms');
        }, 100);
      });
    };

    const fn = nx.promiseCompose(fn1, fn2, fn3);

    fn(100).then((res) => {
      expect(res).toBe('101true ms');
      done();
    });
  });
});

test('sync/async mixin functions', (done) => {
  var fn1 = (data) => {
    return data + 1;
  };

  var fn2 = (data) => {
    return data + 'string';
  };

  var fn3 = (data) => {
    return fetch('https://api.github.com/users/afeiship')
      .then((res) => res.json())
      .then((res) => {
        return Promise.resolve(data + res.login);
      });
  };

  var fn = nx.promiseCompose(fn1, fn2, fn3);
  fn(100).then((res) => {
    // console.log('promiseCompose result:', res);
    expect(res).toBe('101stringafeiship');
    done();
  });
});
