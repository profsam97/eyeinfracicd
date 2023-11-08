import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from './MarkDown';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {CircularProgress} from "@mui/material";

interface MainProps {
  posts: string;
  isLoading: boolean;
  title: string;
}

export default function Main(props: MainProps) {
  const { posts, title , isLoading} = props;

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      {isLoading && <Typography align={'center'}><CircularProgress/></Typography> }
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
        <ReactMarkdown linkTarget="_blank"  className="markdown" key={''} remarkPlugins={[remarkGfm]}>
            {posts}
        </ReactMarkdown>
    </Grid>
  );
}