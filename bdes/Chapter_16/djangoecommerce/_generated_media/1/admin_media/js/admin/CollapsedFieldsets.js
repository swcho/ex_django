function findForm(a){if(a.tagName.toLowerCase()!="form"){return findForm(a.parentNode)}return a}var CollapsedFieldsets={collapse_re:/\bcollapse\b/,collapsed_re:/\bcollapsed\b/,collapsed_class:"collapsed",init:function(){var e=document.getElementsByTagName("fieldset");var b=false;for(var d=0,a;a=e[d];d++){if(a.className.match(CollapsedFieldsets.collapse_re)&&!CollapsedFieldsets.fieldset_has_errors(a)){b=true;a.className+=" "+CollapsedFieldsets.collapsed_class;var f=document.createElement("a");f.className="collapse-toggle";f.id="fieldsetcollapser"+d;f.onclick=new Function("CollapsedFieldsets.show("+d+"); return false;");f.href="#";f.innerHTML=gettext("Show");var c=a.getElementsByTagName("h2")[0];c.appendChild(document.createTextNode(" ("));c.appendChild(f);c.appendChild(document.createTextNode(")"))}}if(b){addEvent(findForm(document.getElementsByTagName("fieldset")[0]),"submit",function(){CollapsedFieldsets.uncollapse_all()})}},fieldset_has_errors:function(a){var c=a.getElementsByTagName("div");for(var b=0;b<c.length;b++){if(c[b].className.match(/\berrors\b/)){return true}}return false},show:function(c){var a=document.getElementsByTagName("fieldset")[c];a.className=a.className.replace(CollapsedFieldsets.collapsed_re,"");var b=document.getElementById("fieldsetcollapser"+c);b.onclick=new Function("CollapsedFieldsets.hide("+c+"); return false;");b.innerHTML=gettext("Hide")},hide:function(c){var a=document.getElementsByTagName("fieldset")[c];a.className+=" "+CollapsedFieldsets.collapsed_class;var b=document.getElementById("fieldsetcollapser"+c);b.onclick=new Function("CollapsedFieldsets.show("+c+"); return false;");b.innerHTML=gettext("Show")},uncollapse_all:function(){var b=document.getElementsByTagName("fieldset");for(var a=0;a<b.length;a++){if(b[a].className.match(CollapsedFieldsets.collapsed_re)){CollapsedFieldsets.show(a)}}}};addEvent(window,"load",CollapsedFieldsets.init);