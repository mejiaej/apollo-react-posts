import React, { Fragment } from 'react';
import { Collapse, CardContent, List, Divider } from '@material-ui/core';
import { CommentSchema } from '../graphql/types';
import { Comment } from './Comment';

interface CommentsProps {
  expanded: boolean;
  comments: CommentSchema[];
}
export const Comments = ({ expanded, comments }: CommentsProps) => {
  return (
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <List>
          {comments.map(({ id, content, ownerName }) => (
            <Fragment key={id}>
              <Comment ownerName={ownerName} content={content} />
              <Divider variant="inset" component="li" />
            </Fragment>
          ))}
        </List>
      </CardContent>
    </Collapse>
  );
};
