goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___21245 = arguments.length;
var i__5770__auto___21246 = (0);
while(true){
if((i__5770__auto___21246 < len__5769__auto___21245)){
args__5775__auto__.push((arguments[i__5770__auto___21246]));

var G__21247 = (i__5770__auto___21246 + (1));
i__5770__auto___21246 = G__21247;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20822){
var G__20823 = cljs.core.first(seq20822);
var seq20822__$1 = cljs.core.next(seq20822);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20823,seq20822__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20824 = cljs.core.seq(sources);
var chunk__20825 = null;
var count__20826 = (0);
var i__20827 = (0);
while(true){
if((i__20827 < count__20826)){
var map__20832 = chunk__20825.cljs$core$IIndexed$_nth$arity$2(null,i__20827);
var map__20832__$1 = cljs.core.__destructure_map(map__20832);
var src = map__20832__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20832__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20833){var e_21248 = e20833;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21248);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21248.message)].join('')));
}

var G__21249 = seq__20824;
var G__21250 = chunk__20825;
var G__21251 = count__20826;
var G__21252 = (i__20827 + (1));
seq__20824 = G__21249;
chunk__20825 = G__21250;
count__20826 = G__21251;
i__20827 = G__21252;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20824);
if(temp__5804__auto__){
var seq__20824__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20824__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20824__$1);
var G__21253 = cljs.core.chunk_rest(seq__20824__$1);
var G__21254 = c__5568__auto__;
var G__21255 = cljs.core.count(c__5568__auto__);
var G__21256 = (0);
seq__20824 = G__21253;
chunk__20825 = G__21254;
count__20826 = G__21255;
i__20827 = G__21256;
continue;
} else {
var map__20834 = cljs.core.first(seq__20824__$1);
var map__20834__$1 = cljs.core.__destructure_map(map__20834);
var src = map__20834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20835){var e_21259 = e20835;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21259);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21259.message)].join('')));
}

var G__21260 = cljs.core.next(seq__20824__$1);
var G__21261 = null;
var G__21262 = (0);
var G__21263 = (0);
seq__20824 = G__21260;
chunk__20825 = G__21261;
count__20826 = G__21262;
i__20827 = G__21263;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20846 = cljs.core.seq(js_requires);
var chunk__20847 = null;
var count__20848 = (0);
var i__20849 = (0);
while(true){
if((i__20849 < count__20848)){
var js_ns = chunk__20847.cljs$core$IIndexed$_nth$arity$2(null,i__20849);
var require_str_21266 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21266);


var G__21268 = seq__20846;
var G__21269 = chunk__20847;
var G__21270 = count__20848;
var G__21271 = (i__20849 + (1));
seq__20846 = G__21268;
chunk__20847 = G__21269;
count__20848 = G__21270;
i__20849 = G__21271;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20846);
if(temp__5804__auto__){
var seq__20846__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20846__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20846__$1);
var G__21272 = cljs.core.chunk_rest(seq__20846__$1);
var G__21273 = c__5568__auto__;
var G__21274 = cljs.core.count(c__5568__auto__);
var G__21275 = (0);
seq__20846 = G__21272;
chunk__20847 = G__21273;
count__20848 = G__21274;
i__20849 = G__21275;
continue;
} else {
var js_ns = cljs.core.first(seq__20846__$1);
var require_str_21277 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21277);


