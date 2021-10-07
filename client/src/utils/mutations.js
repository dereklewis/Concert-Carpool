import { gql } from "@apollo/client";

export const ADD_PROFILE = gql`
  mutation addProfile(
    $name: String!
    $email: String!
    $password: String!
    $city: String!
    $neighborhood: String!
    $aboutme: String!
  ) {
    addProfile(
      name: $name
      email: $email
      password: $password
      city: $city
      neighborhood: $neighborhood
      aboutme: $aboutme
    ) {
      token
      profile {
        _id
        name
        email
        password
        city
        neighborhood
        aboutme
      }
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      profile {
        _id
        name
      }
    }
  }
`;
