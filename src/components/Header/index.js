import { ReactComponent as Logo } from '../../assets/logo.svg'
import { ReactComponent as DarkModeIcon } from '../../assets/dark-mode-icon.svg'
import { ReactComponent as MenuMobileIcon } from '../../assets/menu-mobile-icon.svg'

import * as S from './style.js'
import { Link as LinkScrollSmooth } from 'react-scroll'
import { Link, useHistory } from 'react-router-dom'

import { useState } from 'react'

const Header = () => {
    const [menuMobile, setMenuMobile] = useState(false)
    const [navBorder, setNavBorder] = useState(false) 
    const history = useHistory()  

    const MenuMobileShowAndHide = () => {
        if (menuMobile === false) {
            setMenuMobile(true)
        } else {
            setMenuMobile(false)
        }

    }

    const MenuHideForProjectsSection = () => {
        history.push("/")
        MenuMobileShowAndHide()
    }

    const navBorderScroll = () => {
        if(window.scrollY > 100){
            setNavBorder(true)

        }else{
            setNavBorder(false)
        }
    }
    
    window.addEventListener('scroll', navBorderScroll)
    
    return (
            <S.Header navBorder={navBorder}>
                <S.Nav>
                    <Logo className='logo' />

                    <S.Container>
                        <S.MenuDesktop>
                            <Link to="/">HOME</Link>
                            <Link to="/">PROJETOS</Link>
                            <Link to="/about">SOBRE MIM</Link>

                        </S.MenuDesktop>

                        <S.ContainerIcons>
                            <DarkModeIcon />
                            <MenuMobileIcon className="menuMobile--Visibility" 
                            onClick={MenuMobileShowAndHide} />
                        </S.ContainerIcons>

                    </S.Container>

                    <S.MenuMobile menuMobile={menuMobile}>
                        <S.MenuContainerTop>
                        <Link onClick={MenuMobileShowAndHide} to="/"><Logo className='logo'/></Link>
                            
                            <MenuMobileIcon className="menuMobile menuMobile--Visibility"
                            onClick={MenuMobileShowAndHide} />
                        </S.MenuContainerTop>
                        
                        <Link onClick={MenuMobileShowAndHide} to="/">HOME</Link>
                        <a onClick={MenuHideForProjectsSection} href="#projects">PROJETOS</a>
                        <Link onClick={MenuMobileShowAndHide} to="/about">SOBRE MIM</Link>

                    </S.MenuMobile>

                </S.Nav>

            </S.Header>

    )
}

export default Header