var G__21278 = cljs.core.next(seq__20846__$1);
var G__21279 = null;
var G__21280 = (0);
var G__21281 = (0);
seq__20846 = G__21278;
chunk__20847 = G__21279;
count__20848 = G__21280;
i__20849 = G__21281;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20854){
var map__20855 = p__20854;
var map__20855__$1 = cljs.core.__destructure_map(map__20855);
var msg = map__20855__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20855__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20858(s__20859){
return (new cljs.core.LazySeq(null,(function (){
var s__20859__$1 = s__20859;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20859__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__20864 = cljs.core.first(xs__6360__auto__);
var map__20864__$1 = cljs.core.__destructure_map(map__20864);
var src = map__20864__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20864__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20864__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__20859__$1,map__20864,map__20864__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20855,map__20855__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20858_$_iter__20860(s__20861){
return (new cljs.core.LazySeq(null,((function (s__20859__$1,map__20864,map__20864__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20855,map__20855__$1,msg,info,reload_info){
return (function (){
var s__20861__$1 = s__20861;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20861__$1);
if(temp__5804__auto____$1){
var s__20861__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20861__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__20861__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__20863 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__20862 = (0);
while(true){
if((i__20862 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__20862);
cljs.core.chunk_append(b__20863,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21282 = (i__20862 + (1));
i__20862 = G__21282;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20863),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20858_$_iter__20860(cljs.core.chunk_rest(s__20861__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20863),null);
}
} else {
var warning = cljs.core.first(s__20861__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20858_$_iter__20860(cljs.core.rest(s__20861__$2)));
}
} else {
return null;
}
break;
}
});})(s__20859__$1,map__20864,map__20864__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20855,map__20855__$1,msg,info,reload_info))
,null,null));
});})(s__20859__$1,map__20864,map__20864__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20855,map__20855__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20858(cljs.core.rest(s__20859__$1)));
} else {
var G__21283 = cljs.core.rest(s__20859__$1);
s__20859__$1 = G__21283;
continue;
}
} else {
var G__21284 = cljs.core.rest(s__20859__$1);
s__20859__$1 = G__21284;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__20866_21286 = cljs.core.seq(warnings);
var chunk__20867_21287 = null;
var count__20868_21288 = (0);
var i__20869_21289 = (0);
while(true){
if((i__20869_21289 < count__20868_21288)){
var map__20876_21291 = chunk__20867_21287.cljs$core$IIndexed$_nth$arity$2(null,i__20869_21289);
var map__20876_21292__$1 = cljs.core.__destructure_map(map__20876_21291);
var w_21293 = map__20876_21292__$1;
var msg_21294__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21292__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21292__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21296 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21292__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21297 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20876_21292__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21297)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21295),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21296),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21294__$1)].join(''));


var G__21298 = seq__20866_21286;
var G__21299 = chunk__20867_21287;
var G__21300 = count__20868_21288;
var G__21301 = (i__20869_21289 + (1));
seq__20866_21286 = G__21298;
chunk__20867_21287 = G__21299;
count__20868_21288 = G__21300;
i__20869_21289 = G__21301;
continue;
} else {
var temp__5804__auto___21302 = cljs.core.seq(seq__20866_21286);
if(temp__5804__auto___21302){
var seq__20866_21304__$1 = temp__5804__auto___21302;
if(cljs.core.chunked_seq_QMARK_(seq__20866_21304__$1)){
var c__5568__auto___21305 = cljs.core.chunk_first(seq__20866_21304__$1);
var G__21306 = cljs.core.chunk_rest(seq__20866_21304__$1);
var G__21307 = c__5568__auto___21305;
var G__21308 = cljs.core.count(c__5568__auto___21305);
var G__21309 = (0);
seq__20866_21286 = G__21306;
chunk__20867_21287 = G__21307;
count__20868_21288 = G__21308;
i__20869_21289 = G__21309;
continue;
} else {
var map__20877_21311 = cljs.core.first(seq__20866_21304__$1);
var map__20877_21312__$1 = cljs.core.__destructure_map(map__20877_21311);
var w_21313 = map__20877_21312__$1;
var msg_21314__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21312__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21315 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21312__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21316 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21312__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21317 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20877_21312__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21317)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21315),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21316),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21314__$1)].join(''));


