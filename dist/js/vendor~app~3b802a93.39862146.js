(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["vendor~app~3b802a93"],{6576:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));n("b0c0");var r=n("d4ec"),i=n("bee2"),s=n("262e"),a=n("2caf"),o=n("a641"),u=function(e){Object(s["a"])(n,e);var t=Object(a["a"])(n);function n(e,i){var s,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"main";return Object(r["a"])(this,n),s=t.call(this,i),s._document=e,s.rootName=a,s}return Object(i["a"])(n,[{key:"is",value:function(e,t){return t?t===this.name&&("rootElement"===e||"model:rootElement"===e||"element"===e||"model:element"===e):"rootElement"===e||"model:rootElement"===e||"element"===e||"model:element"===e||"node"===e||"model:node"===e}},{key:"toJSON",value:function(){return this.rootName}},{key:"document",get:function(){return this._document}}]),n}(o["a"])},ad6b:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));n("a4d3"),n("e01a"),n("d28b"),n("99af"),n("c975"),n("fb6a"),n("a434"),n("d3b7"),n("3ca3"),n("ddb0"),n("bf19");var r=n("2909"),i=n("b85c"),s=(n("96cf"),n("d4ec")),a=n("bee2"),o=n("9cf5"),u=n("82af"),h=n("f2ea"),c=n("e47a"),l=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(s["a"])(this,e),this.start=o["a"]._createAt(t),this.end=n?o["a"]._createAt(n):o["a"]._createAt(t),this.start.stickiness=this.isCollapsed?"toNone":"toNext",this.end.stickiness=this.isCollapsed?"toNone":"toPrevious"}return Object(a["a"])(e,[{key:Symbol.iterator,value:regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.delegateYield(new u["a"]({boundaries:this,ignoreElementEnd:!0}),"t0",1);case 1:case"end":return e.stop()}}),e,this)}))},{key:"containsPosition",value:function(e){return e.isAfter(this.start)&&e.isBefore(this.end)}},{key:"containsRange",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];e.isCollapsed&&(t=!1);var n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),r=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&r}},{key:"containsItem",value:function(e){var t=o["a"]._createBefore(e);return this.containsPosition(t)||this.start.isEqual(t)}},{key:"is",value:function(e){return"range"===e||"model:range"===e}},{key:"isEqual",value:function(e){return this.start.isEqual(e.start)&&this.end.isEqual(e.end)}},{key:"isIntersecting",value:function(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}},{key:"getDifference",value:function(t){var n=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&n.push(new e(this.start,t.start)),this.containsPosition(t.end)&&n.push(new e(t.end,this.end))):n.push(new e(this.start,this.end)),n}},{key:"getIntersection",value:function(t){if(this.isIntersecting(t)){var n=this.start,r=this.end;return this.containsPosition(t.start)&&(n=t.start),this.containsPosition(t.end)&&(r=t.end),new e(n,r)}return null}},{key:"getJoined",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this.isIntersecting(t);if(r||(r=this.start.isBefore(t.start)?n?this.end.isTouching(t.start):this.end.isEqual(t.start):n?t.end.isTouching(this.start):t.end.isEqual(this.start)),!r)return null;var i=this.start,s=this.end;return t.start.isBefore(i)&&(i=t.start),t.end.isAfter(s)&&(s=t.end),new e(i,s)}},{key:"getMinimalFlatRanges",value:function(){var t=[],n=this.start.getCommonPath(this.end).length,r=o["a"]._createAt(this.start),i=r.parent;while(r.path.length>n+1){var s=i.maxOffset-r.offset;0!==s&&t.push(new e(r,r.getShiftedBy(s))),r.path=r.path.slice(0,-1),r.offset++,i=i.parent}while(r.path.length<=this.end.path.length){var a=this.end.path[r.path.length-1],u=a-r.offset;0!==u&&t.push(new e(r,r.getShiftedBy(u))),r.offset=a,r.path.push(0)}return t}},{key:"getWalker",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.boundaries=this,new u["a"](e)}},{key:"getItems",value:regeneratorRuntime.mark((function e(){var t,n,r,s,a,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=o.length>0&&void 0!==o[0]?o[0]:{},t.boundaries=this,t.ignoreElementEnd=!0,n=new u["a"](t),r=Object(i["a"])(n),e.prev=5,r.s();case 7:if((s=r.n()).done){e.next=13;break}return a=s.value,e.next=11,a.item;case 11:e.next=7;break;case 13:e.next=18;break;case 15:e.prev=15,e.t0=e["catch"](5),r.e(e.t0);case 18:return e.prev=18,r.f(),e.finish(18);case 21:case"end":return e.stop()}}),e,this,[[5,15,18,21]])}))},{key:"getPositions",value:regeneratorRuntime.mark((function e(){var t,n,r,s,a,o=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=o.length>0&&void 0!==o[0]?o[0]:{},t.boundaries=this,n=new u["a"](t),e.next=5,n.position;case 5:r=Object(i["a"])(n),e.prev=6,r.s();case 8:if((s=r.n()).done){e.next=14;break}return a=s.value,e.next=12,a.nextPosition;case 12:e.next=8;break;case 14:e.next=19;break;case 16:e.prev=16,e.t0=e["catch"](6),r.e(e.t0);case 19:return e.prev=19,r.f(),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[6,16,19,22]])}))},{key:"getTransformedByOperation",value:function(t){switch(t.type){case"insert":return this._getTransformedByInsertOperation(t);case"move":case"remove":case"reinsert":return this._getTransformedByMoveOperation(t);case"split":return[this._getTransformedBySplitOperation(t)];case"merge":return[this._getTransformedByMergeOperation(t)]}return[new e(this.start,this.end)]}},{key:"getTransformedByOperations",value:function(t){var n,s=[new e(this.start,this.end)],a=Object(i["a"])(t);try{for(a.s();!(n=a.n()).done;)for(var o=n.value,u=0;u<s.length;u++){var h=s[u].getTransformedByOperation(o);s.splice.apply(s,[u,1].concat(Object(r["a"])(h))),u+=h.length-1}}catch(g){a.e(g)}finally{a.f()}for(var c=0;c<s.length;c++)for(var l=s[c],d=c+1;d<s.length;d++){var f=s[d];(l.containsRange(f)||f.containsRange(l)||l.isEqual(f))&&s.splice(d,1)}return s}},{key:"getCommonAncestor",value:function(){return this.start.getCommonAncestor(this.end)}},{key:"getContainedElement",value:function(){if(this.isCollapsed)return null;var e=this.start.nodeAfter,t=this.end.nodeBefore;return e&&e.is("element")&&e===t?e:null}},{key:"toJSON",value:function(){return{start:this.start.toJSON(),end:this.end.toJSON()}}},{key:"clone",value:function(){return new this.constructor(this.start,this.end)}},{key:"_getTransformedByInsertOperation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return this._getTransformedByInsertion(e.position,e.howMany,t)}},{key:"_getTransformedByMoveOperation",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.sourcePosition,r=e.howMany,i=e.targetPosition;return this._getTransformedByMove(n,i,r,t)}},{key:"_getTransformedBySplitOperation",value:function(t){var n=this.start._getTransformedBySplitOperation(t),r=this.end._getTransformedBySplitOperation(t);return this.end.isEqual(t.insertionPosition)&&(r=this.end.getShiftedBy(1)),n.root!=r.root&&(r=this.end.getShiftedBy(-1)),new e(n,r)}},{key:"_getTransformedByMergeOperation",value:function(t){if(this.start.isEqual(t.targetPosition)&&this.end.isEqual(t.deletionPosition))return new e(this.start);var n=this.start._getTransformedByMergeOperation(t),r=this.end._getTransformedByMergeOperation(t);return n.root!=r.root&&(r=this.end.getShiftedBy(-1)),n.isAfter(r)?(t.sourcePosition.isBefore(t.targetPosition)?(n=o["a"]._createAt(r),n.offset=0):(t.deletionPosition.isEqual(n)||(r=t.deletionPosition),n=t.targetPosition),new e(n,r)):new e(n,r)}},{key:"_getTransformedByInsertion",value:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(r&&this.containsPosition(t))return[new e(this.start,t),new e(t.getShiftedBy(n),this.end._getTransformedByInsertion(t,n))];var i=new e(this.start,this.end);return i.start=i.start._getTransformedByInsertion(t,n),i.end=i.end._getTransformedByInsertion(t,n),[i]}},{key:"_getTransformedByMove",value:function(t,n,r){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(this.isCollapsed){var s=this.start._getTransformedByMove(t,n,r);return[new e(s)]}var a,o=e._createFromPositionAndShift(t,r),u=n._getTransformedByDeletion(t,r);if(this.containsPosition(n)&&!i&&(o.containsPosition(this.start)||o.containsPosition(this.end))){var h=this.start._getTransformedByMove(t,n,r),c=this.end._getTransformedByMove(t,n,r);return[new e(h,c)]}var l=this.getDifference(o),d=null,f=this.getIntersection(o);if(1==l.length?d=new e(l[0].start._getTransformedByDeletion(t,r),l[0].end._getTransformedByDeletion(t,r)):2==l.length&&(d=new e(this.start,this.end._getTransformedByDeletion(t,r))),a=d?d._getTransformedByInsertion(u,r,null!==f||i):[],f){var g=new e(f.start._getCombined(o.start,u),f.end._getCombined(o.start,u));2==a.length?a.splice(1,0,g):a.push(g)}return a}},{key:"_getTransformedByDeletion",value:function(t,n){var r=this.start._getTransformedByDeletion(t,n),i=this.end._getTransformedByDeletion(t,n);return null==r&&null==i?null:(null==r&&(r=t),null==i&&(i=t),new e(r,i))}},{key:"isCollapsed",get:function(){return this.start.isEqual(this.end)}},{key:"isFlat",get:function(){var e=this.start.getParentPath(),t=this.end.getParentPath();return"same"==Object(c["a"])(e,t)}},{key:"root",get:function(){return this.start.root}}],[{key:"_createFromPositionAndShift",value:function(e,t){var n=e,r=e.getShiftedBy(t);return t>0?new this(n,r):new this(r,n)}},{key:"_createIn",value:function(e){return new this(o["a"]._createAt(e,0),o["a"]._createAt(e,e.maxOffset))}},{key:"_createOn",value:function(e){return this._createFromPositionAndShift(o["a"]._createBefore(e),e.offsetSize)}},{key:"_createFromRanges",value:function(e){if(0===e.length)throw new h["a"]("range-create-from-ranges-empty-array",null);if(1==e.length)return e[0].clone();var t=e[0];e.sort((function(e,t){return e.start.isAfter(t.start)?1:-1}));var n=e.indexOf(t),r=new this(t.start,t.end);if(n>0)for(var i=n-1;1;i++){if(!e[i].end.isEqual(r.start))break;r.start=o["a"]._createAt(e[i].start)}for(var s=n+1;s<e.length;s++){if(!e[s].start.isEqual(r.end))break;r.end=o["a"]._createAt(e[s].end)}return r}},{key:"fromJSON",value:function(e,t){return new this(o["a"].fromJSON(e.start,t),o["a"].fromJSON(e.end,t))}}]),e}()}}]);