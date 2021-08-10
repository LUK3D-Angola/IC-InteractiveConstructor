import { components } from "./components.js";
import { textTypes } from "./elements.types.js";


/**Variavle para armazenar o elemento selecionado */
var selected;
var highliting;
var clipboard;
var tmpText;
var mouseX;
var mouseY;
var command;
var layers = {};
var layer_counter = 0;

var InterComponents = {
    "line":`
    
    <div class="lic-line">
        <div  class="lic-page app select " onclick="selectMe(this);event.stopPropagation();">
        </div>
    </div>
    
    `,
    "page":`
        <div  class="lic-page app select " onclick="selectMe(this);event.stopPropagation();">
        </div>
    `
}


$(document).ready(function () {

    // $(document.body).click(function(event) {
    //     if (!$(event.target) != selected) {
    //         unSelect();
    //     }
    // });

   
    
    var cm = Object.keys(components);
    console.log(cm)

    cm.forEach(element => {
        var el = `<li onclick="AddComponent('right','${element}');event.stopPropagation();"> <span>${element}</span> </li>`;

        $(".quickpanel>.body>ul").append(el);
    });


const bgPickr = Pickr.create({
    el: '.bg-picker',
    theme: 'monolith', // or 'monolith', or 'nano'
    useAsButton: true,
    default: '#FD413C',
    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }
    
});

bgPickr.on('change', (color, source, instance) => {
    if(validateSelection()){
        ApplyBg(color.toHEXA())
      }
})  




const fgPickr = Pickr.create({
    el: '.fg-picker',
    theme: 'monolith', // or 'monolith', or 'nano'
    useAsButton: true,
    default: '#5F40A6',

    swatches: [
        'rgba(95, 64, 166, 1)',
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 193, 7, 1)'
    ],

    components: {

        // Main components
        preview: true,
        opacity: true,
        hue: true,

        // Input / output Options
        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
            clear: true,
            save: true
        }
    }

});

fgPickr.on('change', (color, source, instance) => {
    if(validateSelection()){
        ApplyFg(color.toHEXA())
      }
})  






// const bgGpickr = new GPickr({
//     el: '.bg-picker-gr',

//     // Pre-defined stops. These are the default since at least two should be defined
//     stops: [
//         ['rgb(255,132,109)', 0],
//         ['rgb(255,136,230)', 1]
//     ]
// })



// bgGpickr.on('change', (color, source, instance) => {
//     if(validateSelection()){
//         ApplyBg(color.getGradient())
//       }

      
// $(".gpcr-marker").on("dblclick", function (e) {
//     var color = $(this).css("color");
//     console.log(color,bgGpickr.getStops())
//     bgGpickr.removeStop(color)
//     e.stopPropagation();
// });
// })  








$("[lic-tip]").each(function(){
    tippy(this, {
        content: $(this).attr("lic-tip"),
      });
});







//CONTEXT MENU




// if (document.addEventListener) {
//     document.body.addEventListener('contextmenu', function(e) {
//       showContext();
//       e.preventDefault();
//     }, false);

    
//   } else {
//     document.body.attachEvent('oncontextmenu', function() {
//         showContext();
//       window.event.returnValue = false;
//     });
//   }

//Desabilitar menu de contexto
$("*").on("contextmenu", function (e) {
   
    e.preventDefault();
});




tippy('#bgTest', {
    content: '<div id="pickerTest">Bolded content</div>',
    allowHTML: true,
    hideOnClick: 'toggle',
    interactive: true,
    placement: 'left-start',
    theme: 'light',
    onShow(instance) {
        console.log(instance)
      setTimeout(() => {
        const bgGpickr = new GPickr({
            el: '#pickerTest',

            // Pre-defined stops. These are the default since at least two should be defined
            stops: [
                ['rgb(255,132,109)', 0],
                ['rgb(255,136,230)', 1]
            ]
        })


        bgGpickr.on('change', (color, source, instance) => {
            if(validateSelection()){
                ApplyBg(color.getGradient())
              }
        
              
        
        })  


      }, 200);
      },
  });

  


});






function selectMe(el){

    console.log(el)
    if (validateSelection()) {
        $(selected).removeClass("selected");
        $(".l-outline-selection").removeClass("l-outline-selection");
    }
    
    selected = el;
    $(el).addClass("selected");
    $(`[l-layered="${$(el).attr("l-layer")}"]`).addClass("l-outline-selection");


}

function unSelect(){
    $(selected).removeClass("selected");
    selected = null;
}

function higlight(el){
    highliting = el;
    
    $('.higlighted').removeClass('higlighted');
    $(highliting).addClass('higlighted');
    $('.higlighted').mouseout(function(){
        unHiglight(this)
    });


}

function unHiglight(el){
   
        $(el).removeClass('higlighted');
}

function startTextEditing(el) {
    if(textTypes.includes($(el).prop("tagName"))){
        var currentText = $(el).text();
        tmpText = currentText;
        console.log("selecionado")
        $(el).html(`<input class=" l-text-edition p-0 m-0 b-0 bg-transparent" onblur="endTextEditing(this)" onclick="event.stopPropagation();"  value="${currentText}">`);
        command == false
    }
}

