// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_();
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18714_SHARP_,p2__18715_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__18714_SHARP_,p2__18715_SHARP_.getAttribute("static-id"),p2__18715_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__18717 = arguments.length;
switch (G__18717) {
case 2:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2 = (function (ref,f){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3(ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.cljs$core$IFn$_invoke$arity$0();
var G__18718_18721 = init;
var G__18719_18722 = cljs.core.deref(ref);
(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__18718_18721,G__18719_18722) : f.call(null,G__18718_18721,G__18719_18722));

cljs.core.add_watch(ref,k,((function (k){
return (function (_,___$1,old,new$){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(old,new$) : f.call(null,old,new$));
});})(k))
);

return k;
});

hoplon.core.do_watch.cljs$lang$maxFixedArity = 3;

/**
 * Public helper.
 *   Experimental.
 */
hoplon.core.bust_cache = (function hoplon$core$bust_cache(path){
var vec__18723 = cljs.core.reverse(clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
var seq__18724 = cljs.core.seq(vec__18723);
var first__18725 = cljs.core.first(seq__18724);
var seq__18724__$1 = cljs.core.next(seq__18724);
var f = first__18725;
var more = seq__18724__$1;
var vec__18726 = clojure.string.split.cljs$core$IFn$_invoke$arity$3(f,/\./,(2));
var f1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18726,(0),null);
var f2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18726,(1),null);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.reverse(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(more,clojure.string.join.cljs$core$IFn$_invoke$arity$2(".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("045d821b88f34353ba611bf0b1715572")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__18729_SHARP_){
return cljs.core.zipmap(p1__18729_SHARP_,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(true));
});
if(cljs.core.map_QMARK_(kvs)){
return kvs;
} else {
return __GT_map(((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq(kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
var or__8274__auto__ = (function (){var and__8262__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l);
if(and__8262__auto__){
return cljs.core.persistent_BANG_(ret);
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__18730 = (i + (1));
var G__18731 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x.item(i));
i = G__18730;
ret = G__18731;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__18733 = arguments.length;
switch (G__18733) {
case 1:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1 = (function (tree){
return cljs.core.persistent_BANG_(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(tree,cljs.core.transient$(cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count(tree);
var i = (0);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,l)){
return ret;
} else {
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,i);
if(!(cljs.core.sequential_QMARK_(x))){
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ret,x);
} else {
hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2(x,ret);
}

var G__18735 = (i + (1));
i = G__18735;
continue;
}
break;
}
});

hoplon.core.vflatten.cljs$lang$maxFixedArity = 2;


/**
 * @interface
 */
hoplon.core.INode = function(){};

hoplon.core.node = (function hoplon$core$node(this$){
if((!((this$ == null))) && (!((this$.hoplon$core$INode$node$arity$1 == null)))){
return this$.hoplon$core$INode$node$arity$1(this$);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core.node[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto__.call(null,this$));
} else {
var m__9008__auto____$1 = (hoplon.core.node["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$1(this$) : m__9008__auto____$1.call(null,this$));
} else {
throw cljs.core.missing_protocol("INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

var G__18736_18739 = hoplon.core.node;
var G__18737_18740 = "string";
var G__18738_18741 = ((function (G__18736_18739,G__18737_18740){
return (function (this$){
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(this$) : hoplon.core.$text.call(null,this$));
});})(G__18736_18739,G__18737_18740))
;
goog.object.set(G__18736_18739,G__18737_18740,G__18738_18741);
goog.object.set(hoplon.core.INode,"number",true);

var G__18742_18746 = hoplon.core.node;
var G__18743_18747 = "number";
var G__18744_18748 = ((function (G__18742_18746,G__18743_18747){
return (function (this$){
var G__18745 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join('');
return (hoplon.core.$text.cljs$core$IFn$_invoke$arity$1 ? hoplon.core.$text.cljs$core$IFn$_invoke$arity$1(G__18745) : hoplon.core.$text.call(null,G__18745));
});})(G__18742_18746,G__18743_18747))
;
goog.object.set(G__18742_18746,G__18743_18747,G__18744_18748);
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_(hoplon.core.INode,x))){
return hoplon.core.node(x);
} else {
return x;
}
});
hoplon.core.removeChild = Element.prototype.removeChild;
hoplon.core.appendChild = Element.prototype.appendChild;
hoplon.core.insertBefore = Element.prototype.insertBefore;
hoplon.core.replaceChild = Element.prototype.replaceChild;
hoplon.core.setAttribute = Element.prototype.setAttribute;
hoplon.core.merge_kids = (function hoplon$core$merge_kids(this$,_,new$){
var new$__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(hoplon.core.__GT_node,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__18751_SHARP_,p2__18750_SHARP_){
if((p2__18750_SHARP_ == null)){
return p1__18751_SHARP_;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__18751_SHARP_,p2__18750_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(new$)));
var new_QMARK_ = cljs.core.set(new$__$1);
var G__18758 = new$__$1;
var vec__18760 = G__18758;
var seq__18761 = cljs.core.seq(vec__18760);
var first__18762 = cljs.core.first(seq__18761);
var seq__18761__$1 = cljs.core.next(seq__18761);
var x = first__18762;
var xs = seq__18761__$1;
var G__18759 = hoplon.core.child_vec(this$);
var vec__18763 = G__18759;
var seq__18764 = cljs.core.seq(vec__18763);
var first__18765 = cljs.core.first(seq__18764);
var seq__18764__$1 = cljs.core.next(seq__18764);
var k = first__18765;
var ks = seq__18764__$1;
var kids = vec__18763;
var G__18758__$1 = G__18758;
var G__18759__$1 = G__18759;
while(true){
var vec__18766 = G__18758__$1;
var seq__18767 = cljs.core.seq(vec__18766);
var first__18768 = cljs.core.first(seq__18767);
var seq__18767__$1 = cljs.core.next(seq__18767);
var x__$1 = first__18768;
var xs__$1 = seq__18767__$1;
var vec__18769 = G__18759__$1;
var seq__18770 = cljs.core.seq(vec__18769);
var first__18771 = cljs.core.first(seq__18770);
var seq__18770__$1 = cljs.core.next(seq__18770);
var k__$1 = first__18771;
var ks__$1 = seq__18770__$1;
var kids__$1 = vec__18769;
if(cljs.core.truth_((function (){var or__8274__auto__ = x__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return k__$1;
}
})())){
var G__18772 = xs__$1;
var G__18773 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,k__$1))?ks__$1:((cljs.core.not(k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not(x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_((new_QMARK_.cljs$core$IFn$_invoke$arity$1 ? new_QMARK_.cljs$core$IFn$_invoke$arity$1(k__$1) : new_QMARK_.call(null,k__$1)))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__18758__$1 = G__18772;
G__18759__$1 = G__18773;
continue;
} else {
return null;
}
break;
}
});
hoplon.core.ensure_kids_BANG_ = (function hoplon$core$ensure_kids_BANG_(this$){
var this$__$1 = this$;
if(cljs.core.truth_(this$__$1.hoplonKids)){
} else {
var kids_18774 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(hoplon.core.child_vec(this$__$1));
this$__$1.hoplonKids = kids_18774;

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(kids_18774,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids(this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not(hoplon.core.native_QMARK_(elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_(parent);

var kids_18777 = (kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(parent) : kidfn.call(null,parent));
var i_18778 = cljs.core.count(cljs.core.deref(kids_18777));
if(cljs.core.truth_(javelin.core.cell_QMARK_(child__$1))){
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(child__$1,((function (kids_18777,i_18778,child__$1){
return (function (p1__18776_SHARP_,p2__18775_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18777,cljs.core.assoc,i_18778,p2__18775_SHARP_);
});})(kids_18777,i_18778,child__$1))
);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(kids_18777,cljs.core.assoc,i_18778,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__8262__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.not(javelin.core.cell_QMARK_(child));
} else {
return and__8262__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = hoplon.core.native_QMARK_(this$__$1);
if(cljs.core.truth_(and__8262__auto__)){
return javelin.core.cell_QMARK_(child);
} else {
return and__8262__auto__;
}
})())){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_(this$__$1))){
return hoplon.core.managed_append_child(this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$reason,cljs.core.cst$kw$hoplon$core_SLASH_unexpected_DASH_child_DASH_type,cljs.core.cst$kw$child,child,cljs.core.cst$kw$native_QMARK_,hoplon.core.native_QMARK_(child),cljs.core.cst$kw$managed_QMARK_,hoplon.core.managed_QMARK_(child),cljs.core.cst$kw$this,this$__$1], null));

}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__18779_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,x__$1),p1__18779_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
var x__$1 = x;
hoplon.core.ensure_kids_BANG_(this$__$1);

if(cljs.core.not(y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(x__$1,y)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (x__$1,this$__$1){
return (function (p1__18780_SHARP_){
return cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__18780_SHARP_], 0)));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
var y__$1 = y;
hoplon.core.ensure_kids_BANG_(this$__$1);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2((kidfn.cljs$core$IFn$_invoke$arity$1 ? kidfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : kidfn.call(null,this$__$1)),((function (y__$1,this$__$1){
return (function (p1__18781_SHARP_){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__18781_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
var _ = undefined;
var kk_18782 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
var attr_18783 = (attrfn.cljs$core$IFn$_invoke$arity$1 ? attrfn.cljs$core$IFn$_invoke$arity$1(this$__$1) : attrfn.call(null,this$__$1));
var has_QMARK__18784 = (function (){var and__8262__auto__ = attr_18783;
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.contains_QMARK_(cljs.core.deref(attr_18783),kk_18782);
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__18784)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(attr_18783,cljs.core.assoc,kk_18782,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
});
});
hoplon.core.set_appendChild_BANG_(Element.prototype,(function (p1__18785_SHARP_){
return p1__18785_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_(Element.prototype,(function (p1__18786_SHARP_){
return p1__18786_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_(Element.prototype,(function (p1__18787_SHARP_){
return p1__18787_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_(Element.prototype,(function (p1__18788_SHARP_){
return p1__18788_SHARP_.hoplonKids;
}));

/**
 * @interface
 */
hoplon.core.IHoplonElement = function(){};

hoplon.core._set_attributes_BANG_ = (function hoplon$core$_set_attributes_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2(this$,kvs);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._set_attributes_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto__.call(null,this$,kvs));
} else {
var m__9008__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-attributes!",this$);
}
}
}
});

hoplon.core._set_styles_BANG_ = (function hoplon$core$_set_styles_BANG_(this$,kvs){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2(this$,kvs);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._set_styles_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto__.call(null,this$,kvs));
} else {
var m__9008__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,kvs) : m__9008__auto____$1.call(null,this$,kvs));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-set-styles!",this$);
}
}
}
});

hoplon.core._append_child_BANG_ = (function hoplon$core$_append_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2(this$,child);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._append_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto__.call(null,this$,child));
} else {
var m__9008__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-append-child!",this$);
}
}
}
});

hoplon.core._remove_child_BANG_ = (function hoplon$core$_remove_child_BANG_(this$,child){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 == null)))){
return this$.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2(this$,child);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._remove_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto__.call(null,this$,child));
} else {
var m__9008__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$2(this$,child) : m__9008__auto____$1.call(null,this$,child));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-remove-child!",this$);
}
}
}
});

