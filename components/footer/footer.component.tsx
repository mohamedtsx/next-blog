import styled from "styled-components";
import Image from "next/image";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 2rem 3rem;
    background-color: var(--header-bg-color);
`;

const StyledContainer = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    max-width: 116rem;
    margin: auto;
    color: var(--dark-white);
    font-weight: 400;
`;

const SocialLIst = styled.ul`
    ${({theme}) => theme.mixes.flexBetween};
    gap: 1rem;
    list-style: none;

    img {
        opacity: 0.7;
        &:hover {
            opacity: 1;
        }
    }

`;


type LiIconProps = {
    url: string;
    src: string;
}

const LiIcon = ({url, src}: LiIconProps) => {
    return(
        <li>
            <a href={url}>
                <Image
                    src={src}
                    width={16}
                    height={16}
                    alt="media"
                />
            </a>
        </li>
    )
}

const Footer = () => {

    return(
        <StyledFooter>
            <StyledContainer>
                <div>2023 &copy; Mohamed Khalid</div>
                <SocialLIst>
                   <LiIcon url='https://linkedin.com/in/mohamedtsx' src='/static/icon-social/linkedin-icon.png'/>
                   <LiIcon url='https://github.com/mohamedtsx' src='/static/icon-social/github-icon.png'/>
                   <LiIcon url='https://google.com' src='/static/icon-social/youtube-social.png'/>
                   <LiIcon url='https://google.com' src='/static/icon-social/twitter-social.png'/>
                </SocialLIst>
            </StyledContainer>
        </StyledFooter>
    )
}

export default Footer;