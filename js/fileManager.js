import '../libs/jszip.min.js'



window.LIC = {


    fm: {
        RUN() {
            //Gerando o css



            var w = window.open("", "Lic-Preview", "width=" + screen.width + " ,height=" + screen.height);

            var result = this.packProject();

            w.document.body.innerHTML = result.html + "\n\n" + " <style>\n\n" + result.css + "\n\n<style>";

            var css = "";
        },
        BUILD() {
            var code = this.packProject(true);
            //Convert blob to file and save on zip
            // JSZip v3.0.0 now supports blob as file content. zip.file("image.png", blob); will work.
            //Reference: https://github.com/Stuk/jszip/issues/246

            var mainFolder = new JSZip();
            mainFolder.file("README.md", "# LIC \nEste projecto foi gerado por LIC");
            var stylesFolder = mainFolder.folder("styles")
            stylesFolder.file("main.css", code.css)
            mainFolder.file("index.html", `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="./styles/main.css">
                <title>Awesome website generated by LIC</title>
            </head>
            <body>
            ${
                code.html
            }
            </body>
            </html>
            
            `);



            var assetsFolder = mainFolder.folder("Assets");
            var index = 0;
            code.files.forEach(file => {
                console.log("Encontrado:", file)

                assetsFolder.file(file.fileName, file.base64, { base64: true });


                index += 1;
            });




            mainFolder.generateAsync({ type: "blob" }).then(function(content) {

                saveAs(content, `Lic-Project.zip`);
            });
        },

        async blobFromText(text, _callback) {

            fetch(text)
                .then(res => res.blob()).then(_callback);

        },

        packProject(forProduction = false) {


            var medias = { xs: [], sm: [], md: [], lg: [], xl: [] }



            window.setLayouts(window.currentLayout);

            Object.keys(window.styles).forEach(el => {
                console.log(window.styles[el])
                Object.keys(medias).forEach(m => {
                    console.log(m)

                    if (window.styles[el][m])
                        medias[m].push(`
                    [l-layer="${el}"]{
                        ${
                            window.styles[el][m] 
                        }
                    }

                    `);
                });

            })

            var finalCss = `
            
               

                body, html{
                    padding:0px;
                    margin:0px;
                }

                *{
                    font-family:system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
                    
                }

                
                *::-webkit-scrollbar {
                    width: 9px;
                    height: 10px;
                }
                
                *::-webkit-scrollbar-track {
                    background: #eee; 
                    border-radius: 10px;
                }
                
                *::-webkit-scrollbar-thumb {
                    border-radius: 10px;
                    background: gray; 
                }


                ${medias["xs"]}

                @media (min-width:${window.breackpoints["sm"]}) {
                    
                    ${medias["sm"]}

                }

                @media (min-width:${window.breackpoints["md"]}) {
                    
                    ${medias["md"]}

                }

                @media (min-width:${window.breackpoints["lg"]}) {
                    
                    ${medias["lg"]}

                }

                @media (min-width:${window.breackpoints["xl"]}) {
                    
                    ${medias["xl"]}

                }

             

            `.replace(/^(?=\n)$|^\s*|\s*$|\n\n+/gm, "");

            finalCss = finalCss.replace(/}\n,+/gm, "}\n").split("[object Object]").join("");

            var finalHtml = $(".app").html().toString().replace(/(style=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gm, "");
            finalHtml = finalHtml.replace(/(onclick=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gm, "");
            finalHtml = finalHtml.replace(/(onmouseover=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gm, "");
            finalHtml = finalHtml.replace(/(ondblclick=")([a-zA-Z0-9:;\.\s\(\)\-\,]*)(")/gm, "");


            if (forProduction) {

                var finalFiles = [];
                var tmpFiles = finalHtml.match(/src\=[\"\']?([a-zA-Z0-9 \+\=\:\-\#\(\)\.\_\/\;\'\,]+)\;?[\"\']?/gim);

                if (!tmpFiles) {
                    tmpFiles = finalHtml.match(/data:.*?([a-zA-Z0-9 \+\=\:\-\#\(\)\.\_\/\;\'\,]+)\;?[\"\']?/gim);
                }

                if (tmpFiles) {
                    tmpFiles.forEach(file => {

                        var code = file.split('src="').join("");
                        var fileCode = code.split('"').join("");
                        console.log("Total:", tmpFiles.length)
                        console.log("Arquivo:", code)

                        if (fileCode) {
                            var fileName = (uuidv4() + "." + fileCode.split(";")[0].split("/")[1]).split("+xml").join("");

                            finalHtml = finalHtml.replace(fileCode, "./Assets/" + fileName);
                            finalCss = finalCss.split(fileCode).join("../Assets/" + fileName);
                            finalFiles.push({ base64: fileCode.split(',')[1], fileName: fileName });
                        }

                    });
                }

            }



            finalHtml = finalHtml.replace(/style=".*?"/gm, " ")

            return { html: finalHtml, css: finalCss, files: finalFiles }

        },

        generateProject() {
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
                source: source,
                layers: layers,
                styles: styles,
            }
            var blob = new Blob([JSON.stringify(projectFile)], { type: "text/plain;charset=utf-8" });
            saveAs(blob, `Lic-Project.lic`);

            // mainFolder.generateAsync({type:"blob"}).then(function(content) {
            //       // see FileSaver.js
            //       saveAs(content, `Lic-Project.lic`);
            // });
        },
        openGeneratedProject(event) {
            var self = this;
            if (event.target) {
                var input = event.target;
                var reader = new FileReader();

                reader.onload = function() {
                    var code = JSON.parse(reader.result);

                    //   var source = this.toHtml(code["source"]);
                    //   var layers = this.toHtml(code["layers"]);

                    document.getElementById("lic-line").innerHTML = self.toHtml(code["source"]);
                    document.getElementById("l-layers").innerHTML = self.toHtml(code["layers"]);


                    window.styles = code["styles"];

                    // console.log(code);
                };
                reader.readAsText(input.files[0]);
            } else {

                var code = JSON.parse(event);
                //   var source = this.toHtml(code["source"]);
                //   var layers = this.toHtml(code["layers"]);

                document.getElementById("lic-line").innerHTML = self.toHtml(code["source"]);
                document.getElementById("l-layers").innerHTML = self.toHtml(code["layers"]);


                window.styles = code["styles"];

            }

        },
        saveProject() {
            this.saveFile("last.lic", document.getElementById("lic-line").innerHTML);
            this.saveFile("last-hierarquia.lic", document.getElementById("l-layers").innerHTML);
        },
        openProject() {
            this.openFile("last.lic", (code) => {
                document.getElementById("lic-line").innerHTML = code;
            })
            this.openFile("last-hierarquia.lic", (code) => {
                document.getElementById("l-layers").innerHTML = code;
            })
        },
        saveFile(name, code, _success, _error) {
            try {
                var licCode = this.toLic(code)
                localStorage.setItem(name || Date, JSON.stringify(licCode));
                if (_success) _success();
            } catch (error) {
                if (_error) _error(error);
            }
        },
        openFile(name, _success, _error) {
            try {
                var licCode = localStorage.getItem(name);
                var html = this.toHtml(JSON.parse(licCode));
                if (_success) _success(html);
            } catch (error) {
                if (_error) _error(error);
            }
        },
        clearLast() {
            localStorage.clear();
        },

        /**
         *  Função para conversão de html para Lic
         * @date 2021-09-04
         * @param {HTMLElement} htmlCode
         * @returns {object}
         */
        toLic(htmlCode) {
            var fcode = window.himalaya.parse(htmlCode);
            return fcode;
        },
        toHtml(licCode) {
            return window.himalaya.stringify(licCode)
        }
    },

    class: {

        classes: {},

            addclass(tipo, classe, valor) {
                if (this.classes[classe] == null)
                    this.classes[classe] = {};
                this.classes[classe][tipo] = valor;
                console.log("adicionado", this);
            }
    },

    elementClasses: [

    ]



};