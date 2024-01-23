<<<<<<< HEAD
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
            let para = document.createElement("h1");
            let node = document.createTextNode("It's a Me");
            para.appendChild(node)
            document.body.appendChild(para);
            para = document.createElement("p");
            node = document.createTextNode("Mario");
            para.appendChild(node)
            document.body.appendChild(para);
            let img = document.createElement("img");
            img.src = ('IMGS/mario.png');
            document.body.appendChild(img);
        });
    }
}
let app = new App();
app.runApplication();
=======
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
            let para = document.createElement("h1");
            let node = document.createTextNode("It's a Me");
            para.appendChild(node)
            document.body.appendChild(para);
            para = document.createElement("p");
            node = document.createTextNode("Mario");
            para.appendChild(node)
            document.body.appendChild(para);
            let img = document.createElement("img");
            img.src = ('IMGS/mario.png');
            document.body.appendChild(img);
        });
    }
}
let app = new App();
app.runApplication();
>>>>>>> 4ddeb1342adca9c845bfc10d3f6c76cd09b1bbcf
