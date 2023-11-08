import {Box, Container} from "@mui/system";
import React from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import Swipes from "@/Components/Utils/Slider";



const data: string[] = [

         '/assets/img/partners/aws.png',
         '/assets/img/partners/mission.png',
         '/assets/img/partners/nvidia.png',
    '/assets/img/partners/google.png',
    '/assets/img/partners/nass.png',
         '/assets/img/partners/startups.png',
         '/assets/img/partners/mircosoft.png',
]
const Empower : React.FC = () => {
    const isMobile : boolean = useMediaQuery('(max-width: 800px)')

    return (
        <>
            <Container maxWidth={'lg'} >
                <Box sx={{display:'flex', flexDirection:'column', p: isMobile ? 2 : 3, m: isMobile ? 2 : 4, gap:2, alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant={'h3'} className={'header'} >
                       Our Partners
                    </Typography>
                </Box>
                <Swipes logos={data}/>

            </Container>
        </>
    )
}

export default Empower;