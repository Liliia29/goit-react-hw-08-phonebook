import styled from '@emotion/styled';
import { ErrorMessage, Field, Form } from 'formik';

export const StyledForm = styled(Form)`
    margin-bottom: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
`;

export const Label = styled.label`
    display: flex;
    flex-direction: column;
    row-gap: 3px;
    color: black;
    min-width: 300px;
    min-height: 30px;
`;

export const Input = styled(Field)`
    min-height: 300px;
    min-height: 30px;
    padding: 2px 6px;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
`;

export const Button = styled.button`
    padding: 5px 10px;
    font-family: inherit;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;

    min-width: 140px;
    min-height: 30px;
    margin: 0;

    background-color: white;
    border: 2px solid black;
    border-radius: 5px;
    cursor: pointer;

    &:hover{
    color: white;
    background-color: black;
    border-color: white;
    }
`;

export const StyledError = styled(ErrorMessage)`
    font-size: 14px;
    cursor: black;
    max-width: 300px;
`;