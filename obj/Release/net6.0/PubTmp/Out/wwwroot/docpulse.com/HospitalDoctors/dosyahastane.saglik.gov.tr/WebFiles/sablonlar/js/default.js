(function(){var t,e,i=function(t,e){return function(){return t.apply(e,arguments)}};t=function(){function t(){}return t.prototype.extend=function(t,e){var i,n;for(i in t)null!=(n=t[i])&&(e[i]=n);return e},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t}(),e=this.WeakMap||(e=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,i,n,o;for(e=i=0,n=(o=this.keys).length;n>i;e=++i)if(o[e]===t)return this.values[e]},t.prototype.set=function(t,e){var i,n,o,r;for(i=n=0,o=(r=this.keys).length;o>n;i=++n)if(r[i]===t)return void(this.values[i]=e);return this.keys.push(t),this.values.push(e)},t}()),this.WOW=function(){function n(t){null==t&&(t={}),this.scrollCallback=i(this.scrollCallback,this),this.scrollHandler=i(this.scrollHandler,this),this.start=i(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),this.animationNameCache=new e}return n.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},n.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():document.addEventListener("DOMContentLoaded",this.start)},n.prototype.start=function(){var t,e,i,n;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(e=0,i=(n=this.boxes).length;i>e;e++)t=n[e],this.applyStyle(t,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},n.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},n.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass},n.prototype.applyStyle=function(t,e){var i,n,o,r;return n=t.getAttribute("data-wow-duration"),i=t.getAttribute("data-wow-delay"),o=t.getAttribute("data-wow-iteration"),this.animate((r=this,function(){return r.customStyle(t,e,n,i,o)}))},n.prototype.animate="requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()},n.prototype.resetStyle=function(){var t,e,i,n,o;for(o=[],e=0,i=(n=this.boxes).length;i>e;e++)t=n[e],o.push(t.setAttribute("style","visibility: visible;"));return o},n.prototype.customStyle=function(t,e,i,n,o){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",i&&this.vendorSet(t.style,{animationDuration:i}),n&&this.vendorSet(t.style,{animationDelay:n}),o&&this.vendorSet(t.style,{animationIterationCount:o}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},n.prototype.vendors=["moz","webkit"],n.prototype.vendorSet=function(t,e){var i,n,o,r;for(i in r=[],e)n=e[i],t[""+i]=n,r.push(function(){var e,r,s,a;for(a=[],e=0,r=(s=this.vendors).length;r>e;e++)o=s[e],a.push(t[""+o+i.charAt(0).toUpperCase()+i.substr(1)]=n);return a}.call(this));return r},n.prototype.vendorCSS=function(t,e){var i,n,o,r,s,a;for(i=(n=window.getComputedStyle(t)).getPropertyCSSValue(e),r=0,s=(a=this.vendors).length;s>r;r++)o=a[r],i=i||n.getPropertyCSSValue("-"+o+"-"+e);return i},n.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(i){e=window.getComputedStyle(t).getPropertyValue("animation-name")}return"none"===e?"":e},n.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},n.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},n.prototype.scrollHandler=function(){return this.scrolled=!0},n.prototype.scrollCallback=function(){var t;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var e,i,n,o;for(o=[],e=0,i=(n=this.boxes).length;i>e;e++)(t=n[e])&&(this.isVisible(t)?this.show(t):o.push(t));return o}.call(this),!this.boxes.length)?this.stop():void 0},n.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},n.prototype.isVisible=function(t){var e,i,n,o,r;return i=t.getAttribute("data-wow-offset")||this.config.offset,o=(r=window.pageYOffset)+this.element.clientHeight-i,e=(n=this.offsetTop(t))+t.clientHeight,o>=n&&e>=r},n.prototype.util=function(){return this._util||(this._util=new t)},n.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},n}()}).call(this);
/** End WOW Animate Default Settings **/

