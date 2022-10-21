import styled from "styled-components";

export const StyledModal = styled.div`

    position: fixed;
    inset: 0;
    width: 100%;
    height: 100vh;
    z-index: 101;

    p{
        color: white;
        overflow: unset;
        font-size: 12px;
    }

    .form__modal{
        width:100%;
        height: 100%;

        border-radius: 0 0 4px 4px  ;
        padding: 24px 17px 32px 22px
    }
    .overlay{
        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--color-black30);

        width: 100%;
        height: 100vh;
    }

    .content{
        width: 369px;
        max-width: 95%;
        height: 56vh;
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
     }

     .header__modal{
        width: 100%;
        height: 50px;
        
        background-color: var(--color-grey-2);

        margin: 0px;
        padding: 12px 20px;

        border-radius: 4px 4px 0 0 ;

        h2{
            font-size: 14px;
        }

        @media (width < 425px){
            flex-direction: row;
            justify-content: space-between;

            h2{
                font-size: 12px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }

        button{
            color: var(--color-grey-1);
            font-size: 18px;
        }
     }
`