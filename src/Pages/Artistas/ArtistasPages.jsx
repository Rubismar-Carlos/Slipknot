//css
import './ArtistasPages.css'

// react
import { useState } from 'react'

// react router dom
import { Link } from 'react-router-dom'

//components
import Artistas from '../../Components/Artistas/Artistas'

const ArtistasPages = () => {

  const [openResposta, setOpenResposta] = useState(false)

  const handleOpenResposta = () => setOpenResposta(true)
  const handleCloseRespostas = () => setOpenResposta(false)

  return (
    <div className='artistas-pages'>
        <div className="container-artistas-pages">
          <div className='container-box__'>
            <span className="span-title">O grupo</span>
            <p>O Slipknot é formado por 9 integrantes, que não são reconhecidos por seus nomes, mas sim por seus números. A banda é composta por um vocalista, dois guitarristas, um baixista, dois percussionistas, um baterista, um sampler e um DJ. Sempre houve a dúvida de quem seria a pessoa por trás da máscara. Veja abaixo e conheça todos os integrantes que, juntos, formam o Slipknot.</p>
          </div>
          <div>
            <div className="container-box__">
              <span className='span-title'>Porque usam máscaras?</span>
              <p>Corey Taylor: A ideia de usar máscaras, honestamente, surgiu antes de eu chegar ao Slipknot. Eu me juntei depois. Eles usavam máscaras já. A razão pela qual eles começaram a usar em primeiro lugar foi porque isso lhes permitia a meio que deixar aquele animal desacorrentado, basicamente. Isso nos permitiu ser mais livres no palco. Nós usamos máscara o show inteiro. Muitas bandas usam só em algumas partes"</p>
            </div>
          </div>
        </div>
        <div className="container-slide_artistas">
          <span className='span-title'>Integrantes</span>
          <div className="slide-artistas">
            <Artistas />
          </div>
        </div>
        <div className="container-ex_integrantes">
          <div className="container-box__">
            <span className="span-title">Ex-Integrantes</span>
            <p>O Slipknot é uma banda que possui muitos integrantes desde que foi fundada, mas também teve alguns integrantes que sairam ao longo do tempo. Clique abaixo e conheça os ex-integrantes da banda.</p>
            <Link to={'/exartistas'} target={'_self'}><button className='btn'>Vejá os ex-integrantes</button></Link>
          </div>
        </div>
    </div>
  )
}

export default ArtistasPages