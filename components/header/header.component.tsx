import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    padding: 5rem 0;
    background-color: var(--header-bg-color);
`
const StyledNav = styled.nav`
    ${({theme}) => theme.mixes.flexBetween};
    width: 100%;
    padding: 0 2rem;
    margin: auto;
    max-width: 114rem;
`


const NaveRight = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    width: 10rem;
`

const StyledLink = styled(Link)`
    font-size: var(--fz-lg);
    font-weight: 500;
    color: var(--dark-white);
    line-height: 1.2;
    
    &:focus {
        color: #fff;
    }
    
`;
const NaveLeft = styled(StyledLink)`
    font-size: 2.4rem;
    color: #fff;
    padding: 3px 0;
`;


const Header = () => {

    return(
        <StyledHeader>
            <StyledNav>
                <NaveLeft href='/'>Mohamed Khalid</NaveLeft>
                <NaveRight>
                    <StyledLink href='/about'>About</StyledLink>
                    <StyledLink href='/'>Blog</StyledLink>
                </NaveRight>
            </StyledNav>
        </StyledHeader>
    )
}

export default Header;