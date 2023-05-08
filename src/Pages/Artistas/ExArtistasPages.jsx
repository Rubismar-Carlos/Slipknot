// css
import './ArtistasPages.css'

// components
import ExArtistas from '../../Components/Artistas/ExArtistas'

const ExArtistasPages = () => {
  return (
    <div className='artistas-pages'>
        <div className='container-artistas-pages'>
            <div className='container-box__ex'>
                <span className="span-title">Afastamentos</span>
                <p>Sabemos que o "Slipknot" não é apenas uma banda de rock, mas sim uma empresa. A banda teve que seguir um caminho, e com muitos integrantes, às vezes eles podem pensar de forma diferente ou não querer seguir esse caminho, o que resulta em afastamentos. Abaixo, veremos os integrantes que já foram afastados da banda até o momento.</p>
            </div>
        </div>
        <div className='container-slide_artistas'>
            <span className="span-title">Ex-Integrantes</span>
            <div className="slide-artistas">
                <ExArtistas />
            </div>
        </div>
    </div>
  )
}

export default ExArtistasPages