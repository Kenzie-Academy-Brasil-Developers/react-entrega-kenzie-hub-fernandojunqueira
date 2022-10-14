import { Link } from "react-router-dom";
import styled from "styled-components";

export const ContainerDash = styled.div`

    background-color: var(--color-grey-4);
    height: 100vh;
    
    .container{
        width: 100%;
        border-bottom: 1px solid var(--color-grey-3);
        
    }
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        width: 800px;
        margin: 0 auto;
        height: 73px;
        max-width: 95%;

        
    }

    nav > button{
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: var(--color-grey-0);

        border-radius: 4px;

        padding: 2px 16px;

        background-color: var(--color-grey-3);

        @media(width < 425px){
            padding: 4px 21px;

            font-weight: 600;
            font-size: 10px;
            line-height: 23px;
        }
    }

    header{
        display: flex;
        justify-content: space-between;
        align-items: center;

        width: 800px;
        max-width: 95%;
        height: 118px;

        margin: 0 auto;

        @media (width < 425px){
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            gap: 10px;

            height: 131px;
            width: 95%;
            margin: 0 auto;
        }

    }

    main{
        width: 800px;
        max-width: 95%;
        height: 118px;

        margin: 0 auto;

    }

    h1{
        font-size: 19px;
        color: var(--color-primary);

        @media (width < 425px){
            font-weight: 700;
            font-size: 18px;
        }
    }

    h2{
        font-weight: 700;
        font-size: 18px;
        line-height: 28px;
        color: var(--color-grey-0);
    }

    p{
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;

        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    span{
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        color: var(--color-grey-1);

    }

    
`
export const StyledList = styled.ul`
    background-color: var(--color-grey-3);
    border-radius: 4px;

    max-height: 49vh;
    overflow-y: auto;   

    display: flex;
    flex-direction: column;
    gap: 16px;

    padding: 23px;
    margin-top: 15px;
`
export const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;

    padding: 12px 25px;
    border-radius: 4px;

    background-color: var(--color-grey-4);

    img{
        cursor: pointer;
    }
    img:hover{
        transform: scaleY(1.1);
    }

    div{
        display: flex;
        align-items: center;
        gap: 26px;

        img{
            width: 13px;
            height: 12px;
        }
    }
`
export const ButtonLinkRegister = styled(Link)`

    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: var(--color-grey-0);
    border-radius: 4px;
    padding: 6px 16px;
    background-color: var(--color-grey-3);
    text-decoration: none;
`
export const StyledMain = styled.main`
    .tech{
        display: flex;
        justify-content: space-between;

        margin-top: 11px;
    }

    button{
        background-color: var(--color-grey-3);
        color: white;

        font-size: 20px;
        font-weight: 500;

        width: 32px;
        height: 32px;
        padding: 12px;

        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
    }
`