const estadoSalvoEn = localStorage.getItem("en");

var en = false;
en = estadoSalvoEn === "true";
const language = document.getElementById("language");
const pedroResumo = document.getElementById("pedroResumo");
const pedroAbout = document.getElementById("about");
const bladeProjetos = document.getElementById("bladeProjetos");
const projectsTittle = document.getElementById("projectsTittle");
const aboutTittle = document.getElementById("aboutTittle");
const aboutTxt1 = document.getElementById("aboutTxt1");
const aboutTxt2 = document.getElementById("aboutTxt2");
const aboutTxt3 = document.getElementById("aboutTxt3");
const aboutTxt4 = document.getElementById("aboutTxt4");
const menuProjetos = document.getElementById("menuProjetos");
const menuSobreMim = document.getElementById("menuSobreMim");
const menuSociais = document.getElementById("menuSociais");
const menuCurriculum = document.getElementById("menuCurriculum");
const menuResume = document.getElementById("menuResume");
const curriculum = document.getElementById("curriculum");
const resume = document.getElementById("resume");


const ecoexploraTxt = document.getElementById("ecoexploraTxt");
const weatherTxt = document.getElementById("weatherTxt");
const trashWalkerTxt = document.getElementById("trashWalkerTxt");

updateLanguage()
language.addEventListener("click", updateLanguage);


function updateLanguage(){

    if (!en){
        en = true

        language.innerHTML = "EN";
        pedroResumo.innerHTML = "Desenvolvedor de Software | Spring Boot | Java | NestJs | TypeScript | React | Android Studio";
        pedroAbout.innerHTML = "-> Sobre mim";
        bladeProjetos.innerHTML = "Projetos";
        projectsTittle.innerHTML = "Projetos";
        menuProjetos.innerHTML = "Projetos";
        menuSobreMim.innerHTML = "Sobre mim";
        menuSociais.innerHTML = "Redes Sociais";
        menuCurriculum.href = "https://1drv.ms/w/c/9ceb11e4fd63c48a/IQDgvH9UUmKoS6V2Tc2ooCkJAYv_sWtRYkT7VGPghu-rDlY?e=dPfWhb";
        curriculum.href = "https://1drv.ms/w/c/9ceb11e4fd63c48a/IQDgvH9UUmKoS6V2Tc2ooCkJAYv_sWtRYkT7VGPghu-rDlY?e=dPfWhb";
        aboutTittle.innerHTML = "Sobre mim";
        aboutTxt1.innerHTML = "";
        aboutTxt2.innerHTML = "";
        aboutTxt3.innerHTML = "Desenvolvedor de software com formação técnica em Sistemas para Internet e experiência profissional em ambientes críticos de TI. Atuo na construção de aplicações e sistemas utilizando Java, Spring Boot, TypeScript, NestJS, bancos de dados e APIs REST, aliando organização, responsabilidade e trabalho em equipe a uma postura autodidata e participativa em projetos, eventos e bootcamps.";
        aboutTxt4.innerHTML = "Gosto de programar, criar projetos e estudar novas tecnologias no tempo livre, pois vejo a tecnologia como uma forma de transformar ideias em soluções reais. Acredito em disciplina, constância e evolução contínua, valores que aplico tanto na vida pessoal quanto no meu crescimento como desenvolvedor.";

    } else if (en){
        en = false;
        
        language.innerHTML = "BR";
        pedroResumo.innerHTML = "Software Developer | Spring Boot | Java | NestJs | TypeScript | React | Android Studio";
        pedroAbout.innerHTML = "-> About me";
        bladeProjetos.innerHTML = "Projects";
        projectsTittle.innerHTML = "Projects";
        menuProjetos.innerHTML = "Projects";
        menuSobreMim.innerHTML = "About me";
        menuSociais.innerHTML = "Social Media";
        menuCurriculum.href = "https://1drv.ms/w/c/9ceb11e4fd63c48a/IQAUWuk5See9T6w7EmI7B8GWAQ6Z_EUWSzJqvN2s2GQmD1Q?e=fLYSJo";
        curriculum.href = "https://1drv.ms/w/c/9ceb11e4fd63c48a/IQAUWuk5See9T6w7EmI7B8GWAQ6Z_EUWSzJqvN2s2GQmD1Q?e=fLYSJo";
        aboutTittle.innerHTML = "About me";
        aboutTxt1.innerHTML = "";
        aboutTxt2.innerHTML = "";
        aboutTxt3.innerHTML = "Software developer with a technical degree in Internet Systems and professional experience in mission-critical IT environments. I work on building applications and systems using Java, Spring Boot, TypeScript, NestJS, databases, and REST APIs, combining organization, responsibility, and teamwork with a self-taught mindset and active participation in projects, events, and bootcamps.";
        aboutTxt4.innerHTML = "I enjoy programming, building projects, and studying new technologies in my free time, as I see technology as a way to turn ideas into real solutions. I believe in discipline, consistency, and continuous growth—values that I apply both in my personal life and in my development as a software developer.";
        
        ecoexploraTxt.innerHTML = "Ecoexplora is an application that monitors extinct animals from Rio Grande do Sul, providing information about each species and promoting environmental conservation.";
        weatherTxt.innerHTML = "Created to simplify the management of students and scholarships, enabling clear control of student status, quick identification of scholarship holders, and a simple, intuitive, and efficient experience for those who manage the information.";
        trashWalkerTxt.innerHTML = "A ride-sharing app that offers more autonomy and safety, with gender-based matching and respected preferences, ensuring comfort and trust on every trip.";
    }
}

// Light and Dark mode
const checkbox = document.getElementById("darkModeCheck");
const lightMode = document.getElementById("lightMode");

lightMode.addEventListener("click", () => {
    checkbox.checked = !checkbox.checked; // Alterna o estado do checkbox
});

// Toolbar
const checkboxTool = document.getElementById("menuBarCheck");
const Toolbar = document.getElementById("menuBarFix");
const Toolbar2 = document.getElementById("menuBarTool");
Toolbar.addEventListener("click", () => {
    checkboxTool.checked = !checkboxTool.checked; // Alterna o estado do checkbox
});
Toolbar2.addEventListener("click", () => {
    checkboxTool.checked = !checkboxTool.checked; // Alterna o estado do checkbox
});

// Local Storage
    // Theme
document.addEventListener("DOMContentLoaded", function () {
    // Obtém o estado salvo no LocalStorage
    const estadoSalvo = localStorage.getItem("darkModeEstado");

    // Define o estado inicial da checkbox
    checkbox.checked = (estadoSalvo === "true");

});
lightMode.addEventListener("click", () => {
    localStorage.setItem("darkModeEstado", checkbox.checked);
    console.log("Estado salvo ao clicar no botão:", checkbox.checked);
});


   // Language
   const enCheck = document.getElementById("enCheck")
document.addEventListener("DOMContentLoaded", function () {

    // Obtém o estado salvo no LocalStorage
    const estadoSalvoEn = localStorage.getItem("en");
 
    // Define o estado inicial da checkbox
    enCheck.checked = (estadoSalvoEn === "true");

});
language.addEventListener("click", () => {
    enCheck.checked = !enCheck.checked;
    localStorage.setItem("en", enCheck.checked);
    console.log("sim", enCheck.checked);
});