hoplon.core._replace_child_BANG_ = (function hoplon$core$_replace_child_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3(this$,new$,existing);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._replace_child_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto__.call(null,this$,new$,existing));
} else {
var m__9008__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-replace-child!",this$);
}
}
}
});

hoplon.core._insert_before_BANG_ = (function hoplon$core$_insert_before_BANG_(this$,new$,existing){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3(this$,new$,existing);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._insert_before_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto__.call(null,this$,new$,existing));
} else {
var m__9008__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,new$,existing) : m__9008__auto____$1.call(null,this$,new$,existing));
} else {
throw cljs.core.missing_protocol("IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__18794 = arguments.length;
switch (G__18794) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___18796 = arguments.length;
var i__9554__auto___18797 = (0);
while(true){
if((i__9554__auto___18797 < len__9553__auto___18796)){
args_arr__9576__auto__.push((arguments[i__9554__auto___18797]));

var G__18798 = (i__9554__auto___18797 + (1));
i__9554__auto___18797 = G__18798;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_attributes_BANG_(this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq18790){
var G__18791 = cljs.core.first(seq18790);
var seq18790__$1 = cljs.core.next(seq18790);
var G__18792 = cljs.core.first(seq18790__$1);
var seq18790__$2 = cljs.core.next(seq18790__$1);
var G__18793 = cljs.core.first(seq18790__$2);
var seq18790__$3 = cljs.core.next(seq18790__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18791,G__18792,G__18793,seq18790__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__18804 = arguments.length;
switch (G__18804) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___18806 = arguments.length;
var i__9554__auto___18807 = (0);
while(true){
if((i__9554__auto___18807 < len__9553__auto___18806)){
args_arr__9576__auto__.push((arguments[i__9554__auto___18807]));

var G__18808 = (i__9554__auto___18807 + (1));
i__9554__auto___18807 = G__18808;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
return hoplon.core._set_styles_BANG_(this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq18800){
var G__18801 = cljs.core.first(seq18800);
var seq18800__$1 = cljs.core.next(seq18800);
var G__18802 = cljs.core.first(seq18800__$1);
var seq18800__$2 = cljs.core.next(seq18800__$1);
var G__18803 = cljs.core.first(seq18800__$2);
var seq18800__$3 = cljs.core.next(seq18800__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18801,G__18802,G__18803,seq18800__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_(this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_(this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_(this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_(this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.do_BANG_.call(null,elem,this$,value));
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return (hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.on_BANG_.cljs$core$IFn$_invoke$arity$3(elem,this$,value) : hoplon.core.on_BANG_.call(null,elem,this$,value));
});
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_do_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
cljs.spec.alpha.def_impl(cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.list(cljs.core.cst$sym$cljs$spec$alpha_SLASH_fspec,cljs.core.cst$kw$args,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$ret,cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_),cljs.spec.alpha.fspec_impl(cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,null,null),cljs.core.cst$kw$hoplon$spec_SLASH_on_BANG_,cljs.spec.alpha.spec_impl.cljs$core$IFn$_invoke$arity$4(cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,cljs.core.any_QMARK_,null,null),cljs.core.cst$sym$cljs$core_SLASH_any_QMARK_,null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts18811_18829 = null;
cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18811_18829){
return (function (ret__17934__auto__,p__18812){
var vec__18813 = p__18812;
var ___17935__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18813,(0),null);
var f__17936__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18813,(1),null);
var sym__17937__auto__ = (f__17936__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17936__auto__.cljs$core$IFn$_invoke$arity$0() : f__17936__auto__.call(null));
var G__18816 = ret__17934__auto__;
if(cljs.core.truth_(sym__17937__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18816,sym__17937__auto__);
} else {
return G__18816;
}
});})(opts18811_18829))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18811_18829){
return (function (p1__17933__17938__auto__){
var G__18818 = cljs.core.first(p1__17933__17938__auto__);
var fexpr__18817 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18811_18829);
return (fexpr__18817.cljs$core$IFn$_invoke$arity$1 ? fexpr__18817.cljs$core$IFn$_invoke$arity$1(G__18818) : fexpr__18817.call(null,G__18818));
});})(opts18811_18829))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18811_18829){
return (function (){
var checked__17902__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_do_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-ckeditor5-test/vke/rere8q/index.html.out/hoplon/core.cljs",11,1,292,292,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts18811_18829);
if(cljs.core.truth_(checked__17902__auto__)){
hoplon.core._do_BANG_ = checked__17902__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_do_BANG_;
});})(opts18811_18829))
], null)))));

