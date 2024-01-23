class App{
    runApplication(){
        console.log("Hello World");
        let array=["owen","james","nvidia"];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i +": "+element);
        }
        array.push("bob dylan","prince")
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i +": "+element);
        }
        let indexToRemove = array.indexOf("bob dylan");
        array.splice(indexToRemove,1,"big bad voodoo daddy");
        array.splice(indexToRemove,2,"megadeth");

        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            console.log(i +": "+element);
        }
        let cijfers=[4,6,2,7];
        console.log(cijfers)
        for (let i = 0; i < cijfers.length; i++) {
            const element = cijfers[i];
            console.log(element)
        }

    }
}
let app = new App();
app.runApplication();

