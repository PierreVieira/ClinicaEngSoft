INSERT INTO pessoa (nome , email , telefone , cep , logradouro , bairro , cidade , estado)
VALUES ('Thiago', 'thidampe@email.com', '31995781981','30494060','Rua 1', 'Estoril', 'BH', 'MG');

INSERT INTO funcionario (datacontrato, salario, senha, status)
VALUES ('10-09-2020', 2000, '1515', true);

INSERT INTO paciente (peso, altura, tiposanguineo)
VALUES (93.5, 1.83, 'O-');

INSERT INTO medico (especialidade, crm)
VALUES ('Radiologista_clinico', 4567518);

INSERT INTO base_enderecos (cep, logradouro, bairro, cidade, estado)
VALUES ('30494050','Rua werneck', 'Buritis', 'BH', 'MG');

INSERT INTO agenda (data, horario, nome, email, telefone)
VALUES ('30-08-2021', '30-08-2021T13:00:00', 'Pierre', 'pierre@email.com','33714187');

insert into agenda (idAgenda, data, horario, nome, email, telefone, medico_id) 
values ('a1', '10-09-2021', '15:30:00', 'Luan', 'Luan@email.com', '33784478', 'm02');