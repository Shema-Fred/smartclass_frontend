(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendor~app~7186c19e"],{"0d02":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("4de4"),n("7db0"),n("fb6a");var i=n("b85c"),a=n("d4ec"),o=n("bee2"),c=n("a07d"),s=function(){function e(t){var n=this;if(Object(a["a"])(this,e),Object.assign(this,t),t.actions&&t.keystrokeHandler){var o=function(e){var a=t.actions[e];"string"==typeof a&&(a=[a]);var o,c=Object(i["a"])(a);try{for(c.s();!(o=c.n()).done;){var s=o.value;t.keystrokeHandler.set(s,(function(t,i){n[e](),i()}))}}catch(r){c.e(r)}finally{c.f()}};for(var c in t.actions)o(c)}}return Object(o["a"])(e,[{key:"focusFirst",value:function(){this._focus(this.first)}},{key:"focusLast",value:function(){this._focus(this.last)}},{key:"focusNext",value:function(){this._focus(this.next)}},{key:"focusPrevious",value:function(){this._focus(this.previous)}},{key:"_focus",value:function(e){e&&e.focus()}},{key:"_getFocusableItem",value:function(e){var t=this.current,n=this.focusables.length;if(!n)return null;if(null===t)return this[1===e?"first":"last"];var i=(t+n+e)%n;do{var a=this.focusables.get(i);if(r(a))return a;i=(i+n+e)%n}while(i!==t);return null}},{key:"first",get:function(){return this.focusables.find(r)||null}},{key:"last",get:function(){return this.focusables.filter(r).slice(-1)[0]||null}},{key:"next",get:function(){return this._getFocusableItem(1)}},{key:"previous",get:function(){return this._getFocusableItem(-1)}},{key:"current",get:function(){var e=this,t=null;return null===this.focusTracker.focusedElement?null:(this.focusables.find((function(n,i){var a=n.element===e.focusTracker.focusedElement;return a&&(t=i),a})),t)}}]),e}();function r(e){return!(!e.focus||"none"==c["a"].window.getComputedStyle(e.element).display)}},3707:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));n("99af");var i=n("d4ec"),a=n("bee2"),o=n("257e"),c=n("45eb"),s=n("7e84"),r=n("262e"),l=n("2caf"),u=n("940e"),d=n("631f"),b=n("a16b"),f=n("ed4a"),h=n("84c3"),p=(n("43ae"),function(e){Object(r["a"])(n,e);var t=Object(l["a"])(n);function n(e){var a;Object(i["a"])(this,n),a=t.call(this,e);var c=a.bindTemplate,s=Object(f["a"])();return a.set("class"),a.set("labelStyle"),a.set("icon"),a.set("isEnabled",!0),a.set("isOn",!1),a.set("isVisible",!0),a.set("isToggleable",!1),a.set("keystroke"),a.set("label"),a.set("tabindex",-1),a.set("tooltip"),a.set("tooltipPosition","s"),a.set("type","button"),a.set("withText",!1),a.set("withKeystroke",!1),a.children=a.createCollection(),a.tooltipView=a._createTooltipView(),a.labelView=a._createLabelView(s),a.iconView=new d["a"],a.iconView.extendTemplate({attributes:{class:"ck-button__icon"}}),a.keystrokeView=a._createKeystrokeView(),a.bind("_tooltipString").to(Object(o["a"])(a),"tooltip",Object(o["a"])(a),"label",Object(o["a"])(a),"keystroke",a._getTooltipString.bind(Object(o["a"])(a))),a.setTemplate({tag:"button",attributes:{class:["ck","ck-button",c.to("class"),c.if("isEnabled","ck-disabled",(function(e){return!e})),c.if("isVisible","ck-hidden",(function(e){return!e})),c.to("isOn",(function(e){return e?"ck-on":"ck-off"})),c.if("withText","ck-button_with-text"),c.if("withKeystroke","ck-button_with-keystroke")],type:c.to("type",(function(e){return e||"button"})),tabindex:c.to("tabindex"),"aria-labelledby":"ck-editor__aria-label_".concat(s),"aria-disabled":c.if("isEnabled",!0,(function(e){return!e})),"aria-pressed":c.to("isOn",(function(e){return!!a.isToggleable&&String(e)}))},children:a.children,on:{mousedown:c.to((function(e){e.preventDefault()})),click:c.to((function(e){a.isEnabled?a.fire("execute"):e.preventDefault()}))}}),a}return Object(a["a"])(n,[{key:"render",value:function(){Object(c["a"])(Object(s["a"])(n.prototype),"render",this).call(this),this.icon&&(this.iconView.bind("content").to(this,"icon"),this.children.add(this.iconView)),this.children.add(this.tooltipView),this.children.add(this.labelView),this.withKeystroke&&this.children.add(this.keystrokeView)}},{key:"focus",value:function(){this.element.focus()}},{key:"_createTooltipView",value:function(){var e=new b["a"];return e.bind("text").to(this,"_tooltipString"),e.bind("position").to(this,"tooltipPosition"),e}},{key:"_createLabelView",value:function(e){var t=new u["a"],n=this.bindTemplate;return t.setTemplate({tag:"span",attributes:{class:["ck","ck-button__label"],style:n.to("labelStyle"),id:"ck-editor__aria-label_".concat(e)},children:[{text:this.bindTemplate.to("label")}]}),t}},{key:"_createKeystrokeView",value:function(){var e=new u["a"];return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__keystroke"]},children:[{text:this.bindTemplate.to("keystroke",(function(e){return Object(h["b"])(e)}))}]}),e}},{key:"_getTooltipString",value:function(e,t,n){return e?"string"==typeof e?e:(n&&(n=Object(h["b"])(n)),e instanceof Function?e(t,n):"".concat(t).concat(n?" (".concat(n,")"):"")):""}}]),n}(u["a"]))},"4aaf":function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var i=n("d4ec"),a=n("bee2"),o=n("45eb"),c=n("7e84"),s=n("262e"),r=n("2caf"),l=n("940e"),u=n("3707"),d=n("91db"),b=n("768b"),f=n("4ca4"),h=n.n(f),p=(n("74fe"),function(e){Object(s["a"])(n,e);var t=Object(r["a"])(n);function n(e){var a;Object(i["a"])(this,n),a=t.call(this,e);var o=a.bindTemplate;return a.set("icon"),a.set("isEnabled",!0),a.set("isOn",!1),a.set("isToggleable",!1),a.set("isVisible",!0),a.set("keystroke"),a.set("label"),a.set("tabindex",-1),a.set("tooltip"),a.set("tooltipPosition","s"),a.set("type","button"),a.set("withText",!1),a.children=a.createCollection(),a.actionView=a._createActionView(),a.arrowView=a._createArrowView(),a.keystrokes=new d["a"],a.focusTracker=new b["a"],a.setTemplate({tag:"div",attributes:{class:["ck","ck-splitbutton",o.if("isVisible","ck-hidden",(function(e){return!e})),a.arrowView.bindTemplate.if("isOn","ck-splitbutton_open")]},children:a.children}),a}return Object(a["a"])(n,[{key:"render",value:function(){var e=this;Object(o["a"])(Object(c["a"])(n.prototype),"render",this).call(this),this.children.add(this.actionView),this.children.add(this.arrowView),this.focusTracker.add(this.actionView.element),this.focusTracker.add(this.arrowView.element),this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",(function(t,n){e.focusTracker.focusedElement===e.actionView.element&&(e.arrowView.focus(),n())})),this.keystrokes.set("arrowleft",(function(t,n){e.focusTracker.focusedElement===e.arrowView.element&&(e.actionView.focus(),n())}))}},{key:"focus",value:function(){this.actionView.focus()}},{key:"_createActionView",value:function(){var e=new u["a"];return e.bind("icon","isEnabled","isOn","isToggleable","keystroke","label","tabindex","tooltip","tooltipPosition","type","withText").to(this),e.extendTemplate({attributes:{class:"ck-splitbutton__action"}}),e.delegate("execute").to(this),e}},{key:"_createArrowView",value:function(){var e=new u["a"],t=e.bindTemplate;return e.icon=h.a,e.extendTemplate({attributes:{class:"ck-splitbutton__arrow","aria-haspopup":!0,"aria-expanded":t.to("isOn",(function(e){return String(e)}))}}),e.bind("isEnabled").to(this),e.delegate("execute").to(this,"open"),e}}]),n}(l["a"]))},"511a":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("b0c0");var i=n("d4ec"),a=n("bee2"),o=n("45eb"),c=n("7e84"),s=n("262e"),r=n("2caf"),l=n("940e"),u=function(e){Object(s["a"])(n,e);var t=Object(r["a"])(n);function n(e,a,o){var c;return Object(i["a"])(this,n),c=t.call(this,e),c.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),c.name=null,c.set("isFocused",!1),c._editableElement=o,c._hasExternalElement=!!c._editableElement,c._editingView=a,c}return Object(a["a"])(n,[{key:"render",value:function(){var e=this;Object(o["a"])(Object(c["a"])(n.prototype),"render",this).call(this),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",(function(){return e._updateIsFocusedClasses()})),this._updateIsFocusedClasses()}},{key:"destroy",value:function(){this._hasExternalElement&&this.template.revert(this._editableElement),Object(o["a"])(Object(c["a"])(n.prototype),"destroy",this).call(this)}},{key:"_updateIsFocusedClasses",value:function(){var e=this._editingView;function t(t){e.change((function(n){var i=e.document.getRoot(t.name);n.addClass(t.isFocused?"ck-focused":"ck-blurred",i),n.removeClass(t.isFocused?"ck-blurred":"ck-focused",i)}))}function n(i){e.once("change:isRenderingInProgress",(function(e,a,o){o?n(i):t(i)}))}e.isRenderingInProgress?n(this):t(this)}}]),n}(l["a"]),d=function(e){Object(s["a"])(n,e);var t=Object(r["a"])(n);function n(e,a,o){var c;return Object(i["a"])(this,n),c=t.call(this,e,a,o),c.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),c}return Object(a["a"])(n,[{key:"render",value:function(){var e=this;Object(o["a"])(Object(c["a"])(n.prototype),"render",this).call(this);var t=this._editingView,i=this.t;t.change((function(n){var a=t.document.getRoot(e.name);n.setAttribute("aria-label",i("Rich Text Editor, %0",e.name),a)}))}}]),n}(u)},"7b5b":function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n("4ec9"),n("d3b7"),n("3ca3"),n("ddb0");var i=n("b85c"),a=(n("96cf"),n("d4ec")),o=n("bee2"),c=n("f2ea"),s=function(){function e(t){Object(a["a"])(this,e),this.editor=t,this._components=new Map}return Object(o["a"])(e,[{key:"names",value:regeneratorRuntime.mark((function e(){var t,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=Object(i["a"])(this._components.values()),e.prev=1,t.s();case 3:if((n=t.n()).done){e.next=9;break}return a=n.value,e.next=7,a.originalName;case 7:e.next=3;break;case 9:e.next=14;break;case 11:e.prev=11,e.t0=e["catch"](1),t.e(e.t0);case 14:return e.prev=14,t.f(),e.finish(14);case 17:case"end":return e.stop()}}),e,this,[[1,11,14,17]])}))},{key:"add",value:function(e,t){this._components.set(r(e),{callback:t,originalName:e})}},{key:"create",value:function(e){if(!this.has(e))throw new c["a"]("componentfactory-item-missing",this,{name:e});return this._components.get(r(e)).callback(this.editor.locale)}},{key:"has",value:function(e){return this._components.has(r(e))}}]),e}();function r(e){return String(e).toLowerCase()}},"901d":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n("caad"),n("2532");var i=n("b85c");
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function a(e){var t=e.emitter,n=e.activator,a=e.callback,o=e.contextElements;t.listenTo(document,"mousedown",(function(e,t){if(n()){var c,s="function"==typeof t.composedPath?t.composedPath():[],r=Object(i["a"])(o);try{for(r.s();!(c=r.n()).done;){var l=c.value;if(l.contains(t.target)||s.includes(l))return}}catch(u){r.e(u)}finally{r.f()}a()}}))}},"97fa":function(e,t,n){"use strict";n.d(t,"a",(function(){return k}));var i=n("d4ec"),a=n("bee2"),o=n("262e"),c=n("2caf"),s=n("45eb"),r=n("7e84"),l=n("940e"),u=n("e805"),d=n("3493"),b=n("4dda"),f=function(e){Object(o["a"])(n,e);var t=Object(c["a"])(n);function n(e){var a,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];return Object(i["a"])(this,n),a=t.call(this,o),a.locale=e,a}return Object(a["a"])(n,[{key:"attachToDom",value:function(){this._bodyCollectionContainer=new u["a"]({tag:"div",attributes:{class:["ck","ck-reset_all","ck-body","ck-rounded-corners"],dir:this.locale.uiLanguageDirection},children:this}).render();var e=document.querySelector(".ck-body-wrapper");e||(e=Object(b["a"])(document,"div",{class:"ck-body-wrapper"}),document.body.appendChild(e)),e.appendChild(this._bodyCollectionContainer)}},{key:"detachFromDom",value:function(){Object(s["a"])(Object(r["a"])(n.prototype),"destroy",this).call(this),this._bodyCollectionContainer&&this._bodyCollectionContainer.remove();var e=document.querySelector(".ck-body-wrapper");e&&0==e.childElementCount&&e.remove()}}]),n}(d["a"]),h=(n("cf28"),function(e){Object(o["a"])(n,e);var t=Object(c["a"])(n);function n(e){var a;return Object(i["a"])(this,n),a=t.call(this,e),a.body=new f(e),a}return Object(a["a"])(n,[{key:"render",value:function(){Object(s["a"])(Object(r["a"])(n.prototype),"render",this).call(this),this.body.attachToDom()}},{key:"destroy",value:function(){return this.body.detachFromDom(),Object(s["a"])(Object(r["a"])(n.prototype),"destroy",this).call(this)}}]),n}(l["a"])),p=n("5491"),k=function(e){Object(o["a"])(n,e);var t=Object(c["a"])(n);function n(e){var a;return Object(i["a"])(this,n),a=t.call(this,e),a.top=a.createCollection(),a.main=a.createCollection(),a._voiceLabelView=a._createVoiceLabel(),a.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":a._voiceLabelView.id},children:[a._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:a.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:a.main}]}),a}return Object(a["a"])(n,[{key:"_createVoiceLabel",value:function(){var e=this.t,t=new p["a"];return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}]),n}(h)},"9a87":function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("d4ec"),a=n("bee2"),o=n("45eb"),c=n("7e84"),s=n("262e"),r=n("2caf"),l=n("940e"),u=n("3707"),d=(n("ff23"),function(e){Object(s["a"])(n,e);var t=Object(r["a"])(n);function n(e){var a;return Object(i["a"])(this,n),a=t.call(this,e),a.isToggleable=!0,a.toggleSwitchView=a._createToggleView(),a.extendTemplate({attributes:{class:"ck-switchbutton"}}),a}return Object(a["a"])(n,[{key:"render",value:function(){Object(o["a"])(Object(c["a"])(n.prototype),"render",this).call(this),this.children.add(this.toggleSwitchView)}},{key:"_createToggleView",value:function(){var e=new l["a"];return e.setTemplate({tag:"span",attributes:{class:["ck","ck-button__toggle"]},children:[{tag:"span",attributes:{class:["ck","ck-button__toggle__inner"]}}]}),e}}]),n}(u["a"]))},ab1f:function(e,t,n){"use strict";
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function i(e){var t=e.view;t.listenTo(t.element,"submit",(function(e,n){n.preventDefault(),t.fire("submit")}),{useCapture:!0})}n.d(t,"a",(function(){return i}))},c0c4:function(e,t,n){"use strict";
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function i(e){return e.bindTemplate.to((function(t){t.target===e.element&&t.preventDefault()}))}n.d(t,"a",(function(){return i}))},ceea:function(e,t,n){"use strict";n.d(t,"c",(function(){return x})),n.d(t,"b",(function(){return E})),n.d(t,"a",(function(){return C}));n("d81d"),n("b64b");var i=n("2909"),a=n("d4ec"),o=n("bee2"),c=n("262e"),s=n("2caf"),r=n("940e"),l=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(e){var i;Object(a["a"])(this,n),i=t.call(this,e);var o=i.bindTemplate;return i.set("isVisible",!1),i.set("position","se"),i.children=i.createCollection(),i.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-dropdown__panel",o.to("position",(function(e){return"ck-dropdown__panel_".concat(e)})),o.if("isVisible","ck-dropdown__panel-visible")]},children:i.children,on:{selectstart:o.to((function(e){return e.preventDefault()}))}}),i}return Object(o["a"])(n,[{key:"focus",value:function(){this.children.length&&this.children.first.focus()}},{key:"focusLast",value:function(){if(this.children.length){var e=this.children.last;"function"===typeof e.focusLast?e.focusLast():e.focus()}}}]),n}(r["a"]),u=(n("b0c0"),n("45eb")),d=n("7e84"),b=n("91db"),f=(n("0a061"),n("9aba")),h=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(e,i,o){var c;Object(a["a"])(this,n),c=t.call(this,e);var s=c.bindTemplate;return c.buttonView=i,c.panelView=o,c.set("isOpen",!1),c.set("isEnabled",!0),c.set("class"),c.set("id"),c.set("panelPosition","auto"),c.keystrokes=new b["a"],c.setTemplate({tag:"div",attributes:{class:["ck","ck-dropdown",s.to("class"),s.if("isEnabled","ck-disabled",(function(e){return!e}))],id:s.to("id"),"aria-describedby":s.to("ariaDescribedById")},children:[i,o]}),i.extendTemplate({attributes:{class:["ck-dropdown__button"]}}),c}return Object(o["a"])(n,[{key:"render",value:function(){var e=this;Object(u["a"])(Object(d["a"])(n.prototype),"render",this).call(this),this.listenTo(this.buttonView,"open",(function(){e.isOpen=!e.isOpen})),this.panelView.bind("isVisible").to(this,"isOpen"),this.on("change:isOpen",(function(){e.isOpen&&("auto"===e.panelPosition?e.panelView.position=n._getOptimalPosition({element:e.panelView.element,target:e.buttonView.element,fitInViewport:!0,positions:e._panelPositions}).name:e.panelView.position=e.panelPosition)})),this.keystrokes.listenTo(this.element);var t=function(t,n){e.isOpen&&(e.buttonView.focus(),e.isOpen=!1,n())};this.keystrokes.set("arrowdown",(function(t,n){e.buttonView.isEnabled&&!e.isOpen&&(e.isOpen=!0,n())})),this.keystrokes.set("arrowright",(function(t,n){e.isOpen&&n()})),this.keystrokes.set("arrowleft",t),this.keystrokes.set("esc",t)}},{key:"focus",value:function(){this.buttonView.focus()}},{key:"_panelPositions",get:function(){var e=n.defaultPanelPositions,t=e.southEast,i=e.southWest,a=e.northEast,o=e.northWest;return"ltr"===this.locale.uiLanguageDirection?[t,i,a,o]:[i,t,o,a]}}]),n}(r["a"]);h.defaultPanelPositions={southEast:function(e){return{top:e.bottom,left:e.left,name:"se"}},southWest:function(e,t){return{top:e.bottom,left:e.left-t.width+e.width,name:"sw"}},northEast:function(e,t){return{top:e.top-t.height,left:e.left,name:"ne"}},northWest:function(e,t){return{top:e.bottom-t.height,left:e.left-t.width+e.width,name:"nw"}}},h._getOptimalPosition=f["a"];var p=n("257e"),k=n("3707"),w=n("4ca4"),v=n.n(w),m=n("631f"),y=function(e){Object(c["a"])(n,e);var t=Object(s["a"])(n);function n(e){var i;return Object(a["a"])(this,n),i=t.call(this,e),i.arrowView=i._createArrowView(),i.extendTemplate({attributes:{"aria-haspopup":!0}}),i.delegate("execute").to(Object(p["a"])(i),"open"),i}return Object(o["a"])(n,[{key:"render",value:function(){Object(u["a"])(Object(d["a"])(n.prototype),"render",this).call(this),this.children.add(this.arrowView)}},{key:"_createArrowView",value:function(){var e=new m["a"];return e.content=v.a,e.extendTemplate({attributes:{class:"ck-dropdown__arrow"}}),e}}]),n}(k["a"]),O=n("1e6e"),g=n("189a"),_=n("0ef9"),j=n("4302"),V=n("9a87"),T=n("901d");n("2a21"),n("f5e9");
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
function x(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,n=new t(e),i=new l(e),a=new h(e,n,i);return n.bind("isEnabled").to(a),n instanceof y?n.bind("isOn").to(a,"isOpen"):n.arrowView.bind("isOn").to(a,"isOpen"),L(a),a}function E(e,t){var n=e.locale,i=n.t,a=e.toolbarView=new O["a"](n);a.set("ariaLabel",i("Dropdown toolbar")),e.extendTemplate({attributes:{class:["ck-toolbar-dropdown"]}}),t.map((function(e){return a.items.add(e)})),e.panelView.children.add(a),a.items.delegate("execute").to(e)}function C(e,t){var n=e.locale,a=e.listView=new g["a"](n);a.items.bindTo(t).using((function(e){var t=e.type,a=e.model;if("separator"===t)return new j["a"](n);if("button"===t||"switchbutton"===t){var o,c,s=new _["a"](n);return c="button"===t?new k["a"](n):new V["a"](n),(o=c).bind.apply(o,Object(i["a"])(Object.keys(a))).to(a),c.delegate("execute").to(s),s.children.add(c),s}})),e.panelView.children.add(a),a.items.delegate("execute").to(e)}function L(e){P(e),D(e),F(e)}function P(e){e.on("render",(function(){Object(T["a"])({emitter:e,activator:function(){return e.isOpen},callback:function(){e.isOpen=!1},contextElements:[e.element]})}))}function D(e){e.on("execute",(function(t){t.source instanceof V["a"]||(e.isOpen=!1)}))}function F(e){e.keystrokes.set("arrowdown",(function(t,n){e.isOpen&&(e.panelView.focus(),n())})),e.keystrokes.set("arrowup",(function(t,n){e.isOpen&&(e.panelView.focusLast(),n())}))}}}]);