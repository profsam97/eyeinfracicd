import React from "react";
import {Box, Stack} from "@mui/system";
import Avatar from "@mui/material/Avatar";
import {Typography} from "@mui/material";

interface IRows {
    description: string,
    title: string,
    logo: string,
    className: string
}
const Rows : React.FC<IRows> = ({logo,title, description, className}) => {

    return (
        <Box sx={{display: 'flex', flexDirection: 'row', p:2}} >
            <Box  sx={{width:70, height: '100%', borderRadius: '50%', alignSelf:'center', p:2, backgroundColor: '#fff',
                boxShadow: '-1.216px 6.894px 15px 0px rgb(0 0 0 / 7%)',
                border: '3px solid #fff',}}>
                <Avatar className={'avatar'} variant={'square'} src={`/assets/img/${logo}.png`}></Avatar>
            </Box>
            <Stack spacing={1} mx={2}>
                <Typography variant={'h6'} className={className}>{title}</Typography>
                <Typography variant={'body1'} sx={{width:'100%'}}>{description}</Typography>
            </Stack>
        </Box>
    )

}

export default Rows;