class App{
    runApplication(){
        console.log("Hello World");
        let uiButton = document.getElementById("button1");
        uiButton.addEventListener("click",(e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new.");
            para.appendChild(node)
            document.body.appendChild(para);
        });
        let uiButton2 = document.getElementById("button2");
        uiButton2.addEventListener("click",(e)=>
        {
            const para = document.createElement("p");
            const node = document.createTextNode("this is new.");
            para.appendChild(node)
            document.body.appendChild(para);
        });
    }
}
let app = new App();
app.runApplication();
