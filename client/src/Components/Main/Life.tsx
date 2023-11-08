import {Box, Container} from "@mui/system";
import React from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import Button from "@mui/material/Button";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Rows from "@/Components/Utils/Rows";
import LogoPlaceholder from "../Utils/LogoPlaceholder";


interface IData {
    logo: string,
}

const data : IData[] = [{
    logo : 'life1',
    }, 
    {
        logo: 'life2'
    },
     {
        logo : 'life3'
    },
    {
        logo: 'life4'
    }
]
const Empower : React.FC = () => {
    const isMobile : boolean = useMediaQuery('(max-width: 800px)')
    return (
        <>
            <Container maxWidth={'xl'}>
                <Box sx={{display:'flex', flexDirection:'column', p: isMobile ? 2 : 6, m: isMobile ? 2 : 4, gap:8, alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant={'h3'} className={'header'} >
                        Eyecan, A Companion For Life
                    </Typography>

                    <Typography variant={'body1'}  textAlign={'center'} >
                        Our app allows visually impaired people to describe what they see around them, as well as navigate freely indoors and outdoors. Find things around them and read PDFs, documents, images, and multiple languages.
                    </Typography>

                    <Grid container spacing={2} mt={3}> 
                    {data.map(({logo}, index) => (
                        <Grid item lg={3} md={6} xs={12} key={index}>
                            <LogoPlaceholder logo={logo}   />
                            </Grid>
                  ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default Empower;