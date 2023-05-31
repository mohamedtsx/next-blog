import styled from 'styled-components';
import { BlogMetaData } from '@/components/card/card.component';
import BlogHeader from '@/components/blog-header/blog-header.component'
import { StyledBlogShare } from '@/components/share/share.component';

import Markdown from 'markdown-to-jsx';
import ReadMore from '@/components/readmore/readmore.component';
import BlogShare from '@/components/share/share.component';

import { paths } from '@/utils/get-metadata';
import getBlogContent from '@/utils/get-blogcontent';
import blogsMetaData from '@/utils/get-metadata';


type BlogProps = {
    blogContent: {
        content: string;
        data: BlogMetaData
    };
    blogsMetaData: BlogMetaData[];
}

export const StyledBlog = styled.main`
    font-family: 'Lora', serif;
    padding-top: 0;
`

const Article = styled.article`
    flex-grow: 1;
    overflow-x: auto;
`

const BlogMain = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 40px;

    @media only screen and (max-width: 1200px) {
        justify-content: center;
        ${StyledBlogShare} {
           display: none;
        }
    }
`;


export async function getStaticPaths() {
    return { paths, fallback: false };
}

export async function getStaticProps(context: any) {
    const { params: { slug } } = context; 
    const blog = getBlogContent(slug);
    
    const blogContent = JSON.parse(JSON.stringify(blog));
    const data = JSON.parse(JSON.stringify(blogsMetaData)) as BlogMetaData[];
    
    return { props: {blogContent, blogsMetaData: data}};
}

const Blog = ( BlogProps: BlogProps) => {

    const { 
        blogContent, 
        blogsMetaData
    } = BlogProps;

    const { content, data } = blogContent;



    return(
        <StyledBlog>
            <BlogHeader metaData={data}/>
            <BlogMain>
                <Article className='
                   prose 
                   lg:prose-xl 
                   max-w-none 
                   md:text-xl  
                   sm:prose-sm 
                   font-normal 
                   text-gray-900 
                '>
                    <Markdown>{content}</Markdown>
                </Article>
                <BlogShare />
            </BlogMain>
            <ReadMore 
                blogsArray={blogsMetaData} 
                currentBlogTitle={data.title}
            />
        </StyledBlog>
    );
}


export default Blog;