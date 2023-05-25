import BlogCard from '@/components/card/card.component';
import styled from 'styled-components';


const sampleData = {
  title: 'Slow start and congestion control (Browser Networking)',
  topic: 'performance',
  date: 'Apr 03,2023',
  id: 1
}

const StyledMain = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(35rem,1fr));
  gap: 1rem;
`

export default function Home() {

  const A = Array(10).fill(sampleData);
  console.log(A)

  return (
    <StyledMain>      
      <BlogCard data={sampleData}/>
    </StyledMain>
  )
}
