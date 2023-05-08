//css
import './Artistas.css'

// react
import { useState } from 'react'

// importando modal
import ModalArtista from './ModalArtista'

const ArtistasBox = ({nomeArtista, imgArtista, funcaoArtista, bioArtista, imgModal, nmrArtista}) => {

    /* Abrir modal */
    const [isOpenModal, setIsOpenModal] = useState(false)

    /* fechar modal*/
    const handleOpenModal = () => setIsOpenModal(!isOpenModal)

  return (
    <div>
        <div className="box-artista">
            <div className="img-artista">
                <img src={imgArtista} alt="Imagem do artista" />
            </div>
            <div className="box-apresentacao-artista" onClick={handleOpenModal}>
                <div className='numero-artista'><p>#{nmrArtista}</p></div>
                <div className='box-conteudo-apresentacao'>
                    <span className="span-artistas">{nomeArtista}</span>
                    <span className="span-artistas">{funcaoArtista}</span>
                </div>
                <p>Clique para saber mais</p>
            </div>
        </div>

        <ModalArtista isOpenModal={isOpenModal} setCloseModal={() => setIsOpenModal(!isOpenModal)} >
            <div className="conteudo-modal">
                <div className="box-modal">
                    <div className="box-modal-artista">
                        <div className="modal-img-artista">
                            <img src={imgModal} alt="Imagem artista" />
                        </div>
                        <div className="informacoes-artista">
                            <span className="nome-artista">{nomeArtista}</span>
                            <p className='funcao-artista'>{funcaoArtista}</p>
                            <div className="bio-artista">
                            <h4>Sobre: </h4>
                            <br />
                                <p>{bioArtista}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </ModalArtista>

    </div>
  )
}

export default ArtistasBox