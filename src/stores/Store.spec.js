import { expect } from 'chai';
import store from './Store';

describe('Store:BillStore', function() {

  it('should init a store', function() {
    expect(store).to.not.equal(undefined);
  });

  it('should use the hot module', function() {
    global.hot = true;
    expect(store).to.not.equal(undefined);
  });

});
