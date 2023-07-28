import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-left: 12px;
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
