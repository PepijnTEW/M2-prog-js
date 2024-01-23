

class Dino{
    constructor(naam,vleeseter,leeftijd){
        this.naam = naam;
        this.vleeseter = vleeseter;
        this.leeftijd = leeftijd;
        this.leeft = true;
        this.honger = true;
    }
    eatFood(foodToEat){
        foodToEat.leeft = false;
        this.honger = false;
        console.log("ik ben een " + this.naam);
        console.log("mijn honger: " + this.honger)
    }
}

class App{
    runApplication(){
        console.log("Hello World")
        let dino = new Dino("T-Rex",true,20);
        let plantenEter = new Dino("Triceratops",false,20);
        console.log(dino);
        console.log(plantenEter);

        dino.eatFood(plantenEter);
        console.log("leef " + plantenEter.naam + "? "+ plantenEter.leeft);
    }
}
let app = new App();
app.runApplication();