var opts18821 = null;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (opts18821){
return (function (ret__17934__auto__,p__18822){
var vec__18823 = p__18822;
var ___17935__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(0),null);
var f__17936__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18823,(1),null);
var sym__17937__auto__ = (f__17936__auto__.cljs$core$IFn$_invoke$arity$0 ? f__17936__auto__.cljs$core$IFn$_invoke$arity$0() : f__17936__auto__.call(null));
var G__18826 = ret__17934__auto__;
if(cljs.core.truth_(sym__17937__auto__)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__18826,sym__17937__auto__);
} else {
return G__18826;
}
});})(opts18821))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by(cljs.core.first,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (opts18821){
return (function (p1__17933__17938__auto__){
var G__18828 = cljs.core.first(p1__17933__17938__auto__);
var fexpr__18827 = cljs.spec.test.alpha.instrumentable_syms.cljs$core$IFn$_invoke$arity$1(opts18821);
return (fexpr__18827.cljs$core$IFn$_invoke$arity$1 ? fexpr__18827.cljs$core$IFn$_invoke$arity$1(G__18828) : fexpr__18827.call(null,G__18828));
});})(opts18821))
,cljs.core.zipmap(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts18821){
return (function (){
var checked__17902__auto__ = cljs.spec.test.alpha.instrument_1_STAR_(hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_,cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$ns,cljs.core.cst$kw$name,cljs.core.cst$kw$file,cljs.core.cst$kw$end_DASH_column,cljs.core.cst$kw$column,cljs.core.cst$kw$line,cljs.core.cst$kw$end_DASH_line,cljs.core.cst$kw$arglists,cljs.core.cst$kw$doc,cljs.core.cst$kw$test],[cljs.core.cst$sym$hoplon$core,cljs.core.cst$sym$_DASH_on_BANG_,"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-ckeditor5-test/vke/rere8q/index.html.out/hoplon/core.cljs",11,1,295,295,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$sym$elem,cljs.core.cst$sym$this,cljs.core.cst$sym$value], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts18821);
if(cljs.core.truth_(checked__17902__auto__)){
hoplon.core._on_BANG_ = checked__17902__auto__;
} else {
}

return cljs.core.cst$sym$hoplon$core_SLASH__DASH_on_BANG_;
});})(opts18821))
], null)))));
});

/**
 * @interface
 */
hoplon.core.IHoplonAttribute = function(){};

hoplon.core._attr_BANG_ = (function hoplon$core$_attr_BANG_(this$,elem,value){
if((!((this$ == null))) && (!((this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 == null)))){
return this$.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3(this$,elem,value);
} else {
var x__9007__auto__ = (((this$ == null))?null:this$);
var m__9008__auto__ = (hoplon.core._attr_BANG_[goog.typeOf(x__9007__auto__)]);
if(!((m__9008__auto__ == null))){
return (m__9008__auto__.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto__.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9008__auto__.call(null,this$,elem,value));
} else {
var m__9008__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return (m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3 ? m__9008__auto____$1.cljs$core$IFn$_invoke$arity$3(this$,elem,value) : m__9008__auto____$1.call(null,this$,elem,value));
} else {
throw cljs.core.missing_protocol("IHoplonAttribute.-attr!",this$);
}
}
}
});

