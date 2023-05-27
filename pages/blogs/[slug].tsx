import styled from 'styled-components';
import { BlogMetaData } from '@/components/card/card.component';
import BlogHeader from '@/components/blog-header/blog-header.component'

import Markdown from 'markdown-to-jsx';
import ReadMore from '@/components/readmore/readmore.component';

type BlogProps = {
    blogContent: {
        content: string;
        data: BlogMetaData
    }
}

export const StyledBlog = styled.main`
    font-family: 'Lora', serif;
    padding-top: 0;
`

const Article = styled.article`
    margin-top: 4rem;
`

const Blog = ({ blogContent }: BlogProps) => {

    const { content, data } = blogContent;

    return(

        <StyledBlog>
            <BlogHeader metaData={data}/>
            <Article>
                <Markdown>{content}</Markdown>
            </Article>
            <ReadMore />
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