import React from 'react';
import { shallow } from 'enzyme';
import { ListItem, ListItemText } from '@material-ui/core';
import { Comment, CommentProps } from '../../components/Comment';

describe('<Comment />', () => {
  it('renders successfully', () => {
    const props: CommentProps = {
      ownerName: 'test',
      content: 'asd',
    };
    const comment = shallow(<Comment {...props} />);
    const listItem = comment.find(ListItem);
    expect(listItem.length).toBe(1);
    expect(listItem.prop('alignItems')).toBe('flex-start');

    const listItemText = listItem.find(ListItemText);
    expect(listItemText.length).toBe(1);
    expect(listItemText.prop('primary')).toBe(props.ownerName);
    expect(listItemText.prop('secondary')).toBe(props.content);
  });
});
