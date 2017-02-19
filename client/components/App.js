import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/actionCreators';
import Main from './Main';

function mapStateToProps(state) {
  return {
    posts: state.posts,
    comments: state.comments
  }
}

function mapDispachToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

// this takes the posts/comments and the actions from the action creators
// and surfaces the data and functions via props in our component
const App = connect(mapStateToProps, mapDispachToProps)(Main);

export default App;
