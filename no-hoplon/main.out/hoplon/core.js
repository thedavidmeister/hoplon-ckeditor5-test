// Compiled by ClojureScript 1.9.946 {}
goog.provide('hoplon.core');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('javelin.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('cljs.spec.test.alpha');
goog.require('hoplon.spec');



cljs.core.enable_console_print_BANG_.call(null);
/**
 * Is the application running in a prerendering container (eg. PhantomJS via
 *   the prerender task)?
 */
hoplon.core.prerendering_QMARK_ = (new goog.Uri(window.location.href)).getParameterValue("prerendering");
/**
 * This is an internal implementation detail, exposed for the convenience of
 *   the hoplon.core/static macro. Experimental.
 */
hoplon.core.static_elements = cljs.core.reduce.call(null,(function (p1__14014_SHARP_,p2__14015_SHARP_){
return cljs.core.assoc.call(null,p1__14014_SHARP_,p2__14015_SHARP_.getAttribute("static-id"),p2__14015_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,document.querySelector("[static-id]"));
/**
 * Public helper.
 *   Adds f as a watcher to ref and evaluates (f init @ref) once. The watcher
 *   f is a function of two arguments: the previous and next values. If init is
 *   not provided the default (nil) will be used.
 */
hoplon.core.do_watch = (function hoplon$core$do_watch(var_args){
var G__14017 = arguments.length;
switch (G__14017) {
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
return hoplon.core.do_watch.call(null,ref,null,f);
});

hoplon.core.do_watch.cljs$core$IFn$_invoke$arity$3 = (function (ref,init,f){
var k = cljs.core.gensym.call(null);
f.call(null,init,cljs.core.deref.call(null,ref));

cljs.core.add_watch.call(null,ref,k,((function (k){
return (function (_,___$1,old,new$){
return f.call(null,old,new$);
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
var vec__14019 = cljs.core.reverse.call(null,clojure.string.split.call(null,path,/\//));
var seq__14020 = cljs.core.seq.call(null,vec__14019);
var first__14021 = cljs.core.first.call(null,seq__14020);
var seq__14020__$1 = cljs.core.next.call(null,seq__14020);
var f = first__14021;
var more = seq__14020__$1;
var vec__14022 = clojure.string.split.call(null,f,/\./,(2));
var f1 = cljs.core.nth.call(null,vec__14022,(0),null);
var f2 = cljs.core.nth.call(null,vec__14022,(1),null);
return clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.conj.call(null,more,clojure.string.join.call(null,".",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f1),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1("235e98a1f91a4e3abf93ab1a6cf47e85")].join(''),f2], null)))));
});
/**
 * Public helper.
 *   Class normalization for attribute providers.
 */
hoplon.core.normalize_class = (function hoplon$core$normalize_class(kvs){
var __GT_map = (function (p1__14025_SHARP_){
return cljs.core.zipmap.call(null,p1__14025_SHARP_,cljs.core.repeat.call(null,true));
});
if(cljs.core.map_QMARK_.call(null,kvs)){
return kvs;
} else {
return __GT_map.call(null,((typeof kvs === 'string')?kvs.split(/\s+/):cljs.core.seq.call(null,kvs)));
}
});
hoplon.core.child_vec = (function hoplon$core$child_vec(this$){
var x = this$.childNodes;
var l = x.length;
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
while(true){
var or__8274__auto__ = (function (){var and__8262__auto__ = cljs.core._EQ_.call(null,i,l);
if(and__8262__auto__){
return cljs.core.persistent_BANG_.call(null,ret);
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
var G__14026 = (i + (1));
var G__14027 = cljs.core.conj_BANG_.call(null,ret,x.item(i));
i = G__14026;
ret = G__14027;
continue;
}
break;
}
});
hoplon.core.vflatten = (function hoplon$core$vflatten(var_args){
var G__14029 = arguments.length;
switch (G__14029) {
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
return cljs.core.persistent_BANG_.call(null,hoplon.core.vflatten.call(null,tree,cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY)));
});

hoplon.core.vflatten.cljs$core$IFn$_invoke$arity$2 = (function (tree,ret){
var l = cljs.core.count.call(null,tree);
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,l)){
return ret;
} else {
var x = cljs.core.nth.call(null,tree,i);
if(!(cljs.core.sequential_QMARK_.call(null,x))){
cljs.core.conj_BANG_.call(null,ret,x);
} else {
hoplon.core.vflatten.call(null,x,ret);
}

var G__14031 = (i + (1));
i = G__14031;
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
return m__9008__auto__.call(null,this$);
} else {
var m__9008__auto____$1 = (hoplon.core.node["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"INode.node",this$);
}
}
}
});

goog.object.set(hoplon.core.INode,"string",true);

goog.object.set(hoplon.core.node,"string",(function (this$){
return hoplon.core.$text.call(null,this$);
}));
goog.object.set(hoplon.core.INode,"number",true);

goog.object.set(hoplon.core.node,"number",(function (this$){
return hoplon.core.$text.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)].join(''));
}));
hoplon.core.__GT_node = (function hoplon$core$__GT_node(x){
if(((!((x == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.hoplon$core$INode$)))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x):false)):cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.INode,x))){
return hoplon.core.node.call(null,x);
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
var new$__$1 = cljs.core.mapv.call(null,hoplon.core.__GT_node,cljs.core.reduce.call(null,(function (p1__14034_SHARP_,p2__14033_SHARP_){
if((p2__14033_SHARP_ == null)){
return p1__14034_SHARP_;
} else {
return cljs.core.conj.call(null,p1__14034_SHARP_,p2__14033_SHARP_);
}
}),cljs.core.PersistentVector.EMPTY,hoplon.core.vflatten.call(null,new$)));
var new_QMARK_ = cljs.core.set.call(null,new$__$1);
var G__14041 = new$__$1;
var vec__14043 = G__14041;
var seq__14044 = cljs.core.seq.call(null,vec__14043);
var first__14045 = cljs.core.first.call(null,seq__14044);
var seq__14044__$1 = cljs.core.next.call(null,seq__14044);
var x = first__14045;
var xs = seq__14044__$1;
var G__14042 = hoplon.core.child_vec.call(null,this$);
var vec__14046 = G__14042;
var seq__14047 = cljs.core.seq.call(null,vec__14046);
var first__14048 = cljs.core.first.call(null,seq__14047);
var seq__14047__$1 = cljs.core.next.call(null,seq__14047);
var k = first__14048;
var ks = seq__14047__$1;
var kids = vec__14046;
var G__14041__$1 = G__14041;
var G__14042__$1 = G__14042;
while(true){
var vec__14049 = G__14041__$1;
var seq__14050 = cljs.core.seq.call(null,vec__14049);
var first__14051 = cljs.core.first.call(null,seq__14050);
var seq__14050__$1 = cljs.core.next.call(null,seq__14050);
var x__$1 = first__14051;
var xs__$1 = seq__14050__$1;
var vec__14052 = G__14042__$1;
var seq__14053 = cljs.core.seq.call(null,vec__14052);
var first__14054 = cljs.core.first.call(null,seq__14053);
var seq__14053__$1 = cljs.core.next.call(null,seq__14053);
var k__$1 = first__14054;
var ks__$1 = seq__14053__$1;
var kids__$1 = vec__14052;
if(cljs.core.truth_((function (){var or__8274__auto__ = x__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return k__$1;
}
})())){
var G__14055 = xs__$1;
var G__14056 = ((cljs.core._EQ_.call(null,x__$1,k__$1))?ks__$1:((cljs.core.not.call(null,k__$1))?(function (){var ks__$2 = ks__$1;
hoplon.core.appendChild.call(this$,x__$1);

return ks__$2;
})():((cljs.core.not.call(null,x__$1))?(function (){var ks__$2 = ks__$1;
if(cljs.core.truth_(new_QMARK_.call(null,k__$1))){
} else {
hoplon.core.removeChild.call(this$,k__$1);
}

return ks__$2;
})():(function (){var kids__$2 = kids__$1;
hoplon.core.insertBefore.call(this$,x__$1,k__$1);

return kids__$2;
})()
)));
G__14041__$1 = G__14055;
G__14042__$1 = G__14056;
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
var kids_14057 = cljs.core.atom.call(null,hoplon.core.child_vec.call(null,this$__$1));
this$__$1.hoplonKids = kids_14057;

hoplon.core.do_watch.call(null,kids_14057,cljs.core.partial.call(null,hoplon.core.merge_kids,this$__$1));
}

return this$__$1;
});
hoplon.core.remove_all_kids_BANG_ = (function hoplon$core$remove_all_kids_BANG_(this$){
this$.hoplonKids = null;

return hoplon.core.merge_kids.call(null,this$,null,null);
});
/**
 * Returns true if elem is a native element. Native elements' children
 *   are not managed by Hoplon.
 */
hoplon.core.native_QMARK_ = (function hoplon$core$native_QMARK_(elem){
return ((elem instanceof Element)) && ((elem.hoplonKids == null));
});
hoplon.core.native_node_QMARK_ = (function hoplon$core$native_node_QMARK_(node){
return ((node instanceof Node)) && ((node.hoplonKids == null));
});
/**
 * Returns true if elem is a managed element. Managed elements have
 *   their children managed by Hoplon.
 */
hoplon.core.managed_QMARK_ = (function hoplon$core$managed_QMARK_(elem){
return cljs.core.not.call(null,hoplon.core.native_QMARK_.call(null,elem));
});
/**
 * Appends `child` to `parent` for the case of `parent` being a
 *   managed element.
 */
hoplon.core.managed_append_child = (function hoplon$core$managed_append_child(parent,child,kidfn){
var child__$1 = child;
hoplon.core.ensure_kids_BANG_.call(null,parent);

var kids_14060 = kidfn.call(null,parent);
var i_14061 = cljs.core.count.call(null,cljs.core.deref.call(null,kids_14060));
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,child__$1))){
hoplon.core.do_watch.call(null,child__$1,((function (kids_14060,i_14061,child__$1){
return (function (p1__14059_SHARP_,p2__14058_SHARP_){
return cljs.core.swap_BANG_.call(null,kids_14060,cljs.core.assoc,i_14061,p2__14058_SHARP_);
});})(kids_14060,i_14061,child__$1))
);
} else {
cljs.core.swap_BANG_.call(null,kids_14060,cljs.core.assoc,i_14061,child__$1);
}

