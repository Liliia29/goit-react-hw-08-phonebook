import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 12px;
`;

export const UserText = styled.p`
    font-weight: 700;
    color: white;
`;

export const AccentText = styled.span`
    color: white;
`;

export const Button = styled.button`
    padding: 5px 10px;
    font-family: inherit;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;

    min-width: 80px;
    min-height: 30px;
    margin: 0;

    background-color: #319795;
    border: 2px solid #319795;
    border-radius: 5px;
    cursor: pointer;

    transition: color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    background-color 250ms cubic-bezier(0.65, 0.05, 0.36, 1),
    border-color color 250ms cubic-bezier(0.65, 0.05, 0.36, 1);
    
    
    &:hover{
    color: white;
    background-color: #2C7A7B;
    border-color: #2C7A7B;
    }
`;


 