import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

import LinkedinSVG from '@/static/svg/linkedin.svg';
import WhatsappSVG from '@/static/svg/whatsapp.svg';
import GithubSVG from '@/static/svg/github.svg';
import GmailSVG from '@/static/svg/gmail.svg';

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
    font-weight: 400;
`

const StyledContact = styled.div`
    ${({theme}) => theme.mixes.flexBetween};
    width: 10rem;
`;

const About = () => {

    return(
        <StyledMain>
            <Title>Hi, I'm Mohamed 👋 &nbsp;</Title>
            <br/>
            <p>
                I am a computer science student and frontend developer with experience building web applications using ReactJS and other JavaScript technologies. I have a passion for coding and building software solutions. In my free time, I like to write blog posts to share my knowledge with the community and document my learning journey.
                <br/><br/>
                My goal with this blog is to write about web development, JavaScript, ReactJS, and other topics that I am exploring. I hope these posts provide value to other developers and students. I am continuously learning and improving my craft, so my posts represent my current knowledge - but I have much more to learn. Feel free to provide feedback or start a discussion on any of my posts.
                <br/><br/>
                When I'm not coding or writing blog posts, you can find me reading about new technologies, spending time with friends and family, or staying active by going on hikes. I believe maintaining a work-life balance is important for sustained creativity and productivity.
            </p>
            <SubTitle>Say Hello: </SubTitle>
            <StyledContact>
                <a href="mailto:mohamedtsx@gmail.com" target="_blank">
                    <Image src={GmailSVG} width={30} height={30} alt="gmail" />
                </a>
                <a href="https://linkedin.com/in/mohamedtsx" target="_blank">
                    <Image src={LinkedinSVG} width={30} height={30} alt="linkedin" />
                </a>
                <a href="https://wa.me/01102687520" target="_blank">
                    <Image src={WhatsappSVG} width={30} height={30} alt="whatsapp" />
                </a>
            </StyledContact>

        </StyledMain>
    )
}

export default About;