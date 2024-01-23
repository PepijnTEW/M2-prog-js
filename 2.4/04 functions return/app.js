function heeftEenResultaat(){
    let resultaat = 1;
    return resultaat;
}
function ax2bcWiskunde(x,a,b,c){
    let y = (a*(x*x)) + (b*x)+c;
    return y
}
function mathLog(u,h,l){
    let logY = Math.log(l) + h + Math.pow(u,2);
    return logY
}

let y1 = ax2bcWiskunde(9,3,4,89);
console.log(y1);
let y2 = ax2bcWiskunde(3,6,5,45);
console.log(y2)
let y3 = ax2bcWiskunde(7,1,2,13);
console.log(y3)
let y4 = mathLog(9,8,15);
console.log(y4)

let hetResultaat = heeftEenResultaat();
console.log(hetResultaat);
console.log(heeftEenResultaat());

class App{
    runApplication(){
        console.log("Hello World")
    }
}
let app = new App();
app.runApplication();

