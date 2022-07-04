
import {ReactComponent as LogoGithub} from '../../assets/github-logo.svg'
import { ReactComponent as LogoLinkedin } from '../../assets/linkedin-logo.svg'
import { ReactComponent as IconeArrow } from '../../assets/icone-arrow.svg'



import imageProfile from '../../assets/image-profile.png'
import * as S from './style.js'

import { Link } from 'react-scroll'


const Main = () => {

    return (
        <S.Main>
            
            <S.leftCol>
                <img src={imageProfile}/>
                
            </S.leftCol>

            <S.rightCol>
                <h1>Olá, Me chamo Lucas.</h1>
                <p>Eu sou desenvolvedor Front End, amo  design ux/ui
                e estou aprendendo desenvolvimento Back End, para assim se 
                tornar um Desenvolvedor Full Stack.</p>

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
                <Link className="Link" to="projects" smooth={true}  duration={500}>
                    VER SEÇÃO PROJETO 
                    <IconeArrow/>
                </Link>    

            </S.rightCol>
            
            

             
             
        </S.Main>
    )
}

export default Main