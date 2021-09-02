const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()
const Funcionario = require('./backend/Funcionario')
const Medico = require('./backend/Medico')
const Paciente = require('./backend/Paciente')
const BaseEndereco = require('./backend/BaseEndereco')
const Agenda = require('./backend/Agenda')

app.use(require("cors")())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use('/', router)

router
    .route("/logar")
    .post(Funcionario.login)

router
    .route('/especialidade')
    .get(Medico.getEspecialidades)

router
    .route('/medicoporespecialidade')
    .get(Medico.getMedicoPorEspecialidade)

router
    .route('/paciente')
    .get(Paciente.getPaciente)
    .post(Paciente.setPaciente)
    .put(Paciente.updatePaciente)

router
    .route('/funcionario')
    .get(Funcionario.getFuncionario)
    .post(Funcionario.setFuncionario)
    .put(Funcionario.updateFuncionario)

router
    .route('/medico')
    .get(Medico.getMedico)
    .post(Medico.setMedico)
    .put(Medico.updateMedico)

router
    .route('/endereco')
    .get(BaseEndereco.getEnderecos)
    .post(BaseEndereco.setEndereco)
    .put(BaseEndereco.updateEndereco)

router
    .route('/agenda')
    .post(Agenda.setAgenda)
    .put(Agenda.atualizaAgenda)

router
    .route('/agendaDoMedico')
    .post(Agenda.getHorariosOcupados)

router
    .route('/listaConsultaPaciente')
    .get(Agenda.getConsultasDoPaciente)

router
    .route('/listaTodasConsultas')
    .get(Agenda.getAgendamentosPacientes)
    
router
    .route('/endereco/cep')
    .post(BaseEndereco.getEnderecoByCEP)


// tentativa de juntar com o banco host: finm.sytes.net
const port = 8000 // nao tinha q ser  a porta 5543?
//const senha = 'lsaeb'
const listener = app.listen(port, () => {
    console.log('Serviço executando na porta ' + listener.address().port)
    //senha: lsaeb
})