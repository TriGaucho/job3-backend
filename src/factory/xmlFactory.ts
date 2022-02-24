export default class XmlFactroy {
    static async converteJSON(obj): Promise<string>{
        let item = ''

        obj.itens.forEach(i => {
             item += `
                <item>
                <codigo>${i.codigo}</codigo>
                <descricao>${i.descricao}</descricao>
                <un>${i.un}</un>
                <qtde>${i.qtde}</qtde>
                <vlr_unit>${i.vlr_unit}</vlr_unit>
                </item>
            `
        })

        let dados = `
        <?xml version="1.0" encoding="UTF-8"?>
        <pedido>
        <cliente>
        <nome>${obj.cliente.nome}</nome>
        <tipoPessoa>${obj.cliente.tipoPessoa}</tipoPessoa>
        <endereco>${obj.cliente.endereco}</endereco>
        <cpf_cnpj>${obj.cliente.cpf_cnpj}</cpf_cnpj>
        <numero>${obj.cliente.numero}</numero>
        <complemento>${obj.cliente.complemento}</complemento>
        <bairro>${obj.cliente.bairro}</bairro>
        <cep>${obj.cliente.cep}</cep>
        <cidade>${obj.cliente.cidade}</cidade>
        <uf>${obj.cliente.uf}</uf>
        <fone>${obj.cliente.fone}</fone>
        </cliente>
        <itens>
        ${item}
        </itens>
        <obs>${obj.obs}</obs>
        <obs_internas>${obj.obs_internas}</obs_internas>
        </pedido>
        `

        return dados
    } 
}