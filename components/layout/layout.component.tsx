import { PropsWithChildren } from "react";

import GlobalStyle from "@/styles/globals";
import { ThemeProvider } from "styled-components";
import theme from "@/styles/theme";

import Header from "../header/header.component";


const Layout = ({children}: PropsWithChildren) => {

    return(
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            {children}
        </ThemeProvider>
    )
}

export default Layout;