CKEDITOR.dialog.add("textfield",function(e){var d={value:1,size:1,maxLength:1},f={text:1,password:1};return{title:e.lang.textfield.title,minWidth:350,minHeight:150,onShow:function(){var a=this;delete a.textField;var b=a.getParentEditor().getSelection().getSelectedElement();if(b&&b.getName()=="input"&&(f[b.getAttribute("type")]||!b.getAttribute("type"))){a.textField=b;a.setupContent(b)}},onOk:function(){var c,b=this.textField,a=!b;if(a){c=this.getParentEditor();b=c.document.createElement("input");b.setAttribute("type","text")}if(a){c.insertElement(b)}this.commitContent({element:b})},onLoad:function(){var b=function(h){var c=h.hasAttribute(this.id)&&h.getAttribute(this.id);this.setValue(c||"")},a=function(j){var i=j.element,c=this.getValue();if(c){i.setAttribute(this.id,c)}else{i.removeAttribute(this.id)}};this.foreach(function(c){if(d[c.id]){c.setup=b;c.commit=a}})},contents:[{id:"info",label:e.lang.textfield.title,title:e.lang.textfield.title,elements:[{type:"hbox",widths:["50%","50%"],children:[{id:"_cke_saved_name",type:"text",label:e.lang.textfield.name,"default":"",accessKey:"N",setup:function(a){this.setValue(a.getAttribute("_cke_saved_name")||a.getAttribute("name")||"")},commit:function(b){var a=b.element;if(this.getValue()){a.setAttribute("_cke_saved_name",this.getValue())}else{a.removeAttribute("_cke_saved_name");a.removeAttribute("name")}}},{id:"value",type:"text",label:e.lang.textfield.value,"default":"",accessKey:"V"}]},{type:"hbox",widths:["50%","50%"],children:[{id:"size",type:"text",label:e.lang.textfield.charWidth,"default":"",accessKey:"C",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(e.lang.common.validateNumberFailed)},{id:"maxLength",type:"text",label:e.lang.textfield.maxChars,"default":"",accessKey:"M",style:"width:50px",validate:CKEDITOR.dialog.validate.integer(e.lang.common.validateNumberFailed)}],onLoad:function(){if(CKEDITOR.env.ie7Compat){this.getElement().setStyle("zoom","100%")}}},{id:"type",type:"select",label:e.lang.textfield.type,"default":"text",accessKey:"M",items:[[e.lang.textfield.typeText,"text"],[e.lang.textfield.typePass,"password"]],setup:function(a){this.setValue(a.getAttribute("type"))},commit:function(j){var i=j.element;if(CKEDITOR.env.ie){var c=i.getAttribute("type"),b=this.getValue();if(c!=b){var a=CKEDITOR.dom.element.createFromHtml('<input type="'+b+'"></input>',e.document);i.copyAttributes(a,{type:1});a.replace(i);e.getSelection().selectElement(a);j.element=a}}else{i.setAttribute("type",this.getValue())}}}]}]}});