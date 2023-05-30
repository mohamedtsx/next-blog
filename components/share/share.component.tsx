import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";


export const StyledBlogShare = styled.aside`
    border-top: 1px solid red;
    width: 300px;

    background-color: #eee;

    span {
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
    padding: 50px 0;
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

const shareIcons = [
    'facebook', 
    'tweeter', 
    'linkedin', 
    'reddit', 
    'whatsapp'
];

const BlogShare = () => {

    return(
        <StyledBlogShare>
            <ShareIconsContainer>
                <span>share</span>
                {
                    shareIcons.map(iconName => {
                        return (
                        <Link href="#">
                            <StyledImage 
                                src={`../../static/svg/share-${iconName}.svg`}
                                width={35}
                                height={35}
                                alt={`${iconName}`}
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