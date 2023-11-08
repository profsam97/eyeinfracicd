import {Box, Container} from "@mui/system";
import React, {useContext} from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import Button from "@mui/material/Button";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Rows from "@/Components/Utils/Rows";
import ContextApi from "@/Content/ContextApi";


interface IData {
    title: string,
    description: string,
    logo: string,
    className: string
}

const data: IData[] = [
    {
        title: 'Reader',
        description: 'Read PDF and Documents, scrolls the text as your convenience.',
        logo: 'reader',
        className: 'reader'
    },
    {
        title: 'Describe Scene',
        description: 'Get a description of the current view. Take a look around you.',
        logo: 'describe',
        className:'describe'
    },
    {
        title: 'Find Objects',
        description: 'Identify well known items and find their location.',
        logo: 'find',
        className: 'find'
    },
    {
        title: 'Navigation',
        description: 'Easily navigate outside and distinguish distant object.',
        className:'navigate',
        logo: 'navigate',
    },
    {
        title: 'Smart Guidance',
        description: 'Accurately captures text in one go including handwriting.',
        logo: 'smart',
        className: 'smart'
    },
    {
        title: 'Community Support',
        description: 'Join the worldwide network of like-minded people to receive assistance.',
        logo: 'community',
        className: 'community'
    },
]
const Empower : React.FC = () => {
    const isMobile : boolean = useMediaQuery('(max-width: 800px)')
    const darkMode : boolean = useContext(ContextApi).darkMode;
    return (
            <>
            <Container maxWidth={'xl'}>
                    <Box sx={{display:'flex', flexDirection:'column', p: isMobile ? 2 : 6, m: isMobile ? 2 : 7, gap:10, alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant={'h3'} className={'header'}>
                        On a mission to Empower visually impaired
                    </Typography>
                        <Grid container spacing={ {lg: 5, md:4}} >
                            {data.map(({title, className, logo, description}, index) => (
                                <Grid key={index} item xs={12} sm={6} lg={4}>
                                <Rows description={description} title={title} logo={logo} className={className}/>
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 'auto'}}>
                            <Button sx={{color: darkMode ? '#ffffff' : '#ffffff', background: darkMode ? '#000000'  : '#000000'}}   className={'buttonClass'} centerRipple={true} size={'large'} startIcon={<SportsEsportsIcon/>} variant={'contained'}>
                                Download on Playstore
                            </Button>
                        </Box>
                    </Box>

            </Container>
            </>
        )
}

export default Empower;