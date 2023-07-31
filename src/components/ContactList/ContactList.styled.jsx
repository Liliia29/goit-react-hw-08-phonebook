import styled from '@emotion/styled';

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 10px;
    
`;

export const ListItem = styled.li`
    display: flex;
    align-items: center;
    column-gap: 10px;
    color: black;
`;

export const Button = styled.button`
    min-width: 90px;
    padding: 6px 12px;
    
    font-family: inherit;
    font-size: 16px;

    margin: 0;
    margin-left: 80px;


    background-color: #319795;
    border: 2px solid #319795;
    border-radius: 4px;
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

export const NoContacts = styled.p`
    color: black;
`;