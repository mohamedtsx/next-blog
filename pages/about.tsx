import styled from "styled-components";

const Title = styled.h1`
    font-family: inherit;
    font-weight: inherit;
    font-size: 4rem;

`

const StyledMain = styled.main`
    font-family: 'Lora', serif;
    font-size: var(--fz-xl);
    font-weight: 500;
    
    color: var(--header-text-color);
    padding: 5rem 1.5rem;
`

const SubTitle = styled.h2`
    font-family: 'Roboto', sans-serif;
    font-size: var(--fz-xl);
    margin-top: 4.8rem;
`
const About = () => {

    return(
        <StyledMain>
            <Title>Hi, I'm Mohamed 👋</Title>
            <br/>
            <p>
                I am a computer science student and frontend developer with experience building web applications using ReactJS and other JavaScript technologies. I have a passion for coding and building software solutions. In my free time, I like to write blog posts to share my knowledge with the community and document my learning journey.
                <br/><br/>
                My goal with this blog is to write about web development, JavaScript, ReactJS, and other topics that I am exploring. I hope these posts provide value to other developers and students. I am continuously learning and improving my craft, so my posts represent my current knowledge - but I have much more to learn. Feel free to provide feedback or start a discussion on any of my posts.
                <br/><br/>
                When I'm not coding or writing blog posts, you can find me reading about new technologies, spending time with friends and family, or staying active by going on hikes. I believe maintaining a work-life balance is important for sustained creativity and productivity.
            </p>
            <SubTitle>Say Hello: </SubTitle>
        </StyledMain>
    )
}

export default About;