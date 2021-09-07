window.LIC = {


    fm:{
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
           return window.himalaya.parse(htmlCode)
        },
        toHtml(licCode){
            return window.himalaya.stringify(licCode)
        }
    }


};




