import gql from "graphql-tag";

export const GET_SHOWS = gql`
  query GetShows($date: String) {
    response: GetShows(date: $date) {
      id
      galleryName
      time
      date
    }
  }
`;
