import React, {useContext, useState} from "react";
import {Box, Stack} from "@mui/system";
import Button from "@mui/material/Button";
import {ListItemIcon, MenuList, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import {
    Cloud,
    ContentCopy,
    ContentCut,
    ContentPaste,
    DarkModeOutlined,
    FormatBold, FormatColorTextOutlined,
    LightModeOutlined
} from "@mui/icons-material";
import Divider from "@mui/material/Divider";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import FontDownloadIcon from '@mui/icons-material/FontDownload';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import ContextApi from "@/Content/ContextApi";
const Accessibility  : React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const {handleChangeFont, darkMode, handleDarkMode,handleReset, handleMakeDark,handleMakeLight  }= useContext(ContextApi);

    const onChangeFont = () => handleChangeFont();
    const onDarkMode = () => handleDarkMode();
    const onReset = () => handleReset();
    const onBold = () => handleMakeDark();

    const onLight = () => handleMakeLight();
    const handleToggle = () => {
        setIsOpen(prevState => !prevState)
    }
    const handleRedirect = () => {
        window.open('https://web.whatsapp.com', '_blank')
    }
    return (
        <Box>
        <div className="accessibility-menu">
            <Box sx={{display:'flex', flexDirection: 'row'}}>
                <Box className={'accessibility-menu__button-icon'} onClick={handleToggle}/>
                {isOpen && <Stack spacing={2} className={'access'} >
                        <Paper  sx={{ width: 220, maxWidth: '100%' }}>
                        <Typography align={'center'} variant={'h6'}> Accessibility Tools </Typography>
                        <MenuList>
                            <MenuItem onClick={onDarkMode}>
                                <ListItemIcon>

                                    {darkMode ? <LightModeOutlined fontSize={'small'}/>  : <DarkModeOutlined fontSize="small" /> }
                                </ListItemIcon>
                                <ListItemText  >{darkMode ? 'Light Mode' : 'Dark Mode'} </ListItemText>
                            </MenuItem>
                            <MenuItem onClick={onChangeFont}>
                                <ListItemIcon>
                                    <FontDownloadIcon  fontSize="small" />
                                </ListItemIcon>
                                <ListItemText >Change Font</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={onLight}>
                                <ListItemIcon>
                                    <FormatColorTextOutlined  fontSize="small" />
                                </ListItemIcon>
                                <ListItemText >Make Light</ListItemText>
                            </MenuItem>
                            <MenuItem onClick={onBold}>
                                <ListItemIcon>
                                    <FormatBold  fontSize="small" />
                                </ListItemIcon>
                                <ListItemText >Make Bold</ListItemText>
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={onReset}>
                                <ListItemIcon>
                                    <RestartAltIcon fontSize="small" />
                                </ListItemIcon>
                                <ListItemText >Reset</ListItemText>
                            </MenuItem>
                        </MenuList>
                        </Paper>
                    </Stack>
                }
            </Box>
        </div>
            <Button  onClick={handleRedirect} startIcon={<WhatsAppIcon/>} className={'whatapp'} sx={{backgroundColor: '#25d366', color : '#fff'}} variant={'contained'}>
                How can i help you
            </Button>
        </Box>
    )
}

export default Accessibility;