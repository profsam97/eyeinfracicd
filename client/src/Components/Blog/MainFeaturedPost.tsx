import * as React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { useRouter } from 'next/router';
import slug from "slug";
import Button from "@mui/material/Button";

interface MainFeaturedPostProps {
  post: {
    description: string;
    _id: number
    image: string;
    title: string;
    createdAt: Date
  };
}

const  MainFeaturedPost : React.FC<MainFeaturedPostProps> = ({post}) => {
  const router = useRouter();
    const handleRedirect = (id : number) => {
        router.push(`/blog/${id}`)
    }
  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.title}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.description}
            </Typography>
            <Button variant="contained" className={'gift'} sx={{cursor: 'pointer', backgroundColor: '#EC9535'}} onClick={() => router.push('/blog/[post]', `/blog/${post._id}-${slug(post.title)}` )}>
                Readmore
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}
export default MainFeaturedPost;