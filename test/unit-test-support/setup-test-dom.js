/* globals global */
import jsdom from 'jsdom';

if (typeof global.document === 'undefined') {
  let mockHTML = '<html><body></body></html>';
  global.document = jsdom.jsdom(mockHTML, {
    features: {
      QuerySelector: true
    }
  });
  global.window = document.defaultView;
  global.navigator = {
    userAgent: 'node.js'
  };
}
