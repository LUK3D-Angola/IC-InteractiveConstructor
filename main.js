import { components } from "./components.js";
import { textTypes } from "./elements.types.js";


$(document).ready(function () {


    
    var cm = Object.keys(components);
    console.log(cm)

    cm.forEach(element => {
        var el = `<li onclick="AddComponent('right','${element}');event.stopPropagation();"> <span>${element}</span> </li>`;

        $(".quickpanel>.body>ul").append(el);
    });


const bgPickr = Pickr.create({
    el: '.bg-picker',
    theme: 'monolith', // or 'monolith', or 'nano'

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

fgPickr.on('change', (color, source, instance) => {
    if(validateSelection()){
        ApplyFg(color.toHEXA())
      }
})  










});




/**Variavle para armazenar o elemento selecionado */
var selected;
var clipboard;
var tmpText;
var mouseX;
var mouseY;
var command;
function selectMe(el){

    
    if (validateSelection()) {
        $(selected).removeClass("selected");
    }
    
    selected = el;
    $(el).addClass("selected");


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



function AddComponent(direction, type){
    var el;

    if(validateSelection()){
        if(!direction || direction=='right'){
            el =  $(selected).append(components[type].code); 
           selectMe(el);
        }else{
             el=  $(selected).prepend(components[type].code); 
            selectMe(el);
        }
    }

    console.log(el);
   
        
}


function Copy(){
    clipboard = selected;
}
function Past(){
    if(validateSelection()){
            $(selected).append($(clipboard).clone()); 
        
    }
}
function Cut(){
    if(validateSelection()){
            Copy();
            Delete();
        
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

function Delete(){

    if(validateSelection()){
      $(selected).remove(); 
    }
}


function ApplyText(souce){

    $(selected).text($(souce).val());
}

function ApplyBg(color){
    $(selected).css("background-color", color);
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
    let circle = $(".quickpanel");
    $(circle).css("left", mouseX + 'px');
    $(circle).css("top", mouseY + 'px');
    $(".quickpanel").show();
}

function hideQuickpanel(){
   
    $(".quickpanel").fadeOut();
   
}


const onMouseMove = (e) =>{
    mouseX = e.pageX;
    mouseY = e.pageY;
}
document.addEventListener('mousemove', onMouseMove);


function closeOnEsc(){
    hideQuickpanel();
}

window.selectMe = selectMe;
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








Mousetrap.bind('space', function() { showQuickpanel() },'keydown');
Mousetrap.bind('esc', function() { closeOnEsc() },'keydown');
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
var element = document.getElementById('ICApp')
var panzoomInstance = panzoom(element, {
    zoomDoubleClickSpeed: 1, 
    beforeWheel: function(e) {
      // permite fazer o zoom apenas quando a tecla alt estiver pessionada. caso contrario, ignore
      var shouldIgnore = !e.altKey;
      return shouldIgnore;
    },
    beforeMouseDown: function(e) {
      // permite fazer o Pan apenas quando a tecla alt estiver pessionada. caso contrario, ignore
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
      },
    beforeDbClick: function(e) {
        var shouldIgnore = !e.altKey;
        return shouldIgnore;
      },
  });
 

