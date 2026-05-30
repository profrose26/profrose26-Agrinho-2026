let producao = 50;
let sustentabilidade = 50;

function atualizarTela(){
    document.getElementById("producao").innerText = producao;
    document.getElementById("sustentabilidade").innerText = sustentabilidade;
}

function escolhaGotejamento(){

    sustentabilidade += 10;

    atualizarTela();

    document.getElementById("resultado").innerHTML =
    "Boa escolha! Você economizou água.";

    verificarFinal();
}

function escolhaConvencional(){

    producao += 10;
    sustentabilidade -= 5;

    atualizarTela();

    document.getElementById("resultado").innerHTML =
    "A produção aumentou, mas houve desperdício de água.";

    verificarFinal();
}

function verificarFinal(){

    if(producao >= 70 && sustentabilidade >= 70){

        document.getElementById("resultado").innerHTML =
        "🏆 Parabéns! Você criou uma fazenda sustentável!";
    }

    else if(producao >= 70 && sustentabilidade < 50){

        document.getElementById("resultado").innerHTML =
        "❌ A produção cresceu, mas o meio ambiente foi prejudicado.";
    }
}