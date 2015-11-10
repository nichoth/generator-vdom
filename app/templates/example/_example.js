var vdom = require('virtual-dom');
var <%=componentName%> = require('../<%=componentName%>.js');

var state = <%=componentName%>({

});

var loop = require('main-loop')( state(), <%=componentName%>.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
