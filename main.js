
function verificaDado (userIdade) {
    if (typeof userIdade != 'number') {
        resultado.innerText = ("Dado Inválido!")
    } return;
}

function verificaVoto () {
    let idade = document.getElementById("userIdade").value;
    let resultado = document.getElementById("resultado");
    verificaDado();

    if (idade <16) {
        resultado.innerText = ("Não pode votar.")
    } else if (idade >=16 && idade <=17 || idade >65) {
        resultado.innerText = ("Voto opcional.")
    } else if (idade >=18 && idade <=65) {
        resultado.innerText = ("Voto obrigatório.")
    }
   
}

