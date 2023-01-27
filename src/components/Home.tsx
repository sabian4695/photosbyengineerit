import React from 'react';
import Grow from '@mui/material/Grow';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import logo from "../logo.png";
import Chip from "@mui/material/Chip";
import FamilyRestroomIcon from "@mui/icons-material/FamilyRestroom";
import FestivalIcon from "@mui/icons-material/Festival";
import WorkIcon from "@mui/icons-material/Work";
import CategoryIcon from "@mui/icons-material/Category";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import {useTheme} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {useRecoilState, useSetRecoilState} from "recoil";
import {currentPhoto, filterVal, lightboxOpen, photos} from "../recoil/atoms";
import {itemData} from "./allPhotos";
import engage0 from "../photos/engage0.jpeg";
import engage1 from "../photos/engage1.jpeg"
import baby0 from "../photos/baby0.jpeg"
import family12 from "../photos/family12.jpeg"
import pet0 from "../photos/pet0.jpeg"
import family7 from "../photos/family7.jpeg"
import food1 from "../photos/food1.jpeg"
import family14 from "../photos/family14.jpeg"
import Button from "@mui/material/Button";
import {Link as RouterLink} from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";
import CameraRollIcon from "@mui/icons-material/CameraRoll";

const headerPhotos = [
    {
        img: engage1,
        title: 'Engagement Photo',
        category: 'engagement',
    }, {
        img: baby0,
        title: 'Baby Photos',
        category: 'baby',
    }, {
        img: family12,
        title: 'Family Photos',
        category: 'family',
    }, {
        img: family7,
        title: 'Family Portraits',
        category: 'family',
    }
]

const middlePhotos = [
    {
        img: engage0,
        title: 'Engagement Photo',
        category: 'engagement',
    }, {
        img: pet0,
        title: 'Pet Photos',
        category: 'pet',
    }, {
        img: food1,
        title: 'Product Photos',
        category: 'product',
    }, {
        img: family14,
        title: 'Family  Photos',
        category: 'family',
    }
]

