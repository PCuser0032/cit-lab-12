import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

const reposQuery = gql`
  query {
    viewer {
      id
      login
      repositories(first: 100) {
        nodes {
          id
          name
          url
        }
      }
    }
  }
`;
const Repos = () => (
  <Query query={reposQuery}>
    {({ loading, error, data }) => {
      if (loading)
        return (
          <div className="spinner-grow" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        );
      if (error)
        return (
          <div className="ms-4">
            <h3 id="error">
              <span className="text-decoration-underline">
                You not authorized.
              </span>{" "}
              Please enter your github access token
            </h3>
          </div>
        );

      return (
        <div id="personal-repos">
          <div className="ms-4">
            <h3>You come as {data.viewer.login}, your repositories:</h3>
          </div>
          {data.viewer.repositories.nodes.map((repo) => {
            return (
              <div className="card w-50 shadow p-4 mt-5 ms-4" key={repo.id}>
                <div>
                  <p className="fs-3">{repo.name}</p>{" "}
                </div>
                <div>
                  <a className="btn btn-primary" href={repo.url}>
                    {repo.url}
                  </a>
                </div>
                <div className="mt-4">
                  <Link
                    className="btn btn-outline-secondary"
                    to={"/repo/" + repo.name}
                  >
                    Check information
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      );
    }}
  </Query>
);

export default Repos;
