import jquery from 'jquery';

jquery.mockGet = function(data) {

  jquery.get = function() {
    return {
      then: function(cb) {
        cb(data);
      }
    };
  };
};

export default jquery;