return child__$1;
});
hoplon.core.set_appendChild_BANG_ = (function hoplon$core$set_appendChild_BANG_(this$,kidfn){
return this$.appendChild = (function (child){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.native_node_QMARK_.call(null,child))){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_(child.parentNode)){
child.parentNode.removeChild(child);
} else {
}

if(cljs.core.truth_((function (){var and__8262__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.not.call(null,javelin.core.cell_QMARK_.call(null,child));
} else {
return and__8262__auto__;
}
})())){
return hoplon.core.appendChild.call(this$__$1,child);
} else {
if(cljs.core.truth_((function (){var and__8262__auto__ = hoplon.core.native_QMARK_.call(null,this$__$1);
if(cljs.core.truth_(and__8262__auto__)){
return javelin.core.cell_QMARK_.call(null,child);
} else {
return and__8262__auto__;
}
})())){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
if(cljs.core.truth_(hoplon.core.managed_QMARK_.call(null,this$__$1))){
return hoplon.core.managed_append_child.call(null,this$__$1,child,kidfn);
} else {
throw cljs.core.ex_info.call(null,"Unexpected child type",new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"reason","reason",-2070751759),new cljs.core.Keyword("hoplon.core","unexpected-child-type","hoplon.core/unexpected-child-type",1756641127),new cljs.core.Keyword(null,"child","child",623967545),child,new cljs.core.Keyword(null,"native?","native?",-1916990868),hoplon.core.native_QMARK_.call(null,child),new cljs.core.Keyword(null,"managed?","managed?",-1222195407),hoplon.core.managed_QMARK_.call(null,child),new cljs.core.Keyword(null,"this","this",-611633625),this$__$1], null));

}
}
}
}
});
});
hoplon.core.set_removeChild_BANG_ = (function hoplon$core$set_removeChild_BANG_(this$,kidfn){
return this$.removeChild = (function (x){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.native_node_QMARK_.call(null,x))){
return hoplon.core.removeChild.call(this$__$1,x);
} else {
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__14062_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.remove.call(null,cljs.core.partial.call(null,cljs.core._EQ_,x__$1),p1__14062_SHARP_));
});})(x__$1,this$__$1))
);

return x__$1;
}
});
});
hoplon.core.set_insertBefore_BANG_ = (function hoplon$core$set_insertBefore_BANG_(this$,kidfn){
return this$.insertBefore = (function (x,y){
var this$__$1 = this;
console.log(x,y);

cljs.core.prn.call(null,"ib*",hoplon.core.native_node_QMARK_.call(null,x),(cljs.core.truth_(x)?x.hoplonKids:null),(cljs.core.truth_(x)?(x instanceof Node):null),hoplon.core.native_node_QMARK_.call(null,y),(cljs.core.truth_(y)?y.hoplonKids:null),(cljs.core.truth_(y)?(y instanceof Node):null));

if(cljs.core.truth_((function (){var and__8262__auto__ = hoplon.core.native_node_QMARK_.call(null,x);
if(cljs.core.truth_(and__8262__auto__)){
return hoplon.core.native_node_QMARK_.call(null,y);
} else {
return and__8262__auto__;
}
})())){
cljs.core.prn.call(null,"ib");

return hoplon.core.insertBefore.call(this$__$1,x,y);
} else {
var x__$1 = x;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

if(cljs.core.not.call(null,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),cljs.core.conj,x__$1);
} else {
if(cljs.core.not_EQ_.call(null,x__$1,y)){
cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (x__$1,this$__$1){
return (function (p1__14063_SHARP_){
return cljs.core.vec.call(null,cljs.core.mapcat.call(null,((function (x__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x__$1,z], null);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [z], null);
}
});})(x__$1,this$__$1))
,p1__14063_SHARP_));
});})(x__$1,this$__$1))
);
} else {
}
}

