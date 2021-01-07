import gql from 'graphql-tag';

export const productByIdQuery = gql`
  query($id: ID!){
    findProductById(id: $id) {
      _id
      name
      price
      sizes
      image
      colors {
        name
        Hex
      }
    }
  }
`
