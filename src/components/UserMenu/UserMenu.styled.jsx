import styled from "@emotion/styled";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-right: 12px;
`;

export const UserText = styled.p`
    font-weight: 700;
`;

export const AccentText = styled.span`
    color: black;
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

    background-color: black;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;
    
    &:hover{
    color: black;
    background-color: black;
    border-color: white;
    }
`;


 