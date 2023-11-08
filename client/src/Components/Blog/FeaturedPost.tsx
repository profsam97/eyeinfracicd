import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {Button, CardActions, useMediaQuery} from '@mui/material';
import truncate, {getLocaltime} from '@/Helpers/helpers';
import {router} from "next/client";
import {useRouter} from "next/router";
import slug from 'slug';

interface FeaturedPostProps {
  post: {
    createdAt: Date;
    _id: number,
    description: string;
    image: string;
    title: string;
  };
}

const FeaturedPost : React.FC<FeaturedPostProps>= ({post}) => {
    const {createdAt,_id, image, description, title} = post;
  const router = useRouter();
  const isMobile : boolean = useMediaQuery('(max-width: 400px)');
  return (
        <Card>
        <CardMedia
            component="img"
            sx={{ width: '100%', height:'200px', display: { xs: 'none', sm: 'block' } }}
            image={post?.image === '' ? 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' : post.image}
            alt={''}
          />
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h4" variant="h6">
              {truncate(title, isMobile ? 14 :  20)}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              {getLocaltime(post?.createdAt)}
            </Typography>
            <Typography variant="subtitle1" paragraph sx={{minHeight: 100, maxHeight: 100}}>
              {truncate(post.description, 100)}
            </Typography>
          </CardContent>
            <CardActions>
                <Button size='small' variant="contained" className={'gift'} sx={{cursor: 'pointer', backgroundColor: '#EC9535'}} onClick={() => router.push('/blog/[post]', `/blog/${post._id}-${slug(post.title)}` )}>
                    readmore
                </Button>
            </CardActions>
        </Card>
  );
}
export default FeaturedPost