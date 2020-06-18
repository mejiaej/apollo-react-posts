import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  makeStyles,
  Theme,
  CardHeader,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { CommentSchema } from '../graphql/types';
import { Comments } from './Comments';

interface PostProps {
  content: string;
  ownerName: string;
  comments: CommentSchema[];
}

interface Expanded {
  expanded: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  card: {
    maxWidth: 500,
    marginTop: theme.spacing(5),
  },
  expand: ({ expanded }: Expanded) => ({
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }),
}));

export const Post = ({ content, ownerName, comments }: PostProps) => {
  const [expanded, setExpanded] = useState(false);
  const classes = useStyles({ expanded });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={ownerName} />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          className={classes.expand}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Comments comments={comments} expanded={expanded} />
    </Card>
  );
};
