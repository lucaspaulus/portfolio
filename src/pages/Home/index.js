import Main from "../../components/Main"
import { ReactComponent as Skills } from '../../assets/skills.svg'
import { ReactComponent as Code } from '../../assets/code.svg'
import { ReactComponent as Projects } from '../../assets/projects.svg'

import { ReactComponent as FacebookLogo } from '../../assets/facebook-logo.svg'
import { ReactComponent as ElementorLogo } from '../../assets/elementor-logo.svg'
import { ReactComponent as WordpressLogo } from '../../assets/wordpress-logo.svg'
import { ReactComponent as FigmaLogo } from '../../assets/figma-logo.svg'
import { ReactComponent as PhotoShopLogo } from '../../assets/photoshop-logo.svg'

import { ReactComponent as Arrow } from '../../assets/arrow.svg'

import KenzieShopProject from '../../assets/KenzieShop-300.png'

import * as S from './style.js'

import { useRef } from "react"

const Home = () => {
    const carousel = useRef(null)

    const handleBtnBack = (e) => {
        e.preventDefault()
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft -= carousel.current.offsetWidth



    }


    const handleBtnNext = (e) => {
        e.preventDefault()
        console.log(carousel.current.offsetWidth)
        carousel.current.scrollLeft += carousel.current.offsetWidth

    }

    //<img src={KenzieShopProject}/>
    
    return (
        <S.Sections>
            <Main />
            <S.SectionSkills>
                <Skills />
                <h2>Minhas Habilidades</h2>

                <S.skillCardsContainer>
                    <S.skillCard>
                        <FacebookLogo/>
                        <p>FACEBOOK ADS</p>
                    </S.skillCard>

                    <S.skillCard>
                        <PhotoShopLogo/>
                        <p>PHOTOSHOP</p>
                    </S.skillCard>

                    <S.skillCard>
                        <FigmaLogo/>
                        <p>FIGMA</p>
                    </S.skillCard>
                       
                    <S.skillCard>
                        <WordpressLogo/>
                        <p>WORDPRESS</p>
                    </S.skillCard>

                    <S.skillCard>
                        <ElementorLogo/>
                        <p>ELEMENTOR</p>
                    </S.skillCard>
                </S.skillCardsContainer>
            </S.SectionSkills>


            <S.SectionTechs>
                <Code/>
                <h2>Minhas Tecnologias</h2>
                <S.ContainerSectionTechs>

                    <S.Carousel className="carousel" ref={carousel}>
                        <S.Circle>
                            <p>JS</p>
                        </S.Circle>
                            
                        <S.Circle>
                            <p>HTML</p>   
                        </S.Circle>

                        <S.Circle>
                            <p>CSS</p> 
                        </S.Circle>

                        <S.Circle>
                            <p>REACT</p>
                        </S.Circle>
                    </S.Carousel>

                    <div className="btn btn-back">
                        
                        <S.Button onClick={handleBtnBack}><Arrow/></S.Button>
                    </div>

                    
                    <div className="btn btn-next">
                        <S.Button onClick={handleBtnNext}><Arrow/></S.Button>
                    </div>


                </S.ContainerSectionTechs>
               
                
            </S.SectionTechs>

            <S.SectionProjects id="projects">
                <Projects/>
                <h2>Meus Projetos</h2>
                
                <S.ProjectContainer>
                    <S.ImgContainer/>
                        <S.ProjectDescription>
                            <h5>Burguer <span>Kenzie</span></h5>
                            <a href='https://react-entrega-s3-kenzishop-com-context-api-lucaspaulus.vercel.app/' target='blank'>
                             
                                VER PROJETO 

                            </a>
                        </S.ProjectDescription>


                </S.ProjectContainer>
            </S.SectionProjects>

        </S.Sections>
    )
}

export default Home