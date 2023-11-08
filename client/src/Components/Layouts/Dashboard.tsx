import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import {ListItemIcon, Paper} from "@mui/material";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import {useRouter} from "next/router";
import Head from "next/head";
import Header from "@/Components/Layouts/Header";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useCallback} from "react";
const drawerWidth = 240;

interface IChild{
    children : React.ReactNode
}

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: '18vw',
            minWidth: '14vw',
            backgroundColor: '#EC9535',
            color: '#f8f3f3',
            boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);


const DashboardContent : React.FC<IChild> = ({children}) => {
    // console.log(message);
    const router = useRouter();
     const handlePath = useCallback((path: string) => {
        return  router.pathname === path
    },[router])
    // useEffect(()=> {
    //     if (!isLoggedin){
    //         router.push('/')
    //     }
    // },[isLoggedin, isUpdating])
    // const handleRoute= (item: string) => {
    //     router.push({
    //         pathname: item.name,
    //     }, undefined, {scroll: true})
    // }
    return (
        <>
            <Header/>
            <Box sx={{ display: 'flex', overflowY: 'hidden', maxWidth: 'auto' }} >
                <CssBaseline />
                <Drawer variant="permanent" sx={{backgroundColor: '#1E1F2D', color: '#E5E5E5' }} open>

                    <Divider />
                    <List component="nav" >
                        {menuItems.map((item, index) => (
                            <ListItemButton  onClick={() => router.push(item.path)} className={handlePath(item.path) ? 'reactive' : '' } key={index}>
                                <ListItemIcon sx={{minWidth: '30px'}}> {item.icon}  </ListItemIcon>
                                <ListItemText primary={item.text} />
                            </ListItemButton>
                        ))
                        }
                    </List>

                    <Divider sx={{mt:2, background: '#2D40B4'}}/>
                </Drawer>
                <Box
                    sx={{
                        minHeight: '90.4vh',
                        maxHeight: '91.3vh',
                        maxWidth: '80vw !important',
                        display: 'flex',
                        p:2
                    }}
                >

                    {children}
                </Box>
            </Box>
        </>
    );
}

const Dashboard : React.FC<IChild> = ({children}) => {
    return (
        <>
            <Head>
                <title>Plasma</title>
                <meta name="Welcome to Plasma" content="Plasma" />
                <link rel="icon" href="/favicon.png" />
            </Head>
            <DashboardContent > {children} </DashboardContent>
        </>
    );
}

export const menuItems = [
    {
        text: 'View',
        icon:  <VisibilityIcon/>,
        path: '/dash'
    },
    {
        text: 'Create',
        icon:  <AddCircleIcon/>,
        path: '/dash/create'
    },
]
export default Dashboard;