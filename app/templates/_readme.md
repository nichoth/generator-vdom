# <%= appName %>

<%= description %>


## install

    $ npm install <%=appNameSlug%>


## example
    
```js
var vdom = require('virtual-dom');
var h = vdom.h;
var <%=componentName%> = require('<%=appNameSlug%>');

var state = <%=componentName%>({

});

var loop = require('main-loop')( state(), <%=componentName%>.render, vdom );
state(loop.update);
document.getElementById('content').appendChild(loop.target);
```
