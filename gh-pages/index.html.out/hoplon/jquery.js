// Compiled by ClojureScript 1.9.946 {:static-fns true, :optimize-constants true}
goog.provide('hoplon.jquery');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('hoplon.core');
goog.require('hoplon.spec');
hoplon.jquery.set_attributes_BANG_ = (function hoplon$jquery$set_attributes_BANG_(var_args){
var G__19099 = arguments.length;
switch (G__19099) {
case 2:
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___19113 = arguments.length;
var i__9554__auto___19114 = (0);
while(true){
if((i__9554__auto___19114 < len__9553__auto___19113)){
args_arr__9576__auto__.push((arguments[i__9554__auto___19114]));

var G__19115 = (i__9554__auto___19114 + (1));
i__9554__auto___19114 = G__19115;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19100 = cljs.core.seq(kvs);
var chunk__19102 = null;
var count__19103 = (0);
var i__19104 = (0);
while(true){
if((i__19104 < count__19103)){
var vec__19106 = chunk__19102.cljs$core$IIndexed$_nth$arity$2(null,i__19104);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19106,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19106,(1),null);
var k_19116__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19116__$1);
} else {
e.attr(k_19116__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19116__$1:v));
}

var G__19117 = seq__19100;
var G__19118 = chunk__19102;
var G__19119 = count__19103;
var G__19120 = (i__19104 + (1));
seq__19100 = G__19117;
chunk__19102 = G__19118;
count__19103 = G__19119;
i__19104 = G__19120;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19100);
if(temp__5457__auto__){
var seq__19100__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19100__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19100__$1);
var G__19121 = cljs.core.chunk_rest(seq__19100__$1);
var G__19122 = c__9205__auto__;
var G__19123 = cljs.core.count(c__9205__auto__);
var G__19124 = (0);
seq__19100 = G__19121;
chunk__19102 = G__19122;
count__19103 = G__19123;
i__19104 = G__19124;
continue;
} else {
var vec__19109 = cljs.core.first(seq__19100__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19109,(1),null);
var k_19125__$1 = cljs.core.name(k);
if(cljs.core.not(v)){
e.removeAttr(k_19125__$1);
} else {
e.attr(k_19125__$1,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,v))?k_19125__$1:v));
}

var G__19126 = cljs.core.next(seq__19100__$1);
var G__19127 = null;
var G__19128 = (0);
var G__19129 = (0);
seq__19100 = G__19126;
chunk__19102 = G__19127;
count__19103 = G__19128;
i__19104 = G__19129;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$applyTo = (function (seq19095){
var G__19096 = cljs.core.first(seq19095);
var seq19095__$1 = cljs.core.next(seq19095);
var G__19097 = cljs.core.first(seq19095__$1);
var seq19095__$2 = cljs.core.next(seq19095__$1);
var G__19098 = cljs.core.first(seq19095__$2);
var seq19095__$3 = cljs.core.next(seq19095__$2);
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19096,G__19097,G__19098,seq19095__$3);
});

hoplon.jquery.set_attributes_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.set_styles_BANG_ = (function hoplon$jquery$set_styles_BANG_(var_args){
var G__19135 = arguments.length;
switch (G__19135) {
case 2:
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__9576__auto__ = [];
var len__9553__auto___19147 = arguments.length;
var i__9554__auto___19148 = (0);
while(true){
if((i__9554__auto___19148 < len__9553__auto___19147)){
args_arr__9576__auto__.push((arguments[i__9554__auto___19148]));

var G__19149 = (i__9554__auto___19148 + (1));
i__9554__auto___19148 = G__19149;
continue;
} else {
}
break;
}

var argseq__9577__auto__ = (new cljs.core.IndexedSeq(args_arr__9576__auto__.slice((3)),(0),null));
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__9577__auto__);

}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,kvs){
var e = jQuery(this$);
var seq__19136 = cljs.core.seq(kvs);
var chunk__19137 = null;
var count__19138 = (0);
var i__19139 = (0);
while(true){
if((i__19139 < count__19138)){
var vec__19140 = chunk__19137.cljs$core$IIndexed$_nth$arity$2(null,i__19139);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19140,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19140,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19150 = seq__19136;
var G__19151 = chunk__19137;
var G__19152 = count__19138;
var G__19153 = (i__19139 + (1));
seq__19136 = G__19150;
chunk__19137 = G__19151;
count__19138 = G__19152;
i__19139 = G__19153;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19136);
if(temp__5457__auto__){
var seq__19136__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19136__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19136__$1);
var G__19154 = cljs.core.chunk_rest(seq__19136__$1);
var G__19155 = c__9205__auto__;
var G__19156 = cljs.core.count(c__9205__auto__);
var G__19157 = (0);
seq__19136 = G__19154;
chunk__19137 = G__19155;
count__19138 = G__19156;
i__19139 = G__19157;
continue;
} else {
var vec__19143 = cljs.core.first(seq__19136__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19143,(1),null);
e.css(cljs.core.name(k),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));

var G__19158 = cljs.core.next(seq__19136__$1);
var G__19159 = null;
var G__19160 = (0);
var G__19161 = (0);
seq__19136 = G__19158;
chunk__19137 = G__19159;
count__19138 = G__19160;
i__19139 = G__19161;
continue;
}
} else {
return null;
}
}
break;
}
});

hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (this$,k,v,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(this$,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

hoplon.jquery.set_styles_BANG_.cljs$lang$applyTo = (function (seq19131){
var G__19132 = cljs.core.first(seq19131);
var seq19131__$1 = cljs.core.next(seq19131);
var G__19133 = cljs.core.first(seq19131__$1);
var seq19131__$2 = cljs.core.next(seq19131__$1);
var G__19134 = cljs.core.first(seq19131__$2);
var seq19131__$3 = cljs.core.next(seq19131__$2);
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__19132,G__19133,G__19134,seq19131__$3);
});

hoplon.jquery.set_styles_BANG_.cljs$lang$maxFixedArity = (3);

hoplon.jquery.text_val_BANG_ = (function hoplon$jquery$text_val_BANG_(var_args){
var G__19163 = arguments.length;
switch (G__19163) {
case 1:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.val();
});

hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
var v__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v__$1,hoplon.jquery.text_val_BANG_.cljs$core$IFn$_invoke$arity$1(e))){
return e.val(v__$1);
} else {
return null;
}
});

hoplon.jquery.text_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.jquery.check_val_BANG_ = (function hoplon$jquery$check_val_BANG_(var_args){
var G__19166 = arguments.length;
switch (G__19166) {
case 1:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (e){
return e.is(":checked");
});

hoplon.jquery.check_val_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (e,v){
return e.prop("checked",cljs.core.boolean$(v));
});

hoplon.jquery.check_val_BANG_.cljs$lang$maxFixedArity = 2;

hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,key,val){
var G__19168 = elem;
var G__19169 = cljs.core.cst$kw$attr;
var G__19170 = cljs.core.PersistentArrayMap.createAsIfByAssoc([key,val]);
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19168,G__19169,G__19170) : hoplon.core.do_BANG_.call(null,G__19168,G__19169,G__19170));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_styles_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (elem,key,val){
return hoplon.jquery.set_attributes_BANG_(elem,key,val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$svg_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr_SLASH__STAR_,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.prop(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$prop_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (elem,key,val){
var e = jQuery(elem);
return e.data(cljs.core.name(key),val);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$data_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.any_QMARK_);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (elem,_,kvs){
return hoplon.jquery.set_attributes_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$attr,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (elem,_,kvs){
return hoplon.jquery.set_styles_BANG_.cljs$core$IFn$_invoke$arity$2(elem,kvs);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$css,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_map);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function() { 
var G__19171__delegate = function (elem,_,args){
var e = jQuery(elem);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("checkbox",e.attr("type")))?hoplon.jquery.check_val_BANG_:hoplon.jquery.text_val_BANG_),e,args);
};
var G__19171 = function (elem,_,var_args){
var args = null;
if (arguments.length > 2) {
var G__19172__i = 0, G__19172__a = new Array(arguments.length -  2);
while (G__19172__i < G__19172__a.length) {G__19172__a[G__19172__i] = arguments[G__19172__i + 2]; ++G__19172__i;}
  args = new cljs.core.IndexedSeq(G__19172__a,0,null);
} 
return G__19171__delegate.call(this,elem,_,args);};
G__19171.cljs$lang$maxFixedArity = 2;
G__19171.cljs$lang$applyTo = (function (arglist__19173){
var elem = cljs.core.first(arglist__19173);
arglist__19173 = cljs.core.next(arglist__19173);
var _ = cljs.core.first(arglist__19173);
var args = cljs.core.rest(arglist__19173);
return G__19171__delegate(elem,_,args);
});
G__19171.cljs$core$IFn$_invoke$arity$variadic = G__19171__delegate;
return G__19171;
})()
);
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$value,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_value);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (elem,_,kvs){
var elem__$1 = jQuery(elem);
var clmap = hoplon.core.normalize_class(kvs);
var seq__19174 = cljs.core.seq(clmap);
var chunk__19175 = null;
var count__19176 = (0);
var i__19177 = (0);
while(true){
if((i__19177 < count__19176)){
var vec__19178 = chunk__19175.cljs$core$IIndexed$_nth$arity$2(null,i__19177);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19178,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19178,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19184 = seq__19174;
var G__19185 = chunk__19175;
var G__19186 = count__19176;
var G__19187 = (i__19177 + (1));
seq__19174 = G__19184;
chunk__19175 = G__19185;
count__19176 = G__19186;
i__19177 = G__19187;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq(seq__19174);
if(temp__5457__auto__){
var seq__19174__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__19174__$1)){
var c__9205__auto__ = cljs.core.chunk_first(seq__19174__$1);
var G__19188 = cljs.core.chunk_rest(seq__19174__$1);
var G__19189 = c__9205__auto__;
var G__19190 = cljs.core.count(c__9205__auto__);
var G__19191 = (0);
seq__19174 = G__19188;
chunk__19175 = G__19189;
count__19176 = G__19190;
i__19177 = G__19191;
continue;
} else {
var vec__19181 = cljs.core.first(seq__19174__$1);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19181,(0),null);
var p_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19181,(1),null);
elem__$1.toggleClass(cljs.core.name(c),cljs.core.boolean$(p_QMARK_));

var G__19192 = cljs.core.next(seq__19174__$1);
var G__19193 = null;
var G__19194 = (0);
var G__19195 = (0);
seq__19174 = G__19192;
chunk__19175 = G__19193;
count__19176 = G__19194;
i__19177 = G__19195;
continue;
}
} else {
return null;
}
}
break;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_class);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class_SLASH__STAR_,(function (elem,_,kvs){
var G__19196 = elem;
var G__19197 = cljs.core.cst$kw$class;
var G__19198 = kvs;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19196,G__19197,G__19198) : hoplon.core.do_BANG_.call(null,G__19196,G__19197,G__19198));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$class_SLASH__STAR_,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_class);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (elem,_,v){
return jQuery(elem).toggle(cljs.core.boolean$(v));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().slideDown("fast");
} else {
return jQuery(elem).slideUp("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$slide_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (elem,_,v){
if(cljs.core.truth_(v)){
return jQuery(elem).hide().fadeIn("fast");
} else {
return jQuery(elem).fadeOut("fast");
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$fade_DASH_toggle,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (elem,_,v){
var G__19199 = (function (){
if(cljs.core.truth_(v)){
return jQuery(elem).focus();
} else {
return jQuery(elem).focusout();
}
});
var G__19200 = (0);
return setTimeout(G__19199,G__19200);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (elem,_,___$1){
return jQuery(elem).select();
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (elem,_,v){
if(cljs.core.truth_(v)){
var G__19201_19207 = elem;
var G__19202_19208 = cljs.core.cst$kw$focus;
var G__19203_19209 = v;
(hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19201_19207,G__19202_19208,G__19203_19209) : hoplon.core.do_BANG_.call(null,G__19201_19207,G__19202_19208,G__19203_19209));

var G__19204 = elem;
var G__19205 = cljs.core.cst$kw$select;
var G__19206 = v;
return (hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3 ? hoplon.core.do_BANG_.cljs$core$IFn$_invoke$arity$3(G__19204,G__19205,G__19206) : hoplon.core.do_BANG_.call(null,G__19204,G__19205,G__19206));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$focus_DASH_select,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (elem,_,v){
return jQuery(elem).text([cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join(''));
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$text,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (elem,_,v){
return jQuery(elem).html(v);
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_string);
}));
hoplon.core.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (elem,_,v){
if(cljs.core.truth_(v)){
var body = jQuery("body,html");
var elem__$1 = jQuery(elem);
return body.animate(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$scrollTop,elem__$1.offset().top], null)));
} else {
return null;
}
}));
hoplon.spec.do_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$scroll_DASH_to,(function (_){
return hoplon.spec.attr(cljs.core.cst$kw$hoplon$spec_SLASH_boolean);
}));
jQuery.Event.prototype.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL;

jQuery.Event.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return (function (){var G__19210 = this$__$1.target;
return jQuery(G__19210);
})().val();
});
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$hoplon$core_SLASH_default,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
hoplon.core.on_BANG_.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$html_SLASH__STAR_,(function (elem,event,callback){
return hoplon.core.when_dom(elem,(function (){
return jQuery(elem).on(cljs.core.name(event),callback);
}));
}));
