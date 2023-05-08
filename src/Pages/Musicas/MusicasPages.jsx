// css
import './MusicasPages.css'

// react router dom
import { Link } from 'react-router-dom'

// components
import Musicas from '../../Components/Musicas/Musicas'

const MusicasPages = () => {
  return (
    <div className='musicas-pages'>
        <span className="span-title">Músicas</span>
        <div className='container-musicas_box'>
          <p>Com o passar dos anos, a banda Slipknot lançou vários álbuns e músicas, mas sempre há algumas que se destacam mais. Por isso, aqui está uma lista das 10 músicas mais ouvidas da banda até o momento, demonstrando as melhores músicas da banda atualmente. Vale ressaltar que a banda ainda está lançando álbuns até hoje em dia.</p>
        </div>

        <div className="container-slide_musicas">
          <span className="span-title">Conheça o top 10</span>
          <div className='container-box_slide'>
              < Musicas />
          </div>
        </div>
        <span className="span-title">Integrantes</span>
        <div className="container-musicas_artistas">
          <p>Não podemos deixar de mencionar que o Slipknot é um grande sucesso no rock/metal. Clique abaixo para conhecer os integrantes que formam esse grupo.</p>
        </div>
        <Link to={'/artistas'} target={'_self'}><button className="btn">Ver Integrantes</button></Link>

    </div>
  )
}

export default MusicasPages