import styled from 'styled-components';
import BlogCard from '@/components/card/card.component';
import Layout from '@/components/layout/layout.component';


const sampleData = {
  title: 'Slow start and congestion control (Browser Networking)',
  topic: 'performance',
  date: 'Apr 03,2023',
  id: 1
}

export default function Home() {

  const A = Array(10).fill(sampleData);
  console.log(A)

  return (
    <Layout>
      <main>      
        <BlogCard data={sampleData}/>
      </main>
    </Layout>
  )
}
