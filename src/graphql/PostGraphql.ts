import { gql } from 'apollo-boost';

export const POSTS_QUERY = gql`
  {
    posts {
      id
      ownerName
      content
      comments {
        id
        content
        ownerName
      }
    }
  }
`;
