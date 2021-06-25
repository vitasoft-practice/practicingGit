import { StyledNav, StyledNavElementContainer, StyledNavElement } from "../styledComponents/navBar";
import Link from 'next/link';


const NavBar = () => {

    return (
        <StyledNav>
            <StyledNavElementContainer>
                <StyledNavElement>
                    <Link href="/Buttons">Buttons</Link>
                </StyledNavElement>
                <StyledNavElement>
                    <Link href="/InputField">Input</Link>
                </StyledNavElement>
                <StyledNavElement>
                    <Link href="/TextField">TextField</Link>
                </StyledNavElement>
                <StyledNavElement>
                    <Link href="/RadioButtons">RadioButtons</Link>
                </StyledNavElement>
                <StyledNavElement>
                    <Link href="/Checkboxes">Checkboxes</Link>
                </StyledNavElement>
            </StyledNavElementContainer>
        </StyledNav>
    )
}
export default NavBar;