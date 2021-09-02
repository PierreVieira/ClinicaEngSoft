const genID = require('../api/generateId')

const  setAgenda = async (request, response) => {

    const cod = await genID.idAgenda()
    const {
        data,
        horario,
        nome,
        telefone,
        email,
        medico_id
    } = request.body

    const field = 'idAgenda, data, horario, nome, telefone, email, medico_id'
    const values = '$1, $2, $3, $4, $5, $6, $7'
    pool.query(`INSERT INTO agenda (${field}) VALUES (${values})`, [cod, data, horario, nome, email, telefone, medico_id], (e) => {
        if (e) {
            throw e
        }
        response.status(201).send(`Agenda adicionada`)
    })
}

const atualizaAgenda = (request, response) => {
    const {
        idAgenda,
        data,
        horario,
        telefone,
        email,
        medico_id
    } = request.body
    const query = `UPDATE Agenda SET data = '${data}', horario = '${horario}', telefone = '${telefone}', email = '${email}', medico_id = '${medico_id}' WHERE idAgenda = '${idAgenda}';`
    pool.query(query, (e) => {
        if (e) {
            throw e
        }
        response.status(200).send(`Agenda atualizada`)
    })
}

const getConsultasPaciente = (req, resp) => {
    const {
        nome
    } = req.body
    const query = `select a.idAgenda,a.data as DIA, a.horario as HORA, m.especialidade, p.nome from agenda a, pessoa p, medico m  where a.medico_id = p.idpessoa and a.nome = '${nome}' and a.medico_id = m.idmedico ORDER BY a.data ASC;`
    pool.query(query, (e, res) => {
        if (e) {
            throw e
        }
        resp.status(200).json(res.rows)
    })
}

const getAgendamentosPacientes = (req, resp) => {
    const query = `select a.idAgenda,a.data as DIA, a.horario as HORA, a.nome as PACIENTE, m.especialidade,m.idmedico, p.nome as MEDICO, a.email as EMAIL, a.telefone as TELEFONE from agenda a, pessoa p, medico m  where a.medico_id = p.idpessoa and a.medico_id = m.idmedico ORDER BY a.data ASC;`
    pool.query(query, (err, res) => {
        if (err) {
            throw err
        }
        resp.status(200).json(res.rows)
    })
}

const getHorariosMarcadas = (req, resp) => {
    const {
        especialidade,
        medico
    } = req.body
    console.log(medico)
    const query = `select data,horario from  agenda a WHERE a.medico_id = '${medico}' ORDER BY a.horario ASC;`
    pool.query(query, (e, res) => {
        if (e) {
            throw e
        }
        resp.status(200).json(res.rows)
    })
}

module.exports = { setAgenda, atualizaAgenda, getHorariosOcupados: getHorariosMarcadas, getConsultasDoPaciente: getConsultasPaciente, getAgendamentosPacientes }