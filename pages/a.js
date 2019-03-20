import React from 'react';
import { connect } from 'react-redux';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

const A = ({ login, data: { loading, hi } }) => {
  if (loading) {
    return <div>Loading...</div>;
  }
  return <div>{hi}</div>;
};

const mapStateToProps = state => ({
  login: state.me.login
});

const hiQuery = gql`
  {
    hi
  }
`;

const mapDispatchToProps = {};

export default compose(
  graphql(hiQuery),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(A);
