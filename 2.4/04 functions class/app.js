class App{
    runApplication(){
        console.log("Hello World");
    }
    newclassfunction(){
        console.log("hello world in de nieuwClassFunction");
    }
    anotherFunctionWithArguments(aArgument){
        console.log("kom maar met je argument");
        console.log("hier:");
        console.log(aArgument);
    }
}
let app = new App();
app.runApplication();
app.newclassfunction();
app.anotherFunctionWithArguments("mijn argument is iets met draken");


