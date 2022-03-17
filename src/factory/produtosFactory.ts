export default class ProdutosFactory {
    static async objetoProdutos(prod): Promise<any> {
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
}