hoplon.core.attribute_QMARK_ = (function hoplon$core$attribute_QMARK_(this$){
if(!((this$ == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === this$.hoplon$core$IHoplonAttribute$))){
return true;
} else {
if((!this$.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_(value))){
return hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(value,((function (this$__$1){
return (function (p1__18832_SHARP_,p2__18831_SHARP_){
return hoplon.core._do_BANG_(elem,this$__$1,p2__18831_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_(value)){
return hoplon.core._on_BANG_(elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_(elem,this$__$1,value);

}
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__18834 = arguments.length;
switch (G__18834) {
case 1:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$1 = (function (f){
return hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2(f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
var G__18836 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__18837 = (0);
return setTimeout(G__18836,G__18837);
} else {
var temp__5455__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return v.push(f);
} else {
var G__18838_18856 = this$;
var G__18839_18857 = "_hoplonWhenDom";
var G__18840_18858 = [f];
goog.object.set(G__18838_18856,G__18839_18857,G__18840_18858);

var G__18841 = ((function (temp__5455__auto__){
return (function (){
var fexpr__18849 = ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not(document.documentElement.contains(this$))){
var G__18850 = ((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit();
});})(temp__5455__auto__))
;
var G__18851 = (20);
return setTimeout(G__18850,G__18851);
} else {
var seq__18852_18859 = cljs.core.seq(goog.object.get(this$,"_hoplonWhenDom"));
var chunk__18853_18860 = null;
var count__18854_18861 = (0);
var i__18855_18862 = (0);
while(true){
if((i__18855_18862 < count__18854_18861)){
var f_18863__$1 = chunk__18853_18860.cljs$core$IIndexed$_nth$arity$2(null,i__18855_18862);
(f_18863__$1.cljs$core$IFn$_invoke$arity$0 ? f_18863__$1.cljs$core$IFn$_invoke$arity$0() : f_18863__$1.call(null));

var G__18864 = seq__18852_18859;
var G__18865 = chunk__18853_18860;
var G__18866 = count__18854_18861;
var G__18867 = (i__18855_18862 + (1));
seq__18852_18859 = G__18864;
chunk__18853_18860 = G__18865;
count__18854_18861 = G__18866;
i__18855_18862 = G__18867;
continue;
} else {
var temp__5457__auto___18868 = cljs.core.seq(seq__18852_18859);
if(temp__5457__auto___18868){
var seq__18852_18869__$1 = temp__5457__auto___18868;
if(cljs.core.chunked_seq_QMARK_(seq__18852_18869__$1)){
var c__9205__auto___18870 = cljs.core.chunk_first(seq__18852_18869__$1);
var G__18871 = cljs.core.chunk_rest(seq__18852_18869__$1);
var G__18872 = c__9205__auto___18870;
var G__18873 = cljs.core.count(c__9205__auto___18870);
var G__18874 = (0);
seq__18852_18859 = G__18871;
chunk__18853_18860 = G__18872;
count__18854_18861 = G__18873;
i__18855_18862 = G__18874;
continue;
} else {
var f_18875__$1 = cljs.core.first(seq__18852_18869__$1);
(f_18875__$1.cljs$core$IFn$_invoke$arity$0 ? f_18875__$1.cljs$core$IFn$_invoke$arity$0() : f_18875__$1.call(null));

var G__18876 = cljs.core.next(seq__18852_18869__$1);
var G__18877 = null;
var G__18878 = (0);
var G__18879 = (0);
seq__18852_18859 = G__18876;
chunk__18853_18860 = G__18877;
count__18854_18861 = G__18878;
i__18855_18862 = G__18879;
continue;
}
} else {
}
}
break;
}

return goog.object.set(this$,"_hoplonWhenDom",null);
}
});})(temp__5455__auto__))
;
return fexpr__18849();
});})(temp__5455__auto__))
;
var G__18842 = (0);
return setTimeout(G__18841,G__18842);
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
var G__18888 = args;
var vec__18889 = G__18888;
var seq__18890 = cljs.core.seq(vec__18889);
var first__18891 = cljs.core.first(seq__18890);
var seq__18890__$1 = cljs.core.next(seq__18890);
var arg = first__18891;
var args__$1 = seq__18890__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__18888__$1 = G__18888;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__18892 = G__18888__$1;
var seq__18893 = cljs.core.seq(vec__18892);
var first__18894 = cljs.core.first(seq__18893);
var seq__18893__$1 = cljs.core.next(seq__18893);
var arg__$1 = first__18894;
var args__$2 = seq__18893__$1;
if(cljs.core.not((function (){var or__8274__auto__ = arg__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_(attr__$2),cljs.core.persistent_BANG_(kids__$2)], null);
} else {
if(cljs.core.map_QMARK_(arg__$1)){
var G__18895 = cljs.core.reduce_kv(((function (attr__$1,kids__$1,G__18888__$1,attr__$2,kids__$2,vec__18892,seq__18893,first__18894,seq__18893__$1,arg__$1,args__$2,attr,kids,G__18888,vec__18889,seq__18890,first__18891,seq__18890__$1,arg,args__$1){
return (function (p1__18880_SHARP_,p2__18881_SHARP_,p3__18882_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18880_SHARP_,p2__18881_SHARP_,p3__18882_SHARP_);
});})(attr__$1,kids__$1,G__18888__$1,attr__$2,kids__$2,vec__18892,seq__18893,first__18894,seq__18893__$1,arg__$1,args__$2,attr,kids,G__18888,vec__18889,seq__18890,first__18891,seq__18890__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18896 = kids__$2;
var G__18897 = args__$2;
attr__$1 = G__18895;
kids__$1 = G__18896;
G__18888__$1 = G__18897;
continue;
} else {
if(cljs.core.set_QMARK_(arg__$1)){
var G__18898 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (attr__$1,kids__$1,G__18888__$1,attr__$2,kids__$2,vec__18892,seq__18893,first__18894,seq__18893__$1,arg__$1,args__$2,attr,kids,G__18888,vec__18889,seq__18890,first__18891,seq__18890__$1,arg,args__$1){
return (function (p1__18883_SHARP_,p2__18884_SHARP_){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(p1__18883_SHARP_,p2__18884_SHARP_,true);
});})(attr__$1,kids__$1,G__18888__$1,attr__$2,kids__$2,vec__18892,seq__18893,first__18894,seq__18893__$1,arg__$1,args__$2,attr,kids,G__18888,vec__18889,seq__18890,first__18891,seq__18890__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__18899 = kids__$2;
var G__18900 = args__$2;
attr__$1 = G__18898;
kids__$1 = G__18899;
G__18888__$1 = G__18900;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(arg__$1))){
var G__18901 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(attr__$2,arg__$1,cljs.core.first(args__$2));
var G__18902 = kids__$2;
var G__18903 = cljs.core.rest(args__$2);
attr__$1 = G__18901;
kids__$1 = G__18902;
G__18888__$1 = G__18903;
continue;
} else {
if(cljs.core.seq_QMARK_(arg__$1)){
var G__18904 = attr__$2;
var G__18905 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18906 = args__$2;
attr__$1 = G__18904;
kids__$1 = G__18905;
G__18888__$1 = G__18906;
continue;
} else {
if(cljs.core.vector_QMARK_(arg__$1)){
var G__18907 = attr__$2;
var G__18908 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(arg__$1));
var G__18909 = args__$2;
attr__$1 = G__18907;
kids__$1 = G__18908;
G__18888__$1 = G__18909;
continue;
} else {
var G__18910 = attr__$2;
var G__18911 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(kids__$2,arg__$1);
var G__18912 = args__$2;
attr__$1 = G__18910;
kids__$1 = G__18911;
G__18888__$1 = G__18912;
continue;

}
}
}
}
}
}
break;
}
});
hoplon.core.add_attributes_BANG_ = (function hoplon$core$add_attributes_BANG_(this$,attr){
return cljs.core.reduce_kv((function (p1__18914_SHARP_,p2__18913_SHARP_,p3__18915_SHARP_){
hoplon.core._attr_BANG_(p2__18913_SHARP_,p1__18914_SHARP_,p3__18915_SHARP_);

return p1__18914_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__18916){
var vec__18917 = p__18916;
var seq__18918 = cljs.core.seq(vec__18917);
var first__18919 = cljs.core.first(seq__18918);
var seq__18918__$1 = cljs.core.next(seq__18918);
var child_cell = first__18919;
var _ = seq__18918__$1;
var kids = vec__18917;
var this$__$1 = this$;
var seq__18920_18924 = cljs.core.seq(hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$1(kids));
var chunk__18921_18925 = null;
var count__18922_18926 = (0);
var i__18923_18927 = (0);
while(true){
if((i__18923_18927 < count__18922_18926)){
var x_18928 = chunk__18921_18925.cljs$core$IIndexed$_nth$arity$2(null,i__18923_18927);
var temp__5457__auto___18929 = hoplon.core.__GT_node(x_18928);
if(cljs.core.truth_(temp__5457__auto___18929)){
var x_18930__$1 = temp__5457__auto___18929;
hoplon.core.append_child_BANG_(this$__$1,x_18930__$1);
} else {
}

var G__18931 = seq__18920_18924;
var G__18932 = chunk__18921_18925;
var G__18933 = count__18922_18926;
var G__18934 = (i__18923_18927 + (1));
seq__18920_18924 = G__18931;
chunk__18921_18925 = G__18932;
count__18922_18926 = G__18933;
i__18923_18927 = G__18934;
continue;
} else {
var temp__5457__auto___18935 = cljs.core.seq(seq__18920_18924);
if(temp__5457__auto___18935){
var seq__18920_18936__$1 = temp__5457__auto___18935;
if(cljs.core.chunked_seq_QMARK_(seq__18920_18936__$1)){
var c__9205__auto___18937 = cljs.core.chunk_first(seq__18920_18936__$1);
var G__18938 = cljs.core.chunk_rest(seq__18920_18936__$1);
var G__18939 = c__9205__auto___18937;
var G__18940 = cljs.core.count(c__9205__auto___18937);
var G__18941 = (0);
seq__18920_18924 = G__18938;
chunk__18921_18925 = G__18939;
count__18922_18926 = G__18940;
i__18923_18927 = G__18941;
continue;
} else {
var x_18942 = cljs.core.first(seq__18920_18936__$1);
var temp__5457__auto___18943__$1 = hoplon.core.__GT_node(x_18942);
if(cljs.core.truth_(temp__5457__auto___18943__$1)){
var x_18944__$1 = temp__5457__auto___18943__$1;
hoplon.core.append_child_BANG_(this$__$1,x_18944__$1);
} else {
}

var G__18945 = cljs.core.next(seq__18920_18936__$1);
var G__18946 = null;
var G__18947 = (0);
var G__18948 = (0);
seq__18920_18924 = G__18945;
chunk__18921_18925 = G__18946;
count__18922_18926 = G__18947;
i__18923_18927 = G__18948;
continue;
}
} else {
}
}
break;
}

return this$__$1;
});
hoplon.core.invoke_BANG_ = (function hoplon$core$invoke_BANG_(var_args){
var args__9560__auto__ = [];
var len__9553__auto___18955 = arguments.length;
var i__9554__auto___18956 = (0);
while(true){
if((i__9554__auto___18956 < len__9553__auto___18955)){
args__9560__auto__.push((arguments[i__9554__auto___18956]));

var G__18957 = (i__9554__auto___18956 + (1));
i__9554__auto___18956 = G__18957;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__18951 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18951,(1),null);
var G__18954 = this$;
hoplon.core.add_attributes_BANG_(G__18954,attr);

hoplon.core.add_children_BANG_(G__18954,kids);

return G__18954;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq18949){
var G__18950 = cljs.core.first(seq18949);
var seq18949__$1 = cljs.core.next(seq18949);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__18950,seq18949__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__18959 = arguments.length;
switch (G__18959) {
case 2:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,k){
if(cljs.core.truth_(hoplon.core.attribute_QMARK_(k))){
return this$.getAttribute(cljs.core.name(k));
} else {
var G__18960 = this$.children;
var G__18961 = k;
return goog.object.get(G__18960,G__18961);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8274__auto__ = hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$,k);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return not_found;
}
});

hoplon.core.lookup_BANG_.cljs$lang$maxFixedArity = 3;

Element.prototype.cljs$core$IPrintWithWriter$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var this$__$1 = this;
return cljs.core.write_all.cljs$core$IFn$_invoke$arity$variadic(writer,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["#<Element: ",this$__$1.tagName,">"], 0));
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__18992 = null;
var G__18992__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_(this$);
});
var G__18992__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});
var G__18992__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});
var G__18992__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});
var G__18992__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});
var G__18992__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});
var G__18992__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});
var G__18992__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});
var G__18992__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});
var G__18992__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});
var G__18992__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});
var G__18992__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});
var G__18992__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});
var G__18992__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});
var G__18992__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});
var G__18992__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});
var G__18992__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});
var G__18992__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});
var G__18992__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});
var G__18992__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});
var G__18992__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});
var G__18992__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});
G__18992 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__18992__1.call(this,self__);
case 2:
return G__18992__2.call(this,self__,a);
case 3:
return G__18992__3.call(this,self__,a,b);
case 4:
return G__18992__4.call(this,self__,a,b,c);
case 5:
return G__18992__5.call(this,self__,a,b,c,d);
case 6:
return G__18992__6.call(this,self__,a,b,c,d,e);
case 7:
return G__18992__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__18992__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__18992__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__18992__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__18992__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__18992__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__18992__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__18992__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__18992__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__18992__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__18992__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__18992__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__18992__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__18992__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__18992__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__18992__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__18992.cljs$core$IFn$_invoke$arity$1 = G__18992__1;
G__18992.cljs$core$IFn$_invoke$arity$2 = G__18992__2;
G__18992.cljs$core$IFn$_invoke$arity$3 = G__18992__3;
G__18992.cljs$core$IFn$_invoke$arity$4 = G__18992__4;
G__18992.cljs$core$IFn$_invoke$arity$5 = G__18992__5;
G__18992.cljs$core$IFn$_invoke$arity$6 = G__18992__6;
G__18992.cljs$core$IFn$_invoke$arity$7 = G__18992__7;
G__18992.cljs$core$IFn$_invoke$arity$8 = G__18992__8;
G__18992.cljs$core$IFn$_invoke$arity$9 = G__18992__9;
G__18992.cljs$core$IFn$_invoke$arity$10 = G__18992__10;
G__18992.cljs$core$IFn$_invoke$arity$11 = G__18992__11;
G__18992.cljs$core$IFn$_invoke$arity$12 = G__18992__12;
G__18992.cljs$core$IFn$_invoke$arity$13 = G__18992__13;
G__18992.cljs$core$IFn$_invoke$arity$14 = G__18992__14;
G__18992.cljs$core$IFn$_invoke$arity$15 = G__18992__15;
G__18992.cljs$core$IFn$_invoke$arity$16 = G__18992__16;
G__18992.cljs$core$IFn$_invoke$arity$17 = G__18992__17;
G__18992.cljs$core$IFn$_invoke$arity$18 = G__18992__18;
G__18992.cljs$core$IFn$_invoke$arity$19 = G__18992__19;
G__18992.cljs$core$IFn$_invoke$arity$20 = G__18992__20;
G__18992.cljs$core$IFn$_invoke$arity$21 = G__18992__21;
G__18992.cljs$core$IFn$_invoke$arity$22 = G__18992__22;
return G__18992;
})()
;

