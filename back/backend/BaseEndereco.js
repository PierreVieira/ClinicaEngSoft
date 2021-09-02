const getEnderecoByCEP = (request, response) => {
    const cep = request.body.cep
    
    pool.query('select * from base_enderecos where CEP = $1', [cep], (e, res) => {
        if (e) {
            console.log("Erro tentar acessar endereco: " + e)
        }
        response.status(200).json(res.rows[0])
    })
}

const getEnderecos = (request, response) => {
    pool.query('SELECT * FROM base_enderecos', (e, res) => {
        if (e) {
            console.log("Erro ao tentar acessar tabela Base de Enderecos: " + e)
        }
        response.status(200).json(res.rows)
    })
}

const setEndereco = (request, response) => {
    const { cep, logradouro, bairro, cidade, estado } = request.body

    const field = 'cep, logradouro, bairro, cidade, estado'
    const value = '$1, $2, $3, $4, $5'
    pool.query(`insert into base_enderecos (${field}) VALUES (${value})`,
        [cep, logradouro, bairro, cidade, estado], (err, res) => {
            if (err) {
                console.log("Erro ao tentar inserir na tabela Base de Enderecos: " + err)
            }
            response.status(201).send(`Endereco adicionado a base`)
        })
}

const updateEndereco = (request, response) => {
    const { idBase_Enderecos, cep, logradouro, bairro } = request.body

    pool.query(
        'UPDATE base_enderecos SET cep = $1, logradouro = $2, bairro = $3 where idBase_Enderecos = $4',
        [cep, logradouro, bairro, idBase_Enderecos],
        (e) => {
            if (e) {
                throw e
            }
            response.status(200).send(`Endereco atualizado com sucesso`)
        }
    )
}

module.exports = {getEnderecos, getEnderecoByCEP, updateEndereco, setEndereco}