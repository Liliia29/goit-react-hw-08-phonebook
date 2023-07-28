import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-right: 20px;
`;

export const StyledLink = styled(NavLink)`
    display: inline-block;
    text-decoration: none;
    font-weight: 700;
    padding: 12px 0;

    &.active{
    color: white;
    }

    &:hover,
    &:focus{
    color: white;
    }
`;

 