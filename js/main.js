import { components } from "./components.js";
import { textTypes, elementType } from "./elements.types.js";
import { defineFunctions } from "../utils/difinitions.js";
import './fileManager.js';
import './layouts.js';
/**Variavle para armazenar o elemento selecionado */
var selected;
var highliting;
var clipboard;
var tmpText;
var mouseX;
var mouseY;
var command;
var layers = {};



document.spacingType = "margin"; // Define se devemos definir margens ou espaçamentos no elemento.

var ObjectInfo = [];
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

    LoadLast(); //Carregar o projecto salvo.

    $("select").niceSelect();
    
    const
  range = document.getElementById('range'),
  rangeV = document.getElementById('rangeV'),
  setValue = ()=>{
    const
      newValue = Number( (range.value - range.min) * 100 / (range.max - range.min) ),
      newPosition = 10 - (newValue * 0.2);
    rangeV.innerHTML = `<span>${range.value}</span>`;
    rangeV.style.left = `calc(${newValue}% + (${newPosition}px))`;
  };
document.addEventListener("DOMContentLoaded", setValue);
range.addEventListener('input', setValue)


   
    
    var cm = Object.keys(components);
   

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








$("[lic-tip]").each(function(){
    tippy(this, {
        content: $(this).attr("lic-tip"),
      });
});





//Desabilitar menu de contexto
$("*").on("contextmenu", function (e) {
   
    e.preventDefault();
});




