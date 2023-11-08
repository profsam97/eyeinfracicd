import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import CountUp from 'react-countup';

const tiers = [
    {
        title: 'Happy Users',
        price: 8950,
        description: [
            'We have over 8,950 happy users and counting',
            'Come join us.'
        ],
        buttonText: 'Sign up for free',
        buttonVariant: 'outlined',
    },
    {
        title: 'Support Given',
        subheader: 'Most popular',
        price: 5896,
        description: [
            'Impact the lives of ',
            'virtually Impaired ',
            'for as little as',
            'Rs.3/day',
        ],
        buttonText: 'Give now',
        buttonVariant: 'contained',
    },
    {
        title: 'Partnerships',
        price: 20,
        description: [
            'We have over ',
            '20 Partnerships',
            'With global industries',
        ],
        buttonText: 'Contact us',
        buttonVariant: 'outlined',
    },
];


const Impact : React.FC = () => {
    return (
        <React.Fragment>
            <GlobalStyles styles={{  ul: { margin: 0, padding: 0, listStyle: 'none', mb:4 } }} />
            <CssBaseline />
            {/* Hero unit */}
            <Box sx={{mb:7, mt:0}}>
            <Container disableGutters maxWidth="md" component="main" sx={{ pt: 8, pb: 6 }}>
                <Typography
                    component="h1"
                    variant="h2"
                    align="center"
                    color="text.primary"
                    gutterBottom
                >
                    Impact
                </Typography>
                <Typography variant="h5" align="center" color="text.secondary" component="p">
                    This figure is just a beginning as our family is constantly expanding.
                </Typography>
            </Container>
            {/* End hero unit */}
            <Container maxWidth="md" component="main">
                <Grid container spacing={5} alignItems="flex-end">
                    {tiers.map((tier, index) => (
                        // Enterprise card is full width at sm breakpoint
                        <Grid
                            item
                            key={tier.title}
                            xs={12}
                            sm={tier.title === 'Enterprise' ? 12 : 6}
                            md={4}
                        >
                            <Card>
                                <CardHeader
                                    title={tier.title}
                                    subheader={tier.subheader}
                                    titleTypographyProps={{ align: 'center' }}
                                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                                    subheaderTypographyProps={{
                                        align: 'center',
                                    }}
                                    sx={{
                                        backgroundColor: (theme) =>
                                            theme.palette.mode === 'light'
                                                ? theme.palette.grey[200]
                                                : theme.palette.grey[700],
                                    }}
                                />
                                <CardContent>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'baseline',
                                            mb: 2,
                                        }}
                                    >

                                        <Typography component="h2" variant="h3" color="text.primary">
                                            <CountUp
                                            start={0}
                                            end={tier.price}
                                            enableScrollSpy={true}
                                            scrollSpyDelay={0}
                                            suffix={"+"}
                                            duration={index === 2 ? 3 : 5}
                                            separator=","
                                            />
                                        </Typography>
                                    </Box>
                                    <ul>
                                        {tier.description.map((line) => (
                                            <Typography
                                                component="li"
                                                variant="subtitle1"
                                                align="center"
                                                key={line}
                                            >
                                                {line}
                                            </Typography>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardActions>
                                    <Button
                                        fullWidth
                                        variant={tier.buttonVariant as 'outlined' | 'contained'}
                                    >
                                        {tier.buttonText}
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            {/* Footer */}
            </Box>
            {/* End footer */}
        </React.Fragment>
    );
}

export default Impact;