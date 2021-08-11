


/**
 * @param  {Array<Object>} definitions  Lista de objectos com nome e funcao 
 * 
 */
function defineFunctions( definitions=[{name:"",func:()=>{}}]){
    definitions.forEach(a=>{
        window[a.name] = a.func;
    })
}


export {defineFunctions}

