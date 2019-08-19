#fontend-error-reporting
Reporting errors to your callback,you can gonna pass in an ajax ,Upload the error to your server.

```js
var error = require("fontend-error-reporting")
error.init((err)=>console.log(err))

```
only input a callback,  when your application to run an error, this callback will run.  

## Configuration options

* **callback**  your want to do when has err.