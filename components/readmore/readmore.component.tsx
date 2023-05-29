import styled from "styled-components";
import { BlogsContainer } from "@/pages";
import { BlogMetaData } from "../card/card.component";
import BlogCard from "../card/card.component";



const getRandom3Blogs = (arr: BlogMetaData[], currentBlogTitle: string) => {
    let len = arr.length;
    let result: BlogMetaData[] = new Array();

    while(result.length < 3 && len>3) {
        let x = Math.floor(Math.random() * len);
        let isTaken = result.find(el => el === arr[x]);  
        
        if(!isTaken && currentBlogTitle !== arr[x].title) {
            result.push(arr[x]);
        }
    }

    return result;
}; 

type ReadMoreProps = {
    blogsArray: BlogMetaData[];
    currentBlogTitle: string;
}


const ReadMoreContainer = styled.div`
    line-height: 40px;
`
const ReadMoreTitle = styled.h3`
    font-size: calc(20px + .6vw);
    font-weight: 500;
    border-top: 1px solid #eee;

    margin-top: 20px;
    padding-top: 20px;
    color: #777777;
`

const StyledBlogsContainer = styled(BlogsContainer)`
    margin: 0 -12px;
`

const ReadMore = ({ blogsArray, currentBlogTitle }: ReadMoreProps) => {

    
    const randomBlogs = getRandom3Blogs(blogsArray, currentBlogTitle);
    

    return(
        <ReadMoreContainer>
            <ReadMoreTitle>Read more</ReadMoreTitle>
            <StyledBlogsContainer>
                {
                    randomBlogs.map(el => {
                        return <BlogCard key={el.title} data={el} />
                    })
                }
            </StyledBlogsContainer>
        </ReadMoreContainer>
    )
}

export default ReadMore;