var G__21319 = cljs.core.next(seq__20866_21304__$1);
var G__21320 = null;
var G__21321 = (0);
var G__21322 = (0);
seq__20866_21286 = G__21319;
chunk__20867_21287 = G__21320;
count__20868_21288 = G__21321;
i__20869_21289 = G__21322;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20853_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20853_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__20893){
var map__20894 = p__20893;
var map__20894__$1 = cljs.core.__destructure_map(map__20894);
var msg = map__20894__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20894__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20894__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__20895 = cljs.core.seq(updates);
var chunk__20897 = null;
var count__20898 = (0);
var i__20899 = (0);
while(true){
if((i__20899 < count__20898)){
var path = chunk__20897.cljs$core$IIndexed$_nth$arity$2(null,i__20899);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21072_21327 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21076_21328 = null;
var count__21077_21329 = (0);
var i__21078_21330 = (0);
while(true){
if((i__21078_21330 < count__21077_21329)){
var node_21331 = chunk__21076_21328.cljs$core$IIndexed$_nth$arity$2(null,i__21078_21330);
if(cljs.core.not(node_21331.shadow$old)){
var path_match_21332 = shadow.cljs.devtools.client.browser.match_paths(node_21331.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21332)){
var new_link_21334 = (function (){var G__21109 = node_21331.cloneNode(true);
G__21109.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21332),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21109;
})();
(node_21331.shadow$old = true);

(new_link_21334.onload = ((function (seq__21072_21327,chunk__21076_21328,count__21077_21329,i__21078_21330,seq__20895,chunk__20897,count__20898,i__20899,new_link_21334,path_match_21332,node_21331,path,map__20894,map__20894__$1,msg,updates,reload_info){
return (function (e){
var seq__21110_21335 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21112_21336 = null;
var count__21113_21337 = (0);
var i__21114_21338 = (0);
while(true){
if((i__21114_21338 < count__21113_21337)){
var map__21123_21339 = chunk__21112_21336.cljs$core$IIndexed$_nth$arity$2(null,i__21114_21338);
var map__21123_21340__$1 = cljs.core.__destructure_map(map__21123_21339);
var task_21341 = map__21123_21340__$1;
var fn_str_21342 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123_21340__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21343 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21123_21340__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21344 = goog.getObjectByName(fn_str_21342,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21343)].join(''));

(fn_obj_21344.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21344.cljs$core$IFn$_invoke$arity$2(path,new_link_21334) : fn_obj_21344.call(null,path,new_link_21334));


var G__21345 = seq__21110_21335;
var G__21346 = chunk__21112_21336;
var G__21347 = count__21113_21337;
var G__21348 = (i__21114_21338 + (1));
seq__21110_21335 = G__21345;
chunk__21112_21336 = G__21346;
count__21113_21337 = G__21347;
i__21114_21338 = G__21348;
continue;
} else {
var temp__5804__auto___21349 = cljs.core.seq(seq__21110_21335);
if(temp__5804__auto___21349){
var seq__21110_21350__$1 = temp__5804__auto___21349;
if(cljs.core.chunked_seq_QMARK_(seq__21110_21350__$1)){
var c__5568__auto___21351 = cljs.core.chunk_first(seq__21110_21350__$1);
var G__21352 = cljs.core.chunk_rest(seq__21110_21350__$1);
var G__21353 = c__5568__auto___21351;
var G__21354 = cljs.core.count(c__5568__auto___21351);
var G__21355 = (0);
seq__21110_21335 = G__21352;
chunk__21112_21336 = G__21353;
count__21113_21337 = G__21354;
i__21114_21338 = G__21355;
continue;
} else {
var map__21124_21356 = cljs.core.first(seq__21110_21350__$1);
var map__21124_21357__$1 = cljs.core.__destructure_map(map__21124_21356);
var task_21358 = map__21124_21357__$1;
var fn_str_21359 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21357__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21360 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21124_21357__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21362 = goog.getObjectByName(fn_str_21359,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21360)].join(''));

(fn_obj_21362.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21362.cljs$core$IFn$_invoke$arity$2(path,new_link_21334) : fn_obj_21362.call(null,path,new_link_21334));


var G__21363 = cljs.core.next(seq__21110_21350__$1);
var G__21364 = null;
var G__21365 = (0);
var G__21366 = (0);
seq__21110_21335 = G__21363;
chunk__21112_21336 = G__21364;
count__21113_21337 = G__21365;
i__21114_21338 = G__21366;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21331);
});})(seq__21072_21327,chunk__21076_21328,count__21077_21329,i__21078_21330,seq__20895,chunk__20897,count__20898,i__20899,new_link_21334,path_match_21332,node_21331,path,map__20894,map__20894__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21332], 0));

goog.dom.insertSiblingAfter(new_link_21334,node_21331);


var G__21367 = seq__21072_21327;
var G__21368 = chunk__21076_21328;
var G__21369 = count__21077_21329;
var G__21370 = (i__21078_21330 + (1));
seq__21072_21327 = G__21367;
chunk__21076_21328 = G__21368;
count__21077_21329 = G__21369;
i__21078_21330 = G__21370;
continue;
} else {
var G__21371 = seq__21072_21327;
var G__21372 = chunk__21076_21328;
var G__21373 = count__21077_21329;
var G__21374 = (i__21078_21330 + (1));
seq__21072_21327 = G__21371;
chunk__21076_21328 = G__21372;
count__21077_21329 = G__21373;
i__21078_21330 = G__21374;
continue;
}
} else {
var G__21375 = seq__21072_21327;
var G__21376 = chunk__21076_21328;
var G__21377 = count__21077_21329;
var G__21378 = (i__21078_21330 + (1));
seq__21072_21327 = G__21375;
chunk__21076_21328 = G__21376;
count__21077_21329 = G__21377;
i__21078_21330 = G__21378;
continue;
}
} else {
var temp__5804__auto___21379 = cljs.core.seq(seq__21072_21327);
if(temp__5804__auto___21379){
var seq__21072_21380__$1 = temp__5804__auto___21379;
if(cljs.core.chunked_seq_QMARK_(seq__21072_21380__$1)){
var c__5568__auto___21382 = cljs.core.chunk_first(seq__21072_21380__$1);
var G__21384 = cljs.core.chunk_rest(seq__21072_21380__$1);
var G__21385 = c__5568__auto___21382;
var G__21386 = cljs.core.count(c__5568__auto___21382);
var G__21387 = (0);
seq__21072_21327 = G__21384;
chunk__21076_21328 = G__21385;
count__21077_21329 = G__21386;
i__21078_21330 = G__21387;
continue;
} else {
var node_21388 = cljs.core.first(seq__21072_21380__$1);
if(cljs.core.not(node_21388.shadow$old)){
var path_match_21389 = shadow.cljs.devtools.client.browser.match_paths(node_21388.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21389)){
var new_link_21392 = (function (){var G__21135 = node_21388.cloneNode(true);
G__21135.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21389),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21135;
})();
(node_21388.shadow$old = true);

(new_link_21392.onload = ((function (seq__21072_21327,chunk__21076_21328,count__21077_21329,i__21078_21330,seq__20895,chunk__20897,count__20898,i__20899,new_link_21392,path_match_21389,node_21388,seq__21072_21380__$1,temp__5804__auto___21379,path,map__20894,map__20894__$1,msg,updates,reload_info){
return (function (e){
var seq__21136_21393 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21138_21394 = null;
var count__21139_21395 = (0);
var i__21140_21396 = (0);
while(true){
if((i__21140_21396 < count__21139_21395)){
var map__21144_21397 = chunk__21138_21394.cljs$core$IIndexed$_nth$arity$2(null,i__21140_21396);
var map__21144_21398__$1 = cljs.core.__destructure_map(map__21144_21397);
var task_21399 = map__21144_21398__$1;
var fn_str_21400 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144_21398__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21401 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21144_21398__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21402 = goog.getObjectByName(fn_str_21400,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21401)].join(''));

(fn_obj_21402.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21402.cljs$core$IFn$_invoke$arity$2(path,new_link_21392) : fn_obj_21402.call(null,path,new_link_21392));


var G__21403 = seq__21136_21393;
var G__21404 = chunk__21138_21394;
var G__21405 = count__21139_21395;
var G__21406 = (i__21140_21396 + (1));
seq__21136_21393 = G__21403;
chunk__21138_21394 = G__21404;
count__21139_21395 = G__21405;
i__21140_21396 = G__21406;
continue;
} else {
var temp__5804__auto___21407__$1 = cljs.core.seq(seq__21136_21393);
if(temp__5804__auto___21407__$1){
var seq__21136_21409__$1 = temp__5804__auto___21407__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21136_21409__$1)){
var c__5568__auto___21410 = cljs.core.chunk_first(seq__21136_21409__$1);
var G__21411 = cljs.core.chunk_rest(seq__21136_21409__$1);
var G__21412 = c__5568__auto___21410;
var G__21413 = cljs.core.count(c__5568__auto___21410);
var G__21414 = (0);
seq__21136_21393 = G__21411;
chunk__21138_21394 = G__21412;
count__21139_21395 = G__21413;
i__21140_21396 = G__21414;
continue;
} else {
var map__21145_21415 = cljs.core.first(seq__21136_21409__$1);
var map__21145_21416__$1 = cljs.core.__destructure_map(map__21145_21415);
var task_21417 = map__21145_21416__$1;
var fn_str_21418 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145_21416__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21419 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21145_21416__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21420 = goog.getObjectByName(fn_str_21418,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21419)].join(''));

(fn_obj_21420.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21420.cljs$core$IFn$_invoke$arity$2(path,new_link_21392) : fn_obj_21420.call(null,path,new_link_21392));


var G__21421 = cljs.core.next(seq__21136_21409__$1);
var G__21422 = null;
var G__21423 = (0);
var G__21424 = (0);
seq__21136_21393 = G__21421;
chunk__21138_21394 = G__21422;
count__21139_21395 = G__21423;
i__21140_21396 = G__21424;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21388);
});})(seq__21072_21327,chunk__21076_21328,count__21077_21329,i__21078_21330,seq__20895,chunk__20897,count__20898,i__20899,new_link_21392,path_match_21389,node_21388,seq__21072_21380__$1,temp__5804__auto___21379,path,map__20894,map__20894__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21389], 0));

goog.dom.insertSiblingAfter(new_link_21392,node_21388);


var G__21427 = cljs.core.next(seq__21072_21380__$1);
var G__21428 = null;
var G__21429 = (0);
var G__21430 = (0);
seq__21072_21327 = G__21427;
chunk__21076_21328 = G__21428;
count__21077_21329 = G__21429;
i__21078_21330 = G__21430;
continue;
} else {
var G__21431 = cljs.core.next(seq__21072_21380__$1);
var G__21432 = null;
var G__21433 = (0);
var G__21434 = (0);
seq__21072_21327 = G__21431;
chunk__21076_21328 = G__21432;
count__21077_21329 = G__21433;
i__21078_21330 = G__21434;
continue;
}
} else {
var G__21435 = cljs.core.next(seq__21072_21380__$1);
var G__21436 = null;
var G__21437 = (0);
var G__21438 = (0);
seq__21072_21327 = G__21435;
chunk__21076_21328 = G__21436;
count__21077_21329 = G__21437;
i__21078_21330 = G__21438;
continue;
}
}
} else {
}
}
break;
}


