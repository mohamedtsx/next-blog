import fs from 'fs';
import matter from 'gray-matter';


const getBlogContent = (slug: string) => {
    const content = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const matterResult = matter(content);
    return matterResult;
}

export default getBlogContent;