const estadoSalvoEn = localStorage.getItem("en");

var en = false;
en = estadoSalvoEn === "true";
const languageBtn = document.getElementById("languageBtn");
const objTit = document.getElementById("objTit");
const objTxt = document.getElementById("objTxt");
const tecTit = document.getElementById("tecTit");
const tecTxt = document.getElementById("tecTxt");
const funcTit = document.getElementById("funcTit");
const funcTxt = document.getElementById("funcTxt");
const testApp = document.getElementById("testApp");
const devTit = document.getElementById("devTit");
const expo = document.getElementById("expo");
const aboutTxt4 = document.getElementById("aboutTxt4");

updateLanguage()
languageBtn.addEventListener("click", updateLanguage);


function updateLanguage(){

    if (!en){
        en = true

        languageBtn.innerHTML = "EN";
        objTit.innerHTML = "Objetivo";
        objTxt.innerHTML = "O objetivo do Path Educ é facilitar o acesso à orientação educacional e profissional, ajudando estudantes a identificarem caminhos de estudo e carreira de forma clara, organizada e acessível, apoiando decisões mais conscientes sobre seu desenvolvimento acadêmico e futuro profissional.";
        tecTit.innerHTML = "Tecnologias";
        tecTxt.innerHTML = "O Path Educ foi desenvolvido utilizando TypeScript como linguagem principal, com NestJS no backend e uma API REST estruturada com TypeORM, enquanto o frontend foi construído em React, responsável pelo consumo da API e pela interface do usuário, garantindo uma base moderna, escalável e bem organizada.";
        funcTit.innerHTML = "Funcionalidades";
        funcTxt.innerHTML = "O Path Educ oferece funcionalidades como orientação educacional e profissional, organização de informações sobre cursos e áreas de atuação, visualização de possíveis caminhos de estudo e carreira, acesso a conteúdos estruturados para tomada de decisão e uma experiência simples e intuitiva voltada ao apoio no planejamento acadêmico e profissional.";
        testApp.innerHTML = "Testar App";
        devTit.innerHTML = "Desenvolvimento";
        expo.innerHTML = "Exposição";
    } else if (en){
        en = false;
        languageBtn.innerHTML = "BR";

        objTit.innerHTML = "Objective";
        objTxt.innerHTML = "The goal of Path Educ is to facilitate access to educational and career guidance, helping students identify study and career paths in a clear, organized, and accessible way, supporting more informed decisions about their academic development and professional future.";
        tecTit.innerHTML = "Technologies";
        tecTxt.innerHTML = "Path Educ was developed using TypeScript as the main language, with NestJS on the backend and a REST API structured with TypeORM, while the frontend was built with React, responsible for consuming the API and delivering the user interface, ensuring a modern, scalable, and well-organized foundation.";
        funcTit.innerHTML = "Features";
        funcTxt.innerHTML = "Path Educ offers features such as educational and career guidance, organization of information about courses and fields of study, visualization of possible study and career paths, access to structured content to support decision-making, and a simple, intuitive experience focused on academic and professional planning.";
        testApp.innerHTML = "Test App";
        devTit.innerHTML = "Desenvolviment";
        expo.innerHTML = "Exposition";
    }
}

const enCheck = document.getElementById("enCheck")
document.addEventListener("DOMContentLoaded", function () {

    // Obtém o estado salvo no LocalStorage
    const estadoSalvoEn = localStorage.getItem("en");
 
    // Define o estado inicial da checkbox
    enCheck.checked = (estadoSalvoEn === "true");

});
languageBtn.addEventListener("click", () => {
    enCheck.checked = !enCheck.checked;
    localStorage.setItem("en", enCheck.checked);
    console.log("sim", enCheck.checked);
});