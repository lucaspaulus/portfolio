import styled from "styled-components";
import KenzieShopProject_300 from '../../assets/KenzieShop-300.png'
import KenzieShopProject_400 from '../../assets/KenzieShop-400.png'
import KenzieShopProject_allQueries from '../../assets/KenzieShop-allQueries.png'
export const Sections = styled.section`
    margin-bottom: 100px;

`

export const SectionSkills = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    & > svg {
        width: 50px;
        height: 50px;
        margin: 80px 0 20px 0 ;
    }



`

export const Title = styled.h2`
    font-size: 16px;


`

export const skillCardsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(0px,100px));
    gap: 10px;
    max-width: 620px;
    margin-top: 30px;
    justify-content: center;
    padding: 0 20px;



`

export const skillCard = styled.div`
    width: 100%;
    height: 120px;
 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

 
    background-color: #1B1B1B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    &:hover{
        box-shadow: none;
    }

    svg{
        width: 50px;
        height: 50px;
        fill: #ADADAD;

        margin-bottom: 10px;
    }

    p{
        font-size: 10px;
    }

`


export const SectionTechs = styled.section`
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    padding: 0 40px;
    
    & > svg {
        width: 50px;
        height: 50px;
        margin: 80px 0 20px 0 ;
    }


`

export const Carousel = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    max-width: 620px;
    background-color: #1B1B1B;

    overflow-x: auto;
    scroll-behavior: smooth;
    margin: 0 40px;
    
    &::-webkit-scrollbar{
        display: none;
    }

 



    

`

export const ContainerSectionTechs = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    max-width: 620px;
    position: relative; 
    margin-top: 30px;

    svg{
        width: 50px;
        height: 30px;
    }

    .btn{
        width: 40px;
        height: 100px;
        overflow: hidden;
        position: absolute;

    }

    .btn-back{
        left: 0px;
 
    }

    
    .btn-next{
        right: 0px;
 
        transform: rotate(180deg);

      
    }
 
`

export const Circle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #adadad;
    flex-shrink: 0;
    margin: 0 15px;

    p{
        color:  black;
        font-weight: bold;
        font-size: 14px;
    }

    @media screen and (min-width: 375px){
        margin: 0 10px;
    }
    @media screen and (min-width: 425px){
        margin: 0 20px;
    }

`

export const Button = styled.button`
    display: flex;
    align-items: center;
    width: 100px;
    height: 100px;
    border-radius: 100px 0px 0px 100px;
    border: none;
    background-color: #1F1F1F;

    padding-left: 1px;

    
    &:hover{
        box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
        background-color: #adadad;
       

        svg{
            fill: #1b1b1b;
            }
        }
`
export const SectionProjects = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 40px;
    
    & > svg {
        width: 50px;
        height: 50px;
        margin: 80px 0 20px 0 ;
    }


`

export const ProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 400px;
    max-width: 620px;
    margin-top: 30px;

    background-color: #1B1B1B;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;


    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    padding: 15px 15px 0 15px;


`

export const ProjectDescription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

 
    height: 50%;

    h5{
        font-size: 18px;
        font-weight: bold;
    }

    span{
        font-weight: 100;
    }
     
    a{  
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 40px;
        font-style: normal;
 
        font-size: 14px;
        
        
        color: #adadad;

        background-color: #1f1f1f;
        border-radius: 50px;
        border: 1px solid #adadad;
        margin-top: 30px;

        &:hover{       
            color:  #1f1f1f;
            background-color: #adadad; 
        }
    }

`
export const ImgContainer = styled.div`
    width: 100%;
    height: 250px;
    background-image: url(${KenzieShopProject_300});
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (min-width: 425px){
        background-image: url(${KenzieShopProject_400});
    }

    @media screen and (min-width: 426px){
        background-image: url(${KenzieShopProject_allQueries});
    }

    border-radius: 8px;


`