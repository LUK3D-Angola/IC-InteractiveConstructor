import { defineFunctions } from "../utils/difinitions.js";
var breackpoints = {
    xs:"0px",
    sm:"640px",
    md:"768px",
    lg:"1024px",
    xl:"1280px",
}
var styles = {
  "asfasfsa": { xs: {}, sm: {}, md: {}, lg: {}, xl: {} },
};

var currentLayout = "sm";


$(document).ready(function () {
    
});

function setLayouts(breackpoint){
    saveLayouts(currentLayout)
    $('[luk-id="app"]').css('max-width', breackpoints[breackpoint]);
    applyLayouts(breackpoint);
    currentLayout = breackpoint;
}


function saveLayouts(layout){
    $('[l-id="lic-page"]').find('[style]').each(function() {
        if(!($(this).attr("l-layer") in styles)){
            styles[$(this).attr("l-layer")] = { "xs": {}, "sm": {}, "md": {}, "lg": {}, "xl": {} };
        }

        Object.keys(styles[$(this).attr("l-layer")]).forEach(key => {
            if(Object.entries(styles[$(this).attr("l-layer")][key]).length == 0)
            styles[$(this).attr("l-layer")][key] = $(this).attr('style');
            console.log(styles[$(this).attr("l-layer")][key])
        });
        styles[$(this).attr("l-layer")][layout] = $(this).attr('style');
        
        
            
    });
}



function applyLayouts(layout){
    $('[l-id="lic-page"]').find('[l-layer]').each(function() {
        if(($(this).attr("l-layer") in styles)){
            $(this).attr('style', styles[$(this).attr("l-layer")][layout]) ;
        }

        // Object.keys(styles[$(this).attr("l-layer")]).forEach(key => {
        //     if(Object.entries(styles[$(this).attr("l-layer")][key]).length == 0)
        //     styles[$(this).attr("l-layer")][key] = $(this).attr('style');
        //     console.log(styles[$(this).attr("l-layer")][key])
        // });
        // styles[$(this).attr("l-layer")][layout] = $(this).attr('style');
        
        
            
    });
}


function layoutsDebug(){
    console.log(styles);
}

defineFunctions([
    {name:"setLayouts", func:setLayouts},
    {name:"layoutsDebug", func:layoutsDebug},
    {name:"saveLayouts", func:saveLayouts},
    {name:"styles", func:styles},
]);