return x__$1;
}
});
});
hoplon.core.set_replaceChild_BANG_ = (function hoplon$core$set_replaceChild_BANG_(this$,kidfn){
return this$.replaceChild = (function (x,y){
var this$__$1 = this;
if(cljs.core.truth_((function (){var and__8262__auto__ = hoplon.core.native_node_QMARK_.call(null,x);
if(cljs.core.truth_(and__8262__auto__)){
return hoplon.core.native_node_QMARK_.call(null,y);
} else {
return and__8262__auto__;
}
})())){
return hoplon.core.replaceChild.call(this$__$1,x,y);
} else {
var y__$1 = y;
hoplon.core.ensure_kids_BANG_.call(null,this$__$1);

cljs.core.swap_BANG_.call(null,kidfn.call(null,this$__$1),((function (y__$1,this$__$1){
return (function (p1__14064_SHARP_){
return cljs.core.mapv.call(null,((function (y__$1,this$__$1){
return (function (z){
if(cljs.core._EQ_.call(null,z,y__$1)){
return x;
} else {
return z;
}
});})(y__$1,this$__$1))
,p1__14064_SHARP_);
});})(y__$1,this$__$1))
);

return y__$1;
}
});
});
hoplon.core.set_setAttribute_BANG_ = (function hoplon$core$set_setAttribute_BANG_(this$,attrfn){
return this$.setAttribute = (function (k,v){
var this$__$1 = this;
if(cljs.core.truth_(hoplon.core.native_node_QMARK_.call(null,this$__$1))){
return hoplon.core.setAttribute.call(this$__$1,k,v);
} else {
var _ = undefined;
var kk_14065 = cljs.core.keyword.call(null,k);
var attr_14066 = attrfn.call(null,this$__$1);
var has_QMARK__14067 = (function (){var and__8262__auto__ = attr_14066;
if(cljs.core.truth_(and__8262__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,attr_14066),kk_14065);
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(has_QMARK__14067)){
cljs.core.swap_BANG_.call(null,attr_14066,cljs.core.assoc,kk_14065,v);
} else {
hoplon.core.setAttribute.call(this$__$1,k,v);
}

return _;
}
});
});
hoplon.core.set_appendChild_BANG_.call(null,Element.prototype,(function (p1__14068_SHARP_){
return p1__14068_SHARP_.hoplonKids;
}));
hoplon.core.set_removeChild_BANG_.call(null,Element.prototype,(function (p1__14069_SHARP_){
return p1__14069_SHARP_.hoplonKids;
}));
hoplon.core.set_insertBefore_BANG_.call(null,Element.prototype,(function (p1__14070_SHARP_){
return p1__14070_SHARP_.hoplonKids;
}));
hoplon.core.set_replaceChild_BANG_.call(null,Element.prototype,(function (p1__14071_SHARP_){
return p1__14071_SHARP_.hoplonKids;
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
return m__9008__auto__.call(null,this$,kvs);
} else {
var m__9008__auto____$1 = (hoplon.core._set_attributes_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-set-attributes!",this$);
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
return m__9008__auto__.call(null,this$,kvs);
} else {
var m__9008__auto____$1 = (hoplon.core._set_styles_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$,kvs);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-set-styles!",this$);
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
return m__9008__auto__.call(null,this$,child);
} else {
var m__9008__auto____$1 = (hoplon.core._append_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-append-child!",this$);
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
return m__9008__auto__.call(null,this$,child);
} else {
var m__9008__auto____$1 = (hoplon.core._remove_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$,child);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-remove-child!",this$);
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
return m__9008__auto__.call(null,this$,new$,existing);
} else {
var m__9008__auto____$1 = (hoplon.core._replace_child_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-replace-child!",this$);
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
return m__9008__auto__.call(null,this$,new$,existing);
} else {
var m__9008__auto____$1 = (hoplon.core._insert_before_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$,new$,existing);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonElement.-insert-before!",this$);
}
}
}
});

hoplon.core.set_attributes_BANG_ = (function hoplon$core$set_attributes_BANG_(var_args){
var G__14077 = arguments.length;
switch (G__14077) {
case 2:
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___14079 = arguments.length;
var i__9554__auto___14080 = (0);
while(true){
if((i__9554__auto___14080 < len__9553__auto___14079)){
args_arr__9576__auto__.push((arguments[i__9554__auto___14080]));

var G__14081 = (i__9554__auto___14080 + (1));
i__9554__auto___14080 = G__14081;
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
return hoplon.core._set_attributes_BANG_.call(null,this$,kvs);
});

hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_attributes_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_attributes_BANG_.cljs$lang$applyTo = (function (seq14073){
var G__14074 = cljs.core.first.call(null,seq14073);
var seq14073__$1 = cljs.core.next.call(null,seq14073);
var G__14075 = cljs.core.first.call(null,seq14073__$1);
var seq14073__$2 = cljs.core.next.call(null,seq14073__$1);
var G__14076 = cljs.core.first.call(null,seq14073__$2);
var seq14073__$3 = cljs.core.next.call(null,seq14073__$2);
return hoplon.core.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14074,G__14075,G__14076,seq14073__$3);
});

hoplon.core.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.set_styles_BANG_ = (function hoplon$core$set_styles_BANG_(var_args){
var G__14087 = arguments.length;
switch (G__14087) {
case 2:
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___14089 = arguments.length;
var i__9554__auto___14090 = (0);
while(true){
if((i__9554__auto___14090 < len__9553__auto___14089)){
args_arr__9576__auto__.push((arguments[i__9554__auto___14090]));

var G__14091 = (i__9554__auto___14090 + (1));
i__9554__auto___14090 = G__14091;
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
return hoplon.core._set_styles_BANG_.call(null,this$,kvs);
});

hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.core.set_styles_BANG_.call(null,this$,cljs.core.apply.call(null,cljs.core.hash_map,k,v,kvs));
});

hoplon.core.set_styles_BANG_.cljs$lang$applyTo = (function (seq14083){
var G__14084 = cljs.core.first.call(null,seq14083);
var seq14083__$1 = cljs.core.next.call(null,seq14083);
var G__14085 = cljs.core.first.call(null,seq14083__$1);
var seq14083__$2 = cljs.core.next.call(null,seq14083__$1);
var G__14086 = cljs.core.first.call(null,seq14083__$2);
var seq14083__$3 = cljs.core.next.call(null,seq14083__$2);
return hoplon.core.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14084,G__14085,G__14086,seq14083__$3);
});

hoplon.core.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.core.append_child_BANG_ = (function hoplon$core$append_child_BANG_(this$,child){
return hoplon.core._append_child_BANG_.call(null,this$,child);
});
hoplon.core.remove_child_BANG_ = (function hoplon$core$remove_child_BANG_(this$,child){
return hoplon.core._remove_child_BANG_.call(null,this$,child);
});
hoplon.core.replace_child_BANG_ = (function hoplon$core$replace_child_BANG_(this$,new$,existing){
return hoplon.core._replace_child_BANG_.call(null,this$,new$,existing);
});
hoplon.core.insert_before_BANG_ = (function hoplon$core$insert_before_BANG_(this$,new$,existing){
return hoplon.core._insert_before_BANG_.call(null,this$,new$,existing);
});
hoplon.core._do_BANG_ = (function hoplon$core$_do_BANG_(elem,this$,value){
return hoplon.core.do_BANG_.call(null,elem,this$,value);
});
hoplon.core._on_BANG_ = (function hoplon$core$_on_BANG_(elem,this$,value){
return hoplon.core.on_BANG_.call(null,elem,this$,value);
});
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),null,null),new cljs.core.Keyword("hoplon.spec","do!","hoplon.spec/do!",1986315672),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","fspec","cljs.spec.alpha/fspec",-1289128341,null),new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null)),cljs.spec.alpha.fspec_impl.call(null,cljs.spec.alpha.spec_impl.call(null,new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),null,null),new cljs.core.Keyword("hoplon.spec","on!","hoplon.spec/on!",276026762),cljs.spec.alpha.spec_impl.call(null,new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_,null,null),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),null,null,null));
hoplon.core.spec_BANG_ = (function hoplon$core$spec_BANG_(){
var opts14094_14108 = null;
cljs.core.reduce.call(null,((function (opts14094_14108){
return (function (ret__13210__auto__,p__14095){
var vec__14096 = p__14095;
var ___13211__auto__ = cljs.core.nth.call(null,vec__14096,(0),null);
var f__13212__auto__ = cljs.core.nth.call(null,vec__14096,(1),null);
var sym__13213__auto__ = f__13212__auto__.call(null);
var G__14099 = ret__13210__auto__;
if(cljs.core.truth_(sym__13213__auto__)){
return cljs.core.conj.call(null,G__14099,sym__13213__auto__);
} else {
return G__14099;
}
});})(opts14094_14108))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts14094_14108){
return (function (p1__13209__13214__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts14094_14108).call(null,cljs.core.first.call(null,p1__13209__13214__auto__));
});})(opts14094_14108))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14094_14108){
return (function (){
var checked__13178__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,hoplon.core._do_BANG_,new cljs.core.Var(function(){return hoplon.core._do_BANG_;},new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hoplon.core","hoplon.core",-481580437,null),new cljs.core.Symbol(null,"-do!","-do!",973867495,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-ckeditor5-test/1ni/-e6q9ll/main.out/hoplon/core.cljs",11,1,322,322,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(hoplon.core._do_BANG_)?hoplon.core._do_BANG_.cljs$lang$test:null)])),opts14094_14108);
if(cljs.core.truth_(checked__13178__auto__)){
hoplon.core._do_BANG_ = checked__13178__auto__;
} else {
}

return new cljs.core.Symbol("hoplon.core","-do!","hoplon.core/-do!",-218341060,null);
});})(opts14094_14108))
], null)))));

var opts14102 = null;
return cljs.core.reduce.call(null,((function (opts14102){
return (function (ret__13210__auto__,p__14103){
var vec__14104 = p__14103;
var ___13211__auto__ = cljs.core.nth.call(null,vec__14104,(0),null);
var f__13212__auto__ = cljs.core.nth.call(null,vec__14104,(1),null);
var sym__13213__auto__ = f__13212__auto__.call(null);
var G__14107 = ret__13210__auto__;
if(cljs.core.truth_(sym__13213__auto__)){
return cljs.core.conj.call(null,G__14107,sym__13213__auto__);
} else {
return G__14107;
}
});})(opts14102))
,cljs.core.PersistentVector.EMPTY,cljs.spec.test.alpha.distinct_by.call(null,cljs.core.first,cljs.core.filter.call(null,((function (opts14102){
return (function (p1__13209__13214__auto__){
return cljs.spec.test.alpha.instrumentable_syms.call(null,opts14102).call(null,cljs.core.first.call(null,p1__13209__13214__auto__));
});})(opts14102))
,cljs.core.zipmap.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (opts14102){
return (function (){
var checked__13178__auto__ = cljs.spec.test.alpha.instrument_1_STAR_.call(null,hoplon.core._on_BANG_,new cljs.core.Var(function(){return hoplon.core._on_BANG_;},new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"hoplon.core","hoplon.core",-481580437,null),new cljs.core.Symbol(null,"-on!","-on!",900033004,null),"/Users/davidmeister/.boot/cache/tmp/Users/davidmeister/hoplon-ckeditor5-test/1ni/-e6q9ll/main.out/hoplon/core.cljs",11,1,325,325,cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"elem","elem",-2035804713,null),new cljs.core.Symbol(null,"this","this",1028897902,null),new cljs.core.Symbol(null,"value","value",1946509744,null)], null)),null,(cljs.core.truth_(hoplon.core._on_BANG_)?hoplon.core._on_BANG_.cljs$lang$test:null)])),opts14102);
if(cljs.core.truth_(checked__13178__auto__)){
hoplon.core._on_BANG_ = checked__13178__auto__;
} else {
}

return new cljs.core.Symbol("hoplon.core","-on!","hoplon.core/-on!",-229293767,null);
});})(opts14102))
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
return m__9008__auto__.call(null,this$,elem,value);
} else {
var m__9008__auto____$1 = (hoplon.core._attr_BANG_["_"]);
if(!((m__9008__auto____$1 == null))){
return m__9008__auto____$1.call(null,this$,elem,value);
} else {
throw cljs.core.missing_protocol.call(null,"IHoplonAttribute.-attr!",this$);
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
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.IHoplonAttribute,this$);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,hoplon.core.IHoplonAttribute,this$);
}
});
cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.hoplon$core$IHoplonAttribute$_attr_BANG_$arity$3 = (function (this$,elem,value){
var this$__$1 = this;
if(cljs.core.truth_(javelin.core.cell_QMARK_.call(null,value))){
return hoplon.core.do_watch.call(null,value,((function (this$__$1){
return (function (p1__14111_SHARP_,p2__14110_SHARP_){
return hoplon.core._do_BANG_.call(null,elem,this$__$1,p2__14110_SHARP_);
});})(this$__$1))
);
} else {
if(cljs.core.fn_QMARK_.call(null,value)){
return hoplon.core._on_BANG_.call(null,elem,this$__$1,value);
} else {
return hoplon.core._do_BANG_.call(null,elem,this$__$1,value);

}
}
});
/**
 * Executes a fuction after a delay, if no delay is passed, 0 is used as a default.
 */
