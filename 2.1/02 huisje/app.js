class App{
    runApplication(){
        console.log("Hello World");
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(30,10);
        g.lineTo(20,30);
        g.lineTo(60,40);
        g.lineTo(70,20);
        g.lineTo(30,10);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "lightgrey";
        g.beginPath();
        g.moveTo(20,30);
        g.lineTo(20,50);
        g.lineTo(60,60);
        g.lineTo(60,40);
        g.lineTo(20,30);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(60,40);
        g.lineTo(60,60);
        g.lineTo(80,50);
        g.lineTo(80,30);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.lineTo(80,30);
        g.lineTo(70,20);
        g.lineTo(60,40);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle = "lightblue";
        g.beginPath();
        g.moveTo(72.5,25);
        g.lineTo(72.5,30);
        g.lineTo(70,31.5);
        g.lineTo(70,26.5);
        g.closePath();
        g.stroke();
        g.fill();


        console.log(canvas);


    }
}
let app = new App();
app.runApplication();

