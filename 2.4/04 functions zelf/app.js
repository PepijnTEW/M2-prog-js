class App{
    runApplication(){
        console.log("Hello World");
    }
    marioFunction(){
        console.log("MARIO!!");
    }
    screamFunction(){
        let s = "BWAHAHA!!!";
        return s;
    }
    getalFunction(a,b){
        let g = a+b;
        return g;
    }
    noobFunction(i,d){
        console.log(i,d);
    }
}
let app = new App();
app.runApplication();
app.marioFunction();
let a1 = app.screamFunction();
console.log(a1);
let a2 = app.getalFunction(5,8);
console.log(a2);
app.noobFunction("noob","hallo");



