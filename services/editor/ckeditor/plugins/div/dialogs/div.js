(function(){function e(c,b,a){if(!b.is||!b.getCustomData("block_processed")){b.is&&CKEDITOR.dom.element.setMarker(a,b,"block_processed",true);c.push(b)}}function d(j){var i=[],c=j.getChildren();for(var b=0;b<c.count();b++){var a=c.getItem(b);if(!(a.type===CKEDITOR.NODE_TEXT&&/^[ \t\n\r]+$/.test(a.getText()))){i.push(a)}}return i}function f(x,w){var v=(function(){var g=CKEDITOR.tools.extend({},CKEDITOR.dtd.$blockLimit);delete g.div;if(x.config.div_wrapTable){delete g.td;delete g.th}return g})(),u=CKEDITOR.dtd.div;function t(j){var i=new CKEDITOR.dom.elementPath(j).elements,h;for(var g=0;g<i.length;g++){if(i[g].getName() in v){h=i[g];break}}return h}function s(){this.foreach(function(g){if(/^(?!vbox|hbox)/.test(g.type)){if(!g.setup){g.setup=function(h){g.setValue(h.getAttribute(g.id)||"")}}if(!g.commit){g.commit=function(i){var h=this.getValue();if("dir"==g.id&&i.getComputedStyle("direction")==h){return}if(h){i.setAttribute(g.id,h)}else{i.removeAttribute(g.id)}}}}})}function r(R){var P=[],N={},K=[],J,o=R.document.getSelection(),m=o.getRanges(),k=o.createBookmarks(),i,h,g=R.config.enterMode==CKEDITOR.ENTER_DIV?"div":"p";for(i=0;i<m.length;i++){h=m[i].createIterator();while(J=h.getNextParagraph()){if(J.getName() in v){var Q,O=J.getChildren();for(Q=0;Q<O.count();Q++){e(K,O.getItem(Q),N)}}else{while(!u[J.getName()]&&J.getName()!="body"){J=J.getParent()}e(K,J,N)}}}CKEDITOR.dom.element.clearAllMarkers(N);var M=p(K),L,I,n;for(i=0;i<M.length;i++){var l=M[i][0];L=l.getParent();for(Q=1;Q<M[i].length;Q++){L=L.getCommonAncestor(M[i][Q])}n=new CKEDITOR.dom.element("div",R.document);for(Q=0;Q<M[i].length;Q++){l=M[i][Q];while(!l.getParent().equals(L)){l=l.getParent()}M[i][Q]=l}var j=null;for(Q=0;Q<M[i].length;Q++){l=M[i][Q];if(!(l.getCustomData&&l.getCustomData("block_processed"))){l.is&&CKEDITOR.dom.element.setMarker(N,l,"block_processed",true);if(!Q){n.insertBefore(l)}n.append(l)}}CKEDITOR.dom.element.clearAllMarkers(N);P.push(n)}o.selectBookmarks(k);return P}function q(j){var i=new CKEDITOR.dom.elementPath(j.getSelection().getStartElement()),h=i.blockLimit,g=h&&h.getAscendant("div",true);return g}function p(m){var l=[],k=null,j,i;for(var h=0;h<m.length;h++){i=m[h];var g=t(i);if(!g.equals(k)){k=g;l.push([])}l[l.length-1].push(i)}return l}function c(l){var k=this.getDialog(),j=k._element&&k._element.clone()||new CKEDITOR.dom.element("div",x.document);this.commit(j,true);l=[].concat(l);var i=l.length,h;for(var g=0;g<i;g++){h=k.getContentElement.apply(k,l[g].split(":"));h&&h.setup&&h.setup(j,true)}}var b={},a=[];return{title:x.lang.div.title,minWidth:400,minHeight:165,contents:[{id:"info",label:x.lang.common.generalTab,title:x.lang.common.generalTab,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"elementStyle",type:"select",style:"width: 100%;",label:x.lang.div.styleSelectLabel,"default":"",items:[[x.lang.common.notSet,""]],onChange:function(){c.call(this,["info:class","advanced:dir","advanced:style"])},setup:function(h){for(var g in b){b[g].checkElementRemovable(h,true)&&this.setValue(g)}},commit:function(h){var g;if(g=this.getValue()){b[g].applyToObject(h)}}},{id:"class",type:"text",label:x.lang.common.cssClass,"default":""}]}]},{id:"advanced",label:x.lang.common.advancedTab,title:x.lang.common.advancedTab,elements:[{type:"vbox",padding:1,children:[{type:"hbox",widths:["50%","50%"],children:[{type:"text",id:"id",label:x.lang.common.id,"default":""},{type:"text",id:"lang",label:x.lang.link.langCode,"default":""}]},{type:"hbox",children:[{type:"text",id:"style",style:"width: 100%;",label:x.lang.common.cssStyle,"default":"",commit:function(i){var h=this.getValue(),g=[h,i.getAttribute("style")].join(";");h&&i.setAttribute("style",g)}}]},{type:"hbox",children:[{type:"text",id:"title",style:"width: 100%;",label:x.lang.common.advisoryTitle,"default":""}]},{type:"select",id:"dir",style:"width: 100%;",label:x.lang.common.langDir,"default":"",items:[[x.lang.common.notSet,""],[x.lang.common.langDirLtr,"ltr"],[x.lang.common.langDirRtl,"rtl"]]}]}]}],onLoad:function(){s.call(this);var h=this,g=this.getContentElement("info","elementStyle");x.getStylesSet(function(l){var k;if(l){for(var j=0;j<l.length;j++){var i=l[j];if(i.element&&i.element=="div"){k=i.name;b[k]=new CKEDITOR.style(i);g.items.push([k,k]);g.add(k,k)}}}g[g.items.length>1?"enable":"disable"]();setTimeout(function(){g.setup(h._element)},0)})},onShow:function(){if(w=="editdiv"){var g=q(x);g&&this.setupContent(this._element=g)}},onOk:function(){if(w=="editdiv"){a=[this._element]}else{a=r(x,true)}var h=a.length;for(var g=0;g<h;g++){this.commitContent(a[g]);!a[g].getAttribute("style")&&a[g].removeAttribute("style")}this.hide()},onHide:function(){delete this._element}}}CKEDITOR.dialog.add("creatediv",function(a){return f(a,"creatediv")});CKEDITOR.dialog.add("editdiv",function(a){return f(a,"editdiv")})})();