Element.prototype.apply = (function (self__,args18963){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone(args18963)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_(this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t], 0));
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(this$,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest], 0));
});

Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$2(this$__$1,k);
});

Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3(this$__$1,k,not_found);
});

Element.prototype.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__18964 = cljs.core.seq(kvs);
var chunk__18966 = null;
var count__18967 = (0);
var i__18968 = (0);
while(true){
if((i__18968 < count__18967)){
var vec__18970 = chunk__18966.cljs$core$IIndexed$_nth$arity$2(null,i__18968);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18970,(1),null);
var k_18993__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_18993__$1);
} else {
e.setAttribute(k_18993__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_18993__$1:v));
}

var G__18994 = seq__18964;
var G__18995 = chunk__18966;
var G__18996 = count__18967;
var G__18997 = (i__18968 + (1));
seq__18964 = G__18994;
chunk__18966 = G__18995;
count__18967 = G__18996;
i__18968 = G__18997;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18964);
if(temp__5457__auto__){
var seq__18964__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18964__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__18964__$1);
var G__18998 = cljs.core.chunk_rest(seq__18964__$1);
var G__18999 = c__9205__auto__;
var G__19000 = cljs.core.count(c__9205__auto__);
var G__19001 = (0);
seq__18964 = G__18998;
chunk__18966 = G__18999;
count__18967 = G__19000;
i__18968 = G__19001;
continue;
} else {
var vec__18973 = cljs.core.first(seq__18964__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18973,(1),null);
var k_19002__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttribute(k_19002__$1);
} else {
e.setAttribute(k_19002__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19002__$1:v));
}

