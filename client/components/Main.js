import React from 'react';
import { Link } from 'react-router';

const Main = React.createClass({
  render() {
    return (
      <div>
        <h1>
          <Link to="/">Reduxstagram</Link>
        </h1>
        {/* .cloneElement passes down the props available in main to the first child */}
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
