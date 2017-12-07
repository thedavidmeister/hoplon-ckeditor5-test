// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('pages.index');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('javelin.core');
goog.require('hoplon.jquery');
pages.index.ready_QMARK_ = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(null);
hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__19213 = (function (){var el = (function (){var G__19214 = cljs.core.cst$kw$src;
var G__19215 = "https://cdn.ckeditor.com/ckeditor5/1.0.0-alpha.2/balloon/ckeditor.js";
return (hoplon.core.script.cljs$core$IFn$_invoke$arity$2 ? hoplon.core.script.cljs$core$IFn$_invoke$arity$2(G__19214,G__19215) : hoplon.core.script.call(null,G__19214,G__19215));
})();
hoplon.core.when_dom(el,((function (el){
return (function (){
return cljs.core.reset_BANG_(pages.index.ready_QMARK_,true);
});})(el))
);

return el;
})();
return (hoplon.core.head.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.head.cljs$core$IFn$_invoke$arity$1(G__19213) : hoplon.core.head.call(null,G__19213));
})(),(function (){var G__19216 = (function (){var el = (hoplon.core.div.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.div.cljs$core$IFn$_invoke$arity$1("foo edit me!") : hoplon.core.div.call(null,"foo edit me!"));
var fexpr__19219_19220 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (el){
return (function (G__19217,G__19218){
if(cljs.core.truth_(G__19217)){
return BalloonEditor.create(G__19218);
} else {
return null;
}
});})(el))
);
(fexpr__19219_19220.cljs$core$IFn$_invoke$arity$2 ? fexpr__19219_19220.cljs$core$IFn$_invoke$arity$2(pages.index.ready_QMARK_,el) : fexpr__19219_19220.call(null,pages.index.ready_QMARK_,el));

return el;
})();
return (hoplon.core.body.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.body.cljs$core$IFn$_invoke$arity$1(G__19216) : hoplon.core.body.call(null,G__19216));
})()], 0));
