export default class PedidosFactory{
    static async formataPedidos(ped): Promise<any>{
        const pedidos = []

        ped.forEach(p => {
            pedidos.push({
                numeroPedido: p.pedido.numero,
                dataPedido: p.pedido.data,
                observacoesPedido: p.pedido.observacoes,
                situacaoPedido: p.pedido.situacao,
                nomeCliente: p.pedido.cliente.nome,
                cnpjCliente: p.pedido.cliente.cnpj,
                enderecoCliente: p.pedido.cliente.endereco,
                bairroCliente: p.pedido.cliente.bairro,
                cidadeCliente: p.pedido.cliente.cidade,
                ufCliente: p.pedido.cliente.uf,
                cepCliente: p.pedido.cliente.cep,
                foneCliente: p.pedido.cliente.fone,
                celularCliente: p.pedido.cliente.celular,
                emailCliente: p.pedido.cliente.email,
                numeroCliente: p.pedido.cliente.numero,
                complementoCliente: p.pedido.cliente.complemento,
                previsaoPedido: p.pedido.dataPrevista || 0,
            })
        })

        return pedidos
    }

    static async formataProdutos(itens, pedido): Promise<any>{
        const produtos = []

        itens.forEach(i => {
            produtos.push({
                pedido,
                codigo: i.item.codigo,
                descricao: i.item.descricao,
                quantidade: i.item.quantidade,
                valorUnidade: parseFloat(i.item.valorunidade)
            })
        })

        return produtos
    }
}