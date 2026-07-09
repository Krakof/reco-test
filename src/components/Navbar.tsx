import {NavLink} from "react-router";
import styled from "styled-components";
import {PATHS} from "../router/paths.ts";

export const Navbar = () => {
    return (
        <Navigation>
            <NavLinkStyled to={PATHS.MAIN}>Apps Discovery</NavLinkStyled>
            <NavLinkStyled to={PATHS.INVENTORY}>Apps Inventory</NavLinkStyled>
            <NavLinkStyled to={PATHS.SETTINGS}>Settings</NavLinkStyled>
        </Navigation>
    );
}

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
const NavLinkStyled = styled(NavLink)`
    color: #ffffff;
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px;
    border-left: 1px solid transparent;
    
    &.active {
        border-left: 1px solid greenyellow;
    }
`