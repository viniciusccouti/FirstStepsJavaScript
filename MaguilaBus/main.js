let  valorTotalCompra = 0;
let assentosSelecionados = [];


function selecionarCadeira(cadeira) {
    const cadeiraSelecionada = cadeira;
    cadeiraSelecionada.classList.add("selecionado")
    assentosSelecionados.push(cadeiraSelecionada.id);
}