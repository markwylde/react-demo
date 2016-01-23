import { expect } from 'chai';
import store from './store';

describe('Store:BillStore', function() {

  it('should init a store', function() {
    expect(store).to.not.equal(undefined);
  });

});
