class App{
    runApplication(){
        console.log("Hello World");
    }
}




class Greet{
    constructor()
    {
        this.greeting = "Greetings!";
    }

    showGreetings()
    {
        console.log("Greetings van binnnen " +this.greeting);
    }
}
let greet = new Greet();



class ByeBye{
    constructor()
    {
        this.byebye = "Bye Bye!"
    }

    showBye()
    {
        console.log("Bye Bye's van binnnen " +this.byebye);
    }
}
let bye = new ByeBye();



console.log("greetings van buiten " +greet.greeting);
greet.showGreetings();

console.log("Bye Bye's van buiten " +bye.ByeBye);
bye.showBye();
let app = new App();
app.runApplication();
