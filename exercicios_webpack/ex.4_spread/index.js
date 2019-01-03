
const produto = {
    nome: 'Caneta Azul',
    preco: 1.90,
    desconto: 0.05
}

function clone(objeto){
    /* Operador Spread */
    return { ...objeto }
}

const novoProduto = clone(produto)
novoProduto.nome = 'Caneta Preta'

console.log(produto, novoProduto)