var textTypes = [
    "LABEL",
    "P",
    "BUTTON",
    "A",
    "H1",
    "H2",
    "H3",
    "H4",
    "H5",
    "H6",
    "H7",
    "SPAN",
];

function type(param) { 
    if(!param)
    return "Invalid Type";
    if (textTypes.includes(param.toUpperCase())){
        return "text";
    }

    return "eny"
 }


export {textTypes,type as elementType};