var G__19003 = cljs.core.next(seq__18964__$1);
var G__19004 = null;
var G__19005 = (0);
var G__19006 = (0);
seq__18964 = G__19003;
chunk__18966 = G__19004;
count__18967 = G__19005;
i__18968 = G__19006;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_set_styles_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__18976 = cljs.core.seq(kvs);
var chunk__18977 = null;
var count__18978 = (0);
var i__18979 = (0);
while(true){
if((i__18979 < count__18978)){
var vec__18980 = chunk__18977.cljs$core$IIndexed$_nth$arity$2(null,i__18979);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18980,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18980,(1),null);
var G__18983_19007 = e.style;
var G__18984_19008 = cljs.core.name(k);
var G__18985_19009 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18983_19007,G__18984_19008,G__18985_19009);

var G__19010 = seq__18976;
var G__19011 = chunk__18977;
var G__19012 = count__18978;
var G__19013 = (i__18979 + (1));
seq__18976 = G__19010;
chunk__18977 = G__19011;
count__18978 = G__19012;
i__18979 = G__19013;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__18976);
if(temp__5457__auto__){
var seq__18976__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18976__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__18976__$1);
var G__19014 = cljs.core.chunk_rest(seq__18976__$1);
var G__19015 = c__9205__auto__;
var G__19016 = cljs.core.count(c__9205__auto__);
var G__19017 = (0);
seq__18976 = G__19014;
chunk__18977 = G__19015;
count__18978 = G__19016;
i__18979 = G__19017;
continue;
} else {
var vec__18986 = cljs.core.first(seq__18976__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18986,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18986,(1),null);
var G__18989_19018 = e.style;
var G__18990_19019 = cljs.core.name(k);
var G__18991_19020 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
goog.object.set(G__18989_19018,G__18990_19019,G__18991_19020);

var G__19021 = cljs.core.next(seq__18976__$1);
var G__19022 = null;
var G__19023 = (0);
var G__19024 = (0);
seq__18976 = G__19021;
chunk__18977 = G__19022;
count__18978 = G__19023;
i__18979 = G__19024;
continue;
}
} else {
return null;
}
}
break;
}
});

Element.prototype.hoplon$core$IHoplonElement$_append_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.appendChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_remove_child_BANG_$arity$2 = (function (this$,child){
var this$__$1 = this;
return this$__$1.removeChild(child);
});

Element.prototype.hoplon$core$IHoplonElement$_replace_child_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.replaceChild(new$,existing);
});

