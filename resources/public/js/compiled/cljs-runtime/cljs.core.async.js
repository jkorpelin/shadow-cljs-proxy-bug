goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14708 = arguments.length;
switch (G__14708) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14712 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14712 = (function (f,blockable,meta14713){
this.f = f;
this.blockable = blockable;
this.meta14713 = meta14713;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14714,meta14713__$1){
var self__ = this;
var _14714__$1 = this;
return (new cljs.core.async.t_cljs$core$async14712(self__.f,self__.blockable,meta14713__$1));
}));

(cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14714){
var self__ = this;
var _14714__$1 = this;
return self__.meta14713;
}));

(cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14712.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14712.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14713","meta14713",1535644533,null)], null);
}));

(cljs.core.async.t_cljs$core$async14712.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14712.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14712");

(cljs.core.async.t_cljs$core$async14712.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14712");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14712.
 */
cljs.core.async.__GT_t_cljs$core$async14712 = (function cljs$core$async$__GT_t_cljs$core$async14712(f__$1,blockable__$1,meta14713){
return (new cljs.core.async.t_cljs$core$async14712(f__$1,blockable__$1,meta14713));
});

}

return (new cljs.core.async.t_cljs$core$async14712(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__14740 = arguments.length;
switch (G__14740) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14803 = arguments.length;
switch (G__14803) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__14819 = arguments.length;
switch (G__14819) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17804 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17804) : fn1.call(null,val_17804));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17804) : fn1.call(null,val_17804));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14829 = arguments.length;
switch (G__14829) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___17829 = n;
var x_17830 = (0);
while(true){
if((x_17830 < n__5636__auto___17829)){
(a[x_17830] = x_17830);

var G__17831 = (x_17830 + (1));
x_17830 = G__17831;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14833 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14833 = (function (flag,meta14834){
this.flag = flag;
this.meta14834 = meta14834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14835,meta14834__$1){
var self__ = this;
var _14835__$1 = this;
return (new cljs.core.async.t_cljs$core$async14833(self__.flag,meta14834__$1));
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14835){
var self__ = this;
var _14835__$1 = this;
return self__.meta14834;
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14834","meta14834",619545371,null)], null);
}));

(cljs.core.async.t_cljs$core$async14833.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14833");

(cljs.core.async.t_cljs$core$async14833.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14833");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14833.
 */
cljs.core.async.__GT_t_cljs$core$async14833 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14833(flag__$1,meta14834){
return (new cljs.core.async.t_cljs$core$async14833(flag__$1,meta14834));
});

}

return (new cljs.core.async.t_cljs$core$async14833(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14851 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14851 = (function (flag,cb,meta14852){
this.flag = flag;
this.cb = cb;
this.meta14852 = meta14852;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14853,meta14852__$1){
var self__ = this;
var _14853__$1 = this;
return (new cljs.core.async.t_cljs$core$async14851(self__.flag,self__.cb,meta14852__$1));
}));

(cljs.core.async.t_cljs$core$async14851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14853){
var self__ = this;
var _14853__$1 = this;
return self__.meta14852;
}));

(cljs.core.async.t_cljs$core$async14851.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14851.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14851.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14852","meta14852",-982122513,null)], null);
}));

(cljs.core.async.t_cljs$core$async14851.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14851.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14851");

(cljs.core.async.t_cljs$core$async14851.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async14851");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14851.
 */
cljs.core.async.__GT_t_cljs$core$async14851 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14851(flag__$1,cb__$1,meta14852){
return (new cljs.core.async.t_cljs$core$async14851(flag__$1,cb__$1,meta14852));
});

}

