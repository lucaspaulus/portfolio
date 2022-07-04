import { ReactComponent as Logo } from '../../assets/logo.svg'
import {ReactComponent as LogoGithub} from '../../assets/github-logo.svg'
import { ReactComponent as LogoLinkedin } from '../../assets/linkedin-logo.svg'

import * as S from './style.js'

const Footer = () => {

    return (
        <S.Footer>
            <S.leftCol>
                <Logo/>
                <h6>Designed by Lucas Paulus.</h6>
                <p>Todos os direitos reservados, Copyright © 2022.</p>

            </S.leftCol>

            <S.rightCol>
                <S.container>
                    <a href='https://github.com/lucaspaulus' target='blank'>
                        <LogoGithub/>
                        <p>Github</p> 
               
                    </a>
                    
                   
                    <a href='https://www.linkedin.com/in/lucas-paulus' target='blank'>
                        <LogoLinkedin/>
                        <p>Linkedin</p>

                    </a>

                </S.container>
            </S.rightCol>
            
        </S.Footer>
        
    )
}

export default Footer