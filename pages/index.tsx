import styled from 'styled-components';
import BlogCard from '@/components/card/card.component';
import { BlogMetaData } from "@/components/card/card.component"



const sampleData = {
  title: 'Slow start and congestion control (Browser Networking)',
  topic: 'performance',
  date: 'Apr 03,2023',
  slug: 'aws'
}

const StyledMain = styled.main`
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
  const {blogsMetaData: { default: blogsMetaDataArray }} = props;

  return (
    <StyledMain>
      {
        blogsMetaDataArray ? 
        blogsMetaDataArray.map(el => <BlogCard key={el.slug} data={el}/>)
        : <h1>Pending...</h1>
      }
    </StyledMain>
  )
}

export async function getStaticProps() {
  const blogsMetaData = await import('@/utils/get-metadata');  
  const data = JSON.parse(JSON.stringify(blogsMetaData)) as BlogMetaData[];
  return { props: {blogsMetaData: data }};
}