return (new cljs.core.async.t_cljs$core$async14851(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14866_SHARP_){
var G__14874 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14866_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14874) : fret.call(null,G__14874));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14867_SHARP_){
var G__14879 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14867_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14879) : fret.call(null,G__14879));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17861 = (i + (1));
i = G__17861;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___17865 = arguments.length;
var i__5770__auto___17866 = (0);
while(true){
if((i__5770__auto___17866 < len__5769__auto___17865)){
args__5775__auto__.push((arguments[i__5770__auto___17866]));

var G__17867 = (i__5770__auto___17866 + (1));
i__5770__auto___17866 = G__17867;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14890){
var map__14891 = p__14890;
var map__14891__$1 = cljs.core.__destructure_map(map__14891);
var opts = map__14891__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14884){
var G__14885 = cljs.core.first(seq14884);
var seq14884__$1 = cljs.core.next(seq14884);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14885,seq14884__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__14895 = arguments.length;
switch (G__14895) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14638__auto___17882 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_14938){
var state_val_14939 = (state_14938[(1)]);
if((state_val_14939 === (7))){
var inst_14928 = (state_14938[(2)]);
var state_14938__$1 = state_14938;
var statearr_14952_17884 = state_14938__$1;
(statearr_14952_17884[(2)] = inst_14928);

(statearr_14952_17884[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (1))){
var state_14938__$1 = state_14938;
var statearr_14953_17885 = state_14938__$1;
(statearr_14953_17885[(2)] = null);

(statearr_14953_17885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (4))){
var inst_14910 = (state_14938[(7)]);
var inst_14910__$1 = (state_14938[(2)]);
var inst_14912 = (inst_14910__$1 == null);
var state_14938__$1 = (function (){var statearr_14967 = state_14938;
(statearr_14967[(7)] = inst_14910__$1);

return statearr_14967;
})();
if(cljs.core.truth_(inst_14912)){
var statearr_14969_17890 = state_14938__$1;
(statearr_14969_17890[(1)] = (5));

} else {
var statearr_14971_17891 = state_14938__$1;
(statearr_14971_17891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (13))){
var state_14938__$1 = state_14938;
var statearr_14975_17892 = state_14938__$1;
(statearr_14975_17892[(2)] = null);

(statearr_14975_17892[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (6))){
var inst_14910 = (state_14938[(7)]);
var state_14938__$1 = state_14938;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14938__$1,(11),to,inst_14910);
} else {
if((state_val_14939 === (3))){
var inst_14931 = (state_14938[(2)]);
var state_14938__$1 = state_14938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14938__$1,inst_14931);
} else {
if((state_val_14939 === (12))){
var state_14938__$1 = state_14938;
var statearr_14978_17896 = state_14938__$1;
(statearr_14978_17896[(2)] = null);

(statearr_14978_17896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (2))){
var state_14938__$1 = state_14938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14938__$1,(4),from);
} else {
if((state_val_14939 === (11))){
var inst_14921 = (state_14938[(2)]);
var state_14938__$1 = state_14938;
if(cljs.core.truth_(inst_14921)){
var statearr_14979_17898 = state_14938__$1;
(statearr_14979_17898[(1)] = (12));

} else {
var statearr_14980_17899 = state_14938__$1;
(statearr_14980_17899[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (9))){
var state_14938__$1 = state_14938;
var statearr_14982_17900 = state_14938__$1;
(statearr_14982_17900[(2)] = null);

(statearr_14982_17900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (5))){
var state_14938__$1 = state_14938;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14985_17901 = state_14938__$1;
(statearr_14985_17901[(1)] = (8));

} else {
var statearr_14987_17903 = state_14938__$1;
(statearr_14987_17903[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (14))){
var inst_14926 = (state_14938[(2)]);
var state_14938__$1 = state_14938;
var statearr_14988_17904 = state_14938__$1;
(statearr_14988_17904[(2)] = inst_14926);

(statearr_14988_17904[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (10))){
var inst_14918 = (state_14938[(2)]);
var state_14938__$1 = state_14938;
var statearr_14989_17905 = state_14938__$1;
(statearr_14989_17905[(2)] = inst_14918);

(statearr_14989_17905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14939 === (8))){
var inst_14915 = cljs.core.async.close_BANG_(to);
var state_14938__$1 = state_14938;
var statearr_14993_17907 = state_14938__$1;
(statearr_14993_17907[(2)] = inst_14915);

(statearr_14993_17907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_14998 = [null,null,null,null,null,null,null,null];
(statearr_14998[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_14998[(1)] = (1));

return statearr_14998;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_14938){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_14938);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e14999){var ex__14352__auto__ = e14999;
var statearr_15000_17915 = state_14938;
(statearr_15000_17915[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_14938[(4)]))){
var statearr_15002_17917 = state_14938;
(statearr_15002_17917[(1)] = cljs.core.first((state_14938[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17919 = state_14938;
state_14938 = G__17919;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_14938){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_14938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15004 = f__14639__auto__();
(statearr_15004[(6)] = c__14638__auto___17882);

return statearr_15004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15030){
var vec__15031 = p__15030;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15031,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15031,(1),null);
var job = vec__15031;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14638__auto___17924 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15042){
var state_val_15043 = (state_15042[(1)]);
if((state_val_15043 === (1))){
var state_15042__$1 = state_15042;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15042__$1,(2),res,v);
} else {
if((state_val_15043 === (2))){
var inst_15039 = (state_15042[(2)]);
var inst_15040 = cljs.core.async.close_BANG_(res);
var state_15042__$1 = (function (){var statearr_15044 = state_15042;
(statearr_15044[(7)] = inst_15039);

return statearr_15044;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15042__$1,inst_15040);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0 = (function (){
var statearr_15045 = [null,null,null,null,null,null,null,null];
(statearr_15045[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__);

(statearr_15045[(1)] = (1));

return statearr_15045;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1 = (function (state_15042){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15042);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15046){var ex__14352__auto__ = e15046;
var statearr_15047_17925 = state_15042;
(statearr_15047_17925[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15042[(4)]))){
var statearr_15048_17930 = state_15042;
(statearr_15048_17930[(1)] = cljs.core.first((state_15042[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17931 = state_15042;
state_15042 = G__17931;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = function(state_15042){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1.call(this,state_15042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15049 = f__14639__auto__();
(statearr_15049[(6)] = c__14638__auto___17924);

return statearr_15049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15054){
var vec__15057 = p__15054;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15057,(1),null);
var job = vec__15057;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___17933 = n;
var __17934 = (0);
while(true){
if((__17934 < n__5636__auto___17933)){
var G__15063_17935 = type;
var G__15063_17936__$1 = (((G__15063_17935 instanceof cljs.core.Keyword))?G__15063_17935.fqn:null);
switch (G__15063_17936__$1) {
case "compute":
var c__14638__auto___17939 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17934,c__14638__auto___17939,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async){
return (function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = ((function (__17934,c__14638__auto___17939,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async){
return (function (state_15078){
var state_val_15079 = (state_15078[(1)]);
if((state_val_15079 === (1))){
var state_15078__$1 = state_15078;
var statearr_15083_17943 = state_15078__$1;
(statearr_15083_17943[(2)] = null);

(statearr_15083_17943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15079 === (2))){
var state_15078__$1 = state_15078;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15078__$1,(4),jobs);
} else {
if((state_val_15079 === (3))){
var inst_15076 = (state_15078[(2)]);
var state_15078__$1 = state_15078;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15078__$1,inst_15076);
} else {
if((state_val_15079 === (4))){
var inst_15066 = (state_15078[(2)]);
var inst_15067 = process__$1(inst_15066);
var state_15078__$1 = state_15078;
if(cljs.core.truth_(inst_15067)){
var statearr_15089_17945 = state_15078__$1;
(statearr_15089_17945[(1)] = (5));

} else {
var statearr_15090_17946 = state_15078__$1;
(statearr_15090_17946[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15079 === (5))){
var state_15078__$1 = state_15078;
var statearr_15093_17947 = state_15078__$1;
(statearr_15093_17947[(2)] = null);

(statearr_15093_17947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15079 === (6))){
var state_15078__$1 = state_15078;
var statearr_15094_17948 = state_15078__$1;
(statearr_15094_17948[(2)] = null);

(statearr_15094_17948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15079 === (7))){
var inst_15072 = (state_15078[(2)]);
var state_15078__$1 = state_15078;
var statearr_15095_17949 = state_15078__$1;
(statearr_15095_17949[(2)] = inst_15072);

(statearr_15095_17949[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17934,c__14638__auto___17939,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async))
;
return ((function (__17934,switch__14348__auto__,c__14638__auto___17939,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0 = (function (){
var statearr_15097 = [null,null,null,null,null,null,null];
(statearr_15097[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__);

(statearr_15097[(1)] = (1));

return statearr_15097;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1 = (function (state_15078){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15078);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15099){var ex__14352__auto__ = e15099;
var statearr_15100_17950 = state_15078;
(statearr_15100_17950[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15078[(4)]))){
var statearr_15101_17951 = state_15078;
(statearr_15101_17951[(1)] = cljs.core.first((state_15078[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17952 = state_15078;
state_15078 = G__17952;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = function(state_15078){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1.call(this,state_15078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__;
})()
;})(__17934,switch__14348__auto__,c__14638__auto___17939,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async))
})();
var state__14640__auto__ = (function (){var statearr_15102 = f__14639__auto__();
(statearr_15102[(6)] = c__14638__auto___17939);

return statearr_15102;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
});})(__17934,c__14638__auto___17939,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async))
);


break;
case "async":
var c__14638__auto___17959 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17934,c__14638__auto___17959,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async){
return (function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = ((function (__17934,c__14638__auto___17959,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async){
return (function (state_15117){
var state_val_15118 = (state_15117[(1)]);
if((state_val_15118 === (1))){
var state_15117__$1 = state_15117;
var statearr_15120_17960 = state_15117__$1;
(statearr_15120_17960[(2)] = null);

(statearr_15120_17960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (2))){
var state_15117__$1 = state_15117;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15117__$1,(4),jobs);
} else {
if((state_val_15118 === (3))){
var inst_15115 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15117__$1,inst_15115);
} else {
if((state_val_15118 === (4))){
var inst_15105 = (state_15117[(2)]);
var inst_15106 = async(inst_15105);
var state_15117__$1 = state_15117;
if(cljs.core.truth_(inst_15106)){
var statearr_15127_17962 = state_15117__$1;
(statearr_15127_17962[(1)] = (5));

} else {
var statearr_15130_17963 = state_15117__$1;
(statearr_15130_17963[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (5))){
var state_15117__$1 = state_15117;
var statearr_15132_17964 = state_15117__$1;
(statearr_15132_17964[(2)] = null);

(statearr_15132_17964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (6))){
var state_15117__$1 = state_15117;
var statearr_15137_17965 = state_15117__$1;
(statearr_15137_17965[(2)] = null);

(statearr_15137_17965[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15118 === (7))){
var inst_15111 = (state_15117[(2)]);
var state_15117__$1 = state_15117;
var statearr_15139_17966 = state_15117__$1;
(statearr_15139_17966[(2)] = inst_15111);

(statearr_15139_17966[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__17934,c__14638__auto___17959,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async))
;
return ((function (__17934,switch__14348__auto__,c__14638__auto___17959,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0 = (function (){
var statearr_15140 = [null,null,null,null,null,null,null];
(statearr_15140[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__);

(statearr_15140[(1)] = (1));

return statearr_15140;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1 = (function (state_15117){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15117);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15141){var ex__14352__auto__ = e15141;
var statearr_15142_17967 = state_15117;
(statearr_15142_17967[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15117[(4)]))){
var statearr_15143_17968 = state_15117;
(statearr_15143_17968[(1)] = cljs.core.first((state_15117[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17969 = state_15117;
state_15117 = G__17969;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = function(state_15117){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1.call(this,state_15117);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__;
})()
;})(__17934,switch__14348__auto__,c__14638__auto___17959,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async))
})();
var state__14640__auto__ = (function (){var statearr_15144 = f__14639__auto__();
(statearr_15144[(6)] = c__14638__auto___17959);

return statearr_15144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
});})(__17934,c__14638__auto___17959,G__15063_17935,G__15063_17936__$1,n__5636__auto___17933,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15063_17936__$1)].join('')));

}

var G__17970 = (__17934 + (1));
__17934 = G__17970;
continue;
} else {
}
break;
}

var c__14638__auto___17972 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15167){
var state_val_15168 = (state_15167[(1)]);
if((state_val_15168 === (7))){
var inst_15163 = (state_15167[(2)]);
var state_15167__$1 = state_15167;
var statearr_15174_17974 = state_15167__$1;
(statearr_15174_17974[(2)] = inst_15163);

(statearr_15174_17974[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15168 === (1))){
var state_15167__$1 = state_15167;
var statearr_15175_17976 = state_15167__$1;
(statearr_15175_17976[(2)] = null);

(statearr_15175_17976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15168 === (4))){
var inst_15147 = (state_15167[(7)]);
var inst_15147__$1 = (state_15167[(2)]);
var inst_15148 = (inst_15147__$1 == null);
var state_15167__$1 = (function (){var statearr_15176 = state_15167;
(statearr_15176[(7)] = inst_15147__$1);

return statearr_15176;
})();
if(cljs.core.truth_(inst_15148)){
var statearr_15177_17978 = state_15167__$1;
(statearr_15177_17978[(1)] = (5));

} else {
var statearr_15178_17979 = state_15167__$1;
(statearr_15178_17979[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15168 === (6))){
var inst_15153 = (state_15167[(8)]);
var inst_15147 = (state_15167[(7)]);
var inst_15153__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15154 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15155 = [inst_15147,inst_15153__$1];
var inst_15156 = (new cljs.core.PersistentVector(null,2,(5),inst_15154,inst_15155,null));
var state_15167__$1 = (function (){var statearr_15179 = state_15167;
(statearr_15179[(8)] = inst_15153__$1);

return statearr_15179;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15167__$1,(8),jobs,inst_15156);
} else {
if((state_val_15168 === (3))){
var inst_15165 = (state_15167[(2)]);
var state_15167__$1 = state_15167;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15167__$1,inst_15165);
} else {
if((state_val_15168 === (2))){
var state_15167__$1 = state_15167;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15167__$1,(4),from);
} else {
if((state_val_15168 === (9))){
var inst_15160 = (state_15167[(2)]);
var state_15167__$1 = (function (){var statearr_15181 = state_15167;
(statearr_15181[(9)] = inst_15160);

return statearr_15181;
})();
var statearr_15183_17980 = state_15167__$1;
(statearr_15183_17980[(2)] = null);

(statearr_15183_17980[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15168 === (5))){
var inst_15150 = cljs.core.async.close_BANG_(jobs);
var state_15167__$1 = state_15167;
var statearr_15188_17982 = state_15167__$1;
(statearr_15188_17982[(2)] = inst_15150);

(statearr_15188_17982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15168 === (8))){
var inst_15153 = (state_15167[(8)]);
var inst_15158 = (state_15167[(2)]);
var state_15167__$1 = (function (){var statearr_15191 = state_15167;
(statearr_15191[(10)] = inst_15158);

return statearr_15191;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15167__$1,(9),results,inst_15153);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0 = (function (){
var statearr_15192 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15192[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__);

(statearr_15192[(1)] = (1));

return statearr_15192;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1 = (function (state_15167){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15167);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15193){var ex__14352__auto__ = e15193;
var statearr_15194_17984 = state_15167;
(statearr_15194_17984[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15167[(4)]))){
var statearr_15195_17986 = state_15167;
(statearr_15195_17986[(1)] = cljs.core.first((state_15167[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17988 = state_15167;
state_15167 = G__17988;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = function(state_15167){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1.call(this,state_15167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15196 = f__14639__auto__();
(statearr_15196[(6)] = c__14638__auto___17972);

return statearr_15196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


var c__14638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15239){
var state_val_15240 = (state_15239[(1)]);
if((state_val_15240 === (7))){
var inst_15235 = (state_15239[(2)]);
var state_15239__$1 = state_15239;
var statearr_15243_17989 = state_15239__$1;
(statearr_15243_17989[(2)] = inst_15235);

(statearr_15243_17989[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (20))){
var state_15239__$1 = state_15239;
var statearr_15244_17990 = state_15239__$1;
(statearr_15244_17990[(2)] = null);

(statearr_15244_17990[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (1))){
var state_15239__$1 = state_15239;
var statearr_15249_17991 = state_15239__$1;
(statearr_15249_17991[(2)] = null);

(statearr_15249_17991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (4))){
var inst_15203 = (state_15239[(7)]);
var inst_15203__$1 = (state_15239[(2)]);
var inst_15204 = (inst_15203__$1 == null);
var state_15239__$1 = (function (){var statearr_15251 = state_15239;
(statearr_15251[(7)] = inst_15203__$1);

return statearr_15251;
})();
if(cljs.core.truth_(inst_15204)){
var statearr_15253_17993 = state_15239__$1;
(statearr_15253_17993[(1)] = (5));

} else {
var statearr_15255_17994 = state_15239__$1;
(statearr_15255_17994[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (15))){
var inst_15217 = (state_15239[(8)]);
var state_15239__$1 = state_15239;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15239__$1,(18),to,inst_15217);
} else {
if((state_val_15240 === (21))){
var inst_15230 = (state_15239[(2)]);
var state_15239__$1 = state_15239;
var statearr_15267_17996 = state_15239__$1;
(statearr_15267_17996[(2)] = inst_15230);

(statearr_15267_17996[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (13))){
var inst_15232 = (state_15239[(2)]);
var state_15239__$1 = (function (){var statearr_15271 = state_15239;
(statearr_15271[(9)] = inst_15232);

return statearr_15271;
})();
var statearr_15272_17997 = state_15239__$1;
(statearr_15272_17997[(2)] = null);

(statearr_15272_17997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (6))){
var inst_15203 = (state_15239[(7)]);
var state_15239__$1 = state_15239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15239__$1,(11),inst_15203);
} else {
if((state_val_15240 === (17))){
var inst_15225 = (state_15239[(2)]);
var state_15239__$1 = state_15239;
if(cljs.core.truth_(inst_15225)){
var statearr_15273_17998 = state_15239__$1;
(statearr_15273_17998[(1)] = (19));

} else {
var statearr_15274_17999 = state_15239__$1;
(statearr_15274_17999[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (3))){
var inst_15237 = (state_15239[(2)]);
var state_15239__$1 = state_15239;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15239__$1,inst_15237);
} else {
if((state_val_15240 === (12))){
var inst_15214 = (state_15239[(10)]);
var state_15239__$1 = state_15239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15239__$1,(14),inst_15214);
} else {
if((state_val_15240 === (2))){
var state_15239__$1 = state_15239;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15239__$1,(4),results);
} else {
if((state_val_15240 === (19))){
var state_15239__$1 = state_15239;
var statearr_15281_18001 = state_15239__$1;
(statearr_15281_18001[(2)] = null);

(statearr_15281_18001[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (11))){
var inst_15214 = (state_15239[(2)]);
var state_15239__$1 = (function (){var statearr_15282 = state_15239;
(statearr_15282[(10)] = inst_15214);

return statearr_15282;
})();
var statearr_15283_18007 = state_15239__$1;
(statearr_15283_18007[(2)] = null);

(statearr_15283_18007[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (9))){
var state_15239__$1 = state_15239;
var statearr_15284_18010 = state_15239__$1;
(statearr_15284_18010[(2)] = null);

(statearr_15284_18010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (5))){
var state_15239__$1 = state_15239;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15288_18011 = state_15239__$1;
(statearr_15288_18011[(1)] = (8));

} else {
var statearr_15289_18014 = state_15239__$1;
(statearr_15289_18014[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (14))){
var inst_15219 = (state_15239[(11)]);
var inst_15217 = (state_15239[(8)]);
var inst_15217__$1 = (state_15239[(2)]);
var inst_15218 = (inst_15217__$1 == null);
var inst_15219__$1 = cljs.core.not(inst_15218);
var state_15239__$1 = (function (){var statearr_15290 = state_15239;
(statearr_15290[(11)] = inst_15219__$1);

(statearr_15290[(8)] = inst_15217__$1);

return statearr_15290;
})();
if(inst_15219__$1){
var statearr_15292_18019 = state_15239__$1;
(statearr_15292_18019[(1)] = (15));

} else {
var statearr_15293_18020 = state_15239__$1;
(statearr_15293_18020[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (16))){
var inst_15219 = (state_15239[(11)]);
var state_15239__$1 = state_15239;
var statearr_15294_18023 = state_15239__$1;
(statearr_15294_18023[(2)] = inst_15219);

(statearr_15294_18023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (10))){
var inst_15211 = (state_15239[(2)]);
var state_15239__$1 = state_15239;
var statearr_15295_18024 = state_15239__$1;
(statearr_15295_18024[(2)] = inst_15211);

(statearr_15295_18024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (18))){
var inst_15222 = (state_15239[(2)]);
var state_15239__$1 = state_15239;
var statearr_15296_18027 = state_15239__$1;
(statearr_15296_18027[(2)] = inst_15222);

(statearr_15296_18027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15240 === (8))){
var inst_15208 = cljs.core.async.close_BANG_(to);
var state_15239__$1 = state_15239;
var statearr_15301_18028 = state_15239__$1;
(statearr_15301_18028[(2)] = inst_15208);

(statearr_15301_18028[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0 = (function (){
var statearr_15305 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15305[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__);

(statearr_15305[(1)] = (1));

return statearr_15305;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1 = (function (state_15239){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15239);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15307){var ex__14352__auto__ = e15307;
var statearr_15308_18032 = state_15239;
(statearr_15308_18032[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15239[(4)]))){
var statearr_15309_18033 = state_15239;
(statearr_15309_18033[(1)] = cljs.core.first((state_15239[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18034 = state_15239;
state_15239 = G__18034;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__ = function(state_15239){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1.call(this,state_15239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14349__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15310 = f__14639__auto__();
(statearr_15310[(6)] = c__14638__auto__);

return statearr_15310;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));

return c__14638__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15316 = arguments.length;
switch (G__15316) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__15319 = arguments.length;
switch (G__15319) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__15343 = arguments.length;
switch (G__15343) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14638__auto___18056 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15381){
var state_val_15382 = (state_15381[(1)]);
if((state_val_15382 === (7))){
var inst_15377 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15383_18062 = state_15381__$1;
(statearr_15383_18062[(2)] = inst_15377);

(statearr_15383_18062[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (1))){
var state_15381__$1 = state_15381;
var statearr_15384_18068 = state_15381__$1;
(statearr_15384_18068[(2)] = null);

(statearr_15384_18068[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (4))){
var inst_15355 = (state_15381[(7)]);
var inst_15355__$1 = (state_15381[(2)]);
var inst_15356 = (inst_15355__$1 == null);
var state_15381__$1 = (function (){var statearr_15387 = state_15381;
(statearr_15387[(7)] = inst_15355__$1);

return statearr_15387;
})();
if(cljs.core.truth_(inst_15356)){
var statearr_15388_18069 = state_15381__$1;
(statearr_15388_18069[(1)] = (5));

} else {
var statearr_15390_18070 = state_15381__$1;
(statearr_15390_18070[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (13))){
var state_15381__$1 = state_15381;
var statearr_15391_18071 = state_15381__$1;
(statearr_15391_18071[(2)] = null);

(statearr_15391_18071[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (6))){
var inst_15355 = (state_15381[(7)]);
var inst_15364 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15355) : p.call(null,inst_15355));
var state_15381__$1 = state_15381;
if(cljs.core.truth_(inst_15364)){
var statearr_15394_18072 = state_15381__$1;
(statearr_15394_18072[(1)] = (9));

} else {
var statearr_15395_18073 = state_15381__$1;
(statearr_15395_18073[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (3))){
var inst_15379 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15381__$1,inst_15379);
} else {
if((state_val_15382 === (12))){
var state_15381__$1 = state_15381;
var statearr_15396_18074 = state_15381__$1;
(statearr_15396_18074[(2)] = null);

(statearr_15396_18074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (2))){
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15381__$1,(4),ch);
} else {
if((state_val_15382 === (11))){
var inst_15355 = (state_15381[(7)]);
var inst_15368 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15381__$1,(8),inst_15368,inst_15355);
} else {
if((state_val_15382 === (9))){
var state_15381__$1 = state_15381;
var statearr_15405_18075 = state_15381__$1;
(statearr_15405_18075[(2)] = tc);

(statearr_15405_18075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (5))){
var inst_15358 = cljs.core.async.close_BANG_(tc);
var inst_15359 = cljs.core.async.close_BANG_(fc);
var state_15381__$1 = (function (){var statearr_15415 = state_15381;
(statearr_15415[(8)] = inst_15358);

return statearr_15415;
})();
var statearr_15416_18076 = state_15381__$1;
(statearr_15416_18076[(2)] = inst_15359);

(statearr_15416_18076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (14))){
var inst_15375 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
var statearr_15417_18078 = state_15381__$1;
(statearr_15417_18078[(2)] = inst_15375);

(statearr_15417_18078[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (10))){
var state_15381__$1 = state_15381;
var statearr_15418_18080 = state_15381__$1;
(statearr_15418_18080[(2)] = fc);

(statearr_15418_18080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15382 === (8))){
var inst_15370 = (state_15381[(2)]);
var state_15381__$1 = state_15381;
if(cljs.core.truth_(inst_15370)){
var statearr_15426_18081 = state_15381__$1;
(statearr_15426_18081[(1)] = (12));

} else {
var statearr_15427_18082 = state_15381__$1;
(statearr_15427_18082[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_15430 = [null,null,null,null,null,null,null,null,null];
(statearr_15430[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_15430[(1)] = (1));

return statearr_15430;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_15381){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15381);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15431){var ex__14352__auto__ = e15431;
var statearr_15432_18084 = state_15381;
(statearr_15432_18084[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15381[(4)]))){
var statearr_15435_18085 = state_15381;
(statearr_15435_18085[(1)] = cljs.core.first((state_15381[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18088 = state_15381;
state_15381 = G__18088;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_15381){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_15381);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15437 = f__14639__auto__();
(statearr_15437[(6)] = c__14638__auto___18056);

return statearr_15437;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15485){
var state_val_15486 = (state_15485[(1)]);
if((state_val_15486 === (7))){
var inst_15481 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
var statearr_15491_18091 = state_15485__$1;
(statearr_15491_18091[(2)] = inst_15481);

(statearr_15491_18091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (1))){
var inst_15441 = init;
var inst_15446 = inst_15441;
var state_15485__$1 = (function (){var statearr_15494 = state_15485;
(statearr_15494[(7)] = inst_15446);

return statearr_15494;
})();
var statearr_15495_18092 = state_15485__$1;
(statearr_15495_18092[(2)] = null);

(statearr_15495_18092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (4))){
var inst_15449 = (state_15485[(8)]);
var inst_15449__$1 = (state_15485[(2)]);
var inst_15452 = (inst_15449__$1 == null);
var state_15485__$1 = (function (){var statearr_15496 = state_15485;
(statearr_15496[(8)] = inst_15449__$1);

return statearr_15496;
})();
if(cljs.core.truth_(inst_15452)){
var statearr_15499_18093 = state_15485__$1;
(statearr_15499_18093[(1)] = (5));

} else {
var statearr_15502_18094 = state_15485__$1;
(statearr_15502_18094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (6))){
var inst_15446 = (state_15485[(7)]);
var inst_15449 = (state_15485[(8)]);
var inst_15460 = (state_15485[(9)]);
var inst_15460__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15446,inst_15449) : f.call(null,inst_15446,inst_15449));
var inst_15462 = cljs.core.reduced_QMARK_(inst_15460__$1);
var state_15485__$1 = (function (){var statearr_15503 = state_15485;
(statearr_15503[(9)] = inst_15460__$1);

return statearr_15503;
})();
if(inst_15462){
var statearr_15506_18095 = state_15485__$1;
(statearr_15506_18095[(1)] = (8));

} else {
var statearr_15507_18096 = state_15485__$1;
(statearr_15507_18096[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (3))){
var inst_15483 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15485__$1,inst_15483);
} else {
if((state_val_15486 === (2))){
var state_15485__$1 = state_15485;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15485__$1,(4),ch);
} else {
if((state_val_15486 === (9))){
var inst_15460 = (state_15485[(9)]);
var inst_15446 = inst_15460;
var state_15485__$1 = (function (){var statearr_15519 = state_15485;
(statearr_15519[(7)] = inst_15446);

return statearr_15519;
})();
var statearr_15521_18097 = state_15485__$1;
(statearr_15521_18097[(2)] = null);

(statearr_15521_18097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (5))){
var inst_15446 = (state_15485[(7)]);
var state_15485__$1 = state_15485;
var statearr_15522_18098 = state_15485__$1;
(statearr_15522_18098[(2)] = inst_15446);

(statearr_15522_18098[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (10))){
var inst_15475 = (state_15485[(2)]);
var state_15485__$1 = state_15485;
var statearr_15528_18103 = state_15485__$1;
(statearr_15528_18103[(2)] = inst_15475);

(statearr_15528_18103[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15486 === (8))){
var inst_15460 = (state_15485[(9)]);
var inst_15471 = cljs.core.deref(inst_15460);
var state_15485__$1 = state_15485;
var statearr_15529_18104 = state_15485__$1;
(statearr_15529_18104[(2)] = inst_15471);

(statearr_15529_18104[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14349__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14349__auto____0 = (function (){
var statearr_15530 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15530[(0)] = cljs$core$async$reduce_$_state_machine__14349__auto__);

(statearr_15530[(1)] = (1));

return statearr_15530;
});
var cljs$core$async$reduce_$_state_machine__14349__auto____1 = (function (state_15485){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15485);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15531){var ex__14352__auto__ = e15531;
var statearr_15532_18111 = state_15485;
(statearr_15532_18111[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15485[(4)]))){
var statearr_15533_18113 = state_15485;
(statearr_15533_18113[(1)] = cljs.core.first((state_15485[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18117 = state_15485;
state_15485 = G__18117;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14349__auto__ = function(state_15485){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14349__auto____1.call(this,state_15485);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14349__auto____0;
cljs$core$async$reduce_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14349__auto____1;
return cljs$core$async$reduce_$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15545 = f__14639__auto__();
(statearr_15545[(6)] = c__14638__auto__);

return statearr_15545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));

return c__14638__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15565){
var state_val_15566 = (state_15565[(1)]);
if((state_val_15566 === (1))){
var inst_15560 = cljs.core.async.reduce(f__$1,init,ch);
var state_15565__$1 = state_15565;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15565__$1,(2),inst_15560);
} else {
if((state_val_15566 === (2))){
var inst_15562 = (state_15565[(2)]);
var inst_15563 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15562) : f__$1.call(null,inst_15562));
var state_15565__$1 = state_15565;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15565__$1,inst_15563);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14349__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14349__auto____0 = (function (){
var statearr_15604 = [null,null,null,null,null,null,null];
(statearr_15604[(0)] = cljs$core$async$transduce_$_state_machine__14349__auto__);

(statearr_15604[(1)] = (1));

return statearr_15604;
});
var cljs$core$async$transduce_$_state_machine__14349__auto____1 = (function (state_15565){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15565);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15612){var ex__14352__auto__ = e15612;
var statearr_15614_18137 = state_15565;
(statearr_15614_18137[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15565[(4)]))){
var statearr_15619_18138 = state_15565;
(statearr_15619_18138[(1)] = cljs.core.first((state_15565[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18139 = state_15565;
state_15565 = G__18139;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14349__auto__ = function(state_15565){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14349__auto____1.call(this,state_15565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14349__auto____0;
cljs$core$async$transduce_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14349__auto____1;
return cljs$core$async$transduce_$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15624 = f__14639__auto__();
(statearr_15624[(6)] = c__14638__auto__);

return statearr_15624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));

return c__14638__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15626 = arguments.length;
switch (G__15626) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15662){
var state_val_15663 = (state_15662[(1)]);
if((state_val_15663 === (7))){
var inst_15640 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
var statearr_15673_18147 = state_15662__$1;
(statearr_15673_18147[(2)] = inst_15640);

(statearr_15673_18147[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (1))){
var inst_15631 = cljs.core.seq(coll);
var inst_15632 = inst_15631;
var state_15662__$1 = (function (){var statearr_15680 = state_15662;
(statearr_15680[(7)] = inst_15632);

return statearr_15680;
})();
var statearr_15681_18149 = state_15662__$1;
(statearr_15681_18149[(2)] = null);

(statearr_15681_18149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (4))){
var inst_15632 = (state_15662[(7)]);
var inst_15638 = cljs.core.first(inst_15632);
var state_15662__$1 = state_15662;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15662__$1,(7),ch,inst_15638);
} else {
if((state_val_15663 === (13))){
var inst_15656 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
var statearr_15686_18152 = state_15662__$1;
(statearr_15686_18152[(2)] = inst_15656);

(statearr_15686_18152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (6))){
var inst_15643 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
if(cljs.core.truth_(inst_15643)){
var statearr_15688_18155 = state_15662__$1;
(statearr_15688_18155[(1)] = (8));

} else {
var statearr_15689_18157 = state_15662__$1;
(statearr_15689_18157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (3))){
var inst_15660 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15662__$1,inst_15660);
} else {
if((state_val_15663 === (12))){
var state_15662__$1 = state_15662;
var statearr_15690_18162 = state_15662__$1;
(statearr_15690_18162[(2)] = null);

(statearr_15690_18162[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (2))){
var inst_15632 = (state_15662[(7)]);
var state_15662__$1 = state_15662;
if(cljs.core.truth_(inst_15632)){
var statearr_15691_18163 = state_15662__$1;
(statearr_15691_18163[(1)] = (4));

} else {
var statearr_15692_18164 = state_15662__$1;
(statearr_15692_18164[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (11))){
var inst_15653 = cljs.core.async.close_BANG_(ch);
var state_15662__$1 = state_15662;
var statearr_15697_18165 = state_15662__$1;
(statearr_15697_18165[(2)] = inst_15653);

(statearr_15697_18165[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (9))){
var state_15662__$1 = state_15662;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15702_18166 = state_15662__$1;
(statearr_15702_18166[(1)] = (11));

} else {
var statearr_15703_18167 = state_15662__$1;
(statearr_15703_18167[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (5))){
var inst_15632 = (state_15662[(7)]);
var state_15662__$1 = state_15662;
var statearr_15708_18172 = state_15662__$1;
(statearr_15708_18172[(2)] = inst_15632);

(statearr_15708_18172[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (10))){
var inst_15658 = (state_15662[(2)]);
var state_15662__$1 = state_15662;
var statearr_15713_18173 = state_15662__$1;
(statearr_15713_18173[(2)] = inst_15658);

(statearr_15713_18173[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15663 === (8))){
var inst_15632 = (state_15662[(7)]);
var inst_15645 = cljs.core.next(inst_15632);
var inst_15632__$1 = inst_15645;
var state_15662__$1 = (function (){var statearr_15714 = state_15662;
(statearr_15714[(7)] = inst_15632__$1);

return statearr_15714;
})();
var statearr_15715_18179 = state_15662__$1;
(statearr_15715_18179[(2)] = null);

(statearr_15715_18179[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_15716 = [null,null,null,null,null,null,null,null];
(statearr_15716[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_15716[(1)] = (1));

return statearr_15716;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_15662){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15662);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e15722){var ex__14352__auto__ = e15722;
var statearr_15723_18182 = state_15662;
(statearr_15723_18182[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15662[(4)]))){
var statearr_15724_18184 = state_15662;
(statearr_15724_18184[(1)] = cljs.core.first((state_15662[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18187 = state_15662;
state_15662 = G__18187;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_15662){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_15662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_15726 = f__14639__auto__();
(statearr_15726[(6)] = c__14638__auto__);

return statearr_15726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));

return c__14638__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15731 = arguments.length;
switch (G__15731) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18206 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18206(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18223 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18223(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18229 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18229(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18237 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18237(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async15767 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15767 = (function (ch,cs,meta15768){
this.ch = ch;
this.cs = cs;
this.meta15768 = meta15768;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15769,meta15768__$1){
var self__ = this;
var _15769__$1 = this;
return (new cljs.core.async.t_cljs$core$async15767(self__.ch,self__.cs,meta15768__$1));
}));

(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15769){
var self__ = this;
var _15769__$1 = this;
return self__.meta15768;
}));

(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15767.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15767.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15768","meta15768",-1213603682,null)], null);
}));

(cljs.core.async.t_cljs$core$async15767.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15767.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15767");

(cljs.core.async.t_cljs$core$async15767.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async15767");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15767.
 */
cljs.core.async.__GT_t_cljs$core$async15767 = (function cljs$core$async$mult_$___GT_t_cljs$core$async15767(ch__$1,cs__$1,meta15768){
return (new cljs.core.async.t_cljs$core$async15767(ch__$1,cs__$1,meta15768));
});

}

return (new cljs.core.async.t_cljs$core$async15767(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14638__auto___18294 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_15940){
var state_val_15941 = (state_15940[(1)]);
if((state_val_15941 === (7))){
var inst_15931 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_15942_18301 = state_15940__$1;
(statearr_15942_18301[(2)] = inst_15931);

(statearr_15942_18301[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (20))){
var inst_15823 = (state_15940[(7)]);
var inst_15836 = cljs.core.first(inst_15823);
var inst_15837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15836,(0),null);
var inst_15838 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15836,(1),null);
var state_15940__$1 = (function (){var statearr_15951 = state_15940;
(statearr_15951[(8)] = inst_15837);

return statearr_15951;
})();
if(cljs.core.truth_(inst_15838)){
var statearr_15952_18307 = state_15940__$1;
(statearr_15952_18307[(1)] = (22));

} else {
var statearr_15953_18308 = state_15940__$1;
(statearr_15953_18308[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (27))){
var inst_15867 = (state_15940[(9)]);
var inst_15869 = (state_15940[(10)]);
var inst_15790 = (state_15940[(11)]);
var inst_15874 = (state_15940[(12)]);
var inst_15874__$1 = cljs.core._nth(inst_15867,inst_15869);
var inst_15877 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15874__$1,inst_15790,done);
var state_15940__$1 = (function (){var statearr_15957 = state_15940;
(statearr_15957[(12)] = inst_15874__$1);

return statearr_15957;
})();
if(cljs.core.truth_(inst_15877)){
var statearr_15958_18314 = state_15940__$1;
(statearr_15958_18314[(1)] = (30));

} else {
var statearr_15959_18315 = state_15940__$1;
(statearr_15959_18315[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (1))){
var state_15940__$1 = state_15940;
var statearr_15960_18318 = state_15940__$1;
(statearr_15960_18318[(2)] = null);

(statearr_15960_18318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (24))){
var inst_15823 = (state_15940[(7)]);
var inst_15844 = (state_15940[(2)]);
var inst_15845 = cljs.core.next(inst_15823);
var inst_15799 = inst_15845;
var inst_15800 = null;
var inst_15801 = (0);
var inst_15802 = (0);
var state_15940__$1 = (function (){var statearr_15964 = state_15940;
(statearr_15964[(13)] = inst_15799);

(statearr_15964[(14)] = inst_15800);

(statearr_15964[(15)] = inst_15844);

(statearr_15964[(16)] = inst_15802);

(statearr_15964[(17)] = inst_15801);

return statearr_15964;
})();
var statearr_15965_18327 = state_15940__$1;
(statearr_15965_18327[(2)] = null);

(statearr_15965_18327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (39))){
var state_15940__$1 = state_15940;
var statearr_15975_18330 = state_15940__$1;
(statearr_15975_18330[(2)] = null);

(statearr_15975_18330[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (4))){
var inst_15790 = (state_15940[(11)]);
var inst_15790__$1 = (state_15940[(2)]);
var inst_15791 = (inst_15790__$1 == null);
var state_15940__$1 = (function (){var statearr_15979 = state_15940;
(statearr_15979[(11)] = inst_15790__$1);

return statearr_15979;
})();
if(cljs.core.truth_(inst_15791)){
var statearr_15980_18335 = state_15940__$1;
(statearr_15980_18335[(1)] = (5));

} else {
var statearr_15981_18338 = state_15940__$1;
(statearr_15981_18338[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (15))){
var inst_15799 = (state_15940[(13)]);
var inst_15800 = (state_15940[(14)]);
var inst_15802 = (state_15940[(16)]);
var inst_15801 = (state_15940[(17)]);
var inst_15819 = (state_15940[(2)]);
var inst_15820 = (inst_15802 + (1));
var tmp15971 = inst_15799;
var tmp15972 = inst_15800;
var tmp15973 = inst_15801;
var inst_15799__$1 = tmp15971;
var inst_15800__$1 = tmp15972;
var inst_15801__$1 = tmp15973;
var inst_15802__$1 = inst_15820;
var state_15940__$1 = (function (){var statearr_15985 = state_15940;
(statearr_15985[(13)] = inst_15799__$1);

(statearr_15985[(14)] = inst_15800__$1);

(statearr_15985[(18)] = inst_15819);

(statearr_15985[(16)] = inst_15802__$1);

(statearr_15985[(17)] = inst_15801__$1);

return statearr_15985;
})();
var statearr_15986_18343 = state_15940__$1;
(statearr_15986_18343[(2)] = null);

(statearr_15986_18343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (21))){
var inst_15848 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_15992_18346 = state_15940__$1;
(statearr_15992_18346[(2)] = inst_15848);

(statearr_15992_18346[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (31))){
var inst_15874 = (state_15940[(12)]);
var inst_15880 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15874);
var state_15940__$1 = state_15940;
var statearr_15997_18347 = state_15940__$1;
(statearr_15997_18347[(2)] = inst_15880);

(statearr_15997_18347[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (32))){
var inst_15866 = (state_15940[(19)]);
var inst_15867 = (state_15940[(9)]);
var inst_15869 = (state_15940[(10)]);
var inst_15868 = (state_15940[(20)]);
var inst_15882 = (state_15940[(2)]);
var inst_15883 = (inst_15869 + (1));
var tmp15988 = inst_15866;
var tmp15989 = inst_15867;
var tmp15990 = inst_15868;
var inst_15866__$1 = tmp15988;
var inst_15867__$1 = tmp15989;
var inst_15868__$1 = tmp15990;
var inst_15869__$1 = inst_15883;
var state_15940__$1 = (function (){var statearr_15998 = state_15940;
(statearr_15998[(19)] = inst_15866__$1);

(statearr_15998[(21)] = inst_15882);

(statearr_15998[(9)] = inst_15867__$1);

(statearr_15998[(10)] = inst_15869__$1);

(statearr_15998[(20)] = inst_15868__$1);

return statearr_15998;
})();
var statearr_15999_18360 = state_15940__$1;
(statearr_15999_18360[(2)] = null);

(statearr_15999_18360[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (40))){
var inst_15899 = (state_15940[(22)]);
var inst_15904 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15899);
var state_15940__$1 = state_15940;
var statearr_16001_18369 = state_15940__$1;
(statearr_16001_18369[(2)] = inst_15904);

(statearr_16001_18369[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (33))){
var inst_15886 = (state_15940[(23)]);
var inst_15890 = cljs.core.chunked_seq_QMARK_(inst_15886);
var state_15940__$1 = state_15940;
if(inst_15890){
var statearr_16002_18375 = state_15940__$1;
(statearr_16002_18375[(1)] = (36));

} else {
var statearr_16003_18377 = state_15940__$1;
(statearr_16003_18377[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (13))){
var inst_15812 = (state_15940[(24)]);
var inst_15816 = cljs.core.async.close_BANG_(inst_15812);
var state_15940__$1 = state_15940;
var statearr_16004_18378 = state_15940__$1;
(statearr_16004_18378[(2)] = inst_15816);

(statearr_16004_18378[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (22))){
var inst_15837 = (state_15940[(8)]);
var inst_15841 = cljs.core.async.close_BANG_(inst_15837);
var state_15940__$1 = state_15940;
var statearr_16006_18383 = state_15940__$1;
(statearr_16006_18383[(2)] = inst_15841);

(statearr_16006_18383[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (36))){
var inst_15886 = (state_15940[(23)]);
var inst_15892 = cljs.core.chunk_first(inst_15886);
var inst_15893 = cljs.core.chunk_rest(inst_15886);
var inst_15895 = cljs.core.count(inst_15892);
var inst_15866 = inst_15893;
var inst_15867 = inst_15892;
var inst_15868 = inst_15895;
var inst_15869 = (0);
var state_15940__$1 = (function (){var statearr_16010 = state_15940;
(statearr_16010[(19)] = inst_15866);

(statearr_16010[(9)] = inst_15867);

(statearr_16010[(10)] = inst_15869);

(statearr_16010[(20)] = inst_15868);

return statearr_16010;
})();
var statearr_16012_18385 = state_15940__$1;
(statearr_16012_18385[(2)] = null);

(statearr_16012_18385[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (41))){
var inst_15886 = (state_15940[(23)]);
var inst_15906 = (state_15940[(2)]);
var inst_15910 = cljs.core.next(inst_15886);
var inst_15866 = inst_15910;
var inst_15867 = null;
var inst_15868 = (0);
var inst_15869 = (0);
var state_15940__$1 = (function (){var statearr_16015 = state_15940;
(statearr_16015[(19)] = inst_15866);

(statearr_16015[(25)] = inst_15906);

(statearr_16015[(9)] = inst_15867);

(statearr_16015[(10)] = inst_15869);

(statearr_16015[(20)] = inst_15868);

return statearr_16015;
})();
var statearr_16017_18386 = state_15940__$1;
(statearr_16017_18386[(2)] = null);

(statearr_16017_18386[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (43))){
var state_15940__$1 = state_15940;
var statearr_16018_18388 = state_15940__$1;
(statearr_16018_18388[(2)] = null);

(statearr_16018_18388[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (29))){
var inst_15918 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_16019_18391 = state_15940__$1;
(statearr_16019_18391[(2)] = inst_15918);

(statearr_16019_18391[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (44))){
var inst_15928 = (state_15940[(2)]);
var state_15940__$1 = (function (){var statearr_16020 = state_15940;
(statearr_16020[(26)] = inst_15928);

return statearr_16020;
})();
var statearr_16021_18396 = state_15940__$1;
(statearr_16021_18396[(2)] = null);

(statearr_16021_18396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (6))){
var inst_15858 = (state_15940[(27)]);
var inst_15857 = cljs.core.deref(cs);
var inst_15858__$1 = cljs.core.keys(inst_15857);
var inst_15859 = cljs.core.count(inst_15858__$1);
var inst_15860 = cljs.core.reset_BANG_(dctr,inst_15859);
var inst_15865 = cljs.core.seq(inst_15858__$1);
var inst_15866 = inst_15865;
var inst_15867 = null;
var inst_15868 = (0);
var inst_15869 = (0);
var state_15940__$1 = (function (){var statearr_16022 = state_15940;
(statearr_16022[(27)] = inst_15858__$1);

(statearr_16022[(19)] = inst_15866);

(statearr_16022[(28)] = inst_15860);

(statearr_16022[(9)] = inst_15867);

(statearr_16022[(10)] = inst_15869);

(statearr_16022[(20)] = inst_15868);

return statearr_16022;
})();
var statearr_16023_18405 = state_15940__$1;
(statearr_16023_18405[(2)] = null);

(statearr_16023_18405[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (28))){
var inst_15866 = (state_15940[(19)]);
var inst_15886 = (state_15940[(23)]);
var inst_15886__$1 = cljs.core.seq(inst_15866);
var state_15940__$1 = (function (){var statearr_16028 = state_15940;
(statearr_16028[(23)] = inst_15886__$1);

return statearr_16028;
})();
if(inst_15886__$1){
var statearr_16029_18406 = state_15940__$1;
(statearr_16029_18406[(1)] = (33));

} else {
var statearr_16030_18409 = state_15940__$1;
(statearr_16030_18409[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (25))){
var inst_15869 = (state_15940[(10)]);
var inst_15868 = (state_15940[(20)]);
var inst_15871 = (inst_15869 < inst_15868);
var inst_15872 = inst_15871;
var state_15940__$1 = state_15940;
if(cljs.core.truth_(inst_15872)){
var statearr_16031_18412 = state_15940__$1;
(statearr_16031_18412[(1)] = (27));

} else {
var statearr_16033_18415 = state_15940__$1;
(statearr_16033_18415[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (34))){
var state_15940__$1 = state_15940;
var statearr_16035_18416 = state_15940__$1;
(statearr_16035_18416[(2)] = null);

(statearr_16035_18416[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (17))){
var state_15940__$1 = state_15940;
var statearr_16041_18418 = state_15940__$1;
(statearr_16041_18418[(2)] = null);

(statearr_16041_18418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (3))){
var inst_15933 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15940__$1,inst_15933);
} else {
if((state_val_15941 === (12))){
var inst_15853 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_16043_18419 = state_15940__$1;
(statearr_16043_18419[(2)] = inst_15853);

(statearr_16043_18419[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (2))){
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15940__$1,(4),ch);
} else {
if((state_val_15941 === (23))){
var state_15940__$1 = state_15940;
var statearr_16046_18427 = state_15940__$1;
(statearr_16046_18427[(2)] = null);

(statearr_16046_18427[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (35))){
var inst_15916 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_16047_18428 = state_15940__$1;
(statearr_16047_18428[(2)] = inst_15916);

(statearr_16047_18428[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (19))){
var inst_15823 = (state_15940[(7)]);
var inst_15827 = cljs.core.chunk_first(inst_15823);
var inst_15828 = cljs.core.chunk_rest(inst_15823);
var inst_15829 = cljs.core.count(inst_15827);
var inst_15799 = inst_15828;
var inst_15800 = inst_15827;
var inst_15801 = inst_15829;
var inst_15802 = (0);
var state_15940__$1 = (function (){var statearr_16049 = state_15940;
(statearr_16049[(13)] = inst_15799);

(statearr_16049[(14)] = inst_15800);

(statearr_16049[(16)] = inst_15802);

(statearr_16049[(17)] = inst_15801);

return statearr_16049;
})();
var statearr_16052_18435 = state_15940__$1;
(statearr_16052_18435[(2)] = null);

(statearr_16052_18435[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (11))){
var inst_15799 = (state_15940[(13)]);
var inst_15823 = (state_15940[(7)]);
var inst_15823__$1 = cljs.core.seq(inst_15799);
var state_15940__$1 = (function (){var statearr_16053 = state_15940;
(statearr_16053[(7)] = inst_15823__$1);

return statearr_16053;
})();
if(inst_15823__$1){
var statearr_16054_18438 = state_15940__$1;
(statearr_16054_18438[(1)] = (16));

} else {
var statearr_16055_18439 = state_15940__$1;
(statearr_16055_18439[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (9))){
var inst_15855 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_16059_18443 = state_15940__$1;
(statearr_16059_18443[(2)] = inst_15855);

(statearr_16059_18443[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (5))){
var inst_15797 = cljs.core.deref(cs);
var inst_15798 = cljs.core.seq(inst_15797);
var inst_15799 = inst_15798;
var inst_15800 = null;
var inst_15801 = (0);
var inst_15802 = (0);
var state_15940__$1 = (function (){var statearr_16060 = state_15940;
(statearr_16060[(13)] = inst_15799);

(statearr_16060[(14)] = inst_15800);

(statearr_16060[(16)] = inst_15802);

(statearr_16060[(17)] = inst_15801);

return statearr_16060;
})();
var statearr_16061_18444 = state_15940__$1;
(statearr_16061_18444[(2)] = null);

(statearr_16061_18444[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (14))){
var state_15940__$1 = state_15940;
var statearr_16062_18445 = state_15940__$1;
(statearr_16062_18445[(2)] = null);

(statearr_16062_18445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (45))){
var inst_15925 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_16063_18446 = state_15940__$1;
(statearr_16063_18446[(2)] = inst_15925);

(statearr_16063_18446[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (26))){
var inst_15858 = (state_15940[(27)]);
var inst_15920 = (state_15940[(2)]);
var inst_15921 = cljs.core.seq(inst_15858);
var state_15940__$1 = (function (){var statearr_16069 = state_15940;
(statearr_16069[(29)] = inst_15920);

return statearr_16069;
})();
if(inst_15921){
var statearr_16077_18447 = state_15940__$1;
(statearr_16077_18447[(1)] = (42));

} else {
var statearr_16078_18448 = state_15940__$1;
(statearr_16078_18448[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (16))){
var inst_15823 = (state_15940[(7)]);
var inst_15825 = cljs.core.chunked_seq_QMARK_(inst_15823);
var state_15940__$1 = state_15940;
if(inst_15825){
var statearr_16079_18449 = state_15940__$1;
(statearr_16079_18449[(1)] = (19));

} else {
var statearr_16080_18451 = state_15940__$1;
(statearr_16080_18451[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (38))){
var inst_15913 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_16081_18452 = state_15940__$1;
(statearr_16081_18452[(2)] = inst_15913);

(statearr_16081_18452[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (30))){
var state_15940__$1 = state_15940;
var statearr_16082_18459 = state_15940__$1;
(statearr_16082_18459[(2)] = null);

(statearr_16082_18459[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (10))){
var inst_15800 = (state_15940[(14)]);
var inst_15802 = (state_15940[(16)]);
var inst_15811 = cljs.core._nth(inst_15800,inst_15802);
var inst_15812 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15811,(0),null);
var inst_15814 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15811,(1),null);
var state_15940__$1 = (function (){var statearr_16083 = state_15940;
(statearr_16083[(24)] = inst_15812);

return statearr_16083;
})();
if(cljs.core.truth_(inst_15814)){
var statearr_16086_18460 = state_15940__$1;
(statearr_16086_18460[(1)] = (13));

} else {
var statearr_16089_18461 = state_15940__$1;
(statearr_16089_18461[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (18))){
var inst_15851 = (state_15940[(2)]);
var state_15940__$1 = state_15940;
var statearr_16090_18462 = state_15940__$1;
(statearr_16090_18462[(2)] = inst_15851);

(statearr_16090_18462[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (42))){
var state_15940__$1 = state_15940;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15940__$1,(45),dchan);
} else {
if((state_val_15941 === (37))){
var inst_15886 = (state_15940[(23)]);
var inst_15790 = (state_15940[(11)]);
var inst_15899 = (state_15940[(22)]);
var inst_15899__$1 = cljs.core.first(inst_15886);
var inst_15901 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15899__$1,inst_15790,done);
var state_15940__$1 = (function (){var statearr_16095 = state_15940;
(statearr_16095[(22)] = inst_15899__$1);

return statearr_16095;
})();
if(cljs.core.truth_(inst_15901)){
var statearr_16096_18464 = state_15940__$1;
(statearr_16096_18464[(1)] = (39));

} else {
var statearr_16099_18465 = state_15940__$1;
(statearr_16099_18465[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15941 === (8))){
var inst_15802 = (state_15940[(16)]);
var inst_15801 = (state_15940[(17)]);
var inst_15805 = (inst_15802 < inst_15801);
var inst_15806 = inst_15805;
var state_15940__$1 = state_15940;
if(cljs.core.truth_(inst_15806)){
var statearr_16100_18466 = state_15940__$1;
(statearr_16100_18466[(1)] = (10));

} else {
var statearr_16101_18467 = state_15940__$1;
(statearr_16101_18467[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__14349__auto__ = null;
var cljs$core$async$mult_$_state_machine__14349__auto____0 = (function (){
var statearr_16108 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16108[(0)] = cljs$core$async$mult_$_state_machine__14349__auto__);

(statearr_16108[(1)] = (1));

return statearr_16108;
});
var cljs$core$async$mult_$_state_machine__14349__auto____1 = (function (state_15940){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_15940);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e16111){var ex__14352__auto__ = e16111;
var statearr_16113_18472 = state_15940;
(statearr_16113_18472[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_15940[(4)]))){
var statearr_16115_18477 = state_15940;
(statearr_16115_18477[(1)] = cljs.core.first((state_15940[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18482 = state_15940;
state_15940 = G__18482;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14349__auto__ = function(state_15940){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14349__auto____1.call(this,state_15940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14349__auto____0;
cljs$core$async$mult_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14349__auto____1;
return cljs$core$async$mult_$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_16122 = f__14639__auto__();
(statearr_16122[(6)] = c__14638__auto___18294);

return statearr_16122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__16128 = arguments.length;
switch (G__16128) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18494 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18494(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18496 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18496(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18499 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18499(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18500 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18500(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18501 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18501(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___18510 = arguments.length;
var i__5770__auto___18511 = (0);
while(true){
if((i__5770__auto___18511 < len__5769__auto___18510)){
args__5775__auto__.push((arguments[i__5770__auto___18511]));

var G__18512 = (i__5770__auto___18511 + (1));
i__5770__auto___18511 = G__18512;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16198){
var map__16199 = p__16198;
var map__16199__$1 = cljs.core.__destructure_map(map__16199);
var opts = map__16199__$1;
var statearr_16200_18516 = state;
(statearr_16200_18516[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16202_18517 = state;
(statearr_16202_18517[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16207_18518 = state;
(statearr_16207_18518[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16182){
var G__16183 = cljs.core.first(seq16182);
var seq16182__$1 = cljs.core.next(seq16182);
var G__16184 = cljs.core.first(seq16182__$1);
var seq16182__$2 = cljs.core.next(seq16182__$1);
var G__16185 = cljs.core.first(seq16182__$2);
var seq16182__$3 = cljs.core.next(seq16182__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16183,G__16184,G__16185,seq16182__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16237 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16237 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16239){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16239 = meta16239;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16240,meta16239__$1){
var self__ = this;
var _16240__$1 = this;
return (new cljs.core.async.t_cljs$core$async16237(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16239__$1));
}));

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16240){
var self__ = this;
var _16240__$1 = this;
return self__.meta16239;
}));

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16237.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16237.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16239","meta16239",-1889031966,null)], null);
}));

(cljs.core.async.t_cljs$core$async16237.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16237.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16237");

(cljs.core.async.t_cljs$core$async16237.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16237");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16237.
 */
cljs.core.async.__GT_t_cljs$core$async16237 = (function cljs$core$async$mix_$___GT_t_cljs$core$async16237(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16239){
return (new cljs.core.async.t_cljs$core$async16237(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16239));
});

}

return (new cljs.core.async.t_cljs$core$async16237(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14638__auto___18523 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_16371){
var state_val_16372 = (state_16371[(1)]);
if((state_val_16372 === (7))){
var inst_16328 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
if(cljs.core.truth_(inst_16328)){
var statearr_16380_18524 = state_16371__$1;
(statearr_16380_18524[(1)] = (8));

} else {
var statearr_16381_18526 = state_16371__$1;
(statearr_16381_18526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (20))){
var inst_16321 = (state_16371[(7)]);
var state_16371__$1 = state_16371;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16371__$1,(23),out,inst_16321);
} else {
if((state_val_16372 === (1))){
var inst_16274 = calc_state();
var inst_16280 = cljs.core.__destructure_map(inst_16274);
var inst_16289 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16280,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16290 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16280,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16292 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16280,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16293 = inst_16274;
var state_16371__$1 = (function (){var statearr_16382 = state_16371;
(statearr_16382[(8)] = inst_16290);

(statearr_16382[(9)] = inst_16289);

(statearr_16382[(10)] = inst_16292);

(statearr_16382[(11)] = inst_16293);

return statearr_16382;
})();
var statearr_16384_18535 = state_16371__$1;
(statearr_16384_18535[(2)] = null);

(statearr_16384_18535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (24))){
var inst_16304 = (state_16371[(12)]);
var inst_16293 = inst_16304;
var state_16371__$1 = (function (){var statearr_16385 = state_16371;
(statearr_16385[(11)] = inst_16293);

return statearr_16385;
})();
var statearr_16386_18536 = state_16371__$1;
(statearr_16386_18536[(2)] = null);

(statearr_16386_18536[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (4))){
var inst_16321 = (state_16371[(7)]);
var inst_16323 = (state_16371[(13)]);
var inst_16320 = (state_16371[(2)]);
var inst_16321__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16320,(0),null);
var inst_16322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16320,(1),null);
var inst_16323__$1 = (inst_16321__$1 == null);
var state_16371__$1 = (function (){var statearr_16387 = state_16371;
(statearr_16387[(7)] = inst_16321__$1);

(statearr_16387[(14)] = inst_16322);

(statearr_16387[(13)] = inst_16323__$1);

return statearr_16387;
})();
if(cljs.core.truth_(inst_16323__$1)){
var statearr_16388_18537 = state_16371__$1;
(statearr_16388_18537[(1)] = (5));

} else {
var statearr_16389_18538 = state_16371__$1;
(statearr_16389_18538[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (15))){
var inst_16342 = (state_16371[(15)]);
var inst_16305 = (state_16371[(16)]);
var inst_16342__$1 = cljs.core.empty_QMARK_(inst_16305);
var state_16371__$1 = (function (){var statearr_16390 = state_16371;
(statearr_16390[(15)] = inst_16342__$1);

return statearr_16390;
})();
if(inst_16342__$1){
var statearr_16391_18539 = state_16371__$1;
(statearr_16391_18539[(1)] = (17));

} else {
var statearr_16392_18540 = state_16371__$1;
(statearr_16392_18540[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (21))){
var inst_16304 = (state_16371[(12)]);
var inst_16293 = inst_16304;
var state_16371__$1 = (function (){var statearr_16398 = state_16371;
(statearr_16398[(11)] = inst_16293);

return statearr_16398;
})();
var statearr_16399_18541 = state_16371__$1;
(statearr_16399_18541[(2)] = null);

(statearr_16399_18541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (13))){
var inst_16335 = (state_16371[(2)]);
var inst_16336 = calc_state();
var inst_16293 = inst_16336;
var state_16371__$1 = (function (){var statearr_16404 = state_16371;
(statearr_16404[(17)] = inst_16335);

(statearr_16404[(11)] = inst_16293);

return statearr_16404;
})();
var statearr_16409_18542 = state_16371__$1;
(statearr_16409_18542[(2)] = null);

(statearr_16409_18542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (22))){
var inst_16362 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
var statearr_16412_18543 = state_16371__$1;
(statearr_16412_18543[(2)] = inst_16362);

(statearr_16412_18543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (6))){
var inst_16322 = (state_16371[(14)]);
var inst_16326 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16322,change);
var state_16371__$1 = state_16371;
var statearr_16413_18545 = state_16371__$1;
(statearr_16413_18545[(2)] = inst_16326);

(statearr_16413_18545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (25))){
var state_16371__$1 = state_16371;
var statearr_16415_18547 = state_16371__$1;
(statearr_16415_18547[(2)] = null);

(statearr_16415_18547[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (17))){
var inst_16322 = (state_16371[(14)]);
var inst_16306 = (state_16371[(18)]);
var inst_16344 = (inst_16306.cljs$core$IFn$_invoke$arity$1 ? inst_16306.cljs$core$IFn$_invoke$arity$1(inst_16322) : inst_16306.call(null,inst_16322));
var inst_16345 = cljs.core.not(inst_16344);
var state_16371__$1 = state_16371;
var statearr_16416_18548 = state_16371__$1;
(statearr_16416_18548[(2)] = inst_16345);

(statearr_16416_18548[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (3))){
var inst_16366 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16371__$1,inst_16366);
} else {
if((state_val_16372 === (12))){
var state_16371__$1 = state_16371;
var statearr_16429_18550 = state_16371__$1;
(statearr_16429_18550[(2)] = null);

(statearr_16429_18550[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (2))){
var inst_16304 = (state_16371[(12)]);
var inst_16293 = (state_16371[(11)]);
var inst_16304__$1 = cljs.core.__destructure_map(inst_16293);
var inst_16305 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16304__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16306 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16304__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16304__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16371__$1 = (function (){var statearr_16446 = state_16371;
(statearr_16446[(16)] = inst_16305);

(statearr_16446[(18)] = inst_16306);

(statearr_16446[(12)] = inst_16304__$1);

return statearr_16446;
})();
return cljs.core.async.ioc_alts_BANG_(state_16371__$1,(4),inst_16307);
} else {
if((state_val_16372 === (23))){
var inst_16353 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
if(cljs.core.truth_(inst_16353)){
var statearr_16450_18552 = state_16371__$1;
(statearr_16450_18552[(1)] = (24));

} else {
var statearr_16453_18553 = state_16371__$1;
(statearr_16453_18553[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (19))){
var inst_16348 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
var statearr_16455_18555 = state_16371__$1;
(statearr_16455_18555[(2)] = inst_16348);

(statearr_16455_18555[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (11))){
var inst_16322 = (state_16371[(14)]);
var inst_16332 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16322);
var state_16371__$1 = state_16371;
var statearr_16456_18557 = state_16371__$1;
(statearr_16456_18557[(2)] = inst_16332);

(statearr_16456_18557[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (9))){
var inst_16322 = (state_16371[(14)]);
var inst_16305 = (state_16371[(16)]);
var inst_16339 = (state_16371[(19)]);
var inst_16339__$1 = (inst_16305.cljs$core$IFn$_invoke$arity$1 ? inst_16305.cljs$core$IFn$_invoke$arity$1(inst_16322) : inst_16305.call(null,inst_16322));
var state_16371__$1 = (function (){var statearr_16462 = state_16371;
(statearr_16462[(19)] = inst_16339__$1);

return statearr_16462;
})();
if(cljs.core.truth_(inst_16339__$1)){
var statearr_16465_18561 = state_16371__$1;
(statearr_16465_18561[(1)] = (14));

} else {
var statearr_16466_18562 = state_16371__$1;
(statearr_16466_18562[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (5))){
var inst_16323 = (state_16371[(13)]);
var state_16371__$1 = state_16371;
var statearr_16467_18563 = state_16371__$1;
(statearr_16467_18563[(2)] = inst_16323);

(statearr_16467_18563[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (14))){
var inst_16339 = (state_16371[(19)]);
var state_16371__$1 = state_16371;
var statearr_16472_18564 = state_16371__$1;
(statearr_16472_18564[(2)] = inst_16339);

(statearr_16472_18564[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (26))){
var inst_16358 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
var statearr_16474_18565 = state_16371__$1;
(statearr_16474_18565[(2)] = inst_16358);

(statearr_16474_18565[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (16))){
var inst_16350 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
if(cljs.core.truth_(inst_16350)){
var statearr_16475_18566 = state_16371__$1;
(statearr_16475_18566[(1)] = (20));

} else {
var statearr_16476_18567 = state_16371__$1;
(statearr_16476_18567[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (10))){
var inst_16364 = (state_16371[(2)]);
var state_16371__$1 = state_16371;
var statearr_16480_18568 = state_16371__$1;
(statearr_16480_18568[(2)] = inst_16364);

(statearr_16480_18568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (18))){
var inst_16342 = (state_16371[(15)]);
var state_16371__$1 = state_16371;
var statearr_16481_18569 = state_16371__$1;
(statearr_16481_18569[(2)] = inst_16342);

(statearr_16481_18569[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16372 === (8))){
var inst_16321 = (state_16371[(7)]);
var inst_16330 = (inst_16321 == null);
var state_16371__$1 = state_16371;
if(cljs.core.truth_(inst_16330)){
var statearr_16482_18570 = state_16371__$1;
(statearr_16482_18570[(1)] = (11));

} else {
var statearr_16483_18571 = state_16371__$1;
(statearr_16483_18571[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__14349__auto__ = null;
var cljs$core$async$mix_$_state_machine__14349__auto____0 = (function (){
var statearr_16488 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16488[(0)] = cljs$core$async$mix_$_state_machine__14349__auto__);

(statearr_16488[(1)] = (1));

return statearr_16488;
});
var cljs$core$async$mix_$_state_machine__14349__auto____1 = (function (state_16371){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_16371);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e16490){var ex__14352__auto__ = e16490;
var statearr_16491_18574 = state_16371;
(statearr_16491_18574[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_16371[(4)]))){
var statearr_16492_18575 = state_16371;
(statearr_16492_18575[(1)] = cljs.core.first((state_16371[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18576 = state_16371;
state_16371 = G__18576;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14349__auto__ = function(state_16371){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14349__auto____1.call(this,state_16371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14349__auto____0;
cljs$core$async$mix_$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14349__auto____1;
return cljs$core$async$mix_$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_16514 = f__14639__auto__();
(statearr_16514[(6)] = c__14638__auto___18523);

return statearr_16514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18577 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18577(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18578 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18578(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18579 = (function() {
var G__18580 = null;
var G__18580__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18580__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18580 = function(p,v){
switch(arguments.length){
case 1:
return G__18580__1.call(this,p);
case 2:
return G__18580__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18580.cljs$core$IFn$_invoke$arity$1 = G__18580__1;
G__18580.cljs$core$IFn$_invoke$arity$2 = G__18580__2;
return G__18580;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16531 = arguments.length;
switch (G__16531) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18579(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18579(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__16536 = arguments.length;
switch (G__16536) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16534_SHARP_){
if(cljs.core.truth_((p1__16534_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16534_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16534_SHARP_.call(null,topic)))){
return p1__16534_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16534_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async16540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16540 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16541){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16541 = meta16541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16542,meta16541__$1){
var self__ = this;
var _16542__$1 = this;
return (new cljs.core.async.t_cljs$core$async16540(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16541__$1));
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16542){
var self__ = this;
var _16542__$1 = this;
return self__.meta16541;
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16540.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16541","meta16541",-1806785122,null)], null);
}));

(cljs.core.async.t_cljs$core$async16540.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16540");

(cljs.core.async.t_cljs$core$async16540.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async16540");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16540.
 */
cljs.core.async.__GT_t_cljs$core$async16540 = (function cljs$core$async$__GT_t_cljs$core$async16540(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16541){
return (new cljs.core.async.t_cljs$core$async16540(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16541));
});

}

return (new cljs.core.async.t_cljs$core$async16540(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__14638__auto___18588 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_16630){
var state_val_16631 = (state_16630[(1)]);
if((state_val_16631 === (7))){
var inst_16626 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16638_18589 = state_16630__$1;
(statearr_16638_18589[(2)] = inst_16626);

(statearr_16638_18589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (20))){
var state_16630__$1 = state_16630;
var statearr_16640_18591 = state_16630__$1;
(statearr_16640_18591[(2)] = null);

(statearr_16640_18591[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (1))){
var state_16630__$1 = state_16630;
var statearr_16641_18592 = state_16630__$1;
(statearr_16641_18592[(2)] = null);

(statearr_16641_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (24))){
var inst_16609 = (state_16630[(7)]);
var inst_16618 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16609);
var state_16630__$1 = state_16630;
var statearr_16642_18593 = state_16630__$1;
(statearr_16642_18593[(2)] = inst_16618);

(statearr_16642_18593[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (4))){
var inst_16560 = (state_16630[(8)]);
var inst_16560__$1 = (state_16630[(2)]);
var inst_16561 = (inst_16560__$1 == null);
var state_16630__$1 = (function (){var statearr_16643 = state_16630;
(statearr_16643[(8)] = inst_16560__$1);

return statearr_16643;
})();
if(cljs.core.truth_(inst_16561)){
var statearr_16644_18598 = state_16630__$1;
(statearr_16644_18598[(1)] = (5));

} else {
var statearr_16645_18602 = state_16630__$1;
(statearr_16645_18602[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (15))){
var inst_16603 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16646_18603 = state_16630__$1;
(statearr_16646_18603[(2)] = inst_16603);

(statearr_16646_18603[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (21))){
var inst_16623 = (state_16630[(2)]);
var state_16630__$1 = (function (){var statearr_16647 = state_16630;
(statearr_16647[(9)] = inst_16623);

return statearr_16647;
})();
var statearr_16648_18604 = state_16630__$1;
(statearr_16648_18604[(2)] = null);

(statearr_16648_18604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (13))){
var inst_16584 = (state_16630[(10)]);
var inst_16586 = cljs.core.chunked_seq_QMARK_(inst_16584);
var state_16630__$1 = state_16630;
if(inst_16586){
var statearr_16650_18605 = state_16630__$1;
(statearr_16650_18605[(1)] = (16));

} else {
var statearr_16651_18606 = state_16630__$1;
(statearr_16651_18606[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (22))){
var inst_16615 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16615)){
var statearr_16652_18607 = state_16630__$1;
(statearr_16652_18607[(1)] = (23));

} else {
var statearr_16653_18611 = state_16630__$1;
(statearr_16653_18611[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (6))){
var inst_16560 = (state_16630[(8)]);
var inst_16609 = (state_16630[(7)]);
var inst_16611 = (state_16630[(11)]);
var inst_16609__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16560) : topic_fn.call(null,inst_16560));
var inst_16610 = cljs.core.deref(mults);
var inst_16611__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16610,inst_16609__$1);
var state_16630__$1 = (function (){var statearr_16654 = state_16630;
(statearr_16654[(7)] = inst_16609__$1);

(statearr_16654[(11)] = inst_16611__$1);

return statearr_16654;
})();
if(cljs.core.truth_(inst_16611__$1)){
var statearr_16655_18612 = state_16630__$1;
(statearr_16655_18612[(1)] = (19));

} else {
var statearr_16656_18613 = state_16630__$1;
(statearr_16656_18613[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (25))){
var inst_16620 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16657_18617 = state_16630__$1;
(statearr_16657_18617[(2)] = inst_16620);

(statearr_16657_18617[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (17))){
var inst_16584 = (state_16630[(10)]);
var inst_16594 = cljs.core.first(inst_16584);
var inst_16595 = cljs.core.async.muxch_STAR_(inst_16594);
var inst_16596 = cljs.core.async.close_BANG_(inst_16595);
var inst_16597 = cljs.core.next(inst_16584);
var inst_16570 = inst_16597;
var inst_16571 = null;
var inst_16572 = (0);
var inst_16573 = (0);
var state_16630__$1 = (function (){var statearr_16662 = state_16630;
(statearr_16662[(12)] = inst_16570);

(statearr_16662[(13)] = inst_16573);

(statearr_16662[(14)] = inst_16571);

(statearr_16662[(15)] = inst_16596);

(statearr_16662[(16)] = inst_16572);

return statearr_16662;
})();
var statearr_16663_18621 = state_16630__$1;
(statearr_16663_18621[(2)] = null);

(statearr_16663_18621[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (3))){
var inst_16628 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16630__$1,inst_16628);
} else {
if((state_val_16631 === (12))){
var inst_16605 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16664_18625 = state_16630__$1;
(statearr_16664_18625[(2)] = inst_16605);

(statearr_16664_18625[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (2))){
var state_16630__$1 = state_16630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16630__$1,(4),ch);
} else {
if((state_val_16631 === (23))){
var state_16630__$1 = state_16630;
var statearr_16666_18626 = state_16630__$1;
(statearr_16666_18626[(2)] = null);

(statearr_16666_18626[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (19))){
var inst_16560 = (state_16630[(8)]);
var inst_16611 = (state_16630[(11)]);
var inst_16613 = cljs.core.async.muxch_STAR_(inst_16611);
var state_16630__$1 = state_16630;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16630__$1,(22),inst_16613,inst_16560);
} else {
if((state_val_16631 === (11))){
var inst_16570 = (state_16630[(12)]);
var inst_16584 = (state_16630[(10)]);
var inst_16584__$1 = cljs.core.seq(inst_16570);
var state_16630__$1 = (function (){var statearr_16668 = state_16630;
(statearr_16668[(10)] = inst_16584__$1);

return statearr_16668;
})();
if(inst_16584__$1){
var statearr_16671_18631 = state_16630__$1;
(statearr_16671_18631[(1)] = (13));

} else {
var statearr_16673_18632 = state_16630__$1;
(statearr_16673_18632[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (9))){
var inst_16607 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16674_18633 = state_16630__$1;
(statearr_16674_18633[(2)] = inst_16607);

(statearr_16674_18633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (5))){
var inst_16567 = cljs.core.deref(mults);
var inst_16568 = cljs.core.vals(inst_16567);
var inst_16569 = cljs.core.seq(inst_16568);
var inst_16570 = inst_16569;
var inst_16571 = null;
var inst_16572 = (0);
var inst_16573 = (0);
var state_16630__$1 = (function (){var statearr_16678 = state_16630;
(statearr_16678[(12)] = inst_16570);

(statearr_16678[(13)] = inst_16573);

(statearr_16678[(14)] = inst_16571);

(statearr_16678[(16)] = inst_16572);

return statearr_16678;
})();
var statearr_16679_18634 = state_16630__$1;
(statearr_16679_18634[(2)] = null);

(statearr_16679_18634[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (14))){
var state_16630__$1 = state_16630;
var statearr_16683_18635 = state_16630__$1;
(statearr_16683_18635[(2)] = null);

(statearr_16683_18635[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (16))){
var inst_16584 = (state_16630[(10)]);
var inst_16589 = cljs.core.chunk_first(inst_16584);
var inst_16590 = cljs.core.chunk_rest(inst_16584);
var inst_16591 = cljs.core.count(inst_16589);
var inst_16570 = inst_16590;
var inst_16571 = inst_16589;
var inst_16572 = inst_16591;
var inst_16573 = (0);
var state_16630__$1 = (function (){var statearr_16684 = state_16630;
(statearr_16684[(12)] = inst_16570);

(statearr_16684[(13)] = inst_16573);

(statearr_16684[(14)] = inst_16571);

(statearr_16684[(16)] = inst_16572);

return statearr_16684;
})();
var statearr_16686_18636 = state_16630__$1;
(statearr_16686_18636[(2)] = null);

(statearr_16686_18636[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (10))){
var inst_16570 = (state_16630[(12)]);
var inst_16573 = (state_16630[(13)]);
var inst_16571 = (state_16630[(14)]);
var inst_16572 = (state_16630[(16)]);
var inst_16578 = cljs.core._nth(inst_16571,inst_16573);
var inst_16579 = cljs.core.async.muxch_STAR_(inst_16578);
var inst_16580 = cljs.core.async.close_BANG_(inst_16579);
var inst_16581 = (inst_16573 + (1));
var tmp16680 = inst_16570;
var tmp16681 = inst_16571;
var tmp16682 = inst_16572;
var inst_16570__$1 = tmp16680;
var inst_16571__$1 = tmp16681;
var inst_16572__$1 = tmp16682;
var inst_16573__$1 = inst_16581;
var state_16630__$1 = (function (){var statearr_16689 = state_16630;
(statearr_16689[(12)] = inst_16570__$1);

(statearr_16689[(17)] = inst_16580);

(statearr_16689[(13)] = inst_16573__$1);

(statearr_16689[(14)] = inst_16571__$1);

(statearr_16689[(16)] = inst_16572__$1);

return statearr_16689;
})();
var statearr_16690_18641 = state_16630__$1;
(statearr_16690_18641[(2)] = null);

(statearr_16690_18641[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (18))){
var inst_16600 = (state_16630[(2)]);
var state_16630__$1 = state_16630;
var statearr_16691_18643 = state_16630__$1;
(statearr_16691_18643[(2)] = inst_16600);

(statearr_16691_18643[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16631 === (8))){
var inst_16573 = (state_16630[(13)]);
var inst_16572 = (state_16630[(16)]);
var inst_16575 = (inst_16573 < inst_16572);
var inst_16576 = inst_16575;
var state_16630__$1 = state_16630;
if(cljs.core.truth_(inst_16576)){
var statearr_16694_18645 = state_16630__$1;
(statearr_16694_18645[(1)] = (10));

} else {
var statearr_16695_18646 = state_16630__$1;
(statearr_16695_18646[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_16697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16697[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_16697[(1)] = (1));

return statearr_16697;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_16630){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_16630);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e16702){var ex__14352__auto__ = e16702;
var statearr_16704_18647 = state_16630;
(statearr_16704_18647[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_16630[(4)]))){
var statearr_16709_18648 = state_16630;
(statearr_16709_18648[(1)] = cljs.core.first((state_16630[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18649 = state_16630;
state_16630 = G__18649;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_16630){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_16630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_16713 = f__14639__auto__();
(statearr_16713[(6)] = c__14638__auto___18588);

return statearr_16713;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16718 = arguments.length;
switch (G__16718) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16727 = arguments.length;
switch (G__16727) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__16733 = arguments.length;
switch (G__16733) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14638__auto___18653 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_16787){
var state_val_16788 = (state_16787[(1)]);
if((state_val_16788 === (7))){
var state_16787__$1 = state_16787;
var statearr_16792_18658 = state_16787__$1;
(statearr_16792_18658[(2)] = null);

(statearr_16792_18658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (1))){
var state_16787__$1 = state_16787;
var statearr_16793_18659 = state_16787__$1;
(statearr_16793_18659[(2)] = null);

(statearr_16793_18659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (4))){
var inst_16741 = (state_16787[(7)]);
var inst_16739 = (state_16787[(8)]);
var inst_16743 = (inst_16741 < inst_16739);
var state_16787__$1 = state_16787;
if(cljs.core.truth_(inst_16743)){
var statearr_16794_18660 = state_16787__$1;
(statearr_16794_18660[(1)] = (6));

} else {
var statearr_16795_18661 = state_16787__$1;
(statearr_16795_18661[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (15))){
var inst_16772 = (state_16787[(9)]);
var inst_16777 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16772);
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16787__$1,(17),out,inst_16777);
} else {
if((state_val_16788 === (13))){
var inst_16772 = (state_16787[(9)]);
var inst_16772__$1 = (state_16787[(2)]);
var inst_16773 = cljs.core.some(cljs.core.nil_QMARK_,inst_16772__$1);
var state_16787__$1 = (function (){var statearr_16798 = state_16787;
(statearr_16798[(9)] = inst_16772__$1);

return statearr_16798;
})();
if(cljs.core.truth_(inst_16773)){
var statearr_16799_18662 = state_16787__$1;
(statearr_16799_18662[(1)] = (14));

} else {
var statearr_16800_18663 = state_16787__$1;
(statearr_16800_18663[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (6))){
var state_16787__$1 = state_16787;
var statearr_16802_18664 = state_16787__$1;
(statearr_16802_18664[(2)] = null);

(statearr_16802_18664[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (17))){
var inst_16779 = (state_16787[(2)]);
var state_16787__$1 = (function (){var statearr_16808 = state_16787;
(statearr_16808[(10)] = inst_16779);

return statearr_16808;
})();
var statearr_16809_18665 = state_16787__$1;
(statearr_16809_18665[(2)] = null);

(statearr_16809_18665[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (3))){
var inst_16784 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16787__$1,inst_16784);
} else {
if((state_val_16788 === (12))){
var _ = (function (){var statearr_16810 = state_16787;
(statearr_16810[(4)] = cljs.core.rest((state_16787[(4)])));

return statearr_16810;
})();
var state_16787__$1 = state_16787;
var ex16807 = (state_16787__$1[(2)]);
var statearr_16818_18674 = state_16787__$1;
(statearr_16818_18674[(5)] = ex16807);


if((ex16807 instanceof Object)){
var statearr_16821_18681 = state_16787__$1;
(statearr_16821_18681[(1)] = (11));

(statearr_16821_18681[(5)] = null);

} else {
throw ex16807;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (2))){
var inst_16738 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16739 = cnt;
var inst_16741 = (0);
var state_16787__$1 = (function (){var statearr_16841 = state_16787;
(statearr_16841[(7)] = inst_16741);

(statearr_16841[(8)] = inst_16739);

(statearr_16841[(11)] = inst_16738);

return statearr_16841;
})();
var statearr_16842_18682 = state_16787__$1;
(statearr_16842_18682[(2)] = null);

(statearr_16842_18682[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (11))){
var inst_16751 = (state_16787[(2)]);
var inst_16752 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16787__$1 = (function (){var statearr_16853 = state_16787;
(statearr_16853[(12)] = inst_16751);

return statearr_16853;
})();
var statearr_16855_18689 = state_16787__$1;
(statearr_16855_18689[(2)] = inst_16752);

(statearr_16855_18689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (9))){
var inst_16741 = (state_16787[(7)]);
var _ = (function (){var statearr_16864 = state_16787;
(statearr_16864[(4)] = cljs.core.cons((12),(state_16787[(4)])));

return statearr_16864;
})();
var inst_16758 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16741) : chs__$1.call(null,inst_16741));
var inst_16759 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16741) : done.call(null,inst_16741));
var inst_16760 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16758,inst_16759);
var ___$1 = (function (){var statearr_16865 = state_16787;
(statearr_16865[(4)] = cljs.core.rest((state_16787[(4)])));

return statearr_16865;
})();
var state_16787__$1 = state_16787;
var statearr_16870_18690 = state_16787__$1;
(statearr_16870_18690[(2)] = inst_16760);

(statearr_16870_18690[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (5))){
var inst_16770 = (state_16787[(2)]);
var state_16787__$1 = (function (){var statearr_16873 = state_16787;
(statearr_16873[(13)] = inst_16770);

return statearr_16873;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16787__$1,(13),dchan);
} else {
if((state_val_16788 === (14))){
var inst_16775 = cljs.core.async.close_BANG_(out);
var state_16787__$1 = state_16787;
var statearr_16877_18691 = state_16787__$1;
(statearr_16877_18691[(2)] = inst_16775);

(statearr_16877_18691[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (16))){
var inst_16782 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16885_18692 = state_16787__$1;
(statearr_16885_18692[(2)] = inst_16782);

(statearr_16885_18692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (10))){
var inst_16741 = (state_16787[(7)]);
var inst_16763 = (state_16787[(2)]);
var inst_16764 = (inst_16741 + (1));
var inst_16741__$1 = inst_16764;
var state_16787__$1 = (function (){var statearr_16891 = state_16787;
(statearr_16891[(7)] = inst_16741__$1);

(statearr_16891[(14)] = inst_16763);

return statearr_16891;
})();
var statearr_16896_18711 = state_16787__$1;
(statearr_16896_18711[(2)] = null);

(statearr_16896_18711[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16788 === (8))){
var inst_16768 = (state_16787[(2)]);
var state_16787__$1 = state_16787;
var statearr_16897_18712 = state_16787__$1;
(statearr_16897_18712[(2)] = inst_16768);

(statearr_16897_18712[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_16899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16899[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_16899[(1)] = (1));

return statearr_16899;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_16787){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_16787);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e16900){var ex__14352__auto__ = e16900;
var statearr_16901_18720 = state_16787;
(statearr_16901_18720[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_16787[(4)]))){
var statearr_16902_18721 = state_16787;
(statearr_16902_18721[(1)] = cljs.core.first((state_16787[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18722 = state_16787;
state_16787 = G__18722;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_16787){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_16787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_16904 = f__14639__auto__();
(statearr_16904[(6)] = c__14638__auto___18653);

return statearr_16904;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16911 = arguments.length;
switch (G__16911) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14638__auto___18726 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_16944){
var state_val_16945 = (state_16944[(1)]);
if((state_val_16945 === (7))){
var inst_16924 = (state_16944[(7)]);
var inst_16923 = (state_16944[(8)]);
var inst_16923__$1 = (state_16944[(2)]);
var inst_16924__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16923__$1,(0),null);
var inst_16925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16923__$1,(1),null);
var inst_16926 = (inst_16924__$1 == null);
var state_16944__$1 = (function (){var statearr_16950 = state_16944;
(statearr_16950[(7)] = inst_16924__$1);

(statearr_16950[(9)] = inst_16925);

(statearr_16950[(8)] = inst_16923__$1);

return statearr_16950;
})();
if(cljs.core.truth_(inst_16926)){
var statearr_16952_18728 = state_16944__$1;
(statearr_16952_18728[(1)] = (8));

} else {
var statearr_16953_18729 = state_16944__$1;
(statearr_16953_18729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16945 === (1))){
var inst_16913 = cljs.core.vec(chs);
var inst_16914 = inst_16913;
var state_16944__$1 = (function (){var statearr_16957 = state_16944;
(statearr_16957[(10)] = inst_16914);

return statearr_16957;
})();
var statearr_16960_18730 = state_16944__$1;
(statearr_16960_18730[(2)] = null);

(statearr_16960_18730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16945 === (4))){
var inst_16914 = (state_16944[(10)]);
var state_16944__$1 = state_16944;
return cljs.core.async.ioc_alts_BANG_(state_16944__$1,(7),inst_16914);
} else {
if((state_val_16945 === (6))){
var inst_16940 = (state_16944[(2)]);
var state_16944__$1 = state_16944;
var statearr_16962_18735 = state_16944__$1;
(statearr_16962_18735[(2)] = inst_16940);

(statearr_16962_18735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16945 === (3))){
var inst_16942 = (state_16944[(2)]);
var state_16944__$1 = state_16944;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16944__$1,inst_16942);
} else {
if((state_val_16945 === (2))){
var inst_16914 = (state_16944[(10)]);
var inst_16916 = cljs.core.count(inst_16914);
var inst_16917 = (inst_16916 > (0));
var state_16944__$1 = state_16944;
if(cljs.core.truth_(inst_16917)){
var statearr_16964_18736 = state_16944__$1;
(statearr_16964_18736[(1)] = (4));

} else {
var statearr_16965_18737 = state_16944__$1;
(statearr_16965_18737[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16945 === (11))){
var inst_16914 = (state_16944[(10)]);
var inst_16933 = (state_16944[(2)]);
var tmp16963 = inst_16914;
var inst_16914__$1 = tmp16963;
var state_16944__$1 = (function (){var statearr_16967 = state_16944;
(statearr_16967[(11)] = inst_16933);

(statearr_16967[(10)] = inst_16914__$1);

return statearr_16967;
})();
var statearr_16968_18738 = state_16944__$1;
(statearr_16968_18738[(2)] = null);

(statearr_16968_18738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16945 === (9))){
var inst_16924 = (state_16944[(7)]);
var state_16944__$1 = state_16944;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16944__$1,(11),out,inst_16924);
} else {
if((state_val_16945 === (5))){
var inst_16938 = cljs.core.async.close_BANG_(out);
var state_16944__$1 = state_16944;
var statearr_16974_18739 = state_16944__$1;
(statearr_16974_18739[(2)] = inst_16938);

(statearr_16974_18739[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16945 === (10))){
var inst_16936 = (state_16944[(2)]);
var state_16944__$1 = state_16944;
var statearr_16975_18741 = state_16944__$1;
(statearr_16975_18741[(2)] = inst_16936);

(statearr_16975_18741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16945 === (8))){
var inst_16924 = (state_16944[(7)]);
var inst_16925 = (state_16944[(9)]);
var inst_16923 = (state_16944[(8)]);
var inst_16914 = (state_16944[(10)]);
var inst_16928 = (function (){var cs = inst_16914;
var vec__16919 = inst_16923;
var v = inst_16924;
var c = inst_16925;
return (function (p1__16908_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16908_SHARP_);
});
})();
var inst_16929 = cljs.core.filterv(inst_16928,inst_16914);
var inst_16914__$1 = inst_16929;
var state_16944__$1 = (function (){var statearr_16976 = state_16944;
(statearr_16976[(10)] = inst_16914__$1);

return statearr_16976;
})();
var statearr_16977_18742 = state_16944__$1;
(statearr_16977_18742[(2)] = null);

(statearr_16977_18742[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_16982 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16982[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_16982[(1)] = (1));

return statearr_16982;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_16944){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_16944);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e16983){var ex__14352__auto__ = e16983;
var statearr_16984_18743 = state_16944;
(statearr_16984_18743[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_16944[(4)]))){
var statearr_16985_18744 = state_16944;
(statearr_16985_18744[(1)] = cljs.core.first((state_16944[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18745 = state_16944;
state_16944 = G__18745;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_16944){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_16944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_16987 = f__14639__auto__();
(statearr_16987[(6)] = c__14638__auto___18726);

return statearr_16987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16996 = arguments.length;
switch (G__16996) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14638__auto___18750 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_17030){
var state_val_17031 = (state_17030[(1)]);
if((state_val_17031 === (7))){
var inst_17012 = (state_17030[(7)]);
var inst_17012__$1 = (state_17030[(2)]);
var inst_17013 = (inst_17012__$1 == null);
var inst_17014 = cljs.core.not(inst_17013);
var state_17030__$1 = (function (){var statearr_17033 = state_17030;
(statearr_17033[(7)] = inst_17012__$1);

return statearr_17033;
})();
if(inst_17014){
var statearr_17034_18751 = state_17030__$1;
(statearr_17034_18751[(1)] = (8));

} else {
var statearr_17036_18752 = state_17030__$1;
(statearr_17036_18752[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (1))){
var inst_17005 = (0);
var state_17030__$1 = (function (){var statearr_17038 = state_17030;
(statearr_17038[(8)] = inst_17005);

return statearr_17038;
})();
var statearr_17039_18753 = state_17030__$1;
(statearr_17039_18753[(2)] = null);

(statearr_17039_18753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (4))){
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17030__$1,(7),ch);
} else {
if((state_val_17031 === (6))){
var inst_17025 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17041_18754 = state_17030__$1;
(statearr_17041_18754[(2)] = inst_17025);

(statearr_17041_18754[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (3))){
var inst_17027 = (state_17030[(2)]);
var inst_17028 = cljs.core.async.close_BANG_(out);
var state_17030__$1 = (function (){var statearr_17043 = state_17030;
(statearr_17043[(9)] = inst_17027);

return statearr_17043;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17030__$1,inst_17028);
} else {
if((state_val_17031 === (2))){
var inst_17005 = (state_17030[(8)]);
var inst_17007 = (inst_17005 < n);
var state_17030__$1 = state_17030;
if(cljs.core.truth_(inst_17007)){
var statearr_17044_18756 = state_17030__$1;
(statearr_17044_18756[(1)] = (4));

} else {
var statearr_17045_18757 = state_17030__$1;
(statearr_17045_18757[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (11))){
var inst_17005 = (state_17030[(8)]);
var inst_17017 = (state_17030[(2)]);
var inst_17018 = (inst_17005 + (1));
var inst_17005__$1 = inst_17018;
var state_17030__$1 = (function (){var statearr_17049 = state_17030;
(statearr_17049[(10)] = inst_17017);

(statearr_17049[(8)] = inst_17005__$1);

return statearr_17049;
})();
var statearr_17050_18758 = state_17030__$1;
(statearr_17050_18758[(2)] = null);

(statearr_17050_18758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (9))){
var state_17030__$1 = state_17030;
var statearr_17051_18762 = state_17030__$1;
(statearr_17051_18762[(2)] = null);

(statearr_17051_18762[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (5))){
var state_17030__$1 = state_17030;
var statearr_17052_18763 = state_17030__$1;
(statearr_17052_18763[(2)] = null);

(statearr_17052_18763[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (10))){
var inst_17022 = (state_17030[(2)]);
var state_17030__$1 = state_17030;
var statearr_17053_18764 = state_17030__$1;
(statearr_17053_18764[(2)] = inst_17022);

(statearr_17053_18764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17031 === (8))){
var inst_17012 = (state_17030[(7)]);
var state_17030__$1 = state_17030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17030__$1,(11),out,inst_17012);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_17056 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17056[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_17056[(1)] = (1));

return statearr_17056;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_17030){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_17030);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e17058){var ex__14352__auto__ = e17058;
var statearr_17059_18765 = state_17030;
(statearr_17059_18765[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_17030[(4)]))){
var statearr_17060_18766 = state_17030;
(statearr_17060_18766[(1)] = cljs.core.first((state_17030[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18767 = state_17030;
state_17030 = G__18767;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_17030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_17030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_17062 = f__14639__auto__();
(statearr_17062[(6)] = c__14638__auto___18750);

return statearr_17062;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17064 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17064 = (function (f,ch,meta17065){
this.f = f;
this.ch = ch;
this.meta17065 = meta17065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17066,meta17065__$1){
var self__ = this;
var _17066__$1 = this;
return (new cljs.core.async.t_cljs$core$async17064(self__.f,self__.ch,meta17065__$1));
}));

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17066){
var self__ = this;
var _17066__$1 = this;
return self__.meta17065;
}));

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17072 = (function (f,ch,meta17065,_,fn1,meta17073){
this.f = f;
this.ch = ch;
this.meta17065 = meta17065;
this._ = _;
this.fn1 = fn1;
this.meta17073 = meta17073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17074,meta17073__$1){
var self__ = this;
var _17074__$1 = this;
return (new cljs.core.async.t_cljs$core$async17072(self__.f,self__.ch,self__.meta17065,self__._,self__.fn1,meta17073__$1));
}));

(cljs.core.async.t_cljs$core$async17072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17074){
var self__ = this;
var _17074__$1 = this;
return self__.meta17073;
}));

(cljs.core.async.t_cljs$core$async17072.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17072.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17072.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17072.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__17063_SHARP_){
var G__17079 = (((p1__17063_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__17063_SHARP_) : self__.f.call(null,p1__17063_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17079) : f1.call(null,G__17079));
});
}));

(cljs.core.async.t_cljs$core$async17072.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17065","meta17065",1354883029,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async17064","cljs.core.async/t_cljs$core$async17064",-931266035,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17073","meta17073",337168563,null)], null);
}));

(cljs.core.async.t_cljs$core$async17072.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17072.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17072");

(cljs.core.async.t_cljs$core$async17072.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17072");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17072.
 */
cljs.core.async.__GT_t_cljs$core$async17072 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17072(f__$1,ch__$1,meta17065__$1,___$2,fn1__$1,meta17073){
return (new cljs.core.async.t_cljs$core$async17072(f__$1,ch__$1,meta17065__$1,___$2,fn1__$1,meta17073));
});

}

return (new cljs.core.async.t_cljs$core$async17072(self__.f,self__.ch,self__.meta17065,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17084 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17084) : self__.f.call(null,G__17084));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17064.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async17064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17065","meta17065",1354883029,null)], null);
}));

(cljs.core.async.t_cljs$core$async17064.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17064");

(cljs.core.async.t_cljs$core$async17064.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17064");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17064.
 */
cljs.core.async.__GT_t_cljs$core$async17064 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async17064(f__$1,ch__$1,meta17065){
return (new cljs.core.async.t_cljs$core$async17064(f__$1,ch__$1,meta17065));
});

}

return (new cljs.core.async.t_cljs$core$async17064(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17087 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17087 = (function (f,ch,meta17088){
this.f = f;
this.ch = ch;
this.meta17088 = meta17088;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17089,meta17088__$1){
var self__ = this;
var _17089__$1 = this;
return (new cljs.core.async.t_cljs$core$async17087(self__.f,self__.ch,meta17088__$1));
}));

(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17089){
var self__ = this;
var _17089__$1 = this;
return self__.meta17088;
}));

(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17087.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17087.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17088","meta17088",1404883045,null)], null);
}));

(cljs.core.async.t_cljs$core$async17087.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17087.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17087");

(cljs.core.async.t_cljs$core$async17087.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17087");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17087.
 */
cljs.core.async.__GT_t_cljs$core$async17087 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async17087(f__$1,ch__$1,meta17088){
return (new cljs.core.async.t_cljs$core$async17087(f__$1,ch__$1,meta17088));
});

}

return (new cljs.core.async.t_cljs$core$async17087(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async17093 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17093 = (function (p,ch,meta17094){
this.p = p;
this.ch = ch;
this.meta17094 = meta17094;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17095,meta17094__$1){
var self__ = this;
var _17095__$1 = this;
return (new cljs.core.async.t_cljs$core$async17093(self__.p,self__.ch,meta17094__$1));
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17095){
var self__ = this;
var _17095__$1 = this;
return self__.meta17094;
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17093.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17093.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17094","meta17094",1984881573,null)], null);
}));

(cljs.core.async.t_cljs$core$async17093.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17093.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17093");

(cljs.core.async.t_cljs$core$async17093.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async17093");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17093.
 */
cljs.core.async.__GT_t_cljs$core$async17093 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async17093(p__$1,ch__$1,meta17094){
return (new cljs.core.async.t_cljs$core$async17093(p__$1,ch__$1,meta17094));
});

}

return (new cljs.core.async.t_cljs$core$async17093(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17105 = arguments.length;
switch (G__17105) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14638__auto___18791 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_17127){
var state_val_17128 = (state_17127[(1)]);
if((state_val_17128 === (7))){
var inst_17122 = (state_17127[(2)]);
var state_17127__$1 = state_17127;
var statearr_17129_18792 = state_17127__$1;
(statearr_17129_18792[(2)] = inst_17122);

(statearr_17129_18792[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (1))){
var state_17127__$1 = state_17127;
var statearr_17134_18793 = state_17127__$1;
(statearr_17134_18793[(2)] = null);

(statearr_17134_18793[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (4))){
var inst_17108 = (state_17127[(7)]);
var inst_17108__$1 = (state_17127[(2)]);
var inst_17109 = (inst_17108__$1 == null);
var state_17127__$1 = (function (){var statearr_17135 = state_17127;
(statearr_17135[(7)] = inst_17108__$1);

return statearr_17135;
})();
if(cljs.core.truth_(inst_17109)){
var statearr_17138_18794 = state_17127__$1;
(statearr_17138_18794[(1)] = (5));

} else {
var statearr_17139_18795 = state_17127__$1;
(statearr_17139_18795[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (6))){
var inst_17108 = (state_17127[(7)]);
var inst_17113 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17108) : p.call(null,inst_17108));
var state_17127__$1 = state_17127;
if(cljs.core.truth_(inst_17113)){
var statearr_17142_18796 = state_17127__$1;
(statearr_17142_18796[(1)] = (8));

} else {
var statearr_17143_18797 = state_17127__$1;
(statearr_17143_18797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (3))){
var inst_17124 = (state_17127[(2)]);
var state_17127__$1 = state_17127;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17127__$1,inst_17124);
} else {
if((state_val_17128 === (2))){
var state_17127__$1 = state_17127;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17127__$1,(4),ch);
} else {
if((state_val_17128 === (11))){
var inst_17116 = (state_17127[(2)]);
var state_17127__$1 = state_17127;
var statearr_17145_18798 = state_17127__$1;
(statearr_17145_18798[(2)] = inst_17116);

(statearr_17145_18798[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (9))){
var state_17127__$1 = state_17127;
var statearr_17146_18799 = state_17127__$1;
(statearr_17146_18799[(2)] = null);

(statearr_17146_18799[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (5))){
var inst_17111 = cljs.core.async.close_BANG_(out);
var state_17127__$1 = state_17127;
var statearr_17147_18800 = state_17127__$1;
(statearr_17147_18800[(2)] = inst_17111);

(statearr_17147_18800[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (10))){
var inst_17119 = (state_17127[(2)]);
var state_17127__$1 = (function (){var statearr_17148 = state_17127;
(statearr_17148[(8)] = inst_17119);

return statearr_17148;
})();
var statearr_17154_18801 = state_17127__$1;
(statearr_17154_18801[(2)] = null);

(statearr_17154_18801[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17128 === (8))){
var inst_17108 = (state_17127[(7)]);
var state_17127__$1 = state_17127;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17127__$1,(11),out,inst_17108);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_17156 = [null,null,null,null,null,null,null,null,null];
(statearr_17156[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_17156[(1)] = (1));

return statearr_17156;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_17127){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_17127);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e17160){var ex__14352__auto__ = e17160;
var statearr_17161_18802 = state_17127;
(statearr_17161_18802[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_17127[(4)]))){
var statearr_17162_18803 = state_17127;
(statearr_17162_18803[(1)] = cljs.core.first((state_17127[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18804 = state_17127;
state_17127 = G__18804;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_17127){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_17127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_17163 = f__14639__auto__();
(statearr_17163[(6)] = c__14638__auto___18791);

return statearr_17163;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17174 = arguments.length;
switch (G__17174) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14638__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_17241){
var state_val_17242 = (state_17241[(1)]);
if((state_val_17242 === (7))){
var inst_17237 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17243_18810 = state_17241__$1;
(statearr_17243_18810[(2)] = inst_17237);

(statearr_17243_18810[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (20))){
var inst_17205 = (state_17241[(7)]);
var inst_17218 = (state_17241[(2)]);
var inst_17219 = cljs.core.next(inst_17205);
var inst_17191 = inst_17219;
var inst_17192 = null;
var inst_17193 = (0);
var inst_17194 = (0);
var state_17241__$1 = (function (){var statearr_17244 = state_17241;
(statearr_17244[(8)] = inst_17218);

(statearr_17244[(9)] = inst_17193);

(statearr_17244[(10)] = inst_17191);

(statearr_17244[(11)] = inst_17192);

(statearr_17244[(12)] = inst_17194);

return statearr_17244;
})();
var statearr_17247_18811 = state_17241__$1;
(statearr_17247_18811[(2)] = null);

(statearr_17247_18811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (1))){
var state_17241__$1 = state_17241;
var statearr_17249_18812 = state_17241__$1;
(statearr_17249_18812[(2)] = null);

(statearr_17249_18812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (4))){
var inst_17178 = (state_17241[(13)]);
var inst_17178__$1 = (state_17241[(2)]);
var inst_17181 = (inst_17178__$1 == null);
var state_17241__$1 = (function (){var statearr_17250 = state_17241;
(statearr_17250[(13)] = inst_17178__$1);

return statearr_17250;
})();
if(cljs.core.truth_(inst_17181)){
var statearr_17251_18814 = state_17241__$1;
(statearr_17251_18814[(1)] = (5));

} else {
var statearr_17252_18815 = state_17241__$1;
(statearr_17252_18815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (15))){
var state_17241__$1 = state_17241;
var statearr_17256_18816 = state_17241__$1;
(statearr_17256_18816[(2)] = null);

(statearr_17256_18816[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (21))){
var state_17241__$1 = state_17241;
var statearr_17257_18818 = state_17241__$1;
(statearr_17257_18818[(2)] = null);

(statearr_17257_18818[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (13))){
var inst_17193 = (state_17241[(9)]);
var inst_17191 = (state_17241[(10)]);
var inst_17192 = (state_17241[(11)]);
var inst_17194 = (state_17241[(12)]);
var inst_17201 = (state_17241[(2)]);
var inst_17202 = (inst_17194 + (1));
var tmp17253 = inst_17193;
var tmp17254 = inst_17191;
var tmp17255 = inst_17192;
var inst_17191__$1 = tmp17254;
var inst_17192__$1 = tmp17255;
var inst_17193__$1 = tmp17253;
var inst_17194__$1 = inst_17202;
var state_17241__$1 = (function (){var statearr_17258 = state_17241;
(statearr_17258[(14)] = inst_17201);

(statearr_17258[(9)] = inst_17193__$1);

(statearr_17258[(10)] = inst_17191__$1);

(statearr_17258[(11)] = inst_17192__$1);

(statearr_17258[(12)] = inst_17194__$1);

return statearr_17258;
})();
var statearr_17259_18819 = state_17241__$1;
(statearr_17259_18819[(2)] = null);

(statearr_17259_18819[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (22))){
var state_17241__$1 = state_17241;
var statearr_17260_18823 = state_17241__$1;
(statearr_17260_18823[(2)] = null);

(statearr_17260_18823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (6))){
var inst_17178 = (state_17241[(13)]);
var inst_17189 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17178) : f.call(null,inst_17178));
var inst_17190 = cljs.core.seq(inst_17189);
var inst_17191 = inst_17190;
var inst_17192 = null;
var inst_17193 = (0);
var inst_17194 = (0);
var state_17241__$1 = (function (){var statearr_17261 = state_17241;
(statearr_17261[(9)] = inst_17193);

(statearr_17261[(10)] = inst_17191);

(statearr_17261[(11)] = inst_17192);

(statearr_17261[(12)] = inst_17194);

return statearr_17261;
})();
var statearr_17262_18824 = state_17241__$1;
(statearr_17262_18824[(2)] = null);

(statearr_17262_18824[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (17))){
var inst_17205 = (state_17241[(7)]);
var inst_17211 = cljs.core.chunk_first(inst_17205);
var inst_17212 = cljs.core.chunk_rest(inst_17205);
var inst_17213 = cljs.core.count(inst_17211);
var inst_17191 = inst_17212;
var inst_17192 = inst_17211;
var inst_17193 = inst_17213;
var inst_17194 = (0);
var state_17241__$1 = (function (){var statearr_17263 = state_17241;
(statearr_17263[(9)] = inst_17193);

(statearr_17263[(10)] = inst_17191);

(statearr_17263[(11)] = inst_17192);

(statearr_17263[(12)] = inst_17194);

return statearr_17263;
})();
var statearr_17264_18827 = state_17241__$1;
(statearr_17264_18827[(2)] = null);

(statearr_17264_18827[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (3))){
var inst_17239 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17241__$1,inst_17239);
} else {
if((state_val_17242 === (12))){
var inst_17227 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17265_18828 = state_17241__$1;
(statearr_17265_18828[(2)] = inst_17227);

(statearr_17265_18828[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (2))){
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17241__$1,(4),in$);
} else {
if((state_val_17242 === (23))){
var inst_17235 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17271_18831 = state_17241__$1;
(statearr_17271_18831[(2)] = inst_17235);

(statearr_17271_18831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (19))){
var inst_17222 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17272_18832 = state_17241__$1;
(statearr_17272_18832[(2)] = inst_17222);

(statearr_17272_18832[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (11))){
var inst_17191 = (state_17241[(10)]);
var inst_17205 = (state_17241[(7)]);
var inst_17205__$1 = cljs.core.seq(inst_17191);
var state_17241__$1 = (function (){var statearr_17274 = state_17241;
(statearr_17274[(7)] = inst_17205__$1);

return statearr_17274;
})();
if(inst_17205__$1){
var statearr_17275_18833 = state_17241__$1;
(statearr_17275_18833[(1)] = (14));

} else {
var statearr_17276_18834 = state_17241__$1;
(statearr_17276_18834[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (9))){
var inst_17229 = (state_17241[(2)]);
var inst_17230 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17241__$1 = (function (){var statearr_17282 = state_17241;
(statearr_17282[(15)] = inst_17229);

return statearr_17282;
})();
if(cljs.core.truth_(inst_17230)){
var statearr_17283_18835 = state_17241__$1;
(statearr_17283_18835[(1)] = (21));

} else {
var statearr_17288_18836 = state_17241__$1;
(statearr_17288_18836[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (5))){
var inst_17183 = cljs.core.async.close_BANG_(out);
var state_17241__$1 = state_17241;
var statearr_17309_18837 = state_17241__$1;
(statearr_17309_18837[(2)] = inst_17183);

(statearr_17309_18837[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (14))){
var inst_17205 = (state_17241[(7)]);
var inst_17208 = cljs.core.chunked_seq_QMARK_(inst_17205);
var state_17241__$1 = state_17241;
if(inst_17208){
var statearr_17310_18838 = state_17241__$1;
(statearr_17310_18838[(1)] = (17));

} else {
var statearr_17311_18839 = state_17241__$1;
(statearr_17311_18839[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (16))){
var inst_17225 = (state_17241[(2)]);
var state_17241__$1 = state_17241;
var statearr_17313_18840 = state_17241__$1;
(statearr_17313_18840[(2)] = inst_17225);

(statearr_17313_18840[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17242 === (10))){
var inst_17192 = (state_17241[(11)]);
var inst_17194 = (state_17241[(12)]);
var inst_17199 = cljs.core._nth(inst_17192,inst_17194);
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17241__$1,(13),out,inst_17199);
} else {
if((state_val_17242 === (18))){
var inst_17205 = (state_17241[(7)]);
var inst_17216 = cljs.core.first(inst_17205);
var state_17241__$1 = state_17241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17241__$1,(20),out,inst_17216);
} else {
if((state_val_17242 === (8))){
var inst_17193 = (state_17241[(9)]);
var inst_17194 = (state_17241[(12)]);
var inst_17196 = (inst_17194 < inst_17193);
var inst_17197 = inst_17196;
var state_17241__$1 = state_17241;
if(cljs.core.truth_(inst_17197)){
var statearr_17314_18845 = state_17241__$1;
(statearr_17314_18845[(1)] = (10));

} else {
var statearr_17315_18846 = state_17241__$1;
(statearr_17315_18846[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14349__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14349__auto____0 = (function (){
var statearr_17321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17321[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14349__auto__);

(statearr_17321[(1)] = (1));

return statearr_17321;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14349__auto____1 = (function (state_17241){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_17241);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e17322){var ex__14352__auto__ = e17322;
var statearr_17323_18851 = state_17241;
(statearr_17323_18851[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_17241[(4)]))){
var statearr_17324_18852 = state_17241;
(statearr_17324_18852[(1)] = cljs.core.first((state_17241[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18853 = state_17241;
state_17241 = G__18853;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14349__auto__ = function(state_17241){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14349__auto____1.call(this,state_17241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14349__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14349__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_17326 = f__14639__auto__();
(statearr_17326[(6)] = c__14638__auto__);

return statearr_17326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));

return c__14638__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17329 = arguments.length;
switch (G__17329) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17333 = arguments.length;
switch (G__17333) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17345 = arguments.length;
switch (G__17345) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14638__auto___18862 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_17374){
var state_val_17375 = (state_17374[(1)]);
if((state_val_17375 === (7))){
var inst_17369 = (state_17374[(2)]);
var state_17374__$1 = state_17374;
var statearr_17386_18863 = state_17374__$1;
(statearr_17386_18863[(2)] = inst_17369);

(statearr_17386_18863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (1))){
var inst_17351 = null;
var state_17374__$1 = (function (){var statearr_17389 = state_17374;
(statearr_17389[(7)] = inst_17351);

return statearr_17389;
})();
var statearr_17395_18864 = state_17374__$1;
(statearr_17395_18864[(2)] = null);

(statearr_17395_18864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (4))){
var inst_17354 = (state_17374[(8)]);
var inst_17354__$1 = (state_17374[(2)]);
var inst_17355 = (inst_17354__$1 == null);
var inst_17356 = cljs.core.not(inst_17355);
var state_17374__$1 = (function (){var statearr_17397 = state_17374;
(statearr_17397[(8)] = inst_17354__$1);

return statearr_17397;
})();
if(inst_17356){
var statearr_17401_18865 = state_17374__$1;
(statearr_17401_18865[(1)] = (5));

} else {
var statearr_17402_18866 = state_17374__$1;
(statearr_17402_18866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (6))){
var state_17374__$1 = state_17374;
var statearr_17404_18867 = state_17374__$1;
(statearr_17404_18867[(2)] = null);

(statearr_17404_18867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (3))){
var inst_17371 = (state_17374[(2)]);
var inst_17372 = cljs.core.async.close_BANG_(out);
var state_17374__$1 = (function (){var statearr_17405 = state_17374;
(statearr_17405[(9)] = inst_17371);

return statearr_17405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17374__$1,inst_17372);
} else {
if((state_val_17375 === (2))){
var state_17374__$1 = state_17374;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17374__$1,(4),ch);
} else {
if((state_val_17375 === (11))){
var inst_17354 = (state_17374[(8)]);
var inst_17363 = (state_17374[(2)]);
var inst_17351 = inst_17354;
var state_17374__$1 = (function (){var statearr_17409 = state_17374;
(statearr_17409[(10)] = inst_17363);

(statearr_17409[(7)] = inst_17351);

return statearr_17409;
})();
var statearr_17410_18878 = state_17374__$1;
(statearr_17410_18878[(2)] = null);

(statearr_17410_18878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (9))){
var inst_17354 = (state_17374[(8)]);
var state_17374__$1 = state_17374;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17374__$1,(11),out,inst_17354);
} else {
if((state_val_17375 === (5))){
var inst_17354 = (state_17374[(8)]);
var inst_17351 = (state_17374[(7)]);
var inst_17358 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17354,inst_17351);
var state_17374__$1 = state_17374;
if(inst_17358){
var statearr_17415_18882 = state_17374__$1;
(statearr_17415_18882[(1)] = (8));

} else {
var statearr_17416_18883 = state_17374__$1;
(statearr_17416_18883[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (10))){
var inst_17366 = (state_17374[(2)]);
var state_17374__$1 = state_17374;
var statearr_17419_18884 = state_17374__$1;
(statearr_17419_18884[(2)] = inst_17366);

(statearr_17419_18884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17375 === (8))){
var inst_17351 = (state_17374[(7)]);
var tmp17414 = inst_17351;
var inst_17351__$1 = tmp17414;
var state_17374__$1 = (function (){var statearr_17421 = state_17374;
(statearr_17421[(7)] = inst_17351__$1);

return statearr_17421;
})();
var statearr_17422_18885 = state_17374__$1;
(statearr_17422_18885[(2)] = null);

(statearr_17422_18885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_17427 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17427[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_17427[(1)] = (1));

return statearr_17427;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_17374){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_17374);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e17428){var ex__14352__auto__ = e17428;
var statearr_17429_18893 = state_17374;
(statearr_17429_18893[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_17374[(4)]))){
var statearr_17431_18894 = state_17374;
(statearr_17431_18894[(1)] = cljs.core.first((state_17374[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18898 = state_17374;
state_17374 = G__18898;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_17374){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_17374);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_17438 = f__14639__auto__();
(statearr_17438[(6)] = c__14638__auto___18862);

return statearr_17438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17448 = arguments.length;
switch (G__17448) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14638__auto___18900 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_17495){
var state_val_17496 = (state_17495[(1)]);
if((state_val_17496 === (7))){
var inst_17491 = (state_17495[(2)]);
var state_17495__$1 = state_17495;
var statearr_17505_18904 = state_17495__$1;
(statearr_17505_18904[(2)] = inst_17491);

(statearr_17505_18904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (1))){
var inst_17455 = (new Array(n));
var inst_17456 = inst_17455;
var inst_17457 = (0);
var state_17495__$1 = (function (){var statearr_17507 = state_17495;
(statearr_17507[(7)] = inst_17456);

(statearr_17507[(8)] = inst_17457);

return statearr_17507;
})();
var statearr_17508_18912 = state_17495__$1;
(statearr_17508_18912[(2)] = null);

(statearr_17508_18912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (4))){
var inst_17460 = (state_17495[(9)]);
var inst_17460__$1 = (state_17495[(2)]);
var inst_17461 = (inst_17460__$1 == null);
var inst_17462 = cljs.core.not(inst_17461);
var state_17495__$1 = (function (){var statearr_17514 = state_17495;
(statearr_17514[(9)] = inst_17460__$1);

return statearr_17514;
})();
if(inst_17462){
var statearr_17515_18916 = state_17495__$1;
(statearr_17515_18916[(1)] = (5));

} else {
var statearr_17516_18917 = state_17495__$1;
(statearr_17516_18917[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (15))){
var inst_17485 = (state_17495[(2)]);
var state_17495__$1 = state_17495;
var statearr_17518_18922 = state_17495__$1;
(statearr_17518_18922[(2)] = inst_17485);

(statearr_17518_18922[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (13))){
var state_17495__$1 = state_17495;
var statearr_17523_18923 = state_17495__$1;
(statearr_17523_18923[(2)] = null);

(statearr_17523_18923[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (6))){
var inst_17457 = (state_17495[(8)]);
var inst_17481 = (inst_17457 > (0));
var state_17495__$1 = state_17495;
if(cljs.core.truth_(inst_17481)){
var statearr_17524_18924 = state_17495__$1;
(statearr_17524_18924[(1)] = (12));

} else {
var statearr_17525_18925 = state_17495__$1;
(statearr_17525_18925[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (3))){
var inst_17493 = (state_17495[(2)]);
var state_17495__$1 = state_17495;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17495__$1,inst_17493);
} else {
if((state_val_17496 === (12))){
var inst_17456 = (state_17495[(7)]);
var inst_17483 = cljs.core.vec(inst_17456);
var state_17495__$1 = state_17495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17495__$1,(15),out,inst_17483);
} else {
if((state_val_17496 === (2))){
var state_17495__$1 = state_17495;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17495__$1,(4),ch);
} else {
if((state_val_17496 === (11))){
var inst_17475 = (state_17495[(2)]);
var inst_17476 = (new Array(n));
var inst_17456 = inst_17476;
var inst_17457 = (0);
var state_17495__$1 = (function (){var statearr_17531 = state_17495;
(statearr_17531[(7)] = inst_17456);

(statearr_17531[(8)] = inst_17457);

(statearr_17531[(10)] = inst_17475);

return statearr_17531;
})();
var statearr_17532_18931 = state_17495__$1;
(statearr_17532_18931[(2)] = null);

(statearr_17532_18931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (9))){
var inst_17456 = (state_17495[(7)]);
var inst_17473 = cljs.core.vec(inst_17456);
var state_17495__$1 = state_17495;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17495__$1,(11),out,inst_17473);
} else {
if((state_val_17496 === (5))){
var inst_17456 = (state_17495[(7)]);
var inst_17457 = (state_17495[(8)]);
var inst_17460 = (state_17495[(9)]);
var inst_17467 = (state_17495[(11)]);
var inst_17464 = (inst_17456[inst_17457] = inst_17460);
var inst_17467__$1 = (inst_17457 + (1));
var inst_17468 = (inst_17467__$1 < n);
var state_17495__$1 = (function (){var statearr_17536 = state_17495;
(statearr_17536[(12)] = inst_17464);

(statearr_17536[(11)] = inst_17467__$1);

return statearr_17536;
})();
if(cljs.core.truth_(inst_17468)){
var statearr_17538_18939 = state_17495__$1;
(statearr_17538_18939[(1)] = (8));

} else {
var statearr_17539_18940 = state_17495__$1;
(statearr_17539_18940[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (14))){
var inst_17488 = (state_17495[(2)]);
var inst_17489 = cljs.core.async.close_BANG_(out);
var state_17495__$1 = (function (){var statearr_17541 = state_17495;
(statearr_17541[(13)] = inst_17488);

return statearr_17541;
})();
var statearr_17542_18941 = state_17495__$1;
(statearr_17542_18941[(2)] = inst_17489);

(statearr_17542_18941[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (10))){
var inst_17479 = (state_17495[(2)]);
var state_17495__$1 = state_17495;
var statearr_17544_18942 = state_17495__$1;
(statearr_17544_18942[(2)] = inst_17479);

(statearr_17544_18942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17496 === (8))){
var inst_17456 = (state_17495[(7)]);
var inst_17467 = (state_17495[(11)]);
var tmp17540 = inst_17456;
var inst_17456__$1 = tmp17540;
var inst_17457 = inst_17467;
var state_17495__$1 = (function (){var statearr_17545 = state_17495;
(statearr_17545[(7)] = inst_17456__$1);

(statearr_17545[(8)] = inst_17457);

return statearr_17545;
})();
var statearr_17546_18946 = state_17495__$1;
(statearr_17546_18946[(2)] = null);

(statearr_17546_18946[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_17551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17551[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_17551[(1)] = (1));

return statearr_17551;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_17495){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_17495);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e17552){var ex__14352__auto__ = e17552;
var statearr_17553_18947 = state_17495;
(statearr_17553_18947[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_17495[(4)]))){
var statearr_17555_18951 = state_17495;
(statearr_17555_18951[(1)] = cljs.core.first((state_17495[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18952 = state_17495;
state_17495 = G__18952;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_17495){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_17495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_17556 = f__14639__auto__();
(statearr_17556[(6)] = c__14638__auto___18900);

return statearr_17556;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17565 = arguments.length;
switch (G__17565) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14638__auto___18954 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14639__auto__ = (function (){var switch__14348__auto__ = (function (state_17620){
var state_val_17621 = (state_17620[(1)]);
if((state_val_17621 === (7))){
var inst_17615 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17626_18958 = state_17620__$1;
(statearr_17626_18958[(2)] = inst_17615);

(statearr_17626_18958[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (1))){
var inst_17570 = [];
var inst_17571 = inst_17570;
var inst_17572 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17620__$1 = (function (){var statearr_17632 = state_17620;
(statearr_17632[(7)] = inst_17571);

(statearr_17632[(8)] = inst_17572);

return statearr_17632;
})();
var statearr_17635_18959 = state_17620__$1;
(statearr_17635_18959[(2)] = null);

(statearr_17635_18959[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (4))){
var inst_17575 = (state_17620[(9)]);
var inst_17575__$1 = (state_17620[(2)]);
var inst_17576 = (inst_17575__$1 == null);
var inst_17577 = cljs.core.not(inst_17576);
var state_17620__$1 = (function (){var statearr_17641 = state_17620;
(statearr_17641[(9)] = inst_17575__$1);

return statearr_17641;
})();
if(inst_17577){
var statearr_17643_18960 = state_17620__$1;
(statearr_17643_18960[(1)] = (5));

} else {
var statearr_17644_18961 = state_17620__$1;
(statearr_17644_18961[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (15))){
var inst_17571 = (state_17620[(7)]);
var inst_17607 = cljs.core.vec(inst_17571);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17620__$1,(18),out,inst_17607);
} else {
if((state_val_17621 === (13))){
var inst_17602 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17648_18963 = state_17620__$1;
(statearr_17648_18963[(2)] = inst_17602);

(statearr_17648_18963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (6))){
var inst_17571 = (state_17620[(7)]);
var inst_17604 = inst_17571.length;
var inst_17605 = (inst_17604 > (0));
var state_17620__$1 = state_17620;
if(cljs.core.truth_(inst_17605)){
var statearr_17650_18964 = state_17620__$1;
(statearr_17650_18964[(1)] = (15));

} else {
var statearr_17651_18965 = state_17620__$1;
(statearr_17651_18965[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (17))){
var inst_17612 = (state_17620[(2)]);
var inst_17613 = cljs.core.async.close_BANG_(out);
var state_17620__$1 = (function (){var statearr_17659 = state_17620;
(statearr_17659[(10)] = inst_17612);

return statearr_17659;
})();
var statearr_17660_18966 = state_17620__$1;
(statearr_17660_18966[(2)] = inst_17613);

(statearr_17660_18966[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (3))){
var inst_17617 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17620__$1,inst_17617);
} else {
if((state_val_17621 === (12))){
var inst_17571 = (state_17620[(7)]);
var inst_17595 = cljs.core.vec(inst_17571);
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17620__$1,(14),out,inst_17595);
} else {
if((state_val_17621 === (2))){
var state_17620__$1 = state_17620;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17620__$1,(4),ch);
} else {
if((state_val_17621 === (11))){
var inst_17571 = (state_17620[(7)]);
var inst_17575 = (state_17620[(9)]);
var inst_17579 = (state_17620[(11)]);
var inst_17590 = inst_17571.push(inst_17575);
var tmp17662 = inst_17571;
var inst_17571__$1 = tmp17662;
var inst_17572 = inst_17579;
var state_17620__$1 = (function (){var statearr_17666 = state_17620;
(statearr_17666[(7)] = inst_17571__$1);

(statearr_17666[(8)] = inst_17572);

(statearr_17666[(12)] = inst_17590);

return statearr_17666;
})();
var statearr_17668_18976 = state_17620__$1;
(statearr_17668_18976[(2)] = null);

(statearr_17668_18976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (9))){
var inst_17572 = (state_17620[(8)]);
var inst_17585 = cljs.core.keyword_identical_QMARK_(inst_17572,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17620__$1 = state_17620;
var statearr_17671_18977 = state_17620__$1;
(statearr_17671_18977[(2)] = inst_17585);

(statearr_17671_18977[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (5))){
var inst_17572 = (state_17620[(8)]);
var inst_17581 = (state_17620[(13)]);
var inst_17575 = (state_17620[(9)]);
var inst_17579 = (state_17620[(11)]);
var inst_17579__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17575) : f.call(null,inst_17575));
var inst_17581__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17579__$1,inst_17572);
var state_17620__$1 = (function (){var statearr_17673 = state_17620;
(statearr_17673[(13)] = inst_17581__$1);

(statearr_17673[(11)] = inst_17579__$1);

return statearr_17673;
})();
if(inst_17581__$1){
var statearr_17675_18984 = state_17620__$1;
(statearr_17675_18984[(1)] = (8));

} else {
var statearr_17676_18985 = state_17620__$1;
(statearr_17676_18985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (14))){
var inst_17575 = (state_17620[(9)]);
var inst_17579 = (state_17620[(11)]);
var inst_17597 = (state_17620[(2)]);
var inst_17598 = [];
var inst_17599 = inst_17598.push(inst_17575);
var inst_17571 = inst_17598;
var inst_17572 = inst_17579;
var state_17620__$1 = (function (){var statearr_17680 = state_17620;
(statearr_17680[(7)] = inst_17571);

(statearr_17680[(8)] = inst_17572);

(statearr_17680[(14)] = inst_17599);

(statearr_17680[(15)] = inst_17597);

return statearr_17680;
})();
var statearr_17681_18986 = state_17620__$1;
(statearr_17681_18986[(2)] = null);

(statearr_17681_18986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (16))){
var state_17620__$1 = state_17620;
var statearr_17682_18987 = state_17620__$1;
(statearr_17682_18987[(2)] = null);

(statearr_17682_18987[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (10))){
var inst_17588 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
if(cljs.core.truth_(inst_17588)){
var statearr_17684_18988 = state_17620__$1;
(statearr_17684_18988[(1)] = (11));

} else {
var statearr_17685_18989 = state_17620__$1;
(statearr_17685_18989[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (18))){
var inst_17609 = (state_17620[(2)]);
var state_17620__$1 = state_17620;
var statearr_17686_18990 = state_17620__$1;
(statearr_17686_18990[(2)] = inst_17609);

(statearr_17686_18990[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17621 === (8))){
var inst_17581 = (state_17620[(13)]);
var state_17620__$1 = state_17620;
var statearr_17688_18993 = state_17620__$1;
(statearr_17688_18993[(2)] = inst_17581);

(statearr_17688_18993[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__14349__auto__ = null;
var cljs$core$async$state_machine__14349__auto____0 = (function (){
var statearr_17693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17693[(0)] = cljs$core$async$state_machine__14349__auto__);

(statearr_17693[(1)] = (1));

return statearr_17693;
});
var cljs$core$async$state_machine__14349__auto____1 = (function (state_17620){
while(true){
var ret_value__14350__auto__ = (function (){try{while(true){
var result__14351__auto__ = switch__14348__auto__(state_17620);
if(cljs.core.keyword_identical_QMARK_(result__14351__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14351__auto__;
}
break;
}
}catch (e17694){var ex__14352__auto__ = e17694;
var statearr_17695_18994 = state_17620;
(statearr_17695_18994[(2)] = ex__14352__auto__);


if(cljs.core.seq((state_17620[(4)]))){
var statearr_17697_18995 = state_17620;
(statearr_17697_18995[(1)] = cljs.core.first((state_17620[(4)])));

} else {
throw ex__14352__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14350__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18996 = state_17620;
state_17620 = G__18996;
continue;
} else {
return ret_value__14350__auto__;
}
break;
}
});
cljs$core$async$state_machine__14349__auto__ = function(state_17620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14349__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14349__auto____1.call(this,state_17620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14349__auto____0;
cljs$core$async$state_machine__14349__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14349__auto____1;
return cljs$core$async$state_machine__14349__auto__;
})()
})();
var state__14640__auto__ = (function (){var statearr_17699 = f__14639__auto__();
(statearr_17699[(6)] = c__14638__auto___18954);

return statearr_17699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14640__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
