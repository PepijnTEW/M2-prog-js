
class App{
    runApplication(){
        console.log("Hello World");
    }
}
let app = new App();

class Greet{
    constructor(){

    }
    showGreetings(){
        console.log("Greetings!")
    }
}
let greet = new Greet();

class ByeBye{
    constructor(){

    }
    showByeBye(){
        console.log("Bye Bye")
    }
}
let bye = new ByeBye();
greet.showGreetings();
bye.showByeBye();

greet.showGreetings();
bye.showByeBye();

greet.showGreetings();
bye.showByeBye();

app.runApplication();
