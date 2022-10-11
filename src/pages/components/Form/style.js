import styled from "styled-components";

export const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 23px;

    width: 369px;
    max-width: 95%;
    height: 80vh;
    overflow-y: auto;

    background: var(--color-grey-3);
    box-shadow: 0px 4px 40px -10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;

    padding: 42px 22px;


    h2{
        text-align: center;
        font-size: 18px;
        line-height: 28px;

        @media (width < 425px){
            font-weight: 700;
            font-size: 14.439px;
            line-height: 22px;
        }
    }

`