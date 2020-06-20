import React from 'react';
import { shallow } from 'enzyme';
import { Collapse, CardContent, List, Divider } from '@material-ui/core';
import { Comments, CommentsProps } from '../../components/Comments';
import { Comment } from '../../components/Comment';

describe('<Comments />', () => {
  it('renders successfully', () => {
    const props: CommentsProps = {
      expanded: true,
      comments: [
        {
          id: 1,
          ownerName: 'test',
          content: 'content',
        },
        {
          id: 2,
          ownerName: 'test2',
          content: 'content2',
        },
      ],
    };
    const comments = shallow(<Comments {...props} />);
    const collapse = comments.find(Collapse);
    expect(collapse.length).toBe(1);

    const cardContent = collapse.find(CardContent);
    expect(cardContent.length).toBe(1);

    const list = cardContent.find(List);
    expect(list.length).toBe(1);

    
    expect(list.find(Comment).length).toBe(2);
    expect(list.find(Divider).length).toBe(2);
  });
});
