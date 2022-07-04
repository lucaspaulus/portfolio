import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    position: fixed;
    background-color: #161616;
    box-shadow: ${({navBorder})=> navBorder === true ? "0px 4px 4px rgba(0, 0, 0, 0.25)" : "none" };

    .logo{
        width: 35px;
    }

    svg{
        
        cursor: pointer;
    }

    z-index: 99;

`

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
 
    padding: 0 40px;
   


`

export const MenuDesktop = styled.div`
    display: none;
    justify-content: space-between;
    align-items: center;
    margin-right: 20px;
 

    a{  
        font-weight: bold;
        font-size: 18px;
        margin-right: 15px;
    }

    @media screen and (min-width: 700px){
        display: flex;


    }

`
export const MenuContainerTop = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 0 40px;
    .menuMobile{
         
        cursor: pointer;
    }

    .logo{
        width: 25px;
    }

`
export const MenuMobile = styled.div`
    visibility: ${({menuMobile}) => menuMobile === true ? "visibility" : "hidden"};
    background-color: #1B1B1B;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    right: 0;
    top: 0;
     
    height: 100vh;
    border-left: 10px solid #3333331f;
    margin-left: 5px;
    transform: translateX(${({menuMobile}) => menuMobile === true ? "0" : "200px"}) ; 
    transition: all 500ms linear;

    & > a{
        display: flex;
        align-items: center;
        color: #adadad;
        margin: 0 10px;
        font-size: 12px;
        font-weight: bolder;
        width: 80%;
        height: 40px;
        padding-left: 10px;
        border-bottom: 1px solid #4d4d4d;

        &:hover{
            box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
            background-color: #adadad;
            color: #1b1b1b;
        }
       
    }


`
export const Container = styled.div`
    display: flex;
    justify-content: space-between;
     

`
export const ContainerIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50px;

    svg{
        cursor: pointer;
    }

    .menuMobile--Visibility{
        @media screen and (min-width: 700px){
            display: none;

        }

        
    }
 
`