Element.prototype.hoplon$core$IHoplonElement$_insert_before_BANG_$arity$3 = (function (this$,new$,existing){
var this$__$1 = this;
return this$__$1.insertBefore(new$,existing);
});
hoplon.core.mksingleton = (function hoplon$core$mksingleton(elem){
return (function() { 
var G__19028__delegate = function (args){
var vec__19025 = hoplon.core.parse_args(args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19025,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19025,(1),null);
hoplon.core.add_attributes_BANG_(elem,attrs);

if(cljs.core.not(cljs.core.cst$kw$static.cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_(elem);

return hoplon.core.add_children_BANG_(elem,kids);
} else {
return null;
}
};
var G__19028 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19029__i = 0, G__19029__a = new Array(arguments.length -  0);
while (G__19029__i < G__19029__a.length) {G__19029__a[G__19029__i] = arguments[G__19029__i + 0]; ++G__19029__i;}
  args = new cljs.core.IndexedSeq(G__19029__a,0,null);
} 
return G__19028__delegate.call(this,args);};
G__19028.cljs$lang$maxFixedArity = 0;
G__19028.cljs$lang$applyTo = (function (arglist__19030){
var args = cljs.core.seq(arglist__19030);
return G__19028__delegate(args);
});
G__19028.cljs$core$IFn$_invoke$arity$variadic = G__19028__delegate;
return G__19028;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__19034__delegate = function (args){
var vec__19031 = hoplon.core.parse_args(args);
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(0),null);
var kids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19031,(1),null);
var elem = document.createElement(tag);
return (elem.cljs$core$IFn$_invoke$arity$2 ? elem.cljs$core$IFn$_invoke$arity$2(attr,kids) : elem.call(null,attr,kids));
};
var G__19034 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__19035__i = 0, G__19035__a = new Array(arguments.length -  0);
while (G__19035__i < G__19035__a.length) {G__19035__a[G__19035__i] = arguments[G__19035__i + 0]; ++G__19035__i;}
  args = new cljs.core.IndexedSeq(G__19035__a,0,null);
} 
return G__19034__delegate.call(this,args);};
G__19034.cljs$lang$maxFixedArity = 0;
G__19034.cljs$lang$applyTo = (function (arglist__19036){
var args = cljs.core.seq(arglist__19036);
return G__19034__delegate(args);
});
G__19034.cljs$core$IFn$_invoke$arity$variadic = G__19034__delegate;
return G__19034;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19038 = arguments.length;
var i__9554__auto___19039 = (0);
while(true){
if((i__9554__auto___19039 < len__9553__auto___19038)){
args__9560__auto__.push((arguments[i__9554__auto___19039]));

var G__19040 = (i__9554__auto___19039 + (1));
i__9554__auto___19039 = G__19040;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_(document.documentElement,cljs.core.first(hoplon.core.parse_args(args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq19037){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19037));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton(document.head);
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton(document.body);
hoplon.core.a = hoplon.core.mkelem("a");
hoplon.core.abbr = hoplon.core.mkelem("abbr");
hoplon.core.address = hoplon.core.mkelem("address");
hoplon.core.area = hoplon.core.mkelem("area");
hoplon.core.article = hoplon.core.mkelem("article");
hoplon.core.aside = hoplon.core.mkelem("aside");
hoplon.core.audio = hoplon.core.mkelem("audio");
hoplon.core.b = hoplon.core.mkelem("b");
hoplon.core.base = hoplon.core.mkelem("base");
hoplon.core.bdi = hoplon.core.mkelem("bdi");
hoplon.core.bdo = hoplon.core.mkelem("bdo");
hoplon.core.blockquote = hoplon.core.mkelem("blockquote");
hoplon.core.br = hoplon.core.mkelem("br");
hoplon.core.button = hoplon.core.mkelem("button");
hoplon.core.canvas = hoplon.core.mkelem("canvas");
hoplon.core.caption = hoplon.core.mkelem("caption");
hoplon.core.cite = hoplon.core.mkelem("cite");
hoplon.core.code = hoplon.core.mkelem("code");
hoplon.core.col = hoplon.core.mkelem("col");
hoplon.core.colgroup = hoplon.core.mkelem("colgroup");
hoplon.core.data = hoplon.core.mkelem("data");
hoplon.core.datalist = hoplon.core.mkelem("datalist");
hoplon.core.dd = hoplon.core.mkelem("dd");
hoplon.core.del = hoplon.core.mkelem("del");
hoplon.core.details = hoplon.core.mkelem("details");
hoplon.core.dfn = hoplon.core.mkelem("dfn");
hoplon.core.dialog = hoplon.core.mkelem("dialog");
hoplon.core.div = hoplon.core.mkelem("div");
hoplon.core.dl = hoplon.core.mkelem("dl");
hoplon.core.dt = hoplon.core.mkelem("dt");
hoplon.core.em = hoplon.core.mkelem("em");
hoplon.core.embed = hoplon.core.mkelem("embed");
hoplon.core.fieldset = hoplon.core.mkelem("fieldset");
hoplon.core.figcaption = hoplon.core.mkelem("figcaption");
hoplon.core.figure = hoplon.core.mkelem("figure");
hoplon.core.footer = hoplon.core.mkelem("footer");
hoplon.core.form = hoplon.core.mkelem("form");
hoplon.core.h1 = hoplon.core.mkelem("h1");
hoplon.core.h2 = hoplon.core.mkelem("h2");
hoplon.core.h3 = hoplon.core.mkelem("h3");
hoplon.core.h4 = hoplon.core.mkelem("h4");
hoplon.core.h5 = hoplon.core.mkelem("h5");
hoplon.core.h6 = hoplon.core.mkelem("h6");
hoplon.core.header = hoplon.core.mkelem("header");
hoplon.core.hgroup = hoplon.core.mkelem("hgroup");
hoplon.core.hr = hoplon.core.mkelem("hr");
hoplon.core.i = hoplon.core.mkelem("i");
hoplon.core.iframe = hoplon.core.mkelem("iframe");
hoplon.core.img = hoplon.core.mkelem("img");
hoplon.core.input = hoplon.core.mkelem("input");
hoplon.core.ins = hoplon.core.mkelem("ins");
hoplon.core.kbd = hoplon.core.mkelem("kbd");
hoplon.core.keygen = hoplon.core.mkelem("keygen");
hoplon.core.label = hoplon.core.mkelem("label");
hoplon.core.legend = hoplon.core.mkelem("legend");
hoplon.core.li = hoplon.core.mkelem("li");
hoplon.core.link = hoplon.core.mkelem("link");
hoplon.core.main = hoplon.core.mkelem("main");
hoplon.core.html_map = hoplon.core.mkelem("map");
hoplon.core.mark = hoplon.core.mkelem("mark");
hoplon.core.menu = hoplon.core.mkelem("menu");
hoplon.core.menuitem = hoplon.core.mkelem("menuitem");
hoplon.core.html_meta = hoplon.core.mkelem("meta");
hoplon.core.meter = hoplon.core.mkelem("meter");
hoplon.core.multicol = hoplon.core.mkelem("multicol");
hoplon.core.nav = hoplon.core.mkelem("nav");
hoplon.core.noframes = hoplon.core.mkelem("noframes");
hoplon.core.noscript = hoplon.core.mkelem("noscript");
hoplon.core.html_object = hoplon.core.mkelem("object");
hoplon.core.ol = hoplon.core.mkelem("ol");
hoplon.core.optgroup = hoplon.core.mkelem("optgroup");
hoplon.core.option = hoplon.core.mkelem("option");
hoplon.core.output = hoplon.core.mkelem("output");
hoplon.core.p = hoplon.core.mkelem("p");
hoplon.core.param = hoplon.core.mkelem("param");
hoplon.core.picture = hoplon.core.mkelem("picture");
hoplon.core.pre = hoplon.core.mkelem("pre");
hoplon.core.progress = hoplon.core.mkelem("progress");
hoplon.core.q = hoplon.core.mkelem("q");
hoplon.core.rp = hoplon.core.mkelem("rp");
hoplon.core.rt = hoplon.core.mkelem("rt");
hoplon.core.rtc = hoplon.core.mkelem("rtc");
hoplon.core.ruby = hoplon.core.mkelem("ruby");
hoplon.core.s = hoplon.core.mkelem("s");
hoplon.core.samp = hoplon.core.mkelem("samp");
hoplon.core.script = hoplon.core.mkelem("script");
hoplon.core.section = hoplon.core.mkelem("section");
hoplon.core.select = hoplon.core.mkelem("select");
hoplon.core.shadow = hoplon.core.mkelem("shadow");
hoplon.core.small = hoplon.core.mkelem("small");
hoplon.core.source = hoplon.core.mkelem("source");
hoplon.core.span = hoplon.core.mkelem("span");
hoplon.core.strong = hoplon.core.mkelem("strong");
hoplon.core.style = hoplon.core.mkelem("style");
hoplon.core.sub = hoplon.core.mkelem("sub");
hoplon.core.summary = hoplon.core.mkelem("summary");
hoplon.core.sup = hoplon.core.mkelem("sup");
hoplon.core.table = hoplon.core.mkelem("table");
hoplon.core.tbody = hoplon.core.mkelem("tbody");
hoplon.core.td = hoplon.core.mkelem("td");
hoplon.core.template = hoplon.core.mkelem("template");
hoplon.core.textarea = hoplon.core.mkelem("textarea");
hoplon.core.tfoot = hoplon.core.mkelem("tfoot");
hoplon.core.th = hoplon.core.mkelem("th");
hoplon.core.thead = hoplon.core.mkelem("thead");
hoplon.core.html_time = hoplon.core.mkelem("time");
hoplon.core.title = hoplon.core.mkelem("title");
hoplon.core.tr = hoplon.core.mkelem("tr");
hoplon.core.track = hoplon.core.mkelem("track");
hoplon.core.u = hoplon.core.mkelem("u");
hoplon.core.ul = hoplon.core.mkelem("ul");
hoplon.core.html_var = hoplon.core.mkelem("var");
hoplon.core.video = hoplon.core.mkelem("video");
hoplon.core.wbr = hoplon.core.mkelem("wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__19041_SHARP_){
return document.createTextNode(p1__19041_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__19042_SHARP_){
return document.createComment(p1__19042_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = cljs.core.cst$kw$hoplon$core_SLASH__DASH__DASH__GT_;
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
var G__19043 = (function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
});
var G__19044 = (0);
return setTimeout(G__19043,G__19044);
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_((function (){
return document.body.addEventListener("submit",(function (p1__19045_SHARP_){
var e = p1__19045_SHARP_.target;
if(cljs.core.truth_((function (){var or__8274__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__19045_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","do!"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (elem,key,val){
var temp__5455__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19046 = elem;
var G__19047 = cljs.core.cst$kw$attr;
var G__19048 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19046,G__19047,G__19048) : hoplon.core.do_BANG_.call(null,G__19046,G__19047,G__19048));
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,val);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$default,cljs.core.cst$kw$hoplon$core_SLASH_default], null),cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("hoplon.core","on!"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (elem,key,val){
var temp__5455__auto__ = cljs.core.namespace(key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(n,"*");
} else {
return key;
}
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,cljs.core.cst$kw$hoplon$core_SLASH_default,hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return elem.addEventListener(cljs.core.name(event),callback);
}));
}));
/**
 * Given a cell items containing a seqable collection, constructs a cell that
 *   works like a fill vector. The template tpl is a function of one argument: the
 *   formula cell containing the ith item in items. The tpl function is called
 *   once (and only once) for each index in items. When the items collection
 *   shrinks the DOM element created by the template is not destroyed--it is only
 *   removed from the DOM and cached. When the items collection grows again those
 *   cached elements will be reinserted into the DOM at their original index.
 */
hoplon.core.loop_tpl_STAR_ = (function hoplon$core$loop_tpl_STAR_(items,tpl){
var on_deck = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.List.EMPTY);
var items_seq = (function (){var fexpr__19053 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck){
return (function (G__19051,G__19052){
return (G__19051.cljs$core$IFn$_invoke$arity$1 ? G__19051.cljs$core$IFn$_invoke$arity$1(G__19052) : G__19051.call(null,G__19052));
});})(on_deck))
);
return (fexpr__19053.cljs$core$IFn$_invoke$arity$2 ? fexpr__19053.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,items) : fexpr__19053.call(null,cljs.core.seq,items));
})();
var ith_item = ((function (on_deck,items_seq){
return (function (p1__19049_SHARP_){
var fexpr__19057 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (on_deck,items_seq){
return (function (G__19056,G__19055,G__19054){
return (G__19054.cljs$core$IFn$_invoke$arity$3 ? G__19054.cljs$core$IFn$_invoke$arity$3(G__19055,G__19056,null) : G__19054.call(null,G__19055,G__19056,null));
});})(on_deck,items_seq))
);
return (fexpr__19057.cljs$core$IFn$_invoke$arity$3 ? fexpr__19057.cljs$core$IFn$_invoke$arity$3(p1__19049_SHARP_,items_seq,cljs.core.nth) : fexpr__19057.call(null,p1__19049_SHARP_,items_seq,cljs.core.nth));
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__19050_SHARP_){
var x = cljs.core.first(cljs.core.deref(p1__19050_SHARP_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(p1__19050_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$2(items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count(old_items);
var new$ = cljs.core.count(new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__19058 = cljs.core.seq(cljs.core.range.cljs$core$IFn$_invoke$arity$2(old,new$));
var chunk__19059 = null;
var count__19060 = (0);
var i__19061 = (0);
while(true){
if((i__19061 < count__19060)){
var i = chunk__19059.cljs$core$IIndexed$_nth$arity$2(null,i__19061);
var e_19064 = (function (){var or__8274__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__19062 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19062) : tpl.call(null,G__19062));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19064);

var G__19065 = seq__19058;
var G__19066 = chunk__19059;
var G__19067 = count__19060;
var G__19068 = (i__19061 + (1));
seq__19058 = G__19065;
chunk__19059 = G__19066;
count__19060 = G__19067;
i__19061 = G__19068;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19058);
if(temp__5457__auto__){
var seq__19058__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19058__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19058__$1);
var G__19069 = cljs.core.chunk_rest(seq__19058__$1);
var G__19070 = c__9205__auto__;
var G__19071 = cljs.core.count(c__9205__auto__);
var G__19072 = (0);
seq__19058 = G__19069;
chunk__19059 = G__19070;
count__19060 = G__19071;
i__19061 = G__19072;
continue;
} else {
var i = cljs.core.first(seq__19058__$1);
var e_19073 = (function (){var or__8274__auto__ = shift_BANG_(on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__19063 = ith_item(i);
return (tpl.cljs$core$IFn$_invoke$arity$1 ? tpl.cljs$core$IFn$_invoke$arity$1(G__19063) : tpl.call(null,G__19063));
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(current,cljs.core.conj,e_19073);

var G__19074 = cljs.core.next(seq__19058__$1);
var G__19075 = null;
var G__19076 = (0);
var G__19077 = (0);
seq__19058 = G__19074;
chunk__19059 = G__19075;
count__19060 = G__19076;
i__19061 = G__19077;
continue;
}
} else {
return null;
}
}
break;
}
} else {
if((diff < (0))){
var n__9319__auto__ = (- diff);
var _ = (0);
while(true){
if((_ < n__9319__auto__)){
var e_19078 = cljs.core.peek(cljs.core.deref(current));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.pop);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(on_deck,cljs.core.conj,e_19078);

var G__19079 = (_ + (1));
_ = G__19079;
continue;
} else {
return null;
}
break;
}
} else {
return null;
}
}
});})(current,on_deck,items_seq,ith_item,shift_BANG_))
);