function endTextEditing(Input) {
    var text = $(Input).val();
    
    if(text.trim() == ""){
        $(Input).parent().html(tmpText);
    }
    $(Input).parent().html(text);
  }



function AddComponent(direction, type, elementObject){
    
    if(validateSelection()){
        var el = elementObject||$(components[type].code);
        var layerName = "layer"+uuidv4();

        layers[layerName];

        if(!direction || direction=='right'){
          $(selected).append(el)
           //selectMe(el);
        }else{
             $(selected).prepend(el)
            //selectMe(el);
        }

        

        el.attr("l-layer",layerName);
        addLayer({name:type,layer:layerName,parentLayer: $(selected).attr("l-layer")})
       
        $(`[l-id="${layerName}"]`).hide();
        //$(`[l-layered="${layerName}"]`).append(layerName)

        $(el).find("*[l-layer]").each(function(el){
            var myLayer = "layer"+uuidv4();
            $(this).attr("l-layer",myLayer); 
            addLayer({name:$(this)[0].nodeName,layer:myLayer, parentLayer: layerName})

            $(`[l-id="${myLayer}"]`).hide();
        
           
        });


        layer_counter+=1;

    }
        
}

function addLayer({name, layer,parentLayer}){

    var extraClasses = [];

    if(parentLayer != null && !(!parentLayer)){
        $(`[l-id="${parentLayer}"]`).show();
        parentLayer =  $(`[l-layered="${parentLayer}"]`);
        extraClasses.push("l-ul-child ");
    }
    else
    parentLayer = "#l-layers";
   
   return $(parentLayer).append(`
    
    <li l-parent="${parentLayer}" l-layered="${layer}" onmouseout="unHiglight('[l-layer=\\'${layer}\\']')" onmouseover="higlight('[l-layer=\\'${layer}\\']');event.stopPropagation();" onclick="selectMe('[l-layer=\\'${layer}\\']');event.stopPropagation();"  l-id="document01" class="layer-outline ${extraClasses.join(" ")}">
        <div class="l-layer-outliner-title">
            <span class="l-pb-4">${name.toUpperCase()}</span>
            <div>
                <span class="lic-btn"  onclick="Delete('[l-layer=\\'${layer}\\']'); event.stopPropagation();"> <i class="far fa-trash-alt"></i></span>
                    <span class="lic-btn"   onclick="HideComponent('[l-layer=\\'${layer}\\']'); SwitchIcons(this,'far fa-eye', 'far fa-eye-slash'); event.stopPropagation()"> <i class="far fa-eye"></i></span>
                <span class="lic-btn" l-id="${layer}"  onclick="Colapse('[l-layered=\\'${layer}\\']'); SwitchIcons(this,'fas fa-angle-up', 'fas fa-angle-down'); event.stopPropagation()"> <i class="fas fa-angle-up"></i></span>
            </div>
        </div>
    </li>

    `);
}




function Copy(){
    clipboard = selected;
}
function Past(){
    if(validateSelection()){
            //$(selected).append($(clipboard).clone()); 
            var el = $(clipboard).clone();
            AddComponent(null, el[0].nodeName, el)
    }
}
function Cut(){
    if(validateSelection()){
            Copy();
            Delete();
        
    }
}

function Colapse(el){
    $(el).children().toggle(); 
    $(el).children(":first").show(); 
}
/**
 * Alterna valores de duas classes dentro do filho i do elemento el
 * @el  {object} elemento pai
 * @d  {string} calsse default
 * @o  {string} calsse secundaria
 */
function SwitchIcons(el,d,o) { 
    $(el).children(":first").toggleClass(d);
    $(el).children(":first").toggleClass(o);
 }
function HideComponent (selector) {  
    var tmpOp = $(selector).attr("l-opacity");
    var op = (tmpOp!=undefined)?tmpOp:$(selector).css("opacity");
    console.log(op,tmpOp)
    if(parseFloat(op)>0.0){
       
        $(selector).css("opacity",'0.0');
    }else{
        $(selector).css("opacity",1);
    }
    
    
}
function applyPadding(side, value) {
    if(validateSelection()){

        var sides = ['p-','pt-','pb-','ps-','pe-','px-','py-'];
        var sizes = ['0','1','2','3','4','5','auto'];

        sizes.forEach(size => {

            sides.forEach(s => {
                $(selected).removeClass(s+size); 
            });
            
        });
        

        $(selected).addClass("p"+$(side).val()+"-"+$(value).val()); 
        
    }
  }
function applyMargin(side, value) {
    if(validateSelection()){
        
        var sides = ['m-','mt-','mb-','ms-','me-','mx-','my-'];
        var sizes = ['0','1','2','3','4','5','auto'];

        sizes.forEach(size => {

            sides.forEach(s => {
                $(selected).removeClass(s+size); 
            });
            
        });
           
            $(selected).addClass("m"+$(side).val()+"-"+$(value).val()); 
        
    }
  }

