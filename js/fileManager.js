import'../libs/jszip.min.js'

 

window.LIC = {


    fm:{
        generateProject(){
            // var mainFolder = new JSZip();
            // mainFolder.file("README.txt", "Este projecto foi gerado por LIC");
            // var zip = mainFolder.folder("app");

            var source = this.toLic(document.getElementById("lic-line").innerHTML);
            var layers = this.toLic(document.getElementById("l-layers").innerHTML);
            var styles = window.styles;

            // zip.file("source.licsc", JSON.stringify(source))
            // zip.file("layers.licls", JSON.stringify(layers))
            // zip.file("styles.licss", JSON.stringify(styles))

            var projectFile = {
                source:source,
                layers:layers,
                styles:styles,
            }
            var blob = new Blob([JSON.stringify(projectFile)], {type: "text/plain;charset=utf-8"});
            saveAs(blob, `Lic-Project.lic`);

            // mainFolder.generateAsync({type:"blob"}).then(function(content) {
            //       // see FileSaver.js
            //       saveAs(content, `Lic-Project.lic`);
            // });
        },
        openGeneratedProject (event) {
            var input = event.target;
            var reader = new FileReader();
            var self = this;
            reader.onload = function(){
              var code =  JSON.parse(reader.result);

            //   var source = this.toHtml(code["source"]);
            //   var layers = this.toHtml(code["layers"]);

              document.getElementById("lic-line").innerHTML = self.toHtml(code["source"]);
              document.getElementById("l-layers").innerHTML = self.toHtml(code["layers"]);

              
              window.styles = code["styles"];
              
             // console.log(code);
            };
            reader.readAsText(input.files[0]);
          },
        saveProject(){
            this.saveFile("last.lic",document.getElementById("lic-line").innerHTML);
            this.saveFile("last-hierarquia.lic",document.getElementById("l-layers").innerHTML);
        },
        openProject(){
            this.openFile("last.lic",(code)=>{
                document.getElementById("lic-line").innerHTML = code;
            })
            this.openFile("last-hierarquia.lic",(code)=>{
                document.getElementById("l-layers").innerHTML = code;
            })
        },
        saveFile(name,code, _success,_error){
           try {
                var licCode = this.toLic(code)
                localStorage.setItem(name||Date,JSON.stringify(licCode));
                if(_success)_success();
           } catch (error) {
                if(_error)_error(error);
           }
        },
        openFile(name, _success,_error){
            try {
                var licCode = localStorage.getItem(name);
                var html = this.toHtml(JSON.parse(licCode));
                if(_success)_success(html);
            } catch (error) {
                if(_error)_error(error);
            }
        },
        clearLast(){
            localStorage.clear();
        },
        
        /**
         *  Função para conversão de html para Lic
         * @date 2021-09-04
         * @param {HTMLElement} htmlCode
         * @returns {object}
         */
        toLic(htmlCode){
            var fcode = window.himalaya.parse(htmlCode);
           return fcode;
        },
        toHtml(licCode){
            return window.himalaya.stringify(licCode)
        }
    }


};




