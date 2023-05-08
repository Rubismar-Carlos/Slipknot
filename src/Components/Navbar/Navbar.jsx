// css
import './Navbar.css'

// react router dom
import { NavLink, Link } from 'react-router-dom'

//react 
import { useState } from 'react'

// react icons
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {

    const imgLogo = "https://seeklogo.com/images/S/Slipknot_-_Pentagrama-logo-22F7A9AA0C-seeklogo.com.png"

    const imgLogoNavBar = "http://2.bp.blogspot.com/-zvsyoJnCbls/VcF2OhoV0tI/AAAAAAAADvY/rj11i0pZ-cQ/s1600/nona%2Bvermelho.png"

    const [openMenu, setOpenMenu] = useState(false)

    const [visivel, setVisivel] = useState(true)

    const handleOpenMenu = () => {

        setOpenMenu(!openMenu)

        setVisivel(false)

    }

    const handleCloseMenu = () => {

        setOpenMenu(false)

        setVisivel(true)

    }

  return (
    <div>
        <div className="navbar">
            <nav>
                <div className='box-logo'>
                    <Link to={'/'} target={'_self'}>
                        <img src={imgLogoNavBar} alt="Imagem logo navbar slipknot"/>
                    </Link>
                </div>
                <div className='container-menu-desktop'>
                    <ul className='ul-desktop'>
                        <li>
                            <NavLink to={'/'}>
                                Início
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/musicas'}>
                                Músicas
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/artistas'}>
                                Integrantes
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/exartistas'} >
                                Ex-Integrantes
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="img-slipknot-desktop">
                    <img src={imgLogo} alt="imagem slipknot" />
                </div>
                <div className='btn-menu-mobile'>
                    {visivel && < RxHamburgerMenu onClick={handleOpenMenu}/>}
                    {!visivel && < AiOutlineClose onClick={handleCloseMenu} className='btn-close-modal' />}
                </div>
            </nav>
            <div className={`menu-mobile ${openMenu ? 'ativado' : 'inativo'}`}>
                <ul className='ul-mobile'>
                    <li>
                        <NavLink to={'/'} onClick={handleCloseMenu}>
                            Início
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/musicas'} onClick={handleCloseMenu}>
                            Músicas
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/artistas'} onClick={handleCloseMenu}>
                            Integrantes
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/exartistas'} onClick={handleCloseMenu}>
                            Ex-Integrantes
                        </NavLink>
                    </li>
                    <div className="box-mobile_img">
                        <img src={imgLogo} alt="imagem logo" />
                    </div>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar