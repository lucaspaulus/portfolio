import styled from "styled-components";

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
    
    img{
        filter: grayscale(1);
        z-index: -1;
        border: 3px solid #1f1f1f;
        border-radius: 45%;
    }


`

export const container = styled.div`
    display: flex;
    align-items: flex-end ;
    justify-content: space-evenly;
    height: 50px;

    svg{
        width: 14px;
        height: 18px;
        margin-bottom: 5px;

    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0 20px;
    }

    p{
        //margin-right: 20px;
        font-weight: 100;
        font-size: 14px;
    }
`
export const rightCol = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    min-width: 200px;
    max-width: 400px;
    padding: 0 40px;
    height: 100vh;
     

    h1{
        font-size: 16px;
        margin-bottom: -25px;
 
 
    }

    & > p{
        font-size: 12px;
        margin-top: 25px;
        font-weight: lighter;
        line-height: 20px;
        padding-left: 10px;
    }

    & > svg{
        width: 25px;
        margin: 10px 0;
    }

    & > a{
        width: 200px;
        height: 50px;
        border-radius: 50px;
        border: none;
        margin-top: 20px;
        background-color: #1f1f1f;
        color: #adadad;
        font-weight: lighter;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        font-size: 14px;

        svg{
            width: 14px;
            height: 14px;
        }

        &:hover{
            background-color: #adadad;
            color: #1f1f1f;
            font-weight: bold;

            svg{
                fill: #1f1f1f;
            }
        }
    }
    
`

export const leftCol = styled.div`
    display: flex;
    justify-content: center;
    margin-bottom: 15px;
    margin-top: 20vh;

    img{
        width: 50%;
    }
 

`

 