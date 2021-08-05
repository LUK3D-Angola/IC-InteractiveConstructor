



var components = {
    "input":{
        description:'Elemento de formulario',
        code:`
        <div class="mb-3" onclick="selectMe(this);event.stopPropagation();">
          <label class="form-label select" onclick="selectMe(this);event.stopPropagation();">Email address</label>
          <input type="email" class="form-control"  placeholder="name@example.com">
        </div>
        `
    },
    "card":{
        description:'Um container é utilizado na organização de layout e agrupamento de elementos.',
        code:`
        <div class="card select border-0" style="width: 100%;" onclick="selectMe(this);event.stopPropagation();">
         
          <div class="card-body select" onclick="selectMe(this);event.stopPropagation();">
            <h5 class="card-title select" onclick="selectMe(this);event.stopPropagation();">Card title</h5>
          </div>
        </div>
        `
    },
    "label":{
        description:'Label.',
        code:`
        <label  class="form-label select" onclick="selectMe(this);event.stopPropagation();">Exemplo de texto</label>
        `
    },
    "textarea":{
        description:'Label.',
        code:`
        <textarea class="form-control select" onclick="selectMe(this);event.stopPropagation();"  rows="3"></textarea>
        `
    },
    "select":{
        description:'Select.',
        code:`
        <select class="form-select select" onclick="selectMe(this);event.stopPropagation();" aria-label="Default select example">
        </select>
        `
    },
    "alert":{
        description:'Select.',
        code:`
        <div class="alert alert-danger select" onclick="selectMe(this);event.stopPropagation();" role="alert">
            A simple danger alert—check it out!
        </div>
        `
    },
    "badge":{
        description:'badge.',
        code:`
        <span class="badge bg-secondary select" onclick="selectMe(this);event.stopPropagation();">New</span>
        `
    },
    "button Primary":{
        description:'badge.',
        code:`
        <button type="button" class="btn btn-primary select" onclick="selectMe(this);event.stopPropagation();">Primary</button>
        `
    },
    "checkbox":{
        description:'Select.',
        code:`
        <div class="form-check select" onclick="selectMe(this);event.stopPropagation();">
            <input class="form-check-input select" onclick="selectMe(this);event.stopPropagation();" type="checkbox" value="" >
            <label class="form-check-label select" onclick="selectMe(this);event.stopPropagation();" >
                Default checkbox
            </label>
        </div>
        `
    },
   

}




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

var mouseX;
var mouseY;

function selectMe(el){

    
    if (validateSelection()) {
        $(selected).removeClass("selected");
    }
    
    selected = el;
    $(el).addClass("selected");
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
        
            $(selected).removeClass('p-0'); 
            $(selected).removeClass('p-1'); 
            $(selected).removeClass('p-2'); 
            $(selected).removeClass('p-3'); 
            $(selected).removeClass('p-4'); 
            $(selected).removeClass('p-5'); 

            $(selected).removeClass('pt-0'); 
            $(selected).removeClass('pt-1'); 
            $(selected).removeClass('pt-2'); 
            $(selected).removeClass('pt-3'); 
            $(selected).removeClass('pt-4'); 
            $(selected).removeClass('pt-5'); 

            $(selected).removeClass('pb-0'); 
            $(selected).removeClass('pb-1'); 
            $(selected).removeClass('pb-2'); 
            $(selected).removeClass('pb-3'); 
            $(selected).removeClass('pb-4'); 
            $(selected).removeClass('pb-5'); 

            $(selected).removeClass('ps-0'); 
            $(selected).removeClass('ps-1'); 
            $(selected).removeClass('ps-2'); 
            $(selected).removeClass('ps-3'); 
            $(selected).removeClass('ps-4'); 
            $(selected).removeClass('ps-5'); 

            $(selected).removeClass('pe-0'); 
            $(selected).removeClass('pe-1'); 
            $(selected).removeClass('pe-2'); 
            $(selected).removeClass('pe-3'); 
            $(selected).removeClass('pe-4'); 
            $(selected).removeClass('pe-5');

            $(selected).removeClass('px-0'); 
            $(selected).removeClass('px-1'); 
            $(selected).removeClass('px-2'); 
            $(selected).removeClass('px-3'); 
            $(selected).removeClass('px-4'); 
            $(selected).removeClass('px-5');

            $(selected).removeClass('py-0'); 
            $(selected).removeClass('py-1'); 
            $(selected).removeClass('py-2'); 
            $(selected).removeClass('py-3'); 
            $(selected).removeClass('py-4'); 
            $(selected).removeClass('py-5');

            $(selected).addClass("p"+$(side).val()+"-"+$(value).val()); 
        
    }
  }
function applyMargin(side, value) {
    if(validateSelection()){
        
            $(selected).removeClass('m-0'); 
            $(selected).removeClass('m-1'); 
            $(selected).removeClass('m-2'); 
            $(selected).removeClass('m-3'); 
            $(selected).removeClass('m-4'); 
            $(selected).removeClass('m-5'); 

            $(selected).removeClass('mt-0'); 
            $(selected).removeClass('mt-1'); 
            $(selected).removeClass('mt-2'); 
            $(selected).removeClass('mt-3'); 
            $(selected).removeClass('mt-4'); 
            $(selected).removeClass('mt-5'); 

            $(selected).removeClass('mb-0'); 
            $(selected).removeClass('mb-1'); 
            $(selected).removeClass('mb-2'); 
            $(selected).removeClass('mb-3'); 
            $(selected).removeClass('mb-4'); 
            $(selected).removeClass('mb-5'); 

            $(selected).removeClass('ms-0'); 
            $(selected).removeClass('ms-1'); 
            $(selected).removeClass('ms-2'); 
            $(selected).removeClass('ms-3'); 
            $(selected).removeClass('ms-4'); 
            $(selected).removeClass('ms-5'); 

            $(selected).removeClass('me-0'); 
            $(selected).removeClass('me-1'); 
            $(selected).removeClass('me-2'); 
            $(selected).removeClass('me-3'); 
            $(selected).removeClass('me-4'); 
            $(selected).removeClass('me-5');

            $(selected).removeClass('mx-0'); 
            $(selected).removeClass('mx-1'); 
            $(selected).removeClass('mx-2'); 
            $(selected).removeClass('mx-3'); 
            $(selected).removeClass('mx-4'); 
            $(selected).removeClass('mx-5');

            $(selected).removeClass('my-0'); 
            $(selected).removeClass('my-1'); 
            $(selected).removeClass('my-2'); 
            $(selected).removeClass('my-3'); 
            $(selected).removeClass('my-4'); 
            $(selected).removeClass('my-5');

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
            $(selected).removeClass("flex-column"); 
            $(selected).removeClass("flex-row"); 
            $(selected).addClass("flex-row"); 
            $(selected).addClass("d-flex"); 
        }else{
            $(selected).removeClass("d-flex"); 
            $(selected).removeClass("flex-row"); 
            $(selected).removeClass("flex-column"); 
            $(selected).addClass("flex-column");
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








Mousetrap.bind('space', function() { showQuickpanel() },'keydown');
Mousetrap.bind('esc', function() { closeOnEsc() },'keydown');


//Mousetrap.bind('space', function() { hideQuickpanel() },'keyup');
// Mousetrap.bind('x', function() { highlight(3); }, 'keyup');