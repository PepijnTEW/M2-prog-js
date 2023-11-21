class App{
    runApplication(){
        let appNaam = "Pepijn's App";
        let versieNummer = 0.1;
        let versieDatum = "11/21/2023";
        let autheur = "Pepijn te Winkel";
        let copyright = "Pepijn.co";
        let distributeur = "Pepijn.sons";
        let darkmode = false;
        console.log("hello world!");
        console.log("appNaam: "+appNaam);
        console.log("versieNummer: "+versieNummer);
        console.log("versieNummer: "+versieDatum);
        console.log("autheur: "+autheur);
        console.log("copyright: "+copyright);
        console.log("distributeur: "+distributeur);
        console.log("darkmode: "+darkmode);
    }
}
let app = new App();
app.runApplication();