hoplon.core.timeout = (function hoplon$core$timeout(var_args){
var G__14113 = arguments.length;
switch (G__14113) {
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
return hoplon.core.timeout.call(null,f,(0));
});

hoplon.core.timeout.cljs$core$IFn$_invoke$arity$2 = (function (f,t){
return window.setTimeout(f,t);
});

hoplon.core.timeout.cljs$lang$maxFixedArity = 2;

hoplon.core.when_dom = (function hoplon$core$when_dom(this$,f){
if(!((this$ instanceof Element))){
return setTimeout((function (){
return f.call(null);
}),(0));
} else {
var temp__5455__auto__ = goog.object.get(this$,"_hoplonWhenDom");
if(cljs.core.truth_(temp__5455__auto__)){
var v = temp__5455__auto__;
return v.push(f);
} else {
goog.object.set(this$,"_hoplonWhenDom",[f]);

return setTimeout(((function (temp__5455__auto__){
return (function (){
return ((function (temp__5455__auto__){
return (function hoplon$core$when_dom_$_doit(){
if(cljs.core.not.call(null,document.documentElement.contains(this$))){
return setTimeout(((function (temp__5455__auto__){
return (function (){
return hoplon$core$when_dom_$_doit.call(null);
});})(temp__5455__auto__))
,(20));
} else {
var seq__14115_14119 = cljs.core.seq.call(null,goog.object.get(this$,"_hoplonWhenDom"));
var chunk__14116_14120 = null;
var count__14117_14121 = (0);
var i__14118_14122 = (0);
while(true){
if((i__14118_14122 < count__14117_14121)){
var f_14123__$1 = cljs.core._nth.call(null,chunk__14116_14120,i__14118_14122);
f_14123__$1.call(null);

var G__14124 = seq__14115_14119;
var G__14125 = chunk__14116_14120;
var G__14126 = count__14117_14121;
var G__14127 = (i__14118_14122 + (1));
seq__14115_14119 = G__14124;
chunk__14116_14120 = G__14125;
count__14117_14121 = G__14126;
i__14118_14122 = G__14127;
continue;
} else {
var temp__5457__auto___14128 = cljs.core.seq.call(null,seq__14115_14119);
if(temp__5457__auto___14128){
var seq__14115_14129__$1 = temp__5457__auto___14128;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14115_14129__$1)){
var c__9205__auto___14130 = cljs.core.chunk_first.call(null,seq__14115_14129__$1);
var G__14131 = cljs.core.chunk_rest.call(null,seq__14115_14129__$1);
var G__14132 = c__9205__auto___14130;
var G__14133 = cljs.core.count.call(null,c__9205__auto___14130);
var G__14134 = (0);
seq__14115_14119 = G__14131;
chunk__14116_14120 = G__14132;
count__14117_14121 = G__14133;
i__14118_14122 = G__14134;
continue;
} else {
var f_14135__$1 = cljs.core.first.call(null,seq__14115_14129__$1);
f_14135__$1.call(null);

var G__14136 = cljs.core.next.call(null,seq__14115_14129__$1);
var G__14137 = null;
var G__14138 = (0);
var G__14139 = (0);
seq__14115_14119 = G__14136;
chunk__14116_14120 = G__14137;
count__14117_14121 = G__14138;
i__14118_14122 = G__14139;
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
.call(null);
});})(temp__5455__auto__))
,(0));
}
}
});
hoplon.core.parse_args = (function hoplon$core$parse_args(args){
var attr = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
var kids = cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
var G__14148 = args;
var vec__14149 = G__14148;
var seq__14150 = cljs.core.seq.call(null,vec__14149);
var first__14151 = cljs.core.first.call(null,seq__14150);
var seq__14150__$1 = cljs.core.next.call(null,seq__14150);
var arg = first__14151;
var args__$1 = seq__14150__$1;
var attr__$1 = attr;
var kids__$1 = kids;
var G__14148__$1 = G__14148;
while(true){
var attr__$2 = attr__$1;
var kids__$2 = kids__$1;
var vec__14152 = G__14148__$1;
var seq__14153 = cljs.core.seq.call(null,vec__14152);
var first__14154 = cljs.core.first.call(null,seq__14153);
var seq__14153__$1 = cljs.core.next.call(null,seq__14153);
var arg__$1 = first__14154;
var args__$2 = seq__14153__$1;
if(cljs.core.not.call(null,(function (){var or__8274__auto__ = arg__$1;
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return args__$2;
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.persistent_BANG_.call(null,attr__$2),cljs.core.persistent_BANG_.call(null,kids__$2)], null);
} else {
if(cljs.core.map_QMARK_.call(null,arg__$1)){
var G__14155 = cljs.core.reduce_kv.call(null,((function (attr__$1,kids__$1,G__14148__$1,attr__$2,kids__$2,vec__14152,seq__14153,first__14154,seq__14153__$1,arg__$1,args__$2,attr,kids,G__14148,vec__14149,seq__14150,first__14151,seq__14150__$1,arg,args__$1){
return (function (p1__14140_SHARP_,p2__14141_SHARP_,p3__14142_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__14140_SHARP_,p2__14141_SHARP_,p3__14142_SHARP_);
});})(attr__$1,kids__$1,G__14148__$1,attr__$2,kids__$2,vec__14152,seq__14153,first__14154,seq__14153__$1,arg__$1,args__$2,attr,kids,G__14148,vec__14149,seq__14150,first__14151,seq__14150__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14156 = kids__$2;
var G__14157 = args__$2;
attr__$1 = G__14155;
kids__$1 = G__14156;
G__14148__$1 = G__14157;
continue;
} else {
if(cljs.core.set_QMARK_.call(null,arg__$1)){
var G__14158 = cljs.core.reduce.call(null,((function (attr__$1,kids__$1,G__14148__$1,attr__$2,kids__$2,vec__14152,seq__14153,first__14154,seq__14153__$1,arg__$1,args__$2,attr,kids,G__14148,vec__14149,seq__14150,first__14151,seq__14150__$1,arg,args__$1){
return (function (p1__14143_SHARP_,p2__14144_SHARP_){
return cljs.core.assoc_BANG_.call(null,p1__14143_SHARP_,p2__14144_SHARP_,true);
});})(attr__$1,kids__$1,G__14148__$1,attr__$2,kids__$2,vec__14152,seq__14153,first__14154,seq__14153__$1,arg__$1,args__$2,attr,kids,G__14148,vec__14149,seq__14150,first__14151,seq__14150__$1,arg,args__$1))
,attr__$2,arg__$1);
var G__14159 = kids__$2;
var G__14160 = args__$2;
attr__$1 = G__14158;
kids__$1 = G__14159;
G__14148__$1 = G__14160;
continue;
} else {
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,arg__$1))){
var G__14161 = cljs.core.assoc_BANG_.call(null,attr__$2,arg__$1,cljs.core.first.call(null,args__$2));
var G__14162 = kids__$2;
var G__14163 = cljs.core.rest.call(null,args__$2);
attr__$1 = G__14161;
kids__$1 = G__14162;
G__14148__$1 = G__14163;
continue;
} else {
if(cljs.core.seq_QMARK_.call(null,arg__$1)){
var G__14164 = attr__$2;
var G__14165 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__14166 = args__$2;
attr__$1 = G__14164;
kids__$1 = G__14165;
G__14148__$1 = G__14166;
continue;
} else {
if(cljs.core.vector_QMARK_.call(null,arg__$1)){
var G__14167 = attr__$2;
var G__14168 = cljs.core.reduce.call(null,cljs.core.conj_BANG_,kids__$2,hoplon.core.vflatten.call(null,arg__$1));
var G__14169 = args__$2;
attr__$1 = G__14167;
kids__$1 = G__14168;
G__14148__$1 = G__14169;
continue;
} else {
var G__14170 = attr__$2;
var G__14171 = cljs.core.conj_BANG_.call(null,kids__$2,arg__$1);
var G__14172 = args__$2;
attr__$1 = G__14170;
kids__$1 = G__14171;
G__14148__$1 = G__14172;
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
return cljs.core.reduce_kv.call(null,(function (p1__14174_SHARP_,p2__14173_SHARP_,p3__14175_SHARP_){
hoplon.core._attr_BANG_.call(null,p2__14173_SHARP_,p1__14174_SHARP_,p3__14175_SHARP_);

return p1__14174_SHARP_;
}),this$,attr);
});
hoplon.core.add_children_BANG_ = (function hoplon$core$add_children_BANG_(this$,p__14176){
var vec__14177 = p__14176;
var seq__14178 = cljs.core.seq.call(null,vec__14177);
var first__14179 = cljs.core.first.call(null,seq__14178);
var seq__14178__$1 = cljs.core.next.call(null,seq__14178);
var child_cell = first__14179;
var _ = seq__14178__$1;
var kids = vec__14177;
var this$__$1 = this$;
var seq__14180_14184 = cljs.core.seq.call(null,hoplon.core.vflatten.call(null,kids));
var chunk__14181_14185 = null;
var count__14182_14186 = (0);
var i__14183_14187 = (0);
while(true){
if((i__14183_14187 < count__14182_14186)){
var x_14188 = cljs.core._nth.call(null,chunk__14181_14185,i__14183_14187);
var temp__5457__auto___14189 = hoplon.core.__GT_node.call(null,x_14188);
if(cljs.core.truth_(temp__5457__auto___14189)){
var x_14190__$1 = temp__5457__auto___14189;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_14190__$1);
} else {
}

var G__14191 = seq__14180_14184;
var G__14192 = chunk__14181_14185;
var G__14193 = count__14182_14186;
var G__14194 = (i__14183_14187 + (1));
seq__14180_14184 = G__14191;
chunk__14181_14185 = G__14192;
count__14182_14186 = G__14193;
i__14183_14187 = G__14194;
continue;
} else {
var temp__5457__auto___14195 = cljs.core.seq.call(null,seq__14180_14184);
if(temp__5457__auto___14195){
var seq__14180_14196__$1 = temp__5457__auto___14195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14180_14196__$1)){
var c__9205__auto___14197 = cljs.core.chunk_first.call(null,seq__14180_14196__$1);
var G__14198 = cljs.core.chunk_rest.call(null,seq__14180_14196__$1);
var G__14199 = c__9205__auto___14197;
var G__14200 = cljs.core.count.call(null,c__9205__auto___14197);
var G__14201 = (0);
seq__14180_14184 = G__14198;
chunk__14181_14185 = G__14199;
count__14182_14186 = G__14200;
i__14183_14187 = G__14201;
continue;
} else {
var x_14202 = cljs.core.first.call(null,seq__14180_14196__$1);
var temp__5457__auto___14203__$1 = hoplon.core.__GT_node.call(null,x_14202);
if(cljs.core.truth_(temp__5457__auto___14203__$1)){
var x_14204__$1 = temp__5457__auto___14203__$1;
hoplon.core.append_child_BANG_.call(null,this$__$1,x_14204__$1);
} else {
}

var G__14205 = cljs.core.next.call(null,seq__14180_14196__$1);
var G__14206 = null;
var G__14207 = (0);
var G__14208 = (0);
seq__14180_14184 = G__14205;
chunk__14181_14185 = G__14206;
count__14182_14186 = G__14207;
i__14183_14187 = G__14208;
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
var len__9553__auto___14215 = arguments.length;
var i__9554__auto___14216 = (0);
while(true){
if((i__9554__auto___14216 < len__9553__auto___14215)){
args__9560__auto__.push((arguments[i__9554__auto___14216]));

var G__14217 = (i__9554__auto___14216 + (1));
i__9554__auto___14216 = G__14217;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((1) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((1)),(0),null)):null);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__9561__auto__);
});

hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,args){
var vec__14211 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__14211,(0),null);
var kids = cljs.core.nth.call(null,vec__14211,(1),null);
var G__14214 = this$;
hoplon.core.add_attributes_BANG_.call(null,G__14214,attr);

hoplon.core.add_children_BANG_.call(null,G__14214,kids);

return G__14214;
});

hoplon.core.invoke_BANG_.cljs$lang$maxFixedArity = (1);

hoplon.core.invoke_BANG_.cljs$lang$applyTo = (function (seq14209){
var G__14210 = cljs.core.first.call(null,seq14209);
var seq14209__$1 = cljs.core.next.call(null,seq14209);
return hoplon.core.invoke_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14210,seq14209__$1);
});

hoplon.core.lookup_BANG_ = (function hoplon$core$lookup_BANG_(var_args){
var G__14219 = arguments.length;
switch (G__14219) {
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
if(cljs.core.truth_(hoplon.core.attribute_QMARK_.call(null,k))){
return this$.getAttribute(cljs.core.name.call(null,k));
} else {
return goog.object.get(this$.children,k);

}
});

hoplon.core.lookup_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,k,not_found){
var or__8274__auto__ = hoplon.core.lookup_BANG_.call(null,this$,k);
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
return cljs.core.write_all.call(null,writer,"#<Element: ",this$__$1.tagName,">");
});

Element.prototype.cljs$core$IFn$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.call = (function() {
var G__14244 = null;
var G__14244__1 = (function (self__){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$);
});
var G__14244__2 = (function (self__,a){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a);
});
var G__14244__3 = (function (self__,a,b){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b);
});
var G__14244__4 = (function (self__,a,b,c){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c);
});
var G__14244__5 = (function (self__,a,b,c,d){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d);
});
var G__14244__6 = (function (self__,a,b,c,d,e){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e);
});
var G__14244__7 = (function (self__,a,b,c,d,e,f){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f);
});
var G__14244__8 = (function (self__,a,b,c,d,e,f,g){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g);
});
var G__14244__9 = (function (self__,a,b,c,d,e,f,g,h){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h);
});
var G__14244__10 = (function (self__,a,b,c,d,e,f,g,h,i){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i);
});
var G__14244__11 = (function (self__,a,b,c,d,e,f,g,h,i,j){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j);
});
var G__14244__12 = (function (self__,a,b,c,d,e,f,g,h,i,j,k){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
});
var G__14244__13 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
});
var G__14244__14 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
});
var G__14244__15 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});
var G__14244__16 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});
var G__14244__17 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});
var G__14244__18 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});
var G__14244__19 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});
var G__14244__20 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});
var G__14244__21 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});
var G__14244__22 = (function (self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var self____$1 = this;
var this$ = self____$1;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});
G__14244 = function(self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
switch(arguments.length){
case 1:
return G__14244__1.call(this,self__);
case 2:
return G__14244__2.call(this,self__,a);
case 3:
return G__14244__3.call(this,self__,a,b);
case 4:
return G__14244__4.call(this,self__,a,b,c);
case 5:
return G__14244__5.call(this,self__,a,b,c,d);
case 6:
return G__14244__6.call(this,self__,a,b,c,d,e);
case 7:
return G__14244__7.call(this,self__,a,b,c,d,e,f);
case 8:
return G__14244__8.call(this,self__,a,b,c,d,e,f,g);
case 9:
return G__14244__9.call(this,self__,a,b,c,d,e,f,g,h);
case 10:
return G__14244__10.call(this,self__,a,b,c,d,e,f,g,h,i);
case 11:
return G__14244__11.call(this,self__,a,b,c,d,e,f,g,h,i,j);
case 12:
return G__14244__12.call(this,self__,a,b,c,d,e,f,g,h,i,j,k);
case 13:
return G__14244__13.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l);
case 14:
return G__14244__14.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m);
case 15:
return G__14244__15.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
case 16:
return G__14244__16.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
case 17:
return G__14244__17.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
case 18:
return G__14244__18.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
case 19:
return G__14244__19.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
case 20:
return G__14244__20.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
case 21:
return G__14244__21.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
case 22:
return G__14244__22.call(this,self__,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__14244.cljs$core$IFn$_invoke$arity$1 = G__14244__1;
G__14244.cljs$core$IFn$_invoke$arity$2 = G__14244__2;
G__14244.cljs$core$IFn$_invoke$arity$3 = G__14244__3;
G__14244.cljs$core$IFn$_invoke$arity$4 = G__14244__4;
G__14244.cljs$core$IFn$_invoke$arity$5 = G__14244__5;
G__14244.cljs$core$IFn$_invoke$arity$6 = G__14244__6;
G__14244.cljs$core$IFn$_invoke$arity$7 = G__14244__7;
G__14244.cljs$core$IFn$_invoke$arity$8 = G__14244__8;
G__14244.cljs$core$IFn$_invoke$arity$9 = G__14244__9;
G__14244.cljs$core$IFn$_invoke$arity$10 = G__14244__10;
G__14244.cljs$core$IFn$_invoke$arity$11 = G__14244__11;
G__14244.cljs$core$IFn$_invoke$arity$12 = G__14244__12;
G__14244.cljs$core$IFn$_invoke$arity$13 = G__14244__13;
G__14244.cljs$core$IFn$_invoke$arity$14 = G__14244__14;
G__14244.cljs$core$IFn$_invoke$arity$15 = G__14244__15;
G__14244.cljs$core$IFn$_invoke$arity$16 = G__14244__16;
G__14244.cljs$core$IFn$_invoke$arity$17 = G__14244__17;
G__14244.cljs$core$IFn$_invoke$arity$18 = G__14244__18;
G__14244.cljs$core$IFn$_invoke$arity$19 = G__14244__19;
G__14244.cljs$core$IFn$_invoke$arity$20 = G__14244__20;
G__14244.cljs$core$IFn$_invoke$arity$21 = G__14244__21;
G__14244.cljs$core$IFn$_invoke$arity$22 = G__14244__22;
return G__14244;
})()
;

