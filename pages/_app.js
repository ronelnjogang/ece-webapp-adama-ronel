import "bootstrap/dist/css/bootstrap.css"
import "../styles/style.css"
import Layout from "../components/layout"
import { ThemeProvider } from "next-themes";
import { MyThemeContextProvider } from "./themeSwitch.tsx";


import '../styles/globals.css'

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (

    <MyThemeContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MyThemeContextProvider>

  )

}

export default MyApp
