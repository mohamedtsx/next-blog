import styled from "styled-components";
import Image from "next/image";

const StyledFooter = styled.footer`
    width: 100%;
    padding: 20px 30px;
    background-color: var(--header-bg-color);
`;

const StyledContainer = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    gap: 20px;
    flex-wrap: wrap;

    max-width: 1160px;
    margin: auto;
    color: var(--dark-white);
    font-weight: 400;

    @media only screen and (max-width: 350px) {
        justify-content: center;
        flex-direction: column-reverse;
    }
`;

const SocialLIst = styled.ul`
    ${({theme}) => theme.mixes.flexBetween};
    gap: 10px;
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
                   <LiIcon url='#' src='/static/icon-social/youtube-social.png'/>
                   <LiIcon url='#' src='/static/icon-social/twitter-social.png'/>
                </SocialLIst>
            </StyledContainer>
        </StyledFooter>
    )
}

export default Footer;