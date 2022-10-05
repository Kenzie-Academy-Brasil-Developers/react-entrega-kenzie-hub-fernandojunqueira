import styled from "styled-components";

export const StyledButton = styled.button`

    color: ${props => props.color};
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    
    :focus{
        outline: 1px solid var(--color-grey-0);

    }

    @media (width < 425px){
        font-weight: 500;
        font-size: 13px;
        line-height: 21px;
    }

    background-color: ${props => props.background};

    height: 48px;
    
    border-radius:4px;

    
    

`