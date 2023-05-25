import { PropsWithChildren } from "react";

import GlobalStyle from "@/styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";


const Layout = ({children}: PropsWithChildren) => {

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <h1>Layout</h1>
            {children}
        </ThemeProvider>
    )
}

export default Layout;