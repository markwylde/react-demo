define(function(require) {

  var AppDispatcher = require('../dispatchers/AppDispatcher');

  var TabActions = {

    create: function(tab) {
      AppDispatcher.dispatch({
        actionType: 'TAB_CREATE',
        tab: tab
      });
    },

    update: function(tab) {
      AppDispatcher.dispatch({
        actionType: 'TAB_UPDATE',
        tab: tab
      });
    },

    switchTab: function(id) {
      AppDispatcher.dispatch({
        actionType: 'TAB_SWITCH',
        id: id
      });
    },

    switchTabByIndex: function(index) {
      AppDispatcher.dispatch({
        actionType: 'TAB_SWITCH_BY_INDEX',
        index: index
      });
    },

    destroy: function(id) {
      AppDispatcher.dispatch({
        actionType: 'TAB_DESTROY',
        id: id
      });
    }

  };

  return TabActions;
});