Element.prototype.apply = (function (self__,args14221){
var self____$1 = this;
return self____$1.call.apply(self____$1,[self____$1].concat(cljs.core.aclone.call(null,args14221)));
});

Element.prototype.cljs$core$IFn$_invoke$arity$0 = (function (){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$);
});

Element.prototype.cljs$core$IFn$_invoke$arity$1 = (function (a){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a);
});

Element.prototype.cljs$core$IFn$_invoke$arity$2 = (function (a,b){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b);
});

Element.prototype.cljs$core$IFn$_invoke$arity$3 = (function (a,b,c){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c);
});

Element.prototype.cljs$core$IFn$_invoke$arity$4 = (function (a,b,c,d){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d);
});

Element.prototype.cljs$core$IFn$_invoke$arity$5 = (function (a,b,c,d,e){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e);
});

Element.prototype.cljs$core$IFn$_invoke$arity$6 = (function (a,b,c,d,e,f){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f);
});

Element.prototype.cljs$core$IFn$_invoke$arity$7 = (function (a,b,c,d,e,f,g){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g);
});

Element.prototype.cljs$core$IFn$_invoke$arity$8 = (function (a,b,c,d,e,f,g,h){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h);
});

Element.prototype.cljs$core$IFn$_invoke$arity$9 = (function (a,b,c,d,e,f,g,h,i){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i);
});

