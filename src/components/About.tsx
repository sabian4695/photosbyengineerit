import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grow from '@mui/material/Grow';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import headshot0 from '../photos/headshot0.jpeg'
import Chip from '@mui/material/Chip';

export default function About() {
    return (
        <>
            <Grid container spacing={3} sx={{p:1}} alignItems='center' justifyContent='center'>
                <Grid xs={12} alignItems='center' justifyContent='center'>
                    <Grow
                        in={true}
                        {...({ timeout: 400 })}
                    >
                        <Card elevation={3} sx={{maxWidth: 400, borderRadius:'15px', alignSelf:'center', justifySelf:'center'}}>
                            <CardMedia
                                component="img"
                                image={headshot0}
                                title="headshot0"
                            />
                            <Grid xs={12}>
                                <Typography variant='h6' sx={{ fontWeight: '600'}} color='text.secondary'>
                                    Hi! My name is Jacob.
                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant='body1' color='text.secondary'>
                                    I've dabbled in photography for years
                                    as a hobby, but now I'm doing it part time.
                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant='body1' color='text.secondary'>
                                    I don't have a crazy portfolio or years of professional experience - but my rates reflect this.
                                </Typography>
                            </Grid>
                            <Grid xs={12}>
                                <Typography variant='body1' sx={{ fontWeight: '600'}} color='text.secondary'>
                                    locations:
                                </Typography>
                                <Chip label='Canal Winchester' sx={{mr:1}}/>
                                <Chip label='Pickerington'/>
                            </Grid>
                            <Grid xs={12}>
                                <Typography>
                                    Please contact me for inquiries!
                                </Typography>
                            </Grid>
                        </Card>
                    </Grow>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <Grow
                    in={true}
                    {...({ timeout: 2000 })}
                >
                    <Paper sx={{p:'1', textAlign:'center', height:'100%'}} elevation={0}>
                        <Typography variant='caption' color='text.secondary'>website made by Jacob Brown</Typography>
                    </Paper>
                </Grow>
            </Grid>
        </>
    )
}