/**Lista de componentes disponível */
var components = {
    input: {
        description: "Elemento de formulario",
        code: `
          <input  onchange="applyAttr('placeholder',$(this).val())" onfocusout="$(this).val('')"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" l-layer="testeBasico4" type="email" class="form-control"  placeholder="Placeholder">
        `,
        icon: `
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64pt" height="64pt" viewBox="0 0 64 64" version="1.1">
            <g id="surface1">
            <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 34 8 L 34 12 C 36.929688 12 39.125 12.578125 40.5 13.25 C 41.1875 13.585938 41.710938 13.960938 41.9375 14.1875 C 41.984375 14.234375 41.984375 14.21875 42 14.25 L 42 49.75 C 41.984375 49.78125 41.984375 49.765625 41.9375 49.8125 C 41.710938 50.039063 41.1875 50.414063 40.5 50.75 C 39.125 51.421875 36.929688 52 34 52 L 34 56 C 37.46875 56 40.226563 55.296875 42.25 54.3125 C 42.929688 53.984375 43.484375 53.578125 44 53.1875 C 44.515625 53.578125 45.070313 53.984375 45.75 54.3125 C 47.773438 55.296875 50.53125 56 54 56 L 54 52 C 51.070313 52 48.875 51.421875 47.5 50.75 C 46.8125 50.414063 46.289063 50.039063 46.0625 49.8125 C 46.015625 49.765625 46.015625 49.78125 46 49.75 L 46 14.25 C 46.015625 14.21875 46.015625 14.234375 46.0625 14.1875 C 46.289063 13.960938 46.8125 13.585938 47.5 13.25 C 48.875 12.578125 51.070313 12 54 12 L 54 8 C 50.53125 8 47.773438 8.703125 45.75 9.6875 C 45.070313 10.015625 44.515625 10.421875 44 10.8125 C 43.484375 10.421875 42.929688 10.015625 42.25 9.6875 C 40.226563 8.703125 37.46875 8 34 8 Z M 2 20 L 2 44 L 38 44 L 38 40 L 6 40 L 6 24 L 38 24 L 38 20 Z M 50 20 L 50 24 L 58 24 L 58 40 L 50 40 L 50 44 L 62 44 L 62 20 Z M 10 28 L 10 36 L 26 36 L 26 28 Z "/>
            </g>
            </svg>
        `,
    },
    card: {
        description: "Um container é utilizado na organização de layout e agrupamento de elementos.",
        code: `
        <div class="card l-select border-0" style="width: 100%;" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
          <div l-layer="testeBasico12" class="card-body select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
            <h5  l-layer="testeBasico2" ondblclick="startTextEditing(this);event.stopPropagation();" class="card-title select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Card title</h5>
            </div>
        </div>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64pt" height="64pt" viewBox="0 0 64 64" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 6 12 L 6 52 L 58 52 L 58 12 Z M 10 16 L 54 16 L 54 48 L 10 48 Z "/>
        </g>
        </svg>

        `,
    },
    Image: {
        description: "Um container é utilizado na organização de layout e agrupamento de elementos.",
        code: `
        <img l-layer="testeBasico2" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48pt" height="48pt" viewBox="0 0 48 48" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 8 8 C 5.8125 8 4 9.8125 4 12 L 4 36 C 4 38.1875 5.8125 40 8 40 L 40 40 C 42.1875 40 44 38.1875 44 36 L 44 12 C 44 9.8125 42.1875 8 40 8 Z M 8 12 L 40 12 L 40 36 L 8 36 Z M 20 16 C 18.898438 16 18 16.898438 18 18 C 18 19.101563 18.898438 20 20 20 C 21.101563 20 22 19.101563 22 18 C 22 16.898438 21.101563 16 20 16 Z M 29 22 L 22 30 L 17 25 L 11.554688 32 L 36.5 32 Z "/>
        </g>
        </svg>

        `,
    },
    div: {
        description: "Um container é utilizado na organização de layout e agrupamento de elementos.",
        code: `
        <div class="select" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
        </div>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64pt" height="64pt" viewBox="0 0 64 64" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 6 12 L 6 52 L 58 52 L 58 12 Z M 10 16 L 54 16 L 54 48 L 10 48 Z "/>
        </g>
        </svg>

        `,
    },
    label: {
        description: "Label.",
        code: `
        <label  class="form-label select" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Exemplo de texto</label>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48pt" height="48pt" viewBox="0 0 48 48" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 8 6 L 8 14 L 12 14 L 12 10 L 22 10 L 22 38 L 18 38 L 18 42 L 30 42 L 30 38 L 26 38 L 26 10 L 36 10 L 36 14 L 40 14 L 40 6 Z "/>
        </g>
        </svg>

        `,
    },
    H1: {
        description: "Header 01.",
        code: `
        <h1 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h1>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 3.96875 19.839844 C 2.875 19.839844 1.984375 20.734375 1.984375 21.824219 L 1.984375 77.382813 C 1.984375 78.480469 2.875 79.363281 3.96875 79.363281 L 17.855469 79.363281 C 18.949219 79.363281 19.839844 78.480469 19.839844 77.382813 L 19.839844 57.539063 L 39.683594 57.539063 L 39.683594 77.382813 C 39.683594 78.480469 40.574219 79.363281 41.667969 79.363281 L 55.554688 79.363281 C 56.65625 79.363281 57.539063 78.480469 57.539063 77.382813 L 57.539063 21.824219 C 57.539063 20.734375 56.65625 19.839844 55.554688 19.839844 L 41.667969 19.839844 C 40.574219 19.839844 39.683594 20.734375 39.683594 21.824219 L 39.683594 41.667969 L 19.839844 41.667969 L 19.839844 21.824219 C 19.839844 20.734375 18.949219 19.839844 17.855469 19.839844 Z M 81.347656 19.839844 C 80.953125 19.839844 80.558594 19.933594 80.234375 20.152344 L 64.359375 29.824219 C 63.808594 30.195313 63.492188 30.839844 63.492188 31.496094 L 63.492188 43.652344 C 63.492188 44.378906 63.902344 45.039063 64.546875 45.386719 C 65.1875 45.734375 65.980469 45.726563 66.59375 45.324219 L 79.363281 37.761719 L 79.363281 77.382813 C 79.363281 78.480469 80.25 79.363281 81.347656 79.363281 L 95.238281 79.363281 C 96.339844 79.363281 97.222656 78.480469 97.222656 77.382813 L 97.222656 21.824219 C 97.222656 20.734375 96.339844 19.839844 95.238281 19.839844 Z "/>
        </g>
        </svg>
        `,
    },
    H2: {
        description: "Header 01.",
        code: `
        <h2 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h2>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 7.9375 25.792969 C 6.84375 25.792969 5.953125 26.683594 5.953125 27.777344 L 5.953125 71.429688 C 5.953125 72.527344 6.84375 73.414063 7.9375 73.414063 L 19.839844 73.414063 C 20.933594 73.414063 21.824219 72.527344 21.824219 71.429688 L 21.824219 55.554688 L 33.730469 55.554688 L 33.730469 71.429688 C 33.730469 72.527344 34.621094 73.414063 35.714844 73.414063 L 47.617188 73.414063 C 48.710938 73.414063 49.601563 72.527344 49.601563 71.429688 L 49.601563 27.777344 C 49.601563 26.683594 48.710938 25.792969 47.617188 25.792969 L 35.714844 25.792969 C 34.621094 25.792969 33.730469 26.683594 33.730469 27.777344 L 33.730469 43.652344 L 21.824219 43.652344 L 21.824219 27.777344 C 21.824219 26.683594 20.933594 25.792969 19.839844 25.792969 Z M 75.457031 25.792969 C 64.585938 25.792969 57.539063 31.957031 57.539063 41.667969 C 57.539063 42.757813 58.421875 43.652344 59.523438 43.652344 L 69.382813 43.652344 C 70.484375 43.652344 71.367188 42.757813 71.367188 41.667969 L 71.367188 41.480469 C 71.367188 39.0625 72.511719 37.945313 75.023438 37.945313 C 77.402344 37.945313 78.867188 39.148438 78.867188 41.171875 C 78.867188 42.765625 77.832031 44.394531 71.675781 50.097656 L 58.160156 62.746094 C 57.757813 63.121094 57.539063 63.6875 57.539063 64.234375 L 57.539063 71.429688 C 57.539063 72.527344 58.421875 73.414063 59.523438 73.414063 L 91.269531 73.414063 C 92.371094 73.414063 93.253906 72.527344 93.253906 71.429688 L 93.253906 63.492188 C 93.253906 62.390625 92.371094 61.507813 91.269531 61.507813 L 77.566406 61.507813 L 82.277344 57.476563 C 90.261719 50.347656 93.253906 45.695313 93.253906 40.363281 C 93.253906 31.777344 85.945313 25.792969 75.457031 25.792969 Z "/>
        </g>
        </svg>
        `,
    },
    H3: {
        description: "Header 01.",
        code: `
        <h3 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h3>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48pt" height="48pt" viewBox="0 0 48 48" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 4 12 L 4 36 L 10 36 L 10 26 L 18 26 L 18 36 L 24 36 L 24 12 L 18 12 L 18 20 L 10 20 L 10 12 Z M 35.796875 12 C 35.796875 12 28 12 28 19.078125 L 28 20 L 33.5 20 C 33.5 20 33.375 17.75 36 17.75 C 38.375 17.75 38.375 20 38.375 20 C 38.375 21.320313 37.203125 22 36 22 L 34 22 L 34 26 L 36 26 C 37.203125 26 38.375 26.679688 38.375 28 C 38.375 28 38.4375 30.375 36 30.375 C 33.5 30.375 33.5 28 33.5 28 L 28 28 L 28 28.929688 C 28 36 35.796875 36 35.796875 36 C 35.796875 36 44 36 44 28.921875 C 44 26 42.492188 24.421875 42 24 C 42.492188 23.578125 44 22 44 19.078125 C 44 12 35.796875 12 35.796875 12 Z "/>
        </g>
        </svg>
        `,
    },
    H4: {
        description: "Header 01.",
        code: `
        <h4 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h4>
        `,
    },
    H5: {
        description: "Header 01.",
        code: `
        <h5 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h5>
        `,
    },
    H6: {
        description: "Header 01.",
        code: `
        <h6 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h6>
        `,
    },
    H7: {
        description: "Header 01.",
        code: `
        <h7 ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Title</h7>
        `,
    },
    textarea: {
        description: "Label.",
        code: `
        <textarea class="form-control select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();"  rows="3"></textarea>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48pt" height="48pt" viewBox="0 0 48 48" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 4 12 C 1.8125 12 0 13.8125 0 16 L 0 32 C 0 34.1875 1.8125 36 4 36 L 44 36 C 46.1875 36 48 34.1875 48 32 L 48 16 C 48 13.8125 46.1875 12 44 12 Z M 4 16 L 44 16 L 44 32 L 4 32 Z M 8 24 L 8 28 L 12 28 L 12 24 Z M 16 24 L 16 28 L 20 28 L 20 24 Z M 24 24 L 24 28 L 28 28 L 28 24 Z "/>
        </g>
        </svg>
        `,
    },
    Paragraph: {
        description: "P.",
        code: `
        <p class="" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();"  rows="3">Placeholder</p>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="60pt" height="60pt" viewBox="0 0 60 60" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 41.417969 7.863281 C 41.324219 7.871094 41.222656 7.878906 41.132813 7.894531 L 21.710938 7.894531 C 15.171875 7.894531 9.867188 13.199219 9.867188 19.738281 C 9.867188 26.273438 15.171875 31.578125 21.710938 31.578125 L 29.605469 31.578125 L 29.605469 49.34375 C 29.597656 50.050781 29.96875 50.714844 30.585938 51.078125 C 31.203125 51.429688 31.957031 51.429688 32.574219 51.078125 C 33.191406 50.714844 33.558594 50.050781 33.550781 49.34375 L 33.550781 11.84375 L 39.472656 11.84375 L 39.472656 49.34375 C 39.464844 50.050781 39.835938 50.714844 40.453125 51.078125 C 41.070313 51.429688 41.824219 51.429688 42.441406 51.078125 C 43.058594 50.714844 43.429688 50.050781 43.421875 49.34375 L 43.421875 11.84375 L 45.394531 11.84375 C 46.105469 11.851563 46.765625 11.480469 47.128906 10.863281 C 47.484375 10.246094 47.484375 9.492188 47.128906 8.875 C 46.765625 8.257813 46.105469 7.886719 45.394531 7.894531 L 41.753906 7.894531 C 41.640625 7.878906 41.53125 7.863281 41.417969 7.863281 Z "/>
        </g>
        </svg>`,
    },
    select: {
        description: "Select.",
        code: `
        <select class="form-select select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" aria-label="Default l-select example">
        </select>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64pt" height="64pt" viewBox="0 0 64 64" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 2 20 L 2 44 L 62 44 L 62 20 Z M 6 24 L 38 24 L 38 40 L 6 40 Z M 42 24 L 58 24 L 58 40 L 42 40 Z M 44 30 L 50 36 L 56 30 Z "/>
        </g>
        </svg>
        `,
    },
    alert: {
        description: "Select.",
        code: `
        <div class="alert alert-danger select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" role="alert">
            <p class="" ondblclick="startTextEditing(this);event.stopPropagation();" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();"  rows="3">Simples alertas</p>
        </div>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52pt" height="52pt" viewBox="0 0 52 52" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 49.8125 39.65625 L 30.007813 5.355469 C 27.582031 1.160156 23.628906 1.160156 21.203125 5.355469 L 1.398438 39.65625 C -1.023438 43.847656 0.960938 47.273438 5.800781 47.273438 L 45.410156 47.273438 C 50.25 47.273438 52.226563 43.847656 49.8125 39.65625 Z M 22.882813 15.089844 C 23.597656 14.320313 24.5 13.933594 25.605469 13.933594 C 26.714844 13.933594 27.613281 14.3125 28.328125 15.074219 C 29.03125 15.828125 29.390625 16.78125 29.390625 17.925781 C 29.390625 18.90625 27.914063 26.136719 27.421875 31.390625 L 23.859375 31.390625 C 23.429688 26.136719 21.820313 18.90625 21.820313 17.925781 C 21.820313 16.796875 22.183594 15.851563 22.882813 15.089844 Z M 28.277344 40.09375 C 27.53125 40.816406 26.636719 41.1875 25.605469 41.1875 C 24.574219 41.1875 23.683594 40.816406 22.9375 40.09375 C 22.191406 39.363281 21.820313 38.484375 21.820313 37.449219 C 21.820313 36.417969 22.191406 35.523438 22.9375 34.777344 C 23.683594 34.03125 24.574219 33.660156 25.605469 33.660156 C 26.636719 33.660156 27.53125 34.03125 28.277344 34.777344 C 29.023438 35.523438 29.390625 36.417969 29.390625 37.449219 C 29.390625 38.484375 29.023438 39.363281 28.277344 40.09375 Z "/>
        </g>
        </svg>
        `,
    },
    badge: {
        description: "badge.",
        code: `
        <span class="badge bg-secondary select" ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">New</span>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 93.539063 45.441406 L 75.273438 24.601563 L 75.117188 24.445313 C 73.289063 22.753906 70.894531 21.824219 68.40625 21.824219 C 68.40625 21.824219 68.398438 21.824219 68.398438 21.824219 L 9.921875 21.824219 C 6.640625 21.824219 3.96875 24.5 3.96875 27.777344 L 3.96875 71.429688 C 3.96875 74.707031 6.640625 77.382813 9.921875 77.382813 L 68.398438 77.382813 C 68.398438 77.382813 68.398438 77.382813 68.40625 77.382813 C 70.902344 77.382813 73.289063 76.449219 75.125 74.761719 L 93.496094 53.8125 C 94.617188 52.6875 95.238281 51.191406 95.238281 49.601563 C 95.238281 48.039063 94.632813 46.566406 93.539063 45.441406 Z M 73.414063 55.554688 C 70.125 55.554688 67.460938 52.890625 67.460938 49.601563 C 67.460938 46.316406 70.125 43.652344 73.414063 43.652344 C 76.699219 43.652344 79.363281 46.316406 79.363281 49.601563 C 79.363281 52.890625 76.699219 55.554688 73.414063 55.554688 Z "/>
        </g>
        </svg>
        `,
    },
    button: {
        description: "badge.",
        code: `
        <button type="button" ondblclick="startTextEditing(this);event.stopPropagation();"  class="btn btn-primary select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Primary</button>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="64pt" height="64pt" viewBox="0 0 64 64" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 16 12 C 10.507813 12 6 16.507813 6 22 L 6 42 C 6 47.492188 10.507813 52 16 52 L 48 52 C 53.492188 52 58 47.492188 58 42 L 58 22 C 58 16.507813 53.492188 12 48 12 Z M 16 16 L 48 16 C 51.3125 16 54 18.6875 54 22 L 54 42 C 54 45.3125 51.3125 48 48 48 L 16 48 C 12.6875 48 10 45.3125 10 42 L 10 22 C 10 18.6875 12.6875 16 16 16 Z "/>
        </g>
        </svg>`,
    },
    A: {
        description: "badge.",
        code: `
        <a href="#" ondblclick="startTextEditing(this);event.stopPropagation();"  onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">Placeholder</a>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100pt" height="100pt" viewBox="0 0 100 100" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 73.414063 7.945313 C 68.839844 7.945313 64.265625 9.6875 60.789063 13.167969 L 50.867188 23.089844 C 45.921875 28.035156 44.503906 35.171875 46.589844 41.394531 L 53.710938 34.265625 C 54.003906 32.234375 54.914063 30.265625 56.476563 28.699219 L 66.398438 18.78125 C 68.328125 16.847656 70.871094 15.871094 73.414063 15.871094 C 75.953125 15.871094 78.496094 16.84375 80.425781 18.78125 C 84.292969 22.648438 84.292969 28.941406 80.425781 32.808594 L 70.507813 42.726563 C 68.941406 44.292969 66.980469 45.191406 64.941406 45.488281 L 57.8125 52.617188 C 59.648438 53.238281 61.5625 53.5625 63.492188 53.5625 C 68.066406 53.5625 72.636719 51.820313 76.117188 48.339844 L 86.039063 38.417969 C 93.007813 31.460938 93 20.128906 86.039063 13.167969 C 82.558594 9.6875 77.984375 7.945313 73.414063 7.945313 Z M 61.429688 33.691406 C 60.398438 33.722656 59.421875 34.15625 58.703125 34.894531 L 34.894531 58.703125 C 33.855469 59.695313 33.4375 61.175781 33.800781 62.570313 C 34.164063 63.957031 35.25 65.042969 36.636719 65.40625 C 38.03125 65.769531 39.511719 65.351563 40.503906 64.3125 L 64.3125 40.503906 C 65.484375 39.363281 65.839844 37.621094 65.203125 36.109375 C 64.5625 34.605469 63.066406 33.644531 61.429688 33.691406 Z M 36.605469 45.679688 C 31.738281 45.433594 26.800781 47.152344 23.089844 50.867188 L 13.167969 60.789063 C 6.207031 67.746094 6.207031 79.078125 13.167969 86.039063 C 16.648438 89.519531 21.222656 91.261719 25.792969 91.261719 C 30.367188 91.261719 34.9375 89.519531 38.417969 86.03125 L 48.339844 76.109375 C 53.285156 71.171875 54.703125 64.027344 52.617188 57.8125 L 45.488281 64.941406 C 45.191406 66.972656 44.292969 68.941406 42.726563 70.507813 L 32.808594 80.425781 C 28.941406 84.292969 22.648438 84.292969 18.78125 80.425781 C 14.910156 76.558594 14.910156 70.265625 18.78125 66.398438 L 28.699219 56.476563 C 30.265625 54.914063 32.234375 54.011719 34.265625 53.710938 L 41.394531 46.589844 C 39.835938 46.0625 38.226563 45.765625 36.605469 45.679688 Z "/>
        </g>
        </svg>`,
    },
    checkbox: {
        description: "Select.",
        code: `
        <div class="form-check select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();">
            <input class="form-check-input select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" type="checkbox" value="" >
            <label ondblclick="startTextEditing(this);event.stopPropagation();"  class="form-check-label select" onmouseover="higlight(this);event.stopPropagation();" onclick="selectMe(this);event.stopPropagation();" >
                Default checkbox
            </label>
        </div>
        `,
        icon: `
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="52pt" height="52pt" viewBox="0 0 52 52" version="1.1">
        <g id="surface1">
        <path style=" stroke:none;fill-rule:nonzero;fill:#989898;fill-opacity:1;" d="M 9.601563 0 C 4.300781 0 0 4.300781 0 9.601563 L 0 41.609375 C 0 46.910156 4.300781 51.210938 9.601563 51.210938 L 41.609375 51.210938 C 46.910156 51.210938 51.210938 46.910156 51.210938 41.609375 L 51.210938 9.601563 C 51.210938 4.300781 46.917969 0 41.609375 0 Z M 9.601563 3.9375 L 41.609375 3.9375 C 44.734375 3.9375 47.273438 6.476563 47.273438 9.601563 L 47.273438 41.609375 C 47.273438 44.734375 44.734375 47.273438 41.609375 47.273438 L 9.601563 47.273438 C 6.476563 47.273438 3.9375 44.734375 3.9375 41.609375 L 3.9375 9.601563 C 3.9375 6.476563 6.476563 3.9375 9.601563 3.9375 Z M 37.792969 9.109375 C 37.316406 9.203125 36.855469 9.480469 36.5625 9.910156 L 21.175781 32.625 L 14.035156 25.542969 C 13.296875 24.804688 12.132813 24.804688 11.386719 25.542969 L 8.679688 28.253906 C 7.933594 28.992188 7.933594 30.222656 8.679688 30.960938 L 19.574219 41.855469 C 20.1875 42.464844 21.175781 42.902344 22.035156 42.902344 C 22.898438 42.902344 23.75 42.363281 24.3125 41.546875 L 42.839844 14.21875 C 43.433594 13.355469 43.21875 12.15625 42.347656 11.570313 L 39.210938 9.417969 C 38.777344 9.125 38.269531 9.015625 37.792969 9.109375 Z "/>
        </g>
        </svg>
        `,
    },
};

export { components };