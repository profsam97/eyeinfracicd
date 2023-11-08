import {Box, Container} from "@mui/system";
import Header from "./Header";
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import {CircularProgress, Grid, Typography} from "@mui/material";
import Sidebar from "./Sidebar";
import Main from "./Main";
import React, {useContext} from "react";
import Nav from '../Layouts/Header'
import Footer from "@/Components/Layouts/Footer";
import ContextApi from "@/Content/ContextApi";
import {createTheme, ThemeProvider} from "@mui/material/styles";
import Head from "next/head";
import Paper from "@mui/material/Paper";
interface IPost {
    title: string,
    description: string,
    isLoading: boolean
}
const sidebar = {
    title: 'About',
    description:
      'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
    archives: [
      { title: 'March 2020', url: '#' },
      { title: 'February 2020', url: '#' },
      { title: 'January 2020', url: '#' },
      { title: 'November 1999', url: '#' },
      { title: 'October 1999', url: '#' },
      { title: 'September 1999', url: '#' },
      { title: 'August 1999', url: '#' },
      { title: 'July 1999', url: '#' },
      { title: 'June 1999', url: '#' },
      { title: 'May 1999', url: '#' },
      { title: 'April 1999', url: '#' },
    ],
    social: [
      { name: 'GitHub', icon: GitHubIcon },
      { name: 'Twitter', icon: TwitterIcon },
      { name: 'Facebook', icon: FacebookIcon },
    ],
  };
const BlogPost : React.FC<IPost> = ({title, description, isLoading}) => {
    const changeFont: boolean = useContext(ContextApi).changeFont;
    const darkMode: boolean = useContext(ContextApi).darkMode;

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
            <Paper elevation={0}>
                <Head>
                    <title>{title}</title>
                    <meta name="description" content={`Blog about ${title}`}/>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                    <link rel="icon" href="/favicon.ico"/>
                </Head>
                <Nav/>
                <Container maxWidth={'lg'}>
                    <Header/>
                    <Grid container spacing={5} sx={{mt: 3}}>
                            <Main isLoading={isLoading} title={title} posts={description}/>
                        <Sidebar
                            title={sidebar.title}
                            description={sidebar.description}
                            archives={sidebar.archives}
                            social={sidebar.social}
                        />
                    </Grid>
                </Container>
                <Footer/>
            </Paper>
        </ThemeProvider>
    )
}
export default BlogPost;