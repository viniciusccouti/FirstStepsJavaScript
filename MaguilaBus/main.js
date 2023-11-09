const precoPassagem = 140;
let  valorTotalCompra = 0;
let assentosSelecionados = [];


function selecionarCadeira(cadeira) {
    const cadeiraSelecionada = cadeira;
    if(cadeiraSelecionada.classList.contains("selecionado")){
        cadeiraSelecionada.classList.remove("selecionado");
        assentosSelecionados = assentosSelecionados.filter(id => id !== cadeiraSelecionada.id);
        valorTotalCompra = assentosSelecionados.length * precoPassagem;
        return;
    }
    cadeiraSelecionada.classList.add("selecionado")
    assentosSelecionados.push(cadeiraSelecionada.id);
    valorTotalCompra = assentosSelecionados.length * precoPassagem;
}

function atualizarVisualizacaoPreco(){
    
}