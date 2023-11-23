class App{
    runApplication(){
        console.log("Hello World");
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d");
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(300,100);
        g.lineTo(200,300);
        g.lineTo(600,400);
        g.lineTo(700,200);
        g.lineTo(300,100);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "lightgrey";
        g.beginPath();
        g.moveTo(200,300);
        g.lineTo(200,500);
        g.lineTo(600,600);
        g.lineTo(600,400);
        g.lineTo(200,300);
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(600,400);
        g.lineTo(600,600);
        g.lineTo(800,500);
        g.lineTo(800,300);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();

        g.beginPath();
        g.lineTo(800,300);
        g.lineTo(700,200);
        g.lineTo(600,400);
        g.closePath();
        g.stroke();
        g.fill();
        
        g.fillStyle = "lightblue";
        g.beginPath();
        g.moveTo(725,250);
        g.lineTo(725,300);
        g.lineTo(700,315);
        g.lineTo(700,265);
        g.closePath();
        g.stroke();
        g.fill();


        console.log(canvas);


    }
}
let app = new App();
app.runApplication();

