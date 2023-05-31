import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";


export const StyledBlogShare = styled.aside`
    width: 300px;

    small {
        text-transform: uppercase;
        font-family: 'Roboto', serif;
        color: var(--text-color);
        font-size: var(--fz-sm);
        font-weight: 400;
    }
`;


const ShareIconsContainer = styled.div`
    ${({theme}) => theme.mixes.flexCenter};
    width: fit-content;
    padding: 25vh 0;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    gap: 20px;

    position: sticky;
    top: 0;
`;

const StyledImage = styled(Image)`
    opacity: 0.7;
    &:hover {
        opacity: 1;
        transform: rotate(-15deg);
    }
`

const shareIcons = {
    facebook: 'https://www.facebook.com/sharer/sharer.php?u=', 
    tweeter: 'https://twitter.com/intent/tweet?url=', 
    linkedin: 'https://www.linkedin.com/shareArticle?mini=true&url=', 
    reddit: 'https://reddit.com/submit?url=', 
    whatsapp: 'whatsapp://send?text='
};

const BlogShare = () => {
    const  router = useRouter();
    const { asPath } = router;


    return(
        <StyledBlogShare>
            <ShareIconsContainer>
                <small>share</small>
                {
                    Object.entries(shareIcons).map(([domain, host]) => {
                        return (
                        <Link href={`${host}${asPath}`}>
                            <StyledImage 
                                src={`../../static/svg/share-${domain}.svg`}
                                width={35}
                                height={35}
                                alt={`${domain}`}
                            />
                        </Link>
                        )
                    })
                }
            </ShareIconsContainer>
        </StyledBlogShare>
    )
}

export default BlogShare;