import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/system/Stack';
import Button from '@mui/material/Button';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import {useContext, useEffect, useState} from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import ContextApi from "@/Content/ContextApi";
const Hero : React.FC = () => {
    const images : string[] = ['https://eyecan.in/wp-content/uploads/2022/10/1-SM326114.jpeg', 'https://eyecan.in/wp-content/uploads/2022/10/1-SM326115.jpeg', 'https://eyecan.in/wp-content/uploads/2022/10/2-SM606692-1.jpeg', 'https://eyecan.in/wp-content/uploads/2022/10/1-SM5176961.jpeg']
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile : boolean = useMediaQuery('(max-width: 600px)')
    useEffect(() => {
            const timeoutInterval = setInterval(() => {
                    setCurrentIndex((currentIndex + 1) % images.length);
            },3000)

            return () => clearInterval(timeoutInterval)
    },[currentIndex])
    const darkMode : boolean = useContext(ContextApi).darkMode;
    return (
        <Box className={currentIndex === 3 ? 'heroWhite' : 'hero'} sx={{backgroundImage: `url(${images[currentIndex]})`}}>
                <Container maxWidth={'lg'} >
                    <Box sx={{display: 'flex', flexDirection: 'column', color: '#fff', gap:4, maxWidth:600}}>
                    <Typography variant='h2' sx={{marginTop: 20}}>
                    On A Mission To Go Beyond Sight
                    </Typography>
                    <Typography variant='h6' className={'grey'} sx={{fontWeight: 400}}>
                   <b> Eyecan </b>– An App that makes it easier for visually challenged people to go with their everyday tasks.
                    </Typography>

                    <Stack direction={isMobile ? 'column' : 'row'} spacing={2}>
                    <Button color={"primary"} sx={{ color: darkMode ? '#ffffff' : '#ffffff', background: darkMode ? '#000000'  : '#000000', borderRadius: '2%'}} fullWidth={true}  className={'buttonClass'} centerRipple={true} size={'large'} startIcon={<SportsEsportsIcon/>} variant={'contained'}>
                                Download on Playstore
                            </Button>

                            <Button  className={'outlinedButtonClass'} fullWidth={true}  sx={{color: currentIndex === 2 ? "#000" : "#fff" }} centerRipple={true} size={'large'} startIcon={<PlayCircleFilledWhiteIcon fontSize={'large'} />} variant={'outlined'}>
                                See What users say
                            </Button>
                    </Stack>
                    </Box>

                </Container>
        </Box>
    )

}

export default Hero;