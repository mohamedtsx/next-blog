import styled from "styled-components"
import Image from "next/image"
import { BlogMetaData } from "../card/card.component";

const Title = styled.h1`
    font-size: 7.6rem;
    color: var(--header-txt-color);
    font-weight: 500;
    margin: 2rem 0;
    padding-top: 3rem;
`;

const TitleContainer = styled.div`
    padding-bottom: 1rem;
`

const MetaData = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1.8rem;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 2.6rem;
    text-transform: capitalize;
    font-weight: 500;
`

const TopicText = styled.span`
    display: inline-block;
    padding-left: 0.8rem;
    color: #555;
`
const TopicIcon = styled.div`
    line-height: 0;   
`

const Date = styled.span`
    color: #9b9eaf;
`

const Topic = styled.div`
    ${({theme}) => theme.mixes.flexBetween}
`

type BlogHeaderProps = {
    metaData: BlogMetaData
}

const BlogHeader = ({ metaData }: BlogHeaderProps) => {
    const {title, topic, date} = metaData;
    
    return(
        <header>
            <TitleContainer>
                <Title>{title}</Title>
            </TitleContainer>
            <MetaData>
                <Topic>
                    <TopicIcon>
                        <Image 
                            src={`/static/icon-topic/${topic}-topic.png`}
                            alt={`${topic}`}
                            width={22}
                            height={22}
                        />
                    </TopicIcon>
                    <TopicText>{topic}</TopicText>
                </Topic>
                <Date>{date}</Date>
            </MetaData>
        </header>
    )
}

export default BlogHeader;