var vdom = require('virtual-dom');
var h = vdom.h;
var <%=componentName%> = require('../<%=componentName%>.js');

var state = <%=componentName%>({

});

var loop = require('main-loop')( state(), <%=componentName%>.render.bind(null, h), vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
