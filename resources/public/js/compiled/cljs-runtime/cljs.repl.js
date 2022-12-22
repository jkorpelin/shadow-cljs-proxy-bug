goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19672){
var map__19673 = p__19672;
var map__19673__$1 = cljs.core.__destructure_map(map__19673);
var m = map__19673__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19673__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19673__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19677_19946 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19678_19947 = null;
var count__19679_19948 = (0);
var i__19680_19949 = (0);
while(true){
if((i__19680_19949 < count__19679_19948)){
var f_19950 = chunk__19678_19947.cljs$core$IIndexed$_nth$arity$2(null,i__19680_19949);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19950], 0));


var G__19951 = seq__19677_19946;
var G__19952 = chunk__19678_19947;
var G__19953 = count__19679_19948;
var G__19954 = (i__19680_19949 + (1));
seq__19677_19946 = G__19951;
chunk__19678_19947 = G__19952;
count__19679_19948 = G__19953;
i__19680_19949 = G__19954;
continue;
} else {
var temp__5804__auto___19955 = cljs.core.seq(seq__19677_19946);
if(temp__5804__auto___19955){
var seq__19677_19956__$1 = temp__5804__auto___19955;
if(cljs.core.chunked_seq_QMARK_(seq__19677_19956__$1)){
var c__5568__auto___19957 = cljs.core.chunk_first(seq__19677_19956__$1);
var G__19961 = cljs.core.chunk_rest(seq__19677_19956__$1);
var G__19962 = c__5568__auto___19957;
var G__19963 = cljs.core.count(c__5568__auto___19957);
var G__19964 = (0);
seq__19677_19946 = G__19961;
chunk__19678_19947 = G__19962;
count__19679_19948 = G__19963;
i__19680_19949 = G__19964;
continue;
} else {
var f_19965 = cljs.core.first(seq__19677_19956__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19965], 0));


var G__19970 = cljs.core.next(seq__19677_19956__$1);
var G__19971 = null;
var G__19972 = (0);
var G__19973 = (0);
seq__19677_19946 = G__19970;
chunk__19678_19947 = G__19971;
count__19679_19948 = G__19972;
i__19680_19949 = G__19973;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19974 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19974], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19974)))?cljs.core.second(arglists_19974):arglists_19974)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__19701_19982 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19702_19983 = null;
var count__19703_19984 = (0);
var i__19704_19985 = (0);
while(true){
if((i__19704_19985 < count__19703_19984)){
var vec__19797_19986 = chunk__19702_19983.cljs$core$IIndexed$_nth$arity$2(null,i__19704_19985);
var name_19987 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19797_19986,(0),null);
var map__19800_19988 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19797_19986,(1),null);
var map__19800_19989__$1 = cljs.core.__destructure_map(map__19800_19988);
var doc_19990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19800_19989__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19991 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19800_19989__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19987], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19991], 0));

if(cljs.core.truth_(doc_19990)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19990], 0));
} else {
}


var G__19996 = seq__19701_19982;
var G__19997 = chunk__19702_19983;
var G__19998 = count__19703_19984;
var G__19999 = (i__19704_19985 + (1));
seq__19701_19982 = G__19996;
chunk__19702_19983 = G__19997;
count__19703_19984 = G__19998;
i__19704_19985 = G__19999;
continue;
} else {
var temp__5804__auto___20000 = cljs.core.seq(seq__19701_19982);
if(temp__5804__auto___20000){
var seq__19701_20005__$1 = temp__5804__auto___20000;
if(cljs.core.chunked_seq_QMARK_(seq__19701_20005__$1)){
var c__5568__auto___20006 = cljs.core.chunk_first(seq__19701_20005__$1);
var G__20007 = cljs.core.chunk_rest(seq__19701_20005__$1);
var G__20008 = c__5568__auto___20006;
var G__20009 = cljs.core.count(c__5568__auto___20006);
var G__20010 = (0);
seq__19701_19982 = G__20007;
chunk__19702_19983 = G__20008;
count__19703_19984 = G__20009;
i__19704_19985 = G__20010;
continue;
} else {
var vec__19812_20011 = cljs.core.first(seq__19701_20005__$1);
var name_20012 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812_20011,(0),null);
var map__19815_20013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19812_20011,(1),null);
var map__19815_20014__$1 = cljs.core.__destructure_map(map__19815_20013);
var doc_20015 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19815_20014__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_20016 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19815_20014__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_20012], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_20016], 0));

if(cljs.core.truth_(doc_20015)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_20015], 0));
} else {
}


var G__20017 = cljs.core.next(seq__19701_20005__$1);
var G__20018 = null;
var G__20019 = (0);
var G__20020 = (0);
seq__19701_19982 = G__20017;
chunk__19702_19983 = G__20018;
count__19703_19984 = G__20019;
i__19704_19985 = G__20020;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__19817 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19818 = null;
var count__19819 = (0);
var i__19820 = (0);
while(true){
if((i__19820 < count__19819)){
var role = chunk__19818.cljs$core$IIndexed$_nth$arity$2(null,i__19820);
var temp__5804__auto___20021__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20021__$1)){
var spec_20022 = temp__5804__auto___20021__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20022)], 0));
} else {
}


