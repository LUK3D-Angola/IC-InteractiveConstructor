import { defineFunctions } from "../utils/difinitions.js";
window.breackpoints = {
    any: "auto",
    xs: "360px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
}
window.styles = {

};

window.currentLayout = "lg";


$(document).ready(function() {

});

function setLayouts(breackpoint) {
    // saveLayouts(window.currentLayout)
    $('[luk-id="app"]').css('width', window.breackpoints[breackpoint]);
    //  applyLayouts(breackpoint);
    window.currentLayout = breackpoint;
}


function saveLayouts(layout) {
    $('[l-id="lic-page"]').find('[style]').each(function() {
        if (!($(this).attr("l-layer") in styles)) {
            styles[$(this).attr("l-layer")] = { "xs": {}, "sm": {}, "md": {}, "lg": {}, "xl": {} };
        }

        Object.keys(styles[$(this).attr("l-layer")]).forEach(key => {
            if (Object.entries(styles[$(this).attr("l-layer")][key]).length == 0)
                styles[$(this).attr("l-layer")][key] = $(this).attr('style');
        });
        styles[$(this).attr("l-layer")][layout] = $(this).attr('style');



    });
}



function applyLayouts(layout) {
    $('[l-id="lic-page"]').find('[l-layer]').each(function() {
        if (($(this).attr("l-layer") in window.styles)) {
            $(this).attr('style', window.styles[$(this).attr("l-layer")][layout]);
        }

        // Object.keys(styles[$(this).attr("l-layer")]).forEach(key => {
        //     if(Object.entries(styles[$(this).attr("l-layer")][key]).length == 0)
        //     styles[$(this).attr("l-layer")][key] = $(this).attr('style');
        //     console.log(styles[$(this).attr("l-layer")][key])
        // });
        // styles[$(this).attr("l-layer")][layout] = $(this).attr('style');



    });
}


function layoutsDebug() {
    console.log(styles);
}

defineFunctions([
    { name: "setLayouts", func: setLayouts },
    { name: "layoutsDebug", func: layoutsDebug },
    { name: "saveLayouts", func: saveLayouts },

]);