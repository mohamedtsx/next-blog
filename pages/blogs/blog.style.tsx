import styled from "styled-components"


export const Title = styled.h1`
    font-size: 7.6rem;
    color: var(--header-txt-color);
    font-weight: 500;
    margin: 2rem 0;
    padding-top: 3rem;
`


export const TitleContainer = styled.div`
    padding-bottom: 1rem;
`

export const MetaData = styled.div`
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

export const TopicText = styled.span`
    display: inline-block;
    padding-left: 0.8rem;
    color: #555;
`
export const TopicIcon = styled.div`
    line-height: 0;   
`

export const Date = styled.span`
    color: #9b9eaf;
`

export const Topic = styled.div`
    ${({theme}) => theme.mixes.flexBetween}
`
