class App{
    runApplication(){
        console.log("Hello World");
        let canvas = document.getElementById("canvasID");
        let g = canvas.getContext("2d"); 
        this.tekenhuis(g,150,70)
        this.tekenhuis(g,130,500)
        this.tekenhuis(g,300,300)
        this.tekenKerstBoom(g,200,200,10)
    }
    tekenhuis(g,x,y){
        g.fillStyle = "red";
        g.beginPath();
        g.moveTo(30+x,10+y);
        g.lineTo(20+x,30+y);
        g.lineTo(60+x,40+y);
        g.lineTo(70+x,20+y);
        g.lineTo(30+x,10+y);
        g.closePath();
        g.stroke();
        g.fill();


        g.fillStyle = "lightgrey";
        g.beginPath();
        g.moveTo(20+x,30+y);
        g.lineTo(20+x,50+y);
        g.lineTo(60+x,60+y);
        g.lineTo(60+x,40+y);
        g.lineTo(20+x,30+y);
        g.closePath();
        g.stroke();
        g.fill();


        g.fillStyle = "grey";
        g.beginPath();
        g.moveTo(60+x,40+y);
        g.lineTo(60+x,60+y);
        g.lineTo(80+x,50+y);
        g.lineTo(80+x,30+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();


        g.beginPath();
        g.lineTo(80+x,30+y);
        g.lineTo(70+x,20+y);
        g.lineTo(60+x,40+y);
        g.closePath();
        g.stroke();
        g.fill();
        

        g.fillStyle = "lightblue";
        g.beginPath();
        g.moveTo(72.5+x,25+y);
        g.lineTo(72.5+x,30+y);
        g.lineTo(70+x,31.5+y);
        g.lineTo(70+x,26.5+y);
        g.closePath();
        g.stroke();
        g.fill();
    }
    tekenKerstBoom(g,x,y,L){
        g.fillStyle = "green";
        g.beginPath();
        g.moveTo(x,y);
        g.lineTo(-30+x,100+y)
        g.lineTo(30+x,100+y)
        g.lineTo(30+x,100+y)
        g.closePath();
        g.stroke();
        g.fill();

        g.fillStyle = "brown";
        g.beginPath();
        g.lineTo(-10+x,100+y)
        g.lineTo(10+x,100+y)
        g.lineTo(10+x,130+y)
        g.lineTo(-10+x,130+y)
        g.closePath();
        g.stroke();
        g.fill();

        let ox = 0;
        let dir = 1;

        for (let i = 0; i < L; i++) {
            g.fillStyle = "yellow";
            g.beginPath();
            g.arc(1+x+ox,30+y+(7*i),4,0,2*Math.PI);
            g.stroke();
            g.fill();
            g.closePath();
            ox+=dir*11
            if(Math.abs(ox)>1){
                dir=-dir
            }
        }
        g.fillStyle = "#c0c0c0";
        g.beginPath();
        g.moveTo(x,y);
        g.lineTo(x,-20+y)
        g.lineTo(-3+x,y)
        g.lineTo(3+x,y)
        g.closePath();
        g.stroke();
        g.fill();

    }
}
let app = new App();
app.runApplication();
console.log(canvas);

