import styled from 'styled-components';
import BlogCard from '@/components/card/card.component';
import { BlogMetaData } from "@/components/card/card.component"



export const BlogsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem,1fr));
  gap: 1rem;
`

type HomeProps = {
  blogsMetaData:  { 
    default: BlogMetaData[] 
  };
  
}

export default function Home(props: HomeProps) {
  const { blogsMetaData: { default: blogsMetaDataArray }} = props;

  return (
    <main>
      <BlogsContainer>
        {
          blogsMetaDataArray ? 
          blogsMetaDataArray.map(el => <BlogCard key={el.slug} data={el}/>)
          : <h1>Pending...</h1>
        }
      </BlogsContainer>
    </main>
  )
}


export async function getStaticProps() {
  const blogsMetaData = await import('@/utils/get-metadata');  
  const data = JSON.parse(JSON.stringify(blogsMetaData)) as BlogMetaData[];
  return { props: {blogsMetaData: data }};
}