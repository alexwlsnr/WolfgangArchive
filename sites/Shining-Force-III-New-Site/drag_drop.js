
var ns4=document.layers
var ie4=document.all
var ns6=document.getElementById&&!document.all

//Drag und Drop Funktion fuer NS 4//
var dragswitch=0
var nsx
var nsy
var nstemp
function drag_drop_ns(name){
if (!ns4)
return
temp=eval(name)
temp.captureEvents(Event.MOUSEDOWN | Event.MOUSEUP)
temp.onmousedown=gons
temp.onmousemove=dragns
temp.onmouseup=stopns
}
function gons(e){
temp.captureEvents(Event.MOUSEMOVE)
nsx=e.x
nsy=e.y
}
function dragns(e){
if (dragswitch==1){
temp.moveBy(e.x-nsx,e.y-nsy)
return false
}
}
function stopns(){
temp.releaseEvents(Event.MOUSEMOVE)
}

//Drag und Drop Funktion fuer ie4+ und NS6//
function drag_drop(e){
if (ie4&&dragapproved){
crossobj.style.left=tempx+event.clientX-offsetx
crossobj.style.top=tempy+event.clientY-offsety
return false
}
else if (ns6&&dragapproved){
crossobj.style.left=tempx+e.clientX-offsetx
crossobj.style.top=tempy+e.clientY-offsety
return false
}
}
function initializiere_drag(e){
crossobj=ns6? document.getElementById("einepopupbox") : document.all.einepopupbox
var firedobj=ns6? e.target : event.srcElement
var topelement=ns6? "HTML" : "BODY"
while (firedobj.tagName!=topelement&&firedobj.id!="dragbar"){
firedobj=ns6? firedobj.parentNode : firedobj.parentElement
}
if (firedobj.id=="dragbar"){
offsetx=ie4? event.clientX : e.clientX
offsety=ie4? event.clientY : e.clientY
tempx=parseInt(crossobj.style.left)
tempy=parseInt(crossobj.style.top)
dragapproved=true
document.onmousemove=drag_drop
}
}
document.onmousedown=initializiere_drag
document.onmouseup=new Function("dragapproved=false")
//Drag und Drop Funktionen enden hier//
function box_weg(){
if (ie4||ns6)
crossobj.style.visibility="hidden"
else if (ns4)
document.einepopupbox.visibility="hide"
}