export default function Gallery() {
    const theme = useTheme();
    const small = useMediaQuery(theme.breakpoints.up('sm'));
    const setOpenModal = useSetRecoilState(lightboxOpen)
    const setCurPhoto = useSetRecoilState(currentPhoto)
    const [filtVal, setFiltValue] = useRecoilState(filterVal)
    const [photosList, setPhotosList] = useRecoilState(photos)
    function chipClick(title: string) {
        setFiltValue(title)
        setOpenModal(true)
    }
    React.useEffect(() => {
        document.title = 'Jacob Brown Photos - Canal Winchester, Ohio Photographer';
    }, []);
    React.useEffect(() => {
        if(filtVal !== '') {
            let shuffled = itemData
                .map(value => ({value, sort: Math.random()}))
                .sort((a, b) => a.sort - b.sort)
                .map(({value}) => value)
                .filter(x => x.category === filtVal)
            setPhotosList(shuffled)
        } else {
            let shuffled = itemData
                .map(value => ({value, sort: Math.random()}))
                .sort((a, b) => a.sort - b.sort)
                .map(({value}) => value)
            setPhotosList(shuffled)
        }
        setCurPhoto(0)
    }, [filtVal])
    return (
        <>
            <Grid container spacing={2} sx={{
                m:1,
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
            }}>
                <Grid xs={12} sx={{display:'flex', justifyContent:'center'}}>
                    <img
                        height='100'
                        src={logo}
                        srcSet={`${logo}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        alt='logo'
                        loading="lazy"
                    />
                </Grid>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '100', letterSpacing: 10}}
                        variant={small ? 'h3' : 'h5'}
                        color='text.secondary'
                    >
                        Jacob Brown Photos
                    </Typography>
                </Grid>
            </Grid>
            <Grid container sx={{
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
            }}>
                <Grid xs={12}>
                    <ImageList sx={{ width: '100%'}} cols={small ? 2 : 1} variant="masonry">
                        {/*//@ts-ignore*/}
                        {headerPhotos.map((item, index) => (
                            <Grow
                                in={true}
                                {...({ timeout: 1000 })}
                                key={item.title}
                            >
                                <ImageListItem key={item.title}>
                                    <img
                                        src={`${item.img}`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </Grow>
                        ))}
                    </ImageList>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
            }}>
                <Grid xs={12}>
                    <Typography
                        sx={{ fontWeight: '200'}}
                        variant={small ? 'h3' : 'h4'}
                        color='text.secondary'
                    >
                        Canal Winchester, Ohio Photographer
                    </Typography>
                </Grid>
                <Grid container direction='row' spacing={1} sx={{display:'flex', justifyContent:'center'}}>
                    <Grid xs='auto'>
                        <Chip
                            onClick={() => chipClick('headshot')}
                            clickable
                            variant='filled'
                            color='secondary'
                            label="professional headshots"
                            icon={<WorkIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            onClick={() => chipClick('family')}
                            clickable
                            variant='filled'
                            color='secondary'
                            label="family photos"
                            icon={<FamilyRestroomIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            variant='filled'
                            color='secondary'
                            label="weddings / events"
                            icon={<FestivalIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            onClick={() => chipClick('product')}
                            clickable
                            variant='filled'
                            color='secondary'
                            label="product photos"
                            icon={<CategoryIcon />}/>
                    </Grid>
                    <Grid xs='auto'>
                        <Chip
                            onClick={() => chipClick('general')}
                            clickable
                            variant='filled'
                            color='secondary'
                            label="Other - let's talk!"
                            icon={<BlurOnIcon />}/>
                    </Grid>
                </Grid>
                <Grid xs={12} spacing={3} sx={small ? {mx:20} : {mx:1}}>
                    <Grid>
                        <Typography
                            sx={{ fontWeight: '300'}}
                            variant='body1'
                            color='text.primary'
                        >
                            Jacob Brown Photos is a Canal Winchester, Ohio Photographer specializing in professional headshots, family photos, and product photos.
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography
                            sx={{ fontWeight: '100', fontStyle: 'italic'}}
                            variant='body2'
                            color='text.secondary'
                        >
                            Create photos that capture an experience. Look back and feel that moment.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container spacing={2} sx={{
                textAlign:'center',
                display:'flex',
                justifyContent:'center',
                mb:1
            }}>
                <Grid xs={12}>
                    <ImageList sx={{ width: '100%'}} cols={small ? 2 : 1} variant="masonry">
                        {/*//@ts-ignore*/}
                        {middlePhotos.map((item, index) => (
                            <Grow
                                in={true}
                                {...({ timeout: 1000 })}
                                key={item.title}
                            >
                                <ImageListItem key={item.title}>
                                    <img
                                        src={`${item.img}`}
                                        srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                        alt={item.title}
                                        loading="lazy"
                                    />
                                </ImageListItem>
                            </Grow>
                        ))}
                    </ImageList>
                </Grid>
                <Grid xs={12} sx={small ? {mx:17} : {mx:1}}>
                    <Typography
                        sx={{ fontWeight: '200'}}
                        variant='body1'
                    >
                        Jacob Brown Photos is owned and operated by Jacob Brown, working mainly out of the
                        historic downtown Canal Winchester, Pickerington, Caroll, and surrounding areas.
                    </Typography>
                </Grid>
                <Grid xs='auto'>
                    <Button sx={{mx:1}} variant='contained' component={RouterLink} to="about" startIcon={<InfoIcon />}>
                        Learn More
                    </Button>
                </Grid>
                <Grid xs='auto'>
                    <Button sx={{mx:1}} variant='contained' component={RouterLink} to="gallery" startIcon={<CameraRollIcon />}>
                        See More
                    </Button>
                </Grid>
            </Grid>
            <Grid xs={12}>
                <Grow
                    in={true}
                    {...({ timeout: 2000 })}
                >
                    <Paper sx={{p:'1', textAlign:'center', height:'100%'}} elevation={0}>
                        <Typography variant='caption' color='text.secondary'>website made by &copy; 2023 Jacob Brown Photos</Typography>
                    </Paper>
                </Grow>
            </Grid>
        </>
    )
}