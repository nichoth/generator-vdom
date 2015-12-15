var state = require('@nichoth/state');

module.exports = <%=componentName%>;

function <%=componentName%>(opts) {
  opts = opts || {};

  var s = state({

  });

  return s;
}

<%=componentName%>.render = function(h, state) {
  return h('div', []);
};