var G__21440 = seq__20895;
var G__21441 = chunk__20897;
var G__21442 = count__20898;
var G__21443 = (i__20899 + (1));
seq__20895 = G__21440;
chunk__20897 = G__21441;
count__20898 = G__21442;
i__20899 = G__21443;
continue;
} else {
var G__21445 = seq__20895;
var G__21446 = chunk__20897;
var G__21447 = count__20898;
var G__21448 = (i__20899 + (1));
seq__20895 = G__21445;
chunk__20897 = G__21446;
count__20898 = G__21447;
i__20899 = G__21448;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20895);
if(temp__5804__auto__){
var seq__20895__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20895__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__20895__$1);
var G__21449 = cljs.core.chunk_rest(seq__20895__$1);
var G__21450 = c__5568__auto__;
var G__21451 = cljs.core.count(c__5568__auto__);
var G__21452 = (0);
seq__20895 = G__21449;
chunk__20897 = G__21450;
count__20898 = G__21451;
i__20899 = G__21452;
continue;
} else {
var path = cljs.core.first(seq__20895__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21147_21454 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21151_21455 = null;
var count__21152_21456 = (0);
var i__21153_21457 = (0);
while(true){
if((i__21153_21457 < count__21152_21456)){
var node_21460 = chunk__21151_21455.cljs$core$IIndexed$_nth$arity$2(null,i__21153_21457);
if(cljs.core.not(node_21460.shadow$old)){
var path_match_21461 = shadow.cljs.devtools.client.browser.match_paths(node_21460.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21461)){
var new_link_21463 = (function (){var G__21183 = node_21460.cloneNode(true);
G__21183.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21461),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21183;
})();
(node_21460.shadow$old = true);

(new_link_21463.onload = ((function (seq__21147_21454,chunk__21151_21455,count__21152_21456,i__21153_21457,seq__20895,chunk__20897,count__20898,i__20899,new_link_21463,path_match_21461,node_21460,path,seq__20895__$1,temp__5804__auto__,map__20894,map__20894__$1,msg,updates,reload_info){
return (function (e){
var seq__21184_21464 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21186_21465 = null;
var count__21187_21466 = (0);
var i__21188_21467 = (0);
while(true){
if((i__21188_21467 < count__21187_21466)){
var map__21195_21468 = chunk__21186_21465.cljs$core$IIndexed$_nth$arity$2(null,i__21188_21467);
var map__21195_21469__$1 = cljs.core.__destructure_map(map__21195_21468);
var task_21470 = map__21195_21469__$1;
var fn_str_21471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21195_21469__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21472 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21195_21469__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21473 = goog.getObjectByName(fn_str_21471,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21472)].join(''));

(fn_obj_21473.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21473.cljs$core$IFn$_invoke$arity$2(path,new_link_21463) : fn_obj_21473.call(null,path,new_link_21463));


var G__21474 = seq__21184_21464;
var G__21475 = chunk__21186_21465;
var G__21476 = count__21187_21466;
var G__21477 = (i__21188_21467 + (1));
seq__21184_21464 = G__21474;
chunk__21186_21465 = G__21475;
count__21187_21466 = G__21476;
i__21188_21467 = G__21477;
continue;
} else {
var temp__5804__auto___21479__$1 = cljs.core.seq(seq__21184_21464);
if(temp__5804__auto___21479__$1){
var seq__21184_21480__$1 = temp__5804__auto___21479__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21184_21480__$1)){
var c__5568__auto___21481 = cljs.core.chunk_first(seq__21184_21480__$1);
var G__21482 = cljs.core.chunk_rest(seq__21184_21480__$1);
var G__21483 = c__5568__auto___21481;
var G__21484 = cljs.core.count(c__5568__auto___21481);
var G__21485 = (0);
seq__21184_21464 = G__21482;
chunk__21186_21465 = G__21483;
count__21187_21466 = G__21484;
i__21188_21467 = G__21485;
continue;
} else {
var map__21198_21486 = cljs.core.first(seq__21184_21480__$1);
var map__21198_21487__$1 = cljs.core.__destructure_map(map__21198_21486);
var task_21488 = map__21198_21487__$1;
var fn_str_21489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198_21487__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21198_21487__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21491 = goog.getObjectByName(fn_str_21489,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21490)].join(''));

(fn_obj_21491.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21491.cljs$core$IFn$_invoke$arity$2(path,new_link_21463) : fn_obj_21491.call(null,path,new_link_21463));


var G__21493 = cljs.core.next(seq__21184_21480__$1);
var G__21494 = null;
var G__21495 = (0);
var G__21496 = (0);
seq__21184_21464 = G__21493;
chunk__21186_21465 = G__21494;
count__21187_21466 = G__21495;
i__21188_21467 = G__21496;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21460);
});})(seq__21147_21454,chunk__21151_21455,count__21152_21456,i__21153_21457,seq__20895,chunk__20897,count__20898,i__20899,new_link_21463,path_match_21461,node_21460,path,seq__20895__$1,temp__5804__auto__,map__20894,map__20894__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21461], 0));

goog.dom.insertSiblingAfter(new_link_21463,node_21460);


var G__21498 = seq__21147_21454;
var G__21499 = chunk__21151_21455;
var G__21500 = count__21152_21456;
var G__21501 = (i__21153_21457 + (1));
seq__21147_21454 = G__21498;
chunk__21151_21455 = G__21499;
count__21152_21456 = G__21500;
i__21153_21457 = G__21501;
continue;
} else {
var G__21502 = seq__21147_21454;
var G__21503 = chunk__21151_21455;
var G__21504 = count__21152_21456;
var G__21505 = (i__21153_21457 + (1));
seq__21147_21454 = G__21502;
chunk__21151_21455 = G__21503;
count__21152_21456 = G__21504;
i__21153_21457 = G__21505;
continue;
}
} else {
var G__21506 = seq__21147_21454;
var G__21507 = chunk__21151_21455;
var G__21508 = count__21152_21456;
var G__21509 = (i__21153_21457 + (1));
seq__21147_21454 = G__21506;
chunk__21151_21455 = G__21507;
count__21152_21456 = G__21508;
i__21153_21457 = G__21509;
continue;
}
} else {
var temp__5804__auto___21510__$1 = cljs.core.seq(seq__21147_21454);
if(temp__5804__auto___21510__$1){
var seq__21147_21511__$1 = temp__5804__auto___21510__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21147_21511__$1)){
var c__5568__auto___21512 = cljs.core.chunk_first(seq__21147_21511__$1);
var G__21513 = cljs.core.chunk_rest(seq__21147_21511__$1);
var G__21514 = c__5568__auto___21512;
var G__21515 = cljs.core.count(c__5568__auto___21512);
var G__21516 = (0);
seq__21147_21454 = G__21513;
chunk__21151_21455 = G__21514;
count__21152_21456 = G__21515;
i__21153_21457 = G__21516;
continue;
} else {
var node_21517 = cljs.core.first(seq__21147_21511__$1);
if(cljs.core.not(node_21517.shadow$old)){
var path_match_21521 = shadow.cljs.devtools.client.browser.match_paths(node_21517.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21521)){
var new_link_21522 = (function (){var G__21202 = node_21517.cloneNode(true);
G__21202.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21521),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21202;
})();
(node_21517.shadow$old = true);

(new_link_21522.onload = ((function (seq__21147_21454,chunk__21151_21455,count__21152_21456,i__21153_21457,seq__20895,chunk__20897,count__20898,i__20899,new_link_21522,path_match_21521,node_21517,seq__21147_21511__$1,temp__5804__auto___21510__$1,path,seq__20895__$1,temp__5804__auto__,map__20894,map__20894__$1,msg,updates,reload_info){
return (function (e){
var seq__21204_21523 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21206_21524 = null;
var count__21207_21525 = (0);
var i__21208_21526 = (0);
while(true){
if((i__21208_21526 < count__21207_21525)){
var map__21215_21527 = chunk__21206_21524.cljs$core$IIndexed$_nth$arity$2(null,i__21208_21526);
var map__21215_21528__$1 = cljs.core.__destructure_map(map__21215_21527);
var task_21529 = map__21215_21528__$1;
var fn_str_21530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215_21528__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21215_21528__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21532 = goog.getObjectByName(fn_str_21530,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21531)].join(''));

(fn_obj_21532.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21532.cljs$core$IFn$_invoke$arity$2(path,new_link_21522) : fn_obj_21532.call(null,path,new_link_21522));


var G__21533 = seq__21204_21523;
var G__21534 = chunk__21206_21524;
var G__21535 = count__21207_21525;
var G__21536 = (i__21208_21526 + (1));
seq__21204_21523 = G__21533;
chunk__21206_21524 = G__21534;
count__21207_21525 = G__21535;
i__21208_21526 = G__21536;
continue;
} else {
var temp__5804__auto___21537__$2 = cljs.core.seq(seq__21204_21523);
if(temp__5804__auto___21537__$2){
var seq__21204_21538__$1 = temp__5804__auto___21537__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21204_21538__$1)){
var c__5568__auto___21540 = cljs.core.chunk_first(seq__21204_21538__$1);
var G__21541 = cljs.core.chunk_rest(seq__21204_21538__$1);
var G__21542 = c__5568__auto___21540;
var G__21543 = cljs.core.count(c__5568__auto___21540);
var G__21544 = (0);
seq__21204_21523 = G__21541;
chunk__21206_21524 = G__21542;
count__21207_21525 = G__21543;
i__21208_21526 = G__21544;
continue;
} else {
var map__21216_21545 = cljs.core.first(seq__21204_21538__$1);
var map__21216_21546__$1 = cljs.core.__destructure_map(map__21216_21545);
var task_21547 = map__21216_21546__$1;
var fn_str_21548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216_21546__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21549 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21216_21546__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21550 = goog.getObjectByName(fn_str_21548,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21549)].join(''));

(fn_obj_21550.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21550.cljs$core$IFn$_invoke$arity$2(path,new_link_21522) : fn_obj_21550.call(null,path,new_link_21522));


var G__21551 = cljs.core.next(seq__21204_21538__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__21204_21523 = G__21551;
chunk__21206_21524 = G__21552;
count__21207_21525 = G__21553;
i__21208_21526 = G__21554;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21517);
});})(seq__21147_21454,chunk__21151_21455,count__21152_21456,i__21153_21457,seq__20895,chunk__20897,count__20898,i__20899,new_link_21522,path_match_21521,node_21517,seq__21147_21511__$1,temp__5804__auto___21510__$1,path,seq__20895__$1,temp__5804__auto__,map__20894,map__20894__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21521], 0));