Element.prototype.cljs$core$IFn$_invoke$arity$10 = (function (a,b,c,d,e,f,g,h,i,j){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j);
});

Element.prototype.cljs$core$IFn$_invoke$arity$11 = (function (a,b,c,d,e,f,g,h,i,j,k){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k);
});

Element.prototype.cljs$core$IFn$_invoke$arity$12 = (function (a,b,c,d,e,f,g,h,i,j,k,l){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l);
});

Element.prototype.cljs$core$IFn$_invoke$arity$13 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m);
});

Element.prototype.cljs$core$IFn$_invoke$arity$14 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n);
});

Element.prototype.cljs$core$IFn$_invoke$arity$15 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o);
});

Element.prototype.cljs$core$IFn$_invoke$arity$16 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p);
});

Element.prototype.cljs$core$IFn$_invoke$arity$17 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q);
});

Element.prototype.cljs$core$IFn$_invoke$arity$18 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r);
});

Element.prototype.cljs$core$IFn$_invoke$arity$19 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s);
});

Element.prototype.cljs$core$IFn$_invoke$arity$20 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t);
});

Element.prototype.cljs$core$IFn$_invoke$arity$21 = (function (a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest){
var this$ = this;
return hoplon.core.invoke_BANG_.call(null,this$,a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,rest);
});

Element.prototype.cljs$core$ILookup$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this$,k){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.call(null,this$__$1,k);
});

Element.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this$,k,not_found){
var this$__$1 = this;
return hoplon.core.lookup_BANG_.call(null,this$__$1,k,not_found);
});

Element.prototype.hoplon$core$IHoplonElement$ = cljs.core.PROTOCOL_SENTINEL;

