import React from 'react';
import { ListItem, ListItemText } from '@material-ui/core';

interface CommentProps {
  ownerName: string;
  content: string;
}

export const Comment = ({ ownerName, content }: CommentProps) => (
  <ListItem alignItems="flex-start">
    <ListItemText primary={ownerName} secondary={content} />
  </ListItem>
);
