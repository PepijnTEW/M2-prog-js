class App{
    runApplication(){
        console.log("Hello World");
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");
    
        function tekenCirkel(x,y){
            g.fillStyle = "red";
            g.beginPath();
            g.arc(x,y,20,0,Math.PI*2);
            g.stroke();
            g.fill();
            g.closePath();
        }
        console.log(canvas);
        for (let i = 0; i < 200; i++) {
            tekenCirkel(Math.random()*500,Math.random()*500)
        }
    }
}
let app = new App();
app.runApplication();

