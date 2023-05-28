import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    :root {
        --header-text-color: #1d2225;
        --header-bg-color: #232323;
        --link-color: #0787dd;
        --dark-white: #ffffffb3;

        --fz-xxs: 1.2rem;
        --fz-xs: 1.3rem;
        --fz-sm: 1.4rem;
        --fz-md:1.6rem;
        --fz-lg: 1.8rem;
        --fz-xl: 2rem;
        --fz-xxl: 2.2rem;
        --fz-heading: 4rem;

        --border-radius: 5px;
        --transition: .15s ease-in-out;
    }
     
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        transition: var(--transition);
    }

    html {
        width: 100%;
        min-height: 100vh;
        overflow-x: hidden;
        font-size: 62.5%;
        scroll-behavior: smooth;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        font-size: var(--fz-md);
        font-weight: 600;
        min-height: 100vh;
        min-width: 30rem;
        overflow-x: hidden;
    }

    main {
        max-width: 116rem;
        min-height: calc(100vh - 13.5rem);
        margin: 0 auto;
        padding: 3rem 1.5rem;
    }

    a {
        color: var(--link-color);
        display: inline-block;
        font-weight: 600;
        position: relative;
        text-decoration: none;
        line-height: 0;
    }

    h1,h2 {
        margin-bottom: 8px;
        line-height: 1.2;
    }

    @media only screen and (max-width: 40em) {
        main {
            padding: 1rem;
        }
    }
`

export default GlobalStyle;