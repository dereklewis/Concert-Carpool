import { gql } from "@apollo/client";

export const QUERY_PROFILES = gql`
  query allProfiles {
    profiles {
      _id
      name
    }
  }
`;

export const QUERY_SINGLE_PROFILE = gql`
  query singleProfile($profileId: ID!) {
    profile(profileId: $profileId) {
      _id
      name
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      name
    }
  }
`;

export const QUERY_EVENTS = gql`
  query allEvents {
    events {
      _id
      eventName
    }
  }
`;

export const QUERY_SINGLE_EVENT = gql`
  query singleEvent($eventId: ID!) {
    event(eventId: $eventId) {
      _id
      eventName
    }
  }
`;
