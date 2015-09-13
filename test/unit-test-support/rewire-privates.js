import sinon from 'sinon';

export function getCallbackOnPrivate(obj, subobj, method) {
  let createdObj = obj.__get__(subobj);

  let callback = sinon.spy();
  createdObj[method] = function() {
    callback();
  };

  let setters = {};
  setters[subobj] = createdObj;

  obj.__set__(setters);

  return callback;
}
