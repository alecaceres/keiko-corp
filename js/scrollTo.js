!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function($){var a=$.scrollTo=function(a,b,c){return $(window).scrollTo(a,b,c)};function b(a){return $.isFunction(a)||"object"==typeof a?a:{top:a,left:a}}return a.defaults={axis:"xy",duration:parseFloat($.fn.jquery)>=1.3?0:1,limit:!0},a.window=function(a){return $(window)._scrollable()},$.fn._scrollable=function(){return this.map(function(){if(!(!this.nodeName|| -1!=$.inArray(this.nodeName.toLowerCase(),["iframe","#document","html","body"])))return this;var a=(this.contentWindow||this).document||this.ownerDocument||this;return/webkit/i.test(navigator.userAgent)||"BackCompat"==a.compatMode?a.body:a.documentElement})},$.fn.scrollTo=function(e,d,c){return"object"==typeof d&&(c=d,d=0),"function"==typeof c&&(c={onAfter:c}),"max"==e&&(e=9e9),c=$.extend({},a.defaults,c),d=d||c.duration,c.queue=c.queue&&c.axis.length>1,c.queue&&(d/=2),c.offset=b(c.offset),c.over=b(c.over),this._scrollable().each(function(){if(null!=e){var h,g=this,i=$(g),f=e,j={},k=i.is("html,body");switch(typeof f){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(f)){f=b(f);break}if(!(f=$(f,this)).length)return;case"object":(f.is||f.style)&&(h=(f=$(f)).offset())}var l=$.isFunction(c.offset)&&c.offset(g,f)||c.offset;$.each(c.axis.split(""),function(r,o){var e="x"==o?"Left":"Top",d=e.toLowerCase(),b="scroll"+e,p=g[b],q=a.max(g,o);if(h)j[b]=h[d]+(k?0:p-i.offset()[d]),c.margin&&(j[b]-=parseInt(f.css("margin"+e))||0,j[b]-=parseInt(f.css("border"+e+"Width"))||0),j[b]+=l[d]||0,c.over[d]&&(j[b]+=f["x"==o?"width":"height"]()*c.over[d]);else{var n=f[d];j[b]=n.slice&&"%"==n.slice(-1)?parseFloat(n)/100*q:n}c.limit&&/^\d+$/.test(j[b])&&(j[b]=j[b]<=0?0:Math.min(j[b],q)),!r&&c.queue&&(p!=j[b]&&m(c.onAfterFirst),delete j[b])}),m(c.onAfter)}function m(a){i.animate(j,d,c.easing,a&&function(){a.call(this,f,c)})}}).end()},a.max=function(a,g){var b="x"==g?"Width":"Height",c="scroll"+b;if(!$(a).is("html,body"))return a[c]-$(a)[b.toLowerCase()]();var d="client"+b,e=a.ownerDocument.documentElement,f=a.ownerDocument.body;return Math.max(e[c],f[c])-Math.min(e[d],f[d])},a})