goog.dom.insertSiblingAfter(new_link_21522,node_21517);


var G__21555 = cljs.core.next(seq__21147_21511__$1);
var G__21556 = null;
var G__21557 = (0);
var G__21558 = (0);
seq__21147_21454 = G__21555;
chunk__21151_21455 = G__21556;
count__21152_21456 = G__21557;
i__21153_21457 = G__21558;
continue;
} else {
var G__21559 = cljs.core.next(seq__21147_21511__$1);
var G__21560 = null;
var G__21561 = (0);
var G__21562 = (0);
seq__21147_21454 = G__21559;
chunk__21151_21455 = G__21560;
count__21152_21456 = G__21561;
i__21153_21457 = G__21562;
continue;
}
} else {
var G__21563 = cljs.core.next(seq__21147_21511__$1);
var G__21564 = null;
var G__21565 = (0);
var G__21566 = (0);
seq__21147_21454 = G__21563;
chunk__21151_21455 = G__21564;
count__21152_21456 = G__21565;
i__21153_21457 = G__21566;
continue;
}
}
} else {
}
}
break;
}


var G__21567 = cljs.core.next(seq__20895__$1);
var G__21568 = null;
var G__21569 = (0);
var G__21570 = (0);
seq__20895 = G__21567;
chunk__20897 = G__21568;
count__20898 = G__21569;
i__20899 = G__21570;
continue;
} else {
var G__21571 = cljs.core.next(seq__20895__$1);
var G__21572 = null;
var G__21573 = (0);
var G__21574 = (0);
seq__20895 = G__21571;
chunk__20897 = G__21572;
count__20898 = G__21573;
i__20899 = G__21574;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__21221){
var map__21222 = p__21221;
var map__21222__$1 = cljs.core.__destructure_map(map__21222);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21222__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__21223){
var map__21224 = p__21223;
var map__21224__$1 = cljs.core.__destructure_map(map__21224);
var _ = map__21224__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21224__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21226,done,error){
var map__21227 = p__21226;
var map__21227__$1 = cljs.core.__destructure_map(map__21227);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21227__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21229,done,error){
var map__21230 = p__21229;
var map__21230__$1 = cljs.core.__destructure_map(map__21230);
var msg = map__21230__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21230__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21232){
var map__21233 = p__21232;
var map__21233__$1 = cljs.core.__destructure_map(map__21233);
var src = map__21233__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21233__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21235 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21235) : done.call(null,G__21235));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21236){
var map__21237 = p__21236;
var map__21237__$1 = cljs.core.__destructure_map(map__21237);
var msg__$1 = map__21237__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21237__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21238){var ex = e21238;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21239){
var map__21240 = p__21239;
var map__21240__$1 = cljs.core.__destructure_map(map__21240);
var env = map__21240__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21240__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21241){
var map__21242 = p__21241;
var map__21242__$1 = cljs.core.__destructure_map(map__21242);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21242__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21243){
var map__21244 = p__21243;
var map__21244__$1 = cljs.core.__destructure_map(map__21244);
var svc = map__21244__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21244__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
