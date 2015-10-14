var h = require('virtual-dom/h');
var state = require('@nichoth/state');

module.exports = <%=componentName%>;

function <%=componentName%>(opts) {
  var s = state({

  });

  return s;
}

<%=componentName%>.render = function(state) {
  return h('div', []);
};
