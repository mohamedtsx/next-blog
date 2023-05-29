import Link from "next/link";
import styled from "styled-components";

const StyledHeader = styled.header`
    width: 100%;
    padding: 50px 0;
    background-color: var(--header-bg-color);
`;


const NaveRight = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    width: 100px;
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
    font-size: 1.5rem;
    color: #fff;
    padding: 3px 0;
`;

const StyledNav = styled.nav`
    ${({theme}) => theme.mixes.flexBetween};

    width: 100%;
    padding: 0 20px;
    margin: auto;
    max-width: 1140px;

    @media only screen and (max-width: 350px) {
        flex-direction: column;
        gap: 10px;
        align-items: center;

        ${NaveLeft} {
            font-size: 2rem;
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