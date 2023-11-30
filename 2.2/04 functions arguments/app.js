function argumentsAreHandy(shoutout){
    console.log("do you want to give a shoutout?");
    console.log(shoutout);
}
function superMooieGlobalFunction(){
    console.log("ik ben global");
    console.log("dus je mag mij overal aanroepen");
}
function aanroepVoorbeeld(){

}

aanroepVoorbeeld();
superMooieGlobalFunction();
argumentsAreHandy("OWEN");
argumentsAreHandy("jesus is king");
argumentsAreHandy("James bond");

class App{
    runApplication(){
        console.log("Hello World")
    }
}
let app = new App();
app.runApplication();

