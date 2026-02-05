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
        objTxt.innerHTML = "O objetivo do Velo é tornar viagens e caronas mais seguras, confortáveis e confiáveis, promovendo conexões entre pessoas do mesmo gênero e respeitando preferências antes da viagem. A plataforma busca aumentar a sensação de segurança, autonomia e confiança dos usuários, incentivando o uso recorrente e uma experiência mais humana no compartilhamento de caronas.";
        tecTit.innerHTML = "Tecnologias";
        tecTxt.innerHTML = "O Velo foi desenvolvido utilizando TypeScript como linguagem principal, com NestJS no backend e uma API REST segura estruturada com JWT, Passport e TypeORM, enquanto o frontend foi construído em React, responsável pelo consumo da API e pela interface do usuário, garantindo uma base moderna, segura e escalável.";
        funcTit.innerHTML = "Funcionalidades";
        funcTxt.innerHTML = "O Velo oferece funcionalidades como criação e gerenciamento de viagens e caronas, match entre usuários com base na identidade de gênero, definição e respeito às preferências antes da viagem, autenticação segura, perfis de usuário e uma experiência focada em conforto, segurança e confiança durante todo o processo de uso da plataforma.";
        testApp.innerHTML = "Testar App";
        devTit.innerHTML = "Desenvolvimento";
        expo.innerHTML = "Exposição";
    } else if (en){
        en = false;
        languageBtn.innerHTML = "BR";

        objTit.innerHTML = "Objective";
        objTxt.innerHTML = "The goal of Velo is to make travel and ride-sharing safer, more comfortable, and more reliable by promoting connections between people of the same gender and respecting preferences before each trip. The platform aims to increase users’ sense of safety, autonomy, and trust, encouraging recurring use and a more human ride-sharing experience.";
        tecTit.innerHTML = "Technologies";
        tecTxt.innerHTML = "Velo was developed using TypeScript as the main language, with NestJS on the backend and a secure REST API structured with JWT, Passport, and TypeORM. The frontend was built with React, responsible for consuming the API and delivering the user interface, ensuring a modern, secure, and scalable foundation.";
        funcTit.innerHTML = "Features";
        funcTxt.innerHTML = "Velo offers features such as creation and management of trips and rides, user matching based on gender identity, definition and respect of preferences before the trip, secure authentication, user profiles, and an experience focused on comfort, safety, and trust throughout the entire platform usage process.";
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