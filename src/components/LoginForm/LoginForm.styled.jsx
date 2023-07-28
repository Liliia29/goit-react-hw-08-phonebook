import styled from "@emotion/styled";
import { Field, Form, ErrorMessage } from "formik";

export const StyledForm = styled(Form)`
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    align-items: center;
    padding: 20px;
    border-radius: 5px;
    max-width: 350px;
    background-color: #EDF2F7;
    border: 2px solid black;
    
`;

export const Label = styled.label`
    
    display: flex;
    flex-direction: column;
    row-gap: 2px;
    color: #2D3748;
    max-width: 300px;
`;

export const Input = styled(Field)`
    min-width: 300px;
    min-height: 30px;
    padding: 1px 5px;
    font-size: 16px;
    outline: none;
    border-radius: 5px;
    border-width: 0;
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
    margin-top: 20px;

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
    transform: scale(1.02);
    }
`;

export const StyledError = styled(ErrorMessage)`
    font-size: 14px;
    color: black;
    max-width: 300px;
`;
  