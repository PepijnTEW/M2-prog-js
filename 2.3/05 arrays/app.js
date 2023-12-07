class App{
    runApplication(){
        console.log("Hello World");
        let array=["owen","james","nvidia"];
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

