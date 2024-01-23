class App{
    runApplication(){
        console.log("Hello World");
        let uiButton = document.getElementById("button1");
        let localeFunction = function (e){
            console.log("click!");
        }
        uiButton.addEventListener("click",localeFunction);
    }
}
let app = new App();
app.runApplication();
