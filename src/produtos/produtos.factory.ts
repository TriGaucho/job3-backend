export default class ProdutosFactory {
    static async objetoProdutos(prod) {
        const produtos = []
        prod.forEach(i => {
             produtos.push({
                id: i.produto.id,
                codigo: i.produto.codigo,
                descricao: i.produto.descricao,
                unidade: i.produto.unidade,
                preco: parseFloat(i.produto.preco),
                situacao: i.produto.situacao
            })
        })

        return produtos
    }

    static async montaXmlProduto(dado) {
        return `
            <?xml version="1.0" encoding="UTF-8"?>
            <produto>
                <situacao>${dado}</situacao>
            </produto>
        `
    } 
}