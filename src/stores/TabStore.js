define(function(require) {

  var _ = require('lodash');

  var AppDispatcher = require('../dispatchers/AppDispatcher');
  var EventEmitter = require('events').EventEmitter;

  var _tabs = [];
  var _activeTab = null;

  function create(tab) {
    tab = _.extend({
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
    }, tab);

    _tabs = _tabs.concat(tab);

    if (tab.setActive) {
      _activeTab = tab.id;
    }
  }

  function destroy(id) {
    _tabs = _.reject(_tabs, {
      id: id
    });
  }

  function switchTab(id) {
    _activeTab = id;
  }

  function switchTabByIndex(index) {
    if (!_tabs[index] && _tabs[1]) {
      _activeTab = _tabs[1].id;
    } else if (!_tabs[index] && !_tabs[1]) {
      _activeTab = _tabs[0].id;
    } else {
      _activeTab = _tabs[index].id;
    }
  }

  var TabStore = _.assign({}, EventEmitter.prototype, {

    getAll: function() {
      return _tabs;
    },

    getTab: function(tabId) {
      return _.find(_tabs, {
        id: tabId
      });
    },

    getActiveTab: function() {
      return _activeTab;
    },

    emitChange: function() {
      this.emit('CHANGE');
    },

    addChangeListener: function(callback) {
      this.on('CHANGE', callback);
    },

    removeChangeListener: function(callback) {
      this.removeListener('CHANGE', callback);
    }
  });

  AppDispatcher.register(function(action) {
    switch (action.actionType) {
      case 'TAB_CREATE':
        create(action.tab);
        TabStore.emitChange();
        break;

      case 'TAB_UPDATE':
        TabStore.emitChange();
        break;

      case 'TAB_SWITCH':
        switchTab(action.id);
        TabStore.emitChange();
        break;

      case 'TAB_SWITCH_BY_INDEX':
        switchTabByIndex(action.index);
        TabStore.emitChange();
        break;

      case 'TAB_DESTROY':
        destroy(action.id);
        TabStore.emitChange();
        break;

      default:
      // no op
    }
  });

  return TabStore;

});
