(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendor~app~847ab292"],{"0a061":function(e,t,n){},"1af3":function(e,t,n){},"2a21":function(e,t,n){},3493:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("a623"),n("d81d");var a=n("b85c"),i=n("d4ec"),r=n("bee2"),o=n("262e"),c=n("2caf"),s=n("f2ea"),u=n("67b9"),d=function(e){Object(o["a"])(n,e);var t=Object(c["a"])(n);function n(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Object(i["a"])(this,n),e=t.call(this,a,{idProperty:"viewUid"}),e.on("add",(function(t,n,a){e._renderViewIntoCollectionParent(n,a)})),e.on("remove",(function(t,n){n.element&&e._parentElement&&n.element.remove()})),e._parentElement=null,e}return Object(r["a"])(n,[{key:"destroy",value:function(){this.map((function(e){return e.destroy()}))}},{key:"setParent",value:function(e){this._parentElement=e;var t,n=Object(a["a"])(this);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._renderViewIntoCollectionParent(i)}}catch(r){n.e(r)}finally{n.f()}}},{key:"delegate",value:function(){for(var e=this,t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];if(!n.length||!l(n))throw new s["a"]("ui-viewcollection-delegate-wrong-events",this);return{to:function(t){var i,r=Object(a["a"])(e);try{for(r.s();!(i=r.n()).done;){var o,c=i.value,s=Object(a["a"])(n);try{for(s.s();!(o=s.n()).done;){var u=o.value;c.delegate(u).to(t)}}catch(d){s.e(d)}finally{s.f()}}}catch(d){r.e(d)}finally{r.f()}e.on("add",(function(e,i){var r,o=Object(a["a"])(n);try{for(o.s();!(r=o.n()).done;){var c=r.value;i.delegate(c).to(t)}}catch(d){o.e(d)}finally{o.f()}})),e.on("remove",(function(e,i){var r,o=Object(a["a"])(n);try{for(o.s();!(r=o.n()).done;){var c=r.value;i.stopDelegating(c,t)}}catch(d){o.e(d)}finally{o.f()}}))}}}},{key:"_renderViewIntoCollectionParent",value:function(e,t){e.isRendered||e.render(),e.element&&this._parentElement&&this._parentElement.insertBefore(e.element,this._parentElement.children[t])}}]),n}(u["a"]);function l(e){return e.every((function(e){return"string"==typeof e}))}},"3a7f":function(e,t,n){},"3d1d":function(e,t,n){},"43ae":function(e,t,n){},"4ca4":function(e,t){e.exports='<svg viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg"><path d="M.941 4.523a.75.75 0 1 1 1.06-1.06l3.006 3.005 3.005-3.005a.75.75 0 1 1 1.06 1.06l-3.549 3.55a.75.75 0 0 1-1.168-.136L.941 4.523z"/></svg>'},"51a6":function(e,t,n){},"74c7":function(e,t){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11.463 5.187a.888.888 0 1 1 1.254 1.255L9.16 10l3.557 3.557a.888.888 0 1 1-1.254 1.255L7.26 10.61a.888.888 0 0 1 .16-1.382l4.043-4.042z"/></svg>'},"74fe":function(e,t,n){},7946:function(e,t,n){},"7def":function(e,t,n){},"8b59":function(e,t,n){"use strict";n.d(t,"a",(function(){return w}));var a=n("d4ec"),i=n("bee2"),r=n("262e"),o=n("2caf"),c=n("109b"),s=(n("d3b7"),n("3ca3"),n("1fe2"),n("ddb0"),n("c740"),n("a434"),n("4de4"),n("7db0"),n("0481"),n("a630"),n("d81d"),n("fb6a"),n("45fc"),n("4069"),n("b85c")),u=n("652f"),d=n("8ab1"),l=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(e){var i;return Object(a["a"])(this,n),i=t.call(this,e),i._stack=[],i._createdBatches=new WeakSet,i.refresh(),i.listenTo(e.data,"set",(function(){return i.clearStack()})),i}return Object(i["a"])(n,[{key:"refresh",value:function(){this.isEnabled=this._stack.length>0}},{key:"addBatch",value:function(e){var t=this.editor.model.document.selection,n={ranges:t.hasOwnRange?Array.from(t.getRanges()):[],isBackward:t.isBackward};this._stack.push({batch:e,selection:n}),this.refresh()}},{key:"clearStack",value:function(){this._stack=[],this.refresh()}},{key:"_restoreSelection",value:function(e,t,n){var a,i=this.editor.model,r=i.document,o=[],c=e.map((function(e){return e.getTransformedByOperations(n)})),u=c.flat(),d=Object(s["a"])(c);try{for(d.s();!(a=d.n()).done;){var l=a.value,v=l.filter((function(e){return!h(e,u)}));f(v);var b=v.find((function(e){return e.root!=r.graveyard}));b&&o.push(b)}}catch(m){d.e(m)}finally{d.f()}o.length&&i.change((function(e){e.setSelection(o,{backward:t})}))}},{key:"_undo",value:function(e,t){var n=this.editor.model,a=n.document;this._createdBatches.add(t);var i=e.operations.slice().filter((function(e){return e.isDocumentOperation}));i.reverse();var r,o=Object(s["a"])(i);try{for(o.s();!(r=o.n()).done;){var c,u=r.value,l=u.baseVersion+1,f=Array.from(a.history.getOperations(l)),h=Object(d["a"])([u.getReversed()],f,{useRelations:!0,document:this.editor.model.document,padWithNoOps:!1,forceWeakRemove:!0}),v=h.operationsA,b=Object(s["a"])(v);try{for(b.s();!(c=b.n()).done;){var m=c.value;t.addOperation(m),n.applyOperation(m),a.history.setOperationAsUndone(u,m)}}catch(p){b.e(p)}finally{b.f()}}}catch(p){o.e(p)}finally{o.f()}}}]),n}(u["a"]);function f(e){e.sort((function(e,t){return e.start.isBefore(t.start)?-1:1}));for(var t=1;t<e.length;t++){var n=e[t-1],a=n.getJoined(e[t],!0);a&&(t--,e.splice(t,2,a))}}function h(e,t){return t.some((function(t){return t!==e&&t.containsRange(e,!0)}))}
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */var v=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"execute",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=t?this._stack.findIndex((function(e){return e.batch==t})):this._stack.length-1,a=this._stack.splice(n,1)[0],i=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(i,(function(){e._undo(a.batch,i);var t=e.editor.model.document.history.getOperations(a.batch.baseVersion);e._restoreSelection(a.selection.ranges,a.selection.isBackward,t),e.fire("revert",a.batch,i)})),this.refresh()}}]),n}(l),b=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"execute",value:function(){var e=this,t=this._stack.pop(),n=this.editor.model.createBatch("transparent");this.editor.model.enqueueChange(n,(function(){var a=t.batch.operations[t.batch.operations.length-1],i=a.baseVersion+1,r=e.editor.model.document.history.getOperations(i);e._restoreSelection(t.selection.ranges,t.selection.isBackward,r),e._undo(t.batch,n)})),this.refresh()}}]),n}(l),m=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(e){var i;return Object(a["a"])(this,n),i=t.call(this,e),i._batchRegistry=new WeakSet,i}return Object(i["a"])(n,null,[{key:"pluginName",get:function(){return"UndoEditing"}}]),Object(i["a"])(n,[{key:"init",value:function(){var e=this,t=this.editor;this._undoCommand=new v(t),this._redoCommand=new b(t),t.commands.add("undo",this._undoCommand),t.commands.add("redo",this._redoCommand),this.listenTo(t.model,"applyOperation",(function(t,n){var a=n[0];if(a.isDocumentOperation){var i=a.batch,r=e._redoCommand._createdBatches.has(i),o=e._undoCommand._createdBatches.has(i),c=e._batchRegistry.has(i);c||"transparent"==i.type&&!r&&!o||(r?e._undoCommand.addBatch(i):o||(e._undoCommand.addBatch(i),e._redoCommand.clearStack()),e._batchRegistry.add(i))}}),{priority:"highest"}),this.listenTo(this._undoCommand,"revert",(function(t,n,a){e._redoCommand.addBatch(a)})),t.keystrokes.set("CTRL+Z","undo"),t.keystrokes.set("CTRL+Y","redo"),t.keystrokes.set("CTRL+SHIFT+Z","redo")}}]),n}(c["a"]),p=n("3707"),y=n("f945"),g=n.n(y),O=n("332d"),_=n.n(O),k=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,[{key:"init",value:function(){var e=this.editor,t=e.locale,n=e.t,a="ltr"==t.uiLanguageDirection?g.a:_.a,i="ltr"==t.uiLanguageDirection?_.a:g.a;this._addButton("undo",n("Undo"),"CTRL+Z",a),this._addButton("redo",n("Redo"),"CTRL+Y",i)}},{key:"_addButton",value:function(e,t,n,a){var i=this,r=this.editor;r.ui.componentFactory.add(e,(function(o){var c=r.commands.get(e),s=new p["a"](o);return s.set({label:t,icon:a,keystroke:n,tooltip:!0}),s.bind("isEnabled").to(c,"isEnabled"),i.listenTo(s,"execute",(function(){r.execute(e),r.editing.view.focus()})),s}))}}]),n}(c["a"]),w=function(e){Object(r["a"])(n,e);var t=Object(o["a"])(n);function n(){return Object(a["a"])(this,n),t.apply(this,arguments)}return Object(i["a"])(n,null,[{key:"requires",get:function(){return[m,k]}},{key:"pluginName",get:function(){return"Undo"}}]),n}(c["a"]);
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */},"940e":function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));n("d81d");var a=n("b85c"),i=n("d4ec"),r=n("bee2"),o=n("f2ea"),c=n("3493"),s=n("e805"),u=n("f264"),d=n("d4e1"),l=n("67b9"),f=n("644e"),h=n("e907"),v=(n("e281"),function(){function e(t){Object(i["a"])(this,e),this.element=null,this.isRendered=!1,this.locale=t,this.t=t&&t.t,this._viewCollections=new l["a"],this._unboundChildren=this.createCollection(),this._viewCollections.on("add",(function(e,n){n.locale=t})),this.decorate("render")}return Object(r["a"])(e,[{key:"createCollection",value:function(e){var t=new c["a"](e);return this._viewCollections.add(t),t}},{key:"registerChild",value:function(e){Object(h["a"])(e)||(e=[e]);var t,n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._unboundChildren.add(i)}}catch(r){n.e(r)}finally{n.f()}}},{key:"deregisterChild",value:function(e){Object(h["a"])(e)||(e=[e]);var t,n=Object(a["a"])(e);try{for(n.s();!(t=n.n()).done;){var i=t.value;this._unboundChildren.remove(i)}}catch(r){n.e(r)}finally{n.f()}}},{key:"setTemplate",value:function(e){this.template=new s["a"](e)}},{key:"extendTemplate",value:function(e){s["a"].extend(this.template,e)}},{key:"render",value:function(){if(this.isRendered)throw new o["a"]("ui-view-render-already-rendered",this);this.template&&(this.element=this.template.render(),this.registerChild(this.template.getViews())),this.isRendered=!0}},{key:"destroy",value:function(){this.stopListening(),this._viewCollections.map((function(e){return e.destroy()})),this.template&&this.template._revertData&&this.template.revert(this.element)}},{key:"bindTemplate",get:function(){return this._bindTemplate?this._bindTemplate:this._bindTemplate=s["a"].bind(this,this)}}]),e}());Object(f["a"])(v,u["a"]),Object(f["a"])(v,d["a"])},b0d6:function(e,t,n){},cf28:function(e,t,n){},d2df:function(e,t,n){},da97:function(e,t,n){},e281:function(e,t,n){},e348:function(e,t,n){},e8dd:function(e,t,n){},f422:function(e,t){e.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.537 14.813a.888.888 0 1 1-1.254-1.255L10.84 10 7.283 6.442a.888.888 0 1 1 1.254-1.255L12.74 9.39a.888.888 0 0 1-.16 1.382l-4.043 4.042z"/></svg>'},f5e9:function(e,t,n){},ff23:function(e,t,n){},ffa0:function(e,t,n){}}]);