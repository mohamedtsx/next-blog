import fs from 'fs';
import matter from 'gray-matter';
import { BlogMetaData } from '@/components/card/card.component'


const getBlogsMetaDate = (): BlogMetaData[] => {
    const files = fs.readdirSync('posts/');
    const markdownBlogs = files.filter(file => file.endsWith('.md'));
  
    return markdownBlogs.map(fileName => {
      const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf-8');
      const matterResults = matter(fileContents);
      const {title, date, topic} = matterResults.data;
      
      return ({ title, date, topic, slug: fileName.replace(".md", "") });
    });
}

const blogsMetaData = getBlogsMetaDate();  

export const paths = blogsMetaData.map(el => (
  {
    params: {
      slug: el.slug
    }
  }
));


export default blogsMetaData;