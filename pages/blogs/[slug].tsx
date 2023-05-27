import { BlogMetaData } from '@/components/card/card.component';
import styled from 'styled-components';
import Image from 'next/image';
import Markdown from 'markdown-to-jsx';

type BlogProps = {
    blogContent: {
        content: string;
        data: BlogMetaData
    }
}

const StyledTitle = styled.h1`
    font-size: 7.6rem;
    color: var(--header-txt-color);
    font-weight: 500;
    margin: 2rem 0;
    padding-top: 3rem;
`
const StyledBlog = styled.main`
    font-family: 'Lora', serif;
    padding-top: 0;

`

const TitleContainer = styled.div`
    padding-bottom: 1rem;
`

const MetaData = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 2.6rem;
    text-transform: capitalize;
    font-weight: 500;
`

const TopicText = styled.span`
    display: inline-block;
    padding-left: 0.8rem;
    color: #555;
`
const TopicIcon = styled.div`
    line-height: 0;
    
`

const Date = styled.span`
    color: #9b9eaf;
`

const Topic = styled.div`
    ${({theme}) => theme.mixes.flexBetween}
`

const Article = styled.article`
    margin-top: 4rem;
`

const Blog = ({ blogContent }: BlogProps) => {

    const { content, data } = blogContent;

    return(
        <StyledBlog>
            <TitleContainer>
                <StyledTitle>{data.title}</StyledTitle>
            </TitleContainer>
            <MetaData>
                <Topic>
                    <TopicIcon>
                        <Image 
                            src={`/static/icon-topic/${data.topic}-topic.png`}
                            alt={`${data.topic}`}
                            width={22}
                            height={22}
                        />
                    </TopicIcon>
                    <TopicText>{data.topic}</TopicText>
                </Topic>
                <Date>{data.date}</Date>
            </MetaData>
            <Article>
                <Markdown>{content}</Markdown>
            </Article>
        </StyledBlog>
    );
}

export async function getStaticPaths() {
    const { paths } = await import('@/utils/get-metadata');
    return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
    const { params: { slug } } = context;  


    const getBlogContent = await import("@/utils/get-blogcontent");
    const blog = getBlogContent["default"](slug);
    const blogContent = JSON.parse(JSON.stringify(blog));

    return { props: {blogContent}};
}



export default Blog;