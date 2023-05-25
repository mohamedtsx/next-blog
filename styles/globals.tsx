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
        --fz-xxl: 2.4rem;
        --fz-heading: 3.2rem;

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
        width: 100%;
        height: 100%;
        overflow-x: hidden;
    }

    main {
        max-width: 114rem;
        min-height: calc(100vh - 13.5rem);
        margin: 0 auto;
        padding: 3rem 1.5rem;

        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(35rem,1fr));
        gap: 1rem;
    }

    a {
        color: var(--link-color);
        display: inline-block;
        font-weight: 600;
        position: relative;
        text-decoration: none;
    }


    @media only screen and (min-width: 140em) {
        /* main {
            max-width: 132rem;
        } */
    }
`

export default GlobalStyle;