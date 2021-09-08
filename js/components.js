
/**Lista de componentes disponível */
var components = {
    "input":{
        description:'Elemento de formulario',
        code:`
          <input onchange="applyAttr('placeholder',$(this).val())" onfocusout="$(this).val('')"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" l-layer="testeBasico4" type="email" class="form-control"  placeholder="Placeholder">
        `,
    
    },
    "card":{
        description:'Um container é utilizado na organização de layout e agrupamento de elementos.',
        code:`
        <div class="card select border-0" style="width: 100%;" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
          <div l-layer="testeBasico12" class="card-body select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
            <h5  l-layer="testeBasico2" ondblclick="startTextEditing(this);event.stopPropagation();" class="card-title select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Card title</h5>
            </div>
        </div>
        `
    },
    "div":{
        description:'Um container é utilizado na organização de layout e agrupamento de elementos.',
        code:`
        <div class="select" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
        </div>
        `
    },
    "label":{
        description:'Label.',
        code:`
        <label  class="form-label select" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Exemplo de texto</label>
        `
    },
    "H1":{
        description:'Header 01.',
        code:`
        <h1 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h1>
        `
    },
    "H2":{
        description:'Header 01.',
        code:`
        <h2 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h2>
        `
    },
    "H3":{
        description:'Header 01.',
        code:`
        <h3 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h3>
        `
    },
    "H4":{
        description:'Header 01.',
        code:`
        <h4 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h4>
        `
    },
    "H5":{
        description:'Header 01.',
        code:`
        <h5 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h5>
        `
    },
    "H6":{
        description:'Header 01.',
        code:`
        <h6 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h6>
        `
    },
    "H7":{
        description:'Header 01.',
        code:`
        <h7 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h7>
        `
    },
    "textarea":{
        description:'Label.',
        code:`
        <textarea class="form-control select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();"  rows="3"></textarea>
        `
    },
    "Paragraph":{
        description:'P.',
        code:`
        <p class="" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();"  rows="3">Placeholder</p>
        `
    },
    "select":{
        description:'Select.',
        code:`
        <select class="form-select select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" aria-label="Default select example">
        </select>
        `
    },
    "alert":{
        description:'Select.',
        code:`
        <div class="alert alert-danger select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" role="alert">
            <p class="" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();"  rows="3">Simples alertas</p>
        </div>
        `
    },
    "badge":{
        description:'badge.',
        code:`
        <span class="badge bg-secondary select" ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">New</span>
        `
    },
    "button":{
        description:'badge.',
        code:`
        <button type="button" ondblclick="startTextEditing(this);event.stopPropagation();"  class="btn btn-primary select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Primary</button>
        `
    },
    "A":{
        description:'badge.',
        code:`
        <a href="#" ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Placeholder</a>
        `
    },
    "checkbox":{
        description:'Select.',
        code:`
        <div class="form-check select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
            <input class="form-check-input select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" type="checkbox" value="" >
            <label ondblclick="startTextEditing(this);event.stopPropagation();"  class="form-check-label select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" >
                Default checkbox
            </label>
        </div>
        `
    },
   

}


export {components};