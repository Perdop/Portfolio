const estadoSalvoEn = localStorage.getItem("en");

var en = false;
en = estadoSalvoEn === "true";
const language = document.getElementById("language");
const pedroResumo = document.getElementById("pedroResumo");
const pedroAbout = document.getElementById("about");
const bladeProjetos = document.getElementById("bladeProjetos");
const projectsTittle = document.getElementById("projectsTittle");
const ecoexploraTxt = document.getElementById("ecoexploraTxt");
const aboutTittle = document.getElementById("aboutTittle");
const aboutTxt1 = document.getElementById("aboutTxt1");
const aboutTxt2 = document.getElementById("aboutTxt2");
const aboutTxt3 = document.getElementById("aboutTxt3");
const aboutTxt4 = document.getElementById("aboutTxt4");
const menuProjetos = document.getElementById("menuProjetos");
const menuSobreMim = document.getElementById("menuSobreMim");
const menuSociais = document.getElementById("menuSociais");


updateLanguage()
language.addEventListener("click", updateLanguage);


function updateLanguage(){

    if (!en){
        en = true

        language.innerHTML = "EN";
        pedroResumo.innerHTML = "Sou um desenvolvedor de software com conhecimentos nas áreas de front-end e back-end.";
        pedroAbout.innerHTML = "-> Sobre mim";
        bladeProjetos.innerHTML = "Projetos";
        projectsTittle.innerHTML = "Projetos";
        menuProjetos.innerHTML = "Projetos";
        menuSobreMim.innerHTML = "Sobre mim";
        menuSociais.innerHTML = "Redes Sociais";
        ecoexploraTxt.innerHTML = "O Ecoexplora é um aplicativo que monitora animais extintos do Rio Grande do Sul, oferecendo informações sobre cada espécie e promovendo a conservação ambiental.";
        aboutTittle.innerHTML = "Sobre mim";
        aboutTxt1.innerHTML = "Olá, sou Pedro, uso o nome Perdop nas redes sociais.";
        aboutTxt2.innerHTML = "Comecei a estudar programação no Ensino Médio, formando-me em um curso técnico de desenvolvimento de software.";
        aboutTxt3.innerHTML = "Desde o início, gostei de programar, e me interessei especialmente por responsividade e cross-plataforma enquento aprendia desenvolvimento web, algo que valorizo ainda em qualquer linguagem.";
        aboutTxt4.innerHTML = "Depois disso, quis me aprofundar mais na área. Explorei diversas possibilidades no front-end e back-end, me identificando mais com este último. Atualmente, trabalho como freelancer e desenvolvo projetos pessoais, que posto atualizações nas midias e adiciono ao meu portfólio conforme o desenvolvimento.";
        
    } else if (en){
        en = false;
        
        language.innerHTML = "BR";
        pedroResumo.innerHTML = "I am a software developer with knowledge in front-end and back-end areas.";
        pedroAbout.innerHTML = "-> About me";
        bladeProjetos.innerHTML = "Projects";
        projectsTittle.innerHTML = "Projects";
        menuProjetos.innerHTML = "Projects";
        menuSobreMim.innerHTML = "About me";
        menuSociais.innerHTML = "Social Media";
        ecoexploraTxt.innerHTML = "Ecoexplora is an application that monitors extinct animals from Rio Grande do Sul, providing information about each species and promoting environmental conservation.";
        aboutTittle.innerHTML = "About me";
        aboutTxt1.innerHTML = "Hello, I am Pedro, I use the name Perdop on social media.";
        aboutTxt2.innerHTML = "I started studying programming in high school, completing a technical course in software development.";
        aboutTxt3.innerHTML = "From the beginning, I have enjoyed programming, with a particular interest in responsiveness and cross-platform development as I learned web development, something I still value in any language";
        aboutTxt4.innerHTML = "After that, I wanted to delve deeper into the field. I explored various possibilities in both front-end and back-end development, identifying more with the latter. Currently, I work as a freelancer and develop personal projects, sharing updates on social media and adding them to my portfolio as they progress.";
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
const Toolbar = document.getElementById("menuBar");
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