Element.prototype.hoplon$core$IHoplonElement$_set_attributes_BANG_$arity$2 = (function (this$,kvs){
var this$__$1 = this;
var e = this$__$1;
var seq__14222 = cljs.core.seq.call(null,kvs);
var chunk__14224 = null;
var count__14225 = (0);
var i__14226 = (0);
while(true){
if((i__14226 < count__14225)){
var vec__14228 = cljs.core._nth.call(null,chunk__14224,i__14226);
var k = cljs.core.nth.call(null,vec__14228,(0),null);
var v = cljs.core.nth.call(null,vec__14228,(1),null);
var k_14245__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_14245__$1);
} else {
e.setAttribute(k_14245__$1,((cljs.core._EQ_.call(null,true,v))?k_14245__$1:v));
}

var G__14246 = seq__14222;
var G__14247 = chunk__14224;
var G__14248 = count__14225;
var G__14249 = (i__14226 + (1));
seq__14222 = G__14246;
chunk__14224 = G__14247;
count__14225 = G__14248;
i__14226 = G__14249;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14222);
if(temp__5457__auto__){
var seq__14222__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14222__$1)){
var c__9205__auto__ = cljs.core.chunk_first.call(null,seq__14222__$1);
var G__14250 = cljs.core.chunk_rest.call(null,seq__14222__$1);
var G__14251 = c__9205__auto__;
var G__14252 = cljs.core.count.call(null,c__9205__auto__);
var G__14253 = (0);
seq__14222 = G__14250;
chunk__14224 = G__14251;
count__14225 = G__14252;
i__14226 = G__14253;
continue;
} else {
var vec__14231 = cljs.core.first.call(null,seq__14222__$1);
var k = cljs.core.nth.call(null,vec__14231,(0),null);
var v = cljs.core.nth.call(null,vec__14231,(1),null);
var k_14254__$1 = cljs.core.name.call(null,k);
if(cljs.core.not.call(null,v)){
e.removeAttribute(k_14254__$1);
} else {
e.setAttribute(k_14254__$1,((cljs.core._EQ_.call(null,true,v))?k_14254__$1:v));
}

var G__14255 = cljs.core.next.call(null,seq__14222__$1);
var G__14256 = null;
var G__14257 = (0);
var G__14258 = (0);
seq__14222 = G__14255;
chunk__14224 = G__14256;
count__14225 = G__14257;
i__14226 = G__14258;
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
var seq__14234 = cljs.core.seq.call(null,kvs);
var chunk__14235 = null;
var count__14236 = (0);
var i__14237 = (0);
while(true){
if((i__14237 < count__14236)){
var vec__14238 = cljs.core._nth.call(null,chunk__14235,i__14237);
var k = cljs.core.nth.call(null,vec__14238,(0),null);
var v = cljs.core.nth.call(null,vec__14238,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14259 = seq__14234;
var G__14260 = chunk__14235;
var G__14261 = count__14236;
var G__14262 = (i__14237 + (1));
seq__14234 = G__14259;
chunk__14235 = G__14260;
count__14236 = G__14261;
i__14237 = G__14262;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14234);
if(temp__5457__auto__){
var seq__14234__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14234__$1)){
var c__9205__auto__ = cljs.core.chunk_first.call(null,seq__14234__$1);
var G__14263 = cljs.core.chunk_rest.call(null,seq__14234__$1);
var G__14264 = c__9205__auto__;
var G__14265 = cljs.core.count.call(null,c__9205__auto__);
var G__14266 = (0);
seq__14234 = G__14263;
chunk__14235 = G__14264;
count__14236 = G__14265;
i__14237 = G__14266;
continue;
} else {
var vec__14241 = cljs.core.first.call(null,seq__14234__$1);
var k = cljs.core.nth.call(null,vec__14241,(0),null);
var v = cljs.core.nth.call(null,vec__14241,(1),null);
goog.object.set(e.style,cljs.core.name.call(null,k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__14267 = cljs.core.next.call(null,seq__14234__$1);
var G__14268 = null;
var G__14269 = (0);
var G__14270 = (0);
seq__14234 = G__14267;
chunk__14235 = G__14268;
count__14236 = G__14269;
i__14237 = G__14270;
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
var G__14274__delegate = function (args){
var vec__14271 = hoplon.core.parse_args.call(null,args);
var attrs = cljs.core.nth.call(null,vec__14271,(0),null);
var kids = cljs.core.nth.call(null,vec__14271,(1),null);
hoplon.core.add_attributes_BANG_.call(null,elem,attrs);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"static","static",1214358571).cljs$core$IFn$_invoke$arity$1(attrs))){
hoplon.core.remove_all_kids_BANG_.call(null,elem);

return hoplon.core.add_children_BANG_.call(null,elem,kids);
} else {
return null;
}
};
var G__14274 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14275__i = 0, G__14275__a = new Array(arguments.length -  0);
while (G__14275__i < G__14275__a.length) {G__14275__a[G__14275__i] = arguments[G__14275__i + 0]; ++G__14275__i;}
  args = new cljs.core.IndexedSeq(G__14275__a,0,null);
} 
return G__14274__delegate.call(this,args);};
G__14274.cljs$lang$maxFixedArity = 0;
G__14274.cljs$lang$applyTo = (function (arglist__14276){
var args = cljs.core.seq(arglist__14276);
return G__14274__delegate(args);
});
G__14274.cljs$core$IFn$_invoke$arity$variadic = G__14274__delegate;
return G__14274;
})()
;
});
hoplon.core.mkelem = (function hoplon$core$mkelem(tag){
return (function() { 
var G__14280__delegate = function (args){
var vec__14277 = hoplon.core.parse_args.call(null,args);
var attr = cljs.core.nth.call(null,vec__14277,(0),null);
var kids = cljs.core.nth.call(null,vec__14277,(1),null);
var elem = document.createElement(tag);
return elem.call(null,attr,kids);
};
var G__14280 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14281__i = 0, G__14281__a = new Array(arguments.length -  0);
while (G__14281__i < G__14281__a.length) {G__14281__a[G__14281__i] = arguments[G__14281__i + 0]; ++G__14281__i;}
  args = new cljs.core.IndexedSeq(G__14281__a,0,null);
} 
return G__14280__delegate.call(this,args);};
G__14280.cljs$lang$maxFixedArity = 0;
G__14280.cljs$lang$applyTo = (function (arglist__14282){
var args = cljs.core.seq(arglist__14282);
return G__14280__delegate(args);
});
G__14280.cljs$core$IFn$_invoke$arity$variadic = G__14280__delegate;
return G__14280;
})()
;
});
hoplon.core.html = (function hoplon$core$html(var_args){
var args__9560__auto__ = [];
var len__9553__auto___14284 = arguments.length;
var i__9554__auto___14285 = (0);
while(true){
if((i__9554__auto___14285 < len__9553__auto___14284)){
args__9560__auto__.push((arguments[i__9554__auto___14285]));

var G__14286 = (i__9554__auto___14285 + (1));
i__9554__auto___14285 = G__14286;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic = (function (args){

return hoplon.core.add_attributes_BANG_.call(null,document.documentElement,cljs.core.first.call(null,hoplon.core.parse_args.call(null,args)));
});

hoplon.core.html.cljs$lang$maxFixedArity = (0);

hoplon.core.html.cljs$lang$applyTo = (function (seq14283){
return hoplon.core.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14283));
});

/**
 * Updates the document's `head` element in place.
 */
hoplon.core.head = hoplon.core.mksingleton.call(null,document.head);
/**
 * Updates the document's `body` element in place.
 */
hoplon.core.body = hoplon.core.mksingleton.call(null,document.body);
hoplon.core.a = hoplon.core.mkelem.call(null,"a");
hoplon.core.abbr = hoplon.core.mkelem.call(null,"abbr");
hoplon.core.address = hoplon.core.mkelem.call(null,"address");
hoplon.core.area = hoplon.core.mkelem.call(null,"area");
hoplon.core.article = hoplon.core.mkelem.call(null,"article");
hoplon.core.aside = hoplon.core.mkelem.call(null,"aside");
hoplon.core.audio = hoplon.core.mkelem.call(null,"audio");
hoplon.core.b = hoplon.core.mkelem.call(null,"b");
hoplon.core.base = hoplon.core.mkelem.call(null,"base");
hoplon.core.bdi = hoplon.core.mkelem.call(null,"bdi");
hoplon.core.bdo = hoplon.core.mkelem.call(null,"bdo");
hoplon.core.blockquote = hoplon.core.mkelem.call(null,"blockquote");
hoplon.core.br = hoplon.core.mkelem.call(null,"br");
hoplon.core.button = hoplon.core.mkelem.call(null,"button");
hoplon.core.canvas = hoplon.core.mkelem.call(null,"canvas");
hoplon.core.caption = hoplon.core.mkelem.call(null,"caption");
hoplon.core.cite = hoplon.core.mkelem.call(null,"cite");
hoplon.core.code = hoplon.core.mkelem.call(null,"code");
hoplon.core.col = hoplon.core.mkelem.call(null,"col");
hoplon.core.colgroup = hoplon.core.mkelem.call(null,"colgroup");
hoplon.core.data = hoplon.core.mkelem.call(null,"data");
hoplon.core.datalist = hoplon.core.mkelem.call(null,"datalist");
hoplon.core.dd = hoplon.core.mkelem.call(null,"dd");
hoplon.core.del = hoplon.core.mkelem.call(null,"del");
hoplon.core.details = hoplon.core.mkelem.call(null,"details");
hoplon.core.dfn = hoplon.core.mkelem.call(null,"dfn");
hoplon.core.dialog = hoplon.core.mkelem.call(null,"dialog");
hoplon.core.div = hoplon.core.mkelem.call(null,"div");
hoplon.core.dl = hoplon.core.mkelem.call(null,"dl");
hoplon.core.dt = hoplon.core.mkelem.call(null,"dt");
hoplon.core.em = hoplon.core.mkelem.call(null,"em");
hoplon.core.embed = hoplon.core.mkelem.call(null,"embed");
hoplon.core.fieldset = hoplon.core.mkelem.call(null,"fieldset");
hoplon.core.figcaption = hoplon.core.mkelem.call(null,"figcaption");
hoplon.core.figure = hoplon.core.mkelem.call(null,"figure");
hoplon.core.footer = hoplon.core.mkelem.call(null,"footer");
hoplon.core.form = hoplon.core.mkelem.call(null,"form");
hoplon.core.h1 = hoplon.core.mkelem.call(null,"h1");
hoplon.core.h2 = hoplon.core.mkelem.call(null,"h2");
hoplon.core.h3 = hoplon.core.mkelem.call(null,"h3");
hoplon.core.h4 = hoplon.core.mkelem.call(null,"h4");
hoplon.core.h5 = hoplon.core.mkelem.call(null,"h5");
hoplon.core.h6 = hoplon.core.mkelem.call(null,"h6");
hoplon.core.header = hoplon.core.mkelem.call(null,"header");
hoplon.core.hgroup = hoplon.core.mkelem.call(null,"hgroup");
hoplon.core.hr = hoplon.core.mkelem.call(null,"hr");
hoplon.core.i = hoplon.core.mkelem.call(null,"i");
hoplon.core.iframe = hoplon.core.mkelem.call(null,"iframe");
hoplon.core.img = hoplon.core.mkelem.call(null,"img");
hoplon.core.input = hoplon.core.mkelem.call(null,"input");
hoplon.core.ins = hoplon.core.mkelem.call(null,"ins");
hoplon.core.kbd = hoplon.core.mkelem.call(null,"kbd");
hoplon.core.keygen = hoplon.core.mkelem.call(null,"keygen");
hoplon.core.label = hoplon.core.mkelem.call(null,"label");
hoplon.core.legend = hoplon.core.mkelem.call(null,"legend");
hoplon.core.li = hoplon.core.mkelem.call(null,"li");
hoplon.core.link = hoplon.core.mkelem.call(null,"link");
hoplon.core.main = hoplon.core.mkelem.call(null,"main");
hoplon.core.html_map = hoplon.core.mkelem.call(null,"map");
hoplon.core.mark = hoplon.core.mkelem.call(null,"mark");
hoplon.core.menu = hoplon.core.mkelem.call(null,"menu");
hoplon.core.menuitem = hoplon.core.mkelem.call(null,"menuitem");
hoplon.core.html_meta = hoplon.core.mkelem.call(null,"meta");
hoplon.core.meter = hoplon.core.mkelem.call(null,"meter");
hoplon.core.multicol = hoplon.core.mkelem.call(null,"multicol");
hoplon.core.nav = hoplon.core.mkelem.call(null,"nav");
hoplon.core.noframes = hoplon.core.mkelem.call(null,"noframes");
hoplon.core.noscript = hoplon.core.mkelem.call(null,"noscript");
hoplon.core.html_object = hoplon.core.mkelem.call(null,"object");
hoplon.core.ol = hoplon.core.mkelem.call(null,"ol");
hoplon.core.optgroup = hoplon.core.mkelem.call(null,"optgroup");
hoplon.core.option = hoplon.core.mkelem.call(null,"option");
hoplon.core.output = hoplon.core.mkelem.call(null,"output");
hoplon.core.p = hoplon.core.mkelem.call(null,"p");
hoplon.core.param = hoplon.core.mkelem.call(null,"param");
hoplon.core.picture = hoplon.core.mkelem.call(null,"picture");
hoplon.core.pre = hoplon.core.mkelem.call(null,"pre");
hoplon.core.progress = hoplon.core.mkelem.call(null,"progress");
hoplon.core.q = hoplon.core.mkelem.call(null,"q");
hoplon.core.rp = hoplon.core.mkelem.call(null,"rp");
hoplon.core.rt = hoplon.core.mkelem.call(null,"rt");
hoplon.core.rtc = hoplon.core.mkelem.call(null,"rtc");
hoplon.core.ruby = hoplon.core.mkelem.call(null,"ruby");
hoplon.core.s = hoplon.core.mkelem.call(null,"s");
hoplon.core.samp = hoplon.core.mkelem.call(null,"samp");
hoplon.core.script = hoplon.core.mkelem.call(null,"script");
hoplon.core.section = hoplon.core.mkelem.call(null,"section");
hoplon.core.select = hoplon.core.mkelem.call(null,"select");
hoplon.core.shadow = hoplon.core.mkelem.call(null,"shadow");
hoplon.core.small = hoplon.core.mkelem.call(null,"small");
hoplon.core.source = hoplon.core.mkelem.call(null,"source");
hoplon.core.span = hoplon.core.mkelem.call(null,"span");
hoplon.core.strong = hoplon.core.mkelem.call(null,"strong");
hoplon.core.style = hoplon.core.mkelem.call(null,"style");
hoplon.core.sub = hoplon.core.mkelem.call(null,"sub");
hoplon.core.summary = hoplon.core.mkelem.call(null,"summary");
hoplon.core.sup = hoplon.core.mkelem.call(null,"sup");
hoplon.core.table = hoplon.core.mkelem.call(null,"table");
hoplon.core.tbody = hoplon.core.mkelem.call(null,"tbody");
hoplon.core.td = hoplon.core.mkelem.call(null,"td");
hoplon.core.template = hoplon.core.mkelem.call(null,"template");
hoplon.core.textarea = hoplon.core.mkelem.call(null,"textarea");
hoplon.core.tfoot = hoplon.core.mkelem.call(null,"tfoot");
hoplon.core.th = hoplon.core.mkelem.call(null,"th");
hoplon.core.thead = hoplon.core.mkelem.call(null,"thead");
hoplon.core.html_time = hoplon.core.mkelem.call(null,"time");
hoplon.core.title = hoplon.core.mkelem.call(null,"title");
hoplon.core.tr = hoplon.core.mkelem.call(null,"tr");
hoplon.core.track = hoplon.core.mkelem.call(null,"track");
hoplon.core.u = hoplon.core.mkelem.call(null,"u");
hoplon.core.ul = hoplon.core.mkelem.call(null,"ul");
hoplon.core.html_var = hoplon.core.mkelem.call(null,"var");
hoplon.core.video = hoplon.core.mkelem.call(null,"video");
hoplon.core.wbr = hoplon.core.mkelem.call(null,"wbr");
hoplon.core.spliced = cljs.core.vector;
hoplon.core.$text = (function hoplon$core$$text(p1__14287_SHARP_){
return document.createTextNode(p1__14287_SHARP_);
});
hoplon.core.$comment = (function hoplon$core$$comment(p1__14288_SHARP_){
return document.createComment(p1__14288_SHARP_);
});
hoplon.core._LT__BANG___ = hoplon.core.$comment;
hoplon.core.___GT_ = new cljs.core.Keyword("hoplon.core","-->","hoplon.core/-->",1031510657);
hoplon.core.add_initfn_BANG_ = (function hoplon$core$add_initfn_BANG_(f){
return window.addEventListener("load",(function (){
return setTimeout((function (){
return f.call(null);
}),(0));
}));
});
hoplon.core.page_load = (function hoplon$core$page_load(){
return document.dispatchEvent("page-load");
});
hoplon.core.on_page_load = (function hoplon$core$on_page_load(f){
return document.addEventListener("page-load",f);
});
hoplon.core.add_initfn_BANG_.call(null,(function (){
return document.body.addEventListener("submit",(function (p1__14289_SHARP_){
var e = p1__14289_SHARP_.target;
if(cljs.core.truth_((function (){var or__8274__auto__ = e.getAttribute("action");
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return e.getAttribute("method");
}
})())){
return null;
} else {
return p1__14289_SHARP_.preventDefault();
}
}));
}));
if(typeof hoplon.core.do_BANG_ !== 'undefined'){
} else {
hoplon.core.do_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","do!"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (elem,key,val){
var temp__5455__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,key,val){
return hoplon.core.do_BANG_.call(null,elem,new cljs.core.Keyword(null,"attr","attr",-604132353),cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]));
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("css","*","css/*",-1295355419),(function (elem,key,val){
return hoplon.core.set_styles_BANG_.call(null,elem,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword("svg","*","svg/*",-1295405562),(function (elem,key,val){
return hoplon.core.set_attributes_BANG_.call(null,elem,val);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"attr","attr",-604132353),(function (elem,_,kvs){
return hoplon.core.set_attributes_BANG_.call(null,elem,kvs);
}));
cljs.core._add_method.call(null,hoplon.core.do_BANG_,new cljs.core.Keyword(null,"css","css",1135045163),(function (elem,_,kvs){
return hoplon.core.set_styles_BANG_.call(null,elem,kvs);
}));
if(typeof hoplon.core.on_BANG_ !== 'undefined'){
} else {
hoplon.core.on_BANG_ = (function (){var method_table__9329__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__9330__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__9331__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__9332__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__9333__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"hoplon.core","on!"),((function (method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__){
return (function (elem,key,val){
var temp__5455__auto__ = cljs.core.namespace.call(null,key);
if(cljs.core.truth_(temp__5455__auto__)){
var n = temp__5455__auto__;
return cljs.core.keyword.call(null,n,"*");
} else {
return key;
}
});})(method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__,hierarchy__9333__auto__))
,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),hierarchy__9333__auto__,method_table__9329__auto__,prefer_table__9330__auto__,method_cache__9331__auto__,cached_hierarchy__9332__auto__));
})();
}
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("hoplon.core","default","hoplon.core/default",-778824365),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
}));
}));
cljs.core._add_method.call(null,hoplon.core.on_BANG_,new cljs.core.Keyword("html","*","html/*",-1283138243),(function (elem,event,callback){
return hoplon.core.when_dom.call(null,elem,(function (){
return elem.addEventListener(cljs.core.name.call(null,event),callback);
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
var on_deck = cljs.core.atom.call(null,cljs.core.List.EMPTY);
var items_seq = javelin.core.formula.call(null,((function (on_deck){
return (function (G__14292,G__14293){
return G__14292.call(null,G__14293);
});})(on_deck))
).call(null,cljs.core.seq,items);
var ith_item = ((function (on_deck,items_seq){
return (function (p1__14290_SHARP_){
return javelin.core.formula.call(null,((function (on_deck,items_seq){
return (function (G__14296,G__14295,G__14294){
return G__14294.call(null,G__14295,G__14296,null);
});})(on_deck,items_seq))
).call(null,p1__14290_SHARP_,items_seq,cljs.core.nth);
});})(on_deck,items_seq))
;
var shift_BANG_ = ((function (on_deck,items_seq,ith_item){
return (function (p1__14291_SHARP_){
var x = cljs.core.first.call(null,cljs.core.deref.call(null,p1__14291_SHARP_));
cljs.core.swap_BANG_.call(null,p1__14291_SHARP_,cljs.core.rest);

return x;
});})(on_deck,items_seq,ith_item))
;
var current = javelin.core.cell.call(null,cljs.core.PersistentVector.EMPTY);
hoplon.core.do_watch.call(null,items_seq,((function (current,on_deck,items_seq,ith_item,shift_BANG_){
return (function (old_items,new_items){
var old = cljs.core.count.call(null,old_items);
var new$ = cljs.core.count.call(null,new_items);
var diff = (new$ - old);
if((diff > (0))){
var seq__14297 = cljs.core.seq.call(null,cljs.core.range.call(null,old,new$));
var chunk__14298 = null;
var count__14299 = (0);
var i__14300 = (0);
while(true){
if((i__14300 < count__14299)){
var i = cljs.core._nth.call(null,chunk__14298,i__14300);
var e_14301 = (function (){var or__8274__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_14301);

var G__14302 = seq__14297;
var G__14303 = chunk__14298;
var G__14304 = count__14299;
var G__14305 = (i__14300 + (1));
seq__14297 = G__14302;
chunk__14298 = G__14303;
count__14299 = G__14304;
i__14300 = G__14305;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__14297);
if(temp__5457__auto__){
var seq__14297__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14297__$1)){
var c__9205__auto__ = cljs.core.chunk_first.call(null,seq__14297__$1);
var G__14306 = cljs.core.chunk_rest.call(null,seq__14297__$1);
var G__14307 = c__9205__auto__;
var G__14308 = cljs.core.count.call(null,c__9205__auto__);
var G__14309 = (0);
seq__14297 = G__14306;
chunk__14298 = G__14307;
count__14299 = G__14308;
i__14300 = G__14309;
continue;
} else {
var i = cljs.core.first.call(null,seq__14297__$1);
var e_14310 = (function (){var or__8274__auto__ = shift_BANG_.call(null,on_deck);
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return tpl.call(null,ith_item.call(null,i));
}
})();
cljs.core.swap_BANG_.call(null,current,cljs.core.conj,e_14310);

var G__14311 = cljs.core.next.call(null,seq__14297__$1);
var G__14312 = null;
var G__14313 = (0);
var G__14314 = (0);
seq__14297 = G__14311;
chunk__14298 = G__14312;
count__14299 = G__14313;
i__14300 = G__14314;
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
var e_14315 = cljs.core.peek.call(null,cljs.core.deref.call(null,current));
cljs.core.swap_BANG_.call(null,current,cljs.core.pop);

cljs.core.swap_BANG_.call(null,on_deck,cljs.core.conj,e_14315);

var G__14316 = (_ + (1));
_ = G__14316;
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
var len__9553__auto___14325 = arguments.length;
var i__9554__auto___14326 = (0);
while(true){
if((i__9554__auto___14326 < len__9553__auto___14325)){
args__9560__auto__.push((arguments[i__9554__auto___14326]));

var G__14327 = (i__9554__auto___14326 + (1));
i__9554__auto___14326 = G__14327;
continue;
} else {
}
break;
}

var argseq__9561__auto__ = ((((0) < args__9560__auto__.length))?(new cljs.core.IndexedSeq(args__9560__auto__.slice((0)),(0),null)):null);
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(argseq__9561__auto__);
});

hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic = (function (p__14318){
var vec__14319 = p__14318;
var default$ = cljs.core.nth.call(null,vec__14319,(0),null);
var c = javelin.core.cell.call(null,window.location.hash);
var _ = javelin.core.formula.call(null,((function (c,vec__14319,default$){
return (function (G__14322,G__14324,G__14323){
var or__8274__auto__ = (function (){var and__8262__auto__ = G__14322.call(null,G__14323);
if(cljs.core.truth_(and__8262__auto__)){
return G__14323;
} else {
return and__8262__auto__;
}
})();
if(cljs.core.truth_(or__8274__auto__)){
return or__8274__auto__;
} else {
return G__14324;
}
});})(c,vec__14319,default$))
).call(null,cljs.core.seq,default$,c);
window.addEventListener("hashchange",((function (_,c,vec__14319,default$){
return (function (){
return cljs.core.reset_BANG_.call(null,c,window.location.hash);
});})(_,c,vec__14319,default$))
);

return _;
});

hoplon.core.route_cell.cljs$lang$maxFixedArity = (0);

hoplon.core.route_cell.cljs$lang$applyTo = (function (seq14317){
return hoplon.core.route_cell.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14317));
});


//# sourceMappingURL=core.js.map
