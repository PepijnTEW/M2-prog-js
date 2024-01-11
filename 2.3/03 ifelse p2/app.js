class App{
    runApplication(){
        console.log("Hello World");
        let title = document.getElementById("newstitle");
        console.log(title);

        let randomGetal = Math.random();
        console.log(randomGetal)
        if(randomGetal < 0.2){
            title.style.backgroundColor = "#ff0000";
        }else if(randomGetal > 0.75){
            title.style.backgroundColor = "#ffa07a";
        }else if(randomGetal > 0.6){
            title.style.backgroundColor = "#ff6347 ";
        }else{
            title.style.backgroundColor = "#fa8072";
        }

        let newsitem1 = document.getElementsByClassName("gamenews")[0];
        if(randomGetal < 0.2){
            newsitem1.style.backgroundColor = "#0000ff";
        }else if(randomGetal > 0.75){
            newsitem1.style.backgroundColor = "#6495ed";
        }else if(randomGetal > 0.6){
            newsitem1.style.backgroundColor = "#1e90ff";
        }else{
            newsitem1.style.backgroundColor = "#87cefa";
        }

        let newsitem2 = document.getElementsByClassName("gamenews")[1];
        if(randomGetal < 0.2){
            newsitem2.style.backgroundColor = "#008000";
        }else if(randomGetal > 0.75){
            newsitem2.style.backgroundColor = "#00ff7f";
        }else if(randomGetal > 0.6){
            newsitem2.style.backgroundColor = "#8fbc8f";
        }else{
            newsitem2.style.backgroundColor = "#3cb371";
        }
    }
}
let app = new App();
app.runApplication();

