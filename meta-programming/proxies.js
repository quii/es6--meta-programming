import { describe } from 'mocha';
import assert from 'assert';

// This is all "experimental", not featured in most browsers/servers yet
describe('proxies intercepts + define custom behavior for fundamental language ops', () => {
  it('can change property lookup', () => {
    const proxy = new Proxy({ c: 1 }, {
      get: (target, name) => {
        if (name in target) {
          return target[name];
        }
        return 42;
      },
    });
    proxy.a = 5;
    assert.equal(proxy.a, 5);
    assert.equal(proxy.b, 42);
    assert.equal(proxy.c, 1);
  });
});
