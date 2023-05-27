import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export type BlogMetaData = {
    title: string;
    date: string;
    topic: string;
    slug: string;
}

const StyledLink = styled(Link)`
    height: 17rem;
    width: 100%;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 8px 2px;
    }
`;

const Meta = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    font-size: var(--fz-sm);
    font-weight: 400;
    opacity: 0.8;

    >*:first-child {
        ${({theme}) => theme.mixes.flexCenter};
    }

    img {
        margin-right: 4px;
    }
`;

const CardContainer = styled.div`
    color: var(--header-text-color);
    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    padding: 2rem;
    border: 1px solid var(--header-text-color);
    border-radius: var(--border-radius);

    &:hover {
        ${Meta} {
            opacity: 1;
        }
    }

`;

const Title = styled.h1`
    margin-bottom: 2rem;
    font-size: var(--fz-xl);
    font-weight: 500;
`;

const Article = styled.article`
    font-family: 'Roboto', sans-serif;
    margin-top: 2rem;
    padding: 0 1.2rem;
`

type BlogCardProps = {
    data: BlogMetaData;
}

const BlogCard = ({data}: BlogCardProps) => {
    const { title, date, topic, slug} = data;

    return(
        <Article>
            <StyledLink href={`/blogs/${slug}`}>
                <CardContainer>
                    <Title>{title}</Title>
                    <Meta>
                        <div>
                            <Image 
                                src={`/static/icon-topic/${topic}-topic.png`}
                                alt={`${topic}`}
                                width={20}
                                height={20}
                            />
                            {topic}
                        </div>
                        <div>{date}</div>
                    </Meta>
                </CardContainer>
            </StyledLink>
        </Article>

    )
}

export default BlogCard;