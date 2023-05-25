import styles from '@/styles/Home.module.css'

import styled from 'styled-components';
import BlogCard from '@/components/card/card.component';

const sampleData = {
  title: 'Slow start and congestion control (Browser Networking)',
  topic: 'performance',
  date: 'Apr 03,2023',
  id: 1
}

export default function Home() {
  return (
    <>
      <main>
        <BlogCard data={sampleData}/>
      </main>
    </>
  )
}
