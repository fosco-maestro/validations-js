require.paths.unshift('./lib');

var sys = require('sys');
var validator = require('validator');
var _ = require('underscore')._;
var assert = require('assert');
var test_util = require('test-util');
var async_testing = require('async_testing')
  , wrap = async_testing.wrap
  ;

// if this module is the script being run, then run the tests:  
if (module == require.main) {
  test_util.run(__filename, suite);
}
    
var suite = wrap({
  suiteSetup: function(done) {
    done();
  },
  setup: function(test, done) {
    test.o = {};
    test.validation_config = {
      default_messages: {
        required: '*{{name}} is required.*'
      },
      properties: {
        p: {
          required: true
        }
      }
    };
    done();
  },
  teardown: function(test, done) {
    done();
  },
  suite: {
  },
  suiteTeardown: function(done) {
    done();
  }  
});
