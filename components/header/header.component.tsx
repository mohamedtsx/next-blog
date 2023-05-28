import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    padding: 5rem 0;
    background-color: var(--header-bg-color);
`;


const NaveRight = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    width: 10rem;
`;

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

const StyledNav = styled.nav`
    ${({theme}) => theme.mixes.flexBetween};
    /* gap: 2rem; */
    /* flex-wrap: wrap; */

    width: 100%;
    padding: 0 2rem;
    margin: auto;
    max-width: 114rem;

    @media only screen and (max-width: 350px) {
        flex-direction: column;
        gap: 1rem;
        align-items: center;

        ${NaveLeft} {
            font-size: 3.2rem;
        }
    }
`


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