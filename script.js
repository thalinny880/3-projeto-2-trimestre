const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você avista um beija-flor voando entre flores do seu quintal. O que faz?",
        alternativas: [
            {
                texto: "Corro pegar o celular para filmar.",
                afirmacao: "Você começou a registrar a beleza dos beija-flores e compartilhar com os amigos."
            },
            {
                texto: "Fico em silêncio só admirando o momento.",
                afirmacao: "Você aprendeu a valorizar a simplicidade e leveza da natureza."
            }
        ]
    },
    {
        enunciado: "Pesquisando sobre o beija-flor, você descobre que ele bate as asas até 80 vezes por segundo! Qual sua reação?",
        alternativas: [
            {
                texto: "Fico fascinado e quero saber tudo sobre essa ave.",
                afirmacao: "Você mergulhou no mundo dos beija-flores e descobriu curiosidades incríveis."
            },
            {
                texto: "Acho interessante, mas prefiro apenas observá-los quando aparecem.",
                afirmacao: "Mesmo sem pesquisar muito, você passou a respeitar mais essas aves incríveis."
            }
        ]
    },
    {
        enunciado: "Na aula de ciências, a professora propõe um projeto sobre aves polinizadoras. Qual sua ideia?",
        alternativas: [
            {
                texto: "Criar um jardim de flores nativas para atrair beija-flores.",
                afirmacao: "Você contribuiu para a preservação dos beija-flores no seu bairro."
            },
            {
                texto: "Fazer cartazes explicando o papel do beija-flor na natureza.",
                afirmacao: "Você educou muita gente sobre a importância das aves polinizadoras."
            }
        ]
    },
    {
        enunciado: "Você ouve alguém dizer que beija-flores são comuns e sem graça. Como reage?",
        alternativas: [
            {
                texto: "Explico que eles são essenciais para muitas plantas e ainda são lindos.",
                afirmacao: "Você ajudou a mudar a visão das pessoas sobre essa ave encantadora."
            },
            {
                texto: "Não discuto, mas sigo valorizando os momentos que passo observando eles.",
                afirmacao: "Mesmo calado, sua admiração cresceu e te conectou ainda mais com a natureza."
            }
        ]
    },
    {
        enunciado: "O projeto termina. O que o beija-flor simboliza pra você agora?",
        alternativas: [
            {
                texto: "Leveza, foco e beleza nas pequenas coisas.",
                afirmacao: "Agora você vê o mundo com mais delicadeza e atenção aos detalhes."
            },
            {
                texto: "Movimento constante e alegria.",
                afirmacao: "Você passou a se inspirar no beija-flor para nunca parar de buscar o que te faz feliz."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Seu voo com o beija-flor termina assim:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();