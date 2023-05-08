// css
import './Musicas'

// react 
import { useState } from 'react'

// react router dom
import { Link } from 'react-router-dom'

// importando modal de artistas que servira no mesmo do video
import ModalArtista from '../../Components/Artistas/ModalArtista'

const MusicasBox = ({nomeMusica, imgMusica, topRank, bioMusica, urlYoutube}) => {

  /* Abrir modal */
  const [isOpenModal, setIsOpenModal] = useState(false)

  /* fechar modal*/
  const handleOpenModal = () => setIsOpenModal(!isOpenModal)

  return (
    <div>
        <div className="box-musica" onClick={handleOpenModal}>
            <div className="img-musica">
            <img src={imgMusica} alt="Imagem da capa da música" />
            </div>
            <div className="box-apresentacao-musicas" onClick={handleOpenModal}>
                <div className='box-conteudo-apresentacao'>
                    <span className="span-artistas">{nomeMusica}</span>
                    <span className="span-artistas">{topRank}</span>
                </div>
                <p>Clique para saber mais</p>
            </div>
        </div>

        <ModalArtista isOpenModal={isOpenModal} setCloseModal={() => setIsOpenModal(!isOpenModal)} >
            <div className="conteudo-modal">
                <div className="box-modal">
                    <div className="box-modal-artista">
                        <div className="modal-img-artista">
                            <img src={imgMusica} alt="Imagem da capa da música" />
                          </div>
                        <div className="informacoes-artista">
                            <span className="nome-artista">{nomeMusica}</span>
                            <p className='funcao-artista'>{topRank}</p>
                            <div className="bio-artista">
                            <h4>Sobre: </h4>
                            <br />
                                <p>{bioMusica}</p>
                            </div>
                            <Link to={urlYoutube} target={'_blank'}><button className='btn btn-modal'>Ver no Youtube</button></Link>
                        </div>
                    </div>
                </div>
            </div>

        </ModalArtista>
    </div>
  )
}

export default MusicasBox