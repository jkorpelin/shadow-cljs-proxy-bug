
shadow.cljs.devtools.client.env.module_loaded('app');

try { foo.core.init(); } catch (e) { console.error("An error occurred when calling (foo.core/init)"); throw(e); }