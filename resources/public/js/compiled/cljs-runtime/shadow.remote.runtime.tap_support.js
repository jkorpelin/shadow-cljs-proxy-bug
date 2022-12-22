goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20515,p__20516){
var map__20517 = p__20515;
var map__20517__$1 = cljs.core.__destructure_map(map__20517);
var svc = map__20517__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20517__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20517__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20517__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20518 = p__20516;
var map__20518__$1 = cljs.core.__destructure_map(map__20518);
var msg = map__20518__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20518__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20518__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20518__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20518__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20527,p__20528){
var map__20529 = p__20527;
var map__20529__$1 = cljs.core.__destructure_map(map__20529);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20529__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20533 = p__20528;
var map__20533__$1 = cljs.core.__destructure_map(map__20533);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20533__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20534,p__20535){
var map__20536 = p__20534;
var map__20536__$1 = cljs.core.__destructure_map(map__20536);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20536__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20537 = p__20535;
var map__20537__$1 = cljs.core.__destructure_map(map__20537);
var msg = map__20537__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20537__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20538,tid){
var map__20539 = p__20538;
var map__20539__$1 = cljs.core.__destructure_map(map__20539);
var svc = map__20539__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20539__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20544 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20545 = null;
var count__20546 = (0);
var i__20547 = (0);
while(true){
if((i__20547 < count__20546)){
var vec__20554 = chunk__20545.cljs$core$IIndexed$_nth$arity$2(null,i__20547);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20554,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20554,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20567 = seq__20544;
var G__20568 = chunk__20545;
var G__20569 = count__20546;
var G__20570 = (i__20547 + (1));
seq__20544 = G__20567;
chunk__20545 = G__20568;
count__20546 = G__20569;
i__20547 = G__20570;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20544);
if(temp__5804__auto__){
var seq__20544__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20544__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20544__$1);
var G__20571 = cljs.core.chunk_rest(seq__20544__$1);
var G__20572 = c__5568__auto__;
var G__20573 = cljs.core.count(c__5568__auto__);
var G__20574 = (0);
seq__20544 = G__20571;
chunk__20545 = G__20572;
count__20546 = G__20573;
i__20547 = G__20574;
continue;
} else {
var vec__20557 = cljs.core.first(seq__20544__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20557,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20557,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20575 = cljs.core.next(seq__20544__$1);
var G__20576 = null;
var G__20577 = (0);
var G__20578 = (0);
seq__20544 = G__20575;
chunk__20545 = G__20576;
count__20546 = G__20577;
i__20547 = G__20578;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20540_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20540_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20541_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20541_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20542_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20542_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20543_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20543_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20560){
var map__20561 = p__20560;
var map__20561__$1 = cljs.core.__destructure_map(map__20561);
var svc = map__20561__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20561__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20561__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
