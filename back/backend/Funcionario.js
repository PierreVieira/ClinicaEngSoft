const genID = require('../api/generateId')

const login = (req, resp) => {
    const {user, senha } = req.body
    const query = 'SELECT * FROM funcionario f INNER JOIN pessoa p ON f.idfuncionario = p.idpessoa WHERE p.email = $1 AND f.senha = $2'

    pool.query(query, [user,senha], (err, res) => {
        if (err) {
            console.log(err)
        }
        resp.status(200).json(res.rows)
    })
}

const getFuncionario = (req, resp) => {
    const query = 'SELECT * FROM funcionario f INNER JOIN pessoa p ON f.idfuncionario = p.idpessoa ORDER BY f.idfuncionario ASC'
    pool.query(query, (err, res) => {
        if (err) {
            console.log('Erro!!!')
        }
        resp.status(200).json(res.rows)
    })
}

const setFuncionario = async (req, resp) => {
    const cod = await genID.idFuncionario()
    const {nome, telefone, email, cep, logradouro, bairro, cidade, estado, datacontrato, salario, senha } = req.body
    pool.query('BEGIN', e => {
        const field = 'idpessoa, nome, telefone, email, cep, logradouro, bairro, cidade, estado'
        const values = '$1, $2, $3, $4, $5, $6, $7, $8, $9'

        pool.query(`INSERT INTO pessoa (${field}) VALUES (${values})`,
            [cod, nome, telefone, email, cep, logradouro, bairro, cidade, estado], (e) => {
                if (e) {
                    throw e
                }
                const fieldFunc = 'idfuncionario, datacontrato, salario, senha'
                const valuesFunc = '$1, $2, $3, $4'

                pool.query(`INSERT INTO funcionario (${fieldFunc}) VALUES (${valuesFunc})`,
                    [cod, datacontrato, salario, senha], (e) => {
                        if (e) {
                            throw e
                        }
                        pool.query('COMMIT', e => {
                            if (e) {
                                console.error('Error committing transaction', e.stack)
                            }
                        })
                    })
                resp.status(200).send(`Funcionário adicionado com sucesso.`)
            })
    })
}

const updateFuncionario = (req, resp) => {
    const { cod, nome, telefone, email, cep, logradouro, bairro, cidade, estado, datacontrato, salario, senha } = req.body
    
    pool.query('BEGIN', e => {
        const query = 'UPDATE pessoa SET nome = $1, email = $2, telefone = $3, ' +
        'cep = $4, logradouro = $5, bairro = $6, cidade = $7, estado = $8 WHERE idpessoa = $9'
        
        pool.query(query, [nome, telefone, email, cep, logradouro, bairro, cidade, estado, cod], (e) => {
            if (e) {
                throw e
            }    
            const queryFunc = 'UPDATE funcionario SET datacontrato = $1, ' +
            'salario = $2, senha = $3 WHERE idfuncionario = $4'

            pool.query(queryFunc, [datacontrato, salario, senha, cod], (e) => {
                if (e) {
                    throw e
                }
                pool.query('COMMIT', e => {
                    if (e) {
                        console.error('Error committing transaction', e.stack)
                    }
                })
            })
        })
        resp.status(200).send(`Alterações realizadas com sucesso.`)
    })
}

module.exports = { setFuncionario,login, getFuncionario, updateFuncionario }