// css
import './Artistas.css'

// REACT ICONS
import { AiOutlineClose } from 'react-icons/ai'

export default function ModalArtista({isOpenModal, setCloseModal, children}) {

    if(isOpenModal) {

        return (
            <div className="container-modal">
                <div className="box-modal">
                    <div className="modal-artista">
                        <div className="modal-close">
                            <AiOutlineClose onClick={setCloseModal}/>
                        </div>
                        <div>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}