import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  updateProject?: Maybe<Project>;
  deleteProject: Scalars['Boolean'];
  creatUser: User;
};

export type MutationCreateProjectArgs = {
  payload: ProjectInput;
};

export type MutationUpdateProjectArgs = {
  payload: ProjectInput;
  id: Scalars['Float'];
};

export type MutationDeleteProjectArgs = {
  id: Scalars['Float'];
};

export type MutationCreatUserArgs = {
  payload: UserInput;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  URL: Scalars['String'];
  images: Scalars['String'];
};

export type ProjectInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  URL: Scalars['String'];
  images: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  projects: Array<Project>;
  project?: Maybe<Project>;
  users: Array<User>;
  user?: Maybe<User>;
  me?: Maybe<User>;
  logout: Scalars['Boolean'];
  login: User;
};

export type QueryProjectArgs = {
  id: Scalars['Float'];
};

export type QueryUserArgs = {
  id: Scalars['Float'];
};

export type QueryLoginArgs = {
  payload: UserInput;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Float'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  userName: Scalars['String'];
};

export type UserInput = {
  userName: Scalars['String'];
  password: Scalars['String'];
};

export type CreateProjectMutationMutationVariables = Exact<{
  createProjectPayload: ProjectInput;
}>;

export type CreateProjectMutationMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: number, title: string, description: string, URL: string, images: string } };

export type AllProjectsQueryVariables = Exact<{ [key: string]: never; }>;

export type AllProjectsQuery = { __typename?: 'Query', projects: Array<{ __typename?: 'Project', id: number, title: string, description: string, URL: string, images: string }> };

export const CreateProjectMutationDocument = gql`
    mutation CreateProjectMutation($createProjectPayload: ProjectInput!) {
  createProject(payload: $createProjectPayload) {
    id
    title
    description
    URL
    images
  }
}
    `;
export type CreateProjectMutationMutationFn = Apollo.MutationFunction<CreateProjectMutationMutation, CreateProjectMutationMutationVariables>;

/**
 * __useCreateProjectMutationMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutationMutation, { data, loading, error }] = useCreateProjectMutationMutation({
 *   variables: {
 *      createProjectPayload: // value for 'createProjectPayload'
 *   },
 * });
 */
export function useCreateProjectMutationMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutationMutation, CreateProjectMutationMutationVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useMutation<CreateProjectMutationMutation, CreateProjectMutationMutationVariables>(CreateProjectMutationDocument, options);
}
export type CreateProjectMutationMutationHookResult = ReturnType<typeof useCreateProjectMutationMutation>;
export type CreateProjectMutationMutationResult = Apollo.MutationResult<CreateProjectMutationMutation>;
export type CreateProjectMutationMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutationMutation, CreateProjectMutationMutationVariables>;
export const AllProjectsDocument = gql`
    query allProjects {
  projects {
    id
    title
    description
    URL
    images
  }
}
    `;

/**
 * __useAllProjectsQuery__
 *
 * To run a query within a React component, call `useAllProjectsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProjectsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProjectsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllProjectsQuery(baseOptions?: Apollo.QueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
}
export function useAllProjectsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProjectsQuery, AllProjectsQueryVariables>) {
  const options = { ...defaultOptions, ...baseOptions };
  return Apollo.useLazyQuery<AllProjectsQuery, AllProjectsQueryVariables>(AllProjectsDocument, options);
}
export type AllProjectsQueryHookResult = ReturnType<typeof useAllProjectsQuery>;
export type AllProjectsLazyQueryHookResult = ReturnType<typeof useAllProjectsLazyQuery>;
export type AllProjectsQueryResult = Apollo.QueryResult<AllProjectsQuery, AllProjectsQueryVariables>;
