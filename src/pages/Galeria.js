import * as React from 'react'
import Gallery from 'react-grid-gallery'
import galeria from '../imagens/photos_galery.png'
import './Galeria.css'
import Footer from '../components/footer'

const width = 325
const height = 280
const IMAGES =
    [{
        src: 'https://img.pebmed.com.br/wp-content/uploads/2020/05/11163757/enfermagem.jpg.webp',
        thumbnail: 'https://img.pebmed.com.br/wp-content/uploads/2020/05/11163757/enfermagem.jpg.webp',
        thumbnailWidth: width,
        thumbnailHeight: height
    },
        {
            src: 'https://boasnovasmg.com.br/wp-content/uploads/2020/10/ze-gotinha.jpg',
            thumbnail: 'https://boasnovasmg.com.br/wp-content/uploads/2020/10/ze-gotinha.jpg',
            thumbnailWidth: width,
            thumbnailHeight: height
        },
        {
            src: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/medico-duvidas2.jpg?quality=70&strip=all',
            thumbnail: 'https://network.grupoabril.com.br/wp-content/uploads/sites/4/2016/10/medico-duvidas2.jpg?quality=70&strip=all',
            thumbnailWidth: width,
            thumbnailHeight: height
        },
        {
            src: 'https://cdn.secad.com.br/wp-content/uploads/2020/01/nova-puericultura-pediatria.jpg',
            thumbnail: 'https://cdn.secad.com.br/wp-content/uploads/2020/01/nova-puericultura-pediatria.jpg',
            thumbnailWidth: width,
            thumbnailHeight: height
        },
        {
            src: 'https://cdn.unibh.br/app/uploads/2020/05/13170945/Alunos-Medicina-Hospital-da-Baleia.jpeg',
            thumbnail: 'https://cdn.unibh.br/app/uploads/2020/05/13170945/Alunos-Medicina-Hospital-da-Baleia.jpeg',
            thumbnailWidth: width,
            thumbnailHeight: height
        },
        {
            src: 'https://i.ibb.co/ZcxWHr7/ultra.jpg',
            thumbnail: 'https://i.ibb.co/ZcxWHr7/ultra.jpg',
            thumbnailWidth: width,
            thumbnailHeight: height,
            caption: 'Ultrassonografia'
        },
        {
            src: 'https://www.epa.com.br/wp-content/uploads/2016/07/baleia_portal_dma_A.jpg',
            thumbnail: 'https://www.epa.com.br/wp-content/uploads/2016/07/baleia_portal_dma_A.jpg',
            thumbnailWidth: width,
            thumbnailHeight: height
        },
        {
            src: 'https://i.ibb.co/qYfWSL7/doc.jpg',
            thumbnail: 'https://i.ibb.co/qYfWSL7/doc.jpg',
            thumbnailWidth: width,
            thumbnailHeight: height
        },

        {
            src: 'https://redegenoma.com.br/wp-content/uploads/2019/07/radiologia.png',
            thumbnail: 'https://redegenoma.com.br/wp-content/uploads/2019/07/radiologia.png',
            thumbnailWidth: width,
            thumbnailHeight: height
        },
        {
            src: 'https://i.ibb.co/3YBbYq7/tecnico-em-radiologia.jpg',
            thumbnail: 'https://i.ibb.co/3YBbYq7/tecnico-em-radiologia.jpg',
            thumbnailWidth: width,
            thumbnailHeight: height
        },{
            src: 'https://cridiagnosticos.com.br/assets/images/clinica-radiologia-itumbiara.jpg',
            thumbnail: 'https://cridiagnosticos.com.br/assets/images/clinica-radiologia-itumbiara.jpg',
            thumbnailWidth: width,
            thumbnailHeight: height
        },
    ]


class Galeria extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div className="container-gallery">
                    <img src={galeria} width={700} alt={"logo galeria"}/>
                    <br/>
                    <br/>
                    <Gallery images={IMAGES} enableImageSelection={false}/>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Galeria