var G__20023 = seq__19817;
var G__20024 = chunk__19818;
var G__20025 = count__19819;
var G__20026 = (i__19820 + (1));
seq__19817 = G__20023;
chunk__19818 = G__20024;
count__19819 = G__20025;
i__19820 = G__20026;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19817);
if(temp__5804__auto____$1){
var seq__19817__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19817__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__19817__$1);
var G__20027 = cljs.core.chunk_rest(seq__19817__$1);
var G__20028 = c__5568__auto__;
var G__20029 = cljs.core.count(c__5568__auto__);
var G__20030 = (0);
seq__19817 = G__20027;
chunk__19818 = G__20028;
count__19819 = G__20029;
i__19820 = G__20030;
continue;
} else {
var role = cljs.core.first(seq__19817__$1);
var temp__5804__auto___20031__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___20031__$2)){
var spec_20032 = temp__5804__auto___20031__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_20032)], 0));
} else {
}


var G__20033 = cljs.core.next(seq__19817__$1);
var G__20034 = null;
var G__20035 = (0);
var G__20036 = (0);
seq__19817 = G__20033;
chunk__19818 = G__20034;
count__19819 = G__20035;
i__19820 = G__20036;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__20038 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__20039 = cljs.core.ex_cause(t);
via = G__20038;
t = G__20039;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__19837 = datafied_throwable;
var map__19837__$1 = cljs.core.__destructure_map(map__19837);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19837__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19837__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19838 = cljs.core.last(via);
var map__19838__$1 = cljs.core.__destructure_map(map__19838);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19838__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19839 = data;
var map__19839__$1 = cljs.core.__destructure_map(map__19839);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19839__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19839__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19839__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19840 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19840__$1 = cljs.core.__destructure_map(map__19840);
var top_data = map__19840__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19840__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19845 = phase;
var G__19845__$1 = (((G__19845 instanceof cljs.core.Keyword))?G__19845.fqn:null);
switch (G__19845__$1) {
case "read-source":
var map__19852 = data;
var map__19852__$1 = cljs.core.__destructure_map(map__19852);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19852__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19853 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19853__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19853,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19853);
var G__19853__$2 = (cljs.core.truth_((function (){var fexpr__19858 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19858.cljs$core$IFn$_invoke$arity$1 ? fexpr__19858.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19858.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19853__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19853__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19853__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19853__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19864 = top_data;
var G__19864__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19864,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19864);
var G__19864__$2 = (cljs.core.truth_((function (){var fexpr__19865 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19865.cljs$core$IFn$_invoke$arity$1 ? fexpr__19865.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19865.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19864__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19864__$1);
var G__19864__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19864__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19864__$2);
var G__19864__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19864__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19864__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19864__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19864__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19867 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19867,(3),null);
var G__19870 = top_data;
var G__19870__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19870,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19870);
var G__19870__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19870__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19870__$1);
var G__19870__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19870__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19870__$2);
var G__19870__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19870__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19870__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19870__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19870__$4;
}

break;
case "execution":
var vec__19872 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19872,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19872,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19872,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19872,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19835_SHARP_){
var or__5045__auto__ = (p1__19835_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__19875 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19875.cljs$core$IFn$_invoke$arity$1 ? fexpr__19875.cljs$core$IFn$_invoke$arity$1(p1__19835_SHARP_) : fexpr__19875.call(null,p1__19835_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__19876 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19876__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19876,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19876);
var G__19876__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19876__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19876__$1);
var G__19876__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19876__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19876__$2);
var G__19876__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19876__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19876__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19876__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19876__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19845__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19880){
var map__19881 = p__19880;
var map__19881__$1 = cljs.core.__destructure_map(map__19881);
var triage_data = map__19881__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19881__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19885 = phase;
var G__19885__$1 = (((G__19885 instanceof cljs.core.Keyword))?G__19885.fqn:null);
switch (G__19885__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19886 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19887 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19888 = loc;
var G__19889 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19894_20150 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19895_20151 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19896_20152 = true;
var _STAR_print_fn_STAR__temp_val__19897_20153 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19896_20152);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19897_20153);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19877_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19877_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19895_20151);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19894_20150);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19886,G__19887,G__19888,G__19889) : format.call(null,G__19886,G__19887,G__19888,G__19889));

break;
case "macroexpansion":
var G__19898 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19899 = cause_type;
var G__19900 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19901 = loc;
var G__19902 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19898,G__19899,G__19900,G__19901,G__19902) : format.call(null,G__19898,G__19899,G__19900,G__19901,G__19902));

break;
case "compile-syntax-check":
var G__19903 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19904 = cause_type;
var G__19905 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19906 = loc;
var G__19907 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19903,G__19904,G__19905,G__19906,G__19907) : format.call(null,G__19903,G__19904,G__19905,G__19906,G__19907));

break;
case "compilation":
var G__19908 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19909 = cause_type;
var G__19910 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19911 = loc;
var G__19912 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19908,G__19909,G__19910,G__19911,G__19912) : format.call(null,G__19908,G__19909,G__19910,G__19911,G__19912));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19913 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19914 = symbol;
var G__19915 = loc;
var G__19916 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19917_20157 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19918_20158 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19919_20159 = true;
var _STAR_print_fn_STAR__temp_val__19920_20160 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19919_20159);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19920_20160);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19879_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19879_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19918_20158);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19917_20157);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19913,G__19914,G__19915,G__19916) : format.call(null,G__19913,G__19914,G__19915,G__19916));
} else {
var G__19922 = "Execution error%s at %s(%s).\n%s\n";
var G__19923 = cause_type;
var G__19924 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19925 = loc;
var G__19926 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19922,G__19923,G__19924,G__19925,G__19926) : format.call(null,G__19922,G__19923,G__19924,G__19925,G__19926));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19885__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
