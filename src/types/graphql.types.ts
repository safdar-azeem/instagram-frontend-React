import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IAuthData = {
  token: Scalars['String'];
};

export type IMutation = {
  findUsersByName?: Maybe<Array<Maybe<IUser>>>;
  followOrUnfollowUser?: Maybe<Scalars['Boolean']>;
  login?: Maybe<IAuthData>;
  register?: Maybe<IRegisterResponse>;
  updateProfile?: Maybe<Scalars['Boolean']>;
};


export type IMutationFindUsersByNameArgs = {
  name: Scalars['String'];
};


export type IMutationFollowOrUnfollowUserArgs = {
  userId: Scalars['ID'];
};


export type IMutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationRegisterArgs = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};


export type IMutationUpdateProfileArgs = {
  avatar?: InputMaybe<Scalars['String']>;
  bio?: InputMaybe<Scalars['String']>;
  cover?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['String']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  profession?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type IQuery = {
  getUserById?: Maybe<IUser>;
  me?: Maybe<IUser>;
};


export type IQueryGetUserByIdArgs = {
  id: Scalars['ID'];
};

export type IRegisterInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  password: Scalars['String'];
};

export type IRegisterResponse = {
  message: Scalars['String'];
};

export type IUser = {
  avatar?: Maybe<Scalars['String']>;
  bio?: Maybe<Scalars['String']>;
  cover?: Maybe<Scalars['String']>;
  dateCreated?: Maybe<Scalars['String']>;
  dateOfBirth?: Maybe<Scalars['String']>;
  followers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  following?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id: Scalars['ID'];
  isVerified?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  posts?: Maybe<Array<Maybe<Scalars['ID']>>>;
  totalMessages?: Maybe<Scalars['Int']>;
  totalNotifications?: Maybe<Scalars['Int']>;
  website?: Maybe<Scalars['String']>;
};

export type IUserFragment = { id: string, name: string, avatar?: string | null, location?: string | null, website?: string | null, cover?: string | null, bio?: string | null, dateOfBirth?: string | null, dateCreated?: string | null, followers?: Array<string | null> | null, following?: Array<string | null> | null, posts?: Array<string | null> | null, totalNotifications?: number | null, totalMessages?: number | null, isVerified?: boolean | null };

export type ILoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type ILoginMutation = { login?: { token: string } | null };

export type IRegisterMutationVariables = Exact<{
  name: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type IRegisterMutation = { register?: { message: string } | null };

export type IMeQueryVariables = Exact<{ [key: string]: never; }>;


export type IMeQuery = { me?: { id: string, name: string, avatar?: string | null, location?: string | null, website?: string | null, cover?: string | null, bio?: string | null, dateOfBirth?: string | null, dateCreated?: string | null, followers?: Array<string | null> | null, following?: Array<string | null> | null, posts?: Array<string | null> | null, totalNotifications?: number | null, totalMessages?: number | null, isVerified?: boolean | null } | null };

export const UserFragmentDoc = gql`
    fragment user on User {
  id
  name
  avatar
  location
  website
  cover
  bio
  dateOfBirth
  dateCreated
  followers
  following
  posts
  totalNotifications
  totalMessages
  isVerified
}
    `;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  }
}
    `;
export type ILoginMutationFn = Apollo.MutationFunction<ILoginMutation, ILoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<ILoginMutation, ILoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ILoginMutation, ILoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<ILoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<ILoginMutation, ILoginMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($name: String!, $email: String!, $password: String!) {
  register(name: $name, email: $email, password: $password) {
    message
  }
}
    `;
export type IRegisterMutationFn = Apollo.MutationFunction<IRegisterMutation, IRegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      name: // value for 'name'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<IRegisterMutation, IRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<IRegisterMutation, IRegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<IRegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<IRegisterMutation, IRegisterMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    ...user
  }
}
    ${UserFragmentDoc}`;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<IMeQuery, IMeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IMeQuery, IMeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IMeQuery, IMeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IMeQuery, IMeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<IMeQuery, IMeQueryVariables>;