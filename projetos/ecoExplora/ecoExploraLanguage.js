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
        objTxt.innerHTML = "O Ecoexplora monitora animais extintos no Rio Grande do Sul e educa os usuários sobre a biodiversidade local. O app fornece informações detalhadas sobre cada espécie, ajudando na conscientização ambiental e na preservação da fauna.";
        tecTit.innerHTML = "Tecnologias";
        tecTxt.innerHTML = "No back-end, emprega Spring Boot e MySQL, garantindo uma API eficiente, hospedada na Render. O front-end é desenvolvido  no Android Studio, utilizando Java para uma experiência nativa e otimizada.";
        funcTit.innerHTML = "Funcionalidades";
        funcTxt.innerHTML = "O Ecoexplora oferece diversas funcionalidades para explorar e monitorar animais extintos e ameaçados no Rio Grande do Sul. Os usuários podem acessar um catálogo de espécies com informações detalhadas, imagens e status de conservação. Além disso, o app permite o registro de avistamentos, contribuindo para a atualização de dados e a conscientização ambiental.";
        testApp.innerHTML = "Testar App";
        devTit.innerHTML = "Desenvolvimento";
        expo.innerHTML = "Exposição";
    } else if (en){
        en = false;
        objTit.innerHTML = "Objective";
        languageBtn.innerHTML = "BR";
        objTxt.innerHTML = "Ecoexplora monitors extinct animals in Rio Grande do Sul and educates users about local biodiversity. The app provides detailed information on each species, promoting environmental awareness and wildlife conservation.";
        tecTit.innerHTML = "Technologies";
        tecTxt.innerHTML = "In the back end, it uses Spring Boot and MySQL, ensuring an efficient API, hosted on Render. The front end is developed in Android Studio using Java for a native and optimized experience.";
        funcTit.innerHTML = "Features";
        funcTxt.innerHTML = "Ecoexplora offers various features to explore and track extinct and endangered animals in Rio Grande do Sul. Users can access a species catalog with detailed information, images, and conservation status. Additionally, the app allows sighting reports, contributing to data updates and environmental awareness.";
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