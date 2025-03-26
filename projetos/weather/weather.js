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
        objTxt.innerHTML = "O aplicativo Weather tem como objetivo fornecer previsões do tempo em tempo real, utilizando a API da OpenWeather. Os usuários podem digitar o nome de uma cidade para ver instantaneamente a temperatura atual e as condições climáticas. O app ajuda os usuários a planejar suas atividades com base em informações meteorológicas precisas.";
        tecTit.innerHTML = "Tecnologias";
        tecTxt.innerHTML = "O aplicativo Weather é desenvolvido com HTML, CSS e JavaScript. Ele utiliza a API da OpenWeather para buscar dados meteorológicos em tempo real. O app usa JSON para troca de dados e cria uma interface amigável com HTML e CSS, garantindo um desempenho eficiente.";
        funcTit.innerHTML = "Funcionalidades";
        funcTxt.innerHTML = "O aplicativo Weather oferece várias funcionalidades principais para melhorar a experiência do usuário. Os usuários podem digitar o nome de uma cidade para receber atualizações meteorológicas em tempo real, incluindo temperatura atual e condições climáticas. O app também possui uma interface simples e intuitiva, permitindo fácil navegação. Além disso, oferece um design responsivo, garantindo que o aplicativo funcione bem em diferentes dispositivos e tamanhos de tela.";
        testApp.innerHTML = "Testar App";
        devTit.innerHTML = "Desenvolvimento";
        expo.innerHTML = "Exposição";
    } else if (en){
        en = false;
        objTit.innerHTML = "Objective";
        languageBtn.innerHTML = "BR";
        objTxt.innerHTML = "The Weather app aims to provide real-time weather forecasts using the OpenWeather API. Users can enter a city name to instantly view the current temperature and weather conditions. The app helps users plan their activities based on accurate weather information.";
        tecTit.innerHTML = "Technologies";
        tecTxt.innerHTML = "The Weather app is developed using HTML, CSS, and JavaScript. It utilizes the OpenWeather API to fetch real-time weather data. The app employs JSON for data exchange and creates a user-friendly interface with HTML and CSS, ensuring efficient performance.";
        funcTit.innerHTML = "Features";
        funcTxt.innerHTML = "The Weather app offers several key functionalities to enhance the user experience. Users can enter a city name to receive real-time weather updates, including current temperature and weather conditions. The app also features a simple and intuitive interface, allowing for easy navigation. Additionally, it provides a responsive design, ensuring that the app functions well on different devices and screen sizes.";
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