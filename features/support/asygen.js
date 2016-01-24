import co from 'co';

const API = {
  given: function(pattern, callback) {
    this.Given(pattern, wrap(callback));
  },
  when: function(pattern, callback) {
    this.When(pattern, wrap(callback));
  },
  then: function(pattern, callback) {
    this.Then(pattern, wrap(callback));
  },
  before: function(callback) {
    const args = [].slice.call(arguments);
    this.Before.apply(this, args.concat([wrap(args.pop())]));
  },
  after: function(callback) {
    const args = [].slice.call(arguments);
    this.After.apply(this, args.concat([wrap(args.pop())]));
  },
  afterAll: function(callback) {
    this.registerHandler('AfterFeatures', wrap(callback));
  },
  beforeAll: function(callback) {
    const args = [].slice.call(arguments);
    this.Before.apply(this, args.concat([wrap(once(args.pop()))]));
  },
  hook: function(name, callback) {
    this.registerHandler(name, wrap(callback));
  },
  around: function(callback) {
    let finish = function() {
      throw new Error('Must yield/call run().');
    };
    const wrapped = wrap(callback);
    this.Around(function(run) {
      wrapped(function() {
        return new Promise(function(resolve, reject) {
          run(function(fin) {
            finish = fin;
            resolve();
          });
        });
      }, function() {
        finish();
      });
    });
  }
};

const PENDING = {};

module.exports = function steps() {
  const hooks = [];
  function artstepDefinitionsWrapper() {
    for (let i = 0; i < hooks.length; i++) hooks[i].call(this);
  }
  function addAPI(key, f) {
    artstepDefinitionsWrapper[key] =
    artstepDefinitionsWrapper[key.charAt(0).toUpperCase() + key.substr(1)] =
    function() {
      const args = [].slice.call(arguments);
      hooks.push(function() {
        f.apply(this, args);
      });
      return this;
    };
  }
  for (const key in API) {
    if (Object.hasOwnProperty.call(API, key)) {
      addAPI(key, API[key]);
    }
  }
  return artstepDefinitionsWrapper;
};

exports.PENDING = PENDING;

function wrap(fn) {
  fn = fn || pending;
  return function() {
    const callback = arguments[arguments.length - 1];
    const world = this;
    const args = [].slice.call(arguments);
    return co(function() {
      world.PENDING = PENDING;
      return fn.apply(world, args);
    })
    .then(
      function(result) {
        if (result === PENDING) {
          callback.pending();
        } else {
          callback();
        }
      },
      function(err) {
        callback(err);
      }
    );
  };
}

function pending() {
  return PENDING;
}

function once(f) {
  let run = false;
  let result;
  return function() {
    if (!run) {
      run = true;
      result = f.apply(this, arguments);
    }
    return result;
  };
};
