import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import RedeemIcon from '@mui/icons-material/Redeem';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {useMediaQuery} from "@mui/material";
import {useRouter} from "next/router";
import {useContext} from "react";
import ContextApi from "@/Content/ContextApi";
const pages = ['Home', 'About Us'];
const impacts = ['Financial Impact', 'Community'];

const Header : React.FC = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (home : string) => {
        setAnchorElNav(null);
        if (home === 'home') return
        router.push('/')
    };

    const pathName = (name : string) : boolean =>  router.pathname.includes(name)
    const isHome = () : boolean => {
         if(router.pathname === '/') return  true
        return false
    }
    const darkMode : boolean = useContext(ContextApi).darkMode;

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const isMobile : boolean = useMediaQuery('(max-width: 600px)')
    const isSmall : boolean = useMediaQuery('(max-width: 400px)');
    const router =  useRouter();
    return (
        <AppBar position="sticky"  className={'nav'} sx={{backgroundColor: '#000000', minWidth: '100vw'}}>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    <img  onClick={() => router.push('/')} src={'/assets/img/logo.png  '} width={ isMobile ?   isSmall ? '50px' : '100px' : '200px'} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            flexGrow:0.5
                        }}
                    >
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={() => handleCloseNavMenu('false')}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page, index) => (
                                <MenuItem key={page} onClick={() => handleCloseNavMenu('false')}>
                                    <Typography className={index === 0 ? isHome() ? 'active' : '' : ''} textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem  onClick={() => handleCloseNavMenu('false')}>
                                <Box sx={{ flexGrow: 0 }}>
                                    Our Impact
                                    <Menu
                                        sx={{ mt: '45px' }}
                                        id="menu-appbar"
                                        anchorEl={anchorElUser}
                                        anchorOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'right',
                                        }}
                                        open={Boolean(anchorElUser)}
                                        onClose={handleCloseUserMenu}
                                    >
                                        {impacts.map((impact) => (
                                            <MenuItem key={impact} onClick={handleCloseUserMenu}>
                                                <Typography textAlign="center">{impact}</Typography>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                            </MenuItem>
                            <MenuItem  onClick={() => handleCloseNavMenu('home')}>
                                <Typography  className={pathName('blog') ? 'active' : ''} textAlign="center" onClick={() => router.push('/blog')} >  Media </Typography>
                            </MenuItem>
                            <MenuItem  onClick={() => handleCloseNavMenu('false')}>
                                <Typography textAlign="center">Contact Us</Typography>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none', mr: 2 }}}>
                        <Button startIcon={<RedeemIcon/>} onClick={() => router.push('/dash') }className={'gift'} sx={{ backgroundColor: '#EC9535', borderRadius:'30px'}} variant={"contained"} >
                            Gift A Subscription
                        </Button>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page, index) => (
                            <Button
                                key={page}
                                className={index === 0 ? isHome() ? 'pageHoverActive' : 'pageHover' : 'pageHover'}
                                onClick={() => handleCloseNavMenu('false')}
                                sx={{ my: 2, color:  'white', display: 'block' }}
                            >
                                {page}
                            </Button>
                        ))}
                        <MenuItem  >
                            <Box sx={{ flexGrow: 0 }}  >

                               <Typography  sx={{color: darkMode ? '#ffffff' : '#ffffff'}}  variant={'subtitle1'}  className={'pageHover'}> Our Impact  <Tooltip title="Open Impact">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <ArrowDropDownIcon sx={{color: '#fff'}}/>
                                    </IconButton>
                                </Tooltip>
                               </Typography>
                                <Menu
                                    sx={{ mt: '45px' }}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    className={'pageHover'}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {impacts.map((impact) => (
                                        <MenuItem  key={impact} onClick={handleCloseUserMenu}>
                                            <Typography textAlign="center">{impact}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </MenuItem>
                        <MenuItem sx={{color: darkMode ? '#ffffff' : '#ffffff'}} onClick={() => handleCloseNavMenu('home')}       className={'pageHover'}>
                            <Typography textAlign="center" className={pathName('blog') ? 'active' : ''} onClick={() => router.push('/blog')}> Media </Typography>
                        </MenuItem>
                        <MenuItem  sx={{flexGrow: 0.5,color: darkMode ? '#ffffff' : '#ffffff'}} onClick={() => handleCloseNavMenu('false')}       className={'pageHover'}>
                            <Typography textAlign="center">Contact Us</Typography>
                        </MenuItem>

                        <Box sx={{ flexGrow: 0,my:2 }}>
                            <Button startIcon={<RedeemIcon/>} onClick={() => router.push('/dash')} className={'gift'} sx={{ backgroundColor: '#EC9535', borderRadius:'30px'}} variant={"contained"} >
                                Gift A Subscription
                            </Button>
                        </Box>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
