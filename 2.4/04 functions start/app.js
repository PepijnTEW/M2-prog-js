function superMooieGlobalFunction(){
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}
function aanroepVoorbeeld(){

}
aanroepVoorbeeld();
superMooieGlobalFunction();
superMooieGlobalFunction();







class App{
    runApplication(){
        console.log("Hello World")
        superMooieGlobalFunction();
    }
}
let app = new App();
app.runApplication();

