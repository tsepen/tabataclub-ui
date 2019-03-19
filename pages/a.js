import React from 'react';
import { connect } from 'react-redux';

const A = ({ login }) => {
  return <div>a</div>;
};

const mapStateToProps = state => ({
  login: state.me.login
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(A);
