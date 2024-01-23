class App{
    runApplication(){
        console.log("Hello World")
        let appNaam = "appNaam: Pepijn's App";
        let versieNummer = "versieNummer"+ 0.3;
        let versieDatum = "versieDatum: 11/23/2023";
        let autheur = "autheur: Pepijn te Winkel";
        let copyright = "copyright: Pepijn.co";
        let distributeur = "distributeur: Pepijn.sons";
        let darkmode = "darkmode: "+ false;
        console.log(appNaam);
        console.log(versieNummer);
        console.log(versieDatum);
        console.log(autheur);
        console.log(copyright);
        console.log(distributeur);
        console.log(darkmode);
    }
}
let app = new App();
app.runApplication();