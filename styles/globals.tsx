import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`
    
    :root {
        --header-text-color: #1d2225;
        --header-bg-color: #232323;
        --link-color: #0787dd;
        --dark-white: #ffffffb3;

        --fz-xxs: 0.75rem;      
        --fz-xs: 0.8rem;
        --fz-sm: 0.875rem;     
        --fz-md: 1rem;       
        --fz-lg: 1.125rem;     
        --fz-xl: 1.25rem;
        --fz-xxl: 1.375rem;
        --fz-heading: 2.5rem;

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
        /* font-size: 62.5%; */
        scroll-behavior: smooth;
    }
    
    body {
        font-family: 'Roboto', sans-serif;
        font-size: var(--fz-md);
        font-weight: 600;
        min-height: 100vh;
        min-width: 300px;
        overflow-x: hidden;
    }

    main {
        max-width: 1160px;
        min-height: calc(100vh - 135px);
        margin: 0 auto;
        padding: 30px min(15px, 2vw);
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

    @media only screen and (max-width: 400px) {
        main {
            padding: 10px;
        }
    }
`

export default GlobalStyle;