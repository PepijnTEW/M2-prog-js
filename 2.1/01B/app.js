class App{
    runApplication(){
        this.greeting = "Starting up";
        this.appNaam = "Pepijn's App";
        this.versieNummer = 0.1;
        this.versieDatum = "11/21/2023";
        this.autheur = "Pepijn te Winkel";
        this.copyright = "Pepijn.co";
        this.distributeur = "Pepijn.sons";
        this.darkmode = false;
    }
}
let app = new App();
app.runApplication();

console.log(app.greeting);
console.log("appNaam: "+app.appNaam);
console.log("versieNummer: "+app.versieNummer);
console.log("versieDatum: "+app.versieDatum);
console.log("autheur: "+app.autheur);
console.log("copyright: "+app.copyright);
console.log("distributeur: "+app.distributeur);
console.log("darkmode: "+app.darkmode);