return current;
});
/**
 * Defines a cell whose value is the URI fragment.
 */
hoplon.core.route_cell = (function hoplon$core$route_cell(var_args){
var args__9560__auto__ = [];
var len__9553__auto___19089 = arguments.length;
var i__9554__auto___19090 = (0);
while(true){
if((i__9554__auto___19090 < len__9553__auto___19089)){
args__9560__auto__.push((arguments[i__9554__auto___19090]));

var G__19091 = (i__9554__auto___19090 + (1));
i__9554__auto___19090 = G__19091;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__19081){
var vec__19082 = p__19081;
var default$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19082,(0),null);
var c = javelin.core.cell.cljs$core$IFn$_invoke$arity$1(window.location.hash);
var _ = (function (){var fexpr__19088 = javelin.core.formula.cljs$core$IFn$_invoke$arity$1(((function (c,vec__19082,default$){
return (function (G__19085,G__19087,G__19086){
var or__8274__auto__ = (function (){var and__8262__auto__ = (G__19085.cljs$core$IFn$_invoke$arity$1 ? G__19085.cljs$core$IFn$_invoke$arity$1(G__19086) : G__19085.call(null,G__19086));
if(cljs.core.truth_(and__8262__auto__)){
return G__19086;
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return G__19087;
}
});})(c,vec__19082,default$))
);
return (fexpr__19088.cljs$core$IFn$_invoke$arity$3 ? fexpr__19088.cljs$core$IFn$_invoke$arity$3(cljs.core.seq,default$,c) : fexpr__19088.call(null,cljs.core.seq,default$,c));
})();
window.addEventListener("hashchange",((function (_,c,vec__19082,default$){
return (function (){
return cljs.core.reset_BANG_(c,window.location.hash);
});})(_,c,vec__19082,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq19080){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq19080));
});

