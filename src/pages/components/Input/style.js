import styled from "styled-components";

export const StyledInput = styled.input`

    height:48px;

    color: var(--color-grey-0);
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

        @media (width < 425px){
        font-weight: 400;
        font-size: 13px;
        line-height: 21px;
    }
        
    }
`