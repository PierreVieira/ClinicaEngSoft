import React from "react";
import {Parallax} from "react-parallax";
import happyDoc from "../imagens/HappyDoc&pacient_2.jpg"
import logo_principal from "../imagens/logo_clinica_principal.png";
import Footer from "../components/footer2";
import "./Font.css";
import {Col, Container, Row} from "react-grid-system";
import alerta_covid from "../imagens/Atendimento_Suspenso.png";
import sobre_nos from "../imagens/sobre_nos.png";
import a_clinica from "../imagens/a_clinica.png";
import slideImg from "../imagens/slide-2.jpg";
import missaoIcon from "../imagens/missao.png";
import valoresIcon from "../imagens/valores.png";
import agendaIcon from "../imagens/Agenda.png"
import telefoneIcon from "../imagens/telefone icon.png"

const style = {
  margin: "1%",
};

class Info extends React.Component {
  constructor() {
    super();
  }
  state = {
    activeSlideIndex: 0,
  };

  setActiveSlideIndex = (newActiveSlideIndex) => {
    this.setState({
      activeSlideIndex: newActiveSlideIndex,
    });
  };

  render() {
    return (
      <div>
        <div>
          <Parallax
            bgImage={happyDoc}
            bgImageAlt="clinica"
            strength={100}
          >
            <img
              src={logo_principal}
              align="right"
              style={{ padding: "100px", paddingTop: "80px" }}
             alt={'Logo_principal'}/>
            <div style={{ height: "600px", width: "565px" }} />
          </Parallax>
        </div>

        <div>
          <img src={sobre_nos}  alt={'Sobre_nos'}/>
        </div>
        <div>
          <img
             src={a_clinica}
             align="left"
             style={{padding: "130px", paddingTop: "140px"}}
             alt={'Label1'}
          />
          <br/>
          <div className="Font">
            <header className="Font-header">
              A CLINICA DE RADIOLOGIA ODONTOLÓGICA vem construindo há mais de 33 anos sua trajetória balizada na busca da qualidade e confiabilidade nos serviços de radiodiagnóstico que oferece.
              Sempre investindo em novas tecnologias para a obtenção de diagnósticos precisos, também não mede esforços para a capacitação e constante aprimoramento de seu corpo técnico no atendimento humano e personalizado aos pacientes a nós confiados.
              Assim, age permanentemente no sentido de atingir e superar expectativas de todos os seus clientes.
            </header>
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <div style={{ padding: "20px" }}>
          <Container>
            <Row justify="center" align="center">
              <Col sm={4}>
                <img
                    src={missaoIcon}
                    width={100}
                 alt={"Missão"}
                />
                <br/>
                <header className="Texto">
                  Prestar assistencia integral, oferecer ensino especializado
                  humanizado, com respeito ao paciente em todos os aspectos.
                </header>
              </Col>
              <Col sm={5}>
                <img src={valoresIcon}
                     width={100}
                     alt={"Valores"}
                />
                <br/>
                <header className="Texto">
                  Gestao eficiente, ética, competência, humanização,
                  transparência, compromisso, respeito, confiança e responsabilidade socioambiental.
                </header>
              </Col>
            </Row>
          </Container>
        </div>
          <div>
              <img
                  src={slideImg}
                  width={1250}
                  style={{ paddingTop: "10px" }}
              />
          </div>
          <br/>
          <br/>
        <div style={{ paddingTop: "50px", paddingBottom: "50px" }}>
          <Container justify="center">
            <Row justify="center">
              <Col sm={1} align="right" className="Box">
                <img src={agendaIcon} width={85}/>
              </Col>
              <Col sm={4}>
                <img
                    src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/SG9yw6FyaW8gZGUgYXRlbmRpbWVudG8/geliat-extralight.png"
                    style={{ paddingTop: "40px", paddingBottom: "10px" }}
                />
                <header className="Texto-1" border="20px">
                  Segunda - Sabado: 9h às 18h<br/>
                </header>
              </Col>
              <Col sm={1} className="Box">
                <img src={telefoneIcon} width={85}  alt={'icone-telefone'}/>
              </Col>
              <Col sm={4}>
                <br/>
                <img
                    src="https://see.fontimg.com/api/renderfont4/6YLRq/eyJyIjoiZnMiLCJoIjoyMiwidyI6MTAwMCwiZnMiOjIyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/VGVsZWZvbmVzIGRlIENvbnRhdG8/geliat-extralight.png"
                    style={{ paddingTop: "20px", paddingBottom: "10px" }}
                 alt={'Telefone-text'}/>
                <header className="Texto-1" border="20px">
                  (31) 3921-xxxx| (31) 99891-xxxx
                </header>
              </Col>
            </Row>
          </Container>
        </div>
        <div>
          <br/>
          <br/>
        </div>
        <div>
            <img
                src={alerta_covid} width={1000}
             alt={'Alerta_covid'}/>
        </div>
        <br/>
        <br/>
        <Footer/>
      </div>
    );
  }
}

export default Info;
