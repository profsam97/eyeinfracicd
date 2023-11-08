import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Main from './Main';
import { Stack } from '@mui/system';
import { Typography } from '@mui/material';
import  Nav from  '../Layouts/Header'
import Footer from "@/Components/Layouts/Footer";
import {useContext} from "react";
import ContextApi from "@/Content/ContextApi";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Head from "next/head";


interface IMain {
  createdAt: Date,
  title: string,
  _id: number,
  image: string,
  description: string,
}

interface IData {
  data: IMain[]
}

// const posts = [post1, post2, post3];




const Blog : React.FC<IData> = ({data}) => {
    const changeFont : boolean = useContext(ContextApi).changeFont;
    const darkMode : boolean = useContext(ContextApi).darkMode;

    const customTheme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            contrastThreshold: 5
        },
        typography: {
            fontFamily: changeFont ? "Quicksand" : "Montserrat",
            fontWeightBold: 700,
            fontWeightLight: 400,
            fontWeightRegular: 500,
            fontWeightMedium: 600,
        },
    });
  return (
      <ThemeProvider theme={customTheme}>
      <CssBaseline />
          <Head>
              <title>Eye Care </title>
              <meta name="description" content="Largest EyeCare In india " />
              <meta name="viewport" content="width=device-width, initial-scale=1" />
              <link rel="icon" href="/favicon.ico" />
          </Head>
      <Nav/>
      <Container maxWidth="lg">
        <Header  />
        <main>

          {data.length > 0 && <MainFeaturedPost post={data[0]} />}

          <Stack spacing={2} sx={{mb:5}} >
                <Typography variant='h6'>Recent Posts  </Typography>
              {data.length === 0 && <Typography variant='h6'>No Posts  </Typography>}
            <Grid container spacing={{xs: 2, md: 0}} >
              {data.length > 0 && data.map((post) => (
                  <Grid item xs={12}sx={{mr:2}} sm={6} md={4} lg={3} key={post.title}>
                    <FeaturedPost  post={post} />
                  </Grid>
              ))}
            </Grid>
          </Stack>
        </main>
      </Container>
    <Footer/>
      </ThemeProvider>
  );
}
export default Blog;