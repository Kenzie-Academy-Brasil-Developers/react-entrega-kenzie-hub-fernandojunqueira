import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    /* height: 100vh; */

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 20px;

    div{
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-top: 30px;
        margin-bottom: 25px;

        width: 369px;
        max-width: 95%;
    }

    div > button{
        font-weight: 600;
        font-size: 12px;
        line-height: 28px;
        color: var(--color-grey-0);

        border-radius: 4px;

        padding: 6px 16px;

        background-color: var(--color-grey-3);

        @media(width < 425px){
            padding: 4px 21px;

            font-weight: 600;
            font-size: 10px;
            line-height: 23px;
        }
    }

    h1{
        font-size: 26px;
        color: var(--color-primary);

        @media (width < 425px){
            font-weight: 700;
            font-size: 18px;
        }
    }
    span{
        font-weight: 600;
        font-size: 12px;
        line-height: 18px;

        color: var(--color-grey-1);
        
        text-align: center;

        margin-top: 10px;

        @media (width < 425px){
            font-weight: 600;
            font-size: 10px;
            line-height: 14px;
        }

        
    }

    select{
        min-height:48px;

        color: var(--color-grey-1);
        font-weight: 400;
        font-size: 16.2426px;
        line-height: 26px;

        background-color: var(--color-grey-2);

        border: 1px solid var(--color-grey-2);
        border-radius: 4px;
        padding-left: 16px;

        @media (width < 425px){
            font-weight: 400;
            font-size: 13px;
            line-height: 21px;
        }

        ::placeholder{
            color: var(--color-grey-1);
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;

            @media (width < 425px){
            font-weight: 400;
            font-size: 13px;
            line-height: 21px;
        }   
        }
        :focus{
            border: 1px solid var(--color-grey-0);
            color: var(--color-grey-0);
            font-weight: 400;
            font-size: 16px;
            line-height: 26px;
            outline:none;

            @media (width < 425px){
            font-weight: 400;
            font-size: 13px;
            line-height: 21px;
        }
        }
        /* :hover{
           
            
        } */
    }
`

export const StyledLinkVoltar = styled(Link)`
    
    font-weight: 600;
    font-size: 12px;
    line-height: 28px;
    color: var(--color-grey-0);
    border-radius: 4px;
    padding: 6px 16px;
    background-color: var(--color-grey-3);
    text-decoration: none;

`