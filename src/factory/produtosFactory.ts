export default class ProdutosFactory {
    static async objetoProdutos(response, produtos): Promise<any> {     
        !produtos ? produtos = [] : produtos 
        response.forEach(i => {
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