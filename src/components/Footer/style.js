import styled from "styled-components";


export const Footer = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 190px;
     
    box-shadow: 0px -4px 4px rgb(0 0 0 / 25%);
    margin-top: auto;

    flex-shrink: 0;

   

`

export const leftCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
   // width: 50%;
    padding: 0 40px;

    h6{
        font-size: 14px;
    }

    p{
        font-size: 12px;
        margin-top: 10px;
        text-align: center;
        line-height: 1.35;
    }

    svg{
        width: 25px;
        margin: 10px 0;
    }
    
`

export const rightCol = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    padding-bottom: 12px;



`


export const container = styled.div`
    display: flex;
    align-items: flex-end;
   // margin: 0 20px;
    a{
        display: flex;
        justify-content: center;
        align-items: flex-end;
        margin: 0 20px;
    }
    svg{
        width: 14px;
        height: 18px;
        margin-right: 5px;
    }

    p{
        font-weight: lighter;
        
    }
`