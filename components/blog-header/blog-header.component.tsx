import styled from "styled-components"
import Image from "next/image"
import { BlogMetaData } from "../card/card.component";

const Title = styled.h1`
    font-size: 4.75rem;
    color: var(--header-text-color);  
    font-weight: 500;
    margin: 20px 0;
    padding-top: 30px;

    @media only screen and (max-width: 1200px) {
        font-size: 72px;
    } 
    @media only screen and (max-width: 1024px) {
        font-size: 48px;
    }
    @media only screen and (max-width: 480px) {
        font-size: 32px;
        text-align: center;
    }
`;

const TitleContainer = styled.div`
    padding-bottom: 10px;
`;

const MetaData = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 1.125rem;

    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    flex-flow: row nowrap;
    gap: 26px;
    text-transform: capitalize;
    font-weight: 500;

    @media only screen and (max-width: 480px) {
        justify-content: center;
    }
`;

const TopicText = styled.span`
    display: inline-block;
    padding-left: 8px;
    color: #555;
`;
const TopicIcon = styled.div`
    line-height: 0;   
`;

const Date = styled.span`
    color: #9b9eaf;
`;

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