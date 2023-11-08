import {Box, Container} from "@mui/system";
import React from "react";
import {Grid, Typography, useMediaQuery} from "@mui/material";
import Button from "@mui/material/Button";
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Rows from "@/Components/Utils/Rows";
import Mansory from "@/Components/Utils/Mansory";


const Empower : React.FC = () => {
    const isMobile : boolean = useMediaQuery('(max-width: 800px)')
    return (
        <>
            <Container maxWidth={'lg'}>
                <Box sx={{display:'flex', flexDirection:'column', p: isMobile ? 2 : 6, m: isMobile ? 2 : 7, gap:10, alignItems: 'center', justifyContent: 'center'}}>
                    <Typography variant={'h3'} className={'header'} sx={{}}>
                        We Care for People and They Love Us
                    </Typography>
                </Box>
                <Mansory/>

            </Container>
        </>
    )
}

export default Empower;