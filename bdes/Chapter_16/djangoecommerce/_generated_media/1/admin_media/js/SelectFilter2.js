function findForm(a){if(a.tagName.toLowerCase()!="form"){return findForm(a.parentNode)}return a}var SelectFilter={init:function(e,a,t,r){var g=document.getElementById(e);g.id+="_from";g.className="filtered";var o=g.parentNode.getElementsByTagName("p");for(var p=0;p<o.length;p++){g.parentNode.removeChild(o[p])}var b=quickElement("div",g.parentNode);b.className=t?"selector stacked":"selector";var n=quickElement("div",b,"");n.className="selector-available";quickElement("h2",n,interpolate(gettext("Available %s"),[a]));var f=quickElement("p",n,"");f.className="selector-filter";quickElement("img",f,"","src",r+"img/admin/selector-search.gif");f.appendChild(document.createTextNode(" "));var d=quickElement("input",f,"","type","text");d.id=e+"_input";n.appendChild(g);var h=quickElement("a",n,gettext("Choose all"),"href",'javascript: (function(){ SelectBox.move_all("'+e+'_from", "'+e+'_to"); })()');h.className="selector-chooseall";var k=quickElement("ul",b,"");k.className="selector-chooser";var s=quickElement("a",quickElement("li",k,""),gettext("Add"),"href",'javascript: (function(){ SelectBox.move("'+e+'_from","'+e+'_to");})()');s.className="selector-add";var q=quickElement("a",quickElement("li",k,""),gettext("Remove"),"href",'javascript: (function(){ SelectBox.move("'+e+'_to","'+e+'_from");})()');q.className="selector-remove";var l=quickElement("div",b,"");l.className="selector-chosen";quickElement("h2",l,interpolate(gettext("Chosen %s"),[a]));var m=quickElement("p",l,gettext("Select your choice(s) and click "));m.className="selector-filter";quickElement("img",m,"","src",r+(t?"img/admin/selector_stacked-add.gif":"img/admin/selector-add.gif"),"alt","Add");var c=quickElement("select",l,"","id",e+"_to","multiple","multiple","size",g.size,"name",g.getAttribute("name"));c.className="filtered";var j=quickElement("a",l,gettext("Clear all"),"href",'javascript: (function() { SelectBox.move_all("'+e+'_to", "'+e+'_from");})()');j.className="selector-clearall";g.setAttribute("name",g.getAttribute("name")+"_old");addEvent(d,"keyup",function(i){SelectFilter.filter_key_up(i,e)});addEvent(d,"keydown",function(i){SelectFilter.filter_key_down(i,e)});addEvent(g,"dblclick",function(){SelectBox.move(e+"_from",e+"_to")});addEvent(c,"dblclick",function(){SelectBox.move(e+"_to",e+"_from")});addEvent(findForm(g),"submit",function(){SelectBox.select_all(e+"_to")});SelectBox.init(e+"_from");SelectBox.init(e+"_to");SelectBox.move(e+"_from",e+"_to")},filter_key_up:function(c,b){from=document.getElementById(b+"_from");if((c.which&&c.which==13)||(c.keyCode&&c.keyCode==13)){from.selectedIndex=0;SelectBox.move(b+"_from",b+"_to");from.selectedIndex=0;return false}var a=from.selectedIndex;SelectBox.filter(b+"_from",document.getElementById(b+"_input").value);from.selectedIndex=a;return true},filter_key_down:function(b,a){from=document.getElementById(a+"_from");if((b.which&&b.which==39)||(b.keyCode&&b.keyCode==39)){var c=from.selectedIndex;SelectBox.move(a+"_from",a+"_to");from.selectedIndex=(c==from.length)?from.length-1:c;return false}if((b.which&&b.which==40)||(b.keyCode&&b.keyCode==40)){from.selectedIndex=(from.length==from.selectedIndex+1)?0:from.selectedIndex+1}if((b.which&&b.which==38)||(b.keyCode&&b.keyCode==38)){from.selectedIndex=(from.selectedIndex==0)?from.length-1:from.selectedIndex-1}return true}};