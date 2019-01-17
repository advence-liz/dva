import React from 'react';
import { connect } from 'dva';

const Example = ({ example }) => {
  return <div>Example{example.name}</div>;
};

Example.propTypes = {};

export default connect(({ example }) => ({
  example,
}))(Example);