tippy('[l-id*="l-bgColor"]', {
    content: `
    <div l-class="d-flex flex-col">
        <div l-class="d-flex">
            <button onclick="Hide('#l-bg-gradient');Show('#l-bg-solid')" class="lic-btn l-text">Solid</button>
            <button onclick="Show('#l-bg-gradient');Hide('#l-bg-solid')" class="lic-btn l-text">gradient</button> 
        </div>
        <div style="width:250px;"  id="l-bg-solid">
            <div id="pickerBc">Bolded content</div>
        </div>
        <div style="width:250px;"  id="l-bg-gradient" class="d-none">
            <div id="pickerBg">Bolded content</div>
        </div>
    </div>
    
    
    `,
    offset: [0, 60],
      
    allowHTML: true,
    
    interactive: true,
    trigger: 'click',
    placement: 'left-start',
    background:"#000",
    theme: 'light',
    onShow(instance) {
        console.log(instance)
      setTimeout(() => {

        try {
            const bgPickr = Pickr.create({
                el: '#pickerBc',
                theme: 'monolith', // or 'monolith', or 'nano'
                inline: true,
                showAlways: true,
                container: '#pickerBc',
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
        } catch (error) {
            
        }

        


        const bgGpickr = new GPickr({
            el: '#pickerBg',

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



  tippy('[l-id*="l-textColor"]', {
    content: `
    <div l-class="d-flex flex-col">
        <div l-class="d-flex">
            <button onclick="Hide('#l-bg-gradient');Show('#l-bg-solid')" class="lic-btn l-text">Solid</button>
            <button onclick="Show('#l-bg-gradient');Hide('#l-bg-solid')" class="lic-btn l-text">gradient</button> 
        </div>
        <div style="width:250px;"  id="l-bg-solid">
            <div id="pickerBc">Bolded content</div>
        </div>
        <div style="width:250px;"  id="l-bg-gradient" class="d-none">
            <div id="pickerBg">Bolded content</div>
        </div>
    </div>
    
    
    `,
    offset: [0, 60],
      
    allowHTML: true,
   
    interactive: true,
    trigger: 'click',
    placement: 'left-start',
    background:"#000",
    theme: 'light',
    onShow(instance) {
        console.log(instance)
      setTimeout(() => {

        try {
            const bgPickr = Pickr.create({
                el: '#pickerBc',
                theme: 'monolith', // or 'monolith', or 'nano'
                inline: true,
                showAlways: true,
                container: '#pickerBc',
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
                    ApplyFg(color.toHEXA())
                  }
            })  
        } catch (error) {
            
        }

        


        const bgGpickr = new GPickr({
            el: '#pickerBg',

            // Pre-defined stops. These are the default since at least two should be defined
            stops: [
                ['rgb(255,132,109)', 0],
                ['rgb(255,136,230)', 1]
            ]
        })


        bgGpickr.on('change', (color, source, instance) => {
            if(validateSelection()){
                ApplyFg(color.getGradient(),true)
              }
        
              
        
        })  


      }, 200);
      },
  });





  tippy('[l-id*="l-borderColor"]', {
    content: `
    <div l-class="d-flex flex-col">
        <div l-class="d-flex">
            <button onclick="Hide('#l-border-gradient');Show('#l-border-solid')" class="lic-btn l-text">Solid</button>
            <button onclick="Show('#l-border-gradient');Hide('#l-border-solid')" class="lic-btn l-text">gradient</button> 
        </div>
        <div style="width:250px;"  id="l-border-solid">
            <div id="pickerBc">Bolded content</div>
        </div>
        <div style="width:250px;"  id="l-border-gradient" class="d-none">
            <div id="pickerborder">Bolded content</div>
        </div>
    </div>
    
    
    `,
    offset: [0, 60],
      
    allowHTML: true,
   
    interactive: true,
    trigger: 'click',
    placement: 'left-start',
    background:"#000",
    theme: 'light',
    onShow(instance) {
        console.log(instance)
      setTimeout(() => {

        try {
            const bgPickr = Pickr.create({
                el: '#pickerBc',
                theme: 'monolith', // or 'monolith', or 'nano'
                inline: true,
                showAlways: true,
                container: '#pickerBc',
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
                    applyCss('border-color',color.toHEXA().toString())
                    $('[l-id*="l-borderColor"]').css("background", color);
                  }
            })  
        } catch (error) {
            
        }

        


        const bgGpickr = new GPickr({
            el: '#pickerborder',

            // Pre-defined stops. These are the default since at least two should be defined
            stops: [
                ['rgb(255,132,109)', 0],
                ['rgb(255,136,230)', 1]
            ]
        })


        bgGpickr.on('change', (color, source, instance) => {
            if(validateSelection()){
               // ApplyFg(color.getGradient(),true)
                applyCss('border-color',color.getGradient())
              }
        
              
        
        })  


      }, 200);
      },
  });




















  var clicking = false;
  var interactingInput;
$('[l-class*="input-number"]').mousedown(function() {
  clicking = true; 
  interactingInput = this; 
});

$(document).mouseup(function() {
  clicking = false;  
})
var i = 0;
var y = 0;
$(document).mousemove(function(my) {
  if (clicking == false) {
    return
  } else {
    // change value
    if (my.pageY <= $(interactingInput).offset().top + $('[l-class*="input-number"]').css('width').replace('px', '') / 10) {
      y = parseInt($(interactingInput).val()) + 1;
      //$('.movestatus').text('plus');
    } else {
      y = parseInt($(interactingInput).val()) - 1;
      //$('.movestatus').text('minus');
    }
    $(interactingInput).val(parseInt(y).toString() + ($(interactingInput).attr("l-sizeType")||"px"));    
    $(interactingInput).trigger('onchange');    
    i++;
  } 
});




// setInterval(() => {
//             if(selected){
//                 showSelection(selected);
//             }
// }, 1);
  


});






function selectMe(el){

    
    
    if (validateSelection()) {
        $(selected).removeClass("selected");
        $(".l-outline-selection").removeClass("l-outline-selection");
    }
    
    selected = el;
    
    $(el).addClass("selected");
    $(`[l-layered="${$(el).attr("l-layer")}"]`).addClass("l-outline-selection");

    if($(`[l-layer="${$(el).attr("l-layer")}"]`).attr("l-width")){
        setDefautWidthHeight($(`[l-layer="${$(el).attr("l-layer")}"]`).attr("l-width"),$(`[l-layer="${$(el).attr("l-layer")}"]`).attr("l-height"))

    }else{
        setDefautWidthHeight($(el).css("width"),$(el).css("width"))

    }

    //console.log(el)
    showProperties(elementType($(el).attr("l-type")));
    showSelection(selected);
  
}

function unSelect(){
    $(selected).removeClass("selected");
    selected = null;
    showProperties();
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
       
        $(el).html(`<input class=" l-text-edition p-0 m-0 b-0 bg-transparent" onblur="endTextEditing(this)" onclick="event.stopPropagation();"  value="${currentText}">`);
        command == false
    }
}

function endTextEditing(Input) {
    var text = $(Input).val();
    
    if(text.trim() == ""){
        $(Input).parent().html(tmpText);
    }
    $(Input).parent().html(text.split("<").join("&lt;").split(">").join("&gt;"));
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
       if(type){
            el.attr("l-type",type);
       }
        
        addLayer({name:type,layer:layerName,parentLayer: $(selected).attr("l-layer")})
        if($(el).children("[l-layer]").length>0){
            selectMe(el);
        }
        $(el).children("[l-layer]").each(function() {
            console.log( (this),  this.nodeName)
            AddComponent(null,this.nodeName, $(this));
            if($(this).children("[l-layer]").length>0){
                selectMe(this);
            }
                
        })
        
        

        layer_counter+=1;

    }

    return null;
        
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
            <span l-class=" icon-small" class="l-pb-4">${name.toUpperCase()}</span>
            <div>
                <span l-class="icon-small " class="lic-btn"  onclick="Delete('[l-layer=\\'${layer}\\']'); event.stopPropagation();"> <i class="far fa-trash-alt"></i></span>
                <span l-class="icon-small " class="lic-btn"   onclick="HideComponent('[l-layer=\\'${layer}\\']'); SwitchIcons(this,'far fa-eye', 'far fa-eye-slash'); event.stopPropagation()"> <i class="far fa-eye"></i></span>
                <span l-class="icon-small " class="lic-btn" l-id="${layer}"  onclick="Colapse('[l-layered=\\'${layer}\\']'); SwitchIcons(this,'fas fa-angle-up', 'fas fa-angle-down'); event.stopPropagation()"> <i class="fas fa-angle-up"></i></span>
            </div>
        </div>
    </li>

    `);
}




function Copy(){
    clipboard = $(selected).clone();
}

function Past(){
    if(validateSelection()){
            //$(selected).append($(clipboard).clone()); 
            var el = $(clipboard).clone();
            //console.log($(clipboard))
            AddComponent(null, el[0].nodeName||el.nodeName, el)
    }
}
function Cut(){
    if(validateSelection()){
            Copy();
            Delete();
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
    var tmpOp = $(selector).attr("l-visibility");
    var op = (tmpOp!=undefined)?tmpOp:$(selector).css("visibility");
    console.log(op,tmpOp)
    if(op.trim() == "visible"){
       
        $(selector).css("visibility",'hidden');
    }else{
        $(selector).css("visibility",'visible');
    }

}


function SwitchClasses(el,d,o) { 
    $(el).attr('l-class',$(el).attr('l-class').split(o).join(" ").trim().split(d).join("").trim()) ;
    if(o)
    $(el).attr('l-class',$(el).attr('l-class')+" "+o);
 }




function Hide(el) { 
    
    $(el).hide();
 }

 function Show(el) { 
    $(el).removeClass("d-none");
    $(el).show();
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

function applyCss(prop, value){
    if(validateSelection()){
            
        try {
            var el = $(selected);
           // el[0].style.removeAttribute(prop);
           el[0].style.setProperty(prop, value, 'important');
            


           // el.style(prop,value, 'important')
           // el.style.setProperty( prop, value, 'important' ); 
            // $(selected).css(prop,value);
            // console.log(prop+":", value)
        } catch (error) {
            console.log("CSS ERRO: ", error)
        }
           
    } 
}


function applyAttr(attr, value){
    if(validateSelection()){
            
        try {
        $(selected).attr(attr, value);
        console.log(attr, value)
        } catch (error) {
            console.log("CSS ERRO: ", error)
        }
           
    } 
}



function removeAttr(attr){
    if(validateSelection()){
            
        try {
        $(selected).removeAttr(attr);
        console.log(attr, value)
        } catch (error) {
            console.log("CSS ERRO: ", error)
        }
           
    } 
}





function removeBackground(param) {  
    
    $(selected).css("background","transparent");

        // var selectedBg = $(selected).css("background");
        // var bgHolder = $(selected).attr("l-bg");
        // if(bgHolder == undefined)
        // bgHolder = "black";

        // if(selectedBg.split(" ").join("")!="rgba(0,0,0,0)nonerepeatscroll0%0%/autopadding-boxborder-box"){
        //     console.log(selectedBg.split(" ").join("")+"=>","rgba(0,0,0,0)nonerepeatscroll0%0%/autopadding-boxborder-box")
        //     $(selected).attr("l-bg",selectedBg);
           
        //     $(selected).css("background","rgba(0,0,0,0) none repeat scroll 0% 0%");
         
        // }else{
        //     $(selected).css("background", bgHolder);
           
        // }
}

function removeTextColor(param) {  
    
  
    var selectedBg = $(selected).css("color");
    var bgHolder = $(selected).attr("l-color");
    if(bgHolder == undefined)
    bgHolder = "black";

    if(selectedBg.split(" ").join("")!="rgba(33,37,41,0)"){
        console.log(selectedBg.split(" ").join("")+"=>","rgba(33,37,41,0)")
        $(selected).attr("l-color",selectedBg);
       
        $(selected).css("color","rgba(33,37,41,0)");
     
    }else{
        $(selected).css("color", bgHolder);
       
    }
}




function ApplyText(souce){

    $(selected).text($(souce).val());
}

function ApplyBg(color){
    if(validateSelection()){
        $(selected).css("background", color);
        $("[l-id*='bgColor']").css("background", color);
    }
}
function ApplyFg(color, isGradient){
    if(validateSelection()){
        if(!isGradient){
            $(selected).css("color", color);
            $("[l-id*='textColor']").css("background", color);
            $(selected).css("-webkit-background-clip", 'unset');
            $(selected).css("-webkit-text-fill-color", 'none');
        }
    }
    // else{
    //     $(selected).css("background", "none");
    //     $(selected).css("-webkit-background-clip", 'text');
    //     $(selected).css("-webkit-text-fill-color", 'transparent');
    //     $(selected).css("background-position", 'center');
    //     $(selected).css("background-size", '100%');
    // }
    
}


function applySize(x,y, mesurement1, mesurement2) { 
      

    if(validateSelection() ){
      
        $(selected).css("width",$(x).val().toString());
        $(selected).css("height",$(y).val().toString());
        $(selected).attr("l-width",$(x).val().toString());
        $(selected).attr("l-height",$(y).val().toString());
    }
 }


 function setDefautWidthHeight(x,y) { 
     var extentionX = x.match(/[px$vhw%]/gm).join('');
     var extentionY = y.match(/[px$vhw%]/gm).join('');
     console.log(extentionX,extentionY, x,y)
   // $(`[l-id="l-width-mesure"]`).val(extentionX).niceSelect('update');
    $(`[l-id="l-width"]`).val(x);
    //$(`[l-id="l-height-mesure"]`).val(extentionY).niceSelect('update');
    $(`[l-id="l-height"]`).val(y);

    
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


function showProperties(params) {
    $("[l-props]").hide();
    if(params!=null){
        $(`[l-props*="${params}"],[l-props*="any"]`).show();
        console.log(params);

    }
}





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
    filterKey: function(e/* e, dx, dy, dz */) {
        //console.log(e.keyCode == 39 || e.keyCode == 37 || e.keyCode);

        return true;
      },
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



let root = document.documentElement;

function lightTheme() {
    root.style.setProperty('--l-selection',' #5F40A6');
    root.style.setProperty('--l-bg-dark',' #E4E4E4');
    root.style.setProperty('--l-bg-transparent-dark','#1d21253a');
    root.style.setProperty('--l-fg-dark',' #F5F5F5');
    root.style.setProperty('--l-fg2-dark',' #E4E4E4');
    root.style.setProperty('--l-text-dark',' #707070');
    root.style.setProperty('--l-border-dark',' #E4E4E4');
}

function darkTheme() {
    root.style.setProperty('--l-selection',' #5F40A6');
    root.style.setProperty('--l-bg-transparent-light','#1d21253a');
    root.style.setProperty('--l-bg-dark',' #090909');
    root.style.setProperty('--l-bg-transparent-dark','#4e63792a');
    root.style.setProperty('--l-fg-dark',' #1C1C1E');
    root.style.setProperty('--l-fg2-dark',' #2F2E31');
    root.style.setProperty('--l-text-dark',' #CFCFCF');
    root.style.setProperty('--l-border-dark',' #2F2E31');
}

function Save() {
    window.LIC.fm.saveProject();
}

function LastSaved (){
    return [localStorage.getItem(localStorage.getItem('last-doc')),localStorage.getItem(localStorage.getItem('last-doc')+"-layers")];
}

function Project() { 
    return $("#lic-canvas");
 }

 function Layers() { 
    return $("#l-layers");
 }

 function LoadLast (){
    window.LIC.fm.openProject();


}

function RUN(){
    var w = window.open("http://127.0.0.1:5500/index.html", "_blank");
    w.document.body.innerHTML = $(".app").html();
}


function showSelection(el){
    var sizes = {};
    try {
         sizes =  el.getBoundingClientRect();
    } catch (error) {
        sizes = $(el)[0].getBoundingClientRect();
    }
  
   
    $('[l-id~="selection-light"]').css("left", sizes.left-2 + 'px');
    $('[l-id~="selection-light"]').css("top", sizes.top-2 + 'px');
    $('[l-id~="selection-light"]').css("width", sizes.width+4 + 'px');
    $('[l-id~="selection-light"]').css("height", sizes.height+4 + 'px');
}

defineFunctions([
    {name:"RUN", func:RUN},
    {name:"selectMe", func:selectMe},
    {name:"higlight", func:higlight},
    {name:"layoutDirection", func:layoutDirection},
    {name:"AddComponent", func:AddComponent},
    {name:"ApplyText", func:ApplyText},
    {name:"applyPadding", func:applyPadding},
    {name:"applyMargin", func:applyMargin},
    {name:"Copy", func:Copy},
    {name:"Past", func:Past},
    {name:"Cut", func:Cut},
    {name:"Delete", func:Delete},
    {name:"showQuickpanel", func:showQuickpanel},
    {name:"hideQuickpanel", func:hideQuickpanel},
    {name:"endTextEditing", func:endTextEditing},
    {name:"startTextEditing", func:startTextEditing},
    {name:"showContext", func:showContext},
    {name:"hideContext", func:hideContext},
    {name:"unHiglight", func:unHiglight},
    {name:"unSelect", func:unSelect},
    {name:"Colapse", func:Colapse},
    {name:"SwitchIcons", func:SwitchIcons},
    {name:"SwitchClasses", func:SwitchClasses},
    {name:"HideComponent", func:HideComponent},
    {name:"Hide", func:Hide},
    {name:"Show", func:Show},
    {name:"applyCss", func:applyCss},
    {name:"applyAttr", func:applyAttr},
    {name:"removeAttr", func:removeAttr},
    {name:"removeBackground", func:removeBackground},
    {name:"removeTextColor", func:removeTextColor},
    {name:"showProperties", func:showProperties},
    {name:"applySize", func:applySize},
    {name:"darkTheme", func:darkTheme},
    {name:"lightTheme", func:lightTheme},
    {name:"Save", func:Save},
    {name:"LastSaved", func:LastSaved},
    {name:"Project", func:Project},
    
]);



