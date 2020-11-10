import gql from 'graphql-tag';

export const AllProductsQuery = gql`
  {
    listAllProducts {
      _id
      image
      name
      description
      price
      rating
    }
  }
`;
