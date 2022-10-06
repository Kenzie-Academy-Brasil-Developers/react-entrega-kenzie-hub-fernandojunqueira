import styled from "styled-components";

export const StyledDivContainerForm = styled.div`
    /* height: 100vh; */

    margin-top: 15px;
    margin-bottom: 16px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1{
        font-size: 26px;
        color: var(--color-primary);
        margin-bottom: 36px;

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
`

