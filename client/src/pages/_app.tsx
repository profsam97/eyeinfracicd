import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {createTheme, ThemeProvider} from "@mui/material/styles";
import {Provider} from "react-redux";
import Store from "@/store";
import {QueryClient, QueryClientProvider} from "react-query";
import React, {useContext, useEffect} from "react";
import {ReactQueryDevtools} from "react-query/devtools";
import Snackbar from "@/Components/Utils/Snackbar";
import MainModal from "@/Components/Utils/Modal";
import NextNProgress from 'nextjs-progressbar';
import Accessibility from "@/Components/Utils/Accessibility";
import ContextProvider from "@/Content/ContextProvider";
import ContextApi from "@/Content/ContextApi";

export default function App({ Component, pageProps }: AppProps) {
  const changeFont : boolean = useContext(ContextApi).changeFont;
  useEffect(() => {
    console.log('changed to' + changeFont)
  },[changeFont])


  const client = new QueryClient();
  return  (
      <QueryClientProvider client={client} >
      <Provider store={Store}>
        <ContextProvider>
      <NextNProgress/>
      <Component {...pageProps} />
          <Snackbar/>
          <MainModal/>

        </ContextProvider>
      </Provider>
        <ReactQueryDevtools position={'bottom-right'} initialIsOpen={true}/>
      </QueryClientProvider>
  )
}
