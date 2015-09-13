import { expect } from 'chai';

import StringManipulation from './StringManipulation.js';

describe('Service:StringManipulation', function() {

  it('should convert first letter to capital', function() {
    let transformedString = StringManipulation.firstLetterUpperCase('test string');
    expect(transformedString).to.equal('Test string');
  });

  it('should pluralise a string with more than 1 count', function() {
    let transformedString = StringManipulation.pluralise('test', 2);
    expect(transformedString).to.equal('tests');
  });

  it('should not pluralise a string with only 1 count', function() {
    let transformedString = StringManipulation.pluralise('test', 1);
    expect(transformedString).to.equal('test');
  });

});
