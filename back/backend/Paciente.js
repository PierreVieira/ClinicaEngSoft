const genID = require('../api/generateId')


const getPaciente = (req, resp) => {
    const query = 'SELECT * FROM paciente pac INNER JOIN pessoa p ON pac.idpaciente = p.idpessoa ORDER BY pac.idpaciente ASC;'
    pool.query(query, (e, res) => {
        if (e) {
            console.log('Erro!')
        }
        resp.status(200).json(res.rows)
    })
}

const setPaciente = async (req, resp) => {
    const cod = await genID.idPaciente()
    const { nome, email, telefone, cep, logradouro, bairro, cidade, estado, peso, altura, tiposanguineo } = req.body
    pool.query('BEGIN', e => {
        const field = 'idpessoa, nome, email, telefone, cep, logradouro, bairro, cidade, estado'
        const values = '$1, $2, $3, $4, $5, $6, $7, $8, $9'
        pool.query(`INSERT INTO pessoa (${field}) VALUES (${values})`, [cod, nome, email, telefone, cep, logradouro, bairro, cidade, estado], (e) => {
            if (e) {
                throw e
            }
            const fieldFunc = 'idpaciente, peso, altura, tiposanguineo'
            const valuesFunc = '$1, $2, $3, $4'
            pool.query(`INSERT INTO paciente (${fieldFunc}) VALUES (${valuesFunc})`, [cod, peso, altura, tiposanguineo], (e) => {
                if (e) {
                    throw e
                }
                pool.query('COMMIT', e => {
                    if (e) {
                        console.error('Error committing transaction', e.stack)
                    }
                })
            })
            resp.status(200).send(`Paciente adicionado com sucesso.`)
        })
    })
}

const updatePaciente = (req, resp) => {
    const { cod, nome, email, telefone, cep, logradouro, bairro, cidade, estado, peso, altura, tiposanguineo } = req.body
    
    pool.query('BEGIN', e => {
        const query = 'UPDATE pessoa SET nome = $1, email = $2, telefone = $3, ' +
        'cep = $4, logradouro = $5, bairro = $6, cidade = $7, estado = $8 WHERE idpessoa = $9'
        
        pool.query(query, [nome, email, telefone, cep, logradouro, bairro, cidade, estado, cod], (e) => {
            if (e) {
                throw e
            }    
            const queryPac = 'UPDATE paciente SET peso = $1, altura = $2, tiposanguineo = $3 WHERE idpaciente = $4'

            pool.query(queryPac, [peso, altura, tiposanguineo, cod], (e) => {
                if (e) {
                    throw e
                }
                pool.query('COMMIT', err => {
                    if (err) {
                        console.error('Error committing transaction', err.stack)
                    }
                })
            })
        })
        resp.status(200).send(`Update feito com sucesso.`)
    })
}

module.exports = { setPaciente, getPaciente, updatePaciente }