# Clínica Web
[Enunciado](https://eduardocunha11.github.io/firstblog/aulas/lab-programacao/Trabalho2-LabES.pdf).

## Participantes
- [Luan Ferreira de Almeida](https://github.com/umanzel);
- [Pierre Vieira](https://github.com/PierreVieira/);
- [Thiago Danilo](https://github.com/BoltSheep)

## Tecnologias usadas:

- React js

## Modelo do banco criado e Link para o host:

create table funcionario (\
codigo serial not null,\
nome varchar(150) not null,\
email varchar (150) not null,\
telefone varchar (200) not null,\
logradouro varchar (250),\
bairro varchar (100),\
cidade varchar (50),\
estado varchar (50),\
datacontrato date,\
salario decimal,\
senha varchar(150),\
crm varchar(50),\
especialidade integer\
);

create table paciente (\
codigo serial not null,\
nome varchar(150) not null,\
email varchar (150) not null,\
telefone varchar (200) not null,\
logradouro varchar (250),\
bairro varchar (100),\
cidade varchar (50),\
estado varchar (50),\
peso decimal,\
altura decimal,\
tiposanguineo integer\
);

create table especialidades (\
codigo serial not null,\
especialidade varchar(150)\
);

create table tipossanguineos (\
codigo serial not null,\
tiposanguineo varchar(3)\
);

host: finm.sytes.net\
porta: 5433\
banco: labes\
usuario: labes\
senha: lsaeb