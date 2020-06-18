import React from 'react';
import { makeStyles } from '@material-ui/core';

import { useQuery } from '@apollo/react-hooks';
import { Post } from './Post';
import { POSTS_QUERY } from '../graphql/PostGraphql';
import { PostSchema } from '../graphql/types';

const useStyles = makeStyles(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

export const PostsFeed = () => {
  const { loading, data } = useQuery(POSTS_QUERY);
  const classes = useStyles();

  if (loading) return <div>'Loading'</div>;

  return (
    <div className={classes.container}>
      {data.posts.map(({ id, ownerName, content, comments }: PostSchema) => (
        <Post
          key={id}
          ownerName={ownerName}
          content={content}
          comments={comments}
        />
      ))}
    </div>
  );
};
