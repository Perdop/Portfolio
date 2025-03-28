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
        objTxt.innerHTML = "O objetivo de Trash Walker é desafiar os jogadores a percorrer o maior caminho possível enquanto evitam obstáculos e coletam pontos. Além da diversão, o jogo busca conscientizar sobre sustentabilidade, mostrando os impactos do lixo no meio ambiente e incentivando ações ecológicas, como reciclagem e descarte correto de resíduos.";
        tecTit.innerHTML = "Tecnologias";
        tecTxt.innerHTML = "Trash Walker foi desenvolvido com HTML, CSS e JavaScript. A mecânica do jogo inclui movimentação, colisões e um sistema de pontuação crescente. O objetivo é incentivar a conscientização sobre sustentabilidade por meio de uma experiência interativa e educativa.";
        funcTit.innerHTML = "Funcionalidades";
        funcTxt.innerHTML = "Trash Walker possui mecânicas como movimentação dinâmica, sistema de pulo e colisão, além de mudança de cenário conforme a pontuação aumenta. O jogo desafia os jogadores a coletar lixo e evitar obstáculos, incentivando práticas sustentáveis. A pontuação crescente desbloqueia novos desafios, tornando a experiência envolvente e educativa.";
        testApp.innerHTML = "Testar App";
        devTit.innerHTML = "Desenvolvimento";
        expo.innerHTML = "Exposição";
    } else if (en){
        en = false;
        languageBtn.innerHTML = "BR";

        objTit.innerHTML = "Objective";
        objTxt.innerHTML = "The goal of Trash Walker is to challenge players to travel the longest distance possible while avoiding obstacles and collecting points. Beyond fun, the game aims to raise awareness about sustainability, highlighting the impact of waste on the environment and encouraging eco-friendly actions like recycling and proper waste disposal.";
        tecTit.innerHTML = "Technologies";
        tecTxt.innerHTML = "Trash Walker was built using HTML, CSS, and JavaScript. The game mechanics include movement, collisions, and a growing score system. The goal is to promote sustainability awareness through an interactive and educational experience.";
        funcTit.innerHTML = "Features";
        funcTxt.innerHTML = "Trash Walker features mechanics like dynamic movement, jumping, and collision detection, along with background changes as the score increases. Players must collect trash and avoid obstacles, promoting sustainable habits. The increasing score unlocks new challenges, making the experience engaging and educational.";
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