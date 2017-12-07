// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
pages.index.ready_QMARK_ = (function (){var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
var G__19213_19215 = ((function (c){
return (function (){
if(typeof BalloonEditor !== 'undefined'){
return cljs.core.reset_BANG_(c,true);
} else {
return null;
}
});})(c))
;
var G__19214_19216 = (1000);
setInterval(G__19213_19215,G__19214_19216);

return c;
})();
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__19217 = (function (){var G__19218 = cljs.core.cst$kw$src;
var G__19219 = "https://cdn.ckeditor.com/ckeditor5/1.0.0-alpha.2/balloon/ckeditor.js";
return (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(G__19218,G__19219) : hoplon.core.script.call(null,G__19218,G__19219));
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__19217) : hoplon.core.head.call(null,G__19217));
})(),(function (){var G__19220 = (function (){var G__19221 = (function (){var G__19223 = cljs.core.cst$kw$href;
var G__19224 = "https://github.com/thedavidmeister/hoplon-ckeditor5-test";
var G__19225 = cljs.core.cst$kw$target;
var G__19226 = "_blank";
var G__19227 = "Github";
return (hoplon.core.a.cljs$core$IFn$_invoke$arity$5 ? hoplon.core.a.cljs$core$IFn$_invoke$arity$5(G__19223,G__19224,G__19225,G__19226,G__19227) : hoplon.core.a.call(null,G__19223,G__19224,G__19225,G__19226,G__19227));
})();
var G__19222 = (function (){var el = (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("foo edit me!") : hoplon.core.div.call(null,"foo edit me!"));
var fexpr__19230_19231 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el,G__19221){
return (function (G__19228,G__19229){
if(cljs.core.truth_(G__19228)){
return BalloonEditor.create(G__19229);
} else {
return null;
}
});})(el,G__19221))
);
(fexpr__19230_19231.cljs$core$IFn$_invoke$arity$2 ? fexpr__19230_19231.cljs$core$IFn$_invoke$arity$2(pages.index.ready_QMARK_,el) : fexpr__19230_19231.call(null,pages.index.ready_QMARK_,el));

return el;
})();
return (hoplon.core.div.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$2(G__19221,G__19222) : hoplon.core.div.call(null,G__19221,G__19222));
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__19220) : hoplon.core.body.call(null,G__19220));
})()], 0));