function Delete(el){

    if(validateSelection() || el){

        var current = el||selected;
        $(current).find("*[l-layer]").each(function(){
            var childParent = $(this).attr("l-layer"); 
            $(`[l-layered="${childParent}"]`).remove(); 
        });

      var parent = $(current).attr("l-layer"); 
      $(`[l-layered="${parent}"]`).remove(); 
      $(current).remove(); 
      unSelect();
    }
}


function ApplyText(souce){

    $(selected).text($(souce).val());
}

function ApplyBg(color){
    $(selected).css("background", color);
}
function ApplyFg(color){
    $(selected).css("color", color);
}




function layoutDirection(direction){
    if (validateSelection()) {

        if(!direction || direction=='vertical'){
            $(selected).removeClass("d-flex"); 
            $(selected).removeClass("flex-row"); 
            $(selected).removeClass("flex-column"); 
            $(selected).addClass("flex-column");
            $(selected).addClass("d-flex"); 
            
        }else{
          
            $(selected).removeClass("d-flex"); 
            $(selected).removeClass("flex-column"); 
            $(selected).removeClass("flex-row"); 
            $(selected).addClass("flex-row"); 
            $(selected).addClass("d-flex"); 
        }
    }
}

function validateSelection(){
    var isValid = true;
    if(selected==null){
        console.log("Seleciona um elemento para adicionar o componente de layout.");
        isValid = false;
    }
    return isValid;

}

$(".quickpanel").hide();
function showQuickpanel(){
    let el = $(".quickpanel");
    $(el).css("left", mouseX + 'px');
    $(el).css("top", mouseY + 'px');
    $(".quickpanel").show();
}

function hideQuickpanel(){
    
    $(".quickpanel").hide();
    
}


$(".lic-contextMenu").hide();
//Context Menu function
function showContext () { 
    let el = $(".lic-contextMenu");
    $(el).css("left", mouseX + 'px');
    $(el).css("top", mouseY + 'px');
    $(".lic-contextMenu").show();
 }

 function hideContext(){
    
    $(".lic-contextMenu").hide();
    
}





const onMouseMove = (e) =>{
    mouseX = e.pageX;
    mouseY = e.pageY;
}
document.body.addEventListener('mousemove', onMouseMove);


function closeOnEsc(){
    hideQuickpanel();
    hideContext();
}



window.selectMe = selectMe;
window.higlight = higlight;
window.layoutDirection = layoutDirection;
window.AddComponent = AddComponent;
window.ApplyText = ApplyText;
window.applyPadding = applyPadding;
window.applyMargin = applyMargin;
window.Copy = Copy;
window.Past = Past;
window.Cut = Cut;
window.Delete = Delete;
window.showQuickpanel = showQuickpanel;
window.hideQuickpanel = hideQuickpanel;
window.endTextEditing = endTextEditing;
window.startTextEditing = startTextEditing;
window.showContext = showContext;
window.hideContext = hideContext;
window.unHiglight = unHiglight;
window.unSelect = unSelect;
window.Colapse = Colapse;
window.SwitchIcons = SwitchIcons;
window.HideComponent = HideComponent;







Mousetrap.bind('space', function(e) {

     showQuickpanel();
     if(e.keyCode == 32) {
         e.preventDefault();
         showQuickpanel();
        }
        showQuickpanel();
    },'keydown');

    
Mousetrap.bind('esc', function() { closeOnEsc(), unSelect(); },'keydown');
Mousetrap.bind('del', function() { Delete() });
Mousetrap.bind(['command+x', 'ctrl+x'], function() { Cut() });
Mousetrap.bind(['command+c', 'ctrl+c'], function() { Copy() });
Mousetrap.bind(['command+v', 'ctrl+v'], function() { Past() });
Mousetrap.bind(['command+shift+left', 'ctrl+shift+left'], function() { 
    $(selected).parent().prepend(selected);
});
Mousetrap.bind(['command+shift+right', 'ctrl+shift+right'], function() { 
    $(selected).parent().append(selected);

});

Mousetrap.bind(['command', 'ctrl'], function(e) { 
        if(!command)
        command = true
        
    },'keydown');

    Mousetrap.bind(['command', 'ctrl'], function(e) { 
        
        command = false
        console.log(command,e.ctrlKey)
    
},'keyup');


//PAN e ZOOM
var element = document.getElementById('lic-canvas')
var panzoomInstance = panzoom(element, {
    initialZoom: 0.56,
    initialX: 510,
    initialY: -50,
    zoomDoubleClickSpeed: 1, 
    zoomSpeed: 0.065, // 6.5% per mouse wheel event
    beforeWheel: function(e) {
      // permite fazer o zoom apenas quando a tecla alt estiver pessionada. caso contrario, ignore
      var shouldIgnore = !e.altKey;
      return shouldIgnore;
    },
    beforeMouseDown: function(e) {

        if(e.button == 2){
            showContext();
            console.log("Vendo:", highliting)
            selectMe(highliting);
            e.preventDefault();
        }
      // permite fazer o Pan apenas quando a tecla alt estiver pessionada. caso contrario, ignore
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
      },
    beforeDbClick: function(e) {
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
      },
  });
 

 




dragElement(document.getElementById("ic-toolBox"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}