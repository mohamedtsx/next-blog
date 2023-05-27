import { BlogMetaData } from '@/components/card/card.component';
import { GetStaticPropsContext } from 'next';

type BlogProps = {
    blogContent: {
        content: string;
        data: BlogMetaData
    }
}

const Blog = ({ blogContent }: BlogProps) => {

    const { content, data } = blogContent;

    return(
        <main>
            <h1>{data.title}</h1>
        </main>
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