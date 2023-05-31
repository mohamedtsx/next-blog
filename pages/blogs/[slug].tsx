import styled from 'styled-components';
import { BlogMetaData } from '@/components/card/card.component';
import BlogHeader from '@/components/blog-header/blog-header.component'
import { StyledBlogShare } from '@/components/share/share.component';

import Markdown from 'markdown-to-jsx';
import ReadMore from '@/components/readmore/readmore.component';
import BlogShare from '@/components/share/share.component';



type BlogProps = {
    blogContent: {
        content: string;
        data: BlogMetaData
    };
    blogsMetaData: { 
        default: BlogMetaData[] 
    };
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

const Blog = ( BlogProps: BlogProps) => {

    const { 
        blogContent, 
        blogsMetaData: { 
            default: blogsMetaDataArray 
    } } = BlogProps;


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
                blogsArray={blogsMetaDataArray} 
                currentBlogTitle={data.title}
            />
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

    const data = await import('@/utils/get-metadata');  
    const blogsMetaData = JSON.parse(JSON.stringify(data)) as BlogMetaData[];

    return { props: {blogContent, blogsMetaData}};
}



export default Blog;