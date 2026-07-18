/* ==========================================================
                    ELEMENTOS
========================================================== */

const inicio = document.getElementById("inicio");

const botaoInicio = document.getElementById("btnInicio");

const envelopeSection = document.getElementById("envelope-section");

const envelope = document.getElementById("envelope");

const cartaSection = document.getElementById("carta-section");

const textoCarta = document.getElementById("textoCarta");

const botaoFotos = document.getElementById("btnFotos");

console.log("JavaScript carregado!");

/* ==========================================================
                    TEXTO DA CARTA
========================================================== */

const mensagem = [

"Querida Thalyta,",

"Quero que você saiba que fiquei muito triste quando soube da sua saída.",

"Sei que momentos assim podem trazer insegurança e muitas perguntas, mas também sei que Deus continua escrevendo a nossa história, mesmo quando não conseguimos entender o que Ele está fazendo.",

"Nada acontece sem que Ele permita, e eu acredito que, mesmo parecendo o fim de um ciclo, o Senhor já está preparando um novo começo.",

"Confie no tempo d'Ele, porque os planos de Deus sempre são maiores do que aquilo que conseguimos enxergar hoje.",

"Quero deixar com você um versículo que sempre fortalece o meu coração:",

"Isaías 43:19",

"Eis que faço uma coisa nova; agora sairá à luz; porventura não a percebeis? Eis que porei um caminho no deserto e rios no ermo.",

"Que essa promessa te lembre de que Deus é especialista em transformar recomeços em testemunhos.",

"Rogo a Deus para que Ele encha o seu coração de paz, renove as suas forças e conduza cada passo seu daqui para frente.",

" Você é uma pessoa muito especial, e foi um privilégio ter convivido com você.",

"Tenho certeza de que Deus ainda tem muitos planos para a sua vida, e que, no tempo certo, você verá o propósito por trás de tudo isso.",

"Estarei rezando por você.",

"Que o Senhor te abençoe, te sustente e te surpreenda com tudo aquilo que Ele preparou.",

"Conte comigo sempre!",

"Com muito carinho,",

"Ana do TI. ❤️",

];

/* ==========================================================
                BOTÃO INICIAL
========================================================== */

let cartaAberta = false;

envelope.addEventListener("click", () => {

    if (cartaAberta) return;

    cartaAberta = true;

    console.log("Cliquei!");

    document.getElementById("inicio").style.display = "none";

    document.getElementById("envelope-section").style.display = "block";

});

/* ==========================================================
                ENVELOPE
========================================================== */

envelope.addEventListener("click", () => {

    const tampa = document.querySelector(".envelope-top");
    const carta = document.querySelector(".letter-preview");
    const selo = document.querySelector(".seal");

    selo.style.opacity = "0";

    tampa.style.transform = "rotateX(180deg)";

    carta.style.bottom = "120px";

    setTimeout(() => {

        envelopeSection.classList.add("hidden");

        cartaSection.classList.remove("hidden");

        escreverCarta();

    }, 1400);

});

/* ==========================================================
                MÁQUINA DE ESCREVER
========================================================== */

function escreverCarta(){

    textoCarta.innerHTML = "";

    let indiceParagrafo = 0;

    let indiceLetra = 0;

    function escrever(){

        if(indiceParagrafo >= mensagem.length){

            botaoFotos.style.display = "block";

            return;

        }

        let paragrafos = textoCarta.querySelectorAll("p");

        let paragrafoAtual;

        if(!paragrafos[indiceParagrafo]){

            paragrafoAtual = document.createElement("p");

            textoCarta.appendChild(paragrafoAtual);

        }else{

            paragrafoAtual = paragrafos[indiceParagrafo];

        }

        if(indiceLetra < mensagem[indiceParagrafo].length){

            paragrafoAtual.textContent += mensagem[indiceParagrafo].charAt(indiceLetra);

            indiceLetra++;

            setTimeout(escrever,35);

        }else{

            indiceParagrafo++;

            indiceLetra = 0;

            setTimeout(escrever,400);

        }

    }

    escrever();

}