!function(a,b,c,d){function e(b,c){this.settings=null,this.options=a.extend({},e.Defaults,c),this.$element=a(b),this._handlers={},this._plugins={},this._supress={},this._current=null,this._speed=null,this._coordinates=[],this._breakpoint=null,this._width=null,this._items=[],this._clones=[],this._mergers=[],this._widths=[],this._invalidated={},this._pipe=[],this._drag={time:null,target:null,pointer:null,stage:{start:null,current:null},direction:null},this._states={current:{},tags:{initializing:["busy"],animating:["busy"],dragging:["interacting"]}},a.each(["onResize","onThrottledResize"],a.proxy(function(b,c){this._handlers[c]=a.proxy(this[c],this)},this)),a.each(e.Plugins,a.proxy(function(a,b){this._plugins[a.charAt(0).toLowerCase()+a.slice(1)]=new b(this)},this)),a.each(e.Workers,a.proxy(function(b,c){this._pipe.push({filter:c.filter,run:a.proxy(c.run,this)})},this)),this.setup(),this.initialize()}e.Defaults={items:3,loop:!1,center:!1,rewind:!1,mouseDrag:!0,touchDrag:!0,pullDrag:!0,freeDrag:!1,margin:0,stagePadding:0,merge:!1,mergeFit:!0,autoWidth:!1,startPosition:0,rtl:!1,smartSpeed:250,fluidSpeed:!1,dragEndSpeed:!1,responsive:{},responsiveRefreshRate:200,responsiveBaseElement:b,fallbackEasing:"swing",info:!1,nestedItemSelector:!1,itemElement:"div",stageElement:"div",refreshClass:"owl-refresh",loadedClass:"owl-loaded",loadingClass:"owl-loading",rtlClass:"owl-rtl",responsiveClass:"owl-responsive",dragClass:"owl-drag",itemClass:"owl-item",stageClass:"owl-stage",stageOuterClass:"owl-stage-outer",grabClass:"owl-grab"},e.Width={Default:"default",Inner:"inner",Outer:"outer"},e.Type={Event:"event",State:"state"},e.Plugins={},e.Workers=[{filter:["width","settings"],run:function(){this._width=this.$element.width()}},{filter:["width","items","settings"],run:function(a){a.current=this._items&&this._items[this.relative(this._current)]}},{filter:["items","settings"],run:function(){this.$stage.children(".cloned").remove()}},{filter:["width","items","settings"],run:function(a){var b=this.settings.margin||"",c=!this.settings.autoWidth,d=this.settings.rtl,e={width:"auto","margin-left":d?b:"","margin-right":d?"":b};!c&&this.$stage.children().css(e),a.css=e}},{filter:["width","items","settings"],run:function(a){var b=(this.width()/this.settings.items).toFixed(3)-this.settings.margin,c=null,d=this._items.length,e=!this.settings.autoWidth,f=[];for(a.items={merge:!1,width:b};d--;)c=this._mergers[d],c=this.settings.mergeFit&&Math.min(c,this.settings.items)||c,a.items.merge=c>1||a.items.merge,f[d]=e?b*c:this._items[d].width();this._widths=f}},{filter:["items","settings"],run:function(){var b=[],c=this._items,d=this.settings,e=Math.max(2*d.items,4),f=2*Math.ceil(c.length/2),g=d.loop&&c.length?d.rewind?e:Math.max(e,f):0,h="",i="";for(g/=2;g--;)b.push(this.normalize(b.length/2,!0)),h+=c[b[b.length-1]][0].outerHTML,b.push(this.normalize(c.length-1-(b.length-1)/2,!0)),i=c[b[b.length-1]][0].outerHTML+i;this._clones=b,a(h).addClass("cloned").appendTo(this.$stage),a(i).addClass("cloned").prependTo(this.$stage)}},{filter:["width","items","settings"],run:function(){for(var a=this.settings.rtl?1:-1,b=this._clones.length+this._items.length,c=-1,d=0,e=0,f=[];++c<b;)d=f[c-1]||0,e=this._widths[this.relative(c)]+this.settings.margin,f.push(d+e*a);this._coordinates=f}},{filter:["width","items","settings"],run:function(){var a=this.settings.stagePadding,b=this._coordinates,c={width:Math.ceil(Math.abs(b[b.length-1]))+2*a,"padding-left":a||"","padding-right":a||""};this.$stage.css(c)}},{filter:["width","items","settings"],run:function(a){var b=this._coordinates.length,c=!this.settings.autoWidth,d=this.$stage.children();if(c&&a.items.merge)for(;b--;)a.css.width=this._widths[this.relative(b)],d.eq(b).css(a.css);else c&&(a.css.width=a.items.width,d.css(a.css))}},{filter:["items"],run:function(){this._coordinates.length<1&&this.$stage.removeAttr("style")}},{filter:["width","items","settings"],run:function(a){a.current=a.current?this.$stage.children().index(a.current):0,a.current=Math.max(this.minimum(),Math.min(this.maximum(),a.current)),this.reset(a.current)}},{filter:["position"],run:function(){this.animate(this.coordinates(this._current))}},{filter:["width","position","items","settings"],run:function(){var a,b,c,d,e=this.settings.rtl?1:-1,f=2*this.settings.stagePadding,g=this.coordinates(this.current())+f,h=g+this.width()*e,i=[];for(c=0,d=this._coordinates.length;c<d;c++)a=this._coordinates[c-1]||0,b=Math.abs(this._coordinates[c])+f*e,(this.op(a,"<=",g)&&this.op(a,">",h)||this.op(b,"<",g)&&this.op(b,">",h))&&i.push(c);this.$stage.children(".active").removeClass("active"),this.$stage.children(":eq("+i.join("), :eq(")+")").addClass("active"),this.settings.center&&(this.$stage.children(".center").removeClass("center"),this.$stage.children().eq(this.current()).addClass("center"))}}],e.prototype.initialize=function(){if(this.enter("initializing"),this.trigger("initialize"),this.$element.toggleClass(this.settings.rtlClass,this.settings.rtl),this.settings.autoWidth&&!this.is("pre-loading")){var b,c,e;b=this.$element.find("img"),c=this.settings.nestedItemSelector?"."+this.settings.nestedItemSelector:d,e=this.$element.children(c).width(),b.length&&e<=0&&this.preloadAutoWidthImages(b)}this.$element.addClass(this.options.loadingClass),this.$stage=a("<"+this.settings.stageElement+' class="'+this.settings.stageClass+'"/>').wrap('<div class="'+this.settings.stageOuterClass+'"/>'),this.$element.append(this.$stage.parent()),this.replace(this.$element.children().not(this.$stage.parent())),this.$element.is(":visible")?this.refresh():this.invalidate("width"),this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),this.registerEventHandlers(),this.leave("initializing"),this.trigger("initialized")},e.prototype.setup=function(){var b=this.viewport(),c=this.options.responsive,d=-1,e=null;c?(a.each(c,function(a){a<=b&&a>d&&(d=Number(a))}),e=a.extend({},this.options,c[d]),"function"==typeof e.stagePadding&&(e.stagePadding=e.stagePadding()),delete e.responsive,e.responsiveClass&&this.$element.attr("class",this.$element.attr("class").replace(new RegExp("("+this.options.responsiveClass+"-)\\S+\\s","g"),"$1"+d))):e=a.extend({},this.options),this.trigger("change",{property:{name:"settings",value:e}}),this._breakpoint=d,this.settings=e,this.invalidate("settings"),this.trigger("changed",{property:{name:"settings",value:this.settings}})},e.prototype.optionsLogic=function(){this.settings.autoWidth&&(this.settings.stagePadding=!1,this.settings.merge=!1)},e.prototype.prepare=function(b){var c=this.trigger("prepare",{content:b});return c.data||(c.data=a("<"+this.settings.itemElement+"/>").addClass(this.options.itemClass).append(b)),this.trigger("prepared",{content:c.data}),c.data},e.prototype.update=function(){for(var b=0,c=this._pipe.length,d=a.proxy(function(a){return this[a]},this._invalidated),e={};b<c;)(this._invalidated.all||a.grep(this._pipe[b].filter,d).length>0)&&this._pipe[b].run(e),b++;this._invalidated={},!this.is("valid")&&this.enter("valid")},e.prototype.width=function(a){switch(a=a||e.Width.Default){case e.Width.Inner:case e.Width.Outer:return this._width;default:return this._width-2*this.settings.stagePadding+this.settings.margin}},e.prototype.refresh=function(){this.enter("refreshing"),this.trigger("refresh"),this.setup(),this.optionsLogic(),this.$element.addClass(this.options.refreshClass),this.update(),this.$element.removeClass(this.options.refreshClass),this.leave("refreshing"),this.trigger("refreshed")},e.prototype.onThrottledResize=function(){b.clearTimeout(this.resizeTimer),this.resizeTimer=b.setTimeout(this._handlers.onResize,this.settings.responsiveRefreshRate)},e.prototype.onResize=function(){return!!this._items.length&&(this._width!==this.$element.width()&&(!!this.$element.is(":visible")&&(this.enter("resizing"),this.trigger("resize").isDefaultPrevented()?(this.leave("resizing"),!1):(this.invalidate("width"),this.refresh(),this.leave("resizing"),void this.trigger("resized")))))},e.prototype.registerEventHandlers=function(){a.support.transition&&this.$stage.on(a.support.transition.end+".owl.core",a.proxy(this.onTransitionEnd,this)),this.settings.responsive!==!1&&this.on(b,"resize",this._handlers.onThrottledResize),this.settings.mouseDrag&&(this.$element.addClass(this.options.dragClass),this.$stage.on("mousedown.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("dragstart.owl.core selectstart.owl.core",function(){return!1})),this.settings.touchDrag&&(this.$stage.on("touchstart.owl.core",a.proxy(this.onDragStart,this)),this.$stage.on("touchcancel.owl.core",a.proxy(this.onDragEnd,this)))},e.prototype.onDragStart=function(b){var d=null;3!==b.which&&(a.support.transform?(d=this.$stage.css("transform").replace(/.*\(|\)| /g,"").split(","),d={x:d[16===d.length?12:4],y:d[16===d.length?13:5]}):(d=this.$stage.position(),d={x:this.settings.rtl?d.left+this.$stage.width()-this.width()+this.settings.margin:d.left,y:d.top}),this.is("animating")&&(a.support.transform?this.animate(d.x):this.$stage.stop(),this.invalidate("position")),this.$element.toggleClass(this.options.grabClass,"mousedown"===b.type),this.speed(0),this._drag.time=(new Date).getTime(),this._drag.target=a(b.target),this._drag.stage.start=d,this._drag.stage.current=d,this._drag.pointer=this.pointer(b),a(c).on("mouseup.owl.core touchend.owl.core",a.proxy(this.onDragEnd,this)),a(c).one("mousemove.owl.core touchmove.owl.core",a.proxy(function(b){var d=this.difference(this._drag.pointer,this.pointer(b));a(c).on("mousemove.owl.core touchmove.owl.core",a.proxy(this.onDragMove,this)),Math.abs(d.x)<Math.abs(d.y)&&this.is("valid")||(b.preventDefault(),this.enter("dragging"),this.trigger("drag"))},this)))},e.prototype.onDragMove=function(a){var b=null,c=null,d=null,e=this.difference(this._drag.pointer,this.pointer(a)),f=this.difference(this._drag.stage.start,e);this.is("dragging")&&(a.preventDefault(),this.settings.loop?(b=this.coordinates(this.minimum()),c=this.coordinates(this.maximum()+1)-b,f.x=((f.x-b)%c+c)%c+b):(b=this.settings.rtl?this.coordinates(this.maximum()):this.coordinates(this.minimum()),c=this.settings.rtl?this.coordinates(this.minimum()):this.coordinates(this.maximum()),d=this.settings.pullDrag?-1*e.x/5:0,f.x=Math.max(Math.min(f.x,b+d),c+d)),this._drag.stage.current=f,this.animate(f.x))},e.prototype.onDragEnd=function(b){var d=this.difference(this._drag.pointer,this.pointer(b)),e=this._drag.stage.current,f=d.x>0^this.settings.rtl?"left":"right";a(c).off(".owl.core"),this.$element.removeClass(this.options.grabClass),(0!==d.x&&this.is("dragging")||!this.is("valid"))&&(this.speed(this.settings.dragEndSpeed||this.settings.smartSpeed),this.current(this.closest(e.x,0!==d.x?f:this._drag.direction)),this.invalidate("position"),this.update(),this._drag.direction=f,(Math.abs(d.x)>3||(new Date).getTime()-this._drag.time>300)&&this._drag.target.one("click.owl.core",function(){return!1})),this.is("dragging")&&(this.leave("dragging"),this.trigger("dragged"))},e.prototype.closest=function(b,c){var d=-1,e=30,f=this.width(),g=this.coordinates();return this.settings.freeDrag||a.each(g,a.proxy(function(a,h){return"left"===c&&b>h-e&&b<h+e?d=a:"right"===c&&b>h-f-e&&b<h-f+e?d=a+1:this.op(b,"<",h)&&this.op(b,">",g[a+1]||h-f)&&(d="left"===c?a+1:a),d===-1},this)),this.settings.loop||(this.op(b,">",g[this.minimum()])?d=b=this.minimum():this.op(b,"<",g[this.maximum()])&&(d=b=this.maximum())),d},e.prototype.animate=function(b){var c=this.speed()>0;this.is("animating")&&this.onTransitionEnd(),c&&(this.enter("animating"),this.trigger("translate")),a.support.transform3d&&a.support.transition?this.$stage.css({transform:"translate3d("+b+"px,0px,0px)",transition:this.speed()/1e3+"s"}):c?this.$stage.animate({left:b+"px"},this.speed(),this.settings.fallbackEasing,a.proxy(this.onTransitionEnd,this)):this.$stage.css({left:b+"px"})},e.prototype.is=function(a){return this._states.current[a]&&this._states.current[a]>0},e.prototype.current=function(a){if(a===d)return this._current;if(0===this._items.length)return d;if(a=this.normalize(a),this._current!==a){var b=this.trigger("change",{property:{name:"position",value:a}});b.data!==d&&(a=this.normalize(b.data)),this._current=a,this.invalidate("position"),this.trigger("changed",{property:{name:"position",value:this._current}})}return this._current},e.prototype.invalidate=function(b){return"string"===a.type(b)&&(this._invalidated[b]=!0,this.is("valid")&&this.leave("valid")),a.map(this._invalidated,function(a,b){return b})},e.prototype.reset=function(a){a=this.normalize(a),a!==d&&(this._speed=0,this._current=a,this.suppress(["translate","translated"]),this.animate(this.coordinates(a)),this.release(["translate","translated"]))},e.prototype.normalize=function(a,b){var c=this._items.length,e=b?0:this._clones.length;return!this.isNumeric(a)||c<1?a=d:(a<0||a>=c+e)&&(a=((a-e/2)%c+c)%c+e/2),a},e.prototype.relative=function(a){return a-=this._clones.length/2,this.normalize(a,!0)},e.prototype.maximum=function(a){var b,c,d,e=this.settings,f=this._coordinates.length;if(e.loop)f=this._clones.length/2+this._items.length-1;else if(e.autoWidth||e.merge){for(b=this._items.length,c=this._items[--b].width(),d=this.$element.width();b--&&(c+=this._items[b].width()+this.settings.margin,!(c>d)););f=b+1}else f=e.center?this._items.length-1:this._items.length-e.items;return a&&(f-=this._clones.length/2),Math.max(f,0)},e.prototype.minimum=function(a){return a?0:this._clones.length/2},e.prototype.items=function(a){return a===d?this._items.slice():(a=this.normalize(a,!0),this._items[a])},e.prototype.mergers=function(a){return a===d?this._mergers.slice():(a=this.normalize(a,!0),this._mergers[a])},e.prototype.clones=function(b){var c=this._clones.length/2,e=c+this._items.length,f=function(a){return a%2===0?e+a/2:c-(a+1)/2};return b===d?a.map(this._clones,function(a,b){return f(b)}):a.map(this._clones,function(a,c){return a===b?f(c):null})},e.prototype.speed=function(a){return a!==d&&(this._speed=a),this._speed},e.prototype.coordinates=function(b){var c,e=1,f=b-1;return b===d?a.map(this._coordinates,a.proxy(function(a,b){return this.coordinates(b)},this)):(this.settings.center?(this.settings.rtl&&(e=-1,f=b+1),c=this._coordinates[b],c+=(this.width()-c+(this._coordinates[f]||0))/2*e):c=this._coordinates[f]||0,c=Math.ceil(c))},e.prototype.duration=function(a,b,c){return 0===c?0:Math.min(Math.max(Math.abs(b-a),1),6)*Math.abs(c||this.settings.smartSpeed)},e.prototype.to=function(a,b){var c=this.current(),d=null,e=a-this.relative(c),f=(e>0)-(e<0),g=this._items.length,h=this.minimum(),i=this.maximum();this.settings.loop?(!this.settings.rewind&&Math.abs(e)>g/2&&(e+=f*-1*g),a=c+e,d=((a-h)%g+g)%g+h,d!==a&&d-e<=i&&d-e>0&&(c=d-e,a=d,this.reset(c))):this.settings.rewind?(i+=1,a=(a%i+i)%i):a=Math.max(h,Math.min(i,a)),this.speed(this.duration(c,a,b)),this.current(a),this.$element.is(":visible")&&this.update()},e.prototype.next=function(a){a=a||!1,this.to(this.relative(this.current())+1,a)},e.prototype.prev=function(a){a=a||!1,this.to(this.relative(this.current())-1,a)},e.prototype.onTransitionEnd=function(a){if(a!==d&&(a.stopPropagation(),(a.target||a.srcElement||a.originalTarget)!==this.$stage.get(0)))return!1;this.leave("animating"),this.trigger("translated")},e.prototype.viewport=function(){var d;return this.options.responsiveBaseElement!==b?d=a(this.options.responsiveBaseElement).width():b.innerWidth?d=b.innerWidth:c.documentElement&&c.documentElement.clientWidth?d=c.documentElement.clientWidth:console.warn("Can not detect viewport width."),d},e.prototype.replace=function(b){this.$stage.empty(),this._items=[],b&&(b=b instanceof jQuery?b:a(b)),this.settings.nestedItemSelector&&(b=b.find("."+this.settings.nestedItemSelector)),b.filter(function(){return 1===this.nodeType}).each(a.proxy(function(a,b){b=this.prepare(b),this.$stage.append(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)},this)),this.reset(this.isNumeric(this.settings.startPosition)?this.settings.startPosition:0),this.invalidate("items")},e.prototype.add=function(b,c){var e=this.relative(this._current);c=c===d?this._items.length:this.normalize(c,!0),b=b instanceof jQuery?b:a(b),this.trigger("add",{content:b,position:c}),b=this.prepare(b),0===this._items.length||c===this._items.length?(0===this._items.length&&this.$stage.append(b),0!==this._items.length&&this._items[c-1].after(b),this._items.push(b),this._mergers.push(1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)):(this._items[c].before(b),this._items.splice(c,0,b),this._mergers.splice(c,0,1*b.find("[data-merge]").addBack("[data-merge]").attr("data-merge")||1)),this._items[e]&&this.reset(this._items[e].index()),this.invalidate("items"),this.trigger("added",{content:b,position:c})},e.prototype.remove=function(a){a=this.normalize(a,!0),a!==d&&(this.trigger("remove",{content:this._items[a],position:a}),this._items[a].remove(),this._items.splice(a,1),this._mergers.splice(a,1),this.invalidate("items"),this.trigger("removed",{content:null,position:a}))},e.prototype.preloadAutoWidthImages=function(b){b.each(a.proxy(function(b,c){this.enter("pre-loading"),c=a(c),a(new Image).one("load",a.proxy(function(a){c.attr("src",a.target.src),c.css("opacity",1),this.leave("pre-loading"),!this.is("pre-loading")&&!this.is("initializing")&&this.refresh()},this)).attr("src",c.attr("src")||c.attr("data-src")||c.attr("data-src-retina"))},this))},e.prototype.destroy=function(){this.$element.off(".owl.core"),this.$stage.off(".owl.core"),a(c).off(".owl.core"),this.settings.responsive!==!1&&(b.clearTimeout(this.resizeTimer),this.off(b,"resize",this._handlers.onThrottledResize));for(var d in this._plugins)this._plugins[d].destroy();this.$stage.children(".cloned").remove(),this.$stage.unwrap(),this.$stage.children().contents().unwrap(),this.$stage.children().unwrap(),this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class",this.$element.attr("class").replace(new RegExp(this.options.responsiveClass+"-\\S+\\s","g"),"")).removeData("owl.carousel")},e.prototype.op=function(a,b,c){var d=this.settings.rtl;switch(b){case"<":return d?a>c:a<c;case">":return d?a<c:a>c;case">=":return d?a<=c:a>=c;case"<=":return d?a>=c:a<=c}},e.prototype.on=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,d):a.attachEvent&&a.attachEvent("on"+b,c)},e.prototype.off=function(a,b,c,d){a.removeEventListener?a.removeEventListener(b,c,d):a.detachEvent&&a.detachEvent("on"+b,c)},e.prototype.trigger=function(b,c,d,f,g){var h={item:{count:this._items.length,index:this.current()}},i=a.camelCase(a.grep(["on",b,d],function(a){return a}).join("-").toLowerCase()),j=a.Event([b,"owl",d||"carousel"].join(".").toLowerCase(),a.extend({relatedTarget:this},h,c));return this._supress[b]||(a.each(this._plugins,function(a,b){b.onTrigger&&b.onTrigger(j)}),this.register({type:e.Type.Event,name:b}),this.$element.trigger(j),this.settings&&"function"==typeof this.settings[i]&&this.settings[i].call(this,j)),j},e.prototype.enter=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]===d&&(this._states.current[b]=0),this._states.current[b]++},this))},e.prototype.leave=function(b){a.each([b].concat(this._states.tags[b]||[]),a.proxy(function(a,b){this._states.current[b]--},this))},e.prototype.register=function(b){if(b.type===e.Type.Event){if(a.event.special[b.name]||(a.event.special[b.name]={}),!a.event.special[b.name].owl){var c=a.event.special[b.name]._default;a.event.special[b.name]._default=function(a){return!c||!c.apply||a.namespace&&a.namespace.indexOf("owl")!==-1?a.namespace&&a.namespace.indexOf("owl")>-1:c.apply(this,arguments)},a.event.special[b.name].owl=!0}}else b.type===e.Type.State&&(this._states.tags[b.name]?this._states.tags[b.name]=this._states.tags[b.name].concat(b.tags):this._states.tags[b.name]=b.tags,this._states.tags[b.name]=a.grep(this._states.tags[b.name],a.proxy(function(c,d){return a.inArray(c,this._states.tags[b.name])===d},this)))},e.prototype.suppress=function(b){a.each(b,a.proxy(function(a,b){this._supress[b]=!0},this))},e.prototype.release=function(b){a.each(b,a.proxy(function(a,b){delete this._supress[b]},this))},e.prototype.pointer=function(a){var c={x:null,y:null};return a=a.originalEvent||a||b.event,a=a.touches&&a.touches.length?a.touches[0]:a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:a,a.pageX?(c.x=a.pageX,c.y=a.pageY):(c.x=a.clientX,c.y=a.clientY),c},e.prototype.isNumeric=function(a){return!isNaN(parseFloat(a))},e.prototype.difference=function(a,b){return{x:a.x-b.x,y:a.y-b.y}},a.fn.owlCarousel=function(b){var c=Array.prototype.slice.call(arguments,1);return this.each(function(){var d=a(this),f=d.data("owl.carousel");f||(f=new e(this,"object"==typeof b&&b),d.data("owl.carousel",f),a.each(["next","prev","to","destroy","refresh","replace","add","remove"],function(b,c){f.register({type:e.Type.Event,name:c}),f.$element.on(c+".owl.carousel.core",a.proxy(function(a){a.namespace&&a.relatedTarget!==this&&(this.suppress([c]),f[c].apply(this,[].slice.call(arguments,1)),this.release([c]))},f))})),"string"==typeof b&&"_"!==b.charAt(0)&&f[b].apply(f,c)})},a.fn.owlCarousel.Constructor=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._interval=null,this._visible=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoRefresh&&this.watch()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoRefresh:!0,autoRefreshInterval:500},e.prototype.watch=function(){this._interval||(this._visible=this._core.$element.is(":visible"),this._interval=b.setInterval(a.proxy(this.refresh,this),this._core.settings.autoRefreshInterval))},e.prototype.refresh=function(){this._core.$element.is(":visible")!==this._visible&&(this._visible=!this._visible,this._core.$element.toggleClass("owl-hidden",!this._visible),this._visible&&this._core.invalidate("width")&&this._core.refresh())},e.prototype.destroy=function(){var a,c;b.clearInterval(this._interval);for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoRefresh=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._loaded=[],this._handlers={"initialized.owl.carousel change.owl.carousel resized.owl.carousel":a.proxy(function(b){if(b.namespace&&this._core.settings&&this._core.settings.lazyLoad&&(b.property&&"position"==b.property.name||"initialized"==b.type))for(var c=this._core.settings,e=c.center&&Math.ceil(c.items/2)||c.items,f=c.center&&e*-1||0,g=(b.property&&b.property.value!==d?b.property.value:this._core.current())+f,h=this._core.clones().length,i=a.proxy(function(a,b){this.load(b)},this);f++<e;)this.load(h/2+this._core.relative(g)),h&&a.each(this._core.clones(this._core.relative(g)),i),g++},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={lazyLoad:!1},e.prototype.load=function(c){var d=this._core.$stage.children().eq(c),e=d&&d.find(".owl-lazy");!e||a.inArray(d.get(0),this._loaded)>-1||(e.each(a.proxy(function(c,d){var e,f=a(d),g=b.devicePixelRatio>1&&f.attr("data-src-retina")||f.attr("data-src");this._core.trigger("load",{element:f,url:g},"lazy"),f.is("img")?f.one("load.owl.lazy",a.proxy(function(){f.css("opacity",1),this._core.trigger("loaded",{element:f,url:g},"lazy")},this)).attr("src",g):(e=new Image,e.onload=a.proxy(function(){f.css({"background-image":'url("'+g+'")',opacity:"1"}),this._core.trigger("loaded",{element:f,url:g},"lazy")},this),e.src=g)},this)),this._loaded.push(d.get(0)))},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this._core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Lazy=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._handlers={"initialized.owl.carousel refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&this.update()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&"position"==a.property.name&&this.update()},this),"loaded.owl.lazy":a.proxy(function(a){a.namespace&&this._core.settings.autoHeight&&a.element.closest("."+this._core.settings.itemClass).index()===this._core.current()&&this.update()},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers)};e.Defaults={autoHeight:!1,autoHeightClass:"owl-height"},e.prototype.update=function(){var b=this._core._current,c=b+this._core.settings.items,d=this._core.$stage.children().toArray().slice(b,c),e=[],f=0;a.each(d,function(b,c){e.push(a(c).height())}),f=Math.max.apply(null,e),this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)},e.prototype.destroy=function(){var a,b;for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.AutoHeight=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._videos={},this._playing=null,this._handlers={"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.register({type:"state",name:"playing",tags:["interacting"]})},this),"resize.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.video&&this.isInFullScreen()&&a.preventDefault()},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._core.is("resizing")&&this._core.$stage.find(".cloned .owl-video-frame").remove()},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"===a.property.name&&this._playing&&this.stop()},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find(".owl-video");c.length&&(c.css("display","none"),this.fetch(c,a(b.content)))}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this._core.$element.on(this._handlers),this._core.$element.on("click.owl.video",".owl-video-play-icon",a.proxy(function(a){this.play(a)},this))};e.Defaults={video:!1,videoHeight:!1,videoWidth:!1},e.prototype.fetch=function(a,b){var c=function(){return a.attr("data-vimeo-id")?"vimeo":a.attr("data-vzaar-id")?"vzaar":"youtube"}(),d=a.attr("data-vimeo-id")||a.attr("data-youtube-id")||a.attr("data-vzaar-id"),e=a.attr("data-width")||this._core.settings.videoWidth,f=a.attr("data-height")||this._core.settings.videoHeight,g=a.attr("href");if(!g)throw new Error("Missing video URL.");if(d=g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),d[3].indexOf("youtu")>-1)c="youtube";else if(d[3].indexOf("vimeo")>-1)c="vimeo";else{if(!(d[3].indexOf("vzaar")>-1))throw new Error("Video URL not supported.");c="vzaar"}d=d[6],this._videos[g]={type:c,id:d,width:e,height:f},b.attr("data-video",g),this.thumbnail(a,this._videos[g])},e.prototype.thumbnail=function(b,c){var d,e,f,g=c.width&&c.height?'style="width:'+c.width+"px;height:"+c.height+'px;"':"",h=b.find("img"),i="src",j="",k=this._core.settings,l=function(a){e='<div class="owl-video-play-icon"></div>',d=k.lazyLoad?'<div class="owl-video-tn '+j+'" '+i+'="'+a+'"></div>':'<div class="owl-video-tn" style="opacity:1;background-image:url('+a+')"></div>',b.after(d),b.after(e)};if(b.wrap('<div class="owl-video-wrapper"'+g+"></div>"),this._core.settings.lazyLoad&&(i="data-src",j="owl-lazy"),h.length)return l(h.attr(i)),h.remove(),!1;"youtube"===c.type?(f="//img.youtube.com/vi/"+c.id+"/hqdefault.jpg",l(f)):"vimeo"===c.type?a.ajax({type:"GET",url:"//vimeo.com/api/v2/video/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a[0].thumbnail_large,l(f)}}):"vzaar"===c.type&&a.ajax({type:"GET",url:"//vzaar.com/api/videos/"+c.id+".json",jsonp:"callback",dataType:"jsonp",success:function(a){f=a.framegrab_url,l(f)}})},e.prototype.stop=function(){this._core.trigger("stop",null,"video"),this._playing.find(".owl-video-frame").remove(),this._playing.removeClass("owl-video-playing"),this._playing=null,this._core.leave("playing"),this._core.trigger("stopped",null,"video")},e.prototype.play=function(b){var c,d=a(b.target),e=d.closest("."+this._core.settings.itemClass),f=this._videos[e.attr("data-video")],g=f.width||"100%",h=f.height||this._core.$stage.height();this._playing||(this._core.enter("playing"),this._core.trigger("play",null,"video"),e=this._core.items(this._core.relative(e.index())),this._core.reset(e.index()),"youtube"===f.type?c='<iframe width="'+g+'" height="'+h+'" src="//www.youtube.com/embed/'+f.id+"?autoplay=1&rel=0&v="+f.id+'" frameborder="0" allowfullscreen></iframe>':"vimeo"===f.type?c='<iframe src="//player.vimeo.com/video/'+f.id+'?autoplay=1" width="'+g+'" height="'+h+'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>':"vzaar"===f.type&&(c='<iframe frameborder="0"height="'+h+'"width="'+g+'" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/'+f.id+'/player?autoplay=true"></iframe>'),a('<div class="owl-video-frame">'+c+"</div>").insertAfter(e.find(".owl-video")),this._playing=e.addClass("owl-video-playing"))},e.prototype.isInFullScreen=function(){var b=c.fullscreenElement||c.mozFullScreenElement||c.webkitFullscreenElement;return b&&a(b).parent().hasClass("owl-video-frame")},e.prototype.destroy=function(){var a,b;this._core.$element.off("click.owl.video");for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.Video=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this.core=b,this.core.options=a.extend({},e.Defaults,this.core.options),this.swapping=!0,this.previous=d,this.next=d,this.handlers={"change.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&(this.previous=this.core.current(),this.next=a.property.value)},this),"drag.owl.carousel dragged.owl.carousel translated.owl.carousel":a.proxy(function(a){a.namespace&&(this.swapping="translated"==a.type)},this),"translate.owl.carousel":a.proxy(function(a){a.namespace&&this.swapping&&(this.core.options.animateOut||this.core.options.animateIn)&&this.swap()},this)},this.core.$element.on(this.handlers)};e.Defaults={animateOut:!1,animateIn:!1},e.prototype.swap=function(){if(1===this.core.settings.items&&a.support.animation&&a.support.transition){this.core.speed(0);var b,c=a.proxy(this.clear,this),d=this.core.$stage.children().eq(this.previous),e=this.core.$stage.children().eq(this.next),f=this.core.settings.animateIn,g=this.core.settings.animateOut;this.core.current()!==this.previous&&(g&&(b=this.core.coordinates(this.previous)-this.core.coordinates(this.next),d.one(a.support.animation.end,c).css({left:b+"px"}).addClass("animated owl-animated-out").addClass(g)),f&&e.one(a.support.animation.end,c).addClass("animated owl-animated-in").addClass(f))}},e.prototype.clear=function(b){a(b.target).css({left:""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),this.core.onTransitionEnd()},e.prototype.destroy=function(){var a,b;for(a in this.handlers)this.core.$element.off(a,this.handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},
a.fn.owlCarousel.Constructor.Plugins.Animate=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){var e=function(b){this._core=b,this._timeout=null,this._paused=!1,this._handlers={"changed.owl.carousel":a.proxy(function(a){a.namespace&&"settings"===a.property.name?this._core.settings.autoplay?this.play():this.stop():a.namespace&&"position"===a.property.name&&this._core.settings.autoplay&&this._setAutoPlayInterval()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.autoplay&&this.play()},this),"play.owl.autoplay":a.proxy(function(a,b,c){a.namespace&&this.play(b,c)},this),"stop.owl.autoplay":a.proxy(function(a){a.namespace&&this.stop()},this),"mouseover.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"mouseleave.owl.autoplay":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.play()},this),"touchstart.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this._core.is("rotating")&&this.pause()},this),"touchend.owl.core":a.proxy(function(){this._core.settings.autoplayHoverPause&&this.play()},this)},this._core.$element.on(this._handlers),this._core.options=a.extend({},e.Defaults,this._core.options)};e.Defaults={autoplay:!1,autoplayTimeout:5e3,autoplayHoverPause:!1,autoplaySpeed:!1},e.prototype.play=function(a,b){this._paused=!1,this._core.is("rotating")||(this._core.enter("rotating"),this._setAutoPlayInterval())},e.prototype._getNextTimeout=function(d,e){return this._timeout&&b.clearTimeout(this._timeout),b.setTimeout(a.proxy(function(){this._paused||this._core.is("busy")||this._core.is("interacting")||c.hidden||this._core.next(e||this._core.settings.autoplaySpeed)},this),d||this._core.settings.autoplayTimeout)},e.prototype._setAutoPlayInterval=function(){this._timeout=this._getNextTimeout()},e.prototype.stop=function(){this._core.is("rotating")&&(b.clearTimeout(this._timeout),this._core.leave("rotating"))},e.prototype.pause=function(){this._core.is("rotating")&&(this._paused=!0)},e.prototype.destroy=function(){var a,b;this.stop();for(a in this._handlers)this._core.$element.off(a,this._handlers[a]);for(b in Object.getOwnPropertyNames(this))"function"!=typeof this[b]&&(this[b]=null)},a.fn.owlCarousel.Constructor.Plugins.autoplay=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(b){this._core=b,this._initialized=!1,this._pages=[],this._controls={},this._templates=[],this.$element=this._core.$element,this._overrides={next:this._core.next,prev:this._core.prev,to:this._core.to},this._handlers={"prepared.owl.carousel":a.proxy(function(b){b.namespace&&this._core.settings.dotsData&&this._templates.push('<div class="'+this._core.settings.dotClass+'">'+a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot")+"</div>")},this),"added.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,0,this._templates.pop())},this),"remove.owl.carousel":a.proxy(function(a){a.namespace&&this._core.settings.dotsData&&this._templates.splice(a.position,1)},this),"changed.owl.carousel":a.proxy(function(a){a.namespace&&"position"==a.property.name&&this.draw()},this),"initialized.owl.carousel":a.proxy(function(a){a.namespace&&!this._initialized&&(this._core.trigger("initialize",null,"navigation"),this.initialize(),this.update(),this.draw(),this._initialized=!0,this._core.trigger("initialized",null,"navigation"))},this),"refreshed.owl.carousel":a.proxy(function(a){a.namespace&&this._initialized&&(this._core.trigger("refresh",null,"navigation"),this.update(),this.draw(),this._core.trigger("refreshed",null,"navigation"))},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers)};e.Defaults={nav:!1,navText:["prev","next"],navSpeed:!1,navElement:"div",navContainer:!1,navContainerClass:"owl-nav",navClass:["owl-prev","owl-next"],slideBy:1,dotClass:"owl-dot",dotsClass:"owl-dots",dots:!0,dotsEach:!1,dotsData:!1,dotsSpeed:!1,dotsContainer:!1},e.prototype.initialize=function(){var b,c=this._core.settings;this._controls.$relative=(c.navContainer?a(c.navContainer):a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),this._controls.$previous=a("<"+c.navElement+">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click",a.proxy(function(a){this.prev(c.navSpeed)},this)),this._controls.$next=a("<"+c.navElement+">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click",a.proxy(function(a){this.next(c.navSpeed)},this)),c.dotsData||(this._templates=[a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),this._controls.$absolute=(c.dotsContainer?a(c.dotsContainer):a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),this._controls.$absolute.on("click","div",a.proxy(function(b){var d=a(b.target).parent().is(this._controls.$absolute)?a(b.target).index():a(b.target).parent().index();b.preventDefault(),this.to(d,c.dotsSpeed)},this));for(b in this._overrides)this._core[b]=a.proxy(this[b],this)},e.prototype.destroy=function(){var a,b,c,d;for(a in this._handlers)this.$element.off(a,this._handlers[a]);for(b in this._controls)this._controls[b].remove();for(d in this.overides)this._core[d]=this._overrides[d];for(c in Object.getOwnPropertyNames(this))"function"!=typeof this[c]&&(this[c]=null)},e.prototype.update=function(){var a,b,c,d=this._core.clones().length/2,e=d+this._core.items().length,f=this._core.maximum(!0),g=this._core.settings,h=g.center||g.autoWidth||g.dotsData?1:g.dotsEach||g.items;if("page"!==g.slideBy&&(g.slideBy=Math.min(g.slideBy,g.items)),g.dots||"page"==g.slideBy)for(this._pages=[],a=d,b=0,c=0;a<e;a++){if(b>=h||0===b){if(this._pages.push({start:Math.min(f,a-d),end:a-d+h-1}),Math.min(f,a-d)===f)break;b=0,++c}b+=this._core.mergers(this._core.relative(a))}},e.prototype.draw=function(){var b,c=this._core.settings,d=this._core.items().length<=c.items,e=this._core.relative(this._core.current()),f=c.loop||c.rewind;this._controls.$relative.toggleClass("disabled",!c.nav||d),c.nav&&(this._controls.$previous.toggleClass("disabled",!f&&e<=this._core.minimum(!0)),this._controls.$next.toggleClass("disabled",!f&&e>=this._core.maximum(!0))),this._controls.$absolute.toggleClass("disabled",!c.dots||d),c.dots&&(b=this._pages.length-this._controls.$absolute.children().length,c.dotsData&&0!==b?this._controls.$absolute.html(this._templates.join("")):b>0?this._controls.$absolute.append(new Array(b+1).join(this._templates[0])):b<0&&this._controls.$absolute.children().slice(b).remove(),this._controls.$absolute.find(".active").removeClass("active"),this._controls.$absolute.children().eq(a.inArray(this.current(),this._pages)).addClass("active"))},e.prototype.onTrigger=function(b){var c=this._core.settings;b.page={index:a.inArray(this.current(),this._pages),count:this._pages.length,size:c&&(c.center||c.autoWidth||c.dotsData?1:c.dotsEach||c.items)}},e.prototype.current=function(){var b=this._core.relative(this._core.current());return a.grep(this._pages,a.proxy(function(a,c){return a.start<=b&&a.end>=b},this)).pop()},e.prototype.getPosition=function(b){var c,d,e=this._core.settings;return"page"==e.slideBy?(c=a.inArray(this.current(),this._pages),d=this._pages.length,b?++c:--c,c=this._pages[(c%d+d)%d].start):(c=this._core.relative(this._core.current()),d=this._core.items().length,b?c+=e.slideBy:c-=e.slideBy),c},e.prototype.next=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!0),b)},e.prototype.prev=function(b){a.proxy(this._overrides.to,this._core)(this.getPosition(!1),b)},e.prototype.to=function(b,c,d){var e;!d&&this._pages.length?(e=this._pages.length,a.proxy(this._overrides.to,this._core)(this._pages[(b%e+e)%e].start,c)):a.proxy(this._overrides.to,this._core)(b,c)},a.fn.owlCarousel.Constructor.Plugins.Navigation=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){"use strict";var e=function(c){this._core=c,this._hashes={},this.$element=this._core.$element,this._handlers={"initialized.owl.carousel":a.proxy(function(c){c.namespace&&"URLHash"===this._core.settings.startPosition&&a(b).trigger("hashchange.owl.navigation")},this),"prepared.owl.carousel":a.proxy(function(b){if(b.namespace){var c=a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");if(!c)return;this._hashes[c]=b.content}},this),"changed.owl.carousel":a.proxy(function(c){if(c.namespace&&"position"===c.property.name){var d=this._core.items(this._core.relative(this._core.current())),e=a.map(this._hashes,function(a,b){return a===d?b:null}).join();if(!e||b.location.hash.slice(1)===e)return;b.location.hash=e}},this)},this._core.options=a.extend({},e.Defaults,this._core.options),this.$element.on(this._handlers),a(b).on("hashchange.owl.navigation",a.proxy(function(a){var c=b.location.hash.substring(1),e=this._core.$stage.children(),f=this._hashes[c]&&e.index(this._hashes[c]);f!==d&&f!==this._core.current()&&this._core.to(this._core.relative(f),!1,!0)},this))};e.Defaults={URLhashListener:!1},e.prototype.destroy=function(){var c,d;a(b).off("hashchange.owl.navigation");for(c in this._handlers)this._core.$element.off(c,this._handlers[c]);for(d in Object.getOwnPropertyNames(this))"function"!=typeof this[d]&&(this[d]=null)},a.fn.owlCarousel.Constructor.Plugins.Hash=e}(window.Zepto||window.jQuery,window,document),function(a,b,c,d){function e(b,c){var e=!1,f=b.charAt(0).toUpperCase()+b.slice(1);return a.each((b+" "+h.join(f+" ")+f).split(" "),function(a,b){if(g[b]!==d)return e=!c||b,!1}),e}function f(a){return e(a,!0)}var g=a("<support>").get(0).style,h="Webkit Moz O ms".split(" "),i={transition:{end:{WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",transition:"transitionend"}},animation:{end:{WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd",animation:"animationend"}}},j={csstransforms:function(){return!!e("transform")},csstransforms3d:function(){return!!e("perspective")},csstransitions:function(){return!!e("transition")},cssanimations:function(){return!!e("animation")}};j.csstransitions()&&(a.support.transition=new String(f("transition")),a.support.transition.end=i.transition.end[a.support.transition]),j.cssanimations()&&(a.support.animation=new String(f("animation")),a.support.animation.end=i.animation.end[a.support.animation]),j.csstransforms()&&(a.support.transform=new String(f("transform")),a.support.transform3d=j.csstransforms3d())}(window.Zepto||window.jQuery,window,document);

!function(s){"use strict";function e(s){return new RegExp("(^|\\s+)"+s+"(\\s+|$)")}var n,a,t;function c(s,e){(n(s,e)?t:a)(s,e)}"classList"in document.documentElement?(n=function(s,e){return s.classList.contains(e)},a=function(s,e){s.classList.add(e)},t=function(s,e){s.classList.remove(e)}):(n=function(s,n){return e(n).test(s.className)},a=function(s,e){n(s,e)||(s.className=s.className+" "+e)},t=function(s,n){s.className=s.className.replace(e(n)," ")});var i={hasClass:n,addClass:a,removeClass:t,toggleClass:c,has:n,add:a,remove:t,toggle:c};"function"==typeof define&&define.amd?define(i):s.classie=i}(window);
/** End Stick Default Settings **/

!function(e){var t,a,o="rd-mobilemenu",n="rd-mobilemenu_ul",i="rd-mobilemenu_submenu",s="rd-mobilepanel",l="rd-mobilepanel_toggle",r="rd-mobilepanel_title",c=function(t,a){this.options=a,this.$source=e(t)};c.prototype={init:function(){this.createDOM(),this.createListeners()},createDOM:function(){e("body").append(e("<div/>",{class:o}).append(this.createNavDOM())).append(e("<div/>",{class:s}).append(e("<button/>",{class:l}).append(e("<span/>"))).append(e("<h2/>",{class:r,text:"MENU"})))},createNavDOM:function(){for(var t=e("<ul>",{class:n}),a=this.$source.children(),o=0;o<a.length;o++){for(var s=a[o].children,l=null,r=0;r<s.length;r++)if(s[r].tagName)switch(l||(l=document.createElement("li"),a[o].className.indexOf("active")>-1&&(l.className="active")),s[r].tagName.toLowerCase()){case"a":var c=s[r].cloneNode(!0);l.appendChild(c);break;case"ul":var d=s[r].cloneNode(!0);d.className=i,e(d).css({display:"none"}),l.appendChild(d),e(l).find("> a").each(function(){$this=e(this),$this.addClass("rd-with-ul").append(e("<span/>",{class:"rd-submenu-toggle"})).find(".rd-submenu-toggle").on("click",function(t){var a;(t.preventDefault(),$this=e(this).parent(),$this.hasClass("rd-with-ul")&&!$this.hasClass("active"))?(e(".rd-with-ul").removeClass("active"),(a=$this.addClass("active").parent().find("."+i)).stop().slideDown(),e("."+i).not(a).stop().slideUp()):(a=$this.removeClass("active").parent().find("."+i)).stop().slideUp()})})}l&&t.append(l)}return t},createListeners:function(){this.createToggleListener(),this.createResizeListener()},createToggleListener:function(){var t,a=this;t=a.isMobile()?"touchstart":"click",e("body").delegate("."+l,t,function(){var n=e("."+o);e(this).toggleClass("active"),n.hasClass("active")?(e(this).removeClass("active"),n.removeClass("active"),e("body").undelegate("*","mousewheel",a.scroll),e("body").undelegate("*","touchmove",a.scroll),e("body").undelegate("*","touchend",a.touchend),e("body").undelegate("*","touchstart",a.close),e("body").undelegate("*:not(."+l+" span)","click",a.close)):(e(this).addClass("active"),n.addClass("active"),e("body").delegate("*","mousewheel",a.scroll),e("body").delegate("*","touchmove",a.scroll),e("body").delegate("*","touchend",a.touchend),e("body").delegate("*","touchstart",{type:t},a.close),e("body").delegate("*:not(."+l+" span)","click",{type:t},a.close))})},createResizeListener:function(){var t=this;e(window).on("resize",function(){var a=e("."+o);"none"==a.css("display")&&(a.removeClass("active"),e("."+l).removeClass("active"),e("body").undelegate("*","mousewheel",t.scroll),e("body").undelegate("*","touchmove",t.scroll),e("body").undelegate("*","touchend",t.touchend),e("body").undelegate("*","touchstart",t.close),e("body").undelegate("*:not(."+l+" span)","click",t.close))})},scroll:function(o){o.preventDefault();var i=e("."+n),s=o.originalEvent.targetTouches?o.originalEvent.targetTouches[0].pageX:o.pageX,l=o.originalEvent.targetTouches?o.originalEvent.targetTouches[0].pageY:o.pageY;if(l>i.offset().top&&l<i.offset().top+i.outerHeight()&&s>i.offset().left&&s<i.offset().left+i.outerWidth()){var r=0;o.originalEvent.targetTouches?(t||(t=l),r=t-l,t=l,a=r>0):r=-50*(o.originalEvent.wheelDelta||-o.originalEvent.detail),i.stop().scrollTop(i.scrollTop()+r)}return!1},touchend:function(o){var i=e("."+n);i.stop().animate({scrollTop:i.scrollTop()+(a?100:-100)},3e3,"easeOutQuint"),t=void 0},close:function(t){if(t.originalEvent){var a=e("."+n),o=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageX:t.pageX,i=t.originalEvent.targetTouches?t.originalEvent.targetTouches[0].pageY:t.pageY;i>a.offset().top&&i<a.offset().top+a.outerHeight()&&o>a.offset().left&&o<a.offset().left+a.outerWidth()||e("."+l).trigger(t.data.type)}},isMobile:function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}},e.fn.rdparallax=function(e){var t=this;return t.length&&new c(t[0]).init(),t},window.RDMobilemenu_autoinit=function(t){var a=e(t);a.length&&new c(a[0]).init()}}(jQuery),$(document).ready(function(){RDMobilemenu_autoinit('[data-type="navbar"]')});
/** End Mobile Menu Default Settings **/


!function(a,b,c){a.fn.scrollUp=function(b){a.data(c.body,"scrollUp")||(a.data(c.body,"scrollUp",!0),a.fn.scrollUp.init(b))},a.fn.scrollUp.init=function(d){var e,f=a.fn.scrollUp.settings=a.extend({},a.fn.scrollUp.defaults,d);e=f.scrollTrigger?a(f.scrollTrigger):a("<a/>",{id:f.scrollName,href:"#top"}),f.scrollTitle&&e.attr("title",f.scrollTitle),e.appendTo("body"),f.scrollImg||f.scrollTrigger||e.html(f.scrollText),e.css({display:"none",position:"fixed",zIndex:f.zIndex}),f.activeOverlay&&a("<div/>",{id:f.scrollName+"-active"}).css({position:"absolute",top:f.scrollDistance+"px",width:"100%",borderTop:"1px dotted"+f.activeOverlay,zIndex:f.zIndex}).appendTo("body");var g,h,i,j;switch(f.animation){case"fade":g="fadeIn",h="fadeOut",i=f.animationSpeed;break;case"slide":g="slideDown",h="slideUp",i=f.animationSpeed;break;default:g="show",h="hide",i=0}j="top"===f.scrollFrom?f.scrollDistance:a(c).height()-a(b).height()-f.scrollDistance;var k=!1;scrollEvent=a(b).scroll(function(){a(b).scrollTop()>j?k||(e[g](i),k=!0):k&&(e[h](i),k=!1)});var l;f.scrollTarget?"number"==typeof f.scrollTarget?l=f.scrollTarget:"string"==typeof f.scrollTarget&&(l=Math.floor(a(f.scrollTarget).offset().top)):l=0,e.click(function(b){b.preventDefault(),a("html, body").animate({scrollTop:l},f.scrollSpeed,f.easingType)})},a.fn.scrollUp.defaults={scrollName:"scrollUp",scrollDistance:300,scrollFrom:"top",scrollSpeed:300,easingType:"linear",animation:"fade",animationSpeed:200,scrollTrigger:!1,scrollTarget:!1,scrollText:"Scroll to top",scrollTitle:!1,scrollImg:!1,activeOverlay:!1,zIndex:2147483647},a.fn.scrollUp.destroy=function(d){a.removeData(c.body,"scrollUp"),a("#"+a.fn.scrollUp.settings.scrollName).remove(),a("#"+a.fn.scrollUp.settings.scrollName+"-active").remove(),a.fn.jquery.split(".")[1]>=7?a(b).off("scroll",d):a(b).unbind("scroll",d)},a.scrollUp=a.fn.scrollUp}(jQuery,window,document);
/** End Scroll Default Settings **/


jQuery.cookie=function(e,o,i){if(void 0===o){var n=null;if(document.cookie&&""!=document.cookie)for(var r=document.cookie.split(";"),t=0;t<r.length;t++){var p=jQuery.trim(r[t]);if(p.substring(0,e.length+1)==e+"="){n=decodeURIComponent(p.substring(e.length+1));break}}return n}i=i||{},null===o&&(o="",i.expires=-1);var s,u="";i.expires&&("number"==typeof i.expires||i.expires.toUTCString)&&("number"==typeof i.expires?(s=new Date).setTime(s.getTime()+24*i.expires*60*60*1e3):s=i.expires,u="; expires="+s.toUTCString());var c=i.path?"; path="+i.path:"",m=i.domain?"; domain="+i.domain:"",a=i.secure?"; secure":"";document.cookie=[e,"=",encodeURIComponent(o),u,c,m,a].join("")};
/** End cookie Default Settings **/	
	
	
	
	$(document).ready(function(){	 
		$(".ezmo").click(function() {   
			$(this).toggleClass("ezmoil");  
		});	  
	});

	
	$(document).ready(function(){
		
		/*
			* Tab Menü Geniş
		*/ 
		
		$(".background-tab-content .nav-item a:first").addClass("active");
		$(".background-tab-content .tab-content div:first").addClass("show active");
		$("#mainMenu nav > #mobile_search_menu").css({  display: 'none'  }); 
		
		/*
			* Şablon 2 Manşet Yanı
		*/	
		
		$(".tab-card-header .nav-pills a:first").addClass("active");
		$(".left-headline .tab-content div:first").addClass("show active");
		 	
		/*
			* Şablon 2 Tab Menü Geniş
		*/	
		
		$("#tab-menu-list li a:first").addClass("active");
		$("#featured-tab-content_2 .tab-content div:first").addClass("show active");
		
			 	
		/*
			* Şablon 3 Tab Menü Sol
		*/	
		
		$("#tabmenu_left .tab-menu-list li a:first").addClass("active");
		$("#tabmenu_right .tab-menu-list li a:first").addClass("active");
		 
		$("#tabmenu_left .tab-content div:first").addClass("show active");
		$("#tabmenu_right .tab-content div:first").addClass("show active");
		
	});	
	
	
	
	
	
	/*
		**** Dynamic form control
	*/ 
	
	
	$( "#dynamic_form select").addClass("custom-select");
	$( "#dynamic_form table").removeClass("form-control").addClass("");
	
	 
	/*
		**** Youtube video control
	*/ 
	
	autoPlayYouTubeModal(); 
	function autoPlayYouTubeModal() {

	var trigger = $("body").find('[data-toggle="modal"]');

	trigger.click(function () {
		var theModal = $(this).data("target"),
			videoSRC = $(this).attr("data-theVideo"),
			video_title = $(this).attr("data-title"),
			videoSRCauto = videoSRC + "?autoplay=1&rel=0";
			  
			$(theModal + ' iframe').attr('src', videoSRCauto);
			$(theModal + ' button.close').click(function () {
			  $(theModal + ' iframe').attr('src', videoSRC);
		  });
		  
		  $(".video_title").html(""+video_title+"");
	  });
	}	

	/*
		**** Sitemap control 
	*/
	
	$(document).ready(function() {  
		$.fn.extend({
		siteagacd: function (o) {
  
		var openedClass = 'glyphicon-minus-sign';
		var closedClass = 'glyphicon-plus-sign';
		  
		  if (typeof o != 'undefined'){
			if (typeof o.openedClass != 'undefined'){
				openedClass = o.openedClass;
			}
			if (typeof o.closedClass != 'undefined'){
				closedClass = o.closedClass;
			}
		};
	   
		var siteagac = $(this);
		siteagac.addClass("siteagac");
		siteagac.find('li').has("ul").each(function () {
			var branch = $(this); 
			branch.prepend("<i class='indicator glyphicon " + closedClass + "'></i>");
			branch.addClass('branch');
			branch.on('click', function (e) {
				if (this == e.target) {
					var icon = $(this).children('i:first');
					icon.toggleClass(openedClass + " " + closedClass);
					$(this).children().children().toggle();
				}
			})
			branch.children().children().toggle();
		});

		siteagac.find('.branch .indicator').each(function(){
			$(this).on('click', function () {
				$(this).closest('li').click();
			});
		});
		
		siteagac.find('.branch>a').each(function () {
			$(this).on('click', function (e) {
				$(this).closest('li').click();
				e.preventDefault();
			});
		});

		siteagac.find('.branch>button').each(function () {
			$(this).on('click', function (e) {
				$(this).closest('li').click();
				e.preventDefault();
			});
		});
		}
	});

		$('.siteagac1').siteagacd(); 
		$('.siteagac2').siteagacd({openedClass:'glyphicon-folder-open', closedClass:'glyphicon-folder-close'}); 
		$('.siteagac3').siteagacd({openedClass:'glyphicon-chevron-right', closedClass:'glyphicon-chevron-down'});

	});	

 
 	$("#search-blog").hide();
	
	$(".search-button").click(function() {
		$("#search-blog").slideToggle("normal");  
	});
 
	$(document).ready(function(){	 
		$(".search-button-result").click(function() { 
		
		var lang 	= wiy_page_data["Dil"];
		var tbl 	= wiy_page_data["DilAnah"]; 
		var query = $("#typeahead").val();  
			 
			window.location.href  = "arama?_Dil="+tbl+"&p="+query+"";
			
		});
	});
	 
	$(document).ready(function(){
		$('#search_form').keypress(function (e) {
			if (e.which == 13) { 
				e.preventDefault();
				var lang 	= wiy_page_data["Dil"];
				var tbl 	= wiy_page_data["DilAnah"];  
				var query = $("#typeahead").val();   
				location.href  = "/arama?_Dil="+tbl+"&p="+query+"";  
				return false;
			
			}
		});	
	 });
	
 
	$(document).ready(function(){	 
		$(".BakanlikDuyuruLink").attr( {
		   href:"//saglik.gov.tr/Genel/MansetHaberListesi.aspx",
		   title:"Sağlık Bakanlığı Duyuruları" 
	   }); 
	});
 
	function getSaglikAnaHaberlerDateList() {
		
		$.ajax({
			type: "get",
			url: "https://www.saglik.gov.tr/jsonapi?anah=53&tip=2&makseleman=7",
			crossDomain: true,
			dataType: "json",
			success: function(data) {
				var itemhtml = "";
				$.each(data, function(i, item) {
					var str = item.GuncellenmeTarihi;
					var tarih = str.split(".");
					var aylar= ['','Ocak', 'Şubat', 'Mart','Nisan','Mayıs','Haziran','Temmuz','Ağustos','Eylül','Ekim','Kasım','Aralık'];   
					itemhtml = "<li><a rel='noopener noreferrer' target='_blank' href='//saglik.gov.tr/" + item.Url + "'> <span>   " + tarih[0] + " <b>" + aylar[Number(tarih[1])] + "</b> </span> " + item.Ad + " </a></li>";
					$("#saglikhaberler_listesi").append(itemhtml);
				});
			},
			error: function(xhr, status) {
				$("#saglikhaberler_listesi").append("İçerik Oluşturulamadı");
			}
		});
	};
 
	function init() {
		window.addEventListener('scroll', function(e) {

			var distanceY = window.pageYOffset || document.documentElement.scrollTop,
				shrinkOn = 50,
				level2 = 1850,
				header = document.querySelector("header");

			if (distanceY > shrinkOn) {
				classie.add(header, "smaller");
			} else {
				if (classie.has(header, "smaller")) {
					classie.remove(header, "smaller");
				}
			} 
			
			
			if (distanceY > level2) {
				classie.add(header, "smaller2");
			} else {
				if (classie.has(header, "smaller2")) {
					classie.remove(header, "smaller2");
				}
			}
		

		});
	}
	
	
	window.onload = init();

	$(".page-content-body h2").hide();

	function PrintElem(elem) {
		Popup($(elem).html());
	}

	function Popup(data) {

		var mywindow = window.open('', '', 'height=400,width=600');

		mywindow.document.write(data);
		mywindow.print();
		mywindow.close();
		return true;
	}

	 
	var SayfaAnah = wiy_page_data["Anah"]; 
	$(document).ready(function() {
		$("#" + SayfaAnah + "").addClass("active");
	});

 
	$(document).ready(function() {

		var varsayilanFontBuyuklugu = $("#div_print").css("font-size");
		var varsayilanFontBuyuklugu2 = $(".page-content h2").css("font-size");

		var varsayilanFontBuyuklugu3 = $(".page-list li a").css("font-size");

		$(".sifirla").click(function() {
			$("#div_print").css({
				"font-size": varsayilanFontBuyuklugu
			});
			$(".page-content h2").css({
				"font-size": varsayilanFontBuyuklugu2
			});
			$(".page-list li a").css({
				"font-size": varsayilanFontBuyuklugu3
			});
		});

		$(".buyult").click(function() {

			var fontBuyukluguFloat3 = parseFloat($(".page-list li a").css("font-size"));
			var yeniFontBuyuklugu3 = fontBuyukluguFloat3 * 1.1;

			if (yeniFontBuyuklugu3 < 21)
				$(".page-list li a").css({
					"font-size": yeniFontBuyuklugu3
				});
			$('.page-list li a').find('*').css('font-size', yeniFontBuyuklugu3);

			var fontBuyukluguFloat2 = parseFloat($(".page-content h2").css("font-size"));
			var yeniFontBuyuklugu2 = fontBuyukluguFloat2 * 1.1;

			if (yeniFontBuyuklugu2 < 21)
				$(".page-content h2").css({
					"font-size": yeniFontBuyuklugu2
				});
			$('.page-content h2').find('*').css('font-size', yeniFontBuyuklugu2);

			var fontBuyukluguFloat = parseFloat($("#div_print").css("font-size"));
			var yeniFontBuyuklugu = fontBuyukluguFloat * 1.1;
			if (yeniFontBuyuklugu < 21)
				$("#div_print").css({
					"font-size": yeniFontBuyuklugu
				});
			$('#div_print').find('*').css('font-size', yeniFontBuyuklugu);

		});

		$(".kucult").click(function() {

			var fontBuyukluguFloat3 = parseFloat($(".page-list li a").css("font-size"));
			var yeniFontBuyuklugu3 = fontBuyukluguFloat3 * 0.9;

			if (yeniFontBuyuklugu3 > 10)
				$(".page-list li a").css({
					"font-size": yeniFontBuyuklugu3
				});
			$('.page-list li a').find('*').css('font-size', yeniFontBuyuklugu3);

			var fontBuyukluguFloat2 = parseFloat($(".page-content h2").css("font-size"));
			var yeniFontBuyuklugu2 = fontBuyukluguFloat2 * 0.9;

			if (yeniFontBuyuklugu2 > 10)
				$(".page-content h2").css({
					"font-size": yeniFontBuyuklugu2
				});
			$('.page-content h2').find('*').css('font-size', yeniFontBuyuklugu2);
			var fontBuyukluguFloat = parseFloat($("#div_print").css("font-size"));
			var yeniFontBuyuklugu = fontBuyukluguFloat * 0.9;
			if (yeniFontBuyuklugu > 10)
				$("#div_print").css({
					"font-size": yeniFontBuyuklugu
				});
			$('#div_print').find('*').css('font-size', yeniFontBuyuklugu);
		});

	});
	 
	 
	wow = new WOW({
		animateClass: 'animated',
		offset: 100,
		callback: function(box) {
			console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
		}
	});
	wow.init();

	$(document).ready(function(){
		$(function () {
			$.scrollUp({
				scrollName: 'scrollUp', 
				scrollDistance: 300, 
				scrollFrom: 'top', // 'top' or 'bottom'
				scrollSpeed: 300, 
				easingType: 'linear', 
				animation: 'fade', // Fade, slide, none
				animationSpeed: 200, 
				scrollTrigger: false, 
				scrollText: '<i class="fa fa-angle-up"></i>', 
				scrollTitle: false,
				scrollImg: false, 
				activeOverlay: false,
				zIndex: 2147483647
			});
		});
	});

	
	
	
	
  $(document).ready(function() {
	  var bigimage = $("#big");
	  var thumbs = $("#thumbs");
	  //var totalslides = 10;
	  var syncedSecondary = true;

	  bigimage
		.owlCarousel({
		items: 1,
		slideSpeed: 2000,
		autoplayTimeout:6000,
		nav: true,
		autoplay: true,
		dots: false,
		loop: true,
		responsiveRefreshRate: 200,
		navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"] 
	  })
		.on("changed.owl.carousel", syncPosition);

	  thumbs
		.on("initialized.owl.carousel", function() {
		thumbs
		  .find(".owl-item")
		  .eq(0)
		  .addClass("current");
	  })
	   
	  .owlCarousel({
			items: 5,
			dots: false,
			nav: true,
			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"], 
			margin:0,
			smartSpeed: 200,
			slideSpeed: 500,
			slideBy: 4,
			responsiveRefreshRate: 100 
	  })
  
	  .on("changed.owl.carousel", syncPosition2);

	  function syncPosition(el) {

		var count = el.item.count - 1;
		var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

		if (current < 0) {
		  current = count;
		}
		if (current > count) {
		  current = 0;
		}
	   
		thumbs
		  .find(".owl-item")
		  .removeClass("current")
		  .eq(current)
		  .addClass("current");
		var onscreen = thumbs.find(".owl-item.active").length - 1;
		var start = thumbs
		.find(".owl-item.active")
		.first()
		.index();
		var end = thumbs
		.find(".owl-item.active")
		.last()
		.index();

		if (current > end) {
		  thumbs.data("owl.carousel").to(current, 100, true);
		}
		if (current < start) {
		  thumbs.data("owl.carousel").to(current - onscreen, 100, true);
		}
	  }

	  function syncPosition2(el) {
		if (syncedSecondary) {
		  var number = el.item.index;
		  bigimage.data("owl.carousel").to(number, 100, true);
		}
	  }

	  thumbs.on("click", ".owl-item", function(e) {
		e.preventDefault();
		var number = $(this).index();
		bigimage.data("owl.carousel").to(number, 300, true);
	  });
	});

	
	//** Çerez Politikaları **/
	
	$(document).ready(function() {
		function url_degistir (data, data2) {  
			
			data2  	= "http://" + location.host.split(":")[0];
			data 	= data.replace("WEB_ADRES", data2);
			data 	= data.replace("WEB_ADRES_2", data2);
			
			return data
		}
	 
		$(".cookie_policy").delay(2500).animate( {bottom: '0px', opacity: '1'});

		$(".close_cookie_policy").click(function(){
			$(".cookie_policy").animate( {bottom: '-110px', opacity: '0'});
		});	
 
		
	});

	/*
		pages in img no style
	*/
	
	$(document).ready(function() {
		$(".page-content-body img").removeAttr("style");
		$("#div_print img").removeAttr("style");
	});
		
	/*
		Nasıl Giderim
	*/		
		
	$("#ismnsl_GetHastane").change(function () {
		var str = "";
		$("#ismnsl_GetHastane option:selected").each(function() {
		  if($( this ).text() !== "Seçiniz")
			str += $( this ).text()+"'ne";	  
		});
		
		$("#ismnsl_HastaneAdi").text( str );
	  })
	  .change();

	$("#ismnsl_BtnGetMap").click(function(){

		const GelenData = $("#ismnsl_Nereden").val();
		const Mode = $("input[name='ismnsl_Mode']:checked").val();
		const Hastane = $( "#ismnsl_GetHastane option:selected" ).text();

		if(GelenData === '' || Hastane === 'Seçiniz' ||Mode === undefined ){
			$("#ismnsl_Message").html("<p class='alert alert-warning'>Lütfen tüm alanları doldurunuz!</p>");
		}else{
			$("a#ismnsl_BtnGetMap").attr("href", "https://www.google.com/maps/dir/?api=1&origin="+GelenData+"&destination="+Hastane+"&travelmode="+Mode+"");
		}

	});

	$('input:radio[name=ismnsl_Mode]').change(function(){
		$("a#ismnsl_BtnGetMap").removeClass("disabled");
	});		
		
 	
		
		
		
		