goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_19080 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_19080(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_19090 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_19090(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__17876 = coll;
var G__17877 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__17876,G__17877) : shadow.dom.lazy_native_coll_seq.call(null,G__17876,G__17877));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__17937 = arguments.length;
switch (G__17937) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__17958 = arguments.length;
switch (G__17958) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__17973 = arguments.length;
switch (G__17973) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__17983 = arguments.length;
switch (G__17983) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__17995 = arguments.length;
switch (G__17995) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__18002 = arguments.length;
switch (G__18002) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e18044){if((e18044 instanceof Object)){
var e = e18044;
return console.log("didnt support attachEvent",el,e);
} else {
throw e18044;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__18058 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__18059 = null;
var count__18060 = (0);
var i__18061 = (0);
while(true){
if((i__18061 < count__18060)){
var el = chunk__18059.cljs$core$IIndexed$_nth$arity$2(null,i__18061);
var handler_19112__$1 = ((function (seq__18058,chunk__18059,count__18060,i__18061,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18058,chunk__18059,count__18060,i__18061,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19112__$1);


var G__19113 = seq__18058;
var G__19114 = chunk__18059;
var G__19115 = count__18060;
var G__19116 = (i__18061 + (1));
seq__18058 = G__19113;
chunk__18059 = G__19114;
count__18060 = G__19115;
i__18061 = G__19116;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18058);
if(temp__5804__auto__){
var seq__18058__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18058__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18058__$1);
var G__19117 = cljs.core.chunk_rest(seq__18058__$1);
var G__19118 = c__5568__auto__;
var G__19119 = cljs.core.count(c__5568__auto__);
var G__19120 = (0);
seq__18058 = G__19117;
chunk__18059 = G__19118;
count__18060 = G__19119;
i__18061 = G__19120;
continue;
} else {
var el = cljs.core.first(seq__18058__$1);
var handler_19121__$1 = ((function (seq__18058,chunk__18059,count__18060,i__18061,el,seq__18058__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__18058,chunk__18059,count__18060,i__18061,el,seq__18058__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_19121__$1);


var G__19122 = cljs.core.next(seq__18058__$1);
var G__19123 = null;
var G__19124 = (0);
var G__19125 = (0);
seq__18058 = G__19122;
chunk__18059 = G__19123;
count__18060 = G__19124;
i__18061 = G__19125;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__18090 = arguments.length;
switch (G__18090) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__18118 = cljs.core.seq(events);
var chunk__18119 = null;
var count__18120 = (0);
var i__18121 = (0);
while(true){
if((i__18121 < count__18120)){
var vec__18207 = chunk__18119.cljs$core$IIndexed$_nth$arity$2(null,i__18121);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18207,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18207,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19133 = seq__18118;
var G__19134 = chunk__18119;
var G__19135 = count__18120;
var G__19136 = (i__18121 + (1));
seq__18118 = G__19133;
chunk__18119 = G__19134;
count__18120 = G__19135;
i__18121 = G__19136;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18118);
if(temp__5804__auto__){
var seq__18118__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18118__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18118__$1);
var G__19137 = cljs.core.chunk_rest(seq__18118__$1);
var G__19138 = c__5568__auto__;
var G__19139 = cljs.core.count(c__5568__auto__);
var G__19140 = (0);
seq__18118 = G__19137;
chunk__18119 = G__19138;
count__18120 = G__19139;
i__18121 = G__19140;
continue;
} else {
var vec__18220 = cljs.core.first(seq__18118__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18220,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18220,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__19141 = cljs.core.next(seq__18118__$1);
var G__19142 = null;
var G__19143 = (0);
var G__19144 = (0);
seq__18118 = G__19141;
chunk__18119 = G__19142;
count__18120 = G__19143;
i__18121 = G__19144;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__18230 = cljs.core.seq(styles);
var chunk__18231 = null;
var count__18232 = (0);
var i__18233 = (0);
while(true){
if((i__18233 < count__18232)){
var vec__18262 = chunk__18231.cljs$core$IIndexed$_nth$arity$2(null,i__18233);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18262,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18262,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19145 = seq__18230;
var G__19146 = chunk__18231;
var G__19147 = count__18232;
var G__19148 = (i__18233 + (1));
seq__18230 = G__19145;
chunk__18231 = G__19146;
count__18232 = G__19147;
i__18233 = G__19148;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18230);
if(temp__5804__auto__){
var seq__18230__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18230__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18230__$1);
var G__19149 = cljs.core.chunk_rest(seq__18230__$1);
var G__19150 = c__5568__auto__;
var G__19151 = cljs.core.count(c__5568__auto__);
var G__19152 = (0);
seq__18230 = G__19149;
chunk__18231 = G__19150;
count__18232 = G__19151;
i__18233 = G__19152;
continue;
} else {
var vec__18276 = cljs.core.first(seq__18230__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18276,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__19153 = cljs.core.next(seq__18230__$1);
var G__19154 = null;
var G__19155 = (0);
var G__19156 = (0);
seq__18230 = G__19153;
chunk__18231 = G__19154;
count__18232 = G__19155;
i__18233 = G__19156;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__18289_19157 = key;
var G__18289_19158__$1 = (((G__18289_19157 instanceof cljs.core.Keyword))?G__18289_19157.fqn:null);
switch (G__18289_19158__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_19160 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_19160,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_19160,"aria-");
}
})())){
el.setAttribute(ks_19160,value);
} else {
(el[ks_19160] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__18356){
var map__18358 = p__18356;
var map__18358__$1 = cljs.core.__destructure_map(map__18358);
var props = map__18358__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18358__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__18366 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18366,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18366,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18366,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__18374 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__18374,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__18374;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__18384 = arguments.length;
switch (G__18384) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__18401){
var vec__18402 = p__18401;
var seq__18403 = cljs.core.seq(vec__18402);
var first__18404 = cljs.core.first(seq__18403);
var seq__18403__$1 = cljs.core.next(seq__18403);
var nn = first__18404;
var first__18404__$1 = cljs.core.first(seq__18403__$1);
var seq__18403__$2 = cljs.core.next(seq__18403__$1);
var np = first__18404__$1;
var nc = seq__18403__$2;
var node = vec__18402;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18407 = nn;
var G__18408 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18407,G__18408) : create_fn.call(null,G__18407,G__18408));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__18410 = nn;
var G__18411 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__18410,G__18411) : create_fn.call(null,G__18410,G__18411));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__18420 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18420,(1),null);
var seq__18423_19171 = cljs.core.seq(node_children);
var chunk__18424_19172 = null;
var count__18425_19173 = (0);
var i__18426_19174 = (0);
while(true){
if((i__18426_19174 < count__18425_19173)){
var child_struct_19175 = chunk__18424_19172.cljs$core$IIndexed$_nth$arity$2(null,i__18426_19174);
var children_19176 = shadow.dom.dom_node(child_struct_19175);
if(cljs.core.seq_QMARK_(children_19176)){
var seq__18483_19177 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19176));
var chunk__18485_19178 = null;
var count__18486_19179 = (0);
var i__18487_19180 = (0);
while(true){
if((i__18487_19180 < count__18486_19179)){
var child_19181 = chunk__18485_19178.cljs$core$IIndexed$_nth$arity$2(null,i__18487_19180);
if(cljs.core.truth_(child_19181)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19181);


var G__19182 = seq__18483_19177;
var G__19183 = chunk__18485_19178;
var G__19184 = count__18486_19179;
var G__19185 = (i__18487_19180 + (1));
seq__18483_19177 = G__19182;
chunk__18485_19178 = G__19183;
count__18486_19179 = G__19184;
i__18487_19180 = G__19185;
continue;
} else {
var G__19186 = seq__18483_19177;
var G__19187 = chunk__18485_19178;
var G__19188 = count__18486_19179;
var G__19189 = (i__18487_19180 + (1));
seq__18483_19177 = G__19186;
chunk__18485_19178 = G__19187;
count__18486_19179 = G__19188;
i__18487_19180 = G__19189;
continue;
}
} else {
var temp__5804__auto___19190 = cljs.core.seq(seq__18483_19177);
if(temp__5804__auto___19190){
var seq__18483_19191__$1 = temp__5804__auto___19190;
if(cljs.core.chunked_seq_QMARK_(seq__18483_19191__$1)){
var c__5568__auto___19192 = cljs.core.chunk_first(seq__18483_19191__$1);
var G__19193 = cljs.core.chunk_rest(seq__18483_19191__$1);
var G__19194 = c__5568__auto___19192;
var G__19195 = cljs.core.count(c__5568__auto___19192);
var G__19196 = (0);
seq__18483_19177 = G__19193;
chunk__18485_19178 = G__19194;
count__18486_19179 = G__19195;
i__18487_19180 = G__19196;
continue;
} else {
var child_19197 = cljs.core.first(seq__18483_19191__$1);
if(cljs.core.truth_(child_19197)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19197);


var G__19202 = cljs.core.next(seq__18483_19191__$1);
var G__19203 = null;
var G__19204 = (0);
var G__19205 = (0);
seq__18483_19177 = G__19202;
chunk__18485_19178 = G__19203;
count__18486_19179 = G__19204;
i__18487_19180 = G__19205;
continue;
} else {
var G__19206 = cljs.core.next(seq__18483_19191__$1);
var G__19207 = null;
var G__19208 = (0);
var G__19209 = (0);
seq__18483_19177 = G__19206;
chunk__18485_19178 = G__19207;
count__18486_19179 = G__19208;
i__18487_19180 = G__19209;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19176);
}


var G__19210 = seq__18423_19171;
var G__19211 = chunk__18424_19172;
var G__19212 = count__18425_19173;
var G__19213 = (i__18426_19174 + (1));
seq__18423_19171 = G__19210;
chunk__18424_19172 = G__19211;
count__18425_19173 = G__19212;
i__18426_19174 = G__19213;
continue;
} else {
var temp__5804__auto___19214 = cljs.core.seq(seq__18423_19171);
if(temp__5804__auto___19214){
var seq__18423_19215__$1 = temp__5804__auto___19214;
if(cljs.core.chunked_seq_QMARK_(seq__18423_19215__$1)){
var c__5568__auto___19217 = cljs.core.chunk_first(seq__18423_19215__$1);
var G__19218 = cljs.core.chunk_rest(seq__18423_19215__$1);
var G__19219 = c__5568__auto___19217;
var G__19220 = cljs.core.count(c__5568__auto___19217);
var G__19221 = (0);
seq__18423_19171 = G__19218;
chunk__18424_19172 = G__19219;
count__18425_19173 = G__19220;
i__18426_19174 = G__19221;
continue;
} else {
var child_struct_19222 = cljs.core.first(seq__18423_19215__$1);
var children_19223 = shadow.dom.dom_node(child_struct_19222);
if(cljs.core.seq_QMARK_(children_19223)){
var seq__18502_19224 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_19223));
var chunk__18504_19225 = null;
var count__18505_19226 = (0);
var i__18506_19227 = (0);
while(true){
if((i__18506_19227 < count__18505_19226)){
var child_19228 = chunk__18504_19225.cljs$core$IIndexed$_nth$arity$2(null,i__18506_19227);
if(cljs.core.truth_(child_19228)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19228);


var G__19230 = seq__18502_19224;
var G__19231 = chunk__18504_19225;
var G__19232 = count__18505_19226;
var G__19233 = (i__18506_19227 + (1));
seq__18502_19224 = G__19230;
chunk__18504_19225 = G__19231;
count__18505_19226 = G__19232;
i__18506_19227 = G__19233;
continue;
} else {
var G__19234 = seq__18502_19224;
var G__19235 = chunk__18504_19225;
var G__19236 = count__18505_19226;
var G__19237 = (i__18506_19227 + (1));
seq__18502_19224 = G__19234;
chunk__18504_19225 = G__19235;
count__18505_19226 = G__19236;
i__18506_19227 = G__19237;
continue;
}
} else {
var temp__5804__auto___19238__$1 = cljs.core.seq(seq__18502_19224);
if(temp__5804__auto___19238__$1){
var seq__18502_19239__$1 = temp__5804__auto___19238__$1;
if(cljs.core.chunked_seq_QMARK_(seq__18502_19239__$1)){
var c__5568__auto___19240 = cljs.core.chunk_first(seq__18502_19239__$1);
var G__19241 = cljs.core.chunk_rest(seq__18502_19239__$1);
var G__19242 = c__5568__auto___19240;
var G__19243 = cljs.core.count(c__5568__auto___19240);
var G__19244 = (0);
seq__18502_19224 = G__19241;
chunk__18504_19225 = G__19242;
count__18505_19226 = G__19243;
i__18506_19227 = G__19244;
continue;
} else {
var child_19246 = cljs.core.first(seq__18502_19239__$1);
if(cljs.core.truth_(child_19246)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_19246);


var G__19247 = cljs.core.next(seq__18502_19239__$1);
var G__19248 = null;
var G__19249 = (0);
var G__19250 = (0);
seq__18502_19224 = G__19247;
chunk__18504_19225 = G__19248;
count__18505_19226 = G__19249;
i__18506_19227 = G__19250;
continue;
} else {
var G__19251 = cljs.core.next(seq__18502_19239__$1);
var G__19252 = null;
var G__19253 = (0);
var G__19254 = (0);
seq__18502_19224 = G__19251;
chunk__18504_19225 = G__19252;
count__18505_19226 = G__19253;
i__18506_19227 = G__19254;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_19223);
}


var G__19261 = cljs.core.next(seq__18423_19215__$1);
var G__19262 = null;
var G__19263 = (0);
var G__19264 = (0);
seq__18423_19171 = G__19261;
chunk__18424_19172 = G__19262;
count__18425_19173 = G__19263;
i__18426_19174 = G__19264;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__18531 = cljs.core.seq(node);
var chunk__18532 = null;
var count__18533 = (0);
var i__18534 = (0);
while(true){
if((i__18534 < count__18533)){
var n = chunk__18532.cljs$core$IIndexed$_nth$arity$2(null,i__18534);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19273 = seq__18531;
var G__19274 = chunk__18532;
var G__19275 = count__18533;
var G__19276 = (i__18534 + (1));
seq__18531 = G__19273;
chunk__18532 = G__19274;
count__18533 = G__19275;
i__18534 = G__19276;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18531);
if(temp__5804__auto__){
var seq__18531__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18531__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18531__$1);
var G__19277 = cljs.core.chunk_rest(seq__18531__$1);
var G__19278 = c__5568__auto__;
var G__19279 = cljs.core.count(c__5568__auto__);
var G__19280 = (0);
seq__18531 = G__19277;
chunk__18532 = G__19278;
count__18533 = G__19279;
i__18534 = G__19280;
continue;
} else {
var n = cljs.core.first(seq__18531__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__19281 = cljs.core.next(seq__18531__$1);
var G__19282 = null;
var G__19283 = (0);
var G__19284 = (0);
seq__18531 = G__19281;
chunk__18532 = G__19282;
count__18533 = G__19283;
i__18534 = G__19284;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__18546 = arguments.length;
switch (G__18546) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__18556 = arguments.length;
switch (G__18556) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__18573 = arguments.length;
switch (G__18573) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19308 = arguments.length;
var i__5770__auto___19309 = (0);
while(true){
if((i__5770__auto___19309 < len__5769__auto___19308)){
args__5775__auto__.push((arguments[i__5770__auto___19309]));

var G__19310 = (i__5770__auto___19309 + (1));
i__5770__auto___19309 = G__19310;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__18584_19312 = cljs.core.seq(nodes);
var chunk__18585_19313 = null;
var count__18586_19314 = (0);
var i__18587_19315 = (0);
while(true){
if((i__18587_19315 < count__18586_19314)){
var node_19316 = chunk__18585_19313.cljs$core$IIndexed$_nth$arity$2(null,i__18587_19315);
fragment.appendChild(shadow.dom._to_dom(node_19316));


var G__19318 = seq__18584_19312;
var G__19319 = chunk__18585_19313;
var G__19320 = count__18586_19314;
var G__19321 = (i__18587_19315 + (1));
seq__18584_19312 = G__19318;
chunk__18585_19313 = G__19319;
count__18586_19314 = G__19320;
i__18587_19315 = G__19321;
continue;
} else {
var temp__5804__auto___19328 = cljs.core.seq(seq__18584_19312);
if(temp__5804__auto___19328){
var seq__18584_19329__$1 = temp__5804__auto___19328;
if(cljs.core.chunked_seq_QMARK_(seq__18584_19329__$1)){
var c__5568__auto___19330 = cljs.core.chunk_first(seq__18584_19329__$1);
var G__19331 = cljs.core.chunk_rest(seq__18584_19329__$1);
var G__19332 = c__5568__auto___19330;
var G__19333 = cljs.core.count(c__5568__auto___19330);
var G__19334 = (0);
seq__18584_19312 = G__19331;
chunk__18585_19313 = G__19332;
count__18586_19314 = G__19333;
i__18587_19315 = G__19334;
continue;
} else {
var node_19335 = cljs.core.first(seq__18584_19329__$1);
fragment.appendChild(shadow.dom._to_dom(node_19335));


var G__19341 = cljs.core.next(seq__18584_19329__$1);
var G__19342 = null;
var G__19343 = (0);
var G__19344 = (0);
seq__18584_19312 = G__19341;
chunk__18585_19313 = G__19342;
count__18586_19314 = G__19343;
i__18587_19315 = G__19344;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq18583){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq18583));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__18594_19345 = cljs.core.seq(scripts);
var chunk__18595_19346 = null;
var count__18596_19347 = (0);
var i__18597_19348 = (0);
while(true){
if((i__18597_19348 < count__18596_19347)){
var vec__18614_19349 = chunk__18595_19346.cljs$core$IIndexed$_nth$arity$2(null,i__18597_19348);
var script_tag_19350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614_19349,(0),null);
var script_body_19351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18614_19349,(1),null);
eval(script_body_19351);


var G__19352 = seq__18594_19345;
var G__19353 = chunk__18595_19346;
var G__19354 = count__18596_19347;
var G__19355 = (i__18597_19348 + (1));
seq__18594_19345 = G__19352;
chunk__18595_19346 = G__19353;
count__18596_19347 = G__19354;
i__18597_19348 = G__19355;
continue;
} else {
var temp__5804__auto___19356 = cljs.core.seq(seq__18594_19345);
if(temp__5804__auto___19356){
var seq__18594_19357__$1 = temp__5804__auto___19356;
if(cljs.core.chunked_seq_QMARK_(seq__18594_19357__$1)){
var c__5568__auto___19358 = cljs.core.chunk_first(seq__18594_19357__$1);
var G__19359 = cljs.core.chunk_rest(seq__18594_19357__$1);
var G__19360 = c__5568__auto___19358;
var G__19361 = cljs.core.count(c__5568__auto___19358);
var G__19362 = (0);
seq__18594_19345 = G__19359;
chunk__18595_19346 = G__19360;
count__18596_19347 = G__19361;
i__18597_19348 = G__19362;
continue;
} else {
var vec__18622_19363 = cljs.core.first(seq__18594_19357__$1);
var script_tag_19364 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18622_19363,(0),null);
var script_body_19365 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18622_19363,(1),null);
eval(script_body_19365);


var G__19367 = cljs.core.next(seq__18594_19357__$1);
var G__19368 = null;
var G__19369 = (0);
var G__19370 = (0);
seq__18594_19345 = G__19367;
chunk__18595_19346 = G__19368;
count__18596_19347 = G__19369;
i__18597_19348 = G__19370;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__18627){
var vec__18628 = p__18627;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18628,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18628,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__18644 = arguments.length;
switch (G__18644) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__18654 = cljs.core.seq(style_keys);
var chunk__18655 = null;
var count__18656 = (0);
var i__18657 = (0);
while(true){
if((i__18657 < count__18656)){
var it = chunk__18655.cljs$core$IIndexed$_nth$arity$2(null,i__18657);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19385 = seq__18654;
var G__19386 = chunk__18655;
var G__19387 = count__18656;
var G__19388 = (i__18657 + (1));
seq__18654 = G__19385;
chunk__18655 = G__19386;
count__18656 = G__19387;
i__18657 = G__19388;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18654);
if(temp__5804__auto__){
var seq__18654__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18654__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__18654__$1);
var G__19389 = cljs.core.chunk_rest(seq__18654__$1);
var G__19390 = c__5568__auto__;
var G__19391 = cljs.core.count(c__5568__auto__);
var G__19392 = (0);
seq__18654 = G__19389;
chunk__18655 = G__19390;
count__18656 = G__19391;
i__18657 = G__19392;
continue;
} else {
var it = cljs.core.first(seq__18654__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__19393 = cljs.core.next(seq__18654__$1);
var G__19394 = null;
var G__19395 = (0);
var G__19396 = (0);
seq__18654 = G__19393;
chunk__18655 = G__19394;
count__18656 = G__19395;
i__18657 = G__19396;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18694,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18727 = k18694;
var G__18727__$1 = (((G__18727 instanceof cljs.core.Keyword))?G__18727.fqn:null);
switch (G__18727__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18694,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18731){
var vec__18732 = p__18731;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18732,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18732,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18693){
var self__ = this;
var G__18693__$1 = this;
return (new cljs.core.RecordIter((0),G__18693__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18703,other18704){
var self__ = this;
var this18703__$1 = this;
return (((!((other18704 == null)))) && ((((this18703__$1.constructor === other18704.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18703__$1.x,other18704.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18703__$1.y,other18704.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18703__$1.__extmap,other18704.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18694){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18755 = k18694;
var G__18755__$1 = (((G__18755 instanceof cljs.core.Keyword))?G__18755.fqn:null);
switch (G__18755__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18694);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18693){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18759 = cljs.core.keyword_identical_QMARK_;
var expr__18760 = k__5352__auto__;
if(cljs.core.truth_((pred__18759.cljs$core$IFn$_invoke$arity$2 ? pred__18759.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__18760) : pred__18759.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__18760)))){
return (new shadow.dom.Coordinate(G__18693,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18759.cljs$core$IFn$_invoke$arity$2 ? pred__18759.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__18760) : pred__18759.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__18760)))){
return (new shadow.dom.Coordinate(self__.x,G__18693,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18693),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18693){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__18693,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__18713){
var extmap__5385__auto__ = (function (){var G__18768 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18713,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__18713)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18768);
} else {
return G__18768;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__18713),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__18713),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k18770,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__18774 = k18770;
var G__18774__$1 = (((G__18774 instanceof cljs.core.Keyword))?G__18774.fqn:null);
switch (G__18774__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k18770,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__18783){
var vec__18784 = p__18783;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18784,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__18769){
var self__ = this;
var G__18769__$1 = this;
return (new cljs.core.RecordIter((0),G__18769__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this18771,other18772){
var self__ = this;
var this18771__$1 = this;
return (((!((other18772 == null)))) && ((((this18771__$1.constructor === other18772.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18771__$1.w,other18772.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18771__$1.h,other18772.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this18771__$1.__extmap,other18772.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k18770){
var self__ = this;
var this__5350__auto____$1 = this;
var G__18806 = k18770;
var G__18806__$1 = (((G__18806 instanceof cljs.core.Keyword))?G__18806.fqn:null);
switch (G__18806__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k18770);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__18769){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__18807 = cljs.core.keyword_identical_QMARK_;
var expr__18808 = k__5352__auto__;
if(cljs.core.truth_((pred__18807.cljs$core$IFn$_invoke$arity$2 ? pred__18807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__18808) : pred__18807.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__18808)))){
return (new shadow.dom.Size(G__18769,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__18807.cljs$core$IFn$_invoke$arity$2 ? pred__18807.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__18808) : pred__18807.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__18808)))){
return (new shadow.dom.Size(self__.w,G__18769,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__18769),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__18769){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__18769,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__18773){
var extmap__5385__auto__ = (function (){var G__18821 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__18773,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__18773)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__18821);
} else {
return G__18821;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__18773),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__18773),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__19437 = (i + (1));
var G__19438 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__19437;
ret = G__19438;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__18847){
var vec__18848 = p__18847;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18848,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__18856 = arguments.length;
switch (G__18856) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__19445 = ps;
var G__19446 = (i + (1));
el__$1 = G__19445;
i = G__19446;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__18926 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18926,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18926,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18926,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__18932_19454 = cljs.core.seq(props);
var chunk__18933_19455 = null;
var count__18934_19456 = (0);
var i__18935_19457 = (0);
while(true){
if((i__18935_19457 < count__18934_19456)){
var vec__18948_19458 = chunk__18933_19455.cljs$core$IIndexed$_nth$arity$2(null,i__18935_19457);
var k_19459 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948_19458,(0),null);
var v_19460 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18948_19458,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_19459);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19459),v_19460);


var G__19465 = seq__18932_19454;
var G__19466 = chunk__18933_19455;
var G__19467 = count__18934_19456;
var G__19468 = (i__18935_19457 + (1));
seq__18932_19454 = G__19465;
chunk__18933_19455 = G__19466;
count__18934_19456 = G__19467;
i__18935_19457 = G__19468;
continue;
} else {
var temp__5804__auto___19469 = cljs.core.seq(seq__18932_19454);
if(temp__5804__auto___19469){
var seq__18932_19470__$1 = temp__5804__auto___19469;
if(cljs.core.chunked_seq_QMARK_(seq__18932_19470__$1)){
var c__5568__auto___19471 = cljs.core.chunk_first(seq__18932_19470__$1);
var G__19472 = cljs.core.chunk_rest(seq__18932_19470__$1);
var G__19473 = c__5568__auto___19471;
var G__19474 = cljs.core.count(c__5568__auto___19471);
var G__19475 = (0);
seq__18932_19454 = G__19472;
chunk__18933_19455 = G__19473;
count__18934_19456 = G__19474;
i__18935_19457 = G__19475;
continue;
} else {
var vec__18955_19476 = cljs.core.first(seq__18932_19470__$1);
var k_19477 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955_19476,(0),null);
var v_19478 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18955_19476,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_19477);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_19477),v_19478);


var G__19479 = cljs.core.next(seq__18932_19470__$1);
var G__19480 = null;
var G__19481 = (0);
var G__19482 = (0);
seq__18932_19454 = G__19479;
chunk__18933_19455 = G__19480;
count__18934_19456 = G__19481;
i__18935_19457 = G__19482;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__18967 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18967,(1),null);
var seq__18970_19486 = cljs.core.seq(node_children);
var chunk__18972_19487 = null;
var count__18973_19488 = (0);
var i__18974_19489 = (0);
while(true){
if((i__18974_19489 < count__18973_19488)){
var child_struct_19490 = chunk__18972_19487.cljs$core$IIndexed$_nth$arity$2(null,i__18974_19489);
if((!((child_struct_19490 == null)))){
if(typeof child_struct_19490 === 'string'){
var text_19495 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19495),child_struct_19490].join(''));
} else {
var children_19496 = shadow.dom.svg_node(child_struct_19490);
if(cljs.core.seq_QMARK_(children_19496)){
var seq__19016_19497 = cljs.core.seq(children_19496);
var chunk__19018_19498 = null;
var count__19019_19499 = (0);
var i__19020_19500 = (0);
while(true){
if((i__19020_19500 < count__19019_19499)){
var child_19501 = chunk__19018_19498.cljs$core$IIndexed$_nth$arity$2(null,i__19020_19500);
if(cljs.core.truth_(child_19501)){
node.appendChild(child_19501);


var G__19506 = seq__19016_19497;
var G__19507 = chunk__19018_19498;
var G__19508 = count__19019_19499;
var G__19509 = (i__19020_19500 + (1));
seq__19016_19497 = G__19506;
chunk__19018_19498 = G__19507;
count__19019_19499 = G__19508;
i__19020_19500 = G__19509;
continue;
} else {
var G__19510 = seq__19016_19497;
var G__19511 = chunk__19018_19498;
var G__19512 = count__19019_19499;
var G__19513 = (i__19020_19500 + (1));
seq__19016_19497 = G__19510;
chunk__19018_19498 = G__19511;
count__19019_19499 = G__19512;
i__19020_19500 = G__19513;
continue;
}
} else {
var temp__5804__auto___19514 = cljs.core.seq(seq__19016_19497);
if(temp__5804__auto___19514){
var seq__19016_19515__$1 = temp__5804__auto___19514;
if(cljs.core.chunked_seq_QMARK_(seq__19016_19515__$1)){
var c__5568__auto___19516 = cljs.core.chunk_first(seq__19016_19515__$1);
var G__19520 = cljs.core.chunk_rest(seq__19016_19515__$1);
var G__19521 = c__5568__auto___19516;
var G__19522 = cljs.core.count(c__5568__auto___19516);
var G__19523 = (0);
seq__19016_19497 = G__19520;
chunk__19018_19498 = G__19521;
count__19019_19499 = G__19522;
i__19020_19500 = G__19523;
continue;
} else {
var child_19524 = cljs.core.first(seq__19016_19515__$1);
if(cljs.core.truth_(child_19524)){
node.appendChild(child_19524);


var G__19525 = cljs.core.next(seq__19016_19515__$1);
var G__19526 = null;
var G__19527 = (0);
var G__19528 = (0);
seq__19016_19497 = G__19525;
chunk__19018_19498 = G__19526;
count__19019_19499 = G__19527;
i__19020_19500 = G__19528;
continue;
} else {
var G__19529 = cljs.core.next(seq__19016_19515__$1);
var G__19530 = null;
var G__19531 = (0);
var G__19532 = (0);
seq__19016_19497 = G__19529;
chunk__19018_19498 = G__19530;
count__19019_19499 = G__19531;
i__19020_19500 = G__19532;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19496);
}
}


var G__19533 = seq__18970_19486;
var G__19534 = chunk__18972_19487;
var G__19535 = count__18973_19488;
var G__19536 = (i__18974_19489 + (1));
seq__18970_19486 = G__19533;
chunk__18972_19487 = G__19534;
count__18973_19488 = G__19535;
i__18974_19489 = G__19536;
continue;
} else {
var G__19537 = seq__18970_19486;
var G__19538 = chunk__18972_19487;
var G__19539 = count__18973_19488;
var G__19540 = (i__18974_19489 + (1));
seq__18970_19486 = G__19537;
chunk__18972_19487 = G__19538;
count__18973_19488 = G__19539;
i__18974_19489 = G__19540;
continue;
}
} else {
var temp__5804__auto___19541 = cljs.core.seq(seq__18970_19486);
if(temp__5804__auto___19541){
var seq__18970_19542__$1 = temp__5804__auto___19541;
if(cljs.core.chunked_seq_QMARK_(seq__18970_19542__$1)){
var c__5568__auto___19543 = cljs.core.chunk_first(seq__18970_19542__$1);
var G__19544 = cljs.core.chunk_rest(seq__18970_19542__$1);
var G__19545 = c__5568__auto___19543;
var G__19546 = cljs.core.count(c__5568__auto___19543);
var G__19547 = (0);
seq__18970_19486 = G__19544;
chunk__18972_19487 = G__19545;
count__18973_19488 = G__19546;
i__18974_19489 = G__19547;
continue;
} else {
var child_struct_19548 = cljs.core.first(seq__18970_19542__$1);
if((!((child_struct_19548 == null)))){
if(typeof child_struct_19548 === 'string'){
var text_19549 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_19549),child_struct_19548].join(''));
} else {
var children_19550 = shadow.dom.svg_node(child_struct_19548);
if(cljs.core.seq_QMARK_(children_19550)){
var seq__19022_19551 = cljs.core.seq(children_19550);
var chunk__19024_19552 = null;
var count__19025_19553 = (0);
var i__19026_19554 = (0);
while(true){
if((i__19026_19554 < count__19025_19553)){
var child_19555 = chunk__19024_19552.cljs$core$IIndexed$_nth$arity$2(null,i__19026_19554);
if(cljs.core.truth_(child_19555)){
node.appendChild(child_19555);


var G__19556 = seq__19022_19551;
var G__19557 = chunk__19024_19552;
var G__19558 = count__19025_19553;
var G__19559 = (i__19026_19554 + (1));
seq__19022_19551 = G__19556;
chunk__19024_19552 = G__19557;
count__19025_19553 = G__19558;
i__19026_19554 = G__19559;
continue;
} else {
var G__19560 = seq__19022_19551;
var G__19561 = chunk__19024_19552;
var G__19562 = count__19025_19553;
var G__19563 = (i__19026_19554 + (1));
seq__19022_19551 = G__19560;
chunk__19024_19552 = G__19561;
count__19025_19553 = G__19562;
i__19026_19554 = G__19563;
continue;
}
} else {
var temp__5804__auto___19564__$1 = cljs.core.seq(seq__19022_19551);
if(temp__5804__auto___19564__$1){
var seq__19022_19565__$1 = temp__5804__auto___19564__$1;
if(cljs.core.chunked_seq_QMARK_(seq__19022_19565__$1)){
var c__5568__auto___19567 = cljs.core.chunk_first(seq__19022_19565__$1);
var G__19568 = cljs.core.chunk_rest(seq__19022_19565__$1);
var G__19569 = c__5568__auto___19567;
var G__19570 = cljs.core.count(c__5568__auto___19567);
var G__19571 = (0);
seq__19022_19551 = G__19568;
chunk__19024_19552 = G__19569;
count__19025_19553 = G__19570;
i__19026_19554 = G__19571;
continue;
} else {
var child_19575 = cljs.core.first(seq__19022_19565__$1);
if(cljs.core.truth_(child_19575)){
node.appendChild(child_19575);


var G__19576 = cljs.core.next(seq__19022_19565__$1);
var G__19577 = null;
var G__19578 = (0);
var G__19579 = (0);
seq__19022_19551 = G__19576;
chunk__19024_19552 = G__19577;
count__19025_19553 = G__19578;
i__19026_19554 = G__19579;
continue;
} else {
var G__19580 = cljs.core.next(seq__19022_19565__$1);
var G__19581 = null;
var G__19582 = (0);
var G__19583 = (0);
seq__19022_19551 = G__19580;
chunk__19024_19552 = G__19581;
count__19025_19553 = G__19582;
i__19026_19554 = G__19583;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_19550);
}
}


var G__19584 = cljs.core.next(seq__18970_19542__$1);
var G__19585 = null;
var G__19586 = (0);
var G__19587 = (0);
seq__18970_19486 = G__19584;
chunk__18972_19487 = G__19585;
count__18973_19488 = G__19586;
i__18974_19489 = G__19587;
continue;
} else {
var G__19588 = cljs.core.next(seq__18970_19542__$1);
var G__19589 = null;
var G__19590 = (0);
var G__19591 = (0);
seq__18970_19486 = G__19588;
chunk__18972_19487 = G__19589;
count__18973_19488 = G__19590;
i__18974_19489 = G__19591;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___19594 = arguments.length;
var i__5770__auto___19595 = (0);
while(true){
if((i__5770__auto___19595 < len__5769__auto___19594)){
args__5775__auto__.push((arguments[i__5770__auto___19595]));

var G__19596 = (i__5770__auto___19595 + (1));
i__5770__auto___19595 = G__19596;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq19031){
var G__19032 = cljs.core.first(seq19031);
var seq19031__$1 = cljs.core.next(seq19031);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__19032,seq19031__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__19044 = arguments.length;
switch (G__19044) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__14638__auto___19598 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_19049){
var state_val_19050 = (state_19049[(1)]);
if((state_val_19050 === (1))){
var state_19049__$1 = state_19049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19049__$1,(2),once_or_cleanup);
} else {
if((state_val_19050 === (2))){
var inst_19046 = (state_19049[(2)]);
var inst_19047 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_19049__$1 = (function (){var statearr_19051 = state_19049;
(statearr_19051[(7)] = inst_19046);

return statearr_19051;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19049__$1,inst_19047);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__14349__auto__ = null;
var shadow$dom$state_machine__14349__auto____0 = (function (){
var statearr_19052 = [null,null,null,null,null,null,null,null];
(statearr_19052[(0)] = shadow$dom$state_machine__14349__auto__);

(statearr_19052[(1)] = (1));

return statearr_19052;
});
var shadow$dom$state_machine__14349__auto____1 = (function (state_19049){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_19049);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e19055){var ex__14352__auto__ = e19055;
var statearr_19056_19601 = state_19049;
(statearr_19056_19601[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_19049[(4)]))){
var statearr_19057_19602 = state_19049;
(statearr_19057_19602[(1)] = cljs.core.first((state_19049[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19603 = state_19049;
state_19049 = G__19603;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
shadow$dom$state_machine__14349__auto__ = function(state_19049){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__14349__auto____0.call(this);
case 1:
return shadow$dom$state_machine__14349__auto____1.call(this,state_19049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__14349__auto____0;
shadow$dom$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__14349__auto____1;
return shadow$dom$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_19059 = f__14639__auto__();
(statearr_19059[(6)] = c__14638__auto___19598);

return statearr_19059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
