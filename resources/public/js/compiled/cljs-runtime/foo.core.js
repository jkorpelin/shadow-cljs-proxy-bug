goog.provide('foo.core');
foo.core.foobar = (function foo$core$foobar(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"component"], null);
});
foo.core.mount_root_BANG_ = (function foo$core$mount_root_BANG_(model){
var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){
return foo.core.foobar();
})], null),root_el);
});
foo.core.init = (function foo$core$init(){
return foo.core.mount_root_BANG_(cljs.core.PersistentArrayMap.EMPTY);
});

//# sourceMappingURL=foo.core.js.map
