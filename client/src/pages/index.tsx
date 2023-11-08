import Head from 'next/head'
import Footer from "@/Components/Layouts/Footer";
import Header from "@/Components/Layouts/Header";
import Empower from "@/Components/Main/Empower";
import Impact from "@/Components/Main/Impact";
import Partners from "@/Components/Main/Partners";
import Swipes from "@/Components/Utils/Slider";
import React, {useContext, useEffect} from "react";
import Care from "@/Components/Main/Care";
import {Box} from "@mui/system";
import Life from "@/Components/Main/Life";
import Hero from '@/Components/Main/Hero';
import Paper from '@mui/material/Paper';
import ContextApi from "@/Content/ContextApi";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Accessibility from "@/Components/Utils/Accessibility";


export default function Home() {
    const {changeFont,  darkMode, darkNumber, lightNumber}  = useContext(ContextApi);

    const customTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            contrastThreshold: 5
        },
        typography: {
            fontFamily: changeFont ? "Open Sans" : "Montserrat",
            fontWeightBold: 700,
            fontWeightLight: 400,
            fontWeightRegular: lightNumber,
            fontWeightMedium: darkNumber,
        },
    });
  return (
      <ThemeProvider theme={customTheme}>
    <Paper elevation={0}>
      <Head>
        <title>Eyecan - Empowering life through A.I</title>
        <meta name="description" content="Largest EyeCare In india " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Header/>
        <Hero/>
        <Life/>
      <Empower/>
      <Care/>
        <Impact/>
        <Partners/>
        <Footer/>
    </Paper>
          <Accessibility/>
      </